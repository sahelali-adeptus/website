<script>
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  export const ssr = false;
</script>

<main>
  <slot />
</main>
<Footer />
