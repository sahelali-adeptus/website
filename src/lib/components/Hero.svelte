<script>
  import { onMount } from "svelte";

  const typeText = "Beconix AI";
  let typed = "";
  let ready = false;
  let videoSrc = "";

  onMount(() => {
    // Mark ready immediately on next frame — no delay
    requestAnimationFrame(() => {
      ready = true;
    });

    // Load video after page is interactive so it never blocks render
    setTimeout(() => {
      videoSrc = "/hero-bg-new.mp4";
    }, 200);

    // Typing effect
    let i = 0;
    const type = () => {
      if (i <= typeText.length) {
        typed = typeText.slice(0, i++);
        setTimeout(type, i === 1 ? 500 : 75);
      }
    };
    setTimeout(type, 400);
  });
</script>

<section class="hero" class:ready>
  <!-- ── Video background ───────────────────────────────────────────────── -->
  <div class="hero-video-wrap" aria-hidden="true">
    <video
      class="hero-video"
      src={videoSrc}
      poster="/hero-bg.png"
      autoplay
      muted
      loop
      playsinline
      preload="none"
      disablepictureinpicture
    ></video>
    <!-- Dark overlay to keep text readable -->
    <div class="hero-video-overlay"></div>
  </div>

  <!-- ── Scan beam ──────────────────────────────────────────────────────── -->
  <div class="hero-scan" aria-hidden="true"></div>

  <!-- ── Floating particles ─────────────────────────────────────────────── -->
  <div class="hero-particles" aria-hidden="true">
    {#each Array(8) as _, i}
      <span class="hero-particle" style="--pi:{i}"></span>
    {/each}
  </div>

  <!-- ── Giant letter row ────────────────────────────────────────────── -->
  <div class="hero-letters" aria-hidden="true">
    <span style="--i:0">B</span>
    <span style="--i:1">E</span>
    <span style="--i:2">C</span>
    <span class="letter-dim" style="--i:3">O</span>
    <span style="--i:4">N</span>
    <span style="--i:5">I</span>
    <span style="--i:6">X</span>
  </div>

  <!-- ── Vertical label — typing effect ─────────────────────────────── -->
  <div class="hero-vert-label" aria-hidden="true">
    {typed}<span class="type-cursor"></span>
  </div>

  <!-- ── Left content ────────────────────────────────────────────────── -->
  <div class="hero-left">
    <h1 class="hero-heading">
      <span class="hw slide-line" style="--d:0.15s">INTELLIGENT</span>
      <span class="ha slide-line" style="--d:0.30s">DIGITAL TWIN</span>
      <span class="hw slide-line" style="--d:0.45s">PLATFORM FOR</span>
      <span class="hw slide-line" style="--d:0.60s">SMART BUILDINGS</span>
    </h1>
    <div class="hero-ai slide-line" style="--d:0.80s">AI</div>

    <!-- CTA buttons -->
    <div class="hero-ctas slide-line" style="--d:0.95s">
      <a href="#demo" class="btn-primary">Request Demo</a>
      <a href="#platform" class="btn-secondary">Explore Platform</a>
    </div>
  </div>

  <!-- ── Right glass card ────────────────────────────────────────────── -->
  <div class="hero-card">
    <p class="card-body">
      AI can monitor and manage your entire building infrastructure — from
      energy systems to connected assets, all in real-time.
    </p>

    <!-- Stats row -->
    <div class="card-stats">
      <div class="cstat">
        <span class="cstat-val">97</span>
        <span class="cstat-lbl">Buildings</span>
      </div>
      <div class="cstat-divider"></div>
      <div class="cstat">
        <span class="cstat-val">10.8K</span>
        <span class="cstat-lbl">Assets</span>
      </div>
      <div class="cstat-divider"></div>
      <div class="cstat">
        <span class="cstat-val">65.5K</span>
        <span class="cstat-lbl">Data Points</span>
      </div>
    </div>
  </div>

  <!-- ── Bottom tag bar ──────────────────────────────────────────────── -->
  <div class="hero-bottom" aria-hidden="true">
    <div class="btag">
      <span class="btag-line"></span>
      <span class="btag-txt">intelligent</span>
      <span class="btag-line"></span>
    </div>
    <div class="btag">
      <span class="btag-line"></span>
      <span class="btag-txt">automated</span>
      <span class="btag-line"></span>
    </div>
    <div class="btag">
      <span class="btag-line"></span>
      <span class="btag-txt">connected</span>
      <span class="btag-line"></span>
    </div>
  </div>
</section>

<style>
  /* ── Root ──────────────────────────────────────────────────────────────── */
  .hero {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 600px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
  }

  /* ── Video background ──────────────────────────────────────────────────── */
  .hero-video-wrap {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
  }

  .hero-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    image-rendering: high-quality;
  }

  .hero-video-overlay {
    position: absolute;
    inset: 0;
    /* Multi-layer overlay: dark vignette + brand color tint at edges */
    background: rgba(4, 20, 8, 0.78);
    pointer-events: none;
  }

  /* Respect reduced motion — pause video */
  @media (prefers-reduced-motion: reduce) {
    .hero-video {
      animation: none;
    }
  }

  /* ── Giant letters ─────────────────────────────────────────────────────── */
  .hero-letters {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 53%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 clamp(0.8rem, 2vw, 2.5rem);
    z-index: 3;
    pointer-events: none;
    user-select: none;
  }
  .hero-letters span {
    font-size: clamp(6rem, 15.5vw, 21rem);
    font-weight: 100;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.78);
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0;
    flex-shrink: 0;
    opacity: 0;
    transform: translateY(-40px);
    transition:
      opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: calc(var(--i) * 0.07s + 0.1s);
  }
  .ready .hero-letters span {
    opacity: 1;
    transform: translateY(0);
  }
  .hero-letters .letter-dim {
    -webkit-text-stroke: 0px;
    background: linear-gradient(90deg, #9ad993 0%, #e1e75c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Vertical label — typing effect ────────────────────────────────────── */
  .hero-vert-label {
    position: absolute;
    left: clamp(0.8rem, 1.5vw, 1.6rem);
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    transform-origin: center center;
    font-size: clamp(0.42rem, 0.6vw, 0.52rem);
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.32);
    font-weight: 500;
    white-space: nowrap;
    z-index: 5;
    pointer-events: none;
  }
  .type-cursor {
    display: inline-block;
    width: 1px;
    height: 0.9em;
    background: rgba(154, 217, 147, 0.7);
    margin-left: 1px;
    vertical-align: middle;
    animation: blink 0.85s step-end infinite;
  }
  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  /* ── Slide-in lines (left → right) ────────────────────────────────────── */
  .slide-line {
    opacity: 0;
    transform: translateX(-60px);
    transition:
      opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s),
      transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) var(--d, 0s);
  }
  .ready .slide-line {
    opacity: 1;
    transform: translateX(0);
  }

  /* ── Left content block ────────────────────────────────────────────────── */
  .hero-left {
    position: relative;
    z-index: 10;
    padding: 0 0 clamp(4rem, 8vh, 6rem) clamp(1.8rem, 4.5vw, 5.5rem);
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    max-width: 42%;
  }

  .hero-heading {
    display: flex;
    flex-direction: column;
    margin: 0;
    line-height: 1.06;
  }
  .hero-heading span {
    display: block;
    font-size: clamp(1.6rem, 3.3vw, 4.2rem);
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-family: "Space Grotesk", "Montserrat", sans-serif;
  }
  .hw {
    color: #ffffff;
  }
  .ha {
    background: linear-gradient(90deg, #9ad993 0%, #e1e75c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-ai {
    font-size: clamp(2.5rem, 5.5vw, 6.5rem);
    font-weight: 100;
    letter-spacing: 0.06em;
    line-height: 1;
    margin-top: 0.15em;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.45);
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* ── CTA Buttons ───────────────────────────────────────────────────────── */
  .hero-ctas {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1.4rem;
    flex-wrap: wrap;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    padding: 0.65rem 1.5rem;
    background: linear-gradient(135deg, #9ad993 0%, #e1e75c 100%);
    color: #081a0c;
    font-size: clamp(0.58rem, 0.78vw, 0.7rem);
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 28px rgba(154, 217, 147, 0.28);
    transition:
      opacity 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }
  .btn-primary:hover {
    opacity: 0.88;
    transform: translateY(-2px);
    box-shadow: 0 0 42px rgba(154, 217, 147, 0.45);
  }
  .btn-primary:focus-visible {
    outline: 2px solid #9ad993;
    outline-offset: 3px;
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    padding: 0.65rem 1.3rem;
    background: transparent;
    color: rgba(255, 255, 255, 0.72);
    font-size: clamp(0.58rem, 0.78vw, 0.7rem);
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    cursor: pointer;
    transition:
      border-color 0.2s ease,
      color 0.2s ease,
      background 0.2s ease;
  }
  .btn-secondary:hover {
    border-color: rgba(154, 217, 147, 0.45);
    color: rgba(154, 217, 147, 0.92);
    background: rgba(154, 217, 147, 0.06);
  }
  .btn-secondary:focus-visible {
    outline: 2px solid rgba(154, 217, 147, 0.6);
    outline-offset: 3px;
  }

  /* ── Right glass card — fades + slides from right ─────────────────────── */
  .hero-card {
    position: absolute;
    right: clamp(1.5rem, 3.5vw, 4rem);
    bottom: clamp(4rem, 10vh, 7rem);
    z-index: 10;
    width: clamp(200px, 24vw, 310px);
    background: rgba(6, 8, 20, 0.52);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    padding: 1.4rem 1.3rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    opacity: 0;
    transform: translateX(40px);
    box-shadow:
      0 16px 48px rgba(0, 0, 0, 0.35),
      0 0 0 1px rgba(154, 217, 147, 0.05);
    transition:
      opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.7s,
      transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.7s;
  }
  /* Top accent line */
  .hero-card::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 15%;
    right: 15%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(154, 217, 147, 0.55),
      transparent
    );
    border-radius: 1px;
  }
  .ready .hero-card {
    opacity: 1;
    transform: translateX(0);
  }

  .card-body {
    font-size: clamp(0.6rem, 0.9vw, 0.76rem);
    color: rgba(255, 255, 255, 0.62);
    line-height: 1.85;
    font-weight: 300;
    margin: 0;
  }

  /* Stats */
  .card-stats {
    display: flex;
    align-items: center;
    gap: 0;
    padding: 0.7rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .cstat {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.18rem;
  }
  .cstat-val {
    font-size: clamp(0.85rem, 1.4vw, 1.15rem);
    font-weight: 700;
    background: linear-gradient(90deg, #9ad993, #e1e75c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.01em;
    line-height: 1;
  }
  .cstat-lbl {
    font-size: clamp(0.38rem, 0.52vw, 0.46rem);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.52);
    font-weight: 500;
    white-space: nowrap;
  }
  .cstat-divider {
    width: 1px;
    height: 28px;
    background: rgba(255, 255, 255, 0.08);
    flex-shrink: 0;
  }

  /* ── Bottom tag bar — fades up ─────────────────────────────────────────── */
  .hero-bottom {
    position: absolute;
    bottom: 1.2rem;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    pointer-events: none;
    opacity: 0;
    transform: translateY(16px);
    transition:
      opacity 0.8s ease 1.1s,
      transform 0.8s ease 1.1s;
  }
  .ready .hero-bottom {
    opacity: 1;
    transform: translateY(0);
  }
  .btag {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .btag-line {
    display: block;
    width: clamp(40px, 6vw, 90px);
    height: 1px;
    background: rgba(255, 255, 255, 0.14);
  }
  .btag-txt {
    font-size: clamp(0.38rem, 0.55vw, 0.48rem);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.42);
    font-weight: 500;
    white-space: nowrap;
  }

  /* ── Responsive — Mobile First ─────────────────────────────────────────── */

  /* Large tablet (1024px) */
  @media (max-width: 1024px) {
    .hero-letters span {
      font-size: clamp(5rem, 12vw, 12rem);
    }
    .hero-left {
      max-width: 52%;
    }
    .hero-card {
      width: clamp(190px, 26vw, 260px);
    }
  }

  /* Tablet portrait (768px) */
  @media (max-width: 768px) {
    .hero-letters span {
      font-size: clamp(4rem, 12vw, 8rem);
    }
    .hero-left {
      max-width: 65%;
      padding-left: 2rem;
      padding-bottom: clamp(4rem, 10vh, 6rem);
    }
    .hero-card {
      width: clamp(175px, 32vw, 230px);
      right: 1.25rem;
      bottom: clamp(4rem, 10vh, 6rem);
    }
    .hero-heading span {
      font-size: clamp(1.5rem, 3vw, 3rem);
    }
  }

  /* Mobile (600px) — stack layout, hide overlapping card */
  @media (max-width: 600px) {
    .hero {
      height: 100svh;
      min-height: 100svh;
    }
    .hero-letters {
      display: none;
    }
    .hero-vert-label {
      display: none;
    }

    .hero-robot {
      width: clamp(180px, 52vw, 300px);
      top: 50%;
      transform: translate(-50%, -38%);
    }

    .hero-left {
      max-width: 100%;
      width: 100%;
      padding: 0 1.25rem clamp(5.5rem, 14vh, 8rem);
    }
    .hero-heading span {
      font-size: clamp(1.7rem, 7.5vw, 3rem);
    }
    .hero-ai {
      font-size: clamp(2rem, 8vw, 4rem);
    }

    /* Hide the floating card — no room, avoids overlap */
    .hero-card {
      display: none;
    }

    .hero-ctas {
      gap: 0.55rem;
      flex-wrap: wrap;
    }
    .btn-primary,
    .btn-secondary {
      min-height: 44px;
      padding: 0.72rem 1.3rem;
      font-size: 0.7rem;
    }

    .hero-bottom {
      bottom: 0.75rem;
    }
    .btag-line {
      width: clamp(24px, 5vw, 60px);
    }
  }

  /* Small mobile (375px) */
  @media (max-width: 390px) {
    .hero-left {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .hero-heading span {
      font-size: clamp(1.5rem, 7vw, 2.4rem);
    }
    .btn-primary,
    .btn-secondary {
      font-size: 0.65rem;
      padding: 0.7rem 1rem;
    }
  }

  /* ── Scan beam ─────────────────────────────────────────────────────────── */
  .hero-scan {
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    pointer-events: none;
    z-index: 2;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(154, 217, 147, 0.55) 28%,
      rgba(225, 231, 92, 0.35) 72%,
      transparent 100%
    );
    box-shadow:
      0 0 18px rgba(154, 217, 147, 0.25),
      0 0 50px rgba(154, 217, 147, 0.1);
    animation: scanBeam 9s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes scanBeam {
    0%,
    4% {
      top: -2px;
      opacity: 0;
    }
    7% {
      opacity: 1;
    }
    88% {
      opacity: 0.45;
    }
    96% {
      top: 100vh;
      opacity: 0;
    }
    100% {
      top: -2px;
      opacity: 0;
    }
  }

  /* ── Floating particles ─────────────────────────────────────────────────── */
  .hero-particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  }
  .hero-particle {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    left: calc(var(--pi) * 6.25% + 0.5%);
    bottom: -4px;
    animation: particleDrift calc(5.5s + var(--pi) * 0.38s) ease-in infinite
      calc(var(--pi) * -0.62s);
  }
  .hero-particle:nth-child(odd) {
    background: rgba(154, 217, 147, 0.8);
    box-shadow: 0 0 5px rgba(154, 217, 147, 0.65);
  }
  .hero-particle:nth-child(even) {
    background: rgba(225, 231, 92, 0.65);
    box-shadow: 0 0 5px rgba(225, 231, 92, 0.5);
  }
  .hero-particle:nth-child(3n) {
    width: 3px;
    height: 3px;
  }
  @keyframes particleDrift {
    0% {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    8% {
      opacity: 1;
    }
    80% {
      opacity: 0.2;
    }
    100% {
      transform: translateY(-102vh) translateX(calc(sin(var(--pi)) * 20px));
      opacity: 0;
    }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .hero-letters span,
    .slide-line,
    .hero-card,
    .hero-bottom {
      transition: none;
      opacity: 1;
      transform: none;
      translate: none;
    }
    .type-cursor {
      animation: none;
    }
    .hero-scan,
    .hero-particles {
      display: none;
    }
  }
</style>
