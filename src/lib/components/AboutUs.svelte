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
  id="about-us"
  bind:this={sectionEl}
  class="au-wrap"
  class:au-vis={visible}
>
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

<style>
  /* ── Section ───────────────────────────────────────────────────────────── */
  .au-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #1d2323;
    overflow: hidden;
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
  }
  .au-hud-tl {
    top: 18px;
    left: 18px;
    border-top: 1px solid rgba(244, 94, 42, 0.5);
    border-left: 1px solid rgba(244, 94, 42, 0.5);
  }
  .au-hud-tr {
    top: 18px;
    right: 18px;
    border-top: 1px solid rgba(244, 94, 42, 0.5);
    border-right: 1px solid rgba(244, 94, 42, 0.5);
  }
  .au-hud-bl {
    bottom: 18px;
    left: 18px;
    border-bottom: 1px solid rgba(244, 94, 42, 0.5);
    border-left: 1px solid rgba(244, 94, 42, 0.5);
  }
  .au-hud-br {
    bottom: 18px;
    right: 18px;
    border-bottom: 1px solid rgba(244, 94, 42, 0.5);
    border-right: 1px solid rgba(244, 94, 42, 0.5);
  }

  /* ── Giant background word — matches About.svelte heading style ─────────── */
  .au-word {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -56%);
    white-space: nowrap;
    line-height: 1;
    pointer-events: none;
    user-select: none;
    z-index: 1;
    opacity: 0;
    transition: opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.06s;
  }
  .au-vis .au-word {
    opacity: 1;
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
    transform: translate(-50%, -50%);
    width: clamp(260px, 40vw, 560px);
    height: clamp(260px, 40vw, 560px);
    z-index: 2;
    animation: auOrbGlow 4.5s ease-in-out infinite;
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
    transform: translateY(18px);
    transition:
      opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) var(--d, 0s),
      transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) var(--d, 0s);
  }
  .au-vis .au-anim {
    opacity: 1;
    transform: translateY(0);
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
</style>
