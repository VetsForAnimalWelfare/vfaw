import React, { useEffect, useMemo, useState } from "react";

const programs = [
  {
    id: 1,
    title: "Clinical Report Writing Competition",
    description:
      "Training program focused on the development of student skills, knowledge, clinical documentation, and professional communication.",
    date: "2083/05/20",
    type: "Student Development",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeh4etkOFN3AlsO-oNBUTR3khVb2I2jvMdw_hlzxYP5IH_vqQ/viewform?usp=header",
    shade: "blue",
  },
  {
    id: 2,
    title: "Veterinary Workshop",
    description:
      "Upcoming veterinary education and practical training workshop designed to strengthen practical knowledge and professional skills.",
    date: "Coming Soon",
    type: "Veterinary Education",
    formLink: "",
    shade: "sky",
  },
  {
    id: 3,
    title: "Youth Development Program",
    description:
      "A program designed for youth learning, leadership, professional development, and meaningful participation in animal welfare.",
    date: "Coming Soon",
    type: "Youth Development",
    formLink: "",
    shade: "cyan",
  },
];

const Icon = ({ name, size = 20 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "calendar") {
    return (
      <svg {...common}>
        <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
        <path d="M16 2.5v4M8 2.5v4M3 9h18" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  if (name === "external") {
    return (
      <svg {...common}>
        <path d="M14 4h6v6" />
        <path d="M20 4 11 13" />
        <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </svg>
    );
  }

  if (name === "form") {
    return (
      <svg {...common}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  if (name === "close") {
    return (
      <svg {...common}>
        <path d="M6 6l12 12M18 6 6 18" />
      </svg>
    );
  }

  if (name === "back") {
    return (
      <svg {...common}>
        <path d="M19 12H5" />
        <path d="m11 18-6-6 6-6" />
      </svg>
    );
  }

  return null;
};

const Apply = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const availablePrograms = useMemo(
    () => programs.filter((program) => program.formLink),
    []
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && selectedProgram) {
        setSelectedProgram(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProgram]);

  useEffect(() => {
    document.body.style.overflow = selectedProgram ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProgram]);

  const getCardClass = (shade) => {
    if (shade === "sky") return "apply-card apply-card-sky";
    if (shade === "cyan") return "apply-card apply-card-cyan";
    return "apply-card apply-card-blue";
  };

  return (
    <div className="apply-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .apply-page {
          min-height: 100vh;
          padding: 118px 24px 80px;
          background:
            radial-gradient(circle at 10% 10%, rgba(56, 189, 248, 0.12), transparent 28%),
            radial-gradient(circle at 90% 30%, rgba(14, 165, 233, 0.10), transparent 30%),
            linear-gradient(135deg, #f5fbff 0%, #ffffff 45%, #eef8ff 100%);
          color: #13232f;
          position: relative;
          overflow: hidden;
        }

        .apply-page::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.28;
          background-image:
            linear-gradient(rgba(22, 113, 184, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22, 113, 184, 0.035) 1px, transparent 1px);
          background-size: 42px 42px;
        }

        .apply-container {
          width: min(1220px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* =========================
           HERO / OPPORTUNITIES BOX
        ========================= */

        .opportunity-box {
          width: min(850px, 100%);
          margin: 0 auto 58px;
          padding: 32px 35px 34px;
          text-align: center;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(22, 113, 184, 0.16);
          box-shadow:
            0 24px 70px rgba(5, 47, 77, 0.10),
            0 4px 18px rgba(22, 113, 184, 0.06);
          backdrop-filter: blur(14px);
        }

        .opportunity-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 17px;
          border-radius: 999px;
          background: #e8f6ff;
          color: #075183;
          border: 1px solid #c7e8f9;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.8px;
          margin-bottom: 16px;
        }

        .opportunity-title {
          margin: 0;
          color: #062f4c;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -1.4px;
        }

        .opportunity-description {
          max-width: 650px;
          margin: 15px auto 0;
          color: #667b89;
          font-size: 16px;
          line-height: 1.7;
        }

        .opportunity-line {
          width: 75px;
          height: 4px;
          border-radius: 10px;
          margin: 22px auto 0;
          background: linear-gradient(90deg, #1671b8, #38bdf8);
        }

        /* =========================
           STATS
        ========================= */

        .apply-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 42px;
        }

        .apply-stat {
          padding: 21px 24px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid #d9eaf3;
          box-shadow: 0 12px 35px rgba(5, 47, 77, 0.06);
          text-align: center;
        }

        .apply-stat-number {
          display: block;
          color: #075183;
          font-size: 27px;
          font-weight: 900;
          margin-bottom: 4px;
        }

        .apply-stat-label {
          color: #718391;
          font-size: 13px;
          font-weight: 700;
        }

        /* =========================
           PROGRAM GRID
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
          border: 1px solid rgba(22, 113, 184, 0.16);
          box-shadow:
            0 16px 42px rgba(5, 47, 77, 0.09),
            inset 0 1px 0 rgba(255,255,255,0.65);
          transition:
            transform 0.45s ease,
            box-shadow 0.45s ease,
            border-color 0.45s ease;
        }

        .apply-card:hover {
          transform: translateY(-10px) rotateX(1deg);
          box-shadow:
            0 28px 65px rgba(5, 47, 77, 0.16),
            inset 0 1px 0 rgba(255,255,255,0.8);
        }

        .apply-card-blue {
          background:
            radial-gradient(circle at 100% 0%, rgba(56, 189, 248, 0.20), transparent 32%),
            linear-gradient(145deg, #e8f6ff 0%, #d7efff 52%, #c8e8fa 100%);
        }

        .apply-card-sky {
          background:
            radial-gradient(circle at 0% 100%, rgba(14, 165, 233, 0.18), transparent 35%),
            linear-gradient(145deg, #edfaff 0%, #dff5ff 52%, #d1edfa 100%);
        }

        .apply-card-cyan {
          background:
            radial-gradient(circle at 100% 20%, rgba(6, 182, 212, 0.17), transparent 35%),
            linear-gradient(145deg, #e8fbff 0%, #d8f5fa 52%, #ccecf3 100%);
        }

        .card-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          right: -55px;
          top: -60px;
          border-radius: 50%;
          background: rgba(255,255,255,0.45);
          filter: blur(4px);
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
          background: rgba(255,255,255,0.70);
          border: 1px solid rgba(255,255,255,0.9);
          color: #075183;
          font-size: 16px;
          font-weight: 900;
          box-shadow: 0 8px 20px rgba(5, 47, 77, 0.08);
        }

        .program-date {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 11px;
          border-radius: 12px;
          background: rgba(255,255,255,0.72);
          color: #23627f;
          border: 1px solid rgba(255,255,255,0.85);
          font-size: 11px;
          font-weight: 800;
          white-space: nowrap;
        }

        /* =========================
           RED BLINKING AVAILABLE
        ========================= */

        .available-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 15px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #fff1f1;
          color: #dc2626;
          border: 1px solid #fecaca;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          animation: availabilityBlink 1.25s infinite;
        }

        .available-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 0 4px rgba(239,68,68,0.12);
        }

        @keyframes availabilityBlink {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.48;
            transform: scale(0.97);
          }
        }

        .coming-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 15px;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.62);
          color: #55788d;
          border: 1px solid rgba(255,255,255,0.9);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .apply-card-title {
          margin: 0 0 14px;
          color: #083b5d;
          font-size: 25px;
          line-height: 1.22;
          font-weight: 900;
          letter-spacing: -0.5px;
          position: relative;
          z-index: 2;
        }

        .apply-card-description {
          color: #527083;
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .card-divider {
          height: 1px;
          background: rgba(7,81,131,0.12);
          margin: 25px 0 20px;
        }

        .program-type {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #28617c;
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
          background: rgba(255,255,255,0.70);
          color: #1671b8;
        }

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
          background: #063b5e;
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
          box-shadow: 0 10px 24px rgba(5,47,77,0.17);
        }

        .apply-button:hover {
          transform: translateY(-2px);
          background: #1671b8;
          box-shadow: 0 14px 30px rgba(22,113,184,0.24);
        }

        .apply-button:active {
          transform: translateY(0);
        }

        .apply-button-disabled {
          background: rgba(255,255,255,0.72);
          color: #718998;
          cursor: default;
          box-shadow: none;
        }

        .apply-button-disabled:hover {
          transform: none;
          background: rgba(255,255,255,0.72);
          box-shadow: none;
        }

        /* =========================
           APPLICATION VIEW
        ========================= */

        .application-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background:
            linear-gradient(135deg, #f3f9fd 0%, #ffffff 45%, #eef7fc 100%);
          overflow-y: auto;
        }

        .application-header {
          position: sticky;
          top: 0;
          z-index: 20;
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 12px 28px;
          background: rgba(255,255,255,0.94);
          border-bottom: 1px solid #d9e7ef;
          backdrop-filter: blur(18px);
          box-shadow: 0 8px 28px rgba(5,47,77,0.07);
        }

        .application-header-left {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .back-button {
          flex-shrink: 0;
          height: 44px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #d6e5ed;
          border-radius: 12px;
          background: #ffffff;
          color: #31586e;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .back-button:hover {
          background: #eaf7ff;
          color: #075183;
          border-color: #b9dced;
        }

        .application-heading {
          min-width: 0;
        }

        .application-small-label {
          display: block;
          color: #1671b8;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .application-title {
          margin: 0;
          color: #092f49;
          font-size: 17px;
          font-weight: 900;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .open-form-button {
          flex-shrink: 0;
          height: 44px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          border: none;
          border-radius: 12px;
          background: #075183;
          color: white;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .open-form-button:hover {
          background: #1671b8;
          transform: translateY(-1px);
        }

        .application-content {
          width: min(1250px, calc(100% - 32px));
          margin: 24px auto 40px;
        }

        .form-intro {
          padding: 21px 24px;
          margin-bottom: 18px;
          border-radius: 18px;
          background: linear-gradient(135deg, #075183, #1671b8);
          color: white;
          box-shadow: 0 12px 32px rgba(5,47,77,0.14);
        }

        .form-intro-title {
          margin: 0 0 5px;
          font-size: 18px;
          font-weight: 900;
        }

        .form-intro-text {
          margin: 0;
          color: rgba(255,255,255,0.82);
          font-size: 13px;
          line-height: 1.6;
        }

        /*
          GOOGLE FORM WORKSPACE

          The iframe is intentionally very tall and full-width.
          This gives Google Forms enough vertical space and avoids
          the cramped appearance of the previous version.
        */

        .google-form-container {
          width: 100%;
          min-height: calc(100vh - 210px);
          padding: 12px;
          background: #ffffff;
          border: 1px solid #d6e5ed;
          border-radius: 22px;
          box-shadow:
            0 18px 50px rgba(5,47,77,0.10),
            0 2px 8px rgba(5,47,77,0.04);
          overflow: hidden;
        }

        .google-form-frame {
          display: block;
          width: 100%;
          height: 1100px;
          min-height: 850px;
          border: 0;
          border-radius: 14px;
          background: #ffffff;
        }

        .form-fallback {
          margin-top: 15px;
          padding: 18px;
          text-align: center;
          border-radius: 14px;
          background: #f5faff;
          border: 1px solid #d8ebf5;
          color: #66808f;
          font-size: 13px;
          line-height: 1.6;
        }

        .form-fallback a {
          color: #1671b8;
          font-weight: 800;
          text-decoration: none;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 1000px) {
          .program-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .apply-page {
            padding: 94px 15px 55px;
          }

          .opportunity-box {
            padding: 27px 20px 28px;
            margin-bottom: 35px;
            border-radius: 22px;
          }

          .opportunity-title {
            font-size: 31px;
          }

          .opportunity-description {
            font-size: 14px;
          }

          .apply-stats {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-bottom: 28px;
          }

          .apply-stat {
            padding: 16px;
          }

          .program-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .apply-card {
            min-height: 440px;
            padding: 24px;
            border-radius: 22px;
          }

          .card-bottom {
            left: 24px;
            right: 24px;
            bottom: 24px;
          }

          .application-header {
            padding: 10px 13px;
            min-height: 66px;
          }

          .application-header-left {
            gap: 9px;
          }

          .back-button {
            width: 42px;
            height: 42px;
            padding: 0;
            justify-content: center;
          }

          .back-button span {
            display: none;
          }

          .application-small-label {
            display: none;
          }

          .application-title {
            font-size: 13px;
            max-width: 180px;
          }

          .open-form-button {
            width: 42px;
            height: 42px;
            padding: 0;
            justify-content: center;
          }

          .open-form-button span {
            display: none;
          }

          .application-content {
            width: calc(100% - 18px);
            margin: 12px auto 25px;
          }

          .form-intro {
            padding: 17px;
            border-radius: 15px;
          }

          .form-intro-title {
            font-size: 15px;
          }

          .form-intro-text {
            font-size: 12px;
          }

          .google-form-container {
            padding: 5px;
            border-radius: 16px;
          }

          .google-form-frame {
            height: 1050px;
            min-height: 900px;
            border-radius: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .apply-card,
          .apply-button,
          .back-button,
          .open-form-button {
            transition: none;
          }

          .available-badge {
            animation: none;
          }
        }
      `}</style>

      {!selectedProgram ? (
        <div className="apply-container">
          {/* =========================
              OPPORTUNITIES HEADER
          ========================= */}

          <section className="opportunity-box">
            <div className="opportunity-label">OPPORTUNITIES</div>

            <h1 className="opportunity-title">Choose a Program</h1>

            <p className="opportunity-description">
              Explore current and upcoming VFAW opportunities and select a
              program that matches your interests, skills, and goals.
            </p>

            <div className="opportunity-line" />
          </section>

          {/* =========================
              STATS
          ========================= */}

          <div className="apply-stats">
            <div className="apply-stat">
              <span className="apply-stat-number">{programs.length}</span>
              <span className="apply-stat-label">Programs Listed</span>
            </div>

            <div className="apply-stat">
              <span className="apply-stat-number">
                {availablePrograms.length}
              </span>
              <span className="apply-stat-label">Applications Available</span>
            </div>

            <div className="apply-stat">
              <span className="apply-stat-number">VFAW</span>
              <span className="apply-stat-label">Student-Led Initiative</span>
            </div>
          </div>

          {/* =========================
              PROGRAM CARDS
          ========================= */}

          <div className="program-grid">
            {programs.map((program) => {
              const isAvailable = Boolean(program.formLink);

              return (
                <div className="program-wrapper" key={program.id}>
                  <article className={getCardClass(program.shade)}>
                    <div className="card-glow" />

                    <div className="card-top">
                      <div className="program-number">
                        {String(program.id).padStart(2, "0")}
                      </div>

                      <div className="program-date">
                        <Icon name="calendar" size={14} />
                        {program.date}
                      </div>
                    </div>

                    {isAvailable ? (
                      <div className="available-badge">
                        <span className="available-dot" />
                        Application Available
                      </div>
                    ) : (
                      <div className="coming-badge">
                        <Icon name="calendar" size={13} />
                        Coming Soon
                      </div>
                    )}

                    <h2 className="apply-card-title">{program.title}</h2>

                    <p className="apply-card-description">
                      {program.description}
                    </p>

                    <div className="card-divider" />

                    <div className="program-type">
                      <span className="program-type-icon">
                        <Icon name="form" size={16} />
                      </span>

                      {program.type}
                    </div>

                    <div className="card-bottom">
                      {isAvailable ? (
                        <button
                          type="button"
                          className="apply-button"
                          onClick={() => setSelectedProgram(program)}
                        >
                          Apply Now
                          <Icon name="arrow" size={18} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="apply-button apply-button-disabled"
                          disabled
                        >
                          Applications Coming Soon
                        </button>
                      )}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* =========================
           FULL APPLICATION SCREEN
        ========================= */

        <div className="application-screen">
          <header className="application-header">
            <div className="application-header-left">
              <button
                type="button"
                className="back-button"
                onClick={() => setSelectedProgram(null)}
                aria-label="Back to programs"
              >
                <Icon name="back" size={18} />
                <span>Back</span>
              </button>

              <div className="application-heading">
                <span className="application-small-label">
                  Program Application
                </span>

                <h1 className="application-title">
                  {selectedProgram.title}
                </h1>
              </div>
            </div>

            <a
              href={selectedProgram.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="open-form-button"
            >
              <Icon name="external" size={16} />
              <span>Open in New Tab</span>
            </a>
          </header>

          <main className="application-content">
            <div className="form-intro">
              <h2 className="form-intro-title">
                Complete Your Application
              </h2>

              <p className="form-intro-text">
                Please fill in all required information carefully. If the form
                does not load correctly, use the “Open in New Tab” button above.
              </p>
            </div>

            <div className="google-form-container">
              <iframe
                src={selectedProgram.formLink}
                title={`${selectedProgram.title} Application Form`}
                className="google-form-frame"
                loading="eager"
                allow="camera; microphone; fullscreen"
              />

              <div className="form-fallback">
                Having trouble viewing the form?{" "}
                <a
                  href={selectedProgram.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the application form in a new tab
                </a>
                .
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Apply;
