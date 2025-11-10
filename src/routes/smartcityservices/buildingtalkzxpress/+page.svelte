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
  <title>Building Talkz Xpress on-prem IoT Platform - Adeptus Technologies</title>
  <meta
    name="description"
    content="Building Talkz Xpress on-prem IoT Platform - An evolutionary solution that bridges the gap between legacy BMS and Smart IoT based buildings operations."
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
        Building Talkz Xpress
        <span class="text-white block md:inline">on-prem IoT Platform</span>
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={visible}
        style="animation-delay: 0.2s;"
      >
        An evolutionary solution that bridges the gap between legacy BMS and Smart IoT based buildings operations
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
        Enterprise IoT Platform Features in a Compact Solution
      </h2>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed mb-6">
          Adeptus Technologies has developed a customized state of the art IoT Platform to manage and control all standalone Building Management Systems (BMS) known as 'Building Talkz'. The platform is an Enterprise level application that brings communities, buildings and utilities under one umbrella. With our existing software capabilities in proptech and genuine passion to bring revolutionary, cost-effective Smart Buildings technology to our customers, we have brought in all the features of an enterprise IoT platform to a small scaled version.
        </p>

        <p class="text-xl leading-relaxed">
          Using our rich experience in System integration, latest IoT and Building technology and successful Building Talkz deployments, we have developed 'Building Talkz Xpress' a small scaled version of our enterprise platform to effectively cater to our customers needs with standalone/on-premises requirements. With BT Xpress, all our customers get a chance to experience advanced features of an IoT platform without the need to invest in enterprise IT infrastructure.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Building Talkz Xpress Platform Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Building Talkz Xpress Platform
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed mb-6">
          A 'Building management system' or BMS, in short, is a revolutionary centralized computer-based control system installed in buildings which would enable remote control & monitoring of all the building's Mechanical and Electrical Equipment. The BMS has become a critical component in managing energy demand, monitoring performance of the equipment and in maximising energy efficiency.
        </p>

        <p class="text-xl leading-relaxed">
          But in often cases, property owners have to be dependent on Legacy BMS Suppliers and hardwares to maintain their facility. The legacy upgrades are costly and do not come with desired flexibility, customization and adaptation with latest available technologies, Hence the BMS systems are siloed without the attention that it needs to drive operational and Energy Savings. For eg, the BMS alone, is unable to identify the exact problem in a particular equipment within the ecosystem even if all the data is available to identify faults and take corrective actions.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Product Features Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Product Features and Functionalities
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p class="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          Building Talkz Xpress provides property owners the right tool to achieve desired functionalities in BMS. They get to choose from the following product features and functionalities mix:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Event/Work Order Management -->
        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">
                Event/Work Order Management
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Streamlined event tracking and work order processing
              </p>
            </div>
          </div>
        </div>

        <!-- Holistic customizable User-Friendly UI -->
        <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-green-800 dark:text-green-300 mb-2">
                Holistic Customizable User-Friendly UI
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Intuitive interface designed for ease of use and customization
              </p>
            </div>
          </div>
        </div>

        <!-- Real-time Operational Dashboard -->
        <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-purple-800 dark:text-purple-300 mb-2">
                Real-time Operational Dashboard
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Live monitoring and control capabilities
              </p>
            </div>
          </div>
        </div>

        <!-- Energy Analytics -->
        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2">
                Energy Analytics
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Comprehensive energy consumption analysis and optimization
              </p>
            </div>
          </div>
        </div>

        <!-- Measurement and Verification -->
        <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-red-800 dark:text-red-300 mb-2">
                Measurement and Verification
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Accurate measurement and performance verification
              </p>
            </div>
          </div>
        </div>

        <!-- Fault Detection and Diagnostics (FDD) -->
        <div class="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-teal-800 dark:text-teal-300 mb-2">
                Fault Detection and Diagnostics (FDD)
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Advanced fault detection and diagnostic capabilities
              </p>
            </div>
          </div>
        </div>

        <!-- Role Management -->
        <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-2">
                Role Management
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                User access control and role-based permissions
              </p>
            </div>
          </div>
        </div>

        <!-- Mobile Application -->
        <div class="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-pink-800 dark:text-pink-300 mb-2">
                Mobile Application
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Mobile access for remote monitoring and control
              </p>
            </div>
          </div>
        </div>

        <!-- Advanced Billing and Normalization -->
        <div class="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-orange-800 dark:text-orange-300 mb-2">
                Advanced Billing and Normalization
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Sophisticated billing systems and data normalization
              </p>
            </div>
          </div>
        </div>

        <!-- Weather API Integration -->
        <div class="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-cyan-800 dark:text-cyan-300 mb-2">
                Weather API Integration and Analysis
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Weather data integration for enhanced analytics
              </p>
            </div>
          </div>
        </div>

        <!-- Predictive Analysis -->
        <div class="bg-lime-50 dark:bg-lime-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-lime-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-lime-800 dark:text-lime-300 mb-2">
                Predictive Analysis
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                AI-powered predictive analytics for proactive management
              </p>
            </div>
          </div>
        </div>

        <!-- Machine Learning -->
        <div class="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                Machine Learning
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Advanced ML algorithms for intelligent operations
              </p>
            </div>
          </div>
        </div>

        <!-- Asset Documentation Management -->
        <div class="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-violet-800 dark:text-violet-300 mb-2">
                Asset Documentation Management
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Comprehensive asset documentation and management
              </p>
            </div>
          </div>
        </div>

        <!-- Reports and Dashboards Creation -->
        <div class="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-rose-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-rose-800 dark:text-rose-300 mb-2">
                Reports and Dashboards Creation
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Custom report generation and dashboard creation
              </p>
            </div>
          </div>
        </div>

        <!-- Email, SMS Alerts Configuration -->
        <div class="bg-sky-50 dark:bg-sky-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-3 h-3 bg-sky-600 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 class="text-lg font-bold text-sky-800 dark:text-sky-300 mb-2">
                Email, SMS Alerts Configuration
              </h3>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                Flexible notification and alert management systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Support Services Section -->
<section class="section-padding bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Comprehensive Support Services
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed text-center mb-8">
          To entrust customers with this technology, we provide installation, maintenance and Software upgrade support such that our customers enjoy new features with new releases of BT Xpress.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Installation Support -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Installation Support
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Professional installation and setup services
            </p>
          </div>

          <!-- Maintenance Services -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Maintenance Services
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Ongoing maintenance and technical support
            </p>
          </div>

          <!-- Software Upgrades -->
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Software Upgrades
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Regular software updates and new feature releases
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="section-padding bg-white dark:bg-gray-900">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Perfect for Any Scale
        </h2>
        <div class="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div class="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p class="text-xl leading-relaxed text-center mb-8">
          Whether you are a small building owner or FM company servicing even one or hundreds of buildings, looking for enhancing building operations and energy savings with localized IoT capabilities look no further than BT Xpress.
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