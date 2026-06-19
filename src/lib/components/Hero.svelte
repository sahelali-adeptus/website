<script>
  import { onMount } from 'svelte';

  const typeText = 'Beconix AI';
  let typed = '';
  let ready = false;

  onMount(() => {
    // Trigger entrance animations after a short paint delay
    requestAnimationFrame(() => {
      setTimeout(() => { ready = true; }, 60);
    });

    // Typing effect for vertical label — starts after 0.6s
    let i = 0;
    const type = () => {
      if (i <= typeText.length) {
        typed = typeText.slice(0, i);
        i++;
        setTimeout(type, i === 1 ? 700 : 80);
      }
    };
    setTimeout(type, 600);
  });
</script>

<section class="hero" class:ready>
  <!-- ── Background ──────────────────────────────────────────────────── -->
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="hero-noise" aria-hidden="true"></div>
  <div class="hero-scanlines" aria-hidden="true"></div>

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

  <!-- ── 3D AI Robot — centre, slightly below midpoint ──────────────── -->
  <div class="hero-robot" aria-hidden="true">
    <div class="robot-glow"></div>
    <img src="/ai-robot.png" alt="" class="robot-img" />
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
    overflow: hidden;
    background: #120825;
    display: flex;
    align-items: flex-end;
  }

  /* ── Background layers ─────────────────────────────────────────────────── */
  .hero-bg {
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
  }
  .hero-noise {
    position: absolute;
    inset: 0;
    z-index: 1;
    opacity: 0.55;
    background-image: radial-gradient(
        circle at 30% 20%,
        rgba(154, 217, 147, 0.07) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(225, 231, 92, 0.05) 0%,
        transparent 40%
      );
    pointer-events: none;
  }
  .hero-scanlines {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background-image: repeating-linear-gradient(
      to bottom,
      transparent 0,
      transparent 3px,
      rgba(0, 0, 0, 0.06) 3px,
      rgba(0, 0, 0, 0.06) 4px
    );
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
    /* Letter entrance — fade + drop in from top */
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
  /* Highlighted letter uses primary gradient */
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
    color: rgba(255, 255, 255, 0.18);
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
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  /* ── 3D Robot — slides up from below ───────────────────────────────────── */
  .hero-robot {
    position: absolute;
    left: 50%;
    top: 56%;
    transform: translate(-50%, -38%);
    z-index: 6;
    width: clamp(280px, 28vw, 580px);
    pointer-events: none;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /* Entrance */
    opacity: 0;
    translate: 0 80px;
    transition:
      opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s,
      translate 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s;
  }
  .ready .hero-robot {
    opacity: 1;
    translate: 0 0;
  }

  /* Ambient glow beneath the robot feet */
  .robot-glow {
    position: absolute;
    bottom: -6%;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 28%;
    background: radial-gradient(
      ellipse at center,
      rgba(154, 217, 147, 0.5) 0%,
      rgba(225, 231, 92, 0.22) 45%,
      transparent 72%
    );
    filter: blur(18px);
    border-radius: 50%;
    pointer-events: none;
  }

  .robot-img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
    display: block;
    filter: drop-shadow(0 0 28px rgba(154, 217, 147, 0.35))
      drop-shadow(0 0 60px rgba(225, 231, 92, 0.2));
    animation: robotFloat 5s ease-in-out infinite;
  }

  @keyframes robotFloat {
    0%,  100% { transform: translateY(0); }
    50%        { transform: translateY(-14px); }
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
    padding: 0 0 clamp(5rem, 9vh, 7rem) clamp(1.8rem, 4.5vw, 5.5rem);
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
    font-size: clamp(1.6rem, 3.5vw, 4.2rem);
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .hw { color: #ffffff; }
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
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.35);
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* ── Right glass card — fades + slides from right ─────────────────────── */
  .hero-card {
    position: absolute;
    right: clamp(1.5rem, 3.5vw, 4rem);
    bottom: clamp(4rem, 10vh, 7rem);
    z-index: 10;
    width: clamp(200px, 24vw, 310px);
    background: rgba(22, 12, 42, 0.72);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 4px;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    padding: 1.4rem 1.3rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* Entrance */
    opacity: 0;
    transform: translateX(40px);
    transition:
      opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.7s,
      transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.7s;
  }
  .ready .hero-card {
    opacity: 1;
    transform: translateX(0);
  }

  .card-body {
    font-size: clamp(0.6rem, 0.9vw, 0.76rem);
    color: rgba(255, 255, 255, 0.42);
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
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
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
    color: rgba(255, 255, 255, 0.28);
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
    background: rgba(255, 255, 255, 0.12);
  }
  .btag-txt {
    font-size: clamp(0.38rem, 0.55vw, 0.48rem);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.22);
    font-weight: 500;
    white-space: nowrap;
  }

  /* ── Responsive ────────────────────────────────────────────────────────── */
  @media (max-width: 960px) {
    .hero-letters span { font-size: clamp(4rem, 13vw, 10rem); }
    .hero-left { max-width: 55%; }
    .hero-card { width: clamp(180px, 28vw, 240px); }
  }
  @media (max-width: 680px) {
    .hero-letters { display: none; }
    .hero-vert-label { display: none; }
    .hero-left { max-width: 88%; padding-left: 1.5rem; }
    .hero-card { right: 1rem; bottom: 3.5rem; width: clamp(160px, 80vw, 260px); }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .hero-letters span,
    .hero-robot,
    .slide-line,
    .hero-card,
    .hero-bottom {
      transition: none;
      opacity: 1;
      transform: none;
      translate: none;
    }
    .robot-img { animation: none; }
  }
</style>
