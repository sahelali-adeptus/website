<script>
  import { onMount } from "svelte";

  let partnersElement;
  let visible = false;

  const partners = [
    { name: "Microsoft", logo: "https://via.placeholder.com/200x100/0078D4/white?text=Microsoft" },
    { name: "Amazon AWS", logo: "https://via.placeholder.com/200x100/FF9900/white?text=AWS" },
    { name: "Google Cloud", logo: "https://via.placeholder.com/200x100/4285F4/white?text=Google" },
    { name: "Cisco", logo: "https://via.placeholder.com/200x100/049FD9/white?text=Cisco" },
    { name: "Intel", logo: "https://via.placeholder.com/200x100/0068B5/white?text=Intel" },
    { name: "Schneider Electric", logo: "https://via.placeholder.com/200x100/3DCD58/white?text=Schneider" },
    { name: "Siemens", logo: "https://via.placeholder.com/200x100/009999/white?text=Siemens" },
    { name: "Honeywell", logo: "https://via.placeholder.com/200x100/ED1C24/white?text=Honeywell" },
    { name: "Johnson Controls", logo: "https://via.placeholder.com/200x100/005DAA/white?text=Johnson" },
    { name: "Oracle", logo: "https://via.placeholder.com/200x100/F80000/white?text=Oracle" },
    { name: "IBM", logo: "https://via.placeholder.com/200x100/054ADA/white?text=IBM" },
    { name: "Dell Technologies", logo: "https://via.placeholder.com/200x100/007DB8/white?text=Dell" }
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

    if (partnersElement) {
      observer.observe(partnersElement);
    }

    return () => {
      if (partnersElement) {
        observer.unobserve(partnersElement);
      }
    };
  });
</script>

<section
  id="partners"
  bind:this={partnersElement}
  class="relative section-padding bg-white dark:bg-gray-900 overflow-hidden"
>
  <!-- Background Elements -->
  <div class="absolute inset-0 opacity-5">
    <div class="absolute top-20 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl animate-pulse-gentle"></div>
    <div class="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float"></div>
    <div class="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl animate-bounce-gentle" style="animation-delay: 2s;"></div>
    <div class="absolute bottom-1/3 right-1/3 w-48 h-48 bg-green-400/20 rounded-full blur-3xl animate-float" style="animation-delay: 4s;"></div>
  </div>

  <div class="container relative z-10">
    <!-- Page Header -->
    <div class="text-center mb-16" class:animate-slide-up={visible}>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
        Our
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
          Partners
        </span>
      </h1>
    </div>

    <!-- Partners Logo Grid -->
    <div class="mb-16" class:animate-slide-up={visible} style="animation-delay: 0.2s;">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {#each partners as partner, i}
          <div 
            class="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-100 dark:border-gray-700 cursor-pointer flex items-center justify-center"
            style="animation-delay: {0.3 + i * 0.05}s;"
          >
            <img 
              src={partner.logo} 
              alt={partner.name}
              class="max-w-full h-auto object-contain group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>