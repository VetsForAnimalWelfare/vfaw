import { useEffect, useMemo, useState } from "react";

const programs = [
  {
    id: 1,
    slug: "clinical-report-writing",
    title: "Clinical Report Writing Competition",
    description:
      "Training program focused on the development of student skills, knowledge, clinical documentation, and professional communication.",
    date: "2083/05/20",
    type: "Student Development",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeh4etkOFN3AlsO-oNBUTR3khVb2I2jvMdw_hlzxYP5IH_vqQ/viewform?embedded=true",
    shade: "blue",
  },
  {
    id: 2,
    slug: "veterinary-workshop",
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
    slug: "youth-development-program",
    title: "Youth Development Program",
    description:
      "A program designed for youth learning, leadership, professional development, and meaningful participation in animal welfare.",
    date: "Coming Soon",
    type: "Youth Development",
    formLink: "",
    shade: "cyan",
  },
];

const Icon = ({ name, size = 18 }) => {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "calendar") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  if (name === "external") {
    return (
      <svg {...commonProps}>
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
      </svg>
    );
  }

  if (name === "form") {
    return (
      <svg {...commonProps}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
        <path d="M8 15h5" />
      </svg>
    );
  }

  if (name === "back") {
    return (
      <svg {...commonProps}>
        <path d="m15 18-6-6 6-6" />
        <path d="M9 12h10" />
      </svg>
    );
  }

  if (name === "share") {
    return (
      <svg {...commonProps}>
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.5-4.5" />
        <path d="m8.2 13.2 7.5 4.5" />
      </svg>
    );
  }

  if (name === "copy") {
    return (
      <svg {...commonProps}>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...commonProps}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  if (name === "close") {
    return (
      <svg {...commonProps}>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </svg>
    );
  }

  return null;
};

const Apply = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [shareProgram, setShareProgram] = useState(null);
  const [copiedProgram, setCopiedProgram] = useState(null);

  const availablePrograms = useMemo(
    () => programs.filter((program) => program.formLink),
    []
  );

  /*
   * Creates a unique URL for every program.
   *
   * Example:
   * https://yourwebsite.com/apply?program=clinical-report-writing
   */
  const getProgramUrl = (program) => {
    const url = new URL(window.location.href);

    url.searchParams.delete("program");
    url.searchParams.set("program", program.slug);

    return url.toString();
  };

  /*
   * Updates the browser URL when a program is opened.
   */
  const updateProgramUrl = (program) => {
    const url = new URL(window.location.href);

    url.searchParams.set("program", program.slug);

    window.history.pushState(
      { program: program.slug },
      "",
      `${url.pathname}?${url.searchParams.toString()}${url.hash}`
    );
  };

  /*
   * Removes the program from the URL.
   */
  const removeProgramFromUrl = () => {
    const url = new URL(window.location.href);

    url.searchParams.delete("program");

    const newUrl = `${url.pathname}${
      url.search ? `?${url.searchParams.toString()}` : ""
    }${url.hash}`;

    window.history.pushState({}, "", newUrl);
  };

  /*
   * Opens a program.
   */
  const openProgram = (program) => {
    if (!program.formLink) return;

    updateProgramUrl(program);
    setSelectedProgram(program);
    setShareProgram(null);
  };

  /*
   * Closes the application screen.
   */
  const closeProgram = () => {
    removeProgramFromUrl();
    setSelectedProgram(null);
  };

  /*
   * Copy link function with fallback for older browsers.
   */
  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {
      // Continue to fallback.
    }

    try {
      const textArea = document.createElement("textarea");

      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      textArea.style.opacity = "0";

      document.body.appendChild(textArea);

      textArea.focus();
      textArea.select();

      const copied = document.execCommand("copy");

      document.body.removeChild(textArea);

      return copied;
    } catch {
      return false;
    }
  };

  /*
   * Copy a specific program link.
   */
  const handleCopyLink = async (program) => {
    const url = getProgramUrl(program);
    const copied = await copyToClipboard(url);

    if (copied) {
      setCopiedProgram(program.id);

      setTimeout(() => {
        setCopiedProgram(null);
      }, 2200);
    }
  };

  /*
   * Open the device's native sharing menu.
   */
  const handleNativeShare = async (program) => {
    const shareUrl = getProgramUrl(program);

    const shareData = {
      title: `${program.title} | VFAW`,
      text: `Check out this VFAW program: ${program.title}`,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await handleCopyLink(program);
      }
    } catch (error) {
      /*
       * AbortError simply means the user closed the native
       * sharing menu. We don't show an error in that case.
       */
      if (error?.name === "AbortError") {
        return;
      }
    }
  };

  /*
   * Opens the share menu for a particular program.
   */
  const handleShareClick = (program) => {
    setShareProgram(program);
    setCopiedProgram(null);
  };

  /*
   * Close share popup when clicking outside.
   */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        shareProgram &&
        !event.target.closest(".share-menu") &&
        !event.target.closest(".share-button")
      ) {
        setShareProgram(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [shareProgram]);

  /*
   * When somebody opens:
   *
   * /apply?program=clinical-report-writing
   *
   * automatically open that program.
   */
  useEffect(() => {
    const syncProgramFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get("program");

      if (!slug) {
        setSelectedProgram(null);
        return;
      }

      const program = programs.find((item) => item.slug === slug);

      if (program?.formLink) {
        setSelectedProgram(program);
      } else {
        setSelectedProgram(null);
      }
    };

    syncProgramFromUrl();

    window.addEventListener("popstate", syncProgramFromUrl);

    return () => {
      window.removeEventListener("popstate", syncProgramFromUrl);
    };
  }, []);

  /*
   * ESC:
   * - closes share popup first
   * - otherwise closes application screen
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;

      if (shareProgram) {
        setShareProgram(null);
        return;
      }

      if (selectedProgram) {
        closeProgram();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProgram, shareProgram]);

  /*
   * Lock page scrolling while application screen is open.
   */
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

  /*
   * If a program is selected, show the full application screen.
   */
  if (selectedProgram) {
    return (
      <>
        <div className="application-screen">
          <header className="application-header">
            <button
              type="button"
              className="application-back"
              onClick={closeProgram}
            >
              <Icon name="back" size={19} />
              <span>Back</span>
            </button>

            <div className="application-header-title">
              <div className="application-header-icon">
                <Icon name="form" size={19} />
              </div>

              <div>
                <span>APPLICATION</span>
                <strong>{selectedProgram.title}</strong>
              </div>
            </div>

            <a
              href={selectedProgram.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="application-new-tab"
            >
              <span>Open in New Tab</span>
              <Icon name="external" size={17} />
            </a>
          </header>

          <main className="application-content">
            <div className="application-workspace">
              <iframe
                src={selectedProgram.formLink}
                title={`${selectedProgram.title} Application Form`}
                className="application-iframe"
                height="1100"
                loading="eager"
              />

              <div className="application-fallback">
                <p>
                  If the application form does not appear correctly, open it
                  directly.
                </p>

                <a
                  href={selectedProgram.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Application Form
                  <Icon name="external" size={16} />
                </a>
              </div>
            </div>
          </main>
        </div>

        <style>{`
          .application-screen {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background:
              radial-gradient(
                circle at 15% 10%,
                rgba(14, 165, 233, 0.12),
                transparent 28%
              ),
              #f4f9fd;
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }

          .application-header {
            min-height: 74px;
            padding: 0 28px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            background: rgba(255, 255, 255, 0.96);
            border-bottom: 1px solid #dbe7f0;
            box-shadow: 0 8px 30px rgba(15, 59, 92, 0.06);
            backdrop-filter: blur(14px);
          }

          .application-back,
          .application-new-tab {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            min-height: 42px;
            padding: 0 16px;
            border-radius: 11px;
            font-size: 13px;
            font-weight: 700;
            text-decoration: none;
            transition:
              transform 0.2s ease,
              background 0.2s ease,
              border-color 0.2s ease;
          }

          .application-back {
            border: 1px solid #d7e4ed;
            background: #fff;
            color: #17445f;
            cursor: pointer;
          }

          .application-back:hover {
            background: #f1f8fc;
            transform: translateX(-2px);
          }

          .application-new-tab {
            border: 1px solid #075985;
            background: #075985;
            color: #fff;
          }

          .application-new-tab:hover {
            background: #064d73;
            transform: translateY(-1px);
          }

          .application-header-title {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
          }

          .application-header-icon {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 11px;
            background: #e5f3fb;
            color: #075985;
          }

          .application-header-title div:last-child {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;
          }

          .application-header-title span {
            color: #668294;
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 0.16em;
          }

          .application-header-title strong {
            color: #123c56;
            font-size: 14px;
            font-weight: 800;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 48vw;
          }

          .application-content {
            flex: 1;
            min-height: 0;
            overflow: auto;
            padding: 26px;
          }

          .application-workspace {
            width: min(1180px, 100%);
            margin: 0 auto;
            min-height: 100%;
            background: #fff;
            border: 1px solid #dce8f0;
            border-radius: 18px;
            box-shadow: 0 20px 60px rgba(14, 55, 82, 0.09);
            overflow: hidden;
          }

          .application-iframe {
            display: block;
            width: 100%;
            min-height: 850px;
            height: 1100px;
            border: 0;
            background: #fff;
          }

          .application-fallback {
            padding: 18px 22px 24px;
            border-top: 1px solid #e8eef3;
            text-align: center;
          }

          .application-fallback p {
            margin: 0 0 12px;
            color: #6b8291;
            font-size: 12px;
          }

          .application-fallback a {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #075985;
            font-size: 13px;
            font-weight: 800;
            text-decoration: none;
          }

          .application-fallback a:hover {
            text-decoration: underline;
          }

          @media (max-width: 700px) {
            .application-header {
              min-height: 66px;
              padding: 0 12px;
              gap: 8px;
            }

            .application-back,
            .application-new-tab {
              min-width: 40px;
              width: 40px;
              height: 40px;
              padding: 0;
            }

            .application-back span,
            .application-new-tab span {
              display: none;
            }

            .application-header-title {
              flex: 1;
              justify-content: center;
            }

            .application-header-icon {
              width: 35px;
              height: 35px;
            }

            .application-header-title strong {
              max-width: 45vw;
              font-size: 12px;
            }

            .application-content {
              padding: 10px;
            }

            .application-workspace {
              border-radius: 12px;
            }

            .application-iframe {
              min-height: 850px;
              height: 1100px;
            }
          }
        `}</style>
      </>
    );
  }

  return (
    <div className="apply-page">
      <section className="apply-hero">
        <div className="hero-grid" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="apply-hero-box">
          <span className="hero-eyebrow">OPPORTUNITIES</span>

          <h1>Choose a Program</h1>

          <p>
            Explore VFAW programs designed to support veterinary students,
            youth development, professional learning, and meaningful
            participation in animal welfare.
          </p>

          <div className="hero-line" />
        </div>

        <div className="apply-stats">
          <div className="stat-item">
            <strong>{programs.length}</strong>
            <span>Programs Listed</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-item">
            <strong>{availablePrograms.length}</strong>
            <span>Applications Available</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-item">
            <strong>VFAW</strong>
            <span>Student-Led Initiative</span>
          </div>
        </div>
      </section>

      <main className="programs-section">
        <div className="programs-container">
          <div className="section-heading">
            <div>
              <span>PROGRAMS</span>
              <h2>Current Opportunities</h2>
            </div>

            <p>
              Select a program to learn more and apply when applications are
              available.
            </p>
          </div>

          <div className="program-grid">
            {programs.map((program) => (
              <article
                key={program.id}
                className={`apply-card apply-card-${program.shade}`}
              >
                <div className="card-top">
                  <div className="program-type">{program.type}</div>

                  <div className="program-date">
                    <Icon name="calendar" size={15} />
                    <span>{program.date}</span>
                  </div>
                </div>

                <div className="card-content">
                  <h3>{program.title}</h3>

                  <p>{program.description}</p>
                </div>

                <div className="card-bottom">
                  <div className="availability-row">
                    {program.formLink ? (
                      <div className="availability-badge">
                        <span className="availability-dot" />
                        <span>APPLICATION AVAILABLE</span>
                      </div>
                    ) : (
                      <div className="coming-badge">
                        <span className="coming-dot" />
                        <span>COMING SOON</span>
                      </div>
                    )}
                  </div>

                  <div className="card-actions">
                    {program.formLink ? (
                      <button
                        type="button"
                        className="apply-button"
                        onClick={() => openProgram(program)}
                      >
                        <span>Apply Now</span>
                        <Icon name="arrow" size={17} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="apply-button disabled"
                        disabled
                      >
                        <span>Applications Coming Soon</span>
                      </button>
                    )}

                    <button
                      type="button"
                      className="share-button"
                      onClick={() => handleShareClick(program)}
                      aria-label={`Share ${program.title}`}
                    >
                      <Icon name="share" size={17} />
                      <span>Share</span>
                    </button>
                  </div>

                  {shareProgram?.id === program.id && (
                    <div className="share-menu">
                      <div className="share-menu-header">
                        <div>
                          <span>SHARE PROGRAM</span>
                          <strong>{program.title}</strong>
                        </div>

                        <button
                          type="button"
                          className="share-close"
                          onClick={() => setShareProgram(null)}
                          aria-label="Close share menu"
                        >
                          <Icon name="close" size={16} />
                        </button>
                      </div>

                      <div className="share-menu-options">
                        <button
                          type="button"
                          className="share-option"
                          onClick={() => handleNativeShare(program)}
                        >
                          <span className="share-option-icon">
                            <Icon name="share" size={18} />
                          </span>

                          <span className="share-option-text">
                            <strong>Share to Other Apps</strong>
                            <small>
                              Share this program using your device
                            </small>
                          </span>

                          <Icon name="arrow" size={16} />
                        </button>

                        <button
                          type="button"
                          className="share-option"
                          onClick={() => handleCopyLink(program)}
                        >
                          <span className="share-option-icon">
                            {copiedProgram === program.id ? (
                              <Icon name="check" size={18} />
                            ) : (
                              <Icon name="copy" size={18} />
                            )}
                          </span>

                          <span className="share-option-text">
                            <strong>
                              {copiedProgram === program.id
                                ? "Link Copied"
                                : "Copy Link"}
                            </strong>

                            <small>
                              {copiedProgram === program.id
                                ? "Program link copied successfully"
                                : "Copy a direct link to this program"}
                            </small>
                          </span>

                          <Icon
                            name={
                              copiedProgram === program.id
                                ? "check"
                                : "arrow"
                            }
                            size={16}
                          />
                        </button>
                      </div>

                      <div className="share-url">
                        {getProgramUrl(program)}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .apply-page {
          min-height: 100vh;
          background: #f5faff;
          color: #123c56;
          overflow-x: hidden;
        }

        /* ================================
           HERO
        ================================= */

        .apply-hero {
          position: relative;
          padding: 80px 24px 58px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(14, 165, 233, 0.12),
              transparent 36%
            ),
            linear-gradient(
              180deg,
              #f8fcff 0%,
              #eef8fd 100%
            );
          border-bottom: 1px solid #dbeaf3;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          opacity: 0.32;
          background-image:
            linear-gradient(
              rgba(8, 83, 122, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(8, 83, 122, 0.055) 1px,
              transparent 1px
            );
          background-size: 38px 38px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 85%
          );
        }

        .hero-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(70px);
          pointer-events: none;
        }

        .hero-glow-one {
          width: 260px;
          height: 260px;
          left: -130px;
          top: 30px;
          background: rgba(14, 165, 233, 0.12);
        }

        .hero-glow-two {
          width: 280px;
          height: 280px;
          right: -150px;
          bottom: -80px;
          background: rgba(6, 148, 162, 0.11);
        }

        .apply-hero-box {
          position: relative;
          z-index: 2;
          width: min(820px, 100%);
          margin: 0 auto;
          padding: 44px 42px;
          text-align: center;
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(197, 220, 234, 0.9);
          border-radius: 24px;
          box-shadow:
            0 20px 55px rgba(15, 72, 104, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 13px;
          border: 1px solid #bcd9e8;
          border-radius: 999px;
          color: #0a628e;
          background: #eff9fe;
          font-size: 10px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        .apply-hero-box h1 {
          margin: 16px 0 10px;
          color: #103e59;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.1;
          letter-spacing: -0.035em;
          font-weight: 850;
        }

        .apply-hero-box p {
          max-width: 650px;
          margin: 0 auto;
          color: #668294;
          font-size: 14px;
          line-height: 1.8;
        }

        .hero-line {
          width: 55px;
          height: 3px;
          margin: 22px auto 0;
          border-radius: 999px;
          background: #0877a9;
        }

        .apply-stats {
          position: relative;
          z-index: 2;
          width: min(800px, 100%);
          margin: 32px auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
        }

        .stat-item {
          display: flex;
          min-width: 150px;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          text-align: center;
        }

        .stat-item strong {
          color: #075985;
          font-size: 18px;
          line-height: 1;
          font-weight: 850;
        }

        .stat-item span {
          color: #78909e;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.04em;
        }

        .stat-divider {
          width: 1px;
          height: 34px;
          background: #cbdde8;
        }

        /* ================================
           PROGRAM SECTION
        ================================= */

        .programs-section {
          padding: 70px 24px 90px;
          background:
            linear-gradient(
              180deg,
              #f5faff 0%,
              #ffffff 100%
            );
        }

        .programs-container {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 28px;
        }

        .section-heading > div span {
          color: #0875a5;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.17em;
        }

        .section-heading h2 {
          margin: 7px 0 0;
          color: #123c56;
          font-size: clamp(25px, 3vw, 34px);
          letter-spacing: -0.025em;
          line-height: 1.1;
        }

        .section-heading p {
          max-width: 390px;
          margin: 0;
          color: #728896;
          font-size: 12px;
          line-height: 1.7;
          text-align: right;
        }

        .program-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          align-items: stretch;
        }

        /* ================================
           PROGRAM CARDS
        ================================= */

        .apply-card {
          position: relative;
          min-height: 420px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          overflow: visible;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 22px;
          box-shadow:
            0 15px 28px rgba(12, 73, 104, 0.16),
            0 28px 50px rgba(12, 73, 104, 0.07);
          transition:
            transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 0.3s ease;
        }

        .apply-card:hover {
          transform: translateY(-9px);
          box-shadow:
            0 25px 40px rgba(12, 73, 104, 0.2),
            0 40px 70px rgba(12, 73, 104, 0.1);
        }

        .apply-card::after {
          content: "";
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: -10px;
          height: 14px;
          border-radius: 0 0 18px 18px;
          background: rgba(4, 49, 72, 0.3);
          filter: blur(4px);
          z-index: -1;
        }

        .apply-card-blue {
          background: #075985;
        }

        .apply-card-sky {
          background: #0c6ea8;
        }

        .apply-card-cyan {
          background: #087f9c;
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .program-type {
          color: rgba(255, 255, 255, 0.82);
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .program-date {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.88);
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
        }

        .card-content {
          flex: 1;
          padding: 26px 0;
        }

        .card-content h3 {
          margin: 0 0 13px;
          color: #fff;
          font-size: 21px;
          line-height: 1.22;
          letter-spacing: -0.02em;
          font-weight: 800;
        }

        .card-content p {
          margin: 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 12px;
          line-height: 1.75;
        }

        .card-bottom {
          position: relative;
        }

        .availability-row {
          min-height: 30px;
          display: flex;
          align-items: center;
          margin-bottom: 13px;
        }

        .availability-badge,
        .coming-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.96);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .availability-badge {
          color: #dc2626;
          animation: applicationBlink 1.2s infinite;
        }

        .coming-badge {
          color: #66808f;
        }

        .availability-dot,
        .coming-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
        }

        .availability-dot {
          background: #dc2626;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.12);
        }

        .coming-dot {
          background: #78909e;
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

        .card-actions {
          display: flex;
          align-items: stretch;
          gap: 9px;
        }

        .apply-button,
        .share-button {
          min-height: 45px;
          border-radius: 11px;
          font-family: inherit;
          font-size: 11px;
          font-weight: 850;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .apply-button {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 0 15px;
          border: 1px solid rgba(255, 255, 255, 0.95);
          background: #fff;
          color: #075985;
        }

        .apply-button:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.13);
        }

        .apply-button.disabled {
          background: rgba(255, 255, 255, 0.13);
          border-color: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.56);
          cursor: not-allowed;
        }

        .share-button {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 0 14px;
          border: 1px solid rgba(255, 255, 255, 0.36);
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          backdrop-filter: blur(6px);
        }

        .share-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        /* ================================
           SHARE MENU
        ================================= */

        .share-menu {
          position: absolute;
          z-index: 50;
          left: 0;
          right: 0;
          bottom: calc(100% + 12px);
          padding: 15px;
          border: 1px solid rgba(206, 227, 238, 0.95);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.98);
          color: #123c56;
          box-shadow:
            0 22px 45px rgba(5, 47, 70, 0.22),
            0 8px 20px rgba(5, 47, 70, 0.12);
          backdrop-filter: blur(16px);
          animation: shareMenuIn 0.2s ease-out;
        }

        @keyframes shareMenuIn {
          from {
            opacity: 0;
            transform: translateY(7px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .share-menu-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          padding: 2px 2px 12px;
          border-bottom: 1px solid #e6eef3;
        }

        .share-menu-header div {
          min-width: 0;
        }

        .share-menu-header span {
          display: block;
          margin-bottom: 4px;
          color: #6c8796;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.13em;
        }

        .share-menu-header strong {
          display: block;
          color: #123c56;
          font-size: 12px;
          line-height: 1.35;
        }

        .share-close {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 8px;
          background: #f0f6f9;
          color: #5f7886;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .share-close:hover {
          background: #e4eff5;
        }

        .share-menu-options {
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding: 11px 0;
        }

        .share-option {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          border: 1px solid #e0ebf1;
          border-radius: 11px;
          background: #fff;
          color: #17445f;
          text-align: left;
          cursor: pointer;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .share-option:hover {
          background: #f3f9fc;
          border-color: #bcd9e8;
          transform: translateY(-1px);
        }

        .share-option-icon {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #e9f6fc;
          color: #0872a2;
        }

        .share-option-text {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .share-option-text strong {
          color: #17445f;
          font-size: 11px;
          font-weight: 850;
        }

        .share-option-text small {
          color: #78909e;
          font-size: 9px;
          line-height: 1.4;
        }

        .share-option > svg {
          color: #76909e;
          flex-shrink: 0;
        }

        .share-url {
          padding: 8px 10px;
          border-radius: 8px;
          background: #f2f7fa;
          color: #718997;
          font-size: 8px;
          line-height: 1.45;
          word-break: break-all;
        }

        /* ================================
           RESPONSIVE
        ================================= */

        @media (max-width: 950px) {
          .program-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .apply-hero {
            padding: 52px 16px 42px;
          }

          .apply-hero-box {
            padding: 32px 20px;
            border-radius: 18px;
          }

          .apply-hero-box p {
            font-size: 12px;
            line-height: 1.7;
          }

          .apply-stats {
            gap: 12px;
          }

          .stat-item {
            min-width: 0;
            flex: 1;
          }

          .stat-item strong {
            font-size: 15px;
          }

          .stat-item span {
            font-size: 8px;
            line-height: 1.35;
          }

          .stat-divider {
            height: 28px;
          }

          .programs-section {
            padding: 48px 16px 65px;
          }

          .section-heading {
            display: block;
            margin-bottom: 22px;
          }

          .section-heading p {
            margin-top: 10px;
            text-align: left;
          }

          .program-grid {
            grid-template-columns: 1fr;
          }

          .apply-card {
            min-height: 390px;
            padding: 21px;
          }

          .card-content h3 {
            font-size: 20px;
          }

          .card-actions {
            flex-direction: column;
          }

          .apply-button,
          .share-button {
            width: 100%;
          }

          .share-button {
            min-height: 42px;
          }

          .share-menu {
            position: fixed;
            left: 14px;
            right: 14px;
            bottom: 14px;
            z-index: 999;
            width: auto;
          }
        }

        @media (max-width: 430px) {
          .card-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }

          .program-date {
            font-size: 9px;
          }

          .availability-badge,
          .coming-badge {
            font-size: 8px;
          }

          .share-menu {
            padding: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .apply-card,
          .apply-button,
          .share-button,
          .share-option,
          .share-menu {
            transition: none;
            animation: none;
          }

          .availability-badge {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Apply;
