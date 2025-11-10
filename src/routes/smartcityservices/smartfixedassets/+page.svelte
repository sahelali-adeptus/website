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
  <title>Smart Fixed Assets Management - Adeptus Technologies</title>
  <meta
    name="description"
    content="Smart Fixed Assets Management - Platform enables connectivity to any facility or equipment including meters, generators, chillers regardless of make, model or protocol."
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
        Smart Fixed Assets
        <span class="text-white block md:inline">Management</span>
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={visible}
        style="animation-delay: 0.2s;"
      >
        Our platform enables connectivity to any facility or equipment including meters, generators, chillers and any other intelligent mechanical equipment regardless of make, model or protocol
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
        End-to-End Platform Solutions
      </h2>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed mb-6">
          We offer an end to end platform that proactively monitors assets, providing unambiguous transparency into how the facility performs, where critical faults lie, and where opportunities exist to significantly reduce operational expenses.
        </p>

        <p class="text-xl leading-relaxed mb-6">
          Monitoring and management services for critical assets ensures early detection of failures and to enhance response times to prevent disasters. All assets can be continuously supervised to develop preventive and predictive maintenance approaches to improve operations.
        </p>

        <p class="text-xl leading-relaxed">
          Data from varied systems and devices utilities can be monitored round the clock ensuring high up time. Based on operational requirement, alarm thresholds shall be configured against required parameters.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Remote Management Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Building Equipment Monitoring & Control
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed text-center">
          Building equipment monitoring and control services enables remote asset owners to monitor, manage, and optimize operation of remote equipment without traveling to or maintaining staff locally at the equipment location.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- IoT Platform Offerings Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          IoT Platform Offerings
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p class="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          The data captured from these diverse systems are transmitted to the IoT Platform offering comprehensive services and capabilities.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Real-time Data Acquisition -->
        <div class="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Real-time Data Acquisition
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              Continuous data collection and monitoring from all connected systems
            </p>
          </div>
        </div>

        <!-- Control and Monitoring -->
        <div class="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
              Control and Monitoring
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              Comprehensive control and monitoring capabilities for all assets
            </p>
          </div>
        </div>

        <!-- Universal Web Access -->
        <div class="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3m0 13.5a7.5 7.5 0 01-7.5-7.5M12 3a9 9 0 019 9m-9-9a9 9 0 00-9 9m9 0a9 9 0 01-9-9"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-2">
              Universal Web Browser Access
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              Access platform from any web browser without special software
            </p>
          </div>
        </div>

        <!-- Aggregation -->
        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Aggregation
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              Centralized data aggregation from multiple sources and systems
            </p>
          </div>
        </div>

        <!-- Presentation -->
        <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-red-800 dark:text-red-300 mb-2">
              Presentation
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              Advanced data visualization and reporting capabilities
            </p>
          </div>
        </div>

        <!-- Predictive Analysis -->
        <div class="bg-teal-50 dark:bg-teal-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-2">
              Predictive Analysis
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              Advanced analytics and predictive insights for proactive management
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Maintenance Management Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Maintenance Management
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Preventive Maintenance -->
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Preventive Maintenance
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Scheduled maintenance approaches to prevent equipment failure and extend asset life.
              </p>
            </div>
          </div>

          <!-- Predictive Maintenance -->
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Predictive Maintenance
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Data-driven maintenance strategies based on real-time asset condition monitoring.
              </p>
            </div>
          </div>

          <!-- Early Fault Detection -->
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Early Fault Detection
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Advanced monitoring ensures early detection of failures to prevent disasters.
              </p>
            </div>
          </div>

          <!-- 24/7 Monitoring -->
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                24/7 Monitoring
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Round-the-clock monitoring with configurable alarm thresholds for critical parameters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>