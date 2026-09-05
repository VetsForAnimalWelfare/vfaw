<style>{`
  /* =========================
     PROGRAM CARDS
  ========================= */

  .program-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
  }

  .program-wrapper {
    perspective: 1200px;
  }

  .apply-card {
    min-height: 470px;
    position: relative;
    overflow: hidden;
    border-radius: 27px;
    padding: 30px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    box-shadow:
      0 18px 45px rgba(5, 47, 77, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);

    transition:
      transform 0.45s ease,
      box-shadow 0.45s ease;
  }

  .apply-card:hover {
    transform: translateY(-10px) rotateX(1deg);
    box-shadow:
      0 30px 65px rgba(5, 47, 77, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.18);
  }

  /* DIFFERENT SOLID BLUE SHADES */

  .apply-card-blue {
    background: #075985;
  }

  .apply-card-sky {
    background: #0c6ea8;
  }

  .apply-card-cyan {
    background: #087f9c;
  }

  .card-glow {
    position: absolute;
    width: 170px;
    height: 170px;
    right: -80px;
    top: -80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.07);
    pointer-events: none;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 27px;
    position: relative;
    z-index: 2;
  }

  .program-number {
    width: 56px;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 17px;

    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.20);

    color: #ffffff;
    font-size: 16px;
    font-weight: 900;

    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.15),
      0 8px 20px rgba(0,0,0,0.08);
  }

  .program-date {
    display: inline-flex;
    align-items: center;
    gap: 7px;

    padding: 8px 11px;

    border-radius: 12px;

    background: rgba(255, 255, 255, 0.13);
    border: 1px solid rgba(255, 255, 255, 0.18);

    color: #ffffff;

    font-size: 11px;
    font-weight: 800;

    white-space: nowrap;
  }

  /* =========================
     APPLICATION AVAILABLE
  ========================= */

  .available-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;

    margin-bottom: 15px;
    padding: 7px 12px;

    border-radius: 999px;

    background: #ffffff;
    color: #dc2626;

    border: 1px solid rgba(255,255,255,0.8);

    font-size: 11px;
    font-weight: 900;

    letter-spacing: 0.8px;
    text-transform: uppercase;

    animation: applicationBlink 1.2s infinite;
  }

  .available-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #ef4444;

    box-shadow:
      0 0 0 4px rgba(239, 68, 68, 0.13);
  }

  @keyframes applicationBlink {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0.42;
    }
  }

  /* =========================
     COMING SOON
  ========================= */

  .coming-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;

    margin-bottom: 15px;
    padding: 7px 12px;

    border-radius: 999px;

    background: rgba(255,255,255,0.13);
    color: rgba(255,255,255,0.85);

    border: 1px solid rgba(255,255,255,0.18);

    font-size: 11px;
    font-weight: 900;

    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  /* =========================
     CARD TEXT
  ========================= */

  .apply-card-title {
    margin: 0 0 14px;

    color: #ffffff;

    font-size: 25px;
    line-height: 1.22;

    font-weight: 900;
    letter-spacing: -0.5px;

    position: relative;
    z-index: 2;
  }

  .apply-card-description {
    color: rgba(255, 255, 255, 0.82);

    font-size: 14px;
    line-height: 1.75;

    margin: 0;

    position: relative;
    z-index: 2;
  }

  .card-divider {
    height: 1px;

    background: rgba(255,255,255,0.17);

    margin: 25px 0 20px;
  }

  .program-type {
    display: flex;
    align-items: center;
    gap: 9px;

    color: rgba(255,255,255,0.86);

    font-size: 12px;
    font-weight: 800;
  }

  .program-type-icon {
    width: 31px;
    height: 31px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    background: rgba(255,255,255,0.13);
    color: #ffffff;

    border: 1px solid rgba(255,255,255,0.12);
  }

  /* =========================
     BUTTON
  ========================= */

  .card-bottom {
    position: absolute;

    left: 30px;
    right: 30px;
    bottom: 30px;
  }

  .apply-button {
    width: 100%;
    min-height: 52px;

    border: none;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    background: #ffffff;
    color: #075183;

    font-size: 14px;
    font-weight: 900;

    cursor: pointer;

    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      background 0.3s ease;
  }

  .apply-button:hover {
    transform: translateY(-2px);

    background: #f0f9ff;

    box-shadow:
      0 12px 28px rgba(0,0,0,0.16);
  }

  .apply-button:active {
    transform: translateY(0);
  }

  .apply-button-disabled {
    background: rgba(255,255,255,0.14);
    color: rgba(255,255,255,0.70);

    border: 1px solid rgba(255,255,255,0.15);

    cursor: default;
  }

  .apply-button-disabled:hover {
    transform: none;
    background: rgba(255,255,255,0.14);
    box-shadow: none;
  }

  /* =========================
     RESPONSIVE
  ========================= */

  @media (max-width: 1000px) {
    .program-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 700px) {
    .program-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .apply-card {
      min-height: 440px;
      padding: 24px;
      border-radius: 23px;
    }

    .card-bottom {
      left: 24px;
      right: 24px;
      bottom: 24px;
    }

    .apply-card-title {
      font-size: 23px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .apply-card,
    .apply-button {
      transition: none;
    }

    .available-badge {
      animation: none;
    }
  }
`}</style>
