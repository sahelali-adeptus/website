<script>
  import { onMount } from "svelte";

  let heroElement;
  let visible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible = true;
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
    };
  });
</script>

<svelte:head>
  <title>Managed Energy Services - Adeptus Technologies</title>
  <meta
    name="description"
    content="Managed Energy Services - Real-time monitoring, analysis of energy consumption patterns and optimization with industry-leading partners."
  />
</svelte:head>

<!-- Hero Banner -->
<section
  bind:this={heroElement}
  class="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
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

  <!-- Hero Content -->
  <div class="relative z-10 container text-center -mt-32">
    <div class="max-w-4xl mx-auto">
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
        class:animate-slide-up={visible}
      >
        Managed Energy
        <span class="text-white block md:inline">Services</span>
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={visible}
        style="animation-delay: 0.2s;"
      >
        Real-time monitoring, analysis of energy consumption patterns and optimize building equipment performance
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
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
      >
        Managed Energy Services
      </h2>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed mb-6">
          Adeptus Technologies in partnership with leading energy services company offers end to end electro-mechanical and energy consulting services. We focus on optimizing assets and implementing energy conservative measures to achieve energy savings.
        </p>
        
        <p class="text-xl leading-relaxed text-center font-semibold text-primary-600 dark:text-primary-400">
          We Partner with Industry Leaders...
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Service Offerings Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Service Offerings Along With Our Strategic Partner
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Energy Management -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Energy Management
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Comprehensive energy management solutions for optimal performance.
              </p>
            </div>
          </div>
        </div>

        <!-- Measurement & Verifications -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Measurement & Verifications
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Accurate measurement and verification of energy performance.
              </p>
            </div>
          </div>
        </div>

        <!-- Energy Consulting Services -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Energy Consulting Services
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Expert consulting for energy optimization strategies.
              </p>
            </div>
          </div>
        </div>

        <!-- Energy Modeling -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Energy Modeling
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Advanced modeling for energy efficiency planning.
              </p>
            </div>
          </div>
        </div>

        <!-- Renewable Energy -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Renewable Energy
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Sustainable renewable energy solutions and integration.
              </p>
            </div>
          </div>
        </div>

        <!-- Energy Performance Contracting -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Energy Performance Contracting
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Performance-based contracting for guaranteed energy savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Managed Energy Services Details Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Our Managed Energy Services
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed mb-12 text-center">
          Our Managed Energy Services offerings include continuous online monitoring and reporting of consumptions trend, measurement of equipment performance and benchmarking. This enables stakeholder to maximize energy saving without compromising the comfort and safety of the tenants.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Delivered Through Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Delivered Through
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Metering Services -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4"
            >
              <svg
                class="w-8 h-8 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Metering Services
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Advanced metering infrastructure for accurate energy monitoring
            </p>
          </div>
        </div>

        <!-- Measurement and Verifications -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4"
            >
              <svg
                class="w-8 h-8 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Measurement and Verifications
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Precise measurement and verification of energy performance
            </p>
          </div>
        </div>

        <!-- Energy Analysis and Optimization -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4"
            >
              <svg
                class="w-8 h-8 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Energy Analysis and Optimization
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Comprehensive analysis and optimization strategies
            </p>
          </div>
        </div>

        <!-- Fault Detection and Diagnostics -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4"
            >
              <svg
                class="w-8 h-8 text-red-600 dark:text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Fault Detection and Diagnostics
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Advanced fault detection and diagnostic capabilities
            </p>
          </div>
        </div>

        <!-- 24×7 Monitoring -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4"
            >
              <svg
                class="w-8 h-8 text-yellow-600 dark:text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              24×7 Monitoring
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Continuous round-the-clock monitoring and support
            </p>
          </div>
        </div>

        <!-- Dashboards and Reports -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4"
            >
              <svg
                class="w-8 h-8 text-teal-600 dark:text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Dashboards and Reports
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Interactive dashboards and comprehensive reporting
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>