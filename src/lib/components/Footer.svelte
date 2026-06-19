<script>
  import { reveal } from '$lib/actions/reveal.js';
  import logoUrl from "../../images/logo.png";

  const year = new Date().getFullYear();

  const cols = [
    {
      label: "IoT Solutions",
      links: [
        {
          text: "Smart Building",
          href: "/smartcityservices/smart-building-solutions",
        },
        {
          text: "Connected Facilities",
          href: "/smartcityservices/connectedfacilities",
        },
        {
          text: "Energy Services",
          href: "/smartcityservices/managedenergyservices",
        },
        { text: "Mobile Assets", href: "/smartcityservices/smartmobileassets" },
      ],
    },
    {
      label: "Smart Mgmt",
      links: [
        { text: "Fixed Assets", href: "/smartcityservices/smartfixedassets" },
        { text: "Smart Parking", href: "/smartcityservices/smartparking" },
        { text: "Waste Management", href: "/smartcityservices/smartwaste" },
        { text: "All Solutions", href: "/smartcityservices" },
      ],
    },
    {
      label: "Company",
      links: [
        { text: "Our Experts", href: "/ourexperts" },
        { text: "Command Center", href: "/24x7ccc" },
        { text: "Partners", href: "/partners" },
        { text: "News & Updates", href: "/news" },
      ],
    },
    {
      label: "Contact",
      links: [
        { text: "Get in Touch", href: "#get-in-touch" },
        {
          text: "enquiry@adeptus-tech.com",
          href: "mailto:enquiry@adeptus-tech.com",
        },
        { text: "+971 4 397 2569", href: "tel:+97143972569" },
        { text: "Dubai, U.A.E.", href: "#" },
      ],
    },
  ];
</script>

<footer class="ft-wrap">
  <!-- ── BG layers ── -->
  <div class="ft-grid" aria-hidden="true"></div>
  <div class="ft-glow" aria-hidden="true"></div>
  <div class="ft-scanlines" aria-hidden="true"></div>

  <!-- ── Hero word — bleeds into bar ── -->
  <div class="ft-hero" aria-hidden="true" use:reveal={{ delay: 0, y: 50, scale: 0.96, duration: 1200, threshold: 0.05 }}>
    <span class="ft-word">ADEPTUS</span>
  </div>

  <!-- ── Bottom bar ── -->
  <div class="ft-bar">
    <div class="ft-bar-inner" use:reveal={{ delay: 200, y: 30, duration: 900, threshold: 0.05 }}>
      <!-- logo + status -->
      <div class="ft-brand">
        <img src={logoUrl} alt="Adeptus" class="ft-logo" draggable="false" />
        <div class="ft-status">
          <span class="ft-status-dot"></span>
          <span class="ft-status-txt">24/7 Command Center Active</span>
        </div>
      </div>

      <!-- link columns -->
      <nav class="ft-cols" aria-label="Footer navigation">
        {#each cols as col}
          <div class="ft-col">
            <p class="ft-col-label">{col.label}</p>
            <ul class="ft-col-list">
              {#each col.links as lnk}
                <li>
                  <a href={lnk.href} class="ft-link">{lnk.text}</a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </nav>

      <!-- social icons -->
      <div class="ft-social">
        <a
          href="https://www.linkedin.com/company/adeptus-technologies-llc/"
          target="_blank"
          rel="noopener noreferrer"
          class="ft-soc-btn"
          aria-label="LinkedIn"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
        <a
          href="mailto:enquiry@adeptus-tech.com"
          class="ft-soc-btn"
          aria-label="Email"
        >
          <svg
            width="14"
            height="12"
            viewBox="0 0 24 20"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="16" rx="2" />
            <path d="M2 4l10 8 10-8" />
          </svg>
        </a>
        <a href="tel:+97143972569" class="ft-soc-btn" aria-label="Phone">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- copyright strip -->
    <div class="ft-copy" use:reveal={{ delay: 350, y: 16, duration: 700, threshold: 0.05 }}>
      <span>© {year} Adeptus Technologies L.L.C. All rights reserved.</span>
      <span class="ft-copy-sep">·</span>
      <span>207, Al Makhawi Building, Umm Hurair Road, Dubai, U.A.E.</span>
    </div>
  </div>
</footer>

<style>
  /* ── Wrap ─────────────────────────────────────────────────────────────────── */
  .ft-wrap {
    position: relative;
    width: 100%;
    background: #111616;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* ── BG layers ────────────────────────────────────────────────────────────── */
  .ft-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        rgba(244, 94, 42, 0.025) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(244, 94, 42, 0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }
  .ft-glow {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80vw;
    height: 55vh;
    background: radial-gradient(
      ellipse at 50% 0%,
      rgba(244, 94, 42, 0.13) 0%,
      transparent 62%
    );
    pointer-events: none;
  }
  .ft-scanlines {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      to bottom,
      transparent 0,
      transparent 3px,
      rgba(0, 0, 0, 0.08) 3px,
      rgba(0, 0, 0, 0.08) 4px
    );
    pointer-events: none;
  }

  /* ── Hero word ────────────────────────────────────────────────────────────── */
  .ft-hero {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: clamp(2.5rem, 6vh, 5rem) 0 0;
    overflow: hidden;
    /* small overlap — bar covers only the very bottom of the letters */
    margin-bottom: -2.2vw;
  }

  .ft-word {
    display: block;
    font-size: clamp(4.5rem, 14.5vw, 20rem);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    pointer-events: none;
    /* dark-on-dark 3D emboss: lighter at top, fades toward baseline */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.04) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Bottom bar ───────────────────────────────────────────────────────────── */
  .ft-bar {
    position: relative;
    z-index: 3; /* sits above hero text — cuts through the letters */
    width: 100%;
  }

  .ft-bar-inner {
    max-width: 1240px;
    margin: 0 auto;
    padding: clamp(2rem, 4vh, 3.5rem) clamp(1.5rem, 4vw, 4rem);
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: clamp(2rem, 4vw, 5rem);
    align-items: start;
  }

  /* Brand */
  .ft-brand {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .ft-logo {
    height: clamp(28px, 3.5vw, 42px);
    width: auto;
    opacity: 0.9;
  }
  .ft-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .ft-status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 6px rgba(74, 222, 128, 0.7);
    animation: ftPulse 2.5s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes ftPulse {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
  }
  .ft-status-txt {
    font-size: clamp(0.44rem, 0.64vw, 0.54rem);
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.28);
    font-weight: 400;
  }

  /* Link columns */
  .ft-cols {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(1rem, 2.5vw, 2.5rem);
  }
  .ft-col {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }
  .ft-col-label {
    font-size: clamp(0.44rem, 0.65vw, 0.54rem);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
    font-weight: 600;
    margin: 0;
  }
  .ft-col-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }
  .ft-link {
    font-size: clamp(0.54rem, 0.8vw, 0.68rem);
    color: rgba(255, 255, 255, 0.25);
    font-weight: 300;
    text-decoration: none;
    transition: color 0.25s ease;
    display: block;
  }
  .ft-link:hover {
    color: rgba(244, 94, 42, 0.85);
  }

  /* Social */
  .ft-social {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }
  .ft-soc-btn {
    width: 32px;
    height: 32px;
    border-radius: 2px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.28);
    text-decoration: none;
    transition:
      border-color 0.25s,
      color 0.25s,
      background 0.25s;
  }
  .ft-soc-btn:hover {
    border-color: rgba(244, 94, 42, 0.5);
    color: #f45e2a;
    background: rgba(244, 94, 42, 0.06);
  }

  /* Copyright strip */
  .ft-copy {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0.9rem clamp(1.5rem, 4vw, 4rem);
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    display: flex;
    align-items: center;
    gap: 0.8rem;
    flex-wrap: wrap;
    font-size: clamp(0.42rem, 0.62vw, 0.52rem);
    color: rgba(255, 255, 255, 0.14);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 400;
  }
  .ft-copy-sep {
    color: rgba(244, 94, 42, 0.3);
  }

  /* ── Responsive ───────────────────────────────────────────────────────────── */
  @media (max-width: 1024px) {
    .ft-bar-inner {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .ft-social {
      flex-direction: row;
    }
  }
  @media (max-width: 640px) {
    .ft-cols {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
    .ft-copy {
      justify-content: center;
      text-align: center;
    }
  }
</style>
