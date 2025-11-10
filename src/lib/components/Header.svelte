<script>
  import { onMount } from "svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import logoUrl from "../../images/logo.png";

  let isMenuOpen = false;
  let isScrolled = false;
  let isSupportDropdownOpen = false;
  let isSmartCityDropdownOpen = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };

    const handleClickOutside = (event) => {
      if (isSupportDropdownOpen && !event.target.closest('.support-dropdown-container')) {
        isSupportDropdownOpen = false;
      }
      if (isSmartCityDropdownOpen && !event.target.closest('.smartcity-dropdown-container')) {
        isSmartCityDropdownOpen = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  function toggleSupportDropdown() {
    isSupportDropdownOpen = !isSupportDropdownOpen;
  }

  function closeSupportDropdown() {
    isSupportDropdownOpen = false;
  }

  function toggleSmartCityDropdown() {
    isSmartCityDropdownOpen = !isSmartCityDropdownOpen;
  }

  function closeSmartCityDropdown() {
    isSmartCityDropdownOpen = false;
  }
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl '
    : 'bg-transparent'}"
>
  <nav class="container">
    <div class="flex items-center justify-between h-16 lg:h-20">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a
          href="/"
          class="transition-all duration-300 hover:scale-105 transform"
        >
          <img src={logoUrl} alt="Adeptus" class="h-8 lg:h-10" />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-8">
        <div class="relative group smartcity-dropdown-container">
          <button
            on:click={toggleSmartCityDropdown}
            class="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 relative group flex items-center"
          >
            Smart City Services
            <svg
              class="ml-1 h-4 w-4 transition-transform duration-200 {isSmartCityDropdownOpen ? 'rotate-180' : ''}"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </button>
          
          {#if isSmartCityDropdownOpen}
            <div 
              class="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50"
              on:mouseleave={closeSmartCityDropdown}
            >
              <div class="py-2">
                <a
                  href="/smartcityservices/smart-building-solutions"
                  on:click={closeSmartCityDropdown}
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Smart Building Solutions
                </a>
                <a
                  href="/smartcityservices/connectedfacilities"
                  on:click={closeSmartCityDropdown}
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Connected Facilities Management
                </a>
                <a
                  href="/smartcityservices/managedenergyservices"
                  on:click={closeSmartCityDropdown}
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Managed Energy Services
                </a>
                <a
                  href="/smartcityservices/smartmobileassets"
                  on:click={closeSmartCityDropdown}
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Smart Mobile Assets Management
                </a>
                <a
                  href="/smartcityservices/smartfixedassets"
                  on:click={closeSmartCityDropdown}
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Smart Fixed Assets Management
                </a>
                <a
                  href="/smartcityservices/smartparking"
                  on:click={closeSmartCityDropdown}
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Smart Parking Management
                </a>
                <a
                  href="/smartcityservices/smartwaste"
                  on:click={closeSmartCityDropdown}
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Smart Waste Management
                </a>
              </div>
            </div>
          {/if}
        </div>
        <div class="relative group support-dropdown-container">
          <button
            on:click={toggleSupportDropdown}
            class="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 relative group flex items-center"
          >
            Support & Team
            <svg
              class="ml-1 h-4 w-4 transition-transform duration-200 {isSupportDropdownOpen ? 'rotate-180' : ''}"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </button>
          
          {#if isSupportDropdownOpen}
            <div 
              class="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50"
              on:mouseleave={closeSupportDropdown}
            >
              <div class="py-2">
                <a
                  href="/ourexperts"
                  on:click={closeSupportDropdown}
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Our Experts
                </a>
                <a
                  href="/24x7ccc"
                  on:click={closeSupportDropdown}
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  24x7 Command & Control Center
                </a>
              </div>
            </div>
          {/if}
        </div>
        <a
          href="/partners"
          class="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 relative group"
        >
          Partners
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
        <a
          href="/news"
          class="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 relative group"
        >
          News
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
        <a
          href="#about"
          class="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 relative group"
        >
          Contact Us
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
        <ThemeToggle />
      </div>

      <!-- Mobile menu button -->
      <div class="lg:hidden flex items-center space-x-2">
        <ThemeToggle />
        <button
          on:click={toggleMenu}
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            class:hidden={isMenuOpen}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            class="h-6 w-6"
            class:hidden={!isMenuOpen}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    {#if isMenuOpen}
      <div class="lg:hidden animate-slide-down">
        <div
          class="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
        >
          <div class="space-y-1">
            <div class="px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">
              Smart City Services
            </div>
            <div class="ml-4 space-y-1">
              <a
                href="/smartcityservices/smart-building-solutions"
                on:click={closeMenu}
                class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Smart Building Solutions
              </a>
              <a
                href="/smartcityservices/connectedfacilities"
                on:click={closeMenu}
                class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Connected Facilities Management
              </a>
              <a
                href="/smartcityservices/managedenergyservices"
                on:click={closeMenu}
                class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Managed Energy Services
              </a>
              <a
                href="/smartcityservices/smartmobileassets"
                on:click={closeMenu}
                class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Smart Mobile Assets Management
              </a>
              <a
                href="/smartcityservices/smartfixedassets"
                on:click={closeMenu}
                class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Smart Fixed Assets Management
              </a>
              <a
                href="/smartcityservices/smartparking"
                on:click={closeMenu}
                class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Smart Parking Management
              </a>
              <a
                href="/smartcityservices/smartwaste"
                on:click={closeMenu}
                class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Smart Waste Management
              </a>
            </div>
          </div>
          <div class="space-y-1">
            <div class="px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300">
              Support & Team
            </div>
            <div class="ml-4 space-y-1">
              <a
                href="/ourexperts"
                on:click={closeMenu}
                class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Our Experts
              </a>
              <a
                href="/24x7ccc"
                on:click={closeMenu}
                class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                24x7 Command & Control Center
              </a>
            </div>
          </div>
          <a
            href="#insights"
            on:click={closeMenu}
            class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            Insights
          </a>
          <a
            href="#about"
            on:click={closeMenu}
            class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            on:click={closeMenu}
            class="block px-3 py-2 text-base font-medium btn btn-primary mt-4"
          >
            Contact
          </a>
        </div>
      </div>
    {/if}
  </nav>
</header>
