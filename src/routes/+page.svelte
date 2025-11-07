<script>
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import AboutUs from "$lib/components/AboutUs.svelte";
  import OurServices from "$lib/components/OurServices.svelte";
  import GetInTouch from "$lib/components/GetInTouch.svelte";
</script>

<svelte:head>
  <title>Adeptus - Technology Solutions & Digital Innovation</title>
  <meta
    name="description"
    content="Achieve your digital ambitions with Adeptus. We provide technology strategy, custom learning solutions, and innovative web & mobile development for enterprises and startups."
  />
  <meta
    name="keywords"
    content="technology consulting, digital transformation, learning technology, custom software development, UX design"
  />
  <meta
    property="og:title"
    content="Adeptus - Technology Solutions & Digital Innovation"
  />
  <meta
    property="og:description"
    content="Achieve your digital ambitions with expert technology consulting and innovative solutions."
  />
  <meta property="og:type" content="website" />
</svelte:head>

<Hero />
<About />
<AboutUs />
<OurServices />
<GetInTouch />
