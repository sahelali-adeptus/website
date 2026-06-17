<script>
  import { onMount } from "svelte";

  // ── DOM refs ──────────────────────────────────────────────────────────────
  let containerEl, sectionEl, panel0El, panel1El;
  let navFillEl, navIndicatorEl, navItem0El, navItem1El, dot0El, dot1El;

  // ── State ─────────────────────────────────────────────────────────────────
  let count          = 0;
  let counted        = false;
  let panel1Triggered = false;
  let rafId          = null;
  let targetProgress = 0;   // raw   [0, 1]
  let lerpProgress   = 0;   // smooth (lerped)

  const features = [
    { num: "01", icon: "🚀", title: "Business Efficiency",  desc: "Streamlining operations and maximizing productivity across your entire enterprise." },
    { num: "02", icon: "⚡", title: "Energy Optimization",  desc: "Smart energy management and cost reduction through intelligent monitoring." },
    { num: "03", icon: "📈", title: "Profitability",        desc: "Increasing revenue and driving sustainable growth with data-driven insights." },
  ];

  // ── Utilities ─────────────────────────────────────────────────────────────
  const clamp     = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const mapRange  = (v, a, b)   => clamp((v - a) / (b - a), 0, 1);
  const easeInOut = (t)         => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  const ease      = (v, a, b)   => easeInOut(mapRange(v, a, b));

  // ── Counter ───────────────────────────────────────────────────────────────
  function animateCount(target, duration = 1800) {
    if (counted) return;
    counted = true;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      count = Math.round(p * target);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // ── Scroll to panel ───────────────────────────────────────────────────────
  function scrollToPanel(index) {
    if (!containerEl) return;
    const top = containerEl.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + index * window.innerHeight, behavior: "smooth" });
  }

  // ── Panel-1 stagger in / out ──────────────────────────────────────────────
  function triggerPanel1In() {
    if (panel1Triggered || !panel1El) return;
    panel1Triggered = true;
    panel1El.querySelectorAll(".innov-anim").forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = "opacity .85s cubic-bezier(.22,1,.36,1), transform .85s cubic-bezier(.22,1,.36,1)";
        el.style.opacity    = "1";
        el.style.transform  = "translateY(0) scale(1)";
      }, i * 95);
    });
  }
  function resetPanel1() {
    if (!panel1Triggered || !panel1El) return;
    panel1Triggered = false;
    panel1El.querySelectorAll(".innov-anim").forEach((el) => {
      el.style.transition = "none";
      el.style.opacity    = "0";
      el.style.transform  = "translateY(30px) scale(.97)";
    });
  }

  // ── rAF loop — lerp scrub + drive all animations ──────────────────────────
  function frame() {
    lerpProgress += (targetProgress - lerpProgress) * 0.072;
    const p = lerpProgress;

    // Right-nav fill & indicator
    if (navFillEl)      navFillEl.style.transform     = `scaleY(${p})`;
    if (navIndicatorEl) navIndicatorEl.style.top      = `${p * 100}%`;

    const isSecond = p >= 0.5;
    dot0El?.classList.toggle("active", !isSecond);
    dot1El?.classList.toggle("active",  isSecond);
    navItem0El?.classList.toggle("active", !isSecond);
    navItem1El?.classList.toggle("active",  isSecond);

    // Panel 0 — exit (progress 0.32 → 0.52)
    if (panel0El) {
      const t0 = ease(p, 0.32, 0.52);
      panel0El.style.opacity       = String(1 - t0);
      panel0El.style.transform     = `translateY(${-t0 * 56}px)`;
      panel0El.style.pointerEvents = t0 > 0.5 ? "none" : "";
    }

    // Panel 1 — enter (progress 0.45 → 0.65)
    if (panel1El) {
      const t1 = ease(p, 0.45, 0.65);
      panel1El.style.opacity   = String(t1);
      panel1El.style.transform = `translateY(${(1 - t1) * 60}px)`;
    }

    // Panel-1 content stagger
    if (p >= 0.5) triggerPanel1In();
    if (p <  0.42) resetPanel1();

    rafId = requestAnimationFrame(frame);
  }

  // ── onMount ───────────────────────────────────────────────────────────────
  onMount(() => {
    function onScroll() {
      if (!containerEl) return;
      const rect = containerEl.getBoundingClientRect();
      targetProgress = clamp(-rect.top / window.innerHeight, 0, 1);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    // Panel-0 entrance — IntersectionObserver
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          if (e.target.classList.contains("center-col"))
            setTimeout(() => animateCount(500), 700);
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.15 }
    );
    panel0El?.querySelectorAll(".anim").forEach((el) => io.observe(el));

    rafId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  });
</script>

<!--
  ┌────────────────────────────────────────────────────────────────┐
  │  about-outer — 200 vh  →  gives native scroll room            │
  │  about-wrap  — sticky 100 vh  →  the "locked" viewport        │
  │  panel-mission / panel-innovation — absolute, both inset-0    │
  └────────────────────────────────────────────────────────────────┘
-->
<div class="about-outer" bind:this={containerEl}>
<section id="about" bind:this={sectionEl} class="about-wrap">

  <!-- Shared background grid -->
  <div class="bg-grid" aria-hidden="true"></div>

  <!-- Shared static watermark — lives outside both panels so it never moves -->
  <div class="watermark-shared" aria-hidden="true">ADEPTUS</div>

  <!-- ══════════════════════════════════════════════════════════
       RIGHT-SIDE NAVIGATION
  ══════════════════════════════════════════════════════════════ -->
  <nav class="scroll-nav" aria-label="Section navigation">

    <button class="nav-item active" bind:this={navItem0El} on:click={() => scrollToPanel(0)}>
      <span class="nav-label">Our Mission</span>
      <span class="nav-index">01</span>
      <div class="nav-dot active" bind:this={dot0El} aria-hidden="true"></div>
    </button>

    <div class="nav-track-wrap" aria-hidden="true">
      <div class="nav-track">
        <div class="nav-fill" bind:this={navFillEl}></div>
        <div class="nav-indicator" bind:this={navIndicatorEl}></div>
      </div>
    </div>

    <button class="nav-item" bind:this={navItem1El} on:click={() => scrollToPanel(1)}>
      <span class="nav-label">Our Innovation</span>
      <span class="nav-index">02</span>
      <div class="nav-dot" bind:this={dot1El} aria-hidden="true"></div>
    </button>

  </nav>

  <!-- ══════════════════════════════════════════════════════════
       PANEL 0 — OUR MISSION
  ══════════════════════════════════════════════════════════════ -->
  <div class="panel panel-mission" bind:this={panel0El}>

    <div class="top-bar anim">
      <div class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-[#F45E2A] animate-pulse"></span>
        <span class="text-white/70 text-sm font-bold tracking-[0.2em] uppercase">Adeptus.</span>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="w-4 h-px bg-white/30"></span>
        <span class="w-2 h-px bg-white/30"></span>
      </div>
    </div>

    <div class="content-grid">

      <!-- Left: heading + tagline -->
      <div class="left-col">
        <div class="overflow-hidden">
          <h2 class="main-heading anim" style="--delay:0s">Our</h2>
        </div>
        <div class="overflow-hidden">
          <h2 class="main-heading text-outlined anim" style="--delay:.12s">Mission.</h2>
        </div>
        <div class="tagline-wrap anim" style="--delay:.28s">
          <span class="tagline-line"></span>
          <p class="tagline">
            Enabling Our Clients To
            <em class="text-[#F45E2A] not-italic font-semibold"> Monitor, Control, And Automate</em>
            Building Systems For Improved Energy Efficiency And Reduced Operational Costs.
          </p>
        </div>
      </div>

      <!-- Center: IoT visual -->
      <div class="center-col anim">
        <div class="deco-ring ring-outer" aria-hidden="true"></div>
        <div class="deco-ring ring-inner" aria-hidden="true"></div>
        <div class="orange-ring"          aria-hidden="true"></div>
        <div class="center-visual">
          <svg viewBox="0 0 300 300" class="w-full h-full" fill="none">
            <circle cx="150" cy="150" r="118" stroke="rgba(244,94,42,.06)"  stroke-width="1" stroke-dasharray="4 6"/>
            <circle cx="150" cy="150" r="88"  stroke="rgba(255,255,255,.04)" stroke-width="1"/>
            <circle cx="150" cy="150" r="58"  stroke="rgba(244,94,42,.1)"   stroke-width="1" stroke-dasharray="3 5"/>

            <line class="net-line" style="--d:.2s"  x1="150" y1="150" x2="60"  y2="80"  stroke="rgba(244,94,42,.3)"  stroke-width=".8"/>
            <line class="net-line" style="--d:.35s" x1="150" y1="150" x2="240" y2="80"  stroke="rgba(244,94,42,.3)"  stroke-width=".8"/>
            <line class="net-line" style="--d:.5s"  x1="150" y1="150" x2="265" y2="175" stroke="rgba(244,94,42,.25)" stroke-width=".8"/>
            <line class="net-line" style="--d:.65s" x1="150" y1="150" x2="60"  y2="225" stroke="rgba(244,94,42,.25)" stroke-width=".8"/>
            <line class="net-line" style="--d:.8s"  x1="150" y1="150" x2="150" y2="35"  stroke="rgba(244,94,42,.3)"  stroke-width=".8"/>
            <line class="net-line" style="--d:.95s" x1="150" y1="150" x2="150" y2="265" stroke="rgba(244,94,42,.2)"  stroke-width=".8"/>
            <line class="net-line" style="--d:1.1s" x1="150" y1="150" x2="35"  y2="150" stroke="rgba(244,94,42,.2)"  stroke-width=".8"/>

            <circle class="sat-node" style="--d:.3s"  cx="60"  cy="80"  r="4" fill="#F45E2A"/>
            <circle class="sat-node" style="--d:.5s"  cx="240" cy="80"  r="4" fill="rgba(255,255,255,.6)"/>
            <circle class="sat-node" style="--d:.7s"  cx="265" cy="175" r="4" fill="#F45E2A"/>
            <circle class="sat-node" style="--d:.9s"  cx="60"  cy="225" r="4" fill="rgba(255,255,255,.5)"/>
            <circle class="sat-node" style="--d:1.1s" cx="150" cy="35"  r="3" fill="rgba(255,255,255,.6)"/>
            <circle class="sat-node" style="--d:1.3s" cx="150" cy="265" r="3" fill="#F45E2A"/>
            <circle class="sat-node" style="--d:1.5s" cx="35"  cy="150" r="3" fill="rgba(255,255,255,.5)"/>

            <circle cx="150" cy="150" r="22" fill="rgba(244,94,42,.12)" class="core-pulse"/>
            <circle cx="150" cy="150" r="14" fill="rgba(244,94,42,.25)"/>
            <circle cx="150" cy="150" r="8"  fill="#F45E2A"/>
            <circle cx="150" cy="150" r="4"  fill="#fff"/>

            <text x="150" y="128" text-anchor="middle" fill="white"
              font-size="20" font-weight="800" font-family="Montserrat,sans-serif">
              {Math.round(count)}K+
            </text>
            <text x="150" y="143" text-anchor="middle" fill="rgba(255,255,255,.4)"
              font-size="7" font-family="Montserrat,sans-serif" letter-spacing="2.5">
              ASSETS CONNECTED
            </text>
          </svg>
        </div>
      </div>

      <!-- Right arrow -->
      <div class="right-col anim" style="--delay:.5s">
        <a href="/contact" class="arrow-btn" aria-label="Contact us">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Feature cards -->
    <div class="features-row">
      {#each features as f, i}
        <div class="feat-card anim" style="--delay:{i * .15}s">
          <div class="feat-top-bar"></div>
          <div class="flex items-start justify-between mb-4">
            <span class="feat-num">{f.num}</span>
            <span class="feat-icon">{f.icon}</span>
          </div>
          <div class="feat-divider"></div>
          <h3 class="feat-title">{f.title}</h3>
          <p class="feat-desc">{f.desc}</p>
          <div class="feat-arrow-wrap">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
        </div>
      {/each}
    </div>

    <!-- Bottom bar -->
    <div class="progress-row anim" style="--delay:.3s">
      <div class="progress-track"><div class="progress-fill"></div></div>
      <button class="explore-link" on:click={() => scrollToPanel(1)}>
        Scroll to Innovation
        <svg class="w-3 h-3 inline ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <span class="text-white/15 text-[10px] tracking-widest ml-auto uppercase">Adeptus Technologies</span>
    </div>
  </div><!-- /panel-mission -->

  <!-- ══════════════════════════════════════════════════════════
       PANEL 1 — OUR INNOVATION
       Hidden via CSS; rAF loop + stagger JS reveals it.
  ══════════════════════════════════════════════════════════════ -->
  <div class="panel panel-innovation" bind:this={panel1El}>

    <!-- Top bar -->
    <div class="top-bar">
      <div class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-[#F45E2A] animate-pulse"></span>
        <span class="text-white/70 text-sm font-bold tracking-[0.2em] uppercase">Adeptus.</span>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="w-4 h-px bg-white/30"></span>
        <span class="w-2 h-px bg-white/30"></span>
      </div>
    </div>

    <!-- Content grid -->
    <div class="innov-grid">

      <!-- Left: heading + deco -->
      <div class="innov-left">

        <!-- Dot-grid decoration -->
        <div class="innov-deco innov-anim" aria-hidden="true">
          <svg viewBox="0 0 120 120" class="w-full h-full" fill="none">
            {#each Array(6) as _, row}
              {#each Array(6) as _, col}
                <circle
                  cx={10 + col * 20} cy={10 + row * 20} r="1.5"
                  fill="rgba(244,94,42,{0.1 + (row + col) * 0.025})"
                  style="animation: dotPulse 3s ease-in-out {(row + col) * .15}s infinite"
                />
              {/each}
            {/each}
            <line x1="10" y1="10" x2="110" y2="10"  stroke="rgba(244,94,42,.15)" stroke-width=".5"/>
            <line x1="10" y1="30" x2="110" y2="30"  stroke="rgba(244,94,42,.08)" stroke-width=".5"/>
            <line x1="10" y1="50" x2="110" y2="50"  stroke="rgba(244,94,42,.12)" stroke-width=".5"/>
            <line x1="10" y1="10" x2="10"  y2="110" stroke="rgba(244,94,42,.15)" stroke-width=".5"/>
            <line x1="110" y1="10" x2="110" y2="110" stroke="rgba(244,94,42,.08)" stroke-width=".5"/>
            <rect x="0"   y="0"   width="20" height="20" fill="none" stroke="#F45E2A" stroke-width="1" opacity=".3"/>
            <rect x="100" y="100" width="20" height="20" fill="none" stroke="#F45E2A" stroke-width="1" opacity=".15"/>
          </svg>
        </div>

        <div class="overflow-hidden">
          <h2 class="innov-heading innov-anim" style="--delay:0s">Our</h2>
        </div>
        <div class="overflow-hidden">
          <h2 class="innov-heading text-outlined innov-anim" style="--delay:.1s">Innovation.</h2>
        </div>
        <div class="innov-badge innov-anim" style="--delay:.2s">
          <span class="badge-dot"></span>
          <span class="badge-text">Enterprise · Trusted · Global</span>
        </div>
        <div class="innov-vert-accent innov-anim" style="--delay:.3s" aria-hidden="true"></div>
      </div>

      <!-- Right: blocks + stats -->
      <div class="innov-right">

        <div class="innov-block innov-anim" style="--delay:.15s">
          <div class="innov-accent"></div>
          <h3 class="innov-block-title">Delivering Enterprise Solutions</h3>
          <p class="innov-block-desc">
            We deliver a full range of Enterprise solutions and have the
            expertise in managing highly complex projects.
          </p>
        </div>

        <div class="innov-sep innov-anim" style="--delay:.25s" aria-hidden="true"></div>

        <div class="innov-block innov-anim" style="--delay:.35s">
          <div class="innov-accent"></div>
          <h3 class="innov-block-title">More Options for you</h3>
          <p class="innov-block-desc">
            We do it because we love it and are personally connected to
            everything we create.
          </p>
        </div>

        <!-- Stats -->
        <div class="innov-stats innov-anim" style="--delay:.48s">
          <div class="stat-item">
            <span class="stat-num">500+</span>
            <span class="stat-label">Projects Delivered</span>
          </div>
          <div class="stat-vline" aria-hidden="true"></div>
          <div class="stat-item">
            <span class="stat-num">99%</span>
            <span class="stat-label">Client Satisfaction</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div class="progress-row innov-anim" style="--delay:.6s">
      <div class="progress-track"><div class="progress-fill inn-fill"></div></div>
      <button class="explore-link" on:click={() => scrollToPanel(0)}>
        <svg class="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
        </svg>
        Back to Mission
      </button>
      <span class="text-white/15 text-[10px] tracking-widest ml-auto uppercase">Adeptus Technologies</span>
    </div>

  </div><!-- /panel-innovation -->

</section>
</div><!-- /about-outer -->

<style>
  /* ── Outer container: 200 vh ─────────────────────────────────────────── */
  .about-outer {
    position: relative;
    height: 200vh;
  }

  /* ── Sticky section: locks at top of viewport while scrolling 200vh ──── */
  .about-wrap {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #1d2323;
    overflow: hidden;
  }

  /* ── Background grid ──────────────────────────────────────────────────── */
  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(244,94,42,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(244,94,42,.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  /* ── Panels (both fill the sticky section absolutely) ─────────────────── */
  .panel {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    will-change: opacity, transform;
  }
  .panel-mission    { z-index: 2; }
  .panel-innovation { z-index: 1; opacity: 0; transform: translateY(60px); }

  /* ══════════════════════════════════════════════════════════════════════
     RIGHT NAVIGATION
  ══════════════════════════════════════════════════════════════════════ */
  .scroll-nav {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 60;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: .55rem;
    background: none;
    border: none;
    padding: .18rem 0;
    cursor: pointer;
  }

  .nav-label {
    font-size: .52rem;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: rgba(255,255,255,.18);
    white-space: nowrap;
    user-select: none;
    font-weight: 600;
    transition: color .5s ease;
  }
  .nav-item.active .nav-label { color: rgba(255,255,255,.72); }

  .nav-index {
    font-size: .44rem;
    letter-spacing: .1em;
    color: rgba(255,255,255,.15);
    font-weight: 700;
    transition: color .5s ease;
  }
  .nav-item.active .nav-index { color: rgba(244,94,42,.7); }

  .nav-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,.18);
    background: transparent;
    flex-shrink: 0;
    transition:
      background .5s ease,
      border-color .5s ease,
      box-shadow .5s ease,
      transform .5s cubic-bezier(.34,1.56,.64,1);
  }
  .nav-dot.active {
    background: #F45E2A;
    border-color: #F45E2A;
    box-shadow: 0 0 10px rgba(244,94,42,.55), 0 0 20px rgba(244,94,42,.2);
    transform: scale(1.35);
  }

  /* Vertical track between nav items */
  .nav-track-wrap {
    display: flex;
    justify-content: flex-end;
    padding: 5px 3px;
  }
  .nav-track {
    position: relative;
    width: 1.5px;
    height: 64px;
    background: rgba(255,255,255,.07);
    border-radius: 2px;
  }
  /* Orange fill — grows down as progress increases; driven by rAF */
  .nav-fill {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, #F45E2A, rgba(244,94,42,.35));
    border-radius: 2px;
    transform-origin: top center;
    transform: scaleY(0);
    will-change: transform;
  }
  /* Sliding dot — top driven by rAF */
  .nav-indicator {
    position: absolute;
    left: 50%;
    top: 0;
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #F45E2A;
    transform: translateX(-50%);
    box-shadow: 0 0 8px rgba(244,94,42,.7), 0 0 16px rgba(244,94,42,.35);
    will-change: top;
  }

  /* ══════════════════════════════════════════════════════════════════════
     SCROLL-TRIGGERED ENTRANCE ANIMATIONS  (Panel 0, IntersectionObserver)
  ══════════════════════════════════════════════════════════════════════ */
  .anim {
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity  .75s cubic-bezier(.4,0,.2,1) var(--delay, 0s),
      transform .75s cubic-bezier(.4,0,.2,1) var(--delay, 0s);
  }
  .anim:global(.is-visible) { opacity: 1; transform: translateY(0); }

  /* ── Top bar (shared) ─────────────────────────────────────────────────── */
  .top-bar {
    position: relative; z-index: 10;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.75rem 2.5rem;
    flex-shrink: 0;
  }

  /* ── Mission: content grid ─────────────────────────────────────────────── */
  .content-grid {
    position: relative; z-index: 10;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr auto 60px;
    align-items: center;
    padding: 0 2.5rem;
    gap: 1rem;
  }

  .left-col { display: flex; flex-direction: column; justify-content: center; }

  .main-heading {
    font-size: clamp(3rem, 7vw, 7.5rem);
    font-weight: 900;
    color: #fff;
    line-height: 1;
    letter-spacing: -.02em;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(60px);
    transition:
      opacity  .8s cubic-bezier(.4,0,.2,1) var(--delay, 0s),
      transform .8s cubic-bezier(.4,0,.2,1) var(--delay, 0s);
  }
  .main-heading:global(.is-visible) { opacity: 1; transform: translateY(0); }

  .text-outlined {
    -webkit-text-stroke: 2px rgba(255,255,255,.45);
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .tagline-wrap { display: flex; gap: .75rem; margin-top: 1.25rem; align-items: flex-start; }
  .tagline-line {
    width: 2px; min-height: 100%;
    background: linear-gradient(to bottom, #F45E2A, transparent);
    border-radius: 2px; flex-shrink: 0; align-self: stretch;
  }
  .tagline {
    font-size: clamp(.68rem, 1.05vw, .85rem);
    color: rgba(255,255,255,.35);
    line-height: 1.75; max-width: 320px; font-weight: 300;
  }

  /* ── Center IoT visual ─────────────────────────────────────────────────── */
  .center-col {
    position: relative;
    width: clamp(240px, 32vw, 460px); height: clamp(240px, 32vw, 460px);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transform: translateY(20px) scale(.92);
    transition: opacity 1s cubic-bezier(.4,0,.2,1) .1s,
                transform 1s cubic-bezier(.4,0,.2,1) .1s;
  }
  .center-col:global(.is-visible) { opacity: 1; transform: translateY(0) scale(1); }

  .deco-ring { position: absolute; border-radius: 50%; border: 1px solid rgba(255,255,255,.05); animation: rotateSlow 20s linear infinite; }
  .ring-outer { inset: 0; animation-duration: 25s; }
  .ring-inner { inset: 15%; animation-direction: reverse; animation-duration: 18s; }

  .orange-ring {
    position: absolute; top: 6%; right: 3%; width: 42%; height: 42%;
    border-radius: 50%; border: 2.5px solid #F45E2A; opacity: 0;
  }
  .center-col:global(.is-visible) .orange-ring {
    animation: ringPop .6s cubic-bezier(.34,1.56,.64,1) .8s forwards;
  }

  .center-visual { position: relative; z-index: 2; width: 76%; height: 76%; }

  .net-line { stroke-dasharray: 200; stroke-dashoffset: 200; }
  .center-col:global(.is-visible) .net-line {
    animation: drawLine .7s ease forwards;
    animation-delay: calc(.5s + var(--d));
  }
  .sat-node { opacity: 0; }
  .center-col:global(.is-visible) .sat-node {
    animation: nodePop .4s cubic-bezier(.34,1.56,.64,1) forwards;
    animation-delay: calc(.8s + var(--d));
  }
  .core-pulse { animation: corePulse 2.5s ease-in-out infinite; }

  .right-col { display: flex; align-items: center; justify-content: flex-end; }
  .arrow-btn  {
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,.35);
    transition: color .3s ease, transform .3s ease;
  }
  .arrow-btn:hover { color: #F45E2A; transform: translateX(4px); }

  /* ── Feature cards ────────────────────────────────────────────────────── */
  .features-row {
    position: relative; z-index: 10;
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: rgba(255,255,255,.05);
    margin: 0 2.5rem;
    border: 1px solid rgba(255,255,255,.05);
    flex-shrink: 0;
  }
  .feat-card {
    position: relative; background: #1d2323; padding: 1.5rem;
    overflow: hidden; cursor: default;
    transition: opacity .7s cubic-bezier(.4,0,.2,1) var(--delay,0s),
                transform .7s cubic-bezier(.4,0,.2,1) var(--delay,0s),
                background .35s ease;
  }
  .feat-top-bar {
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, #F45E2A, #ff8c5a);
    transform: scaleX(0); transform-origin: left;
    transition: transform .45s cubic-bezier(.4,0,.2,1);
  }
  .feat-card:hover .feat-top-bar { transform: scaleX(1); }
  .feat-card:hover { background: rgba(244,94,42,.05); }
  .feat-card::after {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(244,94,42,.08) 0%, transparent 70%);
    opacity: 0; transition: opacity .4s ease;
  }
  .feat-card:hover::after { opacity: 1; }
  .feat-num  { font-size: .6rem; font-weight: 700; color: #F45E2A; letter-spacing: .2em; opacity: .8; }
  .feat-icon { font-size: 1.35rem; transition: transform .3s cubic-bezier(.34,1.56,.64,1); filter: drop-shadow(0 0 6px rgba(244,94,42,.3)); }
  .feat-card:hover .feat-icon { transform: scale(1.2) rotate(-5deg); }
  .feat-divider { width: 100%; height: 1px; background: rgba(255,255,255,.06); margin: .75rem 0 .9rem; }
  .feat-title { color: #fff; font-size: .88rem; font-weight: 700; margin-bottom: .45rem; letter-spacing: .01em; transition: color .3s ease; }
  .feat-card:hover .feat-title { color: #F45E2A; }
  .feat-desc  { color: rgba(255,255,255,.32); font-size: .7rem; line-height: 1.65; font-weight: 300; }
  .feat-arrow-wrap { margin-top: 1.1rem; color: rgba(244,94,42,.4); transition: color .3s ease, transform .35s cubic-bezier(.4,0,.2,1); }
  .feat-card:hover .feat-arrow-wrap { color: #F45E2A; transform: translateX(6px); }

  /* ── Progress row ────────────────────────────────────────────────────── */
  .progress-row {
    position: relative; z-index: 10;
    display: flex; align-items: center; gap: 1.25rem;
    padding: 1rem 2.5rem 1.5rem;
    border-top: 1px solid rgba(255,255,255,.05);
    flex-shrink: 0;
  }
  .progress-track { width: 80px; height: 2px; background: rgba(255,255,255,.08); border-radius: 2px; overflow: hidden; }
  .progress-fill  { height: 100%; width: 30%; background: linear-gradient(90deg, #F45E2A, #ff8c5a); border-radius: 2px; }
  .progress-row:global(.is-visible) .progress-fill,
  .inn-fill { animation: progressPulse 2.5s ease-in-out .4s infinite alternate; }
  .explore-link {
    background: none; border: none; padding: 0;
    color: rgba(255,255,255,.3);
    font-size: .625rem; letter-spacing: .35em; text-transform: uppercase;
    cursor: pointer;
    transition: color .3s ease, letter-spacing .3s ease;
  }
  .explore-link:hover { color: #F45E2A; letter-spacing: .45em; }

  /* ══════════════════════════════════════════════════════════════════════
     INNOVATION PANEL
  ══════════════════════════════════════════════════════════════════════ */

  /* Shared static watermark — outside both panels, never moves during transitions */
  .watermark-shared {
    position: absolute;
    right: -3%;
    top: 50%;
    transform: translateY(-50%);
    font-size: clamp(6rem, 18vw, 22rem);
    font-weight: 900;
    text-transform: uppercase;
    color: rgba(255,255,255,.025);
    letter-spacing: -.02em;
    line-height: 1;
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
    z-index: 3; /* above both panels so it shows through their opacity transitions */
  }

  /* .innov-anim elements: hidden by default; JS stagger reveals them */
  .innov-anim {
    opacity: 0;
    transform: translateY(30px) scale(.97);
  }

  .innov-grid {
    position: relative; z-index: 10;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    align-items: center;
    padding: 0 2.5rem;
    gap: 3.5rem;
  }

  .innov-left { display: flex; flex-direction: column; justify-content: center; position: relative; }

  .innov-deco { width: clamp(80px, 10vw, 120px); height: clamp(80px, 10vw, 120px); margin-bottom: 1.5rem; }

  .innov-heading {
    font-size: clamp(3rem, 7vw, 7.5rem);
    font-weight: 900;
    color: #fff;
    line-height: 1;
    letter-spacing: -.02em;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(30px) scale(.97);
  }

  .innov-badge { display: flex; align-items: center; gap: .6rem; margin-top: 1.4rem; opacity: 0; transform: translateY(30px) scale(.97); }
  .badge-dot  { width: 5px; height: 5px; border-radius: 50%; background: #F45E2A; animation: corePulse 2.5s ease-in-out infinite; flex-shrink: 0; }
  .badge-text { font-size: .55rem; letter-spacing: .25em; text-transform: uppercase; color: rgba(255,255,255,.22); font-weight: 600; }

  .innov-vert-accent {
    position: absolute;
    right: -1.75rem; top: 0; bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, transparent, rgba(244,94,42,.25) 25%, rgba(244,94,42,.25) 75%, transparent);
    opacity: 0;
    transform: translateY(30px) scale(.97);
  }

  .innov-right { display: flex; flex-direction: column; }

  .innov-block {
    position: relative;
    padding: 1.15rem 0 1.15rem 1.2rem;
    opacity: 0;
    transform: translateY(30px) scale(.97);
  }
  .innov-accent {
    position: absolute;
    left: 0; top: 1.15rem; bottom: 1.15rem;
    width: 2px;
    background: linear-gradient(to bottom, #F45E2A, rgba(244,94,42,.08));
    border-radius: 2px;
  }
  .innov-block-title { color: #fff; font-size: clamp(.82rem, 1.3vw, 1rem); font-weight: 700; margin-bottom: .5rem; letter-spacing: .01em; }
  .innov-block-desc  { color: rgba(255,255,255,.33); font-size: clamp(.66rem, .92vw, .78rem); line-height: 1.75; font-weight: 300; max-width: 400px; }

  .innov-sep {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, rgba(244,94,42,.18), rgba(255,255,255,.04) 60%, transparent);
    margin: .2rem 0;
    opacity: 0;
    transform: translateY(30px) scale(.97);
  }

  .innov-stats {
    display: flex; align-items: center;
    margin-top: 1.6rem; padding-top: 1.3rem;
    border-top: 1px solid rgba(255,255,255,.055);
    opacity: 0;
    transform: translateY(30px) scale(.97);
  }
  .stat-item  { flex: 1; display: flex; flex-direction: column; gap: .28rem; padding: 0 1.1rem; }
  .stat-item:first-child { padding-left: 0; }
  .stat-num   { font-size: clamp(1.7rem, 3.2vw, 2.6rem); font-weight: 900; color: #fff; letter-spacing: -.03em; line-height: 1; }
  .stat-label { font-size: .6rem; color: rgba(255,255,255,.28); letter-spacing: .14em; text-transform: uppercase; font-weight: 500; }
  .stat-vline { width: 1px; height: 44px; background: linear-gradient(to bottom, transparent, rgba(244,94,42,.28), transparent); }

  /* ── Keyframes ─────────────────────────────────────────────────────────── */
  @keyframes drawLine      { to { stroke-dashoffset: 0; } }
  @keyframes nodePop       { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: scale(1); } }
  @keyframes corePulse     { 0%,100% { r: 22; opacity: .12; } 50% { r: 28; opacity: .22; } }
  @keyframes ringPop       { from { opacity: 0; transform: scale(.6); } to { opacity: .85; transform: scale(1); } }
  @keyframes rotateSlow    { to { transform: rotate(360deg); } }
  @keyframes progressPulse { from { width: 20%; } to { width: 75%; } }
  @keyframes dotPulse      { 0%,100% { opacity: .15; } 50% { opacity: .6; } }
</style>
