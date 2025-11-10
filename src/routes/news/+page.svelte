<script>
  // News articles data
  const newsArticles = [
    {
      title: "Top FM Supplier of 2019",
      date: "Dec 12, 2019",
      subheading: "facilitiesmanagement December 2019 - www.fm-middleeast.com",
      excerpt: "Adeptus Technologies recognized as a leading facilities management supplier, focusing on IoT platform innovations and smart building solutions.",
      slug: "top-fm-supplier-of-2019"
    },
    {
      title: "UAE-based Adeptus Technologies helps the FM sector through its IoT platform",
      date: "Oct 27, 2019",
      subheading: "facilitiesmanagement October 2019",
      excerpt: "Adeptus Technologies has developed a wide range of applications using IoT technology that can be used in the FM industry, featuring their intelligent Building Talkz platform.",
      slug: "uae-based-adeptus-technologies-helps-the-fm-sector-through-its-iot-platform"
    },
    {
      title: "Evidence Capture solution for the IoT operations space",
      date: "Jul 7, 2019",
      subheading: "SkySoft-ATM, Switzerland has recently deployed 'Evidence Capture' solutions at Adeptus Technologies",
      excerpt: "Partnership between Adeptus Technologies and SkySoft-ATM brings advanced workstation recording capabilities to IoT command and control centers in the Middle East.",
      slug: "evidence-capture-solution-for-the-iot-operations-space"
    }
  ];
</script>

<svelte:head>
  <title>News - Adeptus Technologies</title>
  <meta
    name="description"
    content="Stay updated with the latest news, achievements, and announcements from Adeptus Technologies - your trusted IoT and Smart City solutions partner."
  />
  <meta
    name="keywords"
    content="Adeptus news, IoT news, smart city updates, technology announcements, facilities management news"
  />
  <meta
    property="og:title"
    content="News - Adeptus Technologies"
  />
  <meta
    property="og:description"
    content="Latest news and updates from Adeptus Technologies in IoT and Smart City solutions."
  />
  <meta property="og:type" content="website" />
</svelte:head>

<main class="min-h-screen bg-gray-50 dark:bg-gray-900">
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 py-24">
    <div class="container">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Latest News
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Stay updated with our latest achievements, product launches, and industry insights
        </p>
      </div>
    </div>
  </section>

  <!-- News Articles -->
  <section class="py-16">
    <div class="container">
      <div class="max-w-4xl mx-auto">
        <div class="space-y-8">
          {#each newsArticles as article}
            <article class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div class="p-8">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex-1">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <a href="/news/{article.slug}" class="block">
                        {article.title}
                      </a>
                    </h2>
                    <p class="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {article.subheading}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {article.date}
                    </p>
                  </div>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <a
                  href="/news/{article.slug}"
                  class="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Read Full Article
                  <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          {/each}
        </div>
      </div>
    </div>
  </section>
</main>