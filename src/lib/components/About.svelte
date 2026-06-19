<script>
  import { onMount } from 'svelte';

  let sectionEl;
  let visible = false;

  onMount(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) visible = true; },
      { threshold: 0.05 }
    );
    if (sectionEl) io.observe(sectionEl);
    return () => io.disconnect();
  });
</script>

<section id="about" bind:this={sectionEl} class="ab-wrap" class:ab-vis={visible}>

  <!-- ── Background layers ──────────────────────────────────────────── -->
  <div class="ab-grid"      aria-hidden="true"></div>
  <div class="ab-glow"      aria-hidden="true"></div>
  <div class="ab-scanlines" aria-hidden="true"></div>

  <!-- ── HUD corner brackets ───────────────────────────────────────── -->
  <div class="ab-hud" aria-hidden="true">
    <span class="ab-hud-tl"></span>
    <span class="ab-hud-tr"></span>
    <span class="ab-hud-bl"></span>
    <span class="ab-hud-br"></span>
  </div>

  <!-- ── Split body ────────────────────────────────────────────────── -->
  <div class="ab-body">

    <!-- LEFT — text content -->
    <div class="ab-left">

      <!-- Main heading: solid line + outlined line -->
      <div class="ab-heading-wrap">
        <h2 class="ab-hdg ab-hdg-solid ab-anim" style="--d:0.12s">Why</h2>
        <h2 class="ab-hdg ab-hdg-out   ab-anim" style="--d:0.22s">Beconix AI</h2>
      </div>

      <p class="ab-desc ab-anim" style="--d:0.34s">
        Beconix AI helps organizations move beyond traditional building management
        by combining Artificial Intelligence, Digital Twin technology, and real-time
        analytics into a single intelligent platform.
      </p>

      <!-- Key Benefits grid -->
      <div class="ab-benefits ab-anim" style="--d:0.48s">

        <div class="ab-benefit">
          <div class="ab-benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M6 14h.01M10 10h4M10 14h4M18 10h.01M18 14h.01"/>
            </svg>
          </div>
          <div class="ab-benefit-body">
            <h3 class="ab-benefit-title">AI-Powered Intelligence</h3>
            <p class="ab-benefit-desc">Gain actionable insights, automate decision-making, and optimize building performance.</p>
          </div>
        </div>

        <div class="ab-benefit">
          <div class="ab-benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V12h6v9"/>
            </svg>
          </div>
          <div class="ab-benefit-body">
            <h3 class="ab-benefit-title">Digital Twin Visualization</h3>
            <p class="ab-benefit-desc">Real-time digital representation of your building for complete operational visibility.</p>
          </div>
        </div>

        <div class="ab-benefit">
          <div class="ab-benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <div class="ab-benefit-body">
            <h3 class="ab-benefit-title">Energy Optimization</h3>
            <p class="ab-benefit-desc">Reduce energy consumption and costs through intelligent recommendations.</p>
          </div>
        </div>

        <div class="ab-benefit">
          <div class="ab-benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
          <div class="ab-benefit-body">
            <h3 class="ab-benefit-title">Predictive Maintenance</h3>
            <p class="ab-benefit-desc">Detect potential equipment failures before they impact operations.</p>
          </div>
        </div>

        <div class="ab-benefit">
          <div class="ab-benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>
            </svg>
          </div>
          <div class="ab-benefit-body">
            <h3 class="ab-benefit-title">Real-Time Monitoring</h3>
            <p class="ab-benefit-desc">Monitor HVAC, lighting, power, water, and critical systems from a unified dashboard.</p>
          </div>
        </div>

        <div class="ab-benefit">
          <div class="ab-benefit-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <div class="ab-benefit-body">
            <h3 class="ab-benefit-title">Multi-Site Management</h3>
            <p class="ab-benefit-desc">Manage multiple facilities and portfolios from a single platform.</p>
          </div>
        </div>

      </div><!-- /ab-benefits -->

      <!-- CTA buttons -->
      <div class="ab-ctas ab-anim" style="--d:0.78s">
        <a href="#contact" class="ab-btn-primary">Get in Touch</a>
        <a href="#services" class="ab-btn-secondary">Our Services</a>
      </div>

    </div><!-- /ab-left -->

    <!-- RIGHT — visual panel -->
    <div class="ab-right" aria-hidden="true">

      <!-- Giant stacked letters in background -->
      <div class="ab-letters">
        <span>B</span>
        <span>E</span>
        <span>C</span>
        <span>O</span>
        <span>N</span>
        <span>I</span>
        <span>X</span>
      </div>

      <!-- Circle accent — like yellow circle in screenshot -->
      <div class="ab-circle"></div>

      <!-- Pulse rings -->
      <div class="ab-ring ab-ring-1"></div>
      <div class="ab-ring ab-ring-2"></div>
      <div class="ab-ring ab-ring-3"></div>

      <!-- Detail block — top right, mirroring "SHIPPING" from screenshot -->
      <div class="ab-detail">
        <span class="ab-detail-lbl">REGION:</span>
        <p class="ab-detail-txt">
          Operating across UAE, KSA, and the broader GCC — enterprise-grade
          building intelligence at scale.
        </p>
      </div>

    </div><!-- /ab-right -->

  </div><!-- /ab-body -->

  <!-- ── Bottom bar ────────────────────────────────────────────────── -->
  <div class="ab-bottom">
    <div class="ab-prog-track"><div class="ab-prog-fill"></div></div>
    <span class="ab-brand">Adeptus Technologies</span>
  </div>

</section>

<style>
  /* ── Section ────────────────────────────────────────────────────────────── */
  .ab-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 620px;
    background: #120825;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  /* ── Background — identical to Hero: radial green/yellow + linear gradient */
  .ab-grid {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: radial-gradient(
        ellipse at 70% 40%,
        rgba(154, 217, 147, 0.09) 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse at 15% 70%,
        rgba(225, 231, 92, 0.07) 0%,
        transparent 40%
      ),
      linear-gradient(
        140deg,
        #0a1f12 0%,
        #0b1a10 25%,
        #0e1e20 55%,
        #081624 80%,
        #06121e 100%
      );
    pointer-events: none;
  }

  /* ── Green tech grid with radial fade mask — identical to Hero ─────────── */
  .ab-glow {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(154, 217, 147, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(154, 217, 147, 0.04) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%);
  }

  /* ── Noise blobs + scanlines — identical to Hero ────────────────────────── */
  .ab-scanlines {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background-image:
      radial-gradient(circle at 30% 20%, rgba(154, 217, 147, 0.07) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(225, 231, 92, 0.05) 0%, transparent 40%),
      repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent 3px,
        rgba(0, 0, 0, 0.06) 3px,
        rgba(0, 0, 0, 0.06) 4px
      );
    opacity: 0.75;
  }

  /* ── HUD corners ────────────────────────────────────────────────────────── */
  .ab-hud { position: absolute; inset: 0; pointer-events: none; z-index: 9; }
  .ab-hud-tl,.ab-hud-tr,.ab-hud-bl,.ab-hud-br { position: absolute; width: 24px; height: 24px; }
  .ab-hud-tl { top: 18px; left: 18px; border-top:    1.5px solid rgba(154,217,147,.5); border-left:  1.5px solid rgba(154,217,147,.5); }
  .ab-hud-tr { top: 18px; right: 18px; border-top:   1.5px solid rgba(154,217,147,.5); border-right: 1.5px solid rgba(154,217,147,.5); }
  .ab-hud-bl { bottom: 18px; left: 18px; border-bottom: 1.5px solid rgba(154,217,147,.5); border-left:  1.5px solid rgba(154,217,147,.5); }
  .ab-hud-br { bottom: 18px; right: 18px; border-bottom: 1.5px solid rgba(154,217,147,.5); border-right: 1.5px solid rgba(154,217,147,.5); }

  /* ── Split body ─────────────────────────────────────────────────────────── */
  .ab-body {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    z-index: 5;
    min-height: 0;
    overflow: hidden;
  }

  /* ── LEFT content ───────────────────────────────────────────────────────── */
  .ab-left {
    position: relative;
    z-index: 2;
    width: 44%;
    flex-shrink: 0;
    padding: 0 0 0 clamp(1.8rem, 4.5vw, 5.5rem);
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* Entrance animation */
  .ab-anim {
    opacity: 0;
    transform: translateX(-50px);
    transition:
      opacity  0.75s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s),
      transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s);
  }
  .ab-vis .ab-anim {
    opacity: 1;
    transform: translateX(0);
  }

  /* Heading */
  .ab-heading-wrap { display: flex; flex-direction: column; margin-bottom: 1.6rem; }
  .ab-hdg {
    font-size: clamp(2.2rem, 6.5vw, 8rem);
    font-weight: 900;
    line-height: 0.92;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    margin: 0;
  }
  .ab-hdg-solid { color: #ffffff; }
  .ab-hdg-out {
    -webkit-text-stroke: 2px rgba(255,255,255,.4);
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* Description */
  .ab-desc {
    font-size: clamp(0.62rem, 0.9vw, 0.78rem);
    color: rgba(255,255,255,.55);
    line-height: 1.85;
    font-weight: 300;
    max-width: 370px;
    margin: 0 0 1.6rem 0;
  }

  /* Key Benefits grid */
  .ab-benefits {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.9rem 1.2rem;
    margin-bottom: 1.6rem;
    padding-top: 0.2rem;
  }
  .ab-benefit {
    display: flex;
    align-items: flex-start;
    gap: 0.55rem;
  }
  .ab-benefit-icon {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(154,217,147,.25);
    border-radius: 4px;
    background: rgba(154,217,147,.06);
    color: #9ad993;
    padding: 5px;
    margin-top: 1px;
  }
  .ab-benefit-icon svg { width: 100%; height: 100%; display: block; }
  .ab-benefit-body { display: flex; flex-direction: column; gap: 0.18rem; }
  .ab-benefit-title {
    font-size: clamp(0.52rem, 0.72vw, 0.65rem);
    font-weight: 700;
    color: rgba(255,255,255,.88);
    letter-spacing: 0.02em;
    margin: 0;
  }
  .ab-benefit-desc {
    font-size: clamp(0.44rem, 0.58vw, 0.54rem);
    color: rgba(255,255,255,.38);
    line-height: 1.65;
    font-weight: 300;
    margin: 0;
  }

  /* CTA buttons */
  .ab-ctas {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .ab-btn-primary {
    display: inline-flex;
    align-items: center;
    padding: 0.65rem 1.5rem;
    background: linear-gradient(135deg, #9ad993 0%, #e1e75c 100%);
    color: #081a0c;
    font-size: clamp(0.56rem, 0.76vw, 0.68rem);
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 2px;
    cursor: pointer;
    transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 0 24px rgba(154,217,147,.28);
  }
  .ab-btn-primary:hover {
    opacity: 0.88;
    transform: translateY(-2px);
    box-shadow: 0 0 40px rgba(154,217,147,.45);
  }
  .ab-btn-primary:focus-visible { outline: 2px solid #9ad993; outline-offset: 3px; }

  .ab-btn-secondary {
    display: inline-flex;
    align-items: center;
    padding: 0.65rem 1.3rem;
    background: transparent;
    color: rgba(255,255,255,.65);
    font-size: clamp(0.56rem, 0.76vw, 0.68rem);
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 2px;
    cursor: pointer;
    transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
  }
  .ab-btn-secondary:hover {
    border-color: rgba(154,217,147,.45);
    color: #9ad993;
    background: rgba(154,217,147,.06);
  }
  .ab-btn-secondary:focus-visible { outline: 2px solid rgba(154,217,147,.6); outline-offset: 3px; }

  /* ── RIGHT visual panel ─────────────────────────────────────────────────── */
  .ab-right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 62%;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* Giant stacked letters — grid layout filling right panel */
  .ab-letters {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
    justify-items: center;
    pointer-events: none;
    user-select: none;
    z-index: 1;
    padding: 0 2%;
    row-gap: 0;
  }
  .ab-letters span {
    font-size: clamp(5rem, 16vw, 22rem);
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(255,255,255,.1);
    text-transform: uppercase;
    line-height: 0.88;
    letter-spacing: -0.04em;
  }
  /* Last letter (S) spans both columns — centred */
  .ab-letters span:last-child {
    grid-column: 1 / -1;
  }

  /* Circle accent — green/yellow glow matching Hero palette */
  .ab-circle {
    position: absolute;
    top: 28%;
    left: 52%;
    transform: translate(-50%, -28%);
    width: clamp(200px, 32vw, 460px);
    height: clamp(200px, 32vw, 460px);
    background: radial-gradient(
      ellipse at 38% 38%,
      rgba(154, 217, 147, 0.55) 0%,
      rgba(225, 231, 92, 0.28) 45%,
      transparent 75%
    );
    border-radius: 50%;
    z-index: 2;
  }

  /* Rings */
  .ab-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(154,217,147,.18);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  .ab-ring-1 { width: 38%; height: 64%; animation: abRingPulse 3.8s ease-in-out infinite; }
  .ab-ring-2 { width: 55%; height: 90%; animation: abRingPulse 3.8s ease-in-out .9s infinite; border-color: rgba(154,217,147,.09); }
  .ab-ring-3 { width: 70%; height: 112%; animation: abRingPulse 3.8s ease-in-out 1.8s infinite; border-color: rgba(225,231,92,.05); }

  /* Detail block — top-right, like "SHIPPING" text in screenshot */
  .ab-detail {
    position: absolute;
    top: clamp(1.5rem, 4vh, 3rem);
    right: clamp(1rem, 2.5vw, 2.5rem);
    z-index: 10;
    max-width: 180px;
    pointer-events: auto;
  }
  .ab-detail-lbl {
    display: block;
    font-size: clamp(0.44rem, 0.6vw, 0.56rem);
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #9ad993;
    margin-bottom: 0.4rem;
  }
  .ab-detail-txt {
    font-size: clamp(0.5rem, 0.68vw, 0.62rem);
    color: rgba(255,255,255,.38);
    line-height: 1.75;
    font-weight: 300;
    margin: 0;
  }

  /* ── Bottom bar ─────────────────────────────────────────────────────────── */
  .ab-bottom {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 1rem 2.5rem 1.5rem;
    border-top: 1px solid rgba(255,255,255,.05);
    flex-shrink: 0;
  }
  .ab-prog-track { width: 80px; height: 2px; background: rgba(255,255,255,.08); border-radius: 2px; overflow: hidden; }
  .ab-prog-fill  { height: 100%; width: 40%; background: linear-gradient(90deg, #9ad993, #e1e75c); border-radius: 2px; animation: abProgPulse 2.5s ease-in-out 0.4s infinite alternate; }
  .ab-brand { margin-left: auto; font-size: 0.58rem; letter-spacing: 0.28em; text-transform: uppercase; color: rgba(255,255,255,.12); font-weight: 500; }

  /* ── Keyframes ───────────────────────────────────────────────────────────── */
  @keyframes abRingPulse {
    0%,100% { opacity: .6; transform: translate(-50%,-50%) scale(1); }
    50%      { opacity: 1;  transform: translate(-50%,-50%) scale(1.03); }
  }
  @keyframes abProgPulse { from { width: 25%; } to { width: 65%; } }

  /* ── Responsive ──────────────────────────────────────────────────────────── */
  @media (max-width: 1100px) {
    .ab-left  { width: 50%; }
    .ab-right { width: 56%; }
  }
  @media (max-width: 860px) {
    .ab-body  { flex-direction: column; align-items: flex-start; justify-content: center; }
    .ab-left  { width: 90%; padding: 0 1.5rem; }
    .ab-right {
      position: relative;
      width: 100%;
      height: 40vh;
      top: auto; right: auto; bottom: auto;
      flex-shrink: 0;
    }
    .ab-letters span { font-size: clamp(3rem, 12vw, 8rem); }
    .ab-detail { display: none; }
  }
  @media (max-width: 560px) {
    .ab-hdg { font-size: clamp(2rem, 12vw, 4rem); }
    .ab-ctas { flex-direction: column; align-items: flex-start; }
    .ab-btn-primary, .ab-btn-secondary { width: 100%; justify-content: center; }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .ab-anim { transition: none; opacity: 1; transform: none; }
    .ab-ring-1,.ab-ring-2,.ab-ring-3,.ab-prog-fill { animation: none; }
  }
</style>
