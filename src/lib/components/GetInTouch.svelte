<script>
  import { onMount } from "svelte";

  let getInTouchElement;
  let visible = false;

  // Form state
  let formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  let isSubmitting = false;
  let submitStatus = "";

  // Form submission handler
  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    submitStatus = "";

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form on success
      formData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      };

      submitStatus = "success";
    } catch (error) {
      submitStatus = "error";
    } finally {
      isSubmitting = false;
    }
  }

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

    if (getInTouchElement) {
      observer.observe(getInTouchElement);
    }

    return () => {
      if (getInTouchElement) {
        observer.unobserve(getInTouchElement);
      }
    };
  });
</script>

<section
  id="get-in-touch"
  bind:this={getInTouchElement}
  class="relative section-padding bg-white dark:bg-gray-900 overflow-hidden"
>
  <!-- Background Elements -->
  <div class="absolute inset-0 opacity-5">
    <div
      class="absolute top-20 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
    ></div>
  </div>

  <div class="container relative z-10">
    <!-- Section Header -->
    <div class="text-center mb-16" class:animate-slide-up={visible}>
      <div
        class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6"
      >
        <span class="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
        Contact Us
      </div>
      <h2
        class="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
      >
        Get In
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600"
        >
          Touch
        </span>
      </h2>
      <p
        class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
      >
        Ready to transform your business with our innovative technology
        solutions? Let's start the conversation.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- Left Side: Contact Info -->
      <div
        class="space-y-8"
        class:animate-slide-up={visible}
        style="animation-delay: 0.2s;"
      >
        <div
          class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Let's Build Something Amazing Together
          </h3>

          <div class="space-y-6">
            <!-- Email -->
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center"
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">
                  Email Us
                </h4>
                <p class="text-gray-600 dark:text-gray-300">
                  enquiry@adeptus-tech.com
                </p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">
                  Call Us
                </h4>
                <p class="text-gray-600 dark:text-gray-300">04-3972569</p>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center"
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">
                  Visit Us
                </h4>
                <p class="text-gray-600 dark:text-gray-300">
                  Adeptus Technologies L.L.C. <br /> 207, Al Makhawi Building,
                  Umm Hurair Road,<br /> Dubai, U.A.E. P.O. Box 27630
                </p>
              </div>
            </div>
          </div>

          <!-- Response Time -->
          <div
            class="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-200 dark:border-primary-800"
          >
            <div class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h5 class="font-semibold text-gray-900 dark:text-white">
                  Quick Response
                </h5>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side: Contact Form -->
      <div
        class="relative"
        class:animate-slide-up={visible}
        style="animation-delay: 0.4s;"
      >
        <div
          class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Send Us a Message
          </h3>

          <form on:submit={handleSubmit} class="space-y-6">
            <!-- Name Fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="firstName"
                  class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  bind:value={formData.firstName}
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:scale-105 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:shadow-md"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  for="lastName"
                  class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  bind:value={formData.lastName}
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <!-- Contact Fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="email"
                  class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  bind:value={formData.phone}
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>
            </div>

            <!-- Message Field -->
            <div>
              <label
                for="message"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                bind:value={formData.message}
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors resize-none"
                placeholder="Tell us about your project requirements and how we can help you..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:animate-pulse-gentle"
            >
              {#if isSubmitting}
                <div class="flex items-center justify-center space-x-2">
                  <svg
                    class="w-5 h-5 animate-spin"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span>Sending Message...</span>
                </div>
              {:else}
                Send Message
              {/if}
            </button>

            <!-- Status Messages -->
            {#if submitStatus === "success"}
              <div
                class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
              >
                <div class="flex items-center space-x-2">
                  <svg
                    class="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="text-green-600 dark:text-green-400 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              </div>
            {/if}

            {#if submitStatus === "error"}
              <div
                class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
              >
                <div class="flex items-center space-x-2">
                  <svg
                    class="w-5 h-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <p class="text-red-600 dark:text-red-400 font-medium">
                    Sorry, there was an error sending your message. Please try
                    again.
                  </p>
                </div>
              </div>
            {/if}
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
