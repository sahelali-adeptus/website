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
  <title>Smart Parking Management - Adeptus Technologies</title>
  <meta
    name="description"
    content="Smart Parking Management - Efficient real-time monitoring and managing of parking spaces with IoT sensors and analytics for revenue generation."
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
        Smart Parking
        <span class="text-white block md:inline">Management</span>
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={visible}
        style="animation-delay: 0.2s;"
      >
        Our solution enables efficient real-time monitoring and managing of parking space which results in significant time and revenue generation
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

<!-- Problem Statement Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          The Parking Challenge
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed mb-6">
          Parking congestion is a constant source of time consuming process for drivers, employers and public officials in most cities. It is without any doubts that smart parking services is a key component for public officials, city information technology (IT) and innovation executives when planning smart cities.
        </p>

        <p class="text-xl leading-relaxed">
          Adeptus Technologies Smart Parking solutions includes the hardware, software and network connectivity that enable objects to be sensed and remotely controlled across IoT network, allowing users to monitor available and unavailable parking spots that lead to improved efficiency, accuracy and economic benefit.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Solution Overview Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Our Smart Parking Solution
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Solution Description -->
        <div>
          <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p class="text-xl leading-relaxed mb-6">
              Our Solution comprises of smart sensors installed in the ground, or cameras mounted on light poles or building structures, determine whether the parking spaces are occupied or available.
            </p>
            
            <p class="text-xl leading-relaxed">
              This data is routed wirelessly to a gateway, and pushes the data to our smart parking platform.
            </p>
          </div>
        </div>

        <!-- Technology Components -->
        <div class="grid grid-cols-1 gap-6">
          <!-- Ground Sensors -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Smart Ground Sensors
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Advanced sensors embedded in the ground to detect vehicle presence
                </p>
              </div>
            </div>
          </div>

          <!-- Camera Systems -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Mounted Camera Systems
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Cameras on light poles and building structures for visual monitoring
                </p>
              </div>
            </div>
          </div>

          <!-- Wireless Gateway -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Wireless Gateway
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Secure data routing to the smart parking platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Real-time Benefits Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Real-time Parking Intelligence
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-12">
        <p class="text-xl leading-relaxed text-center">
          With multiple sensors installed, a real time parking map can be plotted which shows the accurate information on the available parking spaces, occupied slots thus saving time, fuel for the motorists furthermore reduce traffic congestion and atmospheric pollution.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Time Savings -->
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Time Savings
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Reduce time spent searching for parking spaces
          </p>
        </div>

        <!-- Fuel Efficiency -->
        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Fuel Savings
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Minimize fuel consumption from parking searches
          </p>
        </div>

        <!-- Traffic Reduction -->
        <div class="text-center">
          <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Traffic Reduction
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Decrease traffic congestion in urban areas
          </p>
        </div>

        <!-- Environmental Impact -->
        <div class="text-center">
          <div class="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Pollution Reduction
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Lower atmospheric pollution from reduced emissions
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Data Intelligence Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Intelligent Data-Driven Decisions
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p class="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          The system enables intelligent decisions using data, including real-time status applications and historical analytics reports.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Real-time Applications -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Real-time Status Applications
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Live parking availability updates and instant notifications for drivers and parking operators.
              </p>
            </div>
          </div>
          
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Live parking map visualization</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Mobile app notifications</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Digital signage updates</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Navigation system integration</span>
            </li>
          </ul>
        </div>

        <!-- Historical Analytics -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4 mb-6">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Historical Analytics Reports
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Comprehensive analytics and insights for strategic planning and optimization.
              </p>
            </div>
          </div>
          
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Usage pattern analysis</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Revenue optimization insights</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Peak hour trend reports</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Occupancy forecasting</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>