<script>
  import { onMount } from 'svelte';

  let visible = false;
  let section;

  const stats = [
    { value: '97+',   label: 'Buildings' },
    { value: '10.8K', label: 'Assets Tracked' },
    { value: '65.5K', label: 'Data Points' },
  ];

  const cards = [
    {
      gradient: 'linear-gradient(135deg, #9ad993 0%, #5cb85c 100%)',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>`,
      title: 'Smart Buildings',
      desc: 'Real-time AI infrastructure management with predictive alerts.',
    },
    {
      gradient: 'linear-gradient(135deg, #e1e75c 0%, #c8b400 100%)',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
      title: 'Digital Twin',
      desc: 'Mirror physical assets into a live virtual environment.',
    },
    {
      gradient: 'linear-gradient(135deg, #9ad993 0%, #e1e75c 100%)',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
      title: 'Advanced AI',
      desc: 'Enterprise-grade ML models trained on built-environment data.',
    },
    {
      gradient: 'linear-gradient(135deg, #5cb85c 0%, #9ad993 100%)',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: 'Predictive Ops',
      desc: 'Anticipate failures and optimise operations proactively.',
    },
  ];

  onMount(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { visible = true; io.disconnect(); } },
      { threshold: 0.06 }
    );
    if (section) io.observe(section);
    return () => io.disconnect();
  });
</script>

<section class="iai-wrap" class:iai-vis={visible} bind:this={section} id="intelligent-ai">

  <!-- Background grid -->
  <div class="iai-grid-bg" aria-hidden="true"></div>

  <!-- Top accent line -->
  <div class="iai-top-rule" aria-hidden="true"></div>

  <div class="iai-inner">

    <!-- ══ LEFT COLUMN ══ -->
    <div class="iai-left">

      <!-- badge -->
      <div class="iai-badge iai-fade" style="--d:.0s">
        <span class="iai-badge-dot"></span>
        Next-Generation Intelligence Platform
      </div>

      <!-- heading -->
      <h2 class="iai-heading iai-fade" style="--d:.1s">
        Intelligence<br>
        <span class="iai-gradient-text">Engine</span>
      </h2>

      <!-- divider line -->
      <div class="iai-divider iai-fade" style="--d:.18s" aria-hidden="true">
        <span class="iai-divider-line"></span>
        <span class="iai-divider-dot"></span>
        <span class="iai-divider-dot"></span>
        <span class="iai-divider-dot"></span>
      </div>

      <!-- body copy -->
      <p class="iai-body iai-fade" style="--d:.22s">
        Transforming real-estate and built environments with
        intelligent automation, predictive analytics, and
        data-driven operational insights.
      </p>

      <!-- stats -->
      <div class="iai-stats iai-fade" style="--d:.3s">
        {#each stats as s, i}
          <div class="iai-stat">
            <span class="iai-stat-val">{s.value}</span>
            <span class="iai-stat-lbl">{s.label}</span>
          </div>
          {#if i < stats.length - 1}
            <div class="iai-stat-div" aria-hidden="true"></div>
          {/if}
        {/each}
      </div>

      <!-- CTAs -->
      <div class="iai-cta iai-fade" style="--d:.38s">
        <a href="#about" class="iai-btn-primary">
          Discover More
          <svg class="iai-btn-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="#contact" class="iai-btn-ghost">
          Connect With Us
        </a>
      </div>

    </div>

    <!-- ══ RIGHT COLUMN — video ══ -->
    <div class="iai-right iai-fade" style="--d:.08s">

      <!-- ambient halos -->
      <div class="iai-halo iai-halo-a" aria-hidden="true"></div>
      <div class="iai-halo iai-halo-b" aria-hidden="true"></div>

      <!-- orbit rings -->
      <div class="iai-orbit iai-orbit-outer" aria-hidden="true"></div>
      <div class="iai-orbit iai-orbit-inner" aria-hidden="true"></div>

      <!-- orbital particle dots -->
      <div class="iai-orb-track iai-orb-track-a" aria-hidden="true">
        <span class="iai-orb-dot iai-orb-dot-g"></span>
      </div>
      <div class="iai-orb-track iai-orb-track-b" aria-hidden="true">
        <span class="iai-orb-dot iai-orb-dot-y"></span>
      </div>
      <div class="iai-orb-track iai-orb-track-c" aria-hidden="true">
        <span class="iai-orb-dot iai-orb-dot-g2"></span>
      </div>

      <!-- glow ring -->
      <div class="iai-ring" aria-hidden="true"></div>

      <!-- video -->
      <video
        class="iai-video"
        src="/ai-engine.mp4"
        autoplay
        loop
        muted
        playsinline
        aria-hidden="true"
      ></video>

      <!-- floating badges -->
      <div class="iai-pill iai-pill-tl iai-fade" style="--d:.5s">
        <span class="iai-pill-dot iai-pill-dot-green"></span>
        <span>Live Monitoring</span>
      </div>
      <div class="iai-pill iai-pill-br iai-fade" style="--d:.58s">
        <span class="iai-pill-dot iai-pill-dot-yellow"></span>
        <span>99.9% Uptime</span>
      </div>

    </div>

  </div>

  <!-- ══ FEATURE CARDS ══ -->
  <div class="iai-cards-wrap">
    <div class="iai-cards">
      {#each cards as card, i}
        <div class="iai-card" style="--ci:{i}">
          <div class="iai-card-accent" style="background:{card.gradient}" aria-hidden="true"></div>
          <div class="iai-card-icon" style="background:{card.gradient}">
            {@html card.icon}
          </div>
          <div class="iai-card-body">
            <p class="iai-card-title">{card.title}</p>
            <p class="iai-card-desc">{card.desc}</p>
          </div>
          <div class="iai-card-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </div>
        </div>
      {/each}
    </div>
  </div>

</section>

<style>
  /* ── Wrap ───────────────────────────────────────────── */
  .iai-wrap {
    position: relative;
    padding: clamp(4rem, 8vw, 7rem) clamp(1rem, 5vw, 3.5rem) clamp(2.5rem, 4vw, 3.5rem);
    overflow: hidden;
    font-family: 'Space Grotesk', 'DM Sans', sans-serif;
  }

  /* subtle dot-grid background */
  .iai-grid-bg {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle, rgba(154,217,147,.08) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
    z-index: 0;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  }

  /* top accent rule */
  .iai-top-rule {
    position: absolute;
    top: 0; left: 8%; right: 8%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(154,217,147,.4) 35%,
      rgba(225,231,92,.4) 65%,
      transparent 100%
    );
    z-index: 1;
  }

  /* ── Fade animation ─────────────────────────────────── */
  .iai-fade {
    opacity: 0;
    transform: translateY(22px);
    transition:
      opacity  .7s cubic-bezier(0.22,1,.36,1) var(--d,0s),
      transform .7s cubic-bezier(0.22,1,.36,1) var(--d,0s);
  }
  .iai-vis .iai-fade { opacity: 1; transform: none; }

  /* ── Two-column layout ──────────────────────────────── */
  .iai-inner {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem, 5vw, 5rem);
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* ── LEFT ───────────────────────────────────────────── */
  .iai-left {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  /* badge */
  .iai-badge {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    width: fit-content;
    padding: .3rem .85rem;
    border-radius: 999px;
    border: 1px solid rgba(154,217,147,.28);
    background: rgba(154,217,147,.06);
    font-size: clamp(.6rem, .9vw, .72rem);
    font-weight: 600;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: rgba(154,217,147,.9);
  }
  .iai-badge-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #9ad993;
    box-shadow: 0 0 8px #9ad993, 0 0 16px rgba(154,217,147,.4);
    animation: dotPulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes dotPulse {
    0%,100% { opacity: 1; transform: scale(1); }
    50%      { opacity: .45; transform: scale(.65); }
  }

  /* heading */
  .iai-heading {
    font-size: clamp(2.6rem, 5.2vw, 4.8rem);
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: -.03em;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0;
  }
  .iai-gradient-text {
    background: linear-gradient(90deg, #9ad993 0%, #e1e75c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* divider */
  .iai-divider {
    display: flex;
    align-items: center;
    gap: .45rem;
  }
  .iai-divider-line {
    width: 36px; height: 1.5px;
    background: linear-gradient(90deg, #9ad993, rgba(154,217,147,0));
    border-radius: 2px;
  }
  .iai-divider-dot {
    width: 3px; height: 3px;
    border-radius: 50%;
    background: rgba(154,217,147,.5);
  }

  /* body copy */
  .iai-body {
    font-size: clamp(.82rem, 1.15vw, .96rem);
    color: rgba(255,255,255,.5);
    line-height: 1.8;
    max-width: 420px;
    margin: 0;
    font-weight: 300;
  }

  /* stats */
  .iai-stats {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.1rem 1.3rem;
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 14px;
    width: fit-content;
    backdrop-filter: blur(12px);
  }
  .iai-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .12rem;
  }
  .iai-stat-val {
    font-size: clamp(1.15rem, 1.9vw, 1.5rem);
    font-weight: 800;
    background: linear-gradient(90deg, #9ad993, #e1e75c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    letter-spacing: -.02em;
  }
  .iai-stat-lbl {
    font-size: clamp(.55rem, .75vw, .65rem);
    color: rgba(255,255,255,.38);
    text-transform: uppercase;
    letter-spacing: .1em;
    white-space: nowrap;
  }
  .iai-stat-div {
    width: 1px; height: 28px;
    background: rgba(255,255,255,.08);
    flex-shrink: 0;
    margin: 0 .25rem;
  }

  /* CTAs */
  .iai-cta {
    display: flex;
    align-items: center;
    gap: .85rem;
    flex-wrap: wrap;
  }
  .iai-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    padding: .65rem 1.5rem;
    border-radius: 999px;
    background: linear-gradient(120deg, rgba(154,217,147,.18), rgba(225,231,92,.18));
    border: 1px solid rgba(154,217,147,.45);
    color: #9ad993;
    font-size: .82rem;
    font-weight: 600;
    letter-spacing: .04em;
    text-decoration: none;
    cursor: pointer;
    transition: background .22s, border-color .22s, box-shadow .22s, transform .22s;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
  }
  .iai-btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, rgba(154,217,147,.12), rgba(225,231,92,.12));
    opacity: 0;
    transition: opacity .22s;
    border-radius: 999px;
  }
  .iai-btn-primary:hover { border-color: rgba(154,217,147,.75); box-shadow: 0 0 28px rgba(154,217,147,.18); transform: translateY(-2px); }
  .iai-btn-primary:hover::before { opacity: 1; }
  .iai-btn-arrow {
    width: .9rem; height: .9rem;
    transition: transform .22s;
    flex-shrink: 0;
  }
  .iai-btn-primary:hover .iai-btn-arrow { transform: translateX(3px); }

  .iai-btn-ghost {
    display: inline-flex;
    align-items: center;
    padding: .65rem 1.5rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.1);
    color: rgba(255,255,255,.55);
    font-size: .82rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: border-color .22s, color .22s, background .22s;
  }
  .iai-btn-ghost:hover { border-color: rgba(255,255,255,.25); color: #fff; background: rgba(255,255,255,.04); }

  /* ── RIGHT — video ──────────────────────────────────── */
  .iai-right {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    max-width: 520px;
    margin: 0 auto;
    width: 100%;
  }

  /* halos */
  .iai-halo {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    pointer-events: none;
    animation: floatY 8s ease-in-out infinite;
  }
  .iai-halo-a {
    background: radial-gradient(circle, rgba(154,217,147,.22) 0%, transparent 62%);
    filter: blur(48px);
  }
  .iai-halo-b {
    background: radial-gradient(circle, rgba(225,231,92,.14) 0%, transparent 60%);
    filter: blur(64px);
    transform: scale(1.25);
    animation-delay: -3.5s;
  }

  /* orbit rings */
  .iai-orbit {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(154,217,147,.07);
    animation: spin 22s linear infinite;
  }
  .iai-orbit-outer {
    inset: -10%;
    border-color: rgba(225,231,92,.05);
    animation-duration: 30s;
    animation-direction: reverse;
  }
  .iai-orbit-inner {
    inset: 2%;
    animation-duration: 18s;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  /* glow ring */
  .iai-ring {
    position: absolute;
    inset: 8%;
    border-radius: 50%;
    border: 1px solid rgba(154,217,147,.18);
    box-shadow:
      0 0 48px rgba(154,217,147,.1),
      inset 0 0 48px rgba(154,217,147,.05);
    pointer-events: none;
  }

  /* video */
  .iai-video {
    position: relative;
    z-index: 2;
    width: 86%;
    height: 86%;
    object-fit: cover;
    border-radius: 28px;
    mix-blend-mode: screen;
    opacity: 0.55;
    filter:
      contrast(1.45)
      brightness(1.25)
      saturate(1.2)
      drop-shadow(0 0 56px rgba(154,217,147,.22))
      drop-shadow(0 0 20px rgba(225,231,92,.14));
    animation: floatY 7s ease-in-out infinite;
    animation-delay: -.5s;
    user-select: none;
  }

  @keyframes floatY {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-14px); }
  }

  /* floating pills */
  .iai-pill {
    position: absolute;
    z-index: 5;
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    padding: .38rem .85rem;
    border-radius: 999px;
    background: rgba(8,8,18,.72);
    border: 1px solid rgba(255,255,255,.09);
    backdrop-filter: blur(16px);
    font-size: .68rem;
    font-weight: 600;
    color: rgba(255,255,255,.82);
    white-space: nowrap;
    box-shadow: 0 4px 24px rgba(0,0,0,.45);
    letter-spacing: .02em;
  }
  .iai-pill-tl { top: 12%; left: -2%; animation: floatY 6s ease-in-out infinite; animation-delay: -1s; }
  .iai-pill-br { bottom: 14%; right: -2%; animation: floatY 6s ease-in-out infinite; animation-delay: -3.5s; }

  .iai-pill-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .iai-pill-dot-green {
    background: #9ad993;
    box-shadow: 0 0 6px #9ad993;
    animation: dotPulse 2s ease-in-out infinite;
  }
  .iai-pill-dot-yellow {
    background: #e1e75c;
    box-shadow: 0 0 6px #e1e75c;
    animation: dotPulse 2s ease-in-out infinite .6s;
  }

  /* ── Orbital particle dots ──────────────────────────────────────────── */
  .iai-orb-track {
    position: absolute;
    top: 50%; left: 50%;
    border-radius: 50%;
    pointer-events: none;
    z-index: 4;
  }
  .iai-orb-track-a {
    width: 96%; height: 96%;
    margin: -48% 0 0 -48%;
    animation: orbSpin 18s linear infinite;
  }
  .iai-orb-track-b {
    width: 120%; height: 120%;
    margin: -60% 0 0 -60%;
    animation: orbSpin 28s linear infinite reverse;
    animation-delay: -8s;
  }
  .iai-orb-track-c {
    width: 96%; height: 96%;
    margin: -48% 0 0 -48%;
    animation: orbSpin 18s linear infinite reverse;
    animation-delay: -9s;
  }
  @keyframes orbSpin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  .iai-orb-dot {
    position: absolute;
    top: -3px; left: 50%;
    border-radius: 50%;
    transform: translateX(-50%);
  }
  .iai-orb-dot-g {
    width: 6px; height: 6px;
    background: rgba(154,217,147,.95);
    box-shadow: 0 0 10px rgba(154,217,147,.9), 0 0 22px rgba(154,217,147,.45);
  }
  .iai-orb-dot-y {
    width: 5px; height: 5px;
    background: rgba(225,231,92,.9);
    box-shadow: 0 0 10px rgba(225,231,92,.8), 0 0 22px rgba(225,231,92,.4);
  }
  .iai-orb-dot-g2 {
    width: 4px; height: 4px;
    background: rgba(154,217,147,.65);
    box-shadow: 0 0 8px rgba(154,217,147,.6);
  }

  /* ── Feature cards ──────────────────────────────────── */
  .iai-cards-wrap {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 2.5rem auto 0;
  }

  .iai-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: .9rem;
  }

  .iai-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    padding: 1.35rem 1.2rem 1.1rem;
    border-radius: 16px;
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.06);
    backdrop-filter: blur(16px);
    overflow: hidden;
    cursor: default;
    transition: background .25s, border-color .25s, transform .25s, box-shadow .25s;
    /* entrance */
    opacity: 0;
    transform: translateY(22px);
  }
  .iai-vis .iai-card {
    animation: cardReveal .65s cubic-bezier(.22,1,.36,1) calc(var(--ci) * 0.12s + .5s) both;
  }
  @keyframes cardReveal {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  /* top gradient accent bar */
  .iai-card-accent {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    opacity: 0;
    transition: opacity .25s;
    border-radius: 16px 16px 0 0;
  }
  .iai-card:hover .iai-card-accent { opacity: 1; }
  .iai-card:hover {
    background: rgba(255,255,255,.055);
    border-color: rgba(154,217,147,.14);
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(0,0,0,.3), 0 0 0 1px rgba(154,217,147,.06);
  }

  /* icon */
  .iai-card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px; height: 40px;
    border-radius: 10px;
    flex-shrink: 0;
    color: #fff;
    box-shadow: 0 4px 16px rgba(0,0,0,.25);
    transition: transform .25s, box-shadow .25s;
  }
  .iai-card:hover .iai-card-icon {
    transform: scale(1.08);
    box-shadow: 0 6px 24px rgba(0,0,0,.35);
  }
  .iai-card-icon :global(svg) {
    width: 18px; height: 18px;
    stroke: #fff;
  }

  .iai-card-body { flex: 1; }
  .iai-card-title {
    font-size: .8rem;
    font-weight: 700;
    color: rgba(255,255,255,.88);
    margin: 0 0 .3rem;
    letter-spacing: .015em;
  }
  .iai-card-desc {
    font-size: .68rem;
    color: rgba(255,255,255,.38);
    line-height: 1.6;
    margin: 0;
    font-weight: 300;
  }

  /* card arrow */
  .iai-card-arrow {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: rgba(154,217,147,.3);
    transition: color .22s, transform .22s;
  }
  .iai-card-arrow svg { width: 14px; height: 14px; }
  .iai-card:hover .iai-card-arrow {
    color: rgba(154,217,147,.7);
    transform: translateX(3px);
  }

  /* ── Responsive — Mobile First ─────────────────────────────────── */

  /* Tablet */
  @media (max-width: 960px) {
    .iai-inner {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .iai-left   { align-items: center; }
    .iai-body   { max-width: 520px; font-size: 0.92rem; }
    .iai-divider { justify-content: center; }
    .iai-right  { max-width: 360px; order: -1; }
    .iai-pill-tl { top: 6%; left: 0; }
    .iai-pill-br { bottom: 6%; right: 0; }
    .iai-cards  { grid-template-columns: repeat(2, 1fr); }
  }

  /* Mobile */
  @media (max-width: 600px) {
    .iai-wrap { padding: clamp(3rem, 7vh, 5rem) 1.25rem clamp(2rem, 4vh, 3rem); }

    .iai-stats {
      gap: 0.65rem;
      padding: 0.9rem 1rem;
      width: 100%;
      justify-content: center;
    }
    .iai-stat-val { font-size: clamp(1rem, 5vw, 1.35rem); }

    /* Touch-friendly CTA buttons — min 44px */
    .iai-btn-primary,
    .iai-btn-ghost {
      min-height: 44px;
      padding: 0.75rem 1.4rem;
      font-size: 0.82rem;
    }
    .iai-cta { gap: 0.65rem; justify-content: center; }

    .iai-badge { font-size: 0.65rem; padding: 0.28rem 0.75rem; }

    .iai-cards { grid-template-columns: 1fr 1fr; gap: 0.6rem; }
    .iai-card  {
      padding: 1.1rem 1rem;
      gap: 0.65rem;
    }
    .iai-card-title { font-size: 0.78rem; }
    .iai-card-desc  { font-size: 0.68rem; }

    .iai-pill-tl { top: 4%; left: -4%; font-size: 0.6rem; }
    .iai-pill-br { bottom: 4%; right: -4%; font-size: 0.6rem; }
  }

  /* Small mobile */
  @media (max-width: 390px) {
    .iai-wrap  { padding: 2.5rem 1rem 2rem; }
    .iai-cards { grid-template-columns: 1fr; }
    .iai-stats { flex-wrap: wrap; row-gap: 0.6rem; }
    .iai-stat-div { display: none; }
    .iai-cta  { flex-direction: column; align-items: stretch; }
    .iai-btn-primary, .iai-btn-ghost { justify-content: center; }
  }

  /* ── Reduced motion ─────────────────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    .iai-video, .iai-halo, .iai-orbit, .iai-badge-dot, .iai-pill,
    .iai-orb-track { animation: none; }
    .iai-fade { transition: none; opacity: 1; transform: none; }
    .iai-card { animation: none !important; opacity: 1; transform: none; }
    .iai-orb-dot { display: none; }
  }
</style>
