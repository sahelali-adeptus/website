<script>
  import { onMount } from "svelte";
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";

  export const ssr = false;

  let progress = 0;

  onMount(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress = max > 0 ? (window.scrollY / max) * 100 : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  });
</script>

<!-- Scroll progress bar -->
<div class="sp" style="width:{progress}%" aria-hidden="true"></div>

<main>
  <slot />
</main>
<Footer />

<style>
  .sp {
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    z-index: 9999;
    background: linear-gradient(to right, #9ad993, rgba(225, 231, 92, 0.7));
    transition: width 80ms linear;
    pointer-events: none;
  }
</style>
