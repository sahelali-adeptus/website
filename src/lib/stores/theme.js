import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
  // Default to dark theme
  const { subscribe, set, update } = writable('dark');

  return {
    subscribe,
    set,
    update,
    toggle: () => update(theme => theme === 'light' ? 'dark' : 'light'),
    init: () => {
      if (browser) {
        // Always set to dark theme
        set('dark');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
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