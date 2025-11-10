<script>
  import { onMount } from "svelte";

  let heroElement;
  let visible = false;
</script>

<svelte:head>
  <title>24x7 Command & Control Center - Adeptus Technologies</title>
  <meta
    name="description"
    content="Adeptus Command & Control Center offers 24/7/365 support through on-site and off-site services, remotely monitoring and managing client assets."
  />
  <meta
    name="keywords"
    content="command control center, 24x7 support, remote monitoring, asset management, real-time monitoring, UAE support center"
  />
  <meta
    property="og:title"
    content="24x7 Command & Control Center - Adeptus Technologies"
  />
  <meta
    property="og:description"
    content="Futuristic Command and Control Center offering 24x7x365 client support by remotely monitoring & managing assets."
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
    style="background-image: url('https://static.wixstatic.com/media/ea99b6_5b15e066ff69481d9e47c457bfd88c68~mv2.png/v1/fill/w_1296,h_433,al_c,q_90,enc_avif,quality_auto/ea99b6_5b15e066ff69481d9e47c457bfd88c68~mv2.png');"
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
        Adeptus Command & Control Center
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
      >
        24/7/365 support through on-site and off-site services and maintenance.
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
          Adeptus Technologies operates a futuristic Command and Control Center that offers 24x7x365 days client support by remotely monitoring & managing their assets.
        </p>

        <p>
          Our Command & Control Center currently extends to some of our prestigious clients in the UAE. The Center ensures real time monitoring & control of all electro-mechanical systems at the client facilities, thus reducing operational and energy costs.
        </p>

        <div class="mt-12">
          <h2 class="text-2xl md:text-3xl font-bold mb-8 text-white">
            Adeptus Command and Control Center offers the following key functions:
          </h2>
          
          <div class="space-y-6">
            <div class="bg-gray-800 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 class="text-xl font-semibold mb-3 text-white">1. Improved Service Delivery</h3>
              <p class="text-gray-300">
                Through pro-active monitoring thus ensuring immediate response to faults and failures of assets across various sites.
              </p>
            </div>
            
            <div class="bg-gray-800 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 class="text-xl font-semibold mb-3 text-white">2. Virtual Site Visits</h3>
              <p class="text-gray-300">
                Virtual visits to the sites from a central location. Provides an holistic view of the systems at client premises.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 text-center">
          <p class="text-xl text-white font-medium">
            So if you want to know what REAL service is about we urge you to come by our facilities at any time to see just how engaged our team are. Always ready. Always serving.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>