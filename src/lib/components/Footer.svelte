<script>
  import logoUrl from "../../images/logo.png";
</script>

<footer
  class="relative bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 text-white overflow-hidden"
>
  <!-- Background Effects -->
  <div class="absolute inset-0">
    <!-- Gradient mesh background -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-purple-900/20 to-blue-900/20"
    ></div>

    <!-- Animated background elements -->
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-pulse"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
      style="animation-delay: 2s;"
    ></div>
    <div
      class="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-pulse"
      style="animation-delay: 4s;"
    ></div>

    <!-- Grid pattern overlay -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:50px_50px] opacity-20"
    ></div>
  </div>

  <div class="container relative z-10 section-padding">
    <!-- Main Footer Content -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
    >
      <!-- Company Info -->
      <div class="lg:col-span-1 space-y-6">
        <div class="group">
          <img
            src={logoUrl}
            alt="Adeptus"
            class="h-10 lg:h-12 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div class="space-y-4">
          <p class="text-gray-300 leading-relaxed">
            Pioneering IoT solutions and digital innovation for smart cities and
            modern enterprises across the GCC region.
          </p>
          <div class="flex items-center space-x-2 text-sm text-primary-400">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>24/7 Command Center Active</span>
          </div>
        </div>

        <!-- Social Media -->
        <div class="space-y-4">
          <h5
            class="text-sm font-semibold text-gray-200 uppercase tracking-wider"
          >
            Connect With Us
          </h5>
          <div class="flex space-x-3">
            <a
              href="https://www.linkedin.com/company/adeptus-technologies"
              target="_blank"
              rel="noopener noreferrer"
              class="group w-10 h-10 bg-gray-800/50 backdrop-blur rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-3"
            >
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
            <a
              href="mailto:enquiry@adeptus-tech.com"
              class="group w-10 h-10 bg-gray-800/50 backdrop-blur rounded-xl flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110 hover:rotate-3"
            >
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-white transition-colors"
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
            </a>
            <a
              href="tel:+97143972569"
              class="group w-10 h-10 bg-gray-800/50 backdrop-blur rounded-xl flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:rotate-3"
            >
              <svg
                class="h-5 w-5 text-gray-400 group-hover:text-white transition-colors"
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
            </a>
          </div>
        </div>
      </div>

      <!-- Solutions -->
      <div class="space-y-6">
        <div class="flex items-center space-x-3">
          <div
            class="w-8 h-8 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg flex items-center justify-center"
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h4 class="text-lg font-semibold capitalize text-white">
            IoT Solutions
          </h4>
        </div>
        <div class="grid grid-cols-1 gap-3">
          <a
            href="/smartcityservices/smart-building-solutions"
            class="group flex items-center space-x-3 py-1 hover:text-white transition-all duration-300"
          >
            <div
              class="w-2 h-2 bg-primary-400 rounded-full group-hover:bg-primary-300 transition-colors"
            ></div>
            <span
              class="text-gray-300 group-hover:text-white transition-colors text-sm"
              >Smart Building Solutions</span
            >
          </a>
          <a
            href="/smartcityservices/connectedfacilities"
            class="group flex items-center space-x-3 py-1 hover:text-white transition-all duration-300"
          >
            <div
              class="w-2 h-2 bg-primary-400 rounded-full group-hover:bg-primary-300 transition-colors"
            ></div>
            <span
              class="text-gray-300 group-hover:text-white transition-colors text-sm"
              >Connected Facilities</span
            >
          </a>
          <a
            href="/smartcityservices/managedenergyservices"
            class="group flex items-center space-x-3 py-1 hover:text-white transition-all duration-300"
          >
            <div
              class="w-2 h-2 bg-primary-400 rounded-full group-hover:bg-primary-300 transition-colors"
            ></div>
            <span
              class="text-gray-300 group-hover:text-white transition-colors text-sm"
              >Energy Services</span
            >
          </a>
          <a
            href="/smartcityservices/smartmobileassets"
            class="group flex items-center space-x-3 py-1 hover:text-white transition-all duration-300"
          >
            <div
              class="w-2 h-2 bg-primary-400 rounded-full group-hover:bg-primary-300 transition-colors"
            ></div>
            <span
              class="text-gray-300 group-hover:text-white transition-colors text-sm"
              >Mobile Assets</span
            >
          </a>
        </div>
      </div>

      <!-- More Solutions -->
      <div class="space-y-6">
        <div class="flex items-center space-x-3">
          <div
            class="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h4 class="text-lg font-semibold capitalize text-white">
            Smart Management
          </h4>
        </div>
        <div class="grid grid-cols-1 gap-3">
          <a
            href="/smartcityservices/smartfixedassets"
            class="group flex items-center space-x-3 py-1 hover:text-white transition-all duration-300"
          >
            <div
              class="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors"
            ></div>
            <span
              class="text-gray-300 group-hover:text-white transition-colors text-sm"
              >Fixed Assets</span
            >
          </a>
          <a
            href="/smartcityservices/smartparking"
            class="group flex items-center space-x-3 py-1 hover:text-white transition-all duration-300"
          >
            <div
              class="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors"
            ></div>
            <span
              class="text-gray-300 group-hover:text-white transition-colors text-sm"
              >Smart Parking</span
            >
          </a>
          <a
            href="/smartcityservices/smartwaste"
            class="group flex items-center space-x-3 py-1 hover:text-white transition-all duration-300"
          >
            <div
              class="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors"
            ></div>
            <span
              class="text-gray-300 group-hover:text-white transition-colors text-sm"
              >Waste Management</span
            >
          </a>
          <a
            href="/smartcityservices"
            class="group flex items-center space-x-3 py-1 hover:text-white transition-all duration-300"
          >
            <div
              class="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors"
            ></div>
            <span
              class="text-gray-300 group-hover:text-white transition-colors text-sm"
              >All Solutions</span
            >
          </a>
        </div>
      </div>

      <!-- Company -->
      <div class="space-y-6">
        <div class="flex items-center space-x-3">
          <div
            class="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center"
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h4 class="text-lg font-semibold capitalize text-white">Company</h4>
        </div>
        <div class="grid grid-cols-1 gap-3">
          <a
            href="/ourexperts"
            class="group flex items-center space-x-3 py-1 hover:text-white transition-all duration-300"
          >
            <div
              class="w-2 h-2 bg-emerald-400 rounded-full group-hover:bg-emerald-300 transition-colors"
            ></div>
            <span
              class="text-gray-300 group-hover:text-white transition-colors text-sm"
              >Our Experts</span
            >
          </a>
          <a
            href="/24x7ccc"
            class="group flex items-center space-x-3 py-1 hover:text-white transition-all duration-300"
          >
            <div
              class="w-2 h-2 bg-emerald-400 rounded-full group-hover:bg-emerald-300 transition-colors"
            ></div>
            <span
              class="text-gray-300 group-hover:text-white transition-colors text-sm"
              >Command Center</span
            >
          </a>
          <a
            href="/partners"
            class="group flex items-center space-x-3 py-1 hover:text-white transition-all duration-300"
          >
            <div
              class="w-2 h-2 bg-emerald-400 rounded-full group-hover:bg-emerald-300 transition-colors"
            ></div>
            <span
              class="text-gray-300 group-hover:text-white transition-colors text-sm"
              >Partners</span
            >
          </a>
          <a
            href="/news"
            class="group flex items-center space-x-3 py-1 hover:text-white transition-all duration-300"
          >
            <div
              class="w-2 h-2 bg-emerald-400 rounded-full group-hover:bg-emerald-300 transition-colors"
            ></div>
            <span
              class="text-gray-300 group-hover:text-white transition-colors text-sm"
              >News & Updates</span
            >
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="border-t border-white/10 pt-8">
      <div
        class="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0"
      >
        <!-- Contact Info Cards -->
        <div class="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <div
            class="group bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:bg-white/10"
          >
            <div class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-primary-400"
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
                <p class="text-xs text-gray-400 uppercase tracking-wider">
                  Location
                </p>
                <p class="text-sm text-white font-medium">Dubai, UAE</p>
              </div>
            </div>
          </div>

          <div
            class="group bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:bg-white/10"
          >
            <div class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-green-400"
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
                <p class="text-xs text-gray-400 uppercase tracking-wider">
                  Contact
                </p>
                <p class="text-sm text-white font-medium">+971 4 397 2569</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="text-center lg:text-right">
          <p class="text-gray-400 text-sm">
            © 2019 by Adeptus Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
