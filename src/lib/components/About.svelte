<script>
  import { onMount } from "svelte";

  let aboutElement;
  let visible = false;

  const features = [
    {
      icon: "🚀",
      title: "Business Efficiency",
      description: "Streamlining operations and maximizing productivity",
    },
    {
      icon: "⚡",
      title: "Energy Optimization",
      description: "Smart energy management and cost reduction",
    },
    {
      icon: "📈",
      title: "Profitability",
      description: "Increasing revenue and sustainable growth",
    },
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

    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      }
    };
  });
</script>

<section
  id="about"
  bind:this={aboutElement}
  class="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
>
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-5">
    <div
      class="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl animate-pulse-gentle"
    ></div>
    <div
      class="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float"
    ></div>
    <div
      class="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl animate-bounce-gentle"
      style="animation-delay: 2s;"
    ></div>
    <div
      class="absolute bottom-1/3 right-1/3 w-48 h-48 bg-green-400/20 rounded-full blur-3xl animate-float"
      style="animation-delay: 4s;"
    ></div>
  </div>

  <div class="container relative z-10">
    <!-- Hero Text -->
    <div class="text-center mb-20" class:animate-slide-up={visible}>
      <div
        class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6"
      >
        <span class="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
        Our Mission
      </div>
      <h2
        class="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
      >
        Enabling our clients to
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600"
        >
          monitor, control, and automate
        </span>
        building systems for improved energy efficiency and reduced operational costs
      </h2>
    </div>

    <!-- Features Grid -->
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      class:animate-slide-up={visible}
      style="animation-delay: 0.2s;"
    >
      {#each features as feature, i}
        <div
          class="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
          style="animation-delay: {0.3 + i * 0.1}s;"
        >
          <div
            class="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            {feature.icon}
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {feature.title}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
      <!-- Left Side - Innovation -->
      <div
        class="relative"
        class:animate-slide-up={visible}
        style="animation-delay: 0.4s;"
      >
        <div
          class="bg-gradient-to-br from-primary-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <!-- Background decoration -->
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"
          ></div>

          <div class="relative z-10">
            <div
              class="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-white text-sm font-semibold mb-4"
            >
              Innovation
            </div>
            <h3 class="text-3xl md:text-4xl font-bold mb-4">
              Delivering Enterprise Solutions
            </h3>
            <p class="text-white/90 text-lg leading-relaxed">
              We deliver a full range of Enterprise solutions and have the
              expertise in managing highly complex projects.
            </p>
          </div>
        </div>
      </div>

      <!-- Right Side - Options -->
      <div
        class="space-y-8"
        class:animate-slide-up={visible}
        style="animation-delay: 0.6s;"
      >
        <div
          class="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700"
        >
          <div class="flex items-start space-x-4">
            <div
              class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center"
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
            <div>
              <h3
                class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
              >
                More Options for you
              </h3>
              <p
                class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
              >
                We do it because we love it and are personally connected to
                everything we create.
              </p>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-4">
          <div
            class="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 text-center"
          >
            <div
              class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
            >
              500+
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Projects Delivered
            </div>
          </div>
          <div
            class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center"
          >
            <div
              class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2"
            >
              99%
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
