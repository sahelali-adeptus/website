<script>
  import { onMount } from 'svelte';

  let visible = false;
  let section;
  let active = 0;

  const steps = [
    {
      num: '01',
      tab: 'Connect',
      title: 'Connect Building Systems',
      desc: 'Integrate all building infrastructure into a single unified intelligent data layer — HVAC, electrical, security, and elevators.',
      cards: [
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/></svg>`, label: 'IoT Protocols', hint: 'BACnet, Modbus, MQTT' },
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`, label: 'Control Systems', hint: 'HVAC, Lighting, Power' },
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`, label: 'Sensors & Meters', hint: '65,000+ data points' },
      ],
    },
    {
      num: '02',
      tab: 'Collect',
      title: 'Collect Real-Time Data',
      desc: 'Stream live sensor readings from thousands of data points — energy, occupancy, temperature, and air quality — continuously.',
      cards: [
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`, label: 'Live Streaming', hint: 'Sub-second latency' },
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`, label: 'Time-Series DB', hint: 'Infinite retention' },
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/></svg>`, label: 'Data Pipelines', hint: 'Auto-normalisation' },
      ],
    },
    {
      num: '03',
      tab: 'Build',
      title: 'Build Digital Twin',
      desc: 'Generate a precise real-time virtual replica of your building — a living 3D model that mirrors every physical state and change.',
      cards: [
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`, label: '3D Model Sync', hint: 'BIM + IFC support' },
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`, label: 'Live Overlay', hint: 'Real-time state view' },
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>`, label: 'Floor Mapping', hint: 'Per-zone granularity' },
      ],
    },
    {
      num: '04',
      tab: 'Analyze',
      title: 'Analyze with AI',
      desc: 'Enterprise ML models process the digital twin to surface anomalies, forecast failures, and generate actionable intelligence.',
      cards: [
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`, label: 'AI Copilot', hint: 'Natural language ops' },
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`, label: 'Fault Detection', hint: 'Auto-diagnosis rules' },
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`, label: 'Predictive ML', hint: 'Failure forecasting' },
      ],
    },
    {
      num: '05',
      tab: 'Optimize',
      title: 'Optimize Operations',
      desc: 'Automated recommendations reduce energy consumption, prevent downtime, and continuously improve building performance at scale.',
      cards: [
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`, label: 'Energy Savings', hint: 'Up to 35% reduction' },
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`, label: 'Auto Workflows', hint: 'Zero-touch resolution' },
        { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`, label: 'KPI Reporting', hint: 'Board-ready insights' },
      ],
    },
  ];

  $: current = steps[active];

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
  <div class="os-panel-left">

    <!-- eyebrow -->
    <div class="os-eyebrow os-fade" style="--d:.0s">
      <span class="os-ey-dot"></span>
      How It Works
    </div>

    <!-- heading -->
    <h2 class="os-heading os-fade" style="--d:.08s">
      <span class="os-h-solid">Beconix</span>
      <span class="os-h-outline">Workflow</span>
    </h2>

    <!-- tabs -->
    <div class="os-tabs os-fade" style="--d:.16s" role="tablist">
      {#each steps as step, i}
        <button
          class="os-tab"
          class:os-tab-active={active === i}
          on:click={() => active = i}
          role="tab"
          aria-selected={active === i}
          type="button"
        >
          <span class="os-tab-num">{step.num}</span>
          {step.tab}
        </button>
      {/each}
    </div>

    <!-- step title + desc -->
    <div class="os-step-head os-fade" style="--d:.22s">
      {#key active}
        <p class="os-step-num">Step {current.num}</p>
        <h3 class="os-step-title">{current.title}</h3>
        <p class="os-step-desc">{current.desc}</p>
      {/key}
    </div>

    <!-- feature cards -->
    <div class="os-cards os-fade" style="--d:.3s">
      {#key active}
        {#each current.cards as card, i}
          <div class="os-card" style="--ci:{i}">
            <div class="os-card-icon">{@html card.icon}</div>
            <div class="os-card-body">
              <p class="os-card-label">{card.label}</p>
              <p class="os-card-hint">{card.hint}</p>
            </div>
            <div class="os-card-arrow" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </div>
          </div>
        {/each}
      {/key}
    </div>

    <!-- CTA -->
    <div class="os-cta os-fade" style="--d:.38s">
      <div class="os-step-dots" aria-hidden="true">
        {#each steps as _, i}
          <button
            class="os-dot"
            class:os-dot-active={active === i}
            on:click={() => active = i}
            type="button"
            aria-label="Step {i + 1}"
          ></button>
        {/each}
      </div>
    </div>

  </div>

  <!-- RIGHT visual panel -->
  <div class="os-panel-right os-fade" style="--d:.1s">

    <!-- Workflow SVG diagram -->
    <svg class="os-diagram" viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <!-- radial bg glow -->
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="#9ad993" stop-opacity="0.07"/>
          <stop offset="100%" stop-color="#9ad993" stop-opacity="0"/>
        </radialGradient>
        <!-- line gradient green→yellow -->
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="#9ad993" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#e1e75c" stop-opacity="0.6"/>
        </linearGradient>
        <!-- active line gradient -->
        <linearGradient id="lineActive" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="#9ad993"/>
          <stop offset="100%" stop-color="#e1e75c"/>
        </linearGradient>
        <!-- node glow filter -->
        <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <!-- center glow filter -->
        <filter id="centerGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- bg radial glow -->
      <circle cx="220" cy="220" r="200" fill="url(#bgGlow)"/>

      <!-- orbit rings -->
      <circle cx="220" cy="220" r="70"  fill="none" stroke="rgba(154,217,147,.06)" stroke-width="1"/>
      <circle cx="220" cy="220" r="145" fill="none" stroke="rgba(154,217,147,.05)" stroke-width="1"/>
      <circle cx="220" cy="220" r="195" fill="none" stroke="rgba(154,217,147,.03)" stroke-width="1"/>

      <!-- connection lines center → each node -->
      <!-- Node 0 (Connect)  → (220, 75) -->
      <line x1="220" y1="220" x2="220"   y2="75"   class="os-line" class:os-line-active={active===0} stroke-dasharray="6 4"/>
      <!-- Node 1 (Collect)  → (358, 175) -->
      <line x1="220" y1="220" x2="358"   y2="175"  class="os-line" class:os-line-active={active===1} stroke-dasharray="6 4"/>
      <!-- Node 2 (Build)    → (305, 337) -->
      <line x1="220" y1="220" x2="305"   y2="337"  class="os-line" class:os-line-active={active===2} stroke-dasharray="6 4"/>
      <!-- Node 3 (Analyze)  → (135, 337) -->
      <line x1="220" y1="220" x2="135"   y2="337"  class="os-line" class:os-line-active={active===3} stroke-dasharray="6 4"/>
      <!-- Node 4 (Optimize) → (82, 175) -->
      <line x1="220" y1="220" x2="82"    y2="175"  class="os-line" class:os-line-active={active===4} stroke-dasharray="6 4"/>

      <!-- animated flow particles on active line -->
      {#if active === 0}
        <circle r="3" fill="#9ad993" opacity="0.9" filter="url(#nodeGlow)">
          <animateMotion dur="1.2s" repeatCount="indefinite" path="M220,220 L220,75"/>
        </circle>
      {:else if active === 1}
        <circle r="3" fill="#9ad993" opacity="0.9" filter="url(#nodeGlow)">
          <animateMotion dur="1.2s" repeatCount="indefinite" path="M220,220 L358,175"/>
        </circle>
      {:else if active === 2}
        <circle r="3" fill="#e1e75c" opacity="0.9" filter="url(#nodeGlow)">
          <animateMotion dur="1.2s" repeatCount="indefinite" path="M220,220 L305,337"/>
        </circle>
      {:else if active === 3}
        <circle r="3" fill="#9ad993" opacity="0.9" filter="url(#nodeGlow)">
          <animateMotion dur="1.2s" repeatCount="indefinite" path="M220,220 L135,337"/>
        </circle>
      {:else if active === 4}
        <circle r="3" fill="#e1e75c" opacity="0.9" filter="url(#nodeGlow)">
          <animateMotion dur="1.2s" repeatCount="indefinite" path="M220,220 L82,175"/>
        </circle>
      {/if}

      <!-- ── CENTER NODE — building ── -->
      <circle cx="220" cy="220" r="36" fill="rgba(154,217,147,.08)" stroke="rgba(154,217,147,.3)" stroke-width="1" filter="url(#centerGlow)"/>
      <circle cx="220" cy="220" r="26" fill="rgba(10,12,24,.9)" stroke="rgba(154,217,147,.2)" stroke-width="1"/>
      <!-- building icon -->
      <g transform="translate(208,208)" stroke="#9ad993" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <rect x="1" y="6" width="10" height="12" rx=".5"/>
        <rect x="13" y="2" width="10" height="16" rx=".5"/>
        <line x1="0" y1="18" x2="24" y2="18"/>
        <rect x="3" y="9" width="2" height="2"/><rect x="7" y="9" width="2" height="2"/>
        <rect x="3" y="13" width="2" height="2"/><rect x="7" y="13" width="2" height="2"/>
        <rect x="15" y="5" width="2" height="2"/><rect x="19" y="5" width="2" height="2"/>
        <rect x="15" y="9" width="2" height="2"/><rect x="19" y="9" width="2" height="2"/>
        <rect x="16" y="13" width="4" height="5"/>
      </g>
      <!-- center pulse ring -->
      <circle cx="220" cy="220" r="42" fill="none" stroke="rgba(154,217,147,.15)" stroke-width="1" class="os-pulse-ring"/>

      <!-- ── NODE 0 — Connect (top) (220,75) ── -->
      <g class="os-node" class:os-node-active={active===0} on:click={() => active=0} on:keydown={(e) => e.key==='Enter' && (active=0)} role="button" tabindex="0" aria-label="Step 01 Connect">
        <circle cx="220" cy="75" r="28" fill="rgba(10,12,24,.92)" stroke="rgba(154,217,147,.2)" stroke-width="1" class="os-node-bg"/>
        <circle cx="220" cy="75" r="28" fill="none" stroke="rgba(154,217,147,.5)" stroke-width="1.5" class="os-node-ring" opacity="0"/>
        <g transform="translate(208,63)" stroke="rgba(154,217,147,.8)" stroke-width="1.4" stroke-linecap="round" fill="none">
          <circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/>
          <circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>
          <line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="18" x2="16" y2="18"/>
          <line x1="6" y1="8" x2="6" y2="16"/><line x1="18" y1="8" x2="18" y2="16"/>
          <circle cx="12" cy="12" r="2" fill="rgba(154,217,147,.4)"/>
          <line x1="9.8" y1="12" x2="8" y2="12"/><line x1="14.2" y1="12" x2="16" y2="12"/>
        </g>
        <text x="220" y="50" text-anchor="middle" class="os-node-label">Connect</text>
        <text x="220" y="40" text-anchor="middle" class="os-node-num">01</text>
      </g>

      <!-- ── NODE 1 — Collect (right-top) (358,175) ── -->
      <g class="os-node" class:os-node-active={active===1} on:click={() => active=1} on:keydown={(e) => e.key==='Enter' && (active=1)} role="button" tabindex="0" aria-label="Step 02 Collect">
        <circle cx="358" cy="175" r="28" fill="rgba(10,12,24,.92)" stroke="rgba(154,217,147,.2)" stroke-width="1" class="os-node-bg"/>
        <circle cx="358" cy="175" r="28" fill="none" stroke="rgba(154,217,147,.5)" stroke-width="1.5" class="os-node-ring" opacity="0"/>
        <g transform="translate(346,163)" stroke="rgba(154,217,147,.8)" stroke-width="1.4" stroke-linecap="round" fill="none">
          <polyline points="0,12 4,12 7,4 13,20 17,8 21,12 24,12"/>
        </g>
        <text x="392" y="170" text-anchor="start" class="os-node-label">Collect</text>
        <text x="392" y="160" text-anchor="start" class="os-node-num">02</text>
      </g>

      <!-- ── NODE 2 — Build (right-bot) (305,337) ── -->
      <g class="os-node" class:os-node-active={active===2} on:click={() => active=2} on:keydown={(e) => e.key==='Enter' && (active=2)} role="button" tabindex="0" aria-label="Step 03 Build">
        <circle cx="305" cy="337" r="28" fill="rgba(10,12,24,.92)" stroke="rgba(154,217,147,.2)" stroke-width="1" class="os-node-bg"/>
        <circle cx="305" cy="337" r="28" fill="none" stroke="rgba(154,217,147,.5)" stroke-width="1.5" class="os-node-ring" opacity="0"/>
        <g transform="translate(293,325)" stroke="rgba(154,217,147,.8)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12,1 L2,6.5 L12,12 L22,6.5 Z"/>
          <path d="M2,6.5 L2,17.5 L12,23 L22,17.5 L22,6.5"/>
          <line x1="12" y1="12" x2="12" y2="23"/>
        </g>
        <text x="305" y="374" text-anchor="middle" class="os-node-label">Build</text>
        <text x="305" y="385" text-anchor="middle" class="os-node-num">03</text>
      </g>

      <!-- ── NODE 3 — Analyze (left-bot) (135,337) ── -->
      <g class="os-node" class:os-node-active={active===3} on:click={() => active=3} on:keydown={(e) => e.key==='Enter' && (active=3)} role="button" tabindex="0" aria-label="Step 04 Analyze">
        <circle cx="135" cy="337" r="28" fill="rgba(10,12,24,.92)" stroke="rgba(154,217,147,.2)" stroke-width="1" class="os-node-bg"/>
        <circle cx="135" cy="337" r="28" fill="none" stroke="rgba(154,217,147,.5)" stroke-width="1.5" class="os-node-ring" opacity="0"/>
        <g transform="translate(123,325)" stroke="rgba(154,217,147,.8)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <circle cx="12" cy="10" r="5"/>
          <line x1="12" y1="1" x2="12" y2="5"/>
          <line x1="4.2" y1="4.2" x2="7.1" y2="7.1"/>
          <line x1="1" y1="12" x2="5" y2="12"/>
          <line x1="19" y1="12" x2="23" y2="12"/>
          <line x1="19.8" y1="4.2" x2="16.9" y2="7.1"/>
          <line x1="10" y1="15.5" x2="10" y2="22"/>
          <line x1="14" y1="15.5" x2="14" y2="22"/>
        </g>
        <text x="135" y="374" text-anchor="middle" class="os-node-label">Analyze</text>
        <text x="135" y="385" text-anchor="middle" class="os-node-num">04</text>
      </g>

      <!-- ── NODE 4 — Optimize (left-top) (82,175) ── -->
      <g class="os-node" class:os-node-active={active===4} on:click={() => active=4} on:keydown={(e) => e.key==='Enter' && (active=4)} role="button" tabindex="0" aria-label="Step 05 Optimize">
        <circle cx="82" cy="175" r="28" fill="rgba(10,12,24,.92)" stroke="rgba(154,217,147,.2)" stroke-width="1" class="os-node-bg"/>
        <circle cx="82" cy="175" r="28" fill="none" stroke="rgba(154,217,147,.5)" stroke-width="1.5" class="os-node-ring" opacity="0"/>
        <g transform="translate(70,163)" stroke="rgba(154,217,147,.8)" stroke-width="1.4" stroke-linecap="round" fill="none">
          <line x1="2" y1="22" x2="2" y2="12"/><line x1="7" y1="22" x2="7" y2="6"/>
          <line x1="12" y1="22" x2="12" y2="9"/><line x1="17" y1="22" x2="17" y2="3"/>
          <line x1="22" y1="22" x2="22" y2="1"/>
          <polyline points="2,12 7,6 12,9 17,3 22,1" stroke="#e1e75c" stroke-width="1.6"/>
          <circle cx="22" cy="1" r="1.5" fill="#e1e75c" stroke="none"/>
        </g>
        <text x="44" y="170" text-anchor="end" class="os-node-label">Optimize</text>
        <text x="44" y="160" text-anchor="end" class="os-node-num">05</text>
      </g>

    </svg>

    <!-- floating badges -->
    <div class="os-badge-fl os-badge-top">
      <span class="os-bfl-dot"></span>
      <span>Live Monitoring</span>
    </div>
    <div class="os-badge-fl os-badge-bot">
      <span class="os-bfl-dot os-bfl-dot-y"></span>
      <span>99.9% Uptime</span>
    </div>

  </div>

</section>

<style>
  /* ── Wrap ──────────────────────────────────────────────────────── */
  .os-wrap {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: transparent;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
  }

  /* ── Fade ──────────────────────────────────────────────────────── */
  .os-fade {
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity  .75s cubic-bezier(.22,1,.36,1) var(--d,0s),
      transform .75s cubic-bezier(.22,1,.36,1) var(--d,0s);
  }
  .os-vis .os-fade { opacity: 1; transform: none; }

  /* ══ LEFT PANEL ════════════════════════════════════════════════ */
  .os-panel-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.6rem;
    padding: clamp(3rem, 7vh, 6rem) clamp(2rem, 5vw, 5rem) clamp(3rem, 7vh, 6rem) clamp(2rem, 6vw, 6rem);
    position: relative;
    z-index: 2;
  }

  /* eyebrow */
  .os-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    font-size: clamp(.58rem, .78vw, .68rem);
    font-weight: 600;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: rgba(154,217,147,.75);
  }
  .os-ey-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #9ad993;
    box-shadow: 0 0 8px rgba(154,217,147,.6);
    animation: pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:.4; transform:scale(.65); }
  }

  /* heading */
  .os-heading {
    font-size: clamp(2.8rem, 5.5vw, 5.5rem);
    font-weight: 900;
    text-transform: uppercase;
    line-height: .92;
    letter-spacing: -.03em;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .os-h-solid   { color: #fff; }
  .os-h-outline {
    -webkit-text-stroke: 2px rgba(255,255,255,.35);
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* tabs */
  .os-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
  }
  .os-tab {
    display: inline-flex;
    align-items: center;
    gap: .35rem;
    padding: .38rem .85rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.1);
    background: rgba(255,255,255,.04);
    color: rgba(255,255,255,.45);
    font-size: clamp(.6rem, .82vw, .72rem);
    font-weight: 500;
    letter-spacing: .04em;
    cursor: pointer;
    transition: background .22s, border-color .22s, color .22s;
  }
  .os-tab:hover { color: rgba(255,255,255,.75); border-color: rgba(255,255,255,.22); }
  .os-tab-active {
    background: linear-gradient(120deg, rgba(154,217,147,.18), rgba(225,231,92,.14)) !important;
    border-color: rgba(154,217,147,.5) !important;
    color: #9ad993 !important;
  }
  .os-tab-num {
    font-size: .6em;
    opacity: .6;
    font-weight: 700;
    letter-spacing: .06em;
  }
  .os-tab-active .os-tab-num { opacity: 1; }

  /* step head */
  .os-step-head { display: flex; flex-direction: column; gap: .4rem; }
  .os-step-num {
    font-size: clamp(.5rem, .65vw, .58rem);
    font-weight: 700;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: rgba(154,217,147,.6);
    margin: 0;
  }
  .os-step-title {
    font-size: clamp(1rem, 1.6vw, 1.35rem);
    font-weight: 700;
    color: rgba(255,255,255,.92);
    letter-spacing: -.02em;
    line-height: 1.2;
    margin: 0;
  }
  .os-step-desc {
    font-size: clamp(.68rem, .9vw, .8rem);
    color: rgba(255,255,255,.38);
    line-height: 1.75;
    font-weight: 300;
    margin: 0;
    max-width: 400px;
  }

  /* feature cards */
  .os-cards {
    display: flex;
    flex-direction: column;
    gap: .55rem;
  }
  .os-card {
    display: flex;
    align-items: center;
    gap: .85rem;
    padding: .8rem 1rem;
    border-radius: 12px;
    background: rgba(255,255,255,.035);
    border: 1px solid rgba(255,255,255,.07);
    cursor: default;
    transition: background .22s, border-color .22s, transform .22s;
    opacity: 0;
    transform: translateX(-14px);
    animation: cardIn .45s cubic-bezier(.22,1,.36,1) calc(var(--ci) * .08s + .05s) forwards;
  }
  @keyframes cardIn {
    to { opacity: 1; transform: translateX(0); }
  }
  .os-card:hover {
    background: rgba(154,217,147,.05);
    border-color: rgba(154,217,147,.18);
    transform: translateX(4px);
  }
  .os-card-icon {
    width: 36px; height: 36px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 10px;
    background: rgba(154,217,147,.08);
    border: 1px solid rgba(154,217,147,.18);
    color: #9ad993;
    flex-shrink: 0;
  }
  .os-card-icon :global(svg) { width: 18px; height: 18px; }
  .os-card-body { flex: 1; display: flex; flex-direction: column; gap: .1rem; }
  .os-card-label {
    font-size: clamp(.68rem, .88vw, .78rem);
    font-weight: 600;
    color: rgba(255,255,255,.85);
    margin: 0;
    letter-spacing: .01em;
  }
  .os-card-hint {
    font-size: clamp(.58rem, .72vw, .65rem);
    color: rgba(255,255,255,.3);
    margin: 0;
    font-weight: 300;
  }
  .os-card-arrow {
    width: 16px; height: 16px;
    color: rgba(154,217,147,.3);
    flex-shrink: 0;
    transition: color .22s, transform .22s;
  }
  .os-card-arrow svg { width: 100%; height: 100%; }
  .os-card:hover .os-card-arrow { color: rgba(154,217,147,.7); transform: translateX(3px); }

  /* CTA row */
  .os-cta {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    flex-wrap: wrap;
  }
.os-step-dots { display: flex; align-items: center; gap: .45rem; }
  .os-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: rgba(255,255,255,.18);
    border: none;
    cursor: pointer;
    transition: background .22s, transform .22s;
    padding: 0;
  }
  .os-dot:hover { background: rgba(255,255,255,.45); }
  .os-dot-active {
    background: #9ad993 !important;
    transform: scale(1.4);
    box-shadow: 0 0 6px rgba(154,217,147,.5);
  }

  /* ══ RIGHT PANEL ═══════════════════════════════════════════════ */
  .os-panel-right {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 2rem;
  }

  /* SVG diagram */
  .os-diagram {
    width: min(90%, 460px);
    height: auto;
    overflow: visible;
  }

  /* connection lines */
  .os-line {
    stroke: rgba(154,217,147,.18);
    stroke-width: 1.2;
    stroke-dasharray: 5 4;
    animation: dashFlow 2s linear infinite;
    transition: stroke .3s;
  }
  .os-line-active {
    stroke: url(#lineActive);
    stroke-width: 1.8;
    opacity: 1;
  }
  @keyframes dashFlow {
    to { stroke-dashoffset: -18; }
  }

  /* center pulse ring */
  .os-pulse-ring {
    animation: ringPulse 2.5s ease-in-out infinite;
  }
  @keyframes ringPulse {
    0%,100% { opacity:.15; r:42; }
    50%      { opacity:.04; r:52; }
  }

  /* nodes */
  .os-node { cursor: pointer; }
  .os-node .os-node-bg   { transition: fill .25s, stroke .25s; }
  .os-node .os-node-ring { transition: opacity .25s; }
  .os-node:hover .os-node-bg   { fill: rgba(154,217,147,.08); stroke: rgba(154,217,147,.5); }
  .os-node:hover .os-node-ring { opacity: .6 !important; }
  .os-node-active .os-node-bg  { fill: rgba(154,217,147,.12) !important; stroke: rgba(154,217,147,.7) !important; }
  .os-node-active .os-node-ring { opacity: 1 !important; animation: nodeGlow 2s ease-in-out infinite; }
  @keyframes nodeGlow {
    0%,100% { opacity:.6; }
    50%      { opacity:1; }
  }

  /* node labels */
  .os-node-label {
    font-size: 9px;
    fill: rgba(255,255,255,.5);
    font-weight: 500;
    letter-spacing: .05em;
    pointer-events: none;
    transition: fill .25s;
  }
  .os-node-num {
    font-size: 7.5px;
    fill: rgba(154,217,147,.55);
    font-weight: 700;
    letter-spacing: .1em;
    pointer-events: none;
  }
  .os-node-active .os-node-label { fill: rgba(255,255,255,.88); }
  .os-node-active .os-node-num   { fill: #9ad993; }
  .os-node:hover   .os-node-label { fill: rgba(255,255,255,.75); }

  /* floating badge pills */
  .os-badge-fl {
    position: absolute;
    z-index: 4;
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    padding: .38rem .9rem;
    border-radius: 999px;
    background: rgba(6,8,20,.82);
    border: 1px solid rgba(255,255,255,.1);
    backdrop-filter: blur(14px);
    font-size: .65rem;
    font-weight: 600;
    color: rgba(255,255,255,.82);
    white-space: nowrap;
    box-shadow: 0 4px 20px rgba(0,0,0,.4);
    animation: badgeFloat 6s ease-in-out infinite;
  }
  .os-badge-top { top: 12%; left: 6%; }
  .os-badge-bot { bottom: 14%; right: 6%; animation-delay: -3s; }
  @keyframes badgeFloat {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-6px); }
  }

  .os-bfl-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #9ad993;
    box-shadow: 0 0 6px #9ad993;
    animation: pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }
  .os-bfl-dot-y {
    background: #e1e75c;
    box-shadow: 0 0 6px #e1e75c;
    animation-delay: .6s;
  }

  /* ── Responsive ────────────────────────────────────────────────── */
  @media (max-width: 960px) {
    .os-wrap { grid-template-columns: 1fr; min-height: auto; }
    .os-panel-right { height: 380px; }
    .os-panel-left { padding: 3rem 2rem 2rem; }
    .os-step-desc { max-width: 100%; }
  }
  @media (max-width: 560px) {
    .os-tabs { gap: .35rem; }
    .os-tab  { padding: .3rem .65rem; font-size: .65rem; }
    .os-cards { gap: .4rem; }
    .os-panel-right { height: 300px; }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .os-fade  { transition: none; opacity: 1; transform: none; }
    .os-card  { animation: none; opacity: 1; transform: none; }
    .os-line  { animation: none; }
    .os-pulse-ring { animation: none; }
    .os-badge-fl { animation: none; }
  }
</style>
