<script>
  import { onMount } from "svelte";

  let partnersElement;
  let visible = false;

  const partners = [
    {
      name: "Microsoft",
      logo: "https://static.wixstatic.com/media/ea99b6_fcc5d6625df1490db0907e17bd9c19a5~mv2.jpg/v1/fill/w_280,h_251,al_c,lg_1,q_80,enc_avif,quality_auto/microsoft-1.jpg",
      url: "https://www.microsoft.com/en-gulf/",
    },
    {
      name: "Ingram Micro",
      logo: "https://static.wixstatic.com/media/ea99b6_bb260cb7b07b481194f5a0c987d86819~mv2.png/v1/fill/w_280,h_251,al_c,lg_1,q_85,enc_avif,quality_auto/Ingram-Micro_0-1.png",
      url: "https://www.ingrammicro.com/IMD_WASWeb/jsp/login/corporate.jsp",
    },
    {
      name: "Tridium",
      logo: "https://static.wixstatic.com/media/ea99b6_23ae823e802f42e49712189b027287c3~mv2.png/v1/fill/w_280,h_247,al_c,lg_1,q_85,enc_avif,quality_auto/tridium_new-1.png",
      url: "https://www.tridium.com/",
    },
    {
      name: "Tyrrell Products",
      logo: "https://static.wixstatic.com/media/ea99b6_359fac57fbd341a7b2ff58863a5d627d~mv2.jpg/v1/fill/w_280,h_251,al_c,lg_1,q_80,enc_avif,quality_auto/tyrrell-products-1.jpg",
      url: "https://www.tyrrellproducts.com/",
    },
    {
      name: "EasyIO",
      logo: "https://static.wixstatic.com/media/ea99b6_26812b46cef2435780d1f3aa2baa7aca~mv2.png/v1/fill/w_402,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EasyIO.png",
      url: "https://www.easyio.eu/",
    },
    {
      name: "Nuance",
      logo: "https://static.wixstatic.com/media/ea99b6_2f955d384e0746ed82ef11bef53f72c5~mv2.png/v1/fill/w_280,h_251,al_c,lg_1,q_85,enc_avif,quality_auto/NuanceLogo_200x200_k-200x180-1.png",
      url: "https://www.nuance.com/index.html",
    },
    {
      name: "MAMAC Systems",
      logo: "https://static.wixstatic.com/media/ea99b6_1f53f3c32d0f4bb6953d4384635e794c~mv2.jpg/v1/fill/w_568,h_120,al_c,lg_1,q_80,enc_avif,quality_auto/MAMAC.jpg",
      url: "http://www.mamacsys.com/",
    },
    {
      name: "Sontay",
      logo: "https://static.wixstatic.com/media/ea99b6_ce595e667e334b8c90cc0f3c3fbbf4c6~mv2.png/v1/fill/w_455,h_196,al_c,lg_1,q_85,enc_avif,quality_auto/Sontay.png",
      url: "https://www.sontay.com/en-gb/",
    },
    {
      name: "SAP",
      logo: "https://static.wixstatic.com/media/ea99b6_9640485a60e34cde9cc4573774a7fa51~mv2.jpg/v1/fill/w_280,h_251,al_c,lg_1,q_80,enc_avif,quality_auto/sap-partner-1.jpg",
      url: "https://www.sap.com/mena/index.html",
    },
    {
      name: "Utimaco",
      logo: "https://static.wixstatic.com/media/ea99b6_b416d177977f46bfb7703c0d9f0baa27~mv2.jpg/v1/fill/w_280,h_251,al_c,lg_1,q_80,enc_avif,quality_auto/utimaco-1.jpg",
      url: "https://www.utimaco.com/",
    },
    {
      name: "Cisco",
      logo: "https://static.wixstatic.com/media/ea99b6_a38d249cd0dc46eaa3333e76b52ac377~mv2.jpg/v1/fill/w_280,h_251,al_c,lg_1,q_80,enc_avif,quality_auto/cisco-1.jpg",
      url: "https://www.cisco.com/c/en_ae/index.html",
    },
    {
      name: "Dell Technologies",
      logo: "https://static.wixstatic.com/media/ea99b6_96494b0cb68741cb9618cec1195d27c3~mv2.jpg/v1/fill/w_280,h_252,al_c,lg_1,q_80,enc_avif,quality_auto/dell-1.jpg",
      url: "https://www.dell.com/en-us",
    },
    {
      name: "Covidence",
      logo: "https://static.wixstatic.com/media/ea99b6_b831c24edee343a595cc41db3c7ece8f~mv2.jpg/v1/fill/w_280,h_251,al_c,lg_1,q_80,enc_avif,quality_auto/covidence1-1.jpg",
      url: "https://www.covidence.org/home",
    },
    {
      name: "BTT",
      logo: "https://static.wixstatic.com/media/ea99b6_0b3feffd9f3c49e581f4cf75a6f76b8f~mv2.jpg/v1/fill/w_280,h_251,al_c,lg_1,q_80,enc_avif,quality_auto/btt1-1.jpg",
    },
    {
      name: "Belcom",
      logo: "https://static.wixstatic.com/media/ea99b6_369b9ac437624849a23178c773c9f3d5~mv2.jpg/v1/fill/w_280,h_251,al_c,lg_1,q_80,enc_avif,quality_auto/belcom2471.jpg",
    },
    {
      name: "Redscan",
      logo: "https://static.wixstatic.com/media/ea99b6_e9c3c8a22fa141b980ad66eb68a96bf1~mv2.jpg/v1/fill/w_280,h_251,al_c,lg_1,q_80,enc_avif,quality_auto/redscan.jpg",
      url: "https://www.redscan.com/",
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
    <div
      class="absolute top-20 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl animate-pulse-gentle"
    ></div>
    <div
      class="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float"
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
    <!-- Page Header -->
    <div class="text-center mb-20" class:animate-slide-up={visible}>
      <h1
        class="mt-12 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight capitalize"
      >
        Our Technology
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600"
        >
          Partners
        </span>
      </h1>
      <p
        class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
      >
        We collaborate with industry-leading technology partners to deliver
        cutting-edge IoT and smart building solutions
      </p>
      <div
        class="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mt-8 rounded-full"
      ></div>
    </div>

    <!-- Partners Logo Grid -->
    <div
      class="mb-20"
      class:animate-slide-up={visible}
      style="animation-delay: 0.2s;"
    >
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8"
      >
        {#each partners as partner, i}
          <div
            class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center overflow-hidden"
            style="animation-delay: {0.3 + i * 0.1}s;"
          >
            <!-- Gradient overlay on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
            ></div>

            <!-- Glowing border on hover -->
            <div
              class="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/20 via-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
            ></div>

            {#if partner.url}
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                class="relative z-10 flex items-center justify-center w-full h-28 group-hover:scale-110 transition-transform duration-500"
                title="Visit {partner.name}"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  class="max-w-full max-h-full object-contain filter transition-all duration-500 group-hover:brightness-110 group-hover:drop-shadow-lg"
                  loading="lazy"
                />
              </a>
            {:else}
              <div
                class="relative z-10 flex items-center justify-center w-full h-28 group-hover:scale-110 transition-transform duration-500"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  class="max-w-full max-h-full object-contain filter transition-all duration-500 group-hover:brightness-110 group-hover:drop-shadow-lg"
                  loading="lazy"
                />
              </div>
            {/if}

            <!-- Partner name tooltip -->
            <div
              class="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900/90 dark:bg-white/90 text-white dark:text-gray-900 text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
            >
              {partner.name}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Partnership CTA Section -->
    <div
      class="text-center"
      class:animate-slide-up={visible}
      style="animation-delay: 0.4s;"
    >
      <div
        class="bg-gradient-to-r from-primary-50 via-purple-50 to-blue-50 dark:from-primary-900/20 dark:via-purple-900/20 dark:to-blue-900/20 rounded-3xl p-12 border border-primary-200/50 dark:border-primary-800/50"
      >
        <div class="max-w-4xl mx-auto">
          <h3
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 capitalize"
          >
            Ready to Partner with Us?
          </h3>
          <p
            class="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
          >
            Join our ecosystem of technology partners and help us deliver
            innovative IoT solutions to businesses worldwide
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/ourexperts"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
