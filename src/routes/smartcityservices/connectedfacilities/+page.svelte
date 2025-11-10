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
  <title>Connected Facilities Management - Adeptus Technologies</title>
  <meta
    name="description"
    content="Connected Facilities Management - Remote monitoring and maintenance from Adeptus Command and Control Centre (ACCC) operating 24x7."
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
        Connected Facilities
        <span class="text-white block md:inline">Management</span>
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={visible}
        style="animation-delay: 0.2s;"
      >
        Remote monitoring and maintenance from our 24×7 Command and Control
        Centre
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
        Connected Facilities Management
      </h2>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed mb-6">
          The concept defines virtual relocation of the Facility to Adeptus Command and Control Center (ACCC). The data captured from the building assets facility level is updated to the central repository (ACCC) on a regular basis.
        </p>

        <p class="text-xl leading-relaxed mb-6">
          Our Command Control Center is equipped with enterprise level tools and software solutions to provide essential monitoring and verification services. These services are supported by subject matter experts (SMEs) who have extensive experience in the service and support of HVAC, electrical, and energy systems.
        </p>

        <p class="text-xl leading-relaxed">
          Our team ensures that all building assets are monitored on a 24x7 basis which includes alarm notification to the concerned Facilities team, Proactive Maintenance notification, diagnostic analysis and Reporting.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Industry Verticals Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Industry Verticals
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <p class="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
        Focusing on diverse industry verticals and facilities such as educational institutions, commercial buildings, Banking and financial sectors, residential buildings and government services.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Educational Institutions -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Educational Institutions
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Schools, universities, and educational facilities
            </p>
          </div>
        </div>

        <!-- Commercial Buildings -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Commercial Buildings
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Office complexes and commercial facilities
            </p>
          </div>
        </div>

        <!-- Banking & Financial -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Banking & Financial
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Financial institutions and banking facilities
            </p>
          </div>
        </div>

        <!-- Residential Buildings -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Residential Buildings
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Residential complexes and housing developments
            </p>
          </div>
        </div>

        <!-- Government Services -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Government Services
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Government buildings and public facilities
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Key Features Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Key Features
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Feature 1 -->
        <div class="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3">
                Eliminate Unnecessary Service Calls and Visits
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Remote diagnostics reduce on-site visits and unnecessary service calls through proactive monitoring.
              </p>
            </div>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                Holistic View of Facilities and Systems Connected
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Comprehensive oversight of all connected systems and facilities from a single interface.
              </p>
            </div>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-xl">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-xl font-bold text-purple-800 dark:text-purple-300 mb-3">
                Increased Availability and Reliability
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Enhanced system uptime and reliability through continuous monitoring and proactive maintenance.
              </p>
            </div>
          </div>
        </div>

        <!-- Feature 4 -->
        <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-xl">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-xl font-bold text-red-800 dark:text-red-300 mb-3">
                Quicker Action in the Event of Breakdown
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Rapid response capabilities with immediate notification and diagnostic analysis.
              </p>
            </div>
          </div>
        </div>

        <!-- Feature 5 -->
        <div class="bg-teal-50 dark:bg-teal-900/20 p-8 rounded-xl md:col-span-2">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-xl font-bold text-teal-800 dark:text-teal-300 mb-3">
                Remote Configuration and Troubleshooting
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                First response step in case of an event/issue with remote configuration and troubleshooting capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ACCC Services Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
      >
        Adeptus Command and Control Centre (ACCC) Services
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- 24/7 Monitoring -->
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                24×7 Monitoring
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Continuous monitoring of all building assets with alarm notifications.
              </p>
            </div>
          </div>
        </div>

        <!-- Proactive Maintenance -->
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Proactive Maintenance
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Preventive maintenance notifications and scheduling.
              </p>
            </div>
          </div>
        </div>

        <!-- Diagnostic Analysis -->
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Diagnostic Analysis
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Advanced diagnostic analysis and troubleshooting.
              </p>
            </div>
          </div>
        </div>

        <!-- Reporting -->
        <div
          class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-start space-x-4">
            <div
              class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center flex-shrink-0"
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Comprehensive Reporting
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Detailed reports and analytics on facility performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
