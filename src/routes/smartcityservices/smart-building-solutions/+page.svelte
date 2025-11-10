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
  <title>BuildingTalkz Platform - Adeptus Technologies</title>
  <meta
    name="description"
    content="BuildingTalkz Platform - Extensive real-time reporting with predictive analysis capabilities for building management and monitoring."
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
        BuildingTalkz
        <span class="text-white block md:inline">Platform</span>
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={visible}
        style="animation-delay: 0.2s;"
      >
        Extensive real-time reporting with predictive analysis capabilities for building management
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
        BuildingTalkz Platform
      </h2>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed mb-6">
          Extensive Real time reporting with predictive analysis capabilities, the platform makes it easier for the building owners to easily manage and monitor their building assets and various equipment portfolio. Moreover gets and overview of the potential problem areas/makers within the site.
        </p>

        <p class="text-xl leading-relaxed mb-6">
          The platform detects unusual patterns that do not confirm to the expected behavior which could be point anomalies, contextual anomalies and collective anomalies.
        </p>

        <p class="text-xl leading-relaxed mb-6">
          The Data is collated to enable the SME's for the creation of Training sets respective to their Domain expertise (HVAC etc.) The platform provides an extensive tool for the configuration of these training sets using UML (Unified Modelling Language).
        </p>

        <p class="text-xl leading-relaxed">
          These training sets are used to build data models which are then finalized and registered back to the platform. The Finalized Data models can be applied with feedback to enable reinforcements.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Platform Capabilities Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
      >
        Platform Capabilities
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Real-time Monitoring -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-start space-x-4">
            <div
              class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0"
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
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Real-time Reporting & Analytics
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Comprehensive real-time monitoring with predictive analysis capabilities for building assets and equipment portfolio management.
              </p>
            </div>
          </div>
        </div>

        <!-- Anomaly Detection -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-start space-x-4">
            <div
              class="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0"
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
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Advanced Anomaly Detection
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Detects point anomalies, contextual anomalies, and collective anomalies to identify potential problem areas within your facility.
              </p>
            </div>
          </div>
        </div>

        <!-- Training Sets -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-start space-x-4">
            <div
              class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0"
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
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                SME Training Sets & UML
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Enables SMEs to create domain-specific training sets (HVAC, etc.) using extensive UML configuration tools.
              </p>
            </div>
          </div>
        </div>

        <!-- Data Models -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-start space-x-4">
            <div
              class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0"
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Intelligent Data Models
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Build, finalize, and register data models with feedback mechanisms for continuous reinforcement learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Intelligent Infrastructure Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Intelligent Infrastructure Foundation
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-12">
        <p class="text-xl leading-relaxed text-center">
          Combined IT and building technology produces an intelligent infrastructure foundation to enable a high-performance workplace. The integrated framework capitalizes on Electro-mechanical systems, ICT Systems, Building Utilities, Security services and more. With our approach, Building systems become integrated, flexible, sustainable, and efficient.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Key Features -->
        <div class="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl">
          <h3 class="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-6 text-center">
            KEY FEATURES
          </h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-gray-700 dark:text-gray-300 font-medium">
                Intelligent building management platform
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-gray-700 dark:text-gray-300 font-medium">
                Centralized Monitoring and control
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-gray-700 dark:text-gray-300 font-medium">
                HVAC Optimization
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-gray-700 dark:text-gray-300 font-medium">
                Unified building systems
              </p>
            </div>
          </div>
        </div>

        <!-- Key Benefits -->
        <div class="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl">
          <h3 class="text-2xl font-bold text-green-800 dark:text-green-300 mb-6 text-center">
            KEY BENEFITS
          </h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-gray-700 dark:text-gray-300 font-medium">
                Comprehensive automated system
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-gray-700 dark:text-gray-300 font-medium">
                Reduced operational & Maintenance Costs
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-gray-700 dark:text-gray-300 font-medium">
                Minimizes Cooling Issues
              </p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-gray-700 dark:text-gray-300 font-medium">
                Manages Energy Demand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>