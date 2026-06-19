<script>
  import { onMount } from "svelte";

  // ── AboutUs orb ──────────────────────────────────────────────
  let sectionEl;
  let visible = false;

  // ── Industries We Serve ──────────────────────────────────────
  let industryEl;
  let iwsVisible = false;

  // ── Impact Metrics ───────────────────────────────────────────
  let impactEl;
  let impactVisible = false;

  // ── Beconix AI — sticky 2-panel scroll section ───────────────
  let baiOuterEl;
  let baiPanel0El, baiPanel1El;
  let baiNavFillEl, baiNavIndicatorEl;
  let baiNav0El, baiNav1El, baiDot0El, baiDot1El;
  let baiExitEl;
  let baiPanel1Done = false;
  let baiTarget = 0, baiLerp = 0, baiRaf = null;


  function baiScrollTo(i) {
    if (!baiOuterEl) return;
    const top = baiOuterEl.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + i * window.innerHeight, behavior: 'smooth' });
  }

  function trigBaiP1() {
    if (baiPanel1Done || !baiPanel1El) return;
    baiPanel1Done = true;
    baiPanel1El.querySelectorAll('.bai-a1').forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = 'opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1)';
        el.style.opacity    = '1';
        el.style.transform  = 'translateY(0) scale(1)';
      }, i * 95);
    });
  }

  function resetBaiP1() {
    if (!baiPanel1Done || !baiPanel1El) return;
    baiPanel1Done = false;
    baiPanel1El.querySelectorAll('.bai-a1').forEach(el => {
      el.style.transition = 'none';
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(30px) scale(.97)';
    });
  }

  const _baiCl   = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const _baiEio  = t => t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;
  const _baiEase = (v, a, b) => _baiEio(_baiCl((v - a) / (b - a), 0, 1));

  function baiFrame() {
    baiLerp += (baiTarget - baiLerp) * 0.072;
    const p = baiLerp;
    if (baiNavFillEl)      baiNavFillEl.style.transform = `scaleY(${p})`;
    if (baiNavIndicatorEl) baiNavIndicatorEl.style.top  = `${p * 100}%`;
    const sec = p >= 0.5;
    baiDot0El?.classList.toggle('active', !sec);
    baiDot1El?.classList.toggle('active',  sec);
    baiNav0El?.classList.toggle('active', !sec);
    baiNav1El?.classList.toggle('active',  sec);
    if (baiPanel0El) {
      const t0 = _baiEase(p, 0.32, 0.52);
      baiPanel0El.style.opacity       = String(1 - t0);
      baiPanel0El.style.transform     = `translateY(${-t0 * 56}px)`;
      baiPanel0El.style.pointerEvents = t0 > 0.5 ? 'none' : '';
    }
    if (baiPanel1El) {
      const t1 = _baiEase(p, 0.45, 0.65);
      baiPanel1El.style.opacity   = String(t1);
      baiPanel1El.style.transform = `translateY(${(1 - t1) * 60}px)`;
    }
    if (p >= 0.5)  trigBaiP1();
    if (p <  0.42) resetBaiP1();
    if (baiExitEl) {
      const x = Math.max(0, Math.min(1, (p - 0.8) / 0.2));
      baiExitEl.style.opacity = String(x);
    }
    baiRaf = requestAnimationFrame(baiFrame);
  }

  onMount(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) visible = true; },
      { threshold: 0.05 },
    );
    if (sectionEl) io.observe(sectionEl);

    const ioIws = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) iwsVisible = true; },
      { threshold: 0.05 },
    );
    if (industryEl) ioIws.observe(industryEl);

    const ioIm = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) impactVisible = true; },
      { threshold: 0.05 },
    );
    if (impactEl) ioIm.observe(impactEl);

    // Panel 0 entrance animations (IntersectionObserver)
    const ioB0 = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('bai-vis'); ioB0.unobserve(e.target); }
      }),
      { threshold: 0.15 },
    );
    baiPanel0El?.querySelectorAll('.bai-a0, .bai-burst-fade').forEach(el => ioB0.observe(el));

    // Scroll-driven bai panel transition
    function onBaiScroll() {
      if (!baiOuterEl) return;
      const rect = baiOuterEl.getBoundingClientRect();
      baiTarget = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);
    }
    window.addEventListener('scroll', onBaiScroll, { passive: true });
    baiRaf = requestAnimationFrame(baiFrame);

    return () => {
      io.disconnect();
      ioIws.disconnect();
      ioIm.disconnect();
      ioB0.disconnect();
      window.removeEventListener('scroll', onBaiScroll);
      if (baiRaf) cancelAnimationFrame(baiRaf);
    };
  });
</script>

<section
  id="about-us"
  bind:this={sectionEl}
  class="au-wrap"
  class:au-vis={visible}
>
  <!-- ── Entry fade-from-dark overlay ── -->
  <div class="au-entry-overlay" aria-hidden="true"></div>

  <!-- ── Background grid (matches About.svelte) ── -->
  <div class="au-bg-grid" aria-hidden="true"></div>

  <!-- ── Ambient glow behind the orb ── -->
  <div class="au-bg-glow" aria-hidden="true"></div>

  <!-- ── Scan-line texture overlay ── -->
  <div class="au-scanlines" aria-hidden="true"></div>

  <!-- ── HUD corner frame brackets ── -->
  <div class="au-hud" aria-hidden="true">
    <span class="au-hud-tl"></span>
    <span class="au-hud-tr"></span>
    <span class="au-hud-bl"></span>
    <span class="au-hud-br"></span>
  </div>

  <!-- ════════════════════════════════════════════
       GIANT BACKGROUND WORD — sits behind the orb
  ════════════════════════════════════════════ -->
  <div class="au-word" aria-hidden="true">
    <span class="au-word-solid">About </span><span class="au-word-outline">Us</span>
  </div>

  <!-- ════════════════════════════════════════════
       CENTER ORB — z-index 2, overlaps the word
  ════════════════════════════════════════════ -->
  <div class="au-orb-wrap">
    <svg
      class="au-orb-svg"
      viewBox="0 0 440 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Sphere gradient: bright top-left → dark edges -->
        <radialGradient
          id="auSphere"
          cx="37%"
          cy="31%"
          r="63%"
          fx="37%"
          fy="31%"
        >
          <stop offset="0%" stop-color="#ffb460" />
          <stop offset="14%" stop-color="#F45E2A" />
          <stop offset="44%" stop-color="#c03c10" stop-opacity=".92" />
          <stop offset="70%" stop-color="#6a1e08" stop-opacity=".78" />
          <stop offset="100%" stop-color="#1a0804" stop-opacity=".3" />
        </radialGradient>
        <!-- Inner halo -->
        <radialGradient id="auHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#F45E2A" stop-opacity=".28" />
          <stop offset="55%" stop-color="#F45E2A" stop-opacity=".08" />
          <stop offset="100%" stop-color="#F45E2A" stop-opacity="0" />
        </radialGradient>
        <!-- Wide outer glow -->
        <radialGradient id="auOuter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#F45E2A" stop-opacity=".11" />
          <stop offset="100%" stop-color="#F45E2A" stop-opacity="0" />
        </radialGradient>
        <!-- Glow filter for nodes -->
        <filter id="auGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <!-- Soft glow filter for the orb sphere -->
        <filter id="auSphereGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Wide ambient -->
      <circle cx="220" cy="220" r="210" fill="url(#auOuter)" />

      <!-- Inner halo -->
      <circle cx="220" cy="220" r="158" fill="url(#auHalo)" />

      <!-- Bokeh spots -->
      <circle cx="292" cy="128" r="24" fill="#F45E2A" fill-opacity=".055" />
      <circle cx="138" cy="305" r="17" fill="#F45E2A" fill-opacity=".045" />
      <circle cx="335" cy="315" r="13" fill="#ff8c5a" fill-opacity=".035" />
      <circle cx="110" cy="148" r="10" fill="#F45E2A" fill-opacity=".03" />

      <!-- ── Innermost orbit ring (new — adds depth) ── -->
      <circle
        cx="220"
        cy="220"
        r="128"
        fill="none"
        stroke="#F45E2A"
        stroke-opacity=".12"
        stroke-width=".6"
        stroke-dasharray="2 14"
        class="au-ring-cw"
      />

      <!-- ── Main sphere ── -->
      <circle cx="220" cy="220" r="112" fill="url(#auSphere)" />

      <!-- Crystalline facet lines -->
      <line x1="144" y1="170" x2="220" y2="220" stroke="#ffa050" stroke-opacity=".22" stroke-width=".9" />
      <line x1="296" y1="153" x2="220" y2="220" stroke="#ffa050" stroke-opacity=".20" stroke-width=".9" />
      <line x1="134" y1="272" x2="220" y2="220" stroke="#ffa050" stroke-opacity=".17" stroke-width=".8" />
      <line x1="310" y1="290" x2="220" y2="220" stroke="#ffa050" stroke-opacity=".14" stroke-width=".8" />
      <line x1="220" y1="110" x2="220" y2="220" stroke="#ffa050" stroke-opacity=".19" stroke-width=".9" />
      <line x1="163" y1="315" x2="220" y2="220" stroke="#ffa050" stroke-opacity=".11" stroke-width=".7" />
      <line x1="318" y1="178" x2="220" y2="220" stroke="#ffa050" stroke-opacity=".13" stroke-width=".7" />

      <!-- Crystalline facet polygons -->
      <polygon points="164,178 186,190 177,166" fill="#ffb460" fill-opacity=".18" />
      <polygon points="260,148 280,161 264,138" fill="#ffb460" fill-opacity=".14" />
      <polygon points="154,252 175,242 161,270" fill="#ffb460" fill-opacity=".1" />
      <polygon points="292,264 308,248 316,274" fill="#ffb460" fill-opacity=".09" />

      <!-- Specular highlight -->
      <circle cx="176" cy="165" r="22" fill="rgba(255,190,120,.26)" />
      <circle cx="169" cy="158" r="11" fill="rgba(255,218,168,.43)" />
      <circle cx="166" cy="155" r="5" fill="rgba(255,240,210,.62)" />

      <!-- Sphere edge vignette -->
      <circle cx="220" cy="220" r="112" fill="none" stroke="rgba(100,38,12,.4)" stroke-width="2.5" />

      <!-- ── Outer rotating ring ── -->
      <circle
        cx="220"
        cy="220"
        r="150"
        fill="none"
        stroke="#F45E2A"
        stroke-opacity=".65"
        stroke-width="1.5"
        class="au-ring-cw"
      />

      <!-- ── Second ring — dashed, counter-rotate ── -->
      <circle
        cx="220"
        cy="220"
        r="164"
        fill="none"
        stroke="#F45E2A"
        stroke-opacity=".22"
        stroke-width=".8"
        stroke-dasharray="5 9"
        class="au-ring-ccw"
      />

      <!-- Ring cardinal tick marks -->
      <line x1="220" y1="68" x2="220" y2="58" stroke="#F45E2A" stroke-opacity=".7" stroke-width="1.5" />
      <line x1="220" y1="372" x2="220" y2="382" stroke="#F45E2A" stroke-opacity=".7" stroke-width="1.5" />
      <line x1="68" y1="220" x2="58" y2="220" stroke="#F45E2A" stroke-opacity=".7" stroke-width="1.5" />
      <line x1="372" y1="220" x2="382" y2="220" stroke="#F45E2A" stroke-opacity=".7" stroke-width="1.5" />

      <!-- Ring 45-degree marks -->
      <line x1="326" y1="114" x2="333" y2="107" stroke="#F45E2A" stroke-opacity=".45" stroke-width="1.2" />
      <line x1="114" y1="114" x2="107" y2="107" stroke="#F45E2A" stroke-opacity=".35" stroke-width="1" />
      <line x1="114" y1="326" x2="107" y2="333" stroke="#F45E2A" stroke-opacity=".45" stroke-width="1.2" />
      <line x1="326" y1="326" x2="333" y2="333" stroke="#F45E2A" stroke-opacity=".35" stroke-width="1" />

      <!-- Orbit nodes -->
      <circle cx="316" cy="114" r="4" fill="#F45E2A" fill-opacity=".85" filter="url(#auGlow)" class="au-np" />
      <circle cx="124" cy="124" r="2.8" fill="#F45E2A" fill-opacity=".55" />
      <circle cx="344" cy="297" r="3.2" fill="#F45E2A" fill-opacity=".72" />
      <circle cx="96" cy="320" r="2" fill="#F45E2A" fill-opacity=".48" />
      <circle cx="220" cy="68" r="2.5" fill="#F45E2A" fill-opacity=".65" />
      <circle cx="380" cy="220" r="2.2" fill="#F45E2A" fill-opacity=".5" />

      <!-- Center core -->
      <circle cx="220" cy="220" r="7" fill="#ffb460" fill-opacity=".9" />
      <circle cx="220" cy="220" r="3.5" fill="#fff" fill-opacity=".85" />
    </svg>
  </div>

  <!-- ════════════════════════════════════════════
       CONNECTOR LINES — block edges → orb ring
  ════════════════════════════════════════════ -->
  <svg
    class="au-lines"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <!-- TL block → orb top-left ring -->
    <line
      x1="26"
      y1="16"
      x2="39"
      y2="36"
      stroke="#F45E2A"
      stroke-opacity=".28"
      stroke-width=".12"
      vector-effect="non-scaling-stroke"
    />
    <!-- BR block → orb bottom-right ring -->
    <line
      x1="74"
      y1="84"
      x2="61"
      y2="64"
      stroke="#F45E2A"
      stroke-opacity=".28"
      stroke-width=".12"
      vector-effect="non-scaling-stroke"
    />
    <!-- Terminal dots at orb ring end -->
    <circle cx="39" cy="36" r=".38" fill="#F45E2A" fill-opacity=".65" />
    <circle cx="61" cy="64" r=".38" fill="#F45E2A" fill-opacity=".65" />
    <!-- Start dots at block edges -->
    <circle cx="26" cy="16" r=".28" fill="#F45E2A" fill-opacity=".4" />
    <circle cx="74" cy="84" r=".28" fill="#F45E2A" fill-opacity=".4" />
  </svg>

  <!-- ════════════════════════════════════════════
       CORNER TEXT BLOCKS
  ════════════════════════════════════════════ -->

  <!-- TOP LEFT — Synopsis -->
  <div class="au-block au-tl au-anim" style="--d:0s">
    <div class="au-label-row">
      <span class="au-dash"></span>
      <span class="au-label"><strong>Established</strong> IoT Provider</span>
    </div>
    <p class="au-body">
      Adeptus Technologies is an established player in the IoT and Managed
      Services domain. Our operations are driven by a talent pool of young
      technology entrepreneurs and software developers with skills entrenched
      in AI and Machine Learning.
    </p>
    <p class="au-body">
      We are focused on delivering futuristic solutions for different verticals
      from Real Estate, Facilities Management, Govt., Construction &amp;
      Contracting, Educational Institutions, Heavy Machinery &amp; Fleet,
      Manufacturing, Waste Management entities amongst others.
    </p>
  </div>

  <!-- BOTTOM RIGHT — History -->
  <div class="au-block au-br au-anim" style="--d:.1s">
    <div class="au-label-row">
      <span class="au-dash"></span>
      <span class="au-label">🇦🇪 <strong>Made</strong> in UAE</span>
    </div>
    <p class="au-body">
      Adeptus is proudly 'Made in UAE', in the sense our IoT platform, <span class="au-primary">Beconix
      AI</span>, is fully developed locally and in-house by our team of software
      developers, based in the UAE.
    </p>
    <p class="au-body">
      We have a GCC-wide reach for addressing various client projects. Our Head
      Office hosts an intelligent 24×7 Command and Control Centre, powered by
      <span class="au-primary">Beconix AI</span> used by our operators to deliver managed services.
    </p>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════
     INDUSTRIES WE SERVE
════════════════════════════════════════════════════════════ -->
<section
  id="industries"
  bind:this={industryEl}
  class="iws-wrap"
  class:iws-vis={iwsVisible}
>
  <div class="iws-bg-grid" aria-hidden="true"></div>
  <div class="iws-entry-overlay" aria-hidden="true"></div>

  <!-- ── Atmospheric depth gradient ── -->
  <div class="iws-fog" aria-hidden="true"></div>

  <!-- ── Pulsing ambient glow centered on arc hub ── -->
  <div class="iws-ambient" aria-hidden="true"></div>

  <!-- ── Scan-line CRT texture ── -->
  <div class="iws-scanlines" aria-hidden="true"></div>

  <!-- ── HUD corner brackets ── -->
  <div class="iws-hud" aria-hidden="true">
    <span class="iws-hud-tl"></span>
    <span class="iws-hud-tr"></span>
    <span class="iws-hud-bl"></span>
    <span class="iws-hud-br"></span>
  </div>

  <!-- ── Enhanced concentric arc rings with animated hub ── -->
  <svg class="iws-arcs" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="iwsHubG" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="#F45E2A" stop-opacity=".45"/>
        <stop offset="55%"  stop-color="#F45E2A" stop-opacity=".09"/>
        <stop offset="100%" stop-color="#F45E2A" stop-opacity="0"/>
      </radialGradient>
      <filter id="iwsNF" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="3.5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="iwsHF" x="-120%" y="-120%" width="340%" height="340%">
        <feGaussianBlur stdDeviation="16" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <circle cx="620" cy="450" r="430" stroke="#F45E2A" stroke-opacity=".022" stroke-width=".5" stroke-dasharray="6 20"/>
    <circle cx="620" cy="450" r="350" stroke="#F45E2A" stroke-opacity=".038" stroke-width=".6"/>
    <circle cx="620" cy="450" r="268" stroke="#F45E2A" stroke-opacity=".07"  stroke-width=".8" stroke-dasharray="9 14" class="iws-arc-rot"/>
    <circle cx="620" cy="450" r="188" stroke="#F45E2A" stroke-opacity=".11"  stroke-width=".9"/>
    <circle cx="620" cy="450" r="118" stroke="#F45E2A" stroke-opacity=".17"  stroke-width="1" stroke-dasharray="5 9" class="iws-arc-ccw"/>
    <circle cx="620" cy="450" r="66"  stroke="#F45E2A" stroke-opacity=".26"  stroke-width="1.2"/>
    <line x1="620" y1="96"  x2="620" y2="80"  stroke="#F45E2A" stroke-opacity=".4" stroke-width="1.5"/>
    <line x1="620" y1="804" x2="620" y2="820" stroke="#F45E2A" stroke-opacity=".4" stroke-width="1.5"/>
    <line x1="266" y1="450" x2="250" y2="450" stroke="#F45E2A" stroke-opacity=".4" stroke-width="1.5"/>
    <line x1="974" y1="450" x2="990" y2="450" stroke="#F45E2A" stroke-opacity=".4" stroke-width="1.5"/>
    <line x1="620" y1="382" x2="620" y2="370" stroke="#F45E2A" stroke-opacity=".55" stroke-width="1.3"/>
    <line x1="620" y1="518" x2="620" y2="530" stroke="#F45E2A" stroke-opacity=".55" stroke-width="1.3"/>
    <line x1="552" y1="450" x2="540" y2="450" stroke="#F45E2A" stroke-opacity=".55" stroke-width="1.3"/>
    <line x1="688" y1="450" x2="700" y2="450" stroke="#F45E2A" stroke-opacity=".55" stroke-width="1.3"/>
    <line x1="620" y1="450" x2="764" y2="306" stroke="#F45E2A" stroke-opacity=".05" stroke-width=".7" stroke-dasharray="4 7"/>
    <line x1="620" y1="450" x2="764" y2="594" stroke="#F45E2A" stroke-opacity=".05" stroke-width=".7" stroke-dasharray="4 7"/>
    <line x1="620" y1="450" x2="476" y2="306" stroke="#F45E2A" stroke-opacity=".05" stroke-width=".7" stroke-dasharray="4 7"/>
    <line x1="620" y1="450" x2="476" y2="594" stroke="#F45E2A" stroke-opacity=".05" stroke-width=".7" stroke-dasharray="4 7"/>
    <circle cx="620" cy="262" r="6"   fill="#F45E2A" fill-opacity=".78" filter="url(#iwsNF)" class="iws-np1"/>
    <circle cx="620" cy="262" r="3"   fill="#fff"    fill-opacity=".88"/>
    <circle cx="808" cy="450" r="5.5" fill="#F45E2A" fill-opacity=".65" filter="url(#iwsNF)"/>
    <circle cx="808" cy="450" r="2.8" fill="#fff"    fill-opacity=".78"/>
    <circle cx="620" cy="638" r="4.5" fill="#F45E2A" fill-opacity=".55"/>
    <circle cx="432" cy="450" r="3.8" fill="#F45E2A" fill-opacity=".48"/>
    <circle cx="763" cy="307" r="4.5" fill="#F45E2A" fill-opacity=".62" filter="url(#iwsNF)" class="iws-np2"/>
    <circle cx="763" cy="593" r="4"   fill="#F45E2A" fill-opacity=".55"/>
    <circle cx="477" cy="307" r="3.8" fill="#F45E2A" fill-opacity=".5"/>
    <circle cx="477" cy="593" r="4.5" fill="#F45E2A" fill-opacity=".60" filter="url(#iwsNF)" class="iws-np2"/>
    <rect x="750" y="395" width="7.5" height="7.5" fill="none" stroke="#F45E2A" stroke-opacity=".35" stroke-width=".8" transform="rotate(45 753.75 398.75)"/>
    <rect x="483"  y="500" width="6.5" height="6.5" fill="none" stroke="#F45E2A" stroke-opacity=".30" stroke-width=".7" transform="rotate(45 486.25 503.25)"/>
    <rect x="614"  y="628" width="6"   height="6"   fill="none" stroke="#F45E2A" stroke-opacity=".28" stroke-width=".7" transform="rotate(45 617 631)"/>
    <circle cx="620" cy="450" r="100" fill="url(#iwsHubG)"/>
    <circle cx="620" cy="450" r="44" fill="#F45E2A" fill-opacity=".08" filter="url(#iwsHF)" class="iws-hub-pulse"/>
    <circle cx="620" cy="450" r="11" fill="#F45E2A" fill-opacity=".72" filter="url(#iwsNF)"/>
    <circle cx="620" cy="450" r="5.5" fill="#ffb460" fill-opacity=".92"/>
    <circle cx="620" cy="450" r="2.5" fill="#fff"    fill-opacity=".92"/>
  </svg>

  <!-- ── Giant background word ── -->
  <div class="iws-bg-word" aria-hidden="true">
    <div class="iws-bg-l1">Industries</div>
    <div class="iws-bg-l2">We Serve</div>
  </div>

  <!-- ── Left: numbered industry list ── -->
  <nav class="iws-numlist" aria-label="Industries we serve">
    <div class="iws-numitem iws-anim" style="--cd:.04s">
      <span class="iws-num">01</span><span class="iws-nname">Real Estate</span>
    </div>
    <div class="iws-numitem iws-anim" style="--cd:.08s">
      <span class="iws-num">02</span><span class="iws-nname">Facilities Management</span>
    </div>
    <div class="iws-numitem iws-numitem-active iws-anim" style="--cd:.12s">
      <span class="iws-num">03</span><span class="iws-nname">Government</span>
    </div>
    <div class="iws-numitem iws-anim" style="--cd:.16s">
      <span class="iws-num">04</span><span class="iws-nname">Construction &amp; Contracting</span>
    </div>
    <div class="iws-numitem iws-anim" style="--cd:.20s">
      <span class="iws-num">05</span><span class="iws-nname">Educational Institutions</span>
    </div>
    <div class="iws-numitem iws-anim" style="--cd:.24s">
      <span class="iws-num">06</span><span class="iws-nname">Heavy Machinery &amp; Fleet</span>
    </div>
    <div class="iws-numitem iws-anim" style="--cd:.28s">
      <span class="iws-num">07</span><span class="iws-nname">Manufacturing</span>
    </div>
    <div class="iws-numitem iws-anim" style="--cd:.32s">
      <span class="iws-num">08</span><span class="iws-nname">Waste Management</span>
    </div>
  </nav>

  <!-- ── Center: info panel ── -->
  <div class="iws-panel iws-anim" style="--cd:.18s">
    <p class="iws-section-lbl">What We Cover</p>
    <h2 class="iws-h-main">
      <span class="iws-h-solid">Industries</span>
      <span class="iws-h-outline">We Serve</span>
    </h2>
    <p class="iws-tagline">Delivering intelligent IoT solutions across key industry verticals in the GCC region and beyond.</p>
  </div>

  <!-- ── Horizontal connector: panel → active circle ── -->
  <div class="iws-connector iws-anim" style="--cd:.30s" aria-hidden="true"></div>

  <!-- ── Right: circular industry icons ── -->
  <div class="iws-circles">
    <div class="iws-vcline" aria-hidden="true"></div>
    <div class="iws-circle iws-anim" style="--cd:.12s;--cbg:linear-gradient(145deg,#3a1208,#c03a0a)">
      <span class="iws-cicn">🏢</span>
    </div>
    <div class="iws-circle iws-circle-md iws-anim" style="--cd:.18s;--cbg:linear-gradient(145deg,#081f1f,#0d5a45)">
      <span class="iws-cicn">🔧</span>
    </div>
    <div class="iws-circle iws-circle-active iws-anim" style="--cd:.24s;--cbg:linear-gradient(145deg,#0a0f30,#1a2a7a)">
      <span class="iws-cicn">🏛️</span>
    </div>
    <div class="iws-circle iws-circle-md iws-anim" style="--cd:.30s;--cbg:linear-gradient(145deg,#1a1205,#7a4010)">
      <span class="iws-cicn">🏗️</span>
    </div>
    <div class="iws-circle iws-anim" style="--cd:.36s;--cbg:linear-gradient(145deg,#180a2a,#4a1a8a)">
      <span class="iws-cicn">🎓</span>
    </div>
  </div>

</section>

<!-- ════════════════════════════════════════════════════════════
     IMPACT METRICS
════════════════════════════════════════════════════════════ -->
<section
  id="impact-metrics"
  bind:this={impactEl}
  class="im-wrap"
  class:im-vis={impactVisible}
>
  <div class="im-bg-grid" aria-hidden="true"></div>
  <div class="im-entry-overlay" aria-hidden="true"></div>

  <!-- ── Scan-line CRT texture ── -->
  <div class="im-scanlines" aria-hidden="true"></div>

  <!-- ── HUD corner brackets ── -->
  <div class="im-hud" aria-hidden="true">
    <span class="im-hud-tl"></span>
    <span class="im-hud-tr"></span>
    <span class="im-hud-bl"></span>
    <span class="im-hud-br"></span>
  </div>

  <!-- ── Ambient centre glow ── -->
  <div class="im-glow" aria-hidden="true"></div>

  <!-- ── Ghost background word ── -->
  <div class="im-ghost" aria-hidden="true">Footprint.</div>

  <!-- ── Top half: hero heading + right accordion panels ── -->
  <div class="im-top">

    <!-- Left: hero heading -->
    <div class="im-hero im-anim" style="--id:.05s">
      <p class="im-section-lbl"><span class="im-lbl-dash">— </span>Impact Metrics</p>
      <h2 class="im-hero-heading">Our Growing<br>Footprint<span class="im-head-dot">.</span></h2>
      <p class="im-hero-sub">Our footprint is getting bigger by the day and as on date our technology has achieved remarkable milestones.</p>
      <!-- Decorative dash row -->
      <div class="im-hero-rule" aria-hidden="true">
        <span class="im-rule-line"></span>
        <span class="im-rule-dot"></span>
        <span class="im-rule-line im-rule-short"></span>
      </div>
    </div>

    <!-- Right: two glass panel cards -->
    <div class="im-panels">

      <div class="im-panel im-anim" style="--id:.15s">
        <div class="im-panel-hd">
          <span class="im-panel-title">Client Success</span>
          <div class="im-panel-bar"></div>
        </div>
        <p class="im-panel-stat">50<span class="im-pct">%+</span></p>
        <p class="im-panel-body">Feedback from clients has been very encouraging, with significant savings in energy consumption — in many cases more than 50% savings in overall OPEX.</p>
      </div>

      <div class="im-panel im-anim" style="--id:.25s">
        <div class="im-panel-hd">
          <span class="im-panel-title">Industry Recognition</span>
          <div class="im-panel-bar"></div>
        </div>
        <p class="im-panel-award">🏆 Top FM Supplier 2019</p>
        <p class="im-panel-body">Voted one of the Top FM Suppliers for 2019 (technology vendor) by Facilities Management ME — ITP Media Group.</p>
      </div>

    </div>
  </div>

  <!-- ── Bottom bar: location | stats grid | cta ── -->
  <div class="im-bottom">

    <!-- Location context -->
    <div class="im-loc im-anim" style="--id:.10s">
      <div class="im-loc-rings" aria-hidden="true"></div>
      <div class="im-loc-flag">🇦🇪</div>
      <div class="im-loc-name">UAE</div>
      <div class="im-loc-sub">Technology Hub</div>
      <div class="im-loc-since">Since 2019</div>
    </div>

    <!-- Key stats 2×2 grid -->
    <div class="im-stats im-anim" style="--id:.20s">
      <div class="im-stat">
        <span class="im-stat-icon">🏢</span>
        <span class="im-stat-num">25M<span class="im-stat-sup">+</span></span>
        <span class="im-stat-lbl">Sq.Ft. Served</span>
        <div class="im-stat-track"><div class="im-stat-fill" style="--w:88%"></div></div>
      </div>
      <div class="im-stat">
        <span class="im-stat-icon">🏗️</span>
        <span class="im-stat-num">100<span class="im-stat-sup">+</span></span>
        <span class="im-stat-lbl">Buildings</span>
        <div class="im-stat-track"><div class="im-stat-fill" style="--w:72%"></div></div>
      </div>
      <div class="im-stat">
        <span class="im-stat-icon">⚙️</span>
        <span class="im-stat-num">10K<span class="im-stat-sup">+</span></span>
        <span class="im-stat-lbl">Assets</span>
        <div class="im-stat-track"><div class="im-stat-fill" style="--w:65%"></div></div>
      </div>
      <div class="im-stat">
        <span class="im-stat-icon">👥</span>
        <span class="im-stat-num">500K<span class="im-stat-sup">+</span></span>
        <span class="im-stat-lbl">Residents</span>
        <div class="im-stat-track"><div class="im-stat-fill" style="--w:95%"></div></div>
      </div>
    </div>

    <!-- CTA column -->
    <div class="im-cta im-anim" style="--id:.32s">
      <p class="im-cta-text">Powering smart buildings and intelligent infrastructure across the UAE and GCC region.</p>
      <div class="im-cta-link" aria-hidden="true">
        <span>Explore More</span>
        <span class="im-arrow">——→</span>
      </div>
    </div>

  </div>
</section>

<!-- ════════════════════════════════════════════════════════════
     BECONIX AI — sticky 2-panel scroll section
════════════════════════════════════════════════════════════ -->
<div class="bai-outer" bind:this={baiOuterEl}>
<section class="bai-wrap">

  <!-- Exit fade-to-dark overlay -->
  <div class="bai-exit-overlay" bind:this={baiExitEl} aria-hidden="true"></div>

  <!-- Right-side navigation -->
  <nav class="bai-nav" aria-label="Beconix AI navigation">
    <button class="bai-nav-item active" bind:this={baiNav0El} on:click={() => baiScrollTo(0)}>
      <span class="bai-nav-lbl">Platform</span>
      <span class="bai-nav-idx">01</span>
      <div class="bai-nav-dot active" bind:this={baiDot0El} aria-hidden="true"></div>
    </button>
    <div class="bai-track-wrap" aria-hidden="true">
      <div class="bai-track">
        <div class="bai-fill" bind:this={baiNavFillEl}></div>
        <div class="bai-ind"  bind:this={baiNavIndicatorEl}></div>
      </div>
    </div>
    <button class="bai-nav-item" bind:this={baiNav1El} on:click={() => baiScrollTo(1)}>
      <span class="bai-nav-lbl">Capabilities</span>
      <span class="bai-nav-idx">02</span>
      <div class="bai-nav-dot" bind:this={baiDot1El} aria-hidden="true"></div>
    </button>
  </nav>

  <!-- ══ PANEL 0: BECONIX AI PLATFORM ══ -->
  <div class="bai-panel bai-p0" bind:this={baiPanel0El}>

    <!-- Background layers -->
    <div class="bai-p0-grid"     aria-hidden="true"></div>
    <div class="bai-p0-scanlines" aria-hidden="true"></div>
    <div class="bai-p0-ghost"    aria-hidden="true">AI</div>
    <div class="bai-p0-hud"      aria-hidden="true">
      <span class="bai-p0-hud-tl"></span><span class="bai-p0-hud-tr"></span>
      <span class="bai-p0-hud-bl"></span><span class="bai-p0-hud-br"></span>
    </div>


    <!-- Main area -->
    <div class="bai-p0-body">

      <!-- Left: heading + text -->
      <div class="bai-p0-left">
        <div class="bai-accent-rule bai-a0" style="--bd:.03s" aria-hidden="true">
          <span class="bai-ar-line"></span>
          <span class="bai-ar-dot"></span>
        </div>
        <span class="bai-idx bai-a0" style="--bd:.08s">01</span>
        <div class="bai-hdg-wrap">
          <div class="overflow-hidden">
            <h2 class="bai-hdg bai-a0" style="--bd:.14s">BECONIX</h2>
          </div>
          <div class="overflow-hidden">
            <h2 class="bai-hdg bai-hdg-out bai-a0" style="--bd:.26s">AI</h2>
          </div>
        </div>
        <p class="bai-sub bai-a0" style="--bd:.38s">
          Make your infrastructure<br>the intelligent choice
        </p>
        <p class="bai-body-txt bai-a0" style="--bd:.48s">
          Our flagship IoT platform, powering intelligent building management
          and 24×7 command &amp; control operations across the GCC region.
        </p>
        <div class="bai-chips bai-a0" style="--bd:.60s">
          <span class="bai-chip">Predictive AI</span>
          <span class="bai-chip">IoT Native</span>
          <span class="bai-chip">Cloud Ready</span>
        </div>
      </div>

      <!-- Right: AI head visual with rings + HUD tags -->
      <div class="bai-ai-wrap bai-burst-fade" style="--bd:.2s" aria-hidden="true">
        <div class="bai-ai-ring bai-ring-1" aria-hidden="true"></div>
        <div class="bai-ai-ring bai-ring-2" aria-hidden="true"></div>
        <div class="bai-ai-ring bai-ring-3" aria-hidden="true"></div>
        <div class="bai-ai-glow"  aria-hidden="true"></div>
        <img src="/beconix-ai-head.png" alt="" class="bai-ai-img" draggable="false"/>
        <div class="bai-htag bai-htag-1"><span class="bai-htag-dot"></span>Real-time Data Processing</div>
        <div class="bai-htag bai-htag-2"><span class="bai-htag-dot"></span>Predictive Maintenance</div>
        <div class="bai-htag bai-htag-3"><span class="bai-htag-dot"></span>Automated Controls</div>
        <div class="bai-htag bai-htag-4"><span class="bai-htag-dot"></span>Energy Optimization</div>
      </div>

    </div><!-- /bai-p0-body -->

    <!-- Bottom row -->
    <div class="bai-prog-row bai-a0" style="--bd:.72s">
      <div class="bai-prog-track"><div class="bai-prog-fill"></div></div>
      <button class="bai-prog-lbl" on:click={() => baiScrollTo(1)}>
        Scroll to Capabilities
        <svg class="w-3 h-3 inline ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <span class="bai-brand-lbl">Adeptus Technologies</span>
    </div>

  </div><!-- /bai-p0 -->

  <!-- ══ PANEL 1: PLATFORM CAPABILITIES — dark background ══ -->
  <div class="bai-panel bai-p1" bind:this={baiPanel1El}>

    <div class="bai-bg-grid" aria-hidden="true"></div>
    <div class="bai-watermark" aria-hidden="true">BECONIX</div>

    <!-- Top bar -->
    <div class="bai-topbar">
      <div class="bai-p1-topbar-left">
        <span class="bai-p1-topbar-dot"></span>
        <span class="bai-p1-topbar-brand">Beconix AI.</span>
      </div>
      <div class="bai-topdash bai-topdash-dark" aria-hidden="true">
        <span class="bai-dash-long"></span>
        <span class="bai-dash-short"></span>
      </div>
    </div>

    <!-- Content -->
    <div class="bai-p1-grid">

      <!-- Left: heading + description + chips -->
      <div class="bai-p1-left">
        <div class="bai-p1-deco bai-a1" aria-hidden="true">
          <svg viewBox="0 0 120 120" class="w-full h-full" fill="none">
            {#each Array(5) as _, row}
              {#each Array(5) as _, col}
                <circle
                  cx={12 + col * 24} cy={12 + row * 24} r="1.8"
                  fill="rgba(244,94,42,{0.08 + (row + col) * 0.022})"
                />
              {/each}
            {/each}
            <line x1="12"  y1="12"  x2="108" y2="12"  stroke="rgba(244,94,42,.12)" stroke-width=".5"/>
            <line x1="12"  y1="36"  x2="108" y2="36"  stroke="rgba(244,94,42,.07)" stroke-width=".5"/>
            <line x1="12"  y1="60"  x2="108" y2="60"  stroke="rgba(244,94,42,.10)" stroke-width=".5"/>
            <line x1="12"  y1="12"  x2="12"  y2="108" stroke="rgba(244,94,42,.12)" stroke-width=".5"/>
            <line x1="108" y1="12"  x2="108" y2="108" stroke="rgba(244,94,42,.07)" stroke-width=".5"/>
            <rect x="0"   y="0"   width="24" height="24" fill="none" stroke="#F45E2A" stroke-width="1" opacity=".25"/>
            <rect x="96"  y="96"  width="24" height="24" fill="none" stroke="#F45E2A" stroke-width="1" opacity=".12"/>
          </svg>
        </div>
        <div class="overflow-hidden">
          <h2 class="bai-p1-hdg bai-a1" style="--bd:0s">Intelligent</h2>
        </div>
        <div class="overflow-hidden">
          <h2 class="bai-p1-hdg bai-p1-hdg-out bai-a1" style="--bd:.1s">Control.</h2>
        </div>
        <p class="bai-p1-desc bai-a1" style="--bd:.2s">
          Advanced AI-powered platform that seamlessly integrates with building systems to provide comprehensive monitoring, control, and automation capabilities.
        </p>
        <div class="bai-chips bai-a1" style="--bd:.3s">
          <span class="bai-chip">AI-Driven Analytics</span>
          <span class="bai-chip">Cloud-Based Infrastructure</span>
        </div>
        <div class="bai-p1-vline bai-a1" style="--bd:.38s" aria-hidden="true"></div>
      </div>

      <!-- Right: feature blocks + UAE badge -->
      <div class="bai-p1-right">

        <div class="bai-cap bai-a1" style="--bd:.15s">
          <div class="bai-cap-accent"></div>
          <h3 class="bai-cap-title">24/7 Command Center</h3>
          <p class="bai-cap-desc">Round-the-clock monitoring and support for all connected building systems and assets.</p>
        </div>

        <div class="bai-p1-sep bai-a1" style="--bd:.25s" aria-hidden="true"></div>

        <div class="bai-cap bai-a1" style="--bd:.35s">
          <div class="bai-cap-accent"></div>
          <h3 class="bai-cap-title">GCC-Wide Reach</h3>
          <p class="bai-cap-desc">Regional coverage and scalability across the GCC, serving enterprise clients at scale.</p>
        </div>

        <div class="bai-uae bai-a1" style="--bd:.48s">
          <span class="bai-uae-flag">🇦🇪</span>
          <div class="bai-uae-info">
            <span class="bai-uae-title">100% Made in UAE</span>
            <span class="bai-uae-sub">Locally developed and supported</span>
          </div>
        </div>

      </div>
    </div><!-- /bai-p1-grid -->

    <!-- Bottom row -->
    <div class="bai-prog-row bai-prog-row-dark bai-a1" style="--bd:.6s">
      <div class="bai-prog-track bai-prog-track-dark"><div class="bai-prog-fill bai-fill-p1"></div></div>
      <button class="bai-prog-lbl bai-prog-lbl-dark" on:click={() => baiScrollTo(0)}>
        <svg class="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
        </svg>
        Back to Platform
      </button>
      <span class="bai-brand-lbl bai-brand-dark">Adeptus Technologies</span>
    </div>

  </div><!-- /bai-p1 -->

</section>
</div><!-- /bai-outer -->

<style>
  /* ── Section ───────────────────────────────────────────────────────────── */
  .au-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #1d2323;
    overflow: hidden;
  }

  /* ── Entry fade-from-dark overlay ─────────────────────────────────────── */
  .au-entry-overlay {
    position: absolute;
    inset: 0;
    background: #1d2323;
    opacity: 1;
    pointer-events: none;
    z-index: 50;
    transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
  .au-vis .au-entry-overlay {
    opacity: 0;
  }

  /* ── Background grid (identical to About.svelte) ──────────────────────── */
  .au-bg-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        rgba(244, 94, 42, 0.03) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(244, 94, 42, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  /* ── Ambient center glow — pulses gently ───────────────────────────────── */
  .au-bg-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 70vh;
    background: radial-gradient(
      ellipse at center,
      rgba(244, 94, 42, 0.13) 0%,
      transparent 62%
    );
    pointer-events: none;
    z-index: 0;
    animation: auGlowPulse 6s ease-in-out infinite;
  }

  /* ── Subtle scan-line texture ──────────────────────────────────────────── */
  .au-scanlines {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(0, 0, 0, 0.045) 3px,
      rgba(0, 0, 0, 0.045) 4px
    );
    pointer-events: none;
    z-index: 9;
  }

  /* ── HUD frame corner brackets ─────────────────────────────────────────── */
  .au-hud {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 8;
  }
  .au-hud-tl,
  .au-hud-tr,
  .au-hud-bl,
  .au-hud-br {
    position: absolute;
    width: 22px;
    height: 22px;
    opacity: 0;
    transition:
      opacity  0.6s ease 0.6s,
      transform 0.6s cubic-bezier(.34, 1.56, .64, 1) 0.6s;
  }
  .au-vis .au-hud-tl,
  .au-vis .au-hud-tr,
  .au-vis .au-hud-bl,
  .au-vis .au-hud-br {
    opacity: 1;
    transform: scale(1) !important;
  }
  .au-hud-tl {
    top: 18px;
    left: 18px;
    border-top: 1px solid rgba(244, 94, 42, 0.5);
    border-left: 1px solid rgba(244, 94, 42, 0.5);
    transform-origin: top left;
    transform: scale(0.2);
  }
  .au-hud-tr {
    top: 18px;
    right: 18px;
    border-top: 1px solid rgba(244, 94, 42, 0.5);
    border-right: 1px solid rgba(244, 94, 42, 0.5);
    transform-origin: top right;
    transform: scale(0.2);
  }
  .au-hud-bl {
    bottom: 18px;
    left: 18px;
    border-bottom: 1px solid rgba(244, 94, 42, 0.5);
    border-left: 1px solid rgba(244, 94, 42, 0.5);
    transform-origin: bottom left;
    transform: scale(0.2);
  }
  .au-hud-br {
    bottom: 18px;
    right: 18px;
    border-bottom: 1px solid rgba(244, 94, 42, 0.5);
    border-right: 1px solid rgba(244, 94, 42, 0.5);
    transform-origin: bottom right;
    transform: scale(0.2);
  }

  /* ── Giant background word — matches About.svelte heading style ─────────── */
  .au-word {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -56%) scale(1.08);
    white-space: nowrap;
    line-height: 1;
    pointer-events: none;
    user-select: none;
    z-index: 1;
    opacity: 0;
    transition:
      opacity  1.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s,
      transform 1.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  }
  .au-vis .au-word {
    opacity: 1;
    transform: translate(-50%, -56%) scale(1);
  }
  .au-word-solid,
  .au-word-outline {
    display: inline;
    font-size: clamp(5rem, 15vw, 14rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  /* "About" — solid white, same as "Our" */
  .au-word-solid {
    color: #fff;
  }
  /* "Us" — stroke only, same as "Mission." */
  .au-word-outline {
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.45);
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* ── Orb container — breathing glow ────────────────────────────────────── */
  .au-orb-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.68);
    width: clamp(260px, 40vw, 560px);
    height: clamp(260px, 40vw, 560px);
    z-index: 2;
    opacity: 0;
    animation: auOrbGlow 4.5s ease-in-out infinite;
    transition:
      opacity  1.3s cubic-bezier(.22, 1, .36, 1) 0.3s,
      transform 1.3s cubic-bezier(.22, 1, .36, 1) 0.3s;
  }
  .au-vis .au-orb-wrap {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  .au-orb-svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* Rotating rings */
  .au-ring-cw {
    transform-origin: 220px 220px;
    animation: auRotateCW 14s linear infinite;
  }
  .au-ring-ccw {
    transform-origin: 220px 220px;
    animation: auRotateCCW 22s linear infinite;
  }
  .au-np {
    animation: auNodePulse 2.8s ease-in-out infinite;
  }

  /* ── Full-viewport connector lines ─────────────────────────────────────── */
  .au-lines {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 3;
    opacity: 0;
    transition: opacity 1.4s ease 0.7s;
  }
  .au-vis .au-lines {
    opacity: 1;
  }

  /* ── Corner blocks — left accent border + glass tint ───────────────────── */
  .au-block {
    position: absolute;
    z-index: 4;
    max-width: clamp(200px, 18vw, 270px);
    border-left: 2px solid rgba(244, 94, 42, 0.38);
    padding-left: 1.1rem;
    background: rgba(244, 94, 42, 0.025);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
  .au-tl {
    top: 5%;
    left: 4%;
    max-width: 350px;
  }
  .au-br {
    bottom: 5%;
    right: 4%;
    max-width: 350px;
  }

  /* ── Label row ──────────────────────────────────────────────────────────── */
  .au-label-row {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin-bottom: 0.65rem;
  }
  .au-dash {
    width: 16px;
    height: 2px;
    background: linear-gradient(90deg, #f45e2a, rgba(244, 94, 42, 0.4));
    flex-shrink: 0;
  }
  .au-label {
    font-size: clamp(0.58rem, 0.8vw, 0.68rem);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.82);
    font-weight: 400;
  }
  .au-label strong {
    font-weight: 800;
  }

  /* ── Body copy ──────────────────────────────────────────────────────────── */
  .au-body {
    font-size: clamp(0.62rem, 0.82vw, 0.73rem);
    color: rgba(255, 255, 255, 0.42);
    line-height: 1.8;
    font-weight: 300;
    margin-bottom: 0.9rem;
  }
  .au-primary {
    color: #f45e2a;
  }

  /* ── Entrance animations ────────────────────────────────────────────────── */
  .au-anim {
    opacity: 0;
    transform: translateY(28px) scale(0.95);
    transition:
      opacity  1.1s cubic-bezier(.22, 1, .36, 1) var(--d, 0s),
      transform 1.1s cubic-bezier(.22, 1, .36, 1) var(--d, 0s);
  }
  .au-vis .au-anim {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  /* TL block — slides in from top-left */
  .au-tl.au-anim {
    transform: translate(-22px, -22px) scale(0.95);
  }
  .au-vis .au-tl.au-anim {
    transform: translate(0, 0) scale(1);
  }
  /* BR block — slides in from bottom-right */
  .au-br.au-anim {
    transform: translate(22px, 22px) scale(0.95);
  }
  .au-vis .au-br.au-anim {
    transform: translate(0, 0) scale(1);
  }

  /* ── Keyframes ──────────────────────────────────────────────────────────── */
  @keyframes auGlowPulse {
    0%,
    100% {
      opacity: 0.75;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.18);
    }
  }
  @keyframes auOrbGlow {
    0%,
    100% {
      filter: drop-shadow(0 0 24px rgba(244, 94, 42, 0.2));
    }
    50% {
      filter: drop-shadow(0 0 52px rgba(244, 94, 42, 0.48));
    }
  }
  @keyframes auRotateCW {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes auRotateCCW {
    to {
      transform: rotate(-360deg);
    }
  }
  @keyframes auNodePulse {
    0%,
    100% {
      opacity: 0.85;
      transform: scale(1);
    }
    50% {
      opacity: 0.3;
      transform: scale(1.8);
    }
  }

  /* ── Responsive ─────────────────────────────────────────────────────────── */
  @media (max-width: 900px) {
    .au-orb-wrap {
      width: clamp(200px, 65vw, 380px);
      height: clamp(200px, 65vw, 380px);
    }
    .au-block {
      max-width: 160px;
    }
    .au-tl {
      top: 3%;
      left: 3%;
    }
    .au-br {
      bottom: 3%;
      right: 3%;
    }
    .au-word {
      font-size: clamp(4rem, 18vw, 9rem);
    }
  }

  @media (max-width: 600px) {
    .au-block {
      display: none;
    }
    .au-orb-wrap {
      width: 80vw;
      height: 80vw;
    }
  }

  /* ═══════════════════════════════════════════════════════════════
     INDUSTRIES WE SERVE — all styles prefixed .iws-
  ═══════════════════════════════════════════════════════════════ */

  .iws-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #1d2323;
    overflow: hidden;
  }

  /* Background grid */
  .iws-bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(244,94,42,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(244,94,42,.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  /* Entry fade-from-dark overlay */
  .iws-entry-overlay {
    position: absolute;
    inset: 0;
    background: #1d2323;
    opacity: 1;
    pointer-events: none;
    z-index: 50;
    transition: opacity 1.1s cubic-bezier(0.4,0,0.2,1) 0.05s;
  }
  .iws-vis .iws-entry-overlay { opacity: 0; }

  /* Atmospheric depth — edge vignette + warm center glow */
  .iws-fog {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 65% 60% at 62% 50%, rgba(244,94,42,.09) 0%, transparent 65%),
      linear-gradient(to bottom, rgba(29,35,35,0) 20%, rgba(29,35,35,.7) 100%),
      linear-gradient(to right, rgba(29,35,35,.62) 0%, transparent 36%, transparent 55%, rgba(29,35,35,.68) 100%);
    pointer-events: none;
    z-index: 3;
  }

  /* Pulsing ambient glow — positioned behind the arc hub */
  .iws-ambient {
    position: absolute;
    right: -5%;
    top: 50%;
    transform: translateY(-50%);
    width: 58%;
    height: 85%;
    background: radial-gradient(ellipse 48% 55% at 68% 50%, rgba(244,94,42,.13) 0%, rgba(244,94,42,.04) 40%, transparent 72%);
    pointer-events: none;
    z-index: 1;
    animation: iwsAmbientPulse 5.5s ease-in-out infinite;
  }

  /* Scan-line CRT texture */
  .iws-scanlines {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      0deg, transparent, transparent 3px,
      rgba(0,0,0,.042) 3px, rgba(0,0,0,.042) 4px
    );
    pointer-events: none;
    z-index: 8;
  }

  /* HUD corner brackets */
  .iws-hud { position: absolute; inset: 0; pointer-events: none; z-index: 8; }
  .iws-hud-tl, .iws-hud-tr, .iws-hud-bl, .iws-hud-br { position: absolute; width: 22px; height: 22px; }
  .iws-hud-tl { top: 18px; left: 18px; border-top: 1px solid rgba(244,94,42,.5); border-left: 1px solid rgba(244,94,42,.5); }
  .iws-hud-tr { top: 18px; right: 18px; border-top: 1px solid rgba(244,94,42,.5); border-right: 1px solid rgba(244,94,42,.5); }
  .iws-hud-bl { bottom: 18px; left: 18px; border-bottom: 1px solid rgba(244,94,42,.5); border-left: 1px solid rgba(244,94,42,.5); }
  .iws-hud-br { bottom: 18px; right: 18px; border-bottom: 1px solid rgba(244,94,42,.5); border-right: 1px solid rgba(244,94,42,.5); }

  /* Concentric arc rings SVG */
  .iws-arcs {
    position: absolute;
    right: -8%;
    top: 50%;
    transform: translateY(-50%);
    width: 66%;
    height: 80%;
    pointer-events: none;
    z-index: 2;
  }

  /* Arc ring animations */
  .iws-arc-rot  { transform-origin: 620px 450px; animation: iwsArcCW  22s linear infinite; }
  .iws-arc-ccw  { transform-origin: 620px 450px; animation: iwsArcCCW 30s linear infinite; }
  .iws-np1      { animation: iwsNodePulse 3s ease-in-out infinite; transform-origin: 620px 262px; }
  .iws-np2      { animation: iwsNodePulse 3.8s ease-in-out infinite .7s; }
  .iws-hub-pulse { animation: iwsHubGlow 4s ease-in-out infinite; transform-origin: 620px 450px; }

  /* Giant background word */
  .iws-bg-word {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    pointer-events: none;
    user-select: none;
    z-index: 2;
    line-height: 0.9;
    opacity: 0;
    transition: opacity 1.6s cubic-bezier(0.4,0,0.2,1) 0.1s;
  }
  .iws-vis .iws-bg-word { opacity: 1; }
  .iws-bg-l1 {
    font-size: clamp(4.5rem, 13vw, 14rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: rgba(255,255,255,.065);
    white-space: nowrap;
  }
  .iws-bg-l2 {
    font-size: clamp(4.5rem, 13vw, 14rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    -webkit-text-stroke: 1.5px rgba(255,255,255,.045);
    -webkit-text-fill-color: transparent;
    color: transparent;
    white-space: nowrap;
  }

  /* ── Left: numbered industry list ── */
  .iws-numlist {
    position: absolute;
    left: 4%;
    bottom: 10%;
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: .28rem;
  }
  .iws-numitem {
    display: flex;
    align-items: baseline;
    gap: .65rem;
  }
  .iws-num {
    font-size: clamp(.9rem, 1.6vw, 1.6rem);
    font-weight: 800;
    color: rgba(255,255,255,.1);
    letter-spacing: -0.02em;
    line-height: 1.2;
    min-width: 2.2rem;
    transition: color .3s, font-size .3s;
  }
  .iws-nname {
    font-size: clamp(.44rem, .58vw, .54rem);
    font-weight: 500;
    letter-spacing: .13em;
    text-transform: uppercase;
    color: rgba(255,255,255,.2);
    transition: color .3s;
    white-space: nowrap;
  }
  /* Active item */
  .iws-numitem-active .iws-num {
    font-size: clamp(1.5rem, 2.8vw, 2.8rem);
    color: rgba(255,255,255,.72);
  }
  .iws-numitem-active .iws-nname {
    font-size: clamp(.5rem, .65vw, .62rem);
    color: rgba(255,255,255,.6);
  }

  /* ── Center: info panel ── */
  .iws-panel {
    position: absolute;
    left: 40%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    max-width: 280px;
    border-left: 2px solid rgba(244,94,42,.48);
    padding-left: 1.4rem;
  }
  .iws-section-lbl {
    font-size: clamp(.44rem,.55vw,.5rem);
    letter-spacing: .35em;
    text-transform: uppercase;
    color: #F45E2A;
    font-weight: 600;
    margin-bottom: .55rem;
  }
  .iws-h-main {
    display: block;
    margin: 0 0 .65rem;
    line-height: 1.02;
  }
  .iws-h-solid {
    display: block;
    font-size: clamp(1.5rem, 2.8vw, 3.4rem);
    font-weight: 900;
    color: #fff;
    letter-spacing: -.025em;
    text-transform: uppercase;
    line-height: 1;
  }
  .iws-h-outline {
    display: block;
    font-size: clamp(1.5rem, 2.8vw, 3.4rem);
    font-weight: 900;
    letter-spacing: -.025em;
    text-transform: uppercase;
    line-height: 1;
    -webkit-text-stroke: 2px rgba(255,255,255,.4);
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
  .iws-tagline {
    font-size: clamp(.52rem,.65vw,.6rem);
    color: rgba(255,255,255,.35);
    line-height: 1.8;
    font-weight: 300;
    margin-top: .5rem;
  }

  /* ── Horizontal connector line: panel → active circle ── */
  .iws-connector {
    position: absolute;
    top: 50%;
    left: calc(40% + 280px + 1.4rem);
    right: calc(3% + 108px);
    height: 1px;
    background: linear-gradient(to right, rgba(244,94,42,.55), rgba(244,94,42,.18));
    transform: translateY(-50%);
    z-index: 4;
    pointer-events: none;
  }

  /* ── Right: circular industry icons ── */
  .iws-circles {
    position: absolute;
    right: 3%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .7rem;
  }
  .iws-circle {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--cbg, rgba(244,94,42,.15));
    border: 1.5px solid rgba(255,255,255,.1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 24px rgba(0,0,0,.45);
    flex-shrink: 0;
  }
  .iws-circle-md {
    width: 80px;
    height: 80px;
  }
  .iws-circle-active {
    width: 108px;
    height: 108px;
    border: 2px solid rgba(244,94,42,.65);
    box-shadow:
      0 0 0 6px rgba(244,94,42,.07),
      0 0 0 12px rgba(244,94,42,.04),
      0 10px 40px rgba(0,0,0,.55);
  }
  .iws-cicn { font-size: 1.45rem; line-height: 1; }
  .iws-circle-active .iws-cicn { font-size: 2.1rem; }

  /* Vertical connector line threading through circles */
  .iws-vcline {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    background: linear-gradient(to bottom,
      transparent 0%,
      rgba(244,94,42,.18) 15%,
      rgba(244,94,42,.35) 50%,
      rgba(244,94,42,.18) 85%,
      transparent 100%
    );
    pointer-events: none;
    z-index: -1;
  }

  /* ── IWS keyframes ── */
  @keyframes iwsAmbientPulse {
    0%, 100% { opacity: .75; transform: translateY(-50%) scale(1); }
    50%       { opacity: 1;   transform: translateY(-50%) scale(1.12); }
  }
  @keyframes iwsArcCW  { to { transform: rotate(360deg);  } }
  @keyframes iwsArcCCW { to { transform: rotate(-360deg); } }
  @keyframes iwsNodePulse {
    0%, 100% { opacity: .85; transform: scale(1); }
    50%       { opacity: .3;  transform: scale(1.9); }
  }
  @keyframes iwsHubGlow {
    0%, 100% { opacity: .7;  transform: scale(1); }
    50%       { opacity: 1;   transform: scale(1.5); }
  }

  /* ── Entrance animations ── */
  .iws-anim {
    opacity: 0;
    transform: translateY(14px);
    transition:
      opacity .9s cubic-bezier(0.4,0,0.2,1) var(--cd,0s),
      transform .9s cubic-bezier(0.4,0,0.2,1) var(--cd,0s);
  }
  .iws-vis .iws-anim { opacity: 1; transform: translateY(0); }

  /* ── IWS responsive ── */
  @media (max-width: 1100px) {
    .iws-panel { left: 36%; }
    .iws-connector { left: calc(36% + 280px + 1.4rem); }
  }
  @media (max-width: 900px) {
    .iws-numlist { display: none; }
    .iws-panel { left: 5%; max-width: 240px; }
    .iws-connector { display: none; }
    .iws-h-solid, .iws-h-outline { font-size: clamp(1.3rem, 4vw, 2.4rem); }
    .iws-circles { right: 2%; }
    .iws-circle { width: 52px; height: 52px; }
    .iws-circle-md { width: 64px; height: 64px; }
    .iws-circle-active { width: 84px; height: 84px; }
    .iws-cicn { font-size: 1.1rem; }
    .iws-circle-active .iws-cicn { font-size: 1.6rem; }
  }
  @media (max-width: 600px) {
    .iws-circles { display: none; }
    .iws-panel { left: 50%; transform: translate(-50%, -50%); }
    .iws-bg-l1, .iws-bg-l2 { font-size: clamp(3rem, 14vw, 6rem); }
  }

  /* ═══════════════════════════════════════════════════════════════
     IMPACT METRICS — all styles prefixed .im-
  ═══════════════════════════════════════════════════════════════ */

  .im-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #1d2323;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  /* Background grid */
  .im-bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(244,94,42,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(244,94,42,.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  /* Entry overlay */
  .im-entry-overlay {
    position: absolute;
    inset: 0;
    background: #1d2323;
    opacity: 1;
    pointer-events: none;
    z-index: 50;
    transition: opacity 1.1s cubic-bezier(0.4,0,0.2,1) 0.05s;
  }
  .im-vis .im-entry-overlay { opacity: 0; }

  /* ── Scan-line CRT texture ── */
  .im-scanlines {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(0,0,0,.045) 3px,
      rgba(0,0,0,.045) 4px
    );
    pointer-events: none;
    z-index: 8;
  }

  /* ── HUD corner brackets ── */
  .im-hud {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 9;
  }
  .im-hud-tl,
  .im-hud-tr,
  .im-hud-bl,
  .im-hud-br {
    position: absolute;
    width: 26px;
    height: 26px;
  }
  .im-hud-tl {
    top: 20px; left: 20px;
    border-top: 1.5px solid rgba(244,94,42,.55);
    border-left: 1.5px solid rgba(244,94,42,.55);
  }
  .im-hud-tr {
    top: 20px; right: 20px;
    border-top: 1.5px solid rgba(244,94,42,.55);
    border-right: 1.5px solid rgba(244,94,42,.55);
  }
  .im-hud-bl {
    bottom: 20px; left: 20px;
    border-bottom: 1.5px solid rgba(244,94,42,.55);
    border-left: 1.5px solid rgba(244,94,42,.55);
  }
  .im-hud-br {
    bottom: 20px; right: 20px;
    border-bottom: 1.5px solid rgba(244,94,42,.55);
    border-right: 1.5px solid rgba(244,94,42,.55);
  }

  /* ── Ambient centre glow ── */
  .im-glow {
    position: absolute;
    top: 30%;
    left: 38%;
    width: 55vw;
    height: 55vw;
    max-width: 800px;
    max-height: 800px;
    transform: translate(-50%, -50%);
    background: radial-gradient(ellipse at center, rgba(244,94,42,.07) 0%, transparent 68%);
    pointer-events: none;
    z-index: 1;
    animation: imGlowPulse 7s ease-in-out infinite;
  }
  @keyframes imGlowPulse {
    0%, 100% { opacity: .7; transform: translate(-50%, -50%) scale(1); }
    50%       { opacity: 1;  transform: translate(-50%, -50%) scale(1.12); }
  }

  /* ── Ghost background word ── */
  .im-ghost {
    position: absolute;
    bottom: 30%;
    left: -1%;
    font-size: clamp(4rem, 14vw, 14rem);
    font-weight: 900;
    letter-spacing: -.04em;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255,255,255,.04);
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    z-index: 1;
    line-height: 1;
  }

  /* ── Section label dash ── */
  .im-lbl-dash {
    color: rgba(244,94,42,.55);
    letter-spacing: 0;
    margin-right: .1em;
  }

  /* ── Heading orange period ── */
  .im-head-dot {
    color: #F45E2A;
  }

  /* ── Decorative dash rule ── */
  .im-hero-rule {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: clamp(.9rem,1.6vh,1.6rem);
  }
  .im-rule-line {
    display: block;
    height: 1px;
    width: 48px;
    background: linear-gradient(to right, #F45E2A, rgba(244,94,42,.18));
  }
  .im-rule-dot {
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #F45E2A;
    flex-shrink: 0;
  }
  .im-rule-short {
    width: 18px;
  }

  /* ── Top half ── */
  .im-top {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 5%;
    gap: 6%;
    position: relative;
    z-index: 4;
    min-height: 0;
  }

  /* ── Bottom bar ── */
  .im-bottom {
    height: 36%;
    display: flex;
    border-top: 1px solid rgba(244,94,42,.14);
    position: relative;
    z-index: 4;
    flex-shrink: 0;
  }

  /* ── Hero heading (left) ── */
  .im-hero {
    flex: 1;
    max-width: 500px;
    min-width: 0;
  }
  .im-section-lbl {
    font-size: clamp(.44rem,.56vw,.5rem);
    letter-spacing: .36em;
    text-transform: uppercase;
    color: #F45E2A;
    font-weight: 600;
    margin-bottom: clamp(.8rem,1.4vh,1.4rem);
  }
  .im-hero-heading {
    font-size: clamp(2.4rem, 5.2vw, 6.2rem);
    font-weight: 900;
    color: #fff;
    letter-spacing: -0.03em;
    line-height: .93;
    text-transform: uppercase;
    margin: 0 0 clamp(.8rem,1.4vh,1.4rem);
  }
  .im-hero-sub {
    font-size: clamp(.52rem,.68vw,.62rem);
    color: rgba(255,255,255,.36);
    line-height: 1.85;
    font-weight: 300;
    max-width: 360px;
  }

  /* ── Right accordion panels ── */
  .im-panels {
    flex: 0 0 auto;
    width: clamp(240px,28vw,380px);
    border-left: 1px solid rgba(244,94,42,.14);
    padding-left: clamp(1.4rem,2vw,2.2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: clamp(.7rem,1.2vh,1.2rem);
  }
  .im-panel {
    padding: clamp(.9rem,1.4vh,1.4rem) clamp(.9rem,1.2vw,1.2rem);
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.06);
    border-top: 2px solid #F45E2A;
    border-radius: 3px;
    backdrop-filter: blur(6px);
  }
  .im-panel:first-child { padding-top: clamp(.9rem,1.4vh,1.4rem); }
  .im-panel:last-child  { border-bottom: 1px solid rgba(255,255,255,.06); }
  .im-panel-hd { margin-bottom: .5rem; }
  .im-panel-title {
    display: block;
    font-size: clamp(.62rem,.85vw,.8rem);
    font-weight: 700;
    color: #F45E2A;
    letter-spacing: .02em;
    margin-bottom: .32rem;
  }
  .im-panel-bar {
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, #F45E2A, rgba(244,94,42,.12));
  }
  .im-panel-stat {
    font-size: clamp(2.2rem, 4.2vw, 4.8rem);
    font-weight: 900;
    color: #fff;
    letter-spacing: -.04em;
    line-height: 1;
    margin: .4rem 0 .45rem;
  }
  .im-pct {
    font-size: .55em;
    color: #F45E2A;
    letter-spacing: 0;
  }
  .im-panel-award {
    font-size: clamp(.6rem,.82vw,.76rem);
    font-weight: 700;
    color: rgba(255,255,255,.88);
    letter-spacing: .06em;
    text-transform: uppercase;
    margin: .4rem 0 .45rem;
  }
  .im-panel-body {
    font-size: clamp(.48rem,.6vw,.56rem);
    color: rgba(255,255,255,.32);
    line-height: 1.82;
    font-weight: 300;
  }

  /* ── Bottom: location block ── */
  .im-loc {
    flex: 0 0 auto;
    width: 20%;
    min-width: 150px;
    padding: clamp(1.2rem,2vh,2rem) clamp(1.2rem,2vw,2rem);
    border-right: 1px solid rgba(255,255,255,.07);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .22rem;
  }
  /* Decorative concentric rings behind location */
  .im-loc-rings {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
  }
  .im-loc-rings::before,
  .im-loc-rings::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(244,94,42,.1);
  }
  .im-loc-rings::before {
    inset: 0;
  }
  .im-loc-rings::after {
    inset: 20px;
    border-color: rgba(244,94,42,.07);
  }
  /* Content in .im-loc sits above rings */
  .im-loc > *:not(.im-loc-rings) { position: relative; z-index: 1; }

  .im-loc-flag { font-size: 1.8rem; margin-bottom: .3rem; line-height: 1; }
  .im-loc-name {
    font-size: clamp(1.2rem,2.2vw,2.2rem);
    font-weight: 900;
    color: #fff;
    letter-spacing: -.03em;
    line-height: 1;
  }
  .im-loc-sub {
    font-size: clamp(.42rem,.52vw,.48rem);
    letter-spacing: .16em;
    text-transform: uppercase;
    color: rgba(255,255,255,.36);
    font-weight: 500;
  }
  .im-loc-since {
    font-size: clamp(.42rem,.52vw,.48rem);
    letter-spacing: .16em;
    text-transform: uppercase;
    color: #F45E2A;
    font-weight: 600;
  }

  /* ── Bottom: stats grid ── */
  .im-stats {
    flex: 1;
    padding: clamp(1rem,1.8vh,1.8rem) clamp(1.8rem,3vw,3.5rem);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: .4rem 2.5rem;
    align-content: center;
    border-right: 1px solid rgba(255,255,255,.07);
  }
  .im-stat {
    display: flex;
    flex-direction: column;
    gap: .08rem;
  }
  .im-stat-icon { font-size: .78rem; line-height: 1; margin-bottom: .12rem; }
  .im-stat-num {
    font-size: clamp(1.1rem,2.2vw,2.5rem);
    font-weight: 900;
    color: #fff;
    letter-spacing: -.04em;
    line-height: 1;
  }
  .im-stat-sup { color: #F45E2A; font-size: .6em; }
  .im-stat-lbl {
    font-size: clamp(.4rem,.5vw,.46rem);
    letter-spacing: .15em;
    text-transform: uppercase;
    color: rgba(255,255,255,.3);
    font-weight: 500;
  }

  /* Stat progress bar */
  .im-stat-track {
    width: 100%;
    height: 2px;
    background: rgba(255,255,255,.07);
    border-radius: 2px;
    margin-top: .3rem;
    overflow: hidden;
  }
  .im-stat-fill {
    height: 100%;
    width: var(--w, 50%);
    background: linear-gradient(to right, #F45E2A, rgba(244,94,42,.45));
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1.1s cubic-bezier(0.4,0,0.2,1) .5s;
  }
  .im-vis .im-stat-fill { transform: scaleX(1); }

  /* ── Bottom: CTA column ── */
  .im-cta {
    flex: 0 0 auto;
    width: 22%;
    min-width: 170px;
    padding: clamp(1.2rem,2vh,2rem) clamp(1.2rem,2vw,2rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .im-cta-text {
    font-size: clamp(.48rem,.62vw,.58rem);
    color: rgba(255,255,255,.28);
    line-height: 1.85;
    font-weight: 300;
  }
  .im-cta-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: .9rem;
    border-top: 1px dashed rgba(244,94,42,.38);
    font-size: clamp(.46rem,.58vw,.54rem);
    letter-spacing: .22em;
    text-transform: uppercase;
    color: #F45E2A;
    font-weight: 700;
    margin-top: auto;
  }
  .im-arrow { letter-spacing: 0; }

  /* ── Entrance animations ── */
  .im-anim {
    opacity: 0;
    transform: translateY(14px);
    transition:
      opacity .9s cubic-bezier(0.4,0,0.2,1) var(--id,0s),
      transform .9s cubic-bezier(0.4,0,0.2,1) var(--id,0s);
  }
  .im-vis .im-anim { opacity: 1; transform: translateY(0); }

  /* ── Impact responsive ── */
  @media (max-width: 1100px) {
    .im-panels { width: clamp(200px,24vw,300px); }
  }
  @media (max-width: 900px) {
    .im-top { flex-direction: column; align-items: flex-start; justify-content: center; padding: 5% 5% 0; gap: 3vh; }
    .im-hero { max-width: 100%; }
    .im-panels { width: 100%; border-left: none; padding-left: 0; border-top: 1px solid rgba(255,255,255,.07); padding-top: 1.5rem; flex-direction: row; gap: 1rem; }
    .im-panel { flex: 1; padding: 0 1rem 0 0; border-bottom: none; border-right: 1px solid rgba(255,255,255,.06); }
    .im-panel:last-child { border-right: none; }
    .im-bottom { height: auto; flex-wrap: wrap; }
    .im-loc { width: 50%; border-bottom: 1px solid rgba(255,255,255,.07); }
    .im-cta { width: 50%; border-bottom: 1px solid rgba(255,255,255,.07); }
    .im-stats { width: 100%; border-right: none; }
  }
  @media (max-width: 600px) {
    .im-panels { flex-direction: column; }
    .im-panel { border-right: none; border-bottom: 1px solid rgba(255,255,255,.06); padding: .8rem 0; }
    .im-loc, .im-cta { width: 100%; }
  }

  /* ═══════════════════════════════════════════════════════════════
     BECONIX AI — sticky 2-panel section  (prefix: bai-)
  ═══════════════════════════════════════════════════════════════ */

  .bai-outer { position: relative; height: 200vh; }

  .bai-wrap {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .bai-exit-overlay {
    position: absolute; inset: 0;
    background: #1d2323;
    opacity: 0;
    pointer-events: none;
    z-index: 100;
    will-change: opacity;
  }

  /* ── Panels ── */
  .bai-panel {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    overflow: hidden;
    will-change: opacity, transform;
  }
  .bai-p0 { z-index: 2; background: #1d2323; }
  .bai-p1 { z-index: 1; opacity: 0; transform: translateY(60px); background: #1d2323; }

  /* ── Floating nav (above both panels) ── */
  .bai-nav {
    position: absolute;
    right: 2rem; top: 50%;
    transform: translateY(-50%);
    z-index: 60;
    display: flex; flex-direction: column; align-items: flex-end;
    background: rgba(255,255,255,.14);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 10px;
    padding: .45rem .55rem;
    transition: background .5s ease, border-color .5s ease;
  }
  .bai-nav-item { display: flex; align-items: center; gap: .55rem; background: none; border: none; padding: .18rem 0; cursor: pointer; }

  .bai-nav-lbl {
    font-size: .52rem; letter-spacing: .22em; text-transform: uppercase;
    color: rgba(255,255,255,.3); white-space: nowrap; user-select: none;
    font-weight: 600; transition: color .5s ease;
  }
  .bai-nav-item.active .bai-nav-lbl { color: rgba(255,255,255,.78); }

  .bai-nav-idx { font-size: .44rem; letter-spacing: .1em; color: rgba(255,255,255,.18); font-weight: 700; transition: color .5s ease; }
  .bai-nav-item.active .bai-nav-idx { color: #F45E2A; }

  .bai-nav-dot {
    width: 7px; height: 7px; border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,.22); background: transparent;
    flex-shrink: 0;
    transition: background .5s ease, border-color .5s ease, box-shadow .5s ease, transform .5s cubic-bezier(.34,1.56,.64,1);
  }
  .bai-nav-dot.active {
    background: #F45E2A; border-color: #F45E2A;
    box-shadow: 0 0 10px rgba(244,94,42,.55), 0 0 20px rgba(244,94,42,.2);
    transform: scale(1.35);
  }

  .bai-track-wrap { display: flex; justify-content: flex-end; padding: 5px 3px; }
  .bai-track { position: relative; width: 1.5px; height: 64px; background: rgba(255,255,255,.08); border-radius: 2px; }

  .bai-fill {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, #F45E2A, rgba(244,94,42,.35));
    border-radius: 2px; transform-origin: top center;
    transform: scaleY(0); will-change: transform;
  }
  .bai-ind {
    position: absolute; left: 50%; top: 0;
    width: 5px; height: 5px; border-radius: 50%;
    background: #F45E2A; transform: translateX(-50%);
    box-shadow: 0 0 8px rgba(244,94,42,.7), 0 0 16px rgba(244,94,42,.35);
    will-change: top;
  }

  /* ── Shared top bar ── */
  .bai-topbar {
    position: relative; z-index: 10;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.75rem 2.5rem;
    flex-shrink: 0;
  }
  .bai-topdash { display: flex; align-items: center; gap: .45rem; }
  .bai-dash-long  { display: block; width: 28px; height: 1px; background: rgba(255,255,255,.18); }
  .bai-dash-short { display: block; width: 14px; height: 1px; background: rgba(255,255,255,.1); }

  .bai-p1-topbar-left { display: flex; align-items: center; gap: .5rem; }
  .bai-p1-topbar-dot  {
    width: 6px; height: 6px; border-radius: 50%;
    background: #F45E2A;
    animation: baiDotPulse 2.5s ease-in-out infinite;
  }
  .bai-p1-topbar-brand { font-size: .78rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.62); }

  /* ── Panel 0 body ── */
  .bai-p0-body {
    flex: 1; position: relative;
    display: flex; align-items: center;
    padding: 0 2.5rem;
    min-height: 0; overflow: hidden;
  }
  .bai-p0-left { position: relative; z-index: 2; max-width: 56%; flex-shrink: 0; }

  .bai-idx {
    display: block;
    font-size: clamp(.58rem, .88vw, .78rem);
    font-weight: 800; color: rgba(255,255,255,.22); letter-spacing: .18em;
    margin-bottom: .55rem;
  }

  .bai-hdg {
    font-size: clamp(3.2rem, 9.5vw, 11rem);
    font-weight: 900; color: #fff;
    line-height: .93; letter-spacing: -.035em; text-transform: uppercase;
  }
  .bai-hdg-out {
    -webkit-text-stroke: 2px rgba(255,255,255,.45);
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .bai-sub { font-size: clamp(.8rem, 1.3vw, 1.1rem); color: rgba(255,255,255,.75); font-weight: 400; line-height: 1.5; margin-top: 1.5rem; }
  .bai-body-txt { font-size: clamp(.58rem, .88vw, .78rem); color: rgba(255,255,255,.32); line-height: 1.85; font-weight: 300; max-width: 340px; margin-top: .7rem; }

  /* ── Panel 0 background layers ── */
  .bai-p0-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(244,94,42,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(244,94,42,.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none; z-index: 0;
  }
  .bai-p0-scanlines {
    position: absolute; inset: 0;
    background-image: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,.042) 3px, rgba(0,0,0,.042) 4px);
    pointer-events: none; z-index: 8;
  }
  .bai-p0-ghost {
    position: absolute;
    bottom: 10%;
    left: -2%;
    font-size: clamp(6rem, 22vw, 22rem);
    font-weight: 900;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255,255,255,.04);
    letter-spacing: -.04em;
    line-height: 1;
    pointer-events: none; user-select: none;
    z-index: 1; white-space: nowrap;
  }
  .bai-p0-hud { position: absolute; inset: 0; pointer-events: none; z-index: 9; }
  .bai-p0-hud-tl,.bai-p0-hud-tr,.bai-p0-hud-bl,.bai-p0-hud-br { position: absolute; width: 24px; height: 24px; }
  .bai-p0-hud-tl { top: 18px; left: 18px; border-top: 1.5px solid rgba(244,94,42,.5); border-left: 1.5px solid rgba(244,94,42,.5); }
  .bai-p0-hud-tr { top: 18px; right: 18px; border-top: 1.5px solid rgba(244,94,42,.5); border-right: 1.5px solid rgba(244,94,42,.5); }
  .bai-p0-hud-bl { bottom: 18px; left: 18px; border-bottom: 1.5px solid rgba(244,94,42,.5); border-left: 1.5px solid rgba(244,94,42,.5); }
  .bai-p0-hud-br { bottom: 18px; right: 18px; border-bottom: 1.5px solid rgba(244,94,42,.5); border-right: 1.5px solid rgba(244,94,42,.5); }

  /* ── Accent rule above heading ── */
  .bai-accent-rule { display: flex; align-items: center; gap: 6px; margin-bottom: .8rem; }
  .bai-ar-line     { display: block; width: 40px; height: 1.5px; background: linear-gradient(to right, #F45E2A, rgba(244,94,42,.2)); border-radius: 2px; }
  .bai-ar-dot      { display: block; width: 5px; height: 5px; border-radius: 50%; background: #F45E2A; flex-shrink: 0; }

  /* ── Tech chips ── */
  .bai-chips { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: 1.4rem; }
  .bai-chip  {
    font-size: clamp(.42rem, .6vw, .55rem);
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(244,94,42,.85);
    border: 1px solid rgba(244,94,42,.28);
    background: rgba(244,94,42,.06);
    padding: .28rem .7rem;
    border-radius: 2px;
  }

  /* ── AI head visual ── */
  .bai-ai-wrap {
    position: absolute;
    right: -4%; top: 50%;
    transform: translateY(-50%);
    width: 58%; height: 92%;
    z-index: 1; pointer-events: none;
    display: flex; align-items: center; justify-content: center;
  }
  /* Pulse rings */
  .bai-ai-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(244,94,42,.18);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  .bai-ring-1 { width: 55%;  height: 55%;  animation: baiRingPulse 3.5s ease-in-out infinite; }
  .bai-ring-2 { width: 72%;  height: 72%;  animation: baiRingPulse 3.5s ease-in-out .8s infinite; border-color: rgba(244,94,42,.10); }
  .bai-ring-3 { width: 90%;  height: 90%;  animation: baiRingPulse 3.5s ease-in-out 1.6s infinite; border-color: rgba(244,94,42,.06); }
  .bai-ai-glow {
    position: absolute;
    inset: 8%;
    background: radial-gradient(ellipse at center, rgba(200,100,255,.09) 0%, rgba(244,94,42,.07) 45%, transparent 70%);
    border-radius: 50%;
    animation: imGlowPulse 6s ease-in-out infinite;
  }
  .bai-ai-img {
    position: relative; z-index: 2;
    width: 100%; height: 100%;
    object-fit: contain;
    mix-blend-mode: screen;
    filter: drop-shadow(0 0 50px rgba(200,100,255,.3)) drop-shadow(0 0 25px rgba(244,94,42,.2));
    user-select: none;
  }
  /* Floating HUD data tags */
  .bai-htag {
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: .4rem;
    font-size: clamp(.38rem, .55vw, .5rem);
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(255,255,255,.55);
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(244,94,42,.22);
    padding: .25rem .65rem;
    border-radius: 2px;
    white-space: nowrap;
    backdrop-filter: blur(4px);
    animation: baiTagFloat 4s ease-in-out infinite;
  }
  .bai-htag-dot { width: 5px; height: 5px; border-radius: 50%; background: #F45E2A; flex-shrink: 0; animation: baiDotPulse 2s ease-in-out infinite; }
  .bai-htag-1 { top: 10%;    left: 3%; animation-delay: 0s; }
  .bai-htag-2 { top: 35%;   left: 0%; animation-delay: 1s; }
  .bai-htag-3 { top: 60%;   left: 2%; animation-delay: 2s; }
  .bai-htag-4 { bottom: 10%; left: 4%; animation-delay: 3s; }

  @keyframes baiRingPulse { 0%,100% { opacity: .6; transform: translate(-50%,-50%) scale(1); } 50% { opacity: 1; transform: translate(-50%,-50%) scale(1.04); } }
  @keyframes baiTagFloat  { 0%,100% { transform: translateY(0);   } 50% { transform: translateY(-4px); } }

  /* ── Panel 0 entrance animations ── */
  .bai-a0 {
    opacity: 0;
    transform: translateY(22px);
    transition:
      opacity  .8s cubic-bezier(.4,0,.2,1) var(--bd, 0s),
      transform .8s cubic-bezier(.4,0,.2,1) var(--bd, 0s);
  }
  .bai-a0:global(.bai-vis) { opacity: 1; transform: translateY(0); }
  .bai-hdg.bai-a0               { transform: translateY(65px); }
  .bai-hdg.bai-a0:global(.bai-vis)        { transform: translateY(0); }
  /* burst & idx: preserve their own transforms */
  /* burst: opacity only — position handled by its own transform */
  .bai-burst-fade { opacity: 0; transition: opacity .9s cubic-bezier(.4,0,.2,1) var(--bd, 0s); }
  .bai-burst-fade:global(.bai-vis) { opacity: 1; }
  .bai-idx.bai-a0                { transform: none; }
  .bai-idx.bai-a0:global(.bai-vis)        { transform: none; }

  /* ── Shared progress row ── */
  .bai-prog-row {
    position: relative; z-index: 10;
    display: flex; align-items: center; gap: 1.25rem;
    padding: 1rem 2.5rem 1.5rem;
    border-top: 1px solid rgba(255,255,255,.05);
    flex-shrink: 0;
  }
  .bai-prog-track     { width: 80px; height: 2px; background: rgba(255,255,255,.08); border-radius: 2px; overflow: hidden; }
  .bai-prog-track-dark { background: rgba(255,255,255,.08); }
  .bai-prog-fill      { height: 100%; width: 30%; background: linear-gradient(90deg, #F45E2A, #ff8c5a); border-radius: 2px; animation: baiProgPulse 2.5s ease-in-out .4s infinite alternate; }
  .bai-fill-p1        { width: 75%; }
  .bai-prog-lbl       { background: none; border: none; padding: 0; color: rgba(255,255,255,.3); font-size: .625rem; letter-spacing: .35em; text-transform: uppercase; cursor: pointer; transition: color .3s ease, letter-spacing .3s ease; }
  .bai-prog-lbl:hover { color: #F45E2A; letter-spacing: .45em; }
  .bai-prog-lbl-dark  { color: rgba(255,255,255,.3); }
  .bai-prog-lbl-dark:hover { color: #F45E2A; }
  .bai-brand-lbl      { margin-left: auto; font-size: .58rem; letter-spacing: .28em; text-transform: uppercase; color: rgba(255,255,255,.12); font-weight: 500; }
  .bai-brand-dark     { color: rgba(255,255,255,.12); }

  /* ── Panel 1: bg grid + watermark ── */
  .bai-bg-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(244,94,42,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(244,94,42,.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none; z-index: 0;
  }
  .bai-watermark {
    position: absolute; right: -3%; top: 50%;
    transform: translateY(-50%);
    font-size: clamp(6rem, 18vw, 22rem);
    font-weight: 900; text-transform: uppercase;
    color: rgba(255,255,255,.025);
    letter-spacing: -.02em; line-height: 1;
    pointer-events: none; user-select: none;
    white-space: nowrap; z-index: 3;
  }

  /* ── Panel 1 content ── */
  .bai-p1-grid {
    position: relative; z-index: 10;
    flex: 1;
    display: grid; grid-template-columns: 1fr 1.15fr;
    align-items: center;
    padding: 0 2.5rem; gap: 3.5rem;
  }

  .bai-p1-left  { display: flex; flex-direction: column; justify-content: center; position: relative; }
  .bai-p1-deco  { width: clamp(80px, 10vw, 120px); height: clamp(80px, 10vw, 120px); margin-bottom: 1.5rem; }

  .bai-p1-hdg {
    font-size: clamp(3rem, 7vw, 7.5rem);
    font-weight: 900; color: #fff;
    line-height: 1; letter-spacing: -.02em; text-transform: uppercase;
    opacity: 0; transform: translateY(30px) scale(.97);
  }
  .bai-p1-hdg-out {
    -webkit-text-stroke: 2px rgba(255,255,255,.45);
    -webkit-text-fill-color: transparent; color: transparent;
  }

  .bai-p1-desc { font-size: clamp(.62rem, .88vw, .78rem); color: rgba(255,255,255,.6); line-height: 1.82; font-weight: 300; max-width: 360px; margin-top: 1.1rem; opacity: 0; transform: translateY(30px) scale(.97); }

  .bai-p1-vline {
    position: absolute; right: -1.75rem; top: 0; bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, transparent, rgba(244,94,42,.25) 25%, rgba(244,94,42,.25) 75%, transparent);
    opacity: 0; transform: translateY(30px) scale(.97);
  }

  .bai-p1-right  { display: flex; flex-direction: column; }

  .bai-cap {
    position: relative;
    padding: 1.15rem 0 1.15rem 1.2rem;
    opacity: 0; transform: translateY(30px) scale(.97);
  }
  .bai-cap-accent {
    position: absolute; left: 0; top: 1.15rem; bottom: 1.15rem;
    width: 2px;
    background: linear-gradient(to bottom, #F45E2A, rgba(244,94,42,.08));
    border-radius: 2px;
  }
  .bai-cap-title { color: #fff; font-size: clamp(.82rem, 1.3vw, 1rem); font-weight: 700; margin-bottom: .5rem; letter-spacing: .01em; }
  .bai-cap-desc  { color: rgba(255,255,255,.33); font-size: clamp(.66rem, .92vw, .78rem); line-height: 1.75; font-weight: 300; max-width: 400px; }

  .bai-p1-sep { width: 100%; height: 1px; background: linear-gradient(90deg, rgba(244,94,42,.18), rgba(255,255,255,.04) 60%, transparent); margin: .2rem 0; opacity: 0; transform: translateY(30px) scale(.97); }

  .bai-uae { display: flex; align-items: center; gap: 1rem; margin-top: 1.6rem; padding-top: 1.3rem; border-top: 1px solid rgba(255,255,255,.055); opacity: 0; transform: translateY(30px) scale(.97); }
  .bai-uae-flag  { font-size: 1.8rem; line-height: 1; flex-shrink: 0; }
  .bai-uae-title { display: block; font-size: clamp(.72rem, 1.1vw, .9rem); font-weight: 700; color: #fff; margin-bottom: .2rem; }
  .bai-uae-sub   { display: block; font-size: clamp(.5rem, .7vw, .62rem); color: rgba(255,255,255,.52); font-weight: 300; }

  /* Panel 1 items: hidden; JS stagger reveals */
  .bai-a1 { opacity: 0; transform: translateY(30px) scale(.97); }

  /* ── Keyframes ── */
  @keyframes baiDotPulse  { 0%,100% { opacity: .6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }
  @keyframes baiProgPulse { from { width: 20%; } to { width: 75%; } }

  /* ── Responsive ── */
  @media (max-width: 1100px) {
    .bai-p0-left   { max-width: 64%; }
    .bai-ai-wrap { width: 56%; right: -4%; }
  }
  @media (max-width: 900px) {
    .bai-p0-body { flex-direction: column; align-items: flex-start; justify-content: center; padding: 3% 2.5rem 0; gap: 2vh; }
    .bai-p0-left { max-width: 100%; }
    .bai-ai-wrap { position: relative; top: auto; right: auto; transform: none; width: 100%; height: 32vh; }
    .bai-ai-wrap { transform: none; top: auto; right: auto; position: relative; width: 100%; height: 35vh; }
    .bai-p1-grid { grid-template-columns: 1fr; }
    .bai-p1-left { display: none; }
  }
  @media (max-width: 600px) {
    .bai-hdg    { font-size: clamp(2.4rem, 14vw, 5rem); }
    .bai-p1-hdg { font-size: clamp(2.2rem, 10vw, 4rem); }
  }
</style>
