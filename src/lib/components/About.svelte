<script>
  import { onMount } from "svelte";

  let sectionEl;
  let visible = false;

  onMount(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) visible = true;
      },
      { threshold: 0.05 },
    );
    if (sectionEl) io.observe(sectionEl);
    return () => io.disconnect();
  });
</script>

<section
  id="about"
  bind:this={sectionEl}
  class="ab-wrap"
  class:ab-vis={visible}
>
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
        <h2 class="ab-hdg ab-hdg-out ab-anim" style="--d:0.22s">Beconix AI</h2>
      </div>

      <p class="ab-desc ab-anim" style="--d:0.34s">
        Beconix AI helps organizations move beyond traditional building
        management by combining Artificial Intelligence, Digital Twin
        technology, and real-time analytics into a single intelligent platform.
      </p>

      <!-- Key Benefits grid -->
      <div class="ab-benefits ab-anim" style="--d:0.48s">
        <div class="ab-benefit">
          <div class="ab-benefit-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="6" width="20" height="12" rx="2" /><path
                d="M6 10h.01M6 14h.01M10 10h4M10 14h4M18 10h.01M18 14h.01"
              />
            </svg>
          </div>
          <div class="ab-benefit-body">
            <h3 class="ab-benefit-title">AI-Powered Intelligence</h3>
            <p class="ab-benefit-desc">
              Gain actionable insights, automate decision-making, and optimize
              building performance.
            </p>
          </div>
        </div>

        <div class="ab-benefit">
          <div class="ab-benefit-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V12h6v9" />
            </svg>
          </div>
          <div class="ab-benefit-body">
            <h3 class="ab-benefit-title">Digital Twin Visualization</h3>
            <p class="ab-benefit-desc">
              Real-time digital representation of your building for complete
              operational visibility.
            </p>
          </div>
        </div>

        <div class="ab-benefit">
          <div class="ab-benefit-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div class="ab-benefit-body">
            <h3 class="ab-benefit-title">Energy Optimization</h3>
            <p class="ab-benefit-desc">
              Reduce energy consumption and costs through intelligent
              recommendations.
            </p>
          </div>
        </div>

        <div class="ab-benefit">
          <div class="ab-benefit-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path
                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
              />
            </svg>
          </div>
          <div class="ab-benefit-body">
            <h3 class="ab-benefit-title">Predictive Maintenance</h3>
            <p class="ab-benefit-desc">
              Detect potential equipment failures before they impact operations.
            </p>
          </div>
        </div>

        <div class="ab-benefit">
          <div class="ab-benefit-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M3 3v18h18" /><path d="M18 17V9M13 17V5M8 17v-3" />
            </svg>
          </div>
          <div class="ab-benefit-body">
            <h3 class="ab-benefit-title">Real-Time Monitoring</h3>
            <p class="ab-benefit-desc">
              Monitor HVAC, lighting, power, water, and critical systems from a
              unified dashboard.
            </p>
          </div>
        </div>

        <div class="ab-benefit">
          <div class="ab-benefit-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" /><path
                d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              />
            </svg>
          </div>
          <div class="ab-benefit-body">
            <h3 class="ab-benefit-title">Multi-Site Management</h3>
            <p class="ab-benefit-desc">
              Manage multiple facilities and portfolios from a single platform.
            </p>
          </div>
        </div>
      </div>
      <!-- /ab-benefits -->
    </div>
    <!-- /ab-left -->

    <!-- RIGHT — client showcase -->
    <div class="ab-right">

      <!-- ambient glow behind grid -->
      <div class="ab-cl-glow" aria-hidden="true"></div>

      <div class="ab-cl-wrap">

        <!-- Header -->
        <div class="ab-cl-header">
          <div class="ab-cl-rule"></div>
          <span class="ab-cl-title">Trusted By</span>
          <div class="ab-cl-rule"></div>
        </div>

        <!-- 3×3 logo grid -->
        <div class="ab-cl-grid">

          <a class="ab-cl-card" style="--i:0" href="https://aldarhospitality.beconix.ai" target="_blank" rel="noopener noreferrer" aria-label="Visit Aldar Hospitality portal">
            <div class="ab-cl-img-wrap">
              <img src="data:image/png;base64,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" alt="Aldar Hospitality" loading="lazy" />
            </div>
            <span>Aldar Hospitality</span>
          </a>

          <a class="ab-cl-card" style="--i:1" href="https://dham.beconix.ai" target="_blank" rel="noopener noreferrer" aria-label="Visit DHAM portal">
            <div class="ab-cl-img-wrap">
              <img src="/clients/dham.png" alt="DHAM" loading="lazy" />
            </div>
            <span>DHAM</span>
          </a>

          <a class="ab-cl-card" style="--i:2" href="https://emaarmalls.beconix.ai" target="_blank" rel="noopener noreferrer" aria-label="Visit Emaar Malls portal">
            <div class="ab-cl-img-wrap">
              <img src="/clients/emaar.png" alt="Emaar Malls" loading="lazy" />
            </div>
            <span>Emaar Malls</span>
          </a>

          <a class="ab-cl-card" style="--i:3" href="https://rakproperties.beconix.ai" target="_blank" rel="noopener noreferrer" aria-label="Visit Rak Properties portal">
            <div class="ab-cl-img-wrap">
              <img src="/clients/rak-properties.png" alt="Rak Properties" loading="lazy" />
            </div>
            <span>Rak Properties</span>
          </a>

          <a class="ab-cl-card" style="--i:4" href="https://sobha.beconix.ai" target="_blank" rel="noopener noreferrer" aria-label="Visit Sobha portal">
            <div class="ab-cl-img-wrap">
              <img src="/clients/sobha.png" alt="Sobha" loading="lazy" />
            </div>
            <span>Sobha</span>
          </a>

          <a class="ab-cl-card" style="--i:5" href="https://stregis.beconix.ai" target="_blank" rel="noopener noreferrer" aria-label="Visit St Regis portal">
            <div class="ab-cl-img-wrap">
              <img src="/clients/stregis.png" alt="St Regis" loading="lazy" />
            </div>
            <span>St Regis</span>
          </a>

          <a class="ab-cl-card" style="--i:6" href="https://tecom.beconix.ai" target="_blank" rel="noopener noreferrer" aria-label="Visit Tecom portal">
            <div class="ab-cl-img-wrap">
              <img src="/clients/tecom.png" alt="Tecom" loading="lazy" />
            </div>
            <span>Tecom</span>
          </a>

          <a class="ab-cl-card" style="--i:7" href="https://transguard.beconix.ai" target="_blank" rel="noopener noreferrer" aria-label="Visit Transguard portal">
            <div class="ab-cl-img-wrap">
              <img src="/clients/transguard.png" alt="Transguard" loading="lazy" />
            </div>
            <span>Transguard</span>
          </a>

          <a class="ab-cl-card" style="--i:8" href="https://xxiicarat.beconix.ai" target="_blank" rel="noopener noreferrer" aria-label="Visit XXIICarat portal">
            <div class="ab-cl-img-wrap">
              <img src="/clients/xxiicarat.png" alt="XXIICarat" loading="lazy" />
            </div>
            <span>XXIICarat</span>
          </a>

        </div>

        <!-- Stats row -->
        <div class="ab-cl-stats">
          <div class="ab-cl-stat">
            <span class="ab-cl-stat-val">97</span>
            <span class="ab-cl-stat-lbl">Buildings</span>
          </div>
          <div class="ab-cl-stat-sep"></div>
          <div class="ab-cl-stat">
            <span class="ab-cl-stat-val">10.8K</span>
            <span class="ab-cl-stat-lbl">Assets</span>
          </div>
          <div class="ab-cl-stat-sep"></div>
          <div class="ab-cl-stat">
            <span class="ab-cl-stat-val">65.5K</span>
            <span class="ab-cl-stat-lbl">Data Points</span>
          </div>
        </div>

      </div>

    </div><!-- /ab-right -->

  </div>
  <!-- /ab-body -->

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
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  /* ── HUD corners ────────────────────────────────────────────────────────── */
  .ab-hud {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 9;
  }
  .ab-hud-tl,
  .ab-hud-tr,
  .ab-hud-bl,
  .ab-hud-br {
    position: absolute;
    width: 24px;
    height: 24px;
  }
  .ab-hud-tl {
    top: 18px;
    left: 18px;
    border-top: 1.5px solid rgba(154, 217, 147, 0.5);
    border-left: 1.5px solid rgba(154, 217, 147, 0.5);
  }
  .ab-hud-tr {
    top: 18px;
    right: 18px;
    border-top: 1.5px solid rgba(154, 217, 147, 0.5);
    border-right: 1.5px solid rgba(154, 217, 147, 0.5);
  }
  .ab-hud-bl {
    bottom: 18px;
    left: 18px;
    border-bottom: 1.5px solid rgba(154, 217, 147, 0.5);
    border-left: 1.5px solid rgba(154, 217, 147, 0.5);
  }
  .ab-hud-br {
    bottom: 18px;
    right: 18px;
    border-bottom: 1.5px solid rgba(154, 217, 147, 0.5);
    border-right: 1.5px solid rgba(154, 217, 147, 0.5);
  }

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
      opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s),
      transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s);
  }
  .ab-vis .ab-anim {
    opacity: 1;
    transform: translateX(0);
  }

  /* Heading */
  .ab-heading-wrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.6rem;
  }
  .ab-hdg {
    font-size: clamp(2.2rem, 6.5vw, 8rem);
    font-weight: 900;
    line-height: 0.92;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    margin: 0;
  }
  .ab-hdg-solid {
    color: #ffffff;
  }
  .ab-hdg-out {
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.4);
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* Description */
  .ab-desc {
    font-size: clamp(0.62rem, 0.9vw, 0.78rem);
    color: rgba(255, 255, 255, 0.55);
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
    border: 1px solid rgba(154, 217, 147, 0.25);
    border-radius: 4px;
    background: rgba(154, 217, 147, 0.06);
    color: #9ad993;
    padding: 5px;
    margin-top: 1px;
  }
  .ab-benefit-icon svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  .ab-benefit-body {
    display: flex;
    flex-direction: column;
    gap: 0.18rem;
  }
  .ab-benefit-title {
    font-size: clamp(0.75rem, 1vw, 0.95rem);
    font-weight: 700;
    color: rgba(255, 255, 255, 0.88);
    letter-spacing: 0.02em;
    margin: 0;
  }
  .ab-benefit-desc {
    font-size: clamp(0.68rem, 0.85vw, 0.8rem);
    color: rgba(255, 255, 255, 0.38);
    line-height: 1.65;
    font-weight: 300;
    margin: 0;
  }

  /* ── RIGHT client showcase ───────────────────────────────────────────────── */
  .ab-right {
    position: absolute;
    right: 0; top: 0; bottom: 0;
    width: 56%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(1.5rem, 3vh, 2.5rem) clamp(1.5rem, 3vw, 2.8rem) clamp(1.5rem, 3vh, 2.5rem) 0.5rem;
  }

  /* Ambient glow orb */
  .ab-cl-glow {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 70%; height: 60%;
    background: radial-gradient(ellipse at center,
      rgba(154,217,147,0.07) 0%,
      rgba(225,231,92,0.04) 40%,
      transparent 70%);
    pointer-events: none;
    filter: blur(40px);
  }

  .ab-cl-wrap {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: clamp(0.8rem, 1.8vh, 1.4rem);
    z-index: 1;
  }

  /* ── Header ── */
  .ab-cl-header {
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }
  .ab-cl-rule {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(154,217,147,0.35), transparent);
  }
  .ab-cl-title {
    font-size: clamp(0.5rem, 0.65vw, 0.58rem);
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(154,217,147,0.65);
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* ── 3×3 Grid ── */
  .ab-cl-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(0.45rem, 0.9vw, 0.8rem);
  }

  /* Card — staggered entrance via --i */
  .ab-cl-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: clamp(0.7rem, 1.4vw, 1.1rem) clamp(0.5rem, 0.9vw, 0.8rem);
    background: rgba(255,255,255,0.028);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px;
    text-decoration: none;
    cursor: pointer;
    /* entrance */
    opacity: 0;
    transform: translateY(18px);
    transition:
      opacity    0.55s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i) * 0.07s + 0.3s),
      transform  0.55s cubic-bezier(0.22, 1, 0.36, 1) calc(var(--i) * 0.07s + 0.3s),
      background 0.22s ease,
      border-color 0.22s ease,
      box-shadow 0.22s ease;
    position: relative;
    overflow: hidden;
  }
  /* top shimmer line */
  .ab-cl-card::before {
    content: '';
    position: absolute;
    top: 0; left: 20%; right: 20%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(154,217,147,0.3), transparent);
    opacity: 0;
    transition: opacity 0.22s ease;
  }

  /* visible state */
  .ab-vis .ab-cl-card {
    opacity: 1;
    transform: translateY(0);
  }

  .ab-cl-card:hover {
    background: rgba(154,217,147,0.055);
    border-color: rgba(154,217,147,0.22);
    box-shadow: 0 4px 24px rgba(154,217,147,0.1), 0 0 0 1px rgba(154,217,147,0.08);
    transform: translateY(-3px);
  }
  .ab-cl-card:hover::before { opacity: 1; }
  .ab-cl-card:focus-visible {
    outline: 2px solid rgba(154,217,147,0.55);
    outline-offset: 3px;
  }

  /* Logo container */
  .ab-cl-img-wrap {
    width: 100%;
    height: clamp(28px, 3.8vw, 44px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ab-cl-img-wrap img {
    width: auto;
    max-width: 85%;
    height: 100%;
    object-fit: contain;
    opacity: 0.72;
    transition: opacity 0.22s ease;
  }
  .ab-cl-card:hover .ab-cl-img-wrap img { opacity: 1; }

  /* Client name */
  .ab-cl-card span {
    font-size: clamp(0.45rem, 0.58vw, 0.54rem);
    font-weight: 500;
    letter-spacing: 0.06em;
    color: rgba(255,255,255,0.35);
    text-align: center;
    white-space: nowrap;
    transition: color 0.22s ease;
  }
  .ab-cl-card:hover span { color: rgba(255,255,255,0.72); }

  /* ── Stats row ── */
  .ab-cl-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    padding: clamp(0.6rem, 1.2vh, 0.9rem) 0 0;
    border-top: 1px solid rgba(255,255,255,0.05);
  }
  .ab-cl-stat {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
  }
  .ab-cl-stat-val {
    font-size: clamp(0.9rem, 1.4vw, 1.2rem);
    font-weight: 700;
    background: linear-gradient(90deg, #9ad993, #e1e75c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
  }
  .ab-cl-stat-lbl {
    font-size: clamp(0.38rem, 0.5vw, 0.46rem);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.32);
    font-weight: 500;
    white-space: nowrap;
  }
  .ab-cl-stat-sep {
    width: 1px;
    height: 28px;
    background: rgba(255,255,255,0.07);
    flex-shrink: 0;
  }

  /* ── Bottom bar ─────────────────────────────────────────────────────────── */
  .ab-bottom {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 1rem 2.5rem 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    flex-shrink: 0;
  }
  .ab-prog-track {
    width: 80px;
    height: 2px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 2px;
    overflow: hidden;
  }
  .ab-prog-fill {
    height: 100%;
    width: 40%;
    background: linear-gradient(90deg, #9ad993, #e1e75c);
    border-radius: 2px;
    animation: abProgPulse 2.5s ease-in-out 0.4s infinite alternate;
  }
  .ab-brand {
    margin-left: auto;
    font-size: 0.58rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.12);
    font-weight: 500;
  }

  /* ── Keyframes ───────────────────────────────────────────────────────────── */
  @keyframes abProgPulse {
    from {
      width: 25%;
    }
    to {
      width: 65%;
    }
  }

  /* ── Responsive ──────────────────────────────────────────────────────────── */
  @media (max-width: 1100px) {
    .ab-left  { width: 46%; }
    .ab-right { width: 54%; }
    .ab-clients-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 860px) {
    .ab-body {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    .ab-left {
      width: 90%;
      padding: 0 1.5rem;
    }
    .ab-right { display: none; }
  }
  @media (max-width: 560px) {
    .ab-hdg {
      font-size: clamp(2rem, 12vw, 4rem);
    }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .ab-anim { transition: none; opacity: 1; transform: none; }
    .ab-prog-fill { animation: none; }
    .ab-cl-card { transition: none; opacity: 1; transform: none; }
  }
</style>
