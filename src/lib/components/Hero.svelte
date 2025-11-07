<script>
  import { onMount } from "svelte";

  let heroElement;
  let visible = false;
  let currentSlide = 0;
  let autoplayInterval;

  const slides = [
    {
      title: "We Make",
      highlight: " Things Happen.",
      description:
        "With years of honed expertise in cross-platform skills and quality-integrated methodologies, we adopt a competent delivery model in providing value-based solution as well as professional services to clients.  ",
      background: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    },
    {
      title: "ADEPT",
      highlight: " in a Smart World.",
      description:
        "We help reduce the energy, maintenance and operational costs by monitoring and managing all geographically dispersed assets including communities, buildings, utilities and more. ",
      background: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    },
    {
      title: "500K",
      highlight: "Assets Connected.",
      description:
        "Adeptus Technologies is at the forefront of the IoT industry, offering end to end IoT services and have successfully connected 1000+ Assets for various enterprises across the region.",

      background: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    },
    {
      title: "Tell Us",
      highlight: " Your Story.",
      description:
        "We have a strong understanding of local needs, coupled with access to international expertise and technologies.",
      background: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    },
  ];

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
  }

  function prevSlide() {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  }

  function goToSlide(index) {
    currentSlide = index;
  }

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible = true;
            startAutoplay();
          } else {
            stopAutoplay();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
      stopAutoplay();
    };
  });
</script>

<section
  bind:this={heroElement}
  class="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
  on:mouseenter={stopAutoplay}
  on:mouseleave={startAutoplay}
>
  <!-- Carousel Slides -->
  {#each slides as slide, index}
    <div
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out {slide.background}"
      class:opacity-100={index === currentSlide}
      class:opacity-0={index !== currentSlide}
    >
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://deepfa.ir/img/blogs/CYanP7wyDc.webp');"
      ></div>

      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/70"></div>

      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-black/20"></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
      ></div>

      <!-- Floating Elements -->
      <div
        class="absolute top-24 left-10 w-20 h-20 bg-white/10 rounded-full animate-float animate-pulse-gentle"
      ></div>
      <div
        class="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full animate-float animate-glow"
        style="animation-delay: 1s;"
      ></div>
      <div
        class="absolute bottom-40 left-20 w-16 h-16 bg-white/15 rounded-full animate-float animate-bounce-gentle"
        style="animation-delay: 2s;"
      ></div>
      <div
        class="absolute top-1/2 left-1/4 w-12 h-12 bg-primary-500/20 rounded-full animate-float"
        style="animation-delay: 3s;"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500/15 rounded-full animate-bounce-gentle"
        style="animation-delay: 4s;"
      ></div>
    </div>
  {/each}

  <!-- Slide Content -->
  <div class="relative z-10 container text-center -mt-32">
    <div class="max-w-4xl mx-auto">
      {#each slides as slide, index}
        <div
          class="absolute inset-0 transition-all duration-700"
          class:opacity-100={index === currentSlide}
          class:opacity-0={index !== currentSlide}
          class:translate-y-0={index === currentSlide}
          class:translate-y-8={index !== currentSlide}
        >
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
            class:animate-slide-up={visible && index === currentSlide}
          >
            {slide.title}
            <span
              class="text-white"
            >
              {slide.highlight}
            </span>
          </h1>

          <p
            class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
            class:animate-slide-up={visible && index === currentSlide}
            style="animation-delay: 0.2s;"
          >
            {slide.description}
          </p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Navigation Arrows -->
  <button
    on:click={prevSlide}
    class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
    aria-label="Previous slide"
  >
    <svg
      class="w-6 h-6 text-white group-hover:scale-110 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>

  <button
    on:click={nextSlide}
    class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
    aria-label="Next slide"
  >
    <svg
      class="w-6 h-6 text-white group-hover:scale-110 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>

  <!-- Slide Indicators -->
  <div
    class="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3"
  >
    {#each slides as _, index}
      <button
        on:click={() => goToSlide(index)}
        class="w-3 h-3 rounded-full transition-all duration-300 {index ===
        currentSlide
          ? 'bg-primary scale-125'
          : 'bg-primary/40'}"
        aria-label="Go to slide {index + 1}"
      ></button>
    {/each}
  </div>

  <!-- Scroll Indicator -->
  <div
    class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
  >
    <svg
      class="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </div>
</section>
