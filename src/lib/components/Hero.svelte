<script>
  import { onMount } from "svelte";

  let current = 0;
  let timer;

  const slides = [
    {
      label: "01 — Welcome",
      title: "Adeptus",
      full: true,
      description:
        "Empowering businesses through intelligent technology solutions. We connect people, assets, and infrastructure to build the smart world of tomorrow.",
    },
    {
      label: "02 — Smart Solutions",
      title: "ADEPT in a\nSmart World.",
      full: false,
      description:
        "We help reduce energy, maintenance and operational costs by monitoring and managing all geographically dispersed assets including communities, buildings, utilities and more.",
    },
    {
      label: "03 — Expertise",
      title: "We Make\nThings Happen.",
      full: false,
      description:
        "With years of honed expertise in cross-platform skills and quality-integrated methodologies, we adopt a competent delivery model providing value-based solutions to clients.",
    },
    {
      label: "04 — Scale",
      title: "500K Assets\nConnected.",
      full: false,
      description:
        "Adeptus Technologies is at the forefront of the IoT industry, offering end-to-end IoT services and successfully connecting assets for various enterprises across the region.",
    },
    {
      label: "05 — Partnership",
      title: "Tell Us\nYour Story.",
      full: false,
      description:
        "We have a strong understanding of local needs, coupled with access to international expertise and technologies, ready to craft the right solution for you.",
    },
  ];

  function goTo(index) {
    if (index === current) return;
    current = index;
  }

  function next() {
    current = (current + 1) % slides.length;
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  onMount(() => {
    startTimer();
    return () => stopTimer();
  });
</script>

<section
  aria-label="Hero"
  class="relative min-h-screen overflow-hidden bg-black"
  on:mouseenter={stopTimer}
  on:mouseleave={startTimer}
>
  <!-- ── Background image ── -->
  <div class="absolute inset-0">
    <img
      src="/hero-bg.png"
      alt=""
      class="absolute inset-0 w-full h-full object-cover object-center"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-black/55"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-l from-[#F45E2A]/30 via-[#F45E2A]/08 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
  </div>

  <!-- ── Concentric decorative rings ── -->
  <div class="absolute top-1/2 right-[25%] -translate-y-[45%] -translate-x-1/2 pointer-events-none z-[2]">
    <svg width="600" height="600" viewBox="0 0 600 600" fill="none" class="opacity-[0.07]">
      <circle cx="300" cy="300" r="80"  stroke="white" stroke-width="1"/>
      <circle cx="300" cy="300" r="140" stroke="white" stroke-width="1"/>
      <circle cx="300" cy="300" r="200" stroke="white" stroke-width="0.8"/>
      <circle cx="300" cy="300" r="260" stroke="white" stroke-width="0.6"/>
      <circle cx="300" cy="300" r="290" stroke="white" stroke-width="0.4"/>
    </svg>
  </div>

  <!-- ── Right slide indicators ── -->
  <div class="absolute right-8 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4">
    {#each slides as _, i}
      <button
        on:click={() => goTo(i)}
        aria-label="Go to slide {i + 1}"
        class="group flex flex-col items-center gap-1"
      >
        <span class="text-[9px] font-light transition-all duration-500
          {i === current ? 'text-[#F45E2A]' : 'text-white/25 group-hover:text-white/50'}">
          {String(i + 1).padStart(2, "0")}
        </span>
        <div class="w-px transition-all duration-500 rounded-full
          {i === current ? 'h-10 bg-[#F45E2A]' : 'h-4 bg-white/20 group-hover:bg-white/40'}">
        </div>
      </button>
    {/each}
  </div>

  <!-- ── Main layout ── -->
  <div class="relative z-10 flex flex-col min-h-screen px-8 sm:px-12 md:px-16 lg:px-20">

    <!-- Slide panels -->
    <div class="flex-1 relative">
      {#each slides as slide, i}
        <div class="slide-panel {i === current ? 'slide-active' : ''}">

          <!-- Label with accent line -->
          <div class="flex items-center gap-3 mb-6">
            <span class="w-6 h-px bg-[#F45E2A]"></span>
            <p class="text-white/50 text-[10px] tracking-[0.4em] uppercase font-medium">
              {slide.label}
            </p>
          </div>

          <!-- Title -->
          <div class="relative mb-8">
            {#if slide.full}
              <!-- Adeptus: "ADEP" filled + "TUS" outlined -->
              <h1 class="hero-title-full font-black uppercase leading-none">
                <span class="text-[#F45E2A]">ADEP</span><span class="text-outlined-primary">TUS</span>
              </h1>
              <span class="absolute bottom-0 right-0 text-white/55 text-sm md:text-base font-semibold tracking-[0.3em] uppercase">
                Technologies LLC
              </span>
            {:else}
              <!-- Other slides: line 1 gradient fill, line 2 outlined -->
              <h1 class="hero-title font-black uppercase leading-[1.1]">
                {#each slide.title.split('\n') as line, li}
                  {#if li === 0}
                    <span class="block text-gradient-fill">{line}</span>
                  {:else}
                    <span class="block text-outlined-white">{line}</span>
                  {/if}
                {/each}
              </h1>
            {/if}
          </div>

          <!-- Description with left accent -->
          <div class="flex gap-4 max-w-md">
            <span class="w-px shrink-0 bg-[#F45E2A]/50 self-stretch mt-1"></span>
            <p class="text-white/50 text-sm md:text-base leading-relaxed font-light">
              {slide.description}
            </p>
          </div>

        </div>
      {/each}
    </div>

    <!-- ── Bottom bar ── -->
    <div class="pb-10 md:pb-14 flex items-end justify-between">

      <!-- Progress bar -->
      <div class="flex items-center gap-4">
        <div class="w-32 h-px bg-white/15 relative overflow-hidden rounded-full">
          {#key current}
            <div class="progress-bar h-full bg-[#F45E2A] rounded-full"></div>
          {/key}
        </div>
        <span class="text-white/30 text-[10px] tracking-widest">
          {String(current + 1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}
        </span>
      </div>

      <!-- Social icons -->
      <div class="flex items-center gap-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
          class="text-white/30 hover:text-[#F45E2A] transition-colors duration-300" aria-label="Facebook">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
          class="text-white/30 hover:text-[#F45E2A] transition-colors duration-300" aria-label="Instagram">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
          class="text-white/30 hover:text-[#F45E2A] transition-colors duration-300" aria-label="Twitter / X">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
          class="text-white/30 hover:text-[#F45E2A] transition-colors duration-300" aria-label="YouTube">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<style>

  /* ── Slide transition ── */
  .slide-panel {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 1.1s cubic-bezier(0.4, 0, 0.2, 1),
                transform 1.1s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }
  .slide-active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  /* ── Title sizes ── */
  .hero-title-full {
    font-size: clamp(3rem, 17.5vw, 22rem);
    letter-spacing: 0.03em;
    line-height: 1;
  }
  .hero-title {
    font-size: clamp(3rem, 8.5vw, 8rem);
    letter-spacing: 0.03em;
  }

  /* ── Text styles ── */

  /* "ADEP" solid, "TUS" outlined */
  .text-outlined-primary {
    -webkit-text-stroke: 3px #F45E2A;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* Other slides: line 1 — warm gradient fill */
  .text-gradient-fill {
    background: linear-gradient(100deg, #ffffff 0%, #ffe0d4 55%, #F45E2A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Other slides: line 2 — white outlined */
  .text-outlined-white {
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.55);
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* ── Slide progress bar ── */
  .progress-bar {
    width: 0%;
    animation: progressFill 5s linear forwards;
  }
  @keyframes progressFill {
    from { width: 0%; }
    to   { width: 100%; }
  }
</style>
