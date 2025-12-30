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
  <meta property="og:title" content="Our Experts - Adeptus Technologies" />
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
  <div
    class="relative z-10 container text-center flex items-center justify-center min-h-screen"
  >
    <div class="max-w-4xl mx-auto">
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
      >
        Our Experts
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
      >
        All our engineers are manufacture trained and certified. For us, this is
        a huge investment. We know it is worth it as this aids us in ensuring
        that we are able to address and resolve any issues that our customers
        may face. We pride ourselves in choosing service over profits.
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
<section class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
  <div class="container mx-auto px-6">
    <div class="max-w-6xl mx-auto">
      
      <!-- Introduction -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 capitalize">
          Excellence in Every Solution
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Our team's expertise allows us to provide our customers with utmost professional service, ensuring that we meet all their business requirements along the way.
        </p>
      </div>

      <!-- Feature Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        
        <!-- Unique Approach Card -->
        <div class="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
          <div class="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4 capitalize">Unique Approach</h3>
          <p class="text-gray-300 leading-relaxed">
            Our value addition emanates from a unique approach in planning, implementing and managing our client's technological needs.
          </p>
        </div>

        <!-- Expert Team Card -->
        <div class="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
          <div class="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4 capitalize">Expert Team</h3>
          <p class="text-gray-300 leading-relaxed">
            We have a carefully chosen and highly motivated team of qualified, trained and experienced specialists and consultants at your service.
          </p>
        </div>

        <!-- Customer Focus Card -->
        <div class="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
          <div class="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4 capitalize">Customer Centric</h3>
          <p class="text-gray-300 leading-relaxed">
            We believe in a strong customer centric approach which will give you peace of mind and confidence in our business policy.
          </p>
        </div>
      </div>

      <!-- Support Section -->
      <div class="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 md:p-12">
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white capitalize">24/7 Support Excellence</h3>
            </div>
            <p class="text-gray-300 text-lg leading-relaxed">
              With a strong focus on delighting the customer every time, our solutions are backed-up with unmatched after-sales support and service which is a benchmark in the industry.
            </p>
          </div>
          <div class="bg-gray-900 rounded-xl p-6 border border-yellow-500/20">
            <h4 class="text-xl font-semibold text-white mb-4 capitalize">Our Technical Team</h4>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                In-house dedicated specialists
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Factory trained and certified
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Available 24x7 on-call
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Qualified professionals
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
