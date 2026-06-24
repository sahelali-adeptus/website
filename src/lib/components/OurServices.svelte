<script>
  import { onMount } from 'svelte';

  let visible = false;
  let section;
  let activeStep = 0;

  const steps = [
    {
      num: '01',
      verb: 'Connect',
      label: 'Building Systems',
      desc: 'Integrate all building infrastructure — HVAC, electrical, security, and elevators — into a single unified intelligent data layer.',
      tag: 'Integration',
    },
    {
      num: '02',
      verb: 'Collect',
      label: 'Real-Time Data',
      desc: 'Stream live sensor readings from 65,000+ data points across energy, occupancy, temperature, and air quality — continuously.',
      tag: 'Streaming',
    },
    {
      num: '03',
      verb: 'Build',
      label: 'Digital Twin',
      desc: 'Generate a precise real-time virtual replica of your building — a living model that mirrors every physical state and change.',
      tag: 'Modeling',
    },
    {
      num: '04',
      verb: 'Analyze',
      label: 'with AI',
      desc: 'Enterprise ML models process the digital twin to surface anomalies, forecast failures, and generate actionable intelligence.',
      tag: 'Intelligence',
    },
    {
      num: '05',
      verb: 'Optimize',
      label: 'Operations',
      desc: 'Automated recommendations reduce energy consumption, prevent downtime, and continuously improve building performance at scale.',
      tag: 'Automation',
    },
  ];

  onMount(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) visible = true; },
      { threshold: 0.04 }
    );
    if (section) io.observe(section);
    return () => io.disconnect();
  });
</script>

<section
  id="our-services"
  class="os-wrap"
  class:os-vis={visible}
  bind:this={section}
>

  <!-- ── Massive background heading ── -->
  <div class="os-bg-title" aria-hidden="true">
    <span class="os-bgt-solid">Beconix</span>
    <span class="os-bgt-outline">Workflow</span>
  </div>

  <!-- ── Top-right step index ── -->
  <div class="os-step-index os-fade" style="--d:.1s">
    {#each steps as step, i}
      <button
        class="os-idx-item"
        class:os-idx-active={activeStep === i}
        on:click={() => activeStep = i}
        type="button"
      >
        <span class="os-idx-tag">{step.tag}</span>
        <span class="os-idx-num">{step.num}</span>
      </button>
    {/each}
  </div>

  <!-- ── Bottom-left content block ── -->
  <div class="os-content os-fade" style="--d:.2s">
    {#each steps as step, i}
      <div class="os-block" class:os-block-active={activeStep === i}>
        <p class="os-block-step">Step {step.num}</p>
        <h3 class="os-block-title">{step.verb} {step.label}</h3>
        <p class="os-block-desc">{step.desc}</p>
      </div>
    {/each}
  </div>

  <!-- ── Bottom bar ── -->
  <div class="os-bar os-fade" style="--d:.3s">
    {#each steps as step, i}
      <button
        class="os-bar-item"
        class:os-bar-active={activeStep === i}
        on:click={() => activeStep = i}
        type="button"
      >
        <span class="os-bar-num">Step {step.num}</span>
        <span class="os-bar-label">{step.verb} {step.label}</span>
      </button>
    {/each}
  </div>

  <!-- ── Active step glow orb ── -->
  <div class="os-orb" style="--oi:{activeStep}" aria-hidden="true"></div>

</section>

<style>
  /* ── Section ─────────────────────────────────────────────────── */
  .os-wrap {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: transparent;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 clamp(2rem, 5vw, 5rem) clamp(3rem, 7vh, 5rem);
    box-sizing: border-box;
  }

  /* ── Fade animation ──────────────────────────────────────────── */
  .os-fade {
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity .8s cubic-bezier(.22,1,.36,1) var(--d,0s),
      transform .8s cubic-bezier(.22,1,.36,1) var(--d,0s);
  }
  .os-vis .os-fade { opacity: 1; transform: none; }

  /* ── Massive BG heading ──────────────────────────────────────── */
  .os-bg-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -54%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    user-select: none;
    line-height: 0.88;
    opacity: 0;
    transition: opacity 1.1s cubic-bezier(.22,1,.36,1) .05s;
  }
  .os-vis .os-bg-title { opacity: 1; }

  .os-bgt-solid,
  .os-bgt-outline {
    display: block;
    font-size: clamp(5rem, 18vw, 17rem);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.03em;
    text-align: center;
    white-space: nowrap;
  }
  .os-bgt-solid {
    color: rgba(255,255,255,.08);
  }
  .os-bgt-outline {
    -webkit-text-stroke: 1.5px rgba(255,255,255,.06);
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* ── Glow orb that shifts per active step ───────────────────── */
  .os-orb {
    position: absolute;
    top: 38%;
    left: calc(10% + var(--oi) * 18%);
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(154,217,147,.1) 0%, transparent 65%);
    filter: blur(60px);
    pointer-events: none;
    transform: translateX(-50%);
    transition: left .8s cubic-bezier(.22,1,.36,1);
  }

  /* ── Step index — top right ──────────────────────────────────── */
  .os-step-index {
    position: absolute;
    top: clamp(2.5rem, 6vh, 5rem);
    right: clamp(2rem, 5vw, 5rem);
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    z-index: 4;
  }

  .os-idx-item {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .12rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-align: right;
    transition: opacity .25s;
    opacity: .4;
  }
  .os-idx-item:hover { opacity: .75; }
  .os-idx-active    { opacity: 1 !important; }

  .os-idx-tag {
    font-size: clamp(.48rem, .65vw, .58rem);
    font-weight: 600;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: rgba(154,217,147,.9);
  }
  .os-idx-num {
    font-size: clamp(.82rem, 1.2vw, 1.05rem);
    font-weight: 700;
    color: rgba(255,255,255,.88);
    letter-spacing: .04em;
    line-height: 1;
  }
  .os-idx-active .os-idx-num {
    background: linear-gradient(90deg, #9ad993, #e1e75c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Content block — bottom left ────────────────────────────── */
  .os-content {
    position: relative;
    z-index: 4;
    max-width: 420px;
    margin-bottom: clamp(3rem, 6vh, 4.5rem);
  }

  .os-block {
    position: absolute;
    top: 0; left: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity .45s ease, transform .45s ease;
    pointer-events: none;
  }
  .os-block-active {
    opacity: 1;
    transform: translateY(0);
    position: relative;
    pointer-events: auto;
  }

  .os-block-step {
    font-size: clamp(.5rem, .7vw, .6rem);
    font-weight: 600;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: rgba(154,217,147,.65);
    margin: 0 0 .55rem;
  }
  .os-block-title {
    font-size: clamp(1.2rem, 2.2vw, 1.85rem);
    font-weight: 700;
    color: rgba(255,255,255,.9);
    letter-spacing: -.02em;
    line-height: 1.15;
    margin: 0 0 .9rem;
  }
  .os-block-desc {
    font-size: clamp(.68rem, .95vw, .82rem);
    color: rgba(255,255,255,.38);
    line-height: 1.8;
    font-weight: 300;
    margin: 0;
    max-width: 380px;
  }

  /* ── Bottom bar ──────────────────────────────────────────────── */
  .os-bar {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 0;
    border-top: 1px solid rgba(255,255,255,.06);
    padding-top: 1.25rem;
  }

  .os-bar-item {
    flex: 1;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: .18rem;
    transition: opacity .25s;
    opacity: .38;
  }
  .os-bar-item:hover { opacity: .7; }
  .os-bar-active    { opacity: 1 !important; }

  .os-bar-num {
    font-size: clamp(.48rem, .62vw, .55rem);
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(154,217,147,.7);
  }
  .os-bar-active .os-bar-num {
    color: #9ad993;
  }

  .os-bar-label {
    font-size: clamp(.6rem, .85vw, .74rem);
    font-weight: 500;
    color: rgba(255,255,255,.6);
    letter-spacing: .02em;
    white-space: nowrap;
  }
  .os-bar-active .os-bar-label {
    color: rgba(255,255,255,.92);
  }

  /* ── Responsive ──────────────────────────────────────────────── */
  @media (max-width: 860px) {
    .os-step-index { display: none; }
    .os-content    { max-width: 100%; }
    .os-bar-item   { font-size: .6rem; }
  }

  @media (max-width: 560px) {
    .os-bar { flex-wrap: wrap; gap: .75rem 0; }
    .os-bar-item { flex: none; width: 50%; }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .os-fade { transition: none; opacity: 1; transform: none; }
    .os-bg-title { transition: none; opacity: 1; }
    .os-orb { transition: none; }
  }
</style>
