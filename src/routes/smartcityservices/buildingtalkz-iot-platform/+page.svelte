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
  <title>Building Talkz IoT Platform as a Service - Adeptus Technologies</title>
  <meta
    name="description"
    content="Building Talkz Platform as a Service - A paradigm shift in efficient control and management of smart buildings with subscription-based models."
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
        Building Talkz Platform
        <span class="text-white block md:inline">as a Service</span>
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={visible}
        style="animation-delay: 0.2s;"
      >
        A paradigm shift in efficient control and management of smart buildings
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

<!-- Introduction Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
      >
        Powerful Tools for Facilities Managers
      </h2>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed mb-6">
          At Adeptus Technologies LLC, we are constantly listening to you, the Facilities Managers, and our sincere endeavor is to offer you powerful tools to meet day-to-day challenges of an overall operations landscape. We try to keep things simple, specifically to align with your growth strategy and are now able to offer our proven Building Talkz IoT platform as a Service.
        </p>

        <p class="text-xl leading-relaxed text-center font-semibold text-primary-600 dark:text-primary-400">
          Just like our IoT platform, our engagement too can be amenable and we can adopt to different budgets by offering easy Subscription-based models.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Features Selection Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Pick and Choose Your Features
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p class="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          In a key stake-holder profile of Facilities Manager, you can now pick and choose from the following features and functionalities mix:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Event/Work Order Management -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Event/Work Order Management
              </h3>
            </div>
          </div>
        </div>

        <!-- Real-time Operational Dashboard -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Real-time Operational Dashboard
              </h3>
            </div>
          </div>
        </div>

        <!-- Energy Analysis -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Energy Analysis
              </h3>
            </div>
          </div>
        </div>

        <!-- Measurement and Verification -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Measurement and Verification
              </h3>
            </div>
          </div>
        </div>

        <!-- Fault Detection and Diagnostics (FDD) -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Fault Detection and Diagnostics (FDD)
              </h3>
            </div>
          </div>
        </div>

        <!-- Building Comfort Analysis -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Building Comfort Analysis
              </h3>
            </div>
          </div>
        </div>

        <!-- Equipment Profiling -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Equipment Profiling
              </h3>
            </div>
          </div>
        </div>

        <!-- Performance Comparison -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Performance Comparison
              </h3>
            </div>
          </div>
        </div>

        <!-- Equipment Availability Analysis -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Equipment Availability Analysis
              </h3>
            </div>
          </div>
        </div>

        <!-- Predictive Analysis -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Predictive Analysis
              </h3>
            </div>
          </div>
        </div>

        <!-- Machine Learning -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-lime-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Machine Learning
              </h3>
            </div>
          </div>
        </div>

        <!-- Maintenance Management -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Maintenance Management
              </h3>
            </div>
          </div>
        </div>

        <!-- Reports and Dashboards Creation -->
        <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Reports and Dashboards Creation
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Cloud Partnership Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Enterprise-Grade Reliability
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed text-center mb-8">
          To add credibility, we also partner with one of the world's leading and well-known cloud services providers, thereby ensuring 99.99% uptime.
        </p>

        <p class="text-xl leading-relaxed text-center mb-8">
          Whether you are a building owner or FM company servicing even one or hundreds of buildings, our Subscription models would be the way to go.
        </p>

        <div class="text-center">
          <p class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            For more information:
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="mailto:sales@adeptus-tech.com" class="text-primary-600 dark:text-primary-400 hover:underline font-medium">
              sales@adeptus-tech.com
            </a>
            <span class="text-gray-500">OR</span>
            <a href="#contact" class="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Building Talkz IoT Platform Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Building Talkz IoT Platform
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed mb-6">
          A 'Building management system' or BMS, in short, is a revolutionary centralized computer-based control system installed in buildings which would enable remote control & monitoring of all the building's Mechanical and Electrical Equipment. The BMS has become a critical component in managing energy demand, monitoring performance of the equipment and in maximising energy efficiency.
        </p>

        <p class="text-xl leading-relaxed mb-6">
          This system helps building managers to understand how the buildings operate and allows them to control, adjust and optimize their performance. But the BMS itself has its own set of shortcomings, the most important one being – constant and physical presence of BMS operators at the particular location, to constantly monitor alerts from the BMS. The BMS alone, is unable to identify the exact problem in a particular equipment within the eco-system.
        </p>

        <div class="text-center mb-8">
          <p class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            To schedule a demo:
          </p>
          <a href="mailto:enquiry@adeptus-tech.com" class="text-primary-600 dark:text-primary-400 hover:underline font-medium text-lg">
            enquiry@adeptus-tech.com
          </a>
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
        <!-- Open Platform Integration -->
        <div class="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3">
                Open Platform Integration
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Open platform which allows integration and communication with most popular BMS brands/manufactures. Centralized monitoring capability while performing complex engineering analysis from varied data.
              </p>
            </div>
          </div>
        </div>

        <!-- Feedback Mechanism -->
        <div class="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                Expert Feedback & Machine Learning
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Feedback mechanism enabling domain experts to feed in their suggestions and improves the machine learning process of the system.
              </p>
            </div>
          </div>
        </div>

        <!-- Automated Team Selection -->
        <div class="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-purple-800 dark:text-purple-300 mb-3">
                Automated Team Selection
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Automate team selections based on expertise required to mitigate events. Efficient usage of manpower enabling FM teams to distribute demand to field activities.
              </p>
            </div>
          </div>
        </div>

        <!-- SLA Management -->
        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-xl shadow-lg">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-3">
                Service Level Agreement Management
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Service level agreement management becomes a possibility using efficient job dispatch and trace capabilities.
              </p>
            </div>
          </div>
        </div>

        <!-- CAFM Integration -->
        <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-xl shadow-lg md:col-span-2">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-red-800 dark:text-red-300 mb-3">
                Flexible CAFM System Integration
              </h3>
              <p class="text-gray-700 dark:text-gray-300">
                Building Talkz has the flexibility to enable inbuilt CAFM systems to coordinate workforces, vendors and other stakeholders. The platform can be integrated with existing asset management systems as well as existing CAFM systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>