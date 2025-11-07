<script>
  import { onMount } from "svelte";

  let servicesElement;
  let visible = false;

  const services = [
    {
      title: "Smart City Service",
      icon: "🏙️",
      description:
        "Comprehensive IoT solutions for urban infrastructure, traffic management, and sustainable city development.",

      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Smart IT Solution",
      icon: "💻",
      description:
        "Advanced technology solutions leveraging AI, Machine Learning, and IoT for business transformation.",

      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "IT Security Solution",
      icon: "🔒",
      description:
        "Robust cybersecurity solutions protecting your digital assets and ensuring business continuity.",

      gradient: "from-red-500 to-orange-500",
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

    if (servicesElement) {
      observer.observe(servicesElement);
    }

    return () => {
      if (servicesElement) {
        observer.unobserve(servicesElement);
      }
    };
  });
</script>

<section
  id="our-services"
  bind:this={servicesElement}
  class="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
>
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-5">
    <div
      class="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
    ></div>
  </div>

  <div class="container relative z-10">
    <!-- Section Header -->
    <div class="text-center mb-20" class:animate-slide-up={visible}>
      <div
        class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6"
      >
        <span class="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
        Our Services
      </div>
      <h2
        class="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
      >
        Comprehensive Technology
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600"
        >
          Solutions
        </span>
      </h2>
      <p
        class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
      >
        From smart cities to enterprise IT solutions, we deliver cutting-edge
        technology services that transform businesses and communities.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {#each services as service, i}
        <div
          class="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 hover:scale-105 border border-gray-100 dark:border-gray-700 overflow-hidden cursor-pointer"
          class:animate-slide-up={visible}
          style="animation-delay: {0.2 + i * 0.1}s;"
        >
          <!-- Background Gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-br {service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500"
          ></div>

          <!-- Service Icon -->
          <div
            class="relative z-10 text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:animate-bounce-gentle"
          >
            {service.icon}
          </div>

          <!-- Service Title -->
          <h3
            class="relative z-10 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:{service.gradient} transition-all duration-300"
          >
            {service.title}
          </h3>

          <!-- Service Description -->
          <p
            class="relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
          >
            {service.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
