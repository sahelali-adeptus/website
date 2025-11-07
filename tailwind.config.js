/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fac293",
          100: "#fabc89",
          200: "#faae6e",
          300: "#faae6e",
          400: "#f7a865",
          500: "#fab173",
          600: "#f2780f",
          700: "#f0862b",
          800: "#f68f37",
          900: "#f77405",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-in-out",
        "slide-up": "slideUp 1.2s ease-in-out",
        "slide-left": "slideLeft 1.5s ease-out",
        "slide-right": "slideRight 1.5s ease-out",
        "slide-down": "slideDown 1.2s ease-in-out",
        "zoom-in": "zoomIn 1s ease-out",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "pulse-gentle": "pulseGentle 3s ease-in-out infinite",
        "rotate-slow": "rotateSlow 8s linear infinite",
        "scale-hover": "scaleHover 0.3s ease-in-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "number-pop": "numberPop 0.6s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        pulseGentle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scaleHover: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(251, 177, 115, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(251, 177, 115, 0.6)" },
        },
        numberPop: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
