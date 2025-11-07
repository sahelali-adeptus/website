import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				console.warn(`Prerender error: ${path} (${message})`);
			},
			handleMissingId: ({ id, path, message }) => {
				console.warn(`Missing ID warning: ${id} on ${path} (${message})`);
			}
		}
	}
};

export default config;