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
  <title>Smart City Services - Adeptus Technologies</title>
  <meta
    name="description"
    content="Adeptus Technologies Smart City Services - Leading edge software and hardware components connected to a City centric cloud based platform (Datalkz Platform)."
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
        Smart City
        <span class="text-white block md:inline">Services</span>
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={visible}
        style="animation-delay: 0.2s;"
      >
        Leading edge software and hardware components connected to a City centric cloud based platform
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
        Smart City Services
      </h2>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed">
          Adeptus Technologies makes use of leading edge software and hardware
          components and connects them to a City centric cloud based platform
          (Datalkz Platform). The platform enables the users to monitor and
          manage all varied systems connected through a single point allowing
          the city managers to attain control of their services with a central
          management framework.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
      >
        Our Smart City Solutions
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Smart Building Solutions -->
        <a
          href="/smartcityservices/smart-building-solutions"
          class="block bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
            >
              Smart Building Solutions
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Intelligent building management and automation systems
            </p>
          </div>
        </a>

        <!-- Connected Facilities Mgmt -->
        <a
          href="/smartcityservices/connectedfacilities"
          class="block bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                ></path>
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
            >
              Connected Facilities Mgmt
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Centralized management of connected facility systems
            </p>
          </div>
        </a>

        <!-- Managed Energy Services -->
        <a
          href="/smartcityservices/managedenergyservices"
          class="block bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300"
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
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300"
            >
              Managed Energy Services
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Optimized energy monitoring and management solutions
            </p>
          </div>
        </a>

        <!-- Smart Mobile Assets Mgmt -->
        <a
          href="/smartcityservices/smartmobileassets"
          class="block bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                ></path>
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
            >
              Smart Mobile Assets Mgmt
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Real-time tracking and management of mobile assets
            </p>
          </div>
        </a>

        <!-- Smart Fixed Assets Mgmt -->
        <a
          href="/smartcityservices/smartfixedassets"
          class="block bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-800/50 transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"
                ></path>
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300"
            >
              Smart Fixed Assets Mgmt
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Comprehensive management of fixed infrastructure assets
            </p>
          </div>
        </a>

        <!-- Smart Parking Mgmt -->
        <a
          href="/smartcityservices/smartparking"
          class="block bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                ></path>
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300"
            >
              Smart Parking Mgmt
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Intelligent parking solutions and space optimization
            </p>
          </div>
        </a>

        <!-- Smart Waste Mgmt -->
        <a
          href="/smartcityservices/smartwaste"
          class="block bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-start-2 lg:col-start-auto group cursor-pointer"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300"
            >
              Smart Waste Mgmt
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Efficient waste collection and management systems
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Datalkz Platform Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          The Datalkz Platform
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed mb-6">
          Adeptus Technologies makes use of leading edge software and hardware
          components and connects them to a City centric cloud based platform
          (Datalkz Platform). The platform enables the users to monitor and
          manage all varied systems connected through a single point, allowing
          the city managers to attain control of their services with a central
          management framework.
        </p>

        <p class="text-xl leading-relaxed mb-6">
          Smart City Services build on Datalkz Platform enables to link any
          systems and equipment's, whether existing or new empowering the
          business owners for a smooth transition from a traditional approach
          to a Smart city approach in stages using Adeptus Technologies
          solutions.
        </p>

        <p class="text-xl leading-relaxed">
          The platform is built over years of efforts put in and covers a wide
          range of functionalities required to manage various systems and
          services of an enterprise over its entire life-cycle.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Datalkz IoT Platform Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Datalkz IoT Platform
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed mb-6">
          Adeptus Technologies City centric cloud based platform delivers services for managing the complete environs of various enterprises. The platform is designed to deliver technologies for the solutions of the future that will add tremendous value to various domains and industries. The platform is distributed and horizontally scalable with normalized data store.
        </p>

        <p class="text-xl leading-relaxed mb-6">
          The generic nature of the data store and the core platform APIs help developers to design solutions for their needs without being concerned about the complexity of manipulating the data.
        </p>

        <p class="text-xl leading-relaxed mb-8">
          The platform supports core functionalities including stream processing, batch processing, near real-time event analytics and reporting. Our Platform's Machine Learning (ML) capabilities provide systems the ability to automatically learn and improve from experience without being explicitly programmed.
        </p>

        <div class="bg-primary-600 text-white p-8 rounded-2xl text-center">
          <h3 class="text-2xl md:text-3xl font-bold mb-4">
            SMART CITY SERVICES FOR INDUSTRY VERTICAL SECTORS
          </h3>
          <p class="text-xl font-semibold">
            GOVERNMENT, HOSPITALITY, HEALTHCARE, RETAIL AND MORE ON A SINGLE PLATFORM
          </p>
        </div>
      </div>
    </div>
  </div>
</section>