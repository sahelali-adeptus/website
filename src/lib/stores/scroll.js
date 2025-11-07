import { writable } from 'svelte/store';

export const scrollY = writable(0);
export const innerHeight = writable(0);
export const outerHeight = writable(0);