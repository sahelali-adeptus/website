<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  export const ssr = false;
</script>

<Header />
<main>
  <slot />
</main>
<Footer />
