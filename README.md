# Adeptus SvelteKit Website

A modern, responsive website for Adeptus Tech built with SvelteKit and TailwindCSS.

## Features

- 🚀 Built with SvelteKit for optimal performance
- 🎨 Styled with TailwindCSS for rapid development
- 📱 Fully responsive design
- ⚡ Fast loading with optimized assets
- 🎭 Smooth animations and transitions
- 🔍 SEO optimized
- 📧 Contact form with validation

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: TailwindCSS
- **Language**: JavaScript
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd adeptus-svelte
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run svelte-check for type checking

## Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable Svelte components
│   ├── stores/         # Svelte stores for state management
│   └── utils/          # Utility functions
├── routes/             # SvelteKit routes
├── app.html           # Main HTML template
└── app.css            # Global styles and TailwindCSS imports
```

## Components

- **Hero**: Main landing section with call-to-action
- **Services**: Digital services showcase
- **LearningTech**: Custom learning technology solutions
- **Testimonials**: Client testimonials and statistics
- **Contact**: Contact form and company information
- **Header**: Navigation with mobile menu
- **Footer**: Site footer with links and locations

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Custom primary colors
  }
}
```

### Content
Update component content in the respective files under `src/lib/components/`.

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `build/` directory, ready for deployment to any static hosting service.

## License

This project is licensed under the MIT License.