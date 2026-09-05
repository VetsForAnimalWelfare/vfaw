import React, { useEffect, useState } from "react";

/* =========================================================
   PROGRAM DATA
========================================================= */

const programs = [
  {
    id: 1,
    title: "Clinical Report Writing Competition",
    description:
      "Training and competition program focused on developing students' clinical reporting, communication, analytical and professional writing skills.",
    date: "2083/05/20",
    status: "Open",
    statusType: "open",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeh4etkOFN3AlsO-oNBUTR3khVb2I2jvMdw_hlzxYP5IH_vqQ/viewform?usp=header",
  },
  {
    id: 2,
    title: "Veterinary Workshop",
    description:
      "An upcoming veterinary education and practical training workshop designed to strengthen knowledge, practical skills and professional confidence.",
    date: "Coming Soon",
    status: "Coming Soon",
    statusType: "soon",
    formLink:
      "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
  },
  {
    id: 3,
    title: "Youth Development Program",
    description:
      "A development-focused program designed to encourage learning, leadership, participation and professional growth among young people.",
    date: "Coming Soon",
    status: "Coming Soon",
    statusType: "soon",
    formLink:
      "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
  },
];

/* =========================================================
   ICONS
========================================================= */

const CalendarIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="4.5"
      width="18"
      height="17"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path
      d="M8 2.5V6M16 2.5V6M3 9.5H21"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M8 13H8.01M12 13H12.01M16 13H16.01M8 17H8.01M12 17H12.01"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12H19M13 6L19 12L13 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowLeftIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M19 12H5M11 6L5 12L11 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = ({ size = 17 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12.5L9.5 17L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 6L18 18M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const UsersIcon = ({ size = 21 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M16 21V19C16 16.8 14.2 15 12 15H7C4.8 15 3 16.8 3 19V21"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <circle
      cx="9.5"
      cy="8"
      r="3.5"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path
      d="M17 11C18.7 10.7 20 9.2 20 7.5C20 5.6 18.4 4 16.5 4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M18 15C20 15.3 21 16.8 21 19V21"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const FormIcon = ({ size = 21 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="4"
      y="3"
      width="16"
      height="18"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path
      d="M8 8H16M8 12H16M8 16H13"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

/* =========================================================
   APPLY COMPONENT
========================================================= */

const Apply = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  /* =======================================================
     LOCK BODY SCROLL WHEN FORM IS OPEN
  ======================================================= */

  useEffect(() => {
    if (selectedProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProgram]);

  /* =======================================================
     ESC KEY
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProgram(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =======================================================
     OPEN PROGRAM
  ======================================================= */

  const openProgram = (program) => {
    if (program.statusType !== "open") {
      return;
    }

    setSelectedProgram(program);
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="apply-page">

      {/* ===================================================
          PAGE HERO
      =================================================== */}

      {!selectedProgram && (
        <>
          <section className="apply-hero">

            <div className="apply-hero-grid"></div>

            <div className="apply-hero-glow apply-hero-glow-one"></div>
            <div className="apply-hero-glow apply-hero-glow-two"></div>

            <div className="apply-hero-content">

              <div className="apply-eyebrow">
                <span className="apply-eyebrow-dot"></span>
                VFAW PROGRAM APPLICATIONS
              </div>

              <h1>
                Learn.
                <br />
                <span>Participate. Grow.</span>
              </h1>

              <p>
                Explore upcoming VFAW programs, educational opportunities
                and development initiatives designed to strengthen knowledge,
                practical skills and professional growth.
              </p>

              <div className="apply-hero-stats">

                <div className="hero-stat">
                  <div className="hero-stat-icon">
                    <FormIcon size={19} />
                  </div>

                  <div>
                    <strong>{programs.length}</strong>
                    <span>Programs</span>
                  </div>
                </div>

                <div className="hero-stat-divider"></div>

                <div className="hero-stat">
                  <div className="hero-stat-icon">
                    <UsersIcon size={19} />
                  </div>

                  <div>
                    <strong>Student</strong>
                    <span>Focused</span>
                  </div>
                </div>

                <div className="hero-stat-divider"></div>

                <div className="hero-stat">
                  <div className="hero-stat-icon">
                    <CheckIcon size={19} />
                  </div>

                  <div>
                    <strong>VFAW</strong>
                    <span>Initiatives</span>
                  </div>
                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              PROGRAM SECTION
          ================================================= */}

          <main className="apply-container">

            <section className="apply-section-header">

              <div>
                <span className="apply-section-label">
                  OPPORTUNITIES
                </span>

                <h2>
                  Choose a Program
                </h2>

                <p>
                  Select an available program to begin your application.
                </p>
              </div>

              <div className="available-indicator">
                <span></span>
                Applications available
              </div>

            </section>

            {/* =================================================
                PROGRAM GRID
            ================================================= */}

            <section className="apply-program-grid">

              {programs.map((program) => (

                <article
                  className={`apply-program-card ${
                    program.statusType === "open"
                      ? "is-open"
                      : "is-coming"
                  }`}
                  key={program.id}
                >

                  {/* Card Top Line */}
                  <div className="apply-card-line"></div>

                  {/* Card Header */}
                  <div className="apply-card-header">

                    <div className="apply-number">
                      {String(program.id).padStart(2, "0")}
                    </div>

                    <span
                      className={`apply-status ${
                        program.statusType === "open"
                          ? "status-open"
                          : "status-soon"
                      }`}
                    >
                      {program.statusType === "open" && (
                        <span className="status-dot"></span>
                      )}

                      {program.status}
                    </span>

                  </div>

                  {/* Main Content */}
                  <div className="apply-card-content">

                    <h3>
                      {program.title}
                    </h3>

                    <p>
                      {program.description}
                    </p>

                  </div>

                  {/* Date */}
                  <div className="apply-card-date">

                    <div className="date-icon">
                      <CalendarIcon size={18} />
                    </div>

                    <div>
                      <span>PROGRAM DATE</span>
                      <strong>{program.date}</strong>
                    </div>

                  </div>

                  {/* Action */}
                  <div className="apply-card-footer">

                    {program.statusType === "open" ? (
                      <button
                        type="button"
                        className="apply-primary-button"
                        onClick={() => openProgram(program)}
                      >
                        <span>Apply Now</span>

                        <span className="button-arrow">
                          <ArrowIcon size={18} />
                        </span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="apply-disabled-button"
                        disabled
                      >
                        <span>Applications Opening Soon</span>

                        <span>
                          <CalendarIcon size={16} />
                        </span>
                      </button>
                    )}

                  </div>

                  {/* Decorative Bottom Glow */}
                  <div className="apply-card-shadow"></div>

                </article>

              ))}

            </section>

            {/* =================================================
                INFORMATION PANEL
            ================================================= */}

            <section className="application-info">

              <div className="info-icon">
                <FormIcon size={23} />
              </div>

              <div className="info-content">

                <span>BEFORE YOU APPLY</span>

                <h3>
                  Make sure your information is ready.
                </h3>

                <p>
                  Please provide accurate information when completing the
                  application form. Check the program details and eligibility
                  requirements before submitting your application.
                </p>

              </div>

            </section>

          </main>
        </>
      )}

      {/* =====================================================
          FULL APPLICATION VIEW
      ===================================================== */}

      {selectedProgram && (

        <div className="application-view">

          {/* =================================================
              APPLICATION HEADER
          ================================================= */}

          <header className="application-header">

            <div className="application-header-left">

              <button
                type="button"
                className="application-back"
                onClick={() => setSelectedProgram(null)}
                aria-label="Back to programs"
              >
                <ArrowLeftIcon size={18} />
                <span>Programs</span>
              </button>

              <div className="application-header-divider"></div>

              <div className="application-title">

                <span>
                  VFAW PROGRAM APPLICATION
                </span>

                <strong>
                  {selectedProgram.title}
                </strong>

              </div>

            </div>

            <button
              type="button"
              className="application-close"
              onClick={() => setSelectedProgram(null)}
              aria-label="Close application"
            >
              <CloseIcon size={21} />
              <span>Close</span>
            </button>

          </header>

          {/* =================================================
              APPLICATION CONTENT
          ================================================= */}

          <main className="application-main">

            <div className="application-top">

              <div className="application-heading">

                <span className="application-label">
                  APPLICATION FORM
                </span>

                <h1>
                  {selectedProgram.title}
                </h1>

                <p>
                  Complete the application form below to participate
                  in this VFAW program.
                </p>

              </div>

              <div className="application-date">

                <div>
                  <CalendarIcon size={20} />
                </div>

                <span>
                  PROGRAM DATE
                  <strong>
                    {selectedProgram.date}
                  </strong>
                </span>

              </div>

            </div>

            {/* =================================================
                FORM CONTAINER
            ================================================= */}

            <div className="application-form-shell">

              <div className="form-shell-top">

                <div className="form-security">

                  <span className="form-live-dot"></span>

                  Application Form

                </div>

                <span className="form-instruction">
                  Please complete all required fields
                </span>

              </div>

              <div className="form-frame-wrapper">

                <iframe
                  src={selectedProgram.formLink}
                  title={`${selectedProgram.title} application form`}
                  className="application-iframe"
                  loading="eager"
                  allow="clipboard-write"
                >
                  Loading application form...
                </iframe>

              </div>

            </div>

          </main>

        </div>

      )}

    </div>
  );
};

export default Apply;
