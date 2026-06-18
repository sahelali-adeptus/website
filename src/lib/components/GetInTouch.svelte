<script>
  import { onMount } from "svelte";

  let sectionEl;
  let vis = false;

  let formData = { name: "", email: "", phone: "", message: "" };
  let isSubmitting = false;
  let submitStatus = "";

  async function handleSubmit(e) {
    e.preventDefault();
    isSubmitting = true;
    submitStatus = "";
    try {
      await new Promise((r) => setTimeout(r, 2000));
      formData = { name: "", email: "", phone: "", message: "" };
      submitStatus = "success";
    } catch {
      submitStatus = "error";
    } finally {
      isSubmitting = false;
    }
  }

  onMount(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) vis = true;
      },
      { threshold: 0.08 },
    );
    if (sectionEl) io.observe(sectionEl);
    return () => io.disconnect();
  });
</script>

<section id="get-in-touch" class="git-wrap" bind:this={sectionEl}>
  <!-- bg — About.svelte style -->
  <div class="git-grid" aria-hidden="true"></div>
  <div class="git-glow" aria-hidden="true"></div>
  <div class="git-scanlines" aria-hidden="true"></div>

  <!-- section HUD corners -->
  <div class="git-hud" aria-hidden="true">
    <span class="git-hud-tl"></span>
    <span class="git-hud-tr"></span>
    <span class="git-hud-bl"></span>
    <span class="git-hud-br"></span>
  </div>

  <div class="git-inner">
    <!-- ══ LEFT ══ -->
    <div class="git-left" class:git-vis={vis}>
      <!-- header with left accent bar -->
      <div class="git-head">
        <span class="git-head-bar"></span>
        <div>
          <p class="git-eyebrow">How to contact us</p>
          <h2 class="git-title">
            Get in Touch<span class="git-title-dot">.</span>
          </h2>
        </div>
      </div>

      <!-- three info blocks -->
      <div class="git-info-row">
        <!-- Address -->
        <div class="git-info">
          <div class="git-info-head">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4z"
                stroke="#F45E2A"
                stroke-width="1.2"
                fill="none"
              />
              <circle cx="7" cy="5" r="1.4" fill="#F45E2A" />
            </svg>
            <span class="git-info-label">Address</span>
          </div>
          <p class="git-info-val">
            207, Al Makhawi Building,<br />Umm Hurair Road,<br />Dubai, U.A.E.
          </p>
        </div>
        <!-- Phone -->
        <div class="git-info">
          <div class="git-info-head">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 2.5C2 2.5 3.5 1 4.5 2.5L5.5 4.5C5.5 4.5 4 5.5 4.5 6.5C5 7.5 7.5 10 8.5 10.5C9.5 11 10 9.5 10 9.5L12 10.5C13.5 11.5 12 13 12 13C8 13 1 6 2 2.5Z"
                stroke="#F45E2A"
                stroke-width="1.2"
                fill="none"
              />
            </svg>
            <span class="git-info-label">Phone</span>
          </div>
          <p class="git-info-val">+971 4 397 2569</p>
        </div>
        <!-- Email -->
        <div class="git-info">
          <div class="git-info-head">
            <svg width="13" height="10" viewBox="0 0 14 10" fill="none">
              <rect
                x="1"
                y="1"
                width="12"
                height="8"
                rx="1.5"
                stroke="#F45E2A"
                stroke-width="1.2"
              />
              <path d="M1 2.5L7 6L13 2.5" stroke="#F45E2A" stroke-width="1.2" />
            </svg>
            <span class="git-info-label">E-mail</span>
          </div>
          <p class="git-info-val">enquiry@adeptus-tech.com</p>
        </div>
      </div>

      <!-- form section header -->
      <div class="git-form-head">
        <span class="git-fl-accent"></span>
        <span class="git-fl-label">Send us a message</span>
      </div>

      <!-- form -->
      <form class="git-form" on:submit={handleSubmit} novalidate>
        <div class="git-fields-2">
          <div class="git-field">
            <input
              type="text"
              id="git-name"
              bind:value={formData.name}
              placeholder="Your Name"
              required
              class="git-input"
            />
            <div class="git-input-line"></div>
          </div>
          <div class="git-field">
            <input
              type="email"
              id="git-email"
              bind:value={formData.email}
              placeholder="Your E-mail"
              required
              class="git-input"
            />
            <div class="git-input-line"></div>
          </div>
        </div>

        <div class="git-field">
          <input
            type="tel"
            id="git-phone"
            bind:value={formData.phone}
            placeholder="Phone Number (optional)"
            class="git-input"
          />
          <div class="git-input-line"></div>
        </div>

        <div class="git-field">
          <textarea
            id="git-msg"
            bind:value={formData.message}
            placeholder="Your Message"
            required
            rows="3"
            class="git-input git-textarea"
          ></textarea>
          <div class="git-input-line"></div>
        </div>

        <div class="git-form-footer">
          <button type="submit" class="git-btn" disabled={isSubmitting}>
            {#if isSubmitting}
              <svg
                class="git-spin"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="rgba(255,255,255,.25)"
                  stroke-width="2"
                />
                <path
                  d="M12 2 A10 10 0 0 1 22 12"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              Sending…
            {:else}
              Send Message
              <svg width="14" height="10" viewBox="0 0 16 12" fill="none">
                <path
                  d="M1 6H15M10 1L15 6L10 11"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            {/if}
          </button>

          {#if submitStatus === "success"}
            <p class="git-status git-ok">
              Message sent — we'll be in touch within 24 hours.
            </p>
          {/if}
          {#if submitStatus === "error"}
            <p class="git-status git-err">
              Something went wrong. Please try again.
            </p>
          {/if}
        </div>
      </form>
    </div>

    <!-- ══ RIGHT: stylised map panel ══ -->
    <div class="git-right" class:git-vis={vis}>
      <!-- world map image -->
      <img
        src="/world-map.png"
        alt=""
        class="git-map-img"
        aria-hidden="true"
        draggable="false"
      />
      <div class="git-map-overlay" aria-hidden="true"></div>

      <!-- map grid lines (hidden) -->
      <div class="git-map-bg-svg" aria-hidden="true">
        <svg
          class="git-map-svg"
          viewBox="0 0 420 520"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <!-- horizontal streets -->
          <line
            x1="0"
            y1="80"
            x2="420"
            y2="80"
            stroke="rgba(255,255,255,.06)"
            stroke-width="1"
          />
          <line
            x1="0"
            y1="160"
            x2="420"
            y2="160"
            stroke="rgba(255,255,255,.05)"
            stroke-width="1"
          />
          <line
            x1="0"
            y1="240"
            x2="420"
            y2="240"
            stroke="rgba(255,255,255,.07)"
            stroke-width="1"
          />
          <line
            x1="0"
            y1="310"
            x2="420"
            y2="310"
            stroke="rgba(255,255,255,.04)"
            stroke-width="1"
          />
          <line
            x1="0"
            y1="390"
            x2="420"
            y2="390"
            stroke="rgba(255,255,255,.06)"
            stroke-width="1"
          />
          <line
            x1="0"
            y1="460"
            x2="420"
            y2="460"
            stroke="rgba(255,255,255,.04)"
            stroke-width="1"
          />
          <!-- vertical streets -->
          <line
            x1="60"
            y1="0"
            x2="60"
            y2="520"
            stroke="rgba(255,255,255,.05)"
            stroke-width="1"
          />
          <line
            x1="140"
            y1="0"
            x2="140"
            y2="520"
            stroke="rgba(255,255,255,.06)"
            stroke-width="1"
          />
          <line
            x1="220"
            y1="0"
            x2="220"
            y2="520"
            stroke="rgba(255,255,255,.04)"
            stroke-width="1"
          />
          <line
            x1="310"
            y1="0"
            x2="310"
            y2="520"
            stroke="rgba(255,255,255,.06)"
            stroke-width="1"
          />
          <line
            x1="375"
            y1="0"
            x2="375"
            y2="520"
            stroke="rgba(255,255,255,.04)"
            stroke-width="1"
          />
          <!-- diagonal highway -->
          <line
            x1="0"
            y1="350"
            x2="280"
            y2="0"
            stroke="rgba(255,255,255,.07)"
            stroke-width="1.5"
          />
          <line
            x1="140"
            y1="520"
            x2="420"
            y2="100"
            stroke="rgba(255,255,255,.05)"
            stroke-width="1.5"
          />
          <!-- main road highlight -->
          <line
            x1="0"
            y1="240"
            x2="420"
            y2="240"
            stroke="rgba(244,94,42,.12)"
            stroke-width="2"
          />
          <line
            x1="220"
            y1="0"
            x2="220"
            y2="520"
            stroke="rgba(244,94,42,.10)"
            stroke-width="2"
          />
          <!-- city blocks fill -->
          <rect
            x="61"
            y="81"
            width="78"
            height="78"
            fill="rgba(255,255,255,.018)"
            rx="1"
          />
          <rect
            x="141"
            y="161"
            width="78"
            height="78"
            fill="rgba(255,255,255,.022)"
            rx="1"
          />
          <rect
            x="61"
            y="311"
            width="78"
            height="78"
            fill="rgba(255,255,255,.016)"
            rx="1"
          />
          <rect
            x="311"
            y="81"
            width="63"
            height="78"
            fill="rgba(255,255,255,.02)"
            rx="1"
          />
          <rect
            x="141"
            y="311"
            width="78"
            height="78"
            fill="rgba(255,255,255,.018)"
            rx="1"
          />
          <rect
            x="311"
            y="391"
            width="63"
            height="68"
            fill="rgba(255,255,255,.014)"
            rx="1"
          />
        </svg>
      </div>

      <!-- location pin pulsing -->
      <div class="git-pin" aria-hidden="true">
        <div class="git-pin-ring git-ring-1"></div>
        <div class="git-pin-ring git-ring-2"></div>
        <div class="git-pin-ring git-ring-3"></div>
        <div class="git-pin-dot"></div>
      </div>

      <!-- location card overlay -->
      <div class="git-loc-card">
        <div class="git-loc-top">
          <span class="git-loc-dot"></span>
          <span class="git-loc-label">Our Location</span>
        </div>
        <p class="git-loc-addr">
          Al Makhawi Building,<br />Umm Hurair Road, Dubai
        </p>
        <p class="git-loc-coords">25.2285° N &nbsp;·&nbsp; 55.3273° E</p>
      </div>

      <!-- corner coordinate labels -->
      <span class="git-coord git-coord-tl">25°13'N</span>
      <span class="git-coord git-coord-br">55°19'E</span>
    </div>
  </div>
  <!-- /git-inner -->
</section>

<style>
  /* ── Wrap ───────────────────────────────────────────────────────────────── */
  .git-wrap {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: #1d2323;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(5rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem);
    box-sizing: border-box;
  }

  /* ── BG — identical to About.svelte ────────────────────────────────────── */
  .git-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        rgba(244, 94, 42, 0.03) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(244, 94, 42, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }
  .git-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75vw;
    height: 75vh;
    background: radial-gradient(
      ellipse at center,
      rgba(244, 94, 42, 0.1) 0%,
      transparent 62%
    );
    pointer-events: none;
  }
  .git-scanlines {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      to bottom,
      transparent 0,
      transparent 3px,
      rgba(0, 0, 0, 0.07) 3px,
      rgba(0, 0, 0, 0.07) 4px
    );
    pointer-events: none;
    z-index: 1;
  }

  /* ── HUD corners ────────────────────────────────────────────────────────── */
  .git-hud {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;
  }
  .git-hud-tl,
  .git-hud-tr,
  .git-hud-bl,
  .git-hud-br {
    position: absolute;
    width: 20px;
    height: 20px;
  }
  .git-hud-tl {
    top: 20px;
    left: 20px;
    border-top: 1.5px solid rgba(244, 94, 42, 0.38);
    border-left: 1.5px solid rgba(244, 94, 42, 0.38);
  }
  .git-hud-tr {
    top: 20px;
    right: 20px;
    border-top: 1.5px solid rgba(244, 94, 42, 0.38);
    border-right: 1.5px solid rgba(244, 94, 42, 0.38);
  }
  .git-hud-bl {
    bottom: 20px;
    left: 20px;
    border-bottom: 1.5px solid rgba(244, 94, 42, 0.38);
    border-left: 1.5px solid rgba(244, 94, 42, 0.38);
  }
  .git-hud-br {
    bottom: 20px;
    right: 20px;
    border-bottom: 1.5px solid rgba(244, 94, 42, 0.38);
    border-right: 1.5px solid rgba(244, 94, 42, 0.38);
  }

  /* ── Inner grid ─────────────────────────────────────────────────────────── */
  .git-inner {
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 1240px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2.5rem, 5vw, 6rem);
    align-items: stretch;
  }

  /* ── Entrance ───────────────────────────────────────────────────────────── */
  .git-left {
    opacity: 0;
    transform: translateY(28px);
    transition:
      opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
      transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .git-right {
    opacity: 0;
    transform: translateY(28px);
    transition:
      opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.22s,
      transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.22s;
  }
  .git-vis.git-left,
  .git-vis.git-right {
    opacity: 1;
    transform: translateY(0);
  }

  /* ══════ LEFT COLUMN ══════ */

  .git-left {
    display: flex;
    flex-direction: column;
    gap: clamp(1.8rem, 3.5vh, 3rem);
  }

  /* Header with left bar */
  .git-head {
    display: flex;
    align-items: flex-start;
    gap: 1.1rem;
  }
  .git-head-bar {
    width: 3px;
    flex-shrink: 0;
    height: 100%;
    min-height: 60px;
    background: linear-gradient(to bottom, #f45e2a, rgba(244, 94, 42, 0.3));
    border-radius: 2px;
  }
  .git-eyebrow {
    font-size: clamp(0.48rem, 0.72vw, 0.6rem);
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.35);
    font-weight: 400;
    margin: 0 0 0.5rem;
  }
  .git-title {
    font-size: clamp(2rem, 4.5vw, 4rem);
    font-weight: 900;
    color: #fff;
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin: 0;
  }
  .git-title-dot {
    color: #f45e2a;
  }

  /* Info row */
  .git-info-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(1rem, 2vw, 1.8rem);
  }
  .git-info {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }
  .git-info-head {
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
  .git-info-label {
    font-size: clamp(0.48rem, 0.7vw, 0.58rem);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.35);
    font-weight: 500;
  }
  .git-info-val {
    font-size: clamp(0.58rem, 0.88vw, 0.76rem);
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.75;
    font-weight: 300;
    margin: 0;
  }

  /* Form section header */
  .git-form-head {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-bottom: clamp(0.8rem, 1.6vh, 1.2rem);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
  .git-fl-accent {
    width: 3px;
    height: 14px;
    background: #f45e2a;
    border-radius: 2px;
  }
  .git-fl-label {
    font-size: clamp(0.5rem, 0.75vw, 0.62rem);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.32);
    font-weight: 500;
  }

  /* Form */
  .git-form {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 1.8vh, 1.5rem);
  }
  .git-fields-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(0.8rem, 1.5vw, 1.4rem);
  }

  .git-field {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .git-input {
    background: transparent;
    border: none;
    outline: none;
    font-size: clamp(0.6rem, 0.9vw, 0.78rem);
    color: rgba(255, 255, 255, 0.75);
    font-weight: 300;
    padding: 0.55rem 0;
    width: 100%;
    resize: none;
    font-family: inherit;
  }
  .git-input::placeholder {
    color: rgba(255, 255, 255, 0.22);
  }
  .git-textarea {
    min-height: 70px;
  }

  .git-input-line {
    height: 1px;
    background: rgba(255, 255, 255, 0.12);
    transition: background 0.3s ease;
  }
  .git-field:focus-within .git-input-line {
    background: #f45e2a;
  }

  /* Submit */
  .git-form-footer {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.4rem;
  }
  .git-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    background: transparent;
    border: 1px solid rgba(244, 94, 42, 0.45);
    color: rgba(255, 255, 255, 0.8);
    font-size: clamp(0.58rem, 0.88vw, 0.74rem);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.85rem 2rem;
    cursor: pointer;
    transition:
      border-color 0.3s,
      background 0.3s,
      color 0.3s,
      transform 0.3s;
    width: fit-content;
  }
  .git-btn:hover:not(:disabled) {
    border-color: #f45e2a;
    background: rgba(244, 94, 42, 0.08);
    color: #fff;
    transform: translateX(4px);
  }
  .git-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .git-spin {
    animation: gitSpin 1s linear infinite;
  }
  @keyframes gitSpin {
    to {
      transform: rotate(360deg);
    }
  }

  .git-status {
    font-size: clamp(0.52rem, 0.78vw, 0.65rem);
    font-weight: 400;
    margin: 0;
  }
  .git-ok {
    color: rgba(100, 220, 120, 0.75);
  }
  .git-err {
    color: rgba(244, 94, 42, 0.75);
  }

  /* ══════ RIGHT COLUMN ══════ */

  .git-right {
    position: relative;
    overflow: hidden;
    min-height: 440px;
  }

  /* world map image */
  .git-map-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    mix-blend-mode: multiply;
    opacity: 0.55;
    pointer-events: none;
    user-select: none;
  }
  .git-map-svg {
    display: none;
  }
  .git-map-bg-svg {
    display: none;
  }
  .git-map-overlay {
    position: absolute;
    inset: 0;

    pointer-events: none;
  }

  /* location pin */
  .git-pin {
    position: absolute;
    top: 45%;
    left: 52%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .git-pin-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(244, 94, 42, 0.3);
    animation: gitPing 3s ease-out infinite;
  }
  .git-ring-1 {
    width: 40px;
    height: 40px;
    animation-delay: 0s;
  }
  .git-ring-2 {
    width: 70px;
    height: 70px;
    animation-delay: 0.8s;
  }
  .git-ring-3 {
    width: 100px;
    height: 100px;
    animation-delay: 1.6s;
  }
  @keyframes gitPing {
    0% {
      opacity: 0.7;
      transform: scale(0.8);
    }
    100% {
      opacity: 0;
      transform: scale(1.1);
    }
  }
  .git-pin-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #f45e2a;
    box-shadow: 0 0 14px rgba(244, 94, 42, 0.8);
    z-index: 2;
  }

  /* location overlay card */
  .git-loc-card {
    position: absolute;
    bottom: clamp(1.2rem, 3vh, 2rem);
    left: clamp(1.2rem, 2.5vw, 2rem);
    background: rgba(29, 35, 35, 0.88);
    border: 1px solid rgba(244, 94, 42, 0.18);
    backdrop-filter: blur(8px);
    padding: 1rem 1.3rem;
    min-width: 200px;
  }
  .git-loc-top {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .git-loc-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #f45e2a;
    animation: gitLocPulse 2s ease-in-out infinite;
  }
  @keyframes gitLocPulse {
    0%,
    100% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
  }
  .git-loc-label {
    font-size: clamp(0.44rem, 0.65vw, 0.54rem);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(244, 94, 42, 0.8);
    font-weight: 600;
  }
  .git-loc-addr {
    font-size: clamp(0.55rem, 0.82vw, 0.68rem);
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.65;
    font-weight: 300;
    margin: 0 0 0.45rem;
  }
  .git-loc-coords {
    font-size: clamp(0.44rem, 0.64vw, 0.54rem);
    color: rgba(255, 255, 255, 0.25);
    letter-spacing: 0.08em;
    font-weight: 400;
    margin: 0;
  }

  /* corner coordinate labels */
  .git-coord {
    position: absolute;
    font-size: clamp(0.38rem, 0.56vw, 0.46rem);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.14);
    font-weight: 400;
    pointer-events: none;
  }
  .git-coord-tl {
    top: 14px;
    left: 14px;
  }
  .git-coord-br {
    bottom: 14px;
    right: 14px;
  }

  /* ── Responsive ─────────────────────────────────────────────────────────── */
  @media (max-width: 900px) {
    .git-inner {
      grid-template-columns: 1fr;
    }
    .git-right {
      min-height: 300px;
    }
    .git-info-row {
      grid-template-columns: 1fr;
      gap: 1.2rem;
    }
    .git-fields-2 {
      grid-template-columns: 1fr;
    }
  }
</style>
