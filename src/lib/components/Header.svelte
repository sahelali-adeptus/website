<script>
  import { onMount } from "svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import logoUrl from "../../images/logo.png";

  let isMenuOpen = false;
  let isScrolled = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
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
        <a
          href="#digital-services"
          class="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 relative group"
        >
          Smart City Services
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
        <a
          href="#learning-tech"
          class="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 relative group"
        >
          Services & Support
          <span
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
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
          href="#about"
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
          <a
            href="#digital-services"
            on:click={closeMenu}
            class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            Digital Services
          </a>
          <a
            href="#learning-tech"
            on:click={closeMenu}
            class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            Learning Technology
          </a>
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
