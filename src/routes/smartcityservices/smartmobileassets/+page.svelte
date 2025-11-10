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
  <title>Smart Mobile Assets Management - Adeptus Technologies</title>
  <meta
    name="description"
    content="Smart Mobile Assets Management - Extensive data analytics platform for real-time data acquisition and actionable insights from mobile assets."
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
        Smart Mobile Assets
        <span class="text-white block md:inline">Management</span>
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={visible}
        style="animation-delay: 0.2s;"
      >
        Extensive data analytics platform that enables real-time data
        acquisition from mobile assets and performs detailed analytics to derive
        actionable insights
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

<!-- Challenges Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Operating Challenges for Heavy Machines
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p class="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          Challenges operating heavy machines are varied according to the
          industries and environment they operate on, but could be generally
          listed as below:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Performance Deterioration -->
        <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-6 h-6 text-red-600 dark:text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-red-800 dark:text-red-300 mb-2">
                Performance Deterioration
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Gradual decline in machine efficiency and output quality over
                time
              </p>
            </div>
          </div>
        </div>

        <!-- Unexpected Downtime -->
        <div
          class="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-xl shadow-lg"
        >
          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-6 h-6 text-orange-600 dark:text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h3
                class="text-xl font-bold text-orange-800 dark:text-orange-300 mb-2"
              >
                Unexpected Downtime
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Unplanned interruptions that halt operations and reduce
                productivity
              </p>
            </div>
          </div>
        </div>

        <!-- Inability to Complete Plans -->
        <div
          class="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-xl shadow-lg"
        >
          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-6 h-6 text-yellow-600 dark:text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
            </div>
            <div>
              <h3
                class="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-2"
              >
                Inability to Complete Operational Plans
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Failure to execute planned operations due to various constraints
              </p>
            </div>
          </div>
        </div>

        <!-- Work Environment Hazards -->
        <div
          class="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-xl shadow-lg"
        >
          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-6 h-6 text-purple-600 dark:text-purple-400"
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
              <h3
                class="text-xl font-bold text-purple-800 dark:text-purple-300 mb-2"
              >
                Hazards at Work Environment
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Environmental risks that threaten safe machine operation
              </p>
            </div>
          </div>
        </div>

        <!-- Accidents -->
        <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-6 h-6 text-red-600 dark:text-red-400"
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
            <div>
              <h3 class="text-xl font-bold text-red-800 dark:text-red-300 mb-2">
                Accidents
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Unforeseen incidents that can cause damage and safety concerns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Solution Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Our Solution
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed text-center">
          Our domain experts have fed in default intelligence into the system to
          analyze performance deterioration and we ensure to overcome these
          challenges with our extensive data analytics platform, that enables
          real time data acquisition from mobile assets and analytics to derive
          actionable insights.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- MachineTalkz Platform Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          MachineTalkz Platform
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed text-center mb-12">
          Our platform targets all aspects of mobile assets management to
          address Performance, Shift and Service Management.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Key Highlights Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Key Highlights
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Real Time Data Acquisition -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4">
            <div
              class="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"
            ></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Real Time Data Acquisition
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Continuous collection of data from mobile assets for immediate
                analysis and insights.
              </p>
            </div>
          </div>
        </div>

        <!-- Performance Deterioration -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4">
            <div
              class="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"
            ></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Remote Performance Fix
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Performance deterioration can be remotely fixed using strategies
                defined by domain experts.
              </p>
            </div>
          </div>
        </div>

        <!-- Downtime Prediction -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4">
            <div
              class="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"
            ></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Downtime Prediction
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                System predicts possible downtime for assets enabling
                operators/admins to plan operations.
              </p>
            </div>
          </div>
        </div>

        <!-- AI and Expert Analytics -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4">
            <div
              class="w-3 h-3 bg-yellow-600 rounded-full mt-2 flex-shrink-0"
            ></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                AI & Expert Analytics
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Data analytics, machine learning and subject matter experts
                participation to predict, manage and avoid issues.
              </p>
            </div>
          </div>
        </div>

        <!-- Service Planner -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4">
            <div
              class="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"
            ></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Service Planner
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Service planner enables users to easily schedule services for
                asset maintenance and optimization.
              </p>
            </div>
          </div>
        </div>

        <!-- Shift Planner -->
        <div class="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4">
            <div
              class="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"
            ></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Shift Planner
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Shift planner helps users plan shifts based on operations and
                tasks for heavy machines with easy integration methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
