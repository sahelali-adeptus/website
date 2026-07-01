<script>
  import { onMount } from "svelte";
  import logoUrl from "../../images/logo.png";

  let isMenuOpen = false;
  let isScrolled = false;
  let isSupportDropdownOpen = false;
  let isSmartCityDropdownOpen = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    const handleClickOutside = (event) => {
      if (isSupportDropdownOpen && !event.target.closest('.support-dropdown-container')) {
        isSupportDropdownOpen = false;
      }
      if (isSmartCityDropdownOpen && !event.target.closest('.smartcity-dropdown-container')) {
        isSmartCityDropdownOpen = false;
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  });

  function toggleMenu() { isMenuOpen = !isMenuOpen; }
  function closeMenu() { isMenuOpen = false; }
  function toggleSupportDropdown() { isSupportDropdownOpen = !isSupportDropdownOpen; }
  function closeSupportDropdown() { isSupportDropdownOpen = false; }
  function toggleSmartCityDropdown() { isSmartCityDropdownOpen = !isSmartCityDropdownOpen; }
  function closeSmartCityDropdown() { isSmartCityDropdownOpen = false; }
</script>

<header class="hdr" class:hdr-scrolled={isScrolled}>
  <nav class="hdr-nav">

    <!-- Logo -->
    <a href="/" class="hdr-logo" aria-label="Beconix AI home">
      <img src={logoUrl} alt="Adeptus" class="hdr-logo-img" />
    </a>

    <!-- Desktop nav links -->
    <div class="hdr-links">

      <div class="hdr-drop-wrap smartcity-dropdown-container">
        <button
          class="hdr-link hdr-link-btn"
          on:click={toggleSmartCityDropdown}
          aria-expanded={isSmartCityDropdownOpen}
          type="button"
        >
          Smart City Services
          <svg class="hdr-chevron" class:hdr-chevron-open={isSmartCityDropdownOpen} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        {#if isSmartCityDropdownOpen}
          <div class="hdr-dropdown" on:mouseleave={closeSmartCityDropdown}>
            <a href="/smartcityservices/smart-building-solutions" on:click={closeSmartCityDropdown} class="hdr-drop-item">Smart Building Solutions</a>
            <a href="/smartcityservices/connectedfacilities" on:click={closeSmartCityDropdown} class="hdr-drop-item">Connected Facilities Management</a>
            <a href="/smartcityservices/managedenergyservices" on:click={closeSmartCityDropdown} class="hdr-drop-item">Managed Energy Services</a>
            <a href="/smartcityservices/smartmobileassets" on:click={closeSmartCityDropdown} class="hdr-drop-item">Smart Mobile Assets</a>
            <a href="/smartcityservices/smartfixedassets" on:click={closeSmartCityDropdown} class="hdr-drop-item">Smart Fixed Assets</a>
            <a href="/smartcityservices/smartparking" on:click={closeSmartCityDropdown} class="hdr-drop-item">Smart Parking Management</a>
            <a href="/smartcityservices/smartwaste" on:click={closeSmartCityDropdown} class="hdr-drop-item">Smart Waste Management</a>
          </div>
        {/if}
      </div>

      <div class="hdr-drop-wrap support-dropdown-container">
        <button
          class="hdr-link hdr-link-btn"
          on:click={toggleSupportDropdown}
          aria-expanded={isSupportDropdownOpen}
          type="button"
        >
          Support & Team
          <svg class="hdr-chevron" class:hdr-chevron-open={isSupportDropdownOpen} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        {#if isSupportDropdownOpen}
          <div class="hdr-dropdown" on:mouseleave={closeSupportDropdown}>
            <a href="/ourexperts" on:click={closeSupportDropdown} class="hdr-drop-item">Our Experts</a>
            <a href="/24x7ccc" on:click={closeSupportDropdown} class="hdr-drop-item">24x7 Command & Control Center</a>
          </div>
        {/if}
      </div>

      <a href="/partners" class="hdr-link">Partners</a>
      <a href="/news" class="hdr-link">News</a>
    </div>

    <!-- Right actions -->
    <div class="hdr-right">
      <a href="#intelligent-ai" class="hdr-cta">Request Demo</a>
      <button
        class="hdr-burger"
        on:click={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        type="button"
      >
        {#if isMenuOpen}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
        {:else}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        {/if}
      </button>
    </div>

  </nav>

  <!-- Mobile menu -->
  {#if isMenuOpen}
    <div class="hdr-mobile">

      <div class="hdr-mob-section">
        <p class="hdr-mob-label">Smart City Services</p>
        <a href="/smartcityservices/smart-building-solutions" on:click={closeMenu} class="hdr-mob-link">Smart Building Solutions</a>
        <a href="/smartcityservices/connectedfacilities" on:click={closeMenu} class="hdr-mob-link">Connected Facilities Management</a>
        <a href="/smartcityservices/managedenergyservices" on:click={closeMenu} class="hdr-mob-link">Managed Energy Services</a>
        <a href="/smartcityservices/smartmobileassets" on:click={closeMenu} class="hdr-mob-link">Smart Mobile Assets Management</a>
        <a href="/smartcityservices/smartfixedassets" on:click={closeMenu} class="hdr-mob-link">Smart Fixed Assets Management</a>
        <a href="/smartcityservices/smartparking" on:click={closeMenu} class="hdr-mob-link">Smart Parking Management</a>
        <a href="/smartcityservices/smartwaste" on:click={closeMenu} class="hdr-mob-link">Smart Waste Management</a>
      </div>

      <div class="hdr-mob-section">
        <p class="hdr-mob-label">Support & Team</p>
        <a href="/ourexperts" on:click={closeMenu} class="hdr-mob-link">Our Experts</a>
        <a href="/24x7ccc" on:click={closeMenu} class="hdr-mob-link">24x7 Command & Control Center</a>
      </div>

      <a href="/partners" on:click={closeMenu} class="hdr-mob-link hdr-mob-standalone">Partners</a>
      <a href="/news" on:click={closeMenu} class="hdr-mob-link hdr-mob-standalone">News</a>

      <a href="#intelligent-ai" on:click={closeMenu} class="hdr-mob-cta">Request Demo</a>

    </div>
  {/if}
</header>

<style>
  /* ── Header shell ──────────────────────────────────────────────────────── */
  .hdr {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 50;
    padding: 0.9rem 1.25rem;
    transition: padding 0.3s ease;
  }
  .hdr-scrolled { padding-top: 0.6rem; padding-bottom: 0.6rem; }

  /* ── Glass nav bar ─────────────────────────────────────────────────────── */
  .hdr-nav {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0.65rem 1.4rem;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(8, 10, 22, 0.6);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
    transition:
      background 0.3s ease,
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }
  .hdr-scrolled .hdr-nav {
    background: rgba(5, 7, 18, 0.92);
    border-color: rgba(154, 217, 147, 0.1);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.45),
      0 0 0 1px rgba(154, 217, 147, 0.04);
  }

  /* top accent gradient line */
  .hdr-nav::before {
    content: '';
    position: absolute;
    top: 0; left: 20%; right: 20%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(154, 217, 147, 0.25), rgba(225, 231, 92, 0.18), transparent);
    border-radius: 1px;
    pointer-events: none;
  }
  .hdr-nav { position: relative; }

  /* ── Logo ──────────────────────────────────────────────────────────────── */
  .hdr-logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    text-decoration: none;
  }
  .hdr-logo-img {
    height: 1.85rem;
    width: auto;
    transition: opacity 0.2s, filter 0.2s;
  }
  .hdr-logo:hover .hdr-logo-img {
    opacity: 0.82;
    filter: drop-shadow(0 0 8px rgba(154, 217, 147, 0.3));
  }

  /* ── Desktop nav links ─────────────────────────────────────────────────── */
  .hdr-links {
    display: flex;
    align-items: center;
    gap: 0.15rem;
    flex: 1;
  }

  .hdr-link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.42rem 0.8rem;
    border-radius: 8px;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    background: transparent;
    cursor: pointer;
    transition: color 0.18s, background 0.18s;
    white-space: nowrap;
  }
  .hdr-link-btn {
    border: none;
    font-family: inherit;
  }
  .hdr-link:hover { color: rgba(255, 255, 255, 0.88); background: rgba(255, 255, 255, 0.05); }
  .hdr-link:focus-visible { outline: 2px solid rgba(154, 217, 147, 0.5); outline-offset: 2px; }

  .hdr-chevron {
    width: 13px; height: 13px;
    transition: transform 0.2s ease;
    opacity: 0.55;
    flex-shrink: 0;
  }
  .hdr-chevron-open { transform: rotate(180deg); opacity: 0.8; }

  /* ── Dropdown ──────────────────────────────────────────────────────────── */
  .hdr-drop-wrap { position: relative; }

  .hdr-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    min-width: 252px;
    background: rgba(6, 8, 20, 0.97);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 0.45rem;
    box-shadow:
      0 24px 64px rgba(0, 0, 0, 0.55),
      0 0 0 1px rgba(154, 217, 147, 0.05);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    z-index: 60;
    animation: dropIn 0.18s cubic-bezier(0.22, 1, 0.36, 1);
  }
  @keyframes dropIn {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .hdr-drop-item {
    display: block;
    padding: 0.52rem 0.85rem;
    border-radius: 8px;
    font-size: 0.76rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.48);
    text-decoration: none;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
  }
  .hdr-drop-item:hover {
    color: #9ad993;
    background: rgba(154, 217, 147, 0.07);
  }
  .hdr-drop-item:focus-visible {
    outline: 2px solid rgba(154, 217, 147, 0.5);
    outline-offset: 2px;
  }

  /* ── Right actions ─────────────────────────────────────────────────────── */
  .hdr-right {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    margin-left: auto;
    flex-shrink: 0;
  }

  /* CTA button */
  .hdr-cta {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    background: linear-gradient(120deg, rgba(154, 217, 147, 0.18) 0%, rgba(225, 231, 92, 0.15) 100%);
    border: 1px solid rgba(154, 217, 147, 0.38);
    color: #9ad993;
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    transition:
      background 0.22s,
      border-color 0.22s,
      box-shadow 0.22s,
      transform 0.22s;
  }
  .hdr-cta:hover {
    background: linear-gradient(120deg, rgba(154, 217, 147, 0.28) 0%, rgba(225, 231, 92, 0.24) 100%);
    border-color: rgba(154, 217, 147, 0.6);
    box-shadow: 0 0 20px rgba(154, 217, 147, 0.18), 0 0 40px rgba(154, 217, 147, 0.08);
    transform: translateY(-1px);
  }
  .hdr-cta:focus-visible { outline: 2px solid #9ad993; outline-offset: 3px; }

  /* Hamburger */
  .hdr-burger {
    display: none;
    width: 36px; height: 36px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.65);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: background 0.18s, border-color 0.18s, color 0.18s;
    flex-shrink: 0;
  }
  .hdr-burger svg { width: 17px; height: 17px; }
  .hdr-burger:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.9);
  }
  .hdr-burger:focus-visible { outline: 2px solid rgba(154, 217, 147, 0.5); outline-offset: 2px; }

  /* ── Mobile menu ───────────────────────────────────────────────────────── */
  .hdr-mobile {
    max-width: 1280px;
    margin: 0.55rem auto 0;
    padding: 1rem;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(5, 7, 18, 0.97);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    animation: dropIn 0.2s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .hdr-mob-section {
    padding-bottom: 0.6rem;
    margin-bottom: 0.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .hdr-mob-label {
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(154, 217, 147, 0.55);
    padding: 0.5rem 0.75rem 0.4rem;
    margin: 0;
  }

  .hdr-mob-link {
    display: block;
    padding: 0.52rem 0.75rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.48);
    text-decoration: none;
    transition: color 0.15s, background 0.15s;
    cursor: pointer;
  }
  .hdr-mob-link:hover {
    color: rgba(255, 255, 255, 0.88);
    background: rgba(255, 255, 255, 0.04);
  }
  .hdr-mob-standalone {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.55);
  }

  .hdr-mob-cta {
    display: block;
    margin-top: 0.6rem;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    background: linear-gradient(120deg, rgba(154, 217, 147, 0.16) 0%, rgba(225, 231, 92, 0.13) 100%);
    border: 1px solid rgba(154, 217, 147, 0.32);
    color: #9ad993;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.22s, border-color 0.22s;
  }
  .hdr-mob-cta:hover {
    background: linear-gradient(120deg, rgba(154, 217, 147, 0.26) 0%, rgba(225, 231, 92, 0.22) 100%);
    border-color: rgba(154, 217, 147, 0.52);
  }

  /* ── Responsive ────────────────────────────────────────────────────────── */
  @media (max-width: 1024px) {
    .hdr-links { display: none; }
    .hdr-cta   { display: none; }
    .hdr-burger { display: flex; }
  }

  @media (max-width: 600px) {
    .hdr { padding: 0.55rem 0.75rem; }
    .hdr-nav { padding: 0.55rem 1rem; border-radius: 12px; }
    .hdr-mobile { border-radius: 12px; }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .hdr-nav, .hdr-link, .hdr-cta, .hdr-burger, .hdr-chevron { transition: none; }
    .hdr-dropdown, .hdr-mobile { animation: none; }
  }
</style>
