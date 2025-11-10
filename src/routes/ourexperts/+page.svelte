<script>
  import { onMount } from "svelte";

  let heroElement;
  let visible = false;
</script>

<svelte:head>
  <title>Our Experts - Adeptus Technologies</title>
  <meta
    name="description"
    content="Meet our team of manufacture trained and certified engineers. We pride ourselves in choosing service over profits with 24x7 technical support."
  />
  <meta
    name="keywords"
    content="certified engineers, technical experts, IoT specialists, smart city consultants, factory trained, professional service"
  />
  <meta
    property="og:title"
    content="Our Experts - Adeptus Technologies"
  />
  <meta
    property="og:description"
    content="All our engineers are manufacture trained and certified, providing professional service with unmatched after-sales support."
  />
  <meta property="og:type" content="website" />
</svelte:head>

<!-- Hero Section -->
<section
  bind:this={heroElement}
  class="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
>
  <!-- Background Image -->
  <div
    class="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style="background-image: url('https://static.wixstatic.com/media/ea99b6_84f6b87fca3041908e686db5387d63b6~mv2.jpg/v1/fill/w_915,h_768,al_c,q_85,enc_avif,quality_auto/ea99b6_84f6b87fca3041908e686db5387d63b6~mv2.jpg');"
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

  <!-- Hero Content -->
  <div class="relative z-10 container text-center -mt-32">
    <div class="max-w-4xl mx-auto">
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
      >
        Our Experts
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
      >
        All our engineers are manufacture trained and certified. For us, this is a huge investment. We know it is worth it as this aids us in ensuring that we are able to address and resolve any issues that our customers may face. We pride ourselves in choosing service over profits.
      </p>
    </div>
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

<!-- Content Section -->
<section class="py-20 bg-gray-900">
  <div class="container mx-auto px-6">
    <div class="max-w-4xl mx-auto">
      <div class="space-y-8 text-lg leading-relaxed text-gray-300">
        <p>
          Our team's expertise allows us to provide our customers with utmost professional service, ensuring that we meet all their business requirements along the way. Our value addition emanates from a unique approach in planning, implementing and managing our client's technological needs. We have a carefully chosen and highly motivated team of qualified, trained and experienced specialists and consultants at your service, any time.
        </p>

        <p>
          We believe in a strong customer centric approach which will give you peace of mind and the confidence that our business policy will eventually meet your strategic requirements.
        </p>

        <p>
          With a strong focus on delighting the customer every time, our solutions are backed-up with unmatched after-sales support and service which is a benchmark in the industry. The company has its own in-house dedicated, qualified, factory trained and certified technical team which works on a 24x7 basis and are available on-call.
        </p>
      </div>
    </div>
  </div>
</section>