import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
  // Default to light theme
  const { subscribe, set, update } = writable('light');

  return {
    subscribe,
    set,
    update,
    toggle: () => update(theme => theme === 'light' ? 'dark' : 'light'),
    init: () => {
      if (browser) {
        // Check localStorage first
        const stored = localStorage.getItem('theme');
        if (stored) {
          set(stored);
          document.documentElement.classList.toggle('dark', stored === 'dark');
          return;
        }
        
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const systemTheme = prefersDark ? 'dark' : 'light';
        set(systemTheme);
        document.documentElement.classList.toggle('dark', systemTheme === 'dark');
      }
    },
    setTheme: (theme) => {
      set(theme);
      if (browser) {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
      }
    }
  };
}

export const theme = createThemeStore();