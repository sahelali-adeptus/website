<script>
  import { onMount } from "svelte";

  let aboutUsElement;
  let visible = false;

  const verticals = [
    { name: "Real Estate", icon: "🏢" },
    { name: "Facilities Management", icon: "🔧" },
    { name: "Government", icon: "🏛️" },
    { name: "Construction & Contracting", icon: "🏗️" },
    { name: "Educational Institutions", icon: "🎓" },
    { name: "Heavy Machinery & Fleet", icon: "🚛" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Waste Management", icon: "♻️" },
  ];

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

    if (aboutUsElement) {
      observer.observe(aboutUsElement);
    }

    return () => {
      if (aboutUsElement) {
        observer.unobserve(aboutUsElement);
      }
    };
  });
</script>

<section
  id="about-us"
  bind:this={aboutUsElement}
  class="section-padding bg-white dark:bg-gray-900"
>
  <div class="container">
    <!-- Section Header -->
    <div class="text-center mb-16" class:animate-slide-up={visible}>
      <div
        class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6"
      >
        <span class="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
        About Us
      </div>
      <h2
        class="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8"
      >
        Adeptus Technologies LLC
      </h2>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
      <!-- Left Column - Company Overview -->
      <div
        class="space-y-8"
        class:animate-slide-up={visible}
        style="animation-delay: 0.2s;"
      >
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center mr-4"
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              Fast-Growing IoT Leader
            </h3>
          </div>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Adeptus Technologies LLC is a fast-growing player in the IoT and
            Managed Services domain. Our operations are driven by a talent pool
            of young technology entrepreneurs and software developers with
            skills entrenched in AI and Machine Learning.
          </p>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            We are focused on delivering futuristic solutions for different
            verticals from Real Estate, Facilities Management, Govt.,
            Construction & Contracting, Educational Institutions, Heavy
            Machinery & fleet, Manufacturing, Waste management entities amongst
            others.
          </p>
        </div>
      </div>

      <!-- Right Column - Made in UAE -->
      <div
        class="space-y-8"
        class:animate-slide-up={visible}
        style="animation-delay: 0.4s;"
      >
        <div
          class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800"
        >
          <div class="flex items-center mb-6">
            <div class="text-3xl mr-4">🇦🇪</div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              Made in UAE
            </h3>
          </div>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Adeptus is proudly 'Made in UAE', in the sense our IoT platform, <strong
              class="text-primary-600 dark:text-primary-400">Beconix AI</strong
            >, is fully developed locally and in-house by our team of software
            developers, based in the UAE.
          </p>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            We have a GCC-wide reach for addressing various client projects. Our
            Head Office hosts an intelligent 24x7 Command and Control Centre,
            powered by Beconix AI used by our operators to deliver managed
            services.
          </p>
        </div>
      </div>
    </div>

    <!-- Verticals Grid -->
    <div
      class="mb-16"
      class:animate-slide-up={visible}
      style="animation-delay: 0.6s;"
    >
      <h3
        class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
      >
        Industries We Serve
      </h3>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {#each verticals as vertical, i}
          <div
            class="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 text-center"
            style="animation-delay: {0.7 + i * 0.05}s;"
          >
            <div
              class="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300"
            >
              {vertical.icon}
            </div>
            <h4
              class="text-sm font-semibold text-gray-900 dark:text-white leading-tight"
            >
              {vertical.name}
            </h4>
          </div>
        {/each}
      </div>
    </div>

    <!-- Statistics Section -->
    <div
      class="mb-16 relative"
      class:animate-slide-up={visible}
      style="animation-delay: 0.8s;"
    >
      <!-- Background Design -->
      <div class="absolute inset-0 rounded-3xl opacity-5">
        <!-- Animated background gradient -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl animate-pulse-gentle"
        ></div>
        <!-- Floating background elements -->
        <div
          class="absolute top-4 right-8 w-16 h-16 bg-primary-400/20 rounded-full animate-float"
          style="animation-delay: 0.5s;"
        ></div>
        <div
          class="absolute bottom-8 left-12 w-12 h-12 bg-purple-400/30 rounded-full animate-bounce-gentle"
          style="animation-delay: 1.5s;"
        ></div>
        <div
          class="absolute top-1/2 right-1/4 w-8 h-8 bg-blue-400/25 rounded-full animate-float"
          style="animation-delay: 2.5s;"
        ></div>
      </div>
      <div class="relative z-10 p-8 md:p-12">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6"
          >
            <span class="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Impact Metrics
          </div>
          <h3
            class="text-3xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 hover:scale-105 transition-all duration-500 cursor-default"
          >
            Our Growing
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 hover:animate-shimmer relative overflow-hidden"
            >
              Footprint
            </span>
          </h3>
          <p
            class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Our footprint is getting bigger by the day and as on date our
            technology has achieved remarkable milestones
          </p>
        </div>

        <!-- Central Feature with Surrounding Stats -->
        <div class="relative max-w-6xl mx-auto">
          <!-- Central Circle -->
          <div
            class="relative z-20 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-700 cursor-pointer animate-pulse-gentle hover:animate-glow"
          >
            <div class="text-center">
              <div class="text-2xl md:text-3xl font-bold mb-2">UAE</div>
              <div class="text-sm md:text-base opacity-90">Technology Hub</div>
              <div class="text-xs md:text-sm opacity-75 mt-1">Since 2019</div>
            </div>
          </div>

          <!-- Floating Stats Cards -->
          <div class="absolute inset-0 z-10">
            <!-- Top Left -->
            <div
              class="absolute top-0 left-0 md:left-8 lg:left-16 transform -translate-y-4 lg:-translate-y-8"
            >
              <div
                class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-blue-200 dark:border-blue-800 group hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:animate-glow cursor-pointer"
              >
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                  >
                    <div class="text-2xl group-hover:animate-bounce-gentle">
                      🏢
                    </div>
                  </div>
                  <div>
                    <div
                      class="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:animate-number-pop relative overflow-hidden"
                    >
                      <span class="relative z-10">25M+</span>
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"
                      ></div>
                    </div>
                    <div
                      class="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Sq.Ft. Served
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Top Right -->
            <div
              class="absolute top-0 right-0 md:right-8 lg:right-16 transform -translate-y-4 lg:-translate-y-8"
            >
              <div
                class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-green-200 dark:border-green-800 group hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:animate-glow cursor-pointer"
              >
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                  >
                    <div class="text-2xl group-hover:animate-bounce-gentle">
                      🏗️
                    </div>
                  </div>
                  <div>
                    <div
                      class="text-2xl font-bold text-green-600 dark:text-green-400 group-hover:animate-number-pop relative overflow-hidden"
                    >
                      <span class="relative z-10">100+</span>
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"
                      ></div>
                    </div>
                    <div
                      class="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Buildings
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Left -->
            <div
              class="absolute bottom-0 left-0 md:left-8 lg:left-16 transform translate-y-4 lg:translate-y-8"
            >
              <div
                class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-purple-200 dark:border-purple-800 group hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:animate-glow cursor-pointer"
              >
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                  >
                    <div class="text-2xl group-hover:animate-bounce-gentle">
                      ⚙️
                    </div>
                  </div>
                  <div>
                    <div
                      class="text-2xl font-bold text-purple-600 dark:text-purple-400 group-hover:animate-number-pop relative overflow-hidden"
                    >
                      <span class="relative z-10">10K+</span>
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"
                      ></div>
                    </div>
                    <div
                      class="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Assets
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Right -->
            <div
              class="absolute bottom-0 right-0 md:right-8 lg:right-16 transform translate-y-4 lg:translate-y-8"
            >
              <div
                class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-orange-200 dark:border-orange-800 group hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:animate-glow cursor-pointer"
              >
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                  >
                    <div class="text-2xl group-hover:animate-bounce-gentle">
                      👥
                    </div>
                  </div>
                  <div>
                    <div
                      class="text-2xl font-bold text-orange-600 dark:text-orange-400 group-hover:animate-number-pop relative overflow-hidden"
                    >
                      <span class="relative z-10">500K+</span>
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"
                      ></div>
                    </div>
                    <div
                      class="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Residents
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Connecting Lines and Animated Elements -->
          <div class="absolute inset-0 z-0 hidden lg:block">
            <!-- Animated connecting paths -->
            <svg class="w-full h-full opacity-30" viewBox="0 0 400 300">
              <!-- Diagonal connecting lines -->
              <path
                d="M100 100 Q200 150 300 100"
                stroke="url(#gradient)"
                stroke-width="3"
                fill="none"
                stroke-dasharray="8,8"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;16"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M100 200 Q200 150 300 200"
                stroke="url(#gradient)"
                stroke-width="3"
                fill="none"
                stroke-dasharray="8,8"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="16;0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
              <!-- Cross connecting lines -->
              <path
                d="M100 100 Q200 150 300 200"
                stroke="url(#gradient2)"
                stroke-width="2"
                fill="none"
                stroke-dasharray="5,10"
                opacity="0.5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;15"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M300 100 Q200 150 100 200"
                stroke="url(#gradient2)"
                stroke-width="2"
                fill="none"
                stroke-dasharray="5,10"
                opacity="0.5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="15;0"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#f97316;stop-opacity:1" />
                  <stop
                    offset="50%"
                    style="stop-color:#facc15;stop-opacity:1"
                  />
                  <stop
                    offset="100%"
                    style="stop-color:#a855f7;stop-opacity:1"
                  />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                  <stop
                    offset="100%"
                    style="stop-color:#10b981;stop-opacity:1"
                  />
                </linearGradient>
              </defs>
            </svg>

            <!-- Floating particles -->
            <div
              class="absolute top-1/4 left-1/3 w-3 h-3 bg-primary-400 rounded-full animate-float opacity-60"
              style="animation-delay: 1s;"
            ></div>
            <div
              class="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce-gentle opacity-40"
              style="animation-delay: 2s;"
            ></div>
            <div
              class="absolute top-1/2 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-pulse-gentle opacity-50"
              style="animation-delay: 3s;"
            ></div>
            <div
              class="absolute bottom-1/4 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-float opacity-45"
              style="animation-delay: 4s;"
            ></div>
          </div>
        </div>
      </div>

      <!-- Client Success & Awards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Client Savings -->
        <div class=" rounded-2xl p-8">
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-4"
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-gray-900 dark:text-white">
              Client Success
            </h4>
          </div>
          <div
            class="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-4"
          >
            50%+
          </div>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            Feedback from clients has been very encouraging so far, as they have
            seen significant savings in energy consumption, in many cases, more
            than <strong>50% savings in overall OPEX</strong>.
          </p>
        </div>

        <!-- Award Recognition -->
        <div class=" p-8">
          <div class="flex items-center mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4"
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-gray-900 dark:text-white">
              Industry Recognition
            </h4>
          </div>
          <div
            class="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-4"
          >
            Top FM Supplier 2019
          </div>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            We have been voted one of the <strong
              >Top FM Suppliers for 2019</strong
            >
            (technology vendor), by
            <em>Facilities Management ME (ITP Media Group)</em>.
          </p>
        </div>
      </div>
    </div>

    <!-- Beconix AI Platform Showcase -->
    <div
      class="relative"
      class:animate-fade-in={visible}
      style="animation-delay: 1.0s;"
    >
      <div class="text-center mb-12">
        <div
          class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6"
        >
          <span class="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
          Our Platform
        </div>
        <h3
          class="text-3xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Meet
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600"
          >
            Beconix AI
          </span>
        </h3>
        <p
          class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Our flagship IoT platform, powering intelligent building management
          and 24x7 command & control operations across the GCC region.
        </p>
      </div>

      <!-- Platform Features Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Left: Platform Overview -->
        <div class="space-y-6">
          <div
            class="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-3xl p-8 border border-cyan-200 dark:border-cyan-800 relative overflow-hidden"
          >
            <!-- Decorative elements -->
            <div
              class="absolute top-0 right-0 w-24 h-24 bg-cyan-300/20 rounded-full -translate-y-8 translate-x-8"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-16 h-16 bg-blue-300/20 rounded-full translate-y-6 -translate-x-6"
            ></div>

            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-2xl font-bold text-gray-900 dark:text-white">
                    Intelligent Control
                  </h4>
                  <p class="text-cyan-600 dark:text-cyan-400 font-medium">
                    Real-time Monitoring
                  </p>
                </div>
              </div>

              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Advanced AI-powered platform that seamlessly integrates with
                building systems to provide comprehensive monitoring, control,
                and automation capabilities.
              </p>

              <div class="grid grid-cols-2 gap-4">
                <div
                  class="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl"
                >
                  <div
                    class="text-2xl font-bold text-cyan-600 dark:text-cyan-400"
                  >
                    AI-Driven
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    Analytics
                  </div>
                </div>
                <div
                  class="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl"
                >
                  <div
                    class="text-2xl font-bold text-blue-600 dark:text-blue-400"
                  >
                    Cloud-Based
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    Infrastructure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Key Capabilities -->
        <div class="space-y-6">
          <div class="grid grid-cols-1 gap-6">
            <!-- 24/7 Command Center -->
            <div
              class="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 class="text-lg font-bold text-gray-900 dark:text-white">
                    24/7 Command Center
                  </h5>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">
                    Round-the-clock monitoring and support
                  </p>
                </div>
              </div>
            </div>

            <!-- GCC-Wide Reach -->
            <div
              class="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
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
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 class="text-lg font-bold text-gray-900 dark:text-white">
                    GCC-Wide Reach
                  </h5>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">
                    Regional coverage and scalability
                  </p>
                </div>
              </div>
            </div>

            <!-- Made in UAE -->
            <div
              class="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <div class="text-xl">🇦🇪</div>
                </div>
                <div>
                  <h5 class="text-lg font-bold text-gray-900 dark:text-white">
                    100% Made in UAE
                  </h5>
                  <p class="text-gray-600 dark:text-gray-300 text-sm">
                    Locally developed and supported
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Platform Stats -->
      <div
        class="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
      >
        <!-- Background pattern -->
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="white"
                  stroke-width="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div class="relative z-10 text-center">
          <h4 class="text-2xl md:text-2xl font-bold mb-6">
            Powering Smart Buildings Across the Region
          </h4>
          <p class="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Beconix AI integrates seamlessly with existing infrastructure to
            deliver unprecedented insights and control capabilities.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-cyan-400 mb-2">Real-time</div>
              <div class="text-gray-300 text-sm">Data Processing</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-400 mb-2">
                Predictive
              </div>
              <div class="text-gray-300 text-sm">Maintenance</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-400 mb-2">
                Automated
              </div>
              <div class="text-gray-300 text-sm">Controls</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-emerald-400 mb-2">Energy</div>
              <div class="text-gray-300 text-sm">Optimization</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
