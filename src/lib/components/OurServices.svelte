<script>
  import { onMount } from "svelte";

  let sectionEl;
  let vis = false;

  const services = [
    {
      title: "Smart City Service",
      description:
        "Comprehensive IoT solutions for urban infrastructure, traffic management, and sustainable city development at scale.",
    },
    {
      title: "Smart IT Solutions",
      description:
        "Advanced technology solutions leveraging AI, Machine Learning, and IoT for full-spectrum business transformation.",
    },
    {
      title: "Digital Twin",
      description:
        "AI-powered digital replicas with ML algorithms for real-time monitoring, predictive analytics, and autonomous decision-making.",
    },
  ];

  onMount(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) vis = true;
      },
      { threshold: 0.12 },
    );
    if (sectionEl) io.observe(sectionEl);
    return () => io.disconnect();
  });
</script>

<section id="our-services" class="os-wrap" bind:this={sectionEl}>
  <!-- bg layers — identical to Our Mission -->
  <div class="os-bg-grid" aria-hidden="true"></div>
  <div class="os-bg-atm" aria-hidden="true"></div>
  <div class="os-bg-atm2" aria-hidden="true"></div>

  <div class="os-inner">
    <!-- ── Big title ── -->
    <div class="os-title-block" class:os-vis={vis}>
      <p class="os-eyebrow">Our Services</p>
      <h2 class="os-title">Technology</h2>
      <p class="os-subtitle">
        A D E P T U S &nbsp;&nbsp;&nbsp; S O L U T I O N S
      </p>
    </div>

    <!-- ── Centre divider ── -->
    <div class="os-div" class:os-vis={vis} aria-hidden="true">
      <span class="os-div-dot"></span>
      <span class="os-div-vline"></span>
      <span class="os-div-dot"></span>
    </div>

    <!-- ── Three columns ── -->
    <div class="os-cols" class:os-vis={vis}>
      {#each services as svc, i}
        <div class="os-col" style="--i:{i}">
          <h3 class="os-col-title">{svc.title}</h3>
          <p class="os-col-desc">{svc.description}</p>
        </div>
      {/each}
    </div>

    <!-- ── Bottom chevron ── -->
    <div class="os-chevron" class:os-vis={vis} aria-hidden="true">
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
        <path
          d="M1 1.5L10 11.5L19 1.5"
          stroke="rgba(255,255,255,.2)"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 5.5L10 11.5L16 5.5"
          stroke="rgba(255,255,255,.1)"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</section>

<style>
  /* ── Section ────────────────────────────────────────────────────────────── */
  .os-wrap {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: #1d2323;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(5rem, 11vh, 9rem) clamp(2rem, 5vw, 5rem);
    box-sizing: border-box;
  }

  /* ── Background (Our Mission style) ─────────────────────────────────────── */
  .os-bg-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        rgba(244, 94, 42, 0.03) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(244, 94, 42, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }
  /* primary orange glow — center */
  .os-bg-atm {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: 80vh;
    background: radial-gradient(
      ellipse at center,
      rgba(244, 94, 42, 0.09) 0%,
      transparent 62%
    );
    pointer-events: none;
  }
  /* secondary atmospheric — upper right, blue-tinted like reference */
  .os-bg-atm2 {
    position: absolute;
    top: -5%;
    right: -5%;
    width: 55vw;
    height: 65vh;
    background: radial-gradient(
      ellipse at 70% 25%,
      rgba(40, 60, 72, 0.55) 0%,
      transparent 65%
    );
    pointer-events: none;
  }

  /* ── Inner ───────────────────────────────────────────────────────────────── */
  .os-inner {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(2.8rem, 5.5vh, 5rem);
  }

  /* ── Entrance states ─────────────────────────────────────────────────────── */
  .os-title-block {
    opacity: 0;
    transform: translateY(26px);
    transition:
      opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
      transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .os-div {
    opacity: 0;
    transform: scaleX(0.3);
    transition:
      opacity 0.75s ease 0.5s,
      transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.5s;
  }
  .os-cols {
    opacity: 0;
    transform: translateY(22px);
    transition:
      opacity 0.95s ease 0.65s,
      transform 0.95s cubic-bezier(0.22, 1, 0.36, 1) 0.65s;
  }
  .os-chevron {
    opacity: 0;
    transition: opacity 0.7s ease 1.05s;
  }

  .os-vis.os-title-block {
    opacity: 1;
    transform: translateY(0);
  }
  .os-vis.os-div {
    opacity: 1;
    transform: scaleX(1);
  }
  .os-vis.os-cols {
    opacity: 1;
    transform: translateY(0);
  }
  .os-vis.os-chevron {
    opacity: 1;
  }

  /* ── Title block ─────────────────────────────────────────────────────────── */
  .os-title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    width: 100%;
  }

  .os-eyebrow {
    font-size: clamp(0.44rem, 0.68vw, 0.58rem);
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: rgba(244, 94, 42, 0.7);
    font-weight: 500;
    margin: 0 0 clamp(0.9rem, 1.8vh, 1.6rem);
  }

  /* THE big letter-spaced headline */
  .os-title {
    font-size: clamp(2.8rem, 9.5vw, 10.5rem);
    font-weight: 200;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.82);
    text-align: center;
    line-height: 1;
    margin: 0;
    /* pad-right compensates for trailing letter-spacing */
    padding-right: clamp(0.4em, 1.2vw, 0.62em);
  }

  .os-subtitle {
    font-size: clamp(0.48rem, 0.85vw, 0.7rem);
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.22);
    font-weight: 300;
    text-align: center;
    margin: clamp(0.8rem, 1.5vh, 1.3rem) 0 0;
  }

  /* ── Divider ─────────────────────────────────────────────────────────────── */
  .os-div {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .os-div-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.28);
  }
  .os-div-vline {
    width: 1px;
    height: 26px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.28),
      transparent
    );
  }

  /* ── Three columns ───────────────────────────────────────────────────────── */
  .os-cols {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .os-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: clamp(1.5rem, 3vh, 2.8rem) clamp(1.8rem, 3.5vw, 4rem);
    border-left: 1px solid rgba(255, 255, 255, 0.06);
    text-align: center;
    transition: background 0.35s ease;
    transition-delay: calc(var(--i) * 0.06s);
  }
  .os-col:first-child {
    border-left: none;
  }
  .os-col:hover {
    background: rgba(255, 255, 255, 0.012);
  }

  .os-col-title {
    font-size: clamp(0.6rem, 1.1vw, 0.82rem);
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 clamp(0.9rem, 2vh, 1.6rem);
    line-height: 1.3;
  }

  .os-col-desc {
    font-size: clamp(0.54rem, 0.85vw, 0.72rem);
    color: rgba(255, 255, 255, 0.28);
    line-height: 1.9;
    font-weight: 300;
    max-width: 260px;
    margin: 0;
  }

  /* ── Chevron ─────────────────────────────────────────────────────────────── */
  .os-chevron {
    animation: osFloat 3s ease-in-out infinite;
  }
  @keyframes osFloat {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
  }

  /* ── Responsive ──────────────────────────────────────────────────────────── */
  @media (max-width: 768px) {
    .os-title {
      font-size: clamp(2rem, 10vw, 4rem);
      letter-spacing: 0.25em;
      padding-right: 0.25em;
    }
    .os-cols {
      grid-template-columns: 1fr;
    }
    .os-col {
      border-left: none;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding: 1.6rem 1rem;
    }
    .os-col:first-child {
      border-top: none;
    }
  }
</style>
