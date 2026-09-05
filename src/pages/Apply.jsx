import React, { useEffect, useMemo, useState } from "react";

const programs = [
  {
    id: 1,
    title: "Clinical Report Writing Competition",
    description:
      "Training program focused on the development of student skills and knowledge.",
    date: "2083/05/20",
    type: "Student Development",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeh4etkOFN3AlsO-oNBUTR3khVb2I2jvMdw_hlzxYP5IH_vqQ/viewform?usp=header",
  },
  {
    id: 2,
    title: "Veterinary Workshop",
    description:
      "Upcoming veterinary education and practical training workshop.",
    date: "Coming Soon",
    type: "Veterinary Education",
    formLink:
      "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
  },
  {
    id: 3,
    title: "Youth Development Program",
    description:
      "A program designed for youth learning, development and meaningful participation.",
    date: "Coming Soon",
    type: "Youth Development",
    formLink:
      "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
  },
];

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M7 2v3M17 2v3M3.5 9.5h17M5 4.5h14A1.5 1.5 0 0 1 20.5 6v13A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V6A1.5 1.5 0 0 1 5 4.5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M5 12h13M13 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M14 5h5v5M19 5l-8 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 13v5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18V7a1.5 1.5 0 0 1 1.5-1.5h5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const FormIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect
      x="4"
      y="3"
      width="16"
      height="18"
      rx="2.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path
      d="M8 8h8M8 12h8M8 16h5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="m5 12.5 4.2 4.2L19 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Apply = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const availablePrograms = useMemo(() => {
    return programs.filter(
      (program) => !program.formLink.includes("YOUR_FORM_ID")
    );
  }, []);

  useEffect(() => {
    if (!selectedProgram) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProgram(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProgram]);

  const openProgram = (program) => {
    if (program.formLink.includes("YOUR_FORM_ID")) {
      return;
    }

    setSelectedProgram(program);
  };

  return (
    <>
      <style>{`
        .apply-page {
          --apply-primary: #1671b8;
          --apply-primary-dark: #075183;
          --apply-primary-deep: #052f4d;
          --apply-cyan: #38bdf8;
          --apply-sky: #7dd3fc;
          --apply-text: #172b38;
          --apply-muted: #6c7f8c;
          --apply-background: #f4f8fb;
          --apply-white: #ffffff;
          --apply-border: #d7e3eb;

          min-height: 100vh;
          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(56, 189, 248, 0.07),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 70%,
              rgba(22, 113, 184, 0.06),
              transparent 30%
            ),
            var(--apply-background);

          color: var(--apply-text);
          overflow-x: hidden;
        }

        .apply-hero {
          position: relative;
          min-height: 570px;
          display: flex;
          align-items: center;
          overflow: hidden;
          color: white;

          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(56, 189, 248, 0.2),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #052f4d 0%,
              #075183 48%,
              #0b659d 100%
            );
        }

        .apply-grid {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px
            );

          background-size: 48px 48px;

          mask-image:
            linear-gradient(
              to bottom,
              black 0%,
              rgba(0, 0, 0, 0.7) 70%,
              transparent 100%
            );
        }

        .apply-glow {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
        }

        .apply-glow-one {
          width: 390px;
          height: 390px;
          right: -120px;
          top: -130px;

          background: rgba(56, 189, 248, 0.13);

          filter: blur(5px);

          box-shadow:
            0 0 110px rgba(56, 189, 248, 0.25);
        }

        .apply-glow-two {
          width: 270px;
          height: 270px;
          left: -120px;
          bottom: -130px;

          background: rgba(125, 211, 252, 0.08);
          filter: blur(5px);
        }

        .apply-hero-content {
          position: relative;
          z-index: 2;

          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;

          padding: 110px 0 90px;
        }

        .apply-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 9px 15px;

          border: 1px solid rgba(255, 255, 255, 0.17);
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.075);

          backdrop-filter: blur(14px);

          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.17em;

          color: #dff5ff;
        }

        .apply-eyebrow-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #7dd3fc;

          box-shadow:
            0 0 0 5px rgba(125, 211, 252, 0.08),
            0 0 18px rgba(125, 211, 252, 0.6);
        }

        .apply-hero h1 {
          max-width: 850px;

          margin: 25px 0 20px;

          font-size: clamp(48px, 6.5vw, 82px);

          line-height: 0.99;

          letter-spacing: -0.055em;

          font-weight: 850;
        }

        .apply-hero h1 span {
          color: #7dd3fc;
        }

        .apply-hero-description {
          max-width: 650px;

          margin: 0;

          color: rgba(255, 255, 255, 0.76);

          font-size: 18px;

          line-height: 1.75;
        }

        .apply-stats {
          display: flex;
          align-items: center;

          margin-top: 55px;
        }

        .apply-stat {
          display: flex;
          flex-direction: column;

          gap: 5px;

          min-width: 150px;
        }

        .apply-stat strong {
          font-size: 27px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .apply-stat span {
          color: rgba(255, 255, 255, 0.57);

          font-size: 11px;
          font-weight: 700;

          text-transform: uppercase;

          letter-spacing: 0.12em;
        }

        .apply-stat-divider {
          width: 1px;
          height: 42px;

          margin: 0 28px;

          background: rgba(255, 255, 255, 0.16);
        }

        .apply-content {
          width: min(1240px, calc(100% - 48px));

          margin: 0 auto;

          padding: 100px 0 30px;
        }

        .apply-section-heading {
          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 50px;

          margin-bottom: 48px;
        }

        .apply-kicker {
          color: var(--apply-primary);

          font-size: 11px;

          font-weight: 850;

          letter-spacing: 0.18em;
        }

        .apply-section-heading h2 {
          margin: 8px 0 0;

          font-size: clamp(34px, 4vw, 50px);

          line-height: 1;

          letter-spacing: -0.045em;
        }

        .apply-section-heading p {
          max-width: 460px;

          margin: 0;

          color: var(--apply-muted);

          font-size: 15px;

          line-height: 1.75;
        }

        .program-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 24px;
        }

        .program-card {
          position: relative;

          min-height: 455px;

          padding: 30px;

          overflow: hidden;

          border: 1px solid var(--apply-border);

          border-radius: 25px;

          background:
            linear-gradient(
              145deg,
              #ffffff,
              #f9fcfe
            );

          box-shadow:
            0 20px 55px rgba(5, 47, 77, 0.1);

          transition:
            transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 0.45s ease,
            border-color 0.45s ease;
        }

        .program-card:hover {
          transform: translateY(-10px);

          border-color:
            rgba(22, 113, 184, 0.3);

          box-shadow:
            0 30px 70px rgba(5, 47, 77, 0.18);
        }

        .program-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;
          right: 0;

          height: 3px;

          background:
            linear-gradient(
              90deg,
              var(--apply-primary),
              var(--apply-cyan)
            );

          transform: scaleX(0);

          transform-origin: left;

          transition:
            transform 0.45s ease;
        }

        .program-card:hover::before {
          transform: scaleX(1);
        }

        .program-card-glow {
          position: absolute;

          width: 220px;
          height: 220px;

          right: -100px;
          top: -100px;

          border-radius: 50%;

          background:
            rgba(56, 189, 248, 0.09);

          filter: blur(5px);

          transition:
            transform 0.5s ease;
        }

        .program-card:hover
        .program-card-glow {
          transform: scale(1.35);
        }

        .program-top {
          position: relative;
          z-index: 2;

          display: flex;

          justify-content: space-between;

          align-items: center;

          gap: 15px;
        }

        .program-number {
          width: 48px;
          height: 48px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 15px;

          background:
            linear-gradient(
              145deg,
              #eaf7ff,
              #dff2fc
            );

          color: var(--apply-primary);

          font-size: 14px;

          font-weight: 850;
        }

        .program-status {
          display: flex;

          align-items: center;

          gap: 7px;

          padding: 7px 10px;

          border-radius: 999px;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.06em;

          text-transform: uppercase;
        }

        .program-status span {
          width: 6px;
          height: 6px;

          border-radius: 50%;
        }

        .status-available {
          color: #08724e;

          background: #e8f8f1;
        }

        .status-available span {
          background: #18a773;

          box-shadow:
            0 0 10px rgba(24, 167, 115, 0.5);
        }

        .status-soon {
          color: #687782;

          background: #edf2f5;
        }

        .status-soon span {
          background: #8c9ba5;
        }

        .program-icon {
          width: 62px;
          height: 62px;

          display: flex;

          align-items: center;

          justify-content: center;

          margin-top: 30px;

          border-radius: 19px;

          color: var(--apply-primary);

          background:
            linear-gradient(
              145deg,
              #f0f9ff,
              #e6f4fc
            );

          transition:
            transform 0.45s ease,
            background 0.45s ease,
            color 0.45s ease;
        }

        .program-icon svg {
          width: 27px;
          height: 27px;
        }

        .program-card:hover
        .program-icon {
          transform:
            rotate(-4deg)
            scale(1.08);

          color: white;

          background:
            linear-gradient(
              145deg,
              var(--apply-primary),
              var(--apply-primary-dark)
            );
        }

        .program-category {
          margin-top: 24px;

          color: var(--apply-primary);

          font-size: 10px;

          font-weight: 850;

          text-transform: uppercase;

          letter-spacing: 0.15em;
        }

        .program-card h3 {
          position: relative;

          z-index: 2;

          margin: 10px 0 12px;

          color: var(--apply-text);

          font-size: 23px;

          line-height: 1.2;

          letter-spacing: -0.035em;

          transition:
            color 0.3s ease;
        }

        .program-card:hover h3 {
          color: var(--apply-primary-dark);
        }

        .program-description {
          position: relative;

          z-index: 2;

          min-height: 67px;

          margin: 0;

          color: var(--apply-muted);

          font-size: 14px;

          line-height: 1.65;
        }

        .program-meta {
          margin-top: 22px;

          padding-top: 18px;

          border-top:
            1px solid #e5edf2;
        }

        .program-date {
          display: flex;

          align-items: center;

          gap: 9px;

          color: #526875;

          font-size: 12px;

          font-weight: 700;
        }

        .program-date svg {
          width: 17px;
          height: 17px;

          color: var(--apply-primary);
        }

        .program-footer {
          margin-top: 22px;
        }

        .apply-button {
          width: 100%;

          min-height: 50px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding: 0 17px;

          border: 0;

          border-radius: 14px;

          background: #122c3b;

          color: white;

          font-size: 12px;

          font-weight: 800;

          cursor: pointer;

          transition:
            background 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .apply-button svg {
          width: 20px;
          height: 20px;

          transition:
            transform 0.3s ease;
        }

        .apply-button:hover {
          background:
            linear-gradient(
              135deg,
              var(--apply-primary),
              var(--apply-primary-dark)
            );

          transform: translateY(-2px);

          box-shadow:
            0 12px 25px
            rgba(22, 113, 184, 0.2);
        }

        .apply-button:hover svg {
          transform: translateX(4px);
        }

        .apply-button:active {
          transform: translateY(0);
        }

        .apply-button-disabled {
          background: #e8eef2;

          color: #83939d;

          cursor: not-allowed;
        }

        .apply-button-disabled:hover {
          background: #e8eef2;

          transform: none;

          box-shadow: none;
        }

        .program-index {
          position: absolute;

          right: 28px;

          bottom: 15px;

          color:
            rgba(22, 113, 184, 0.06);

          font-size: 70px;

          font-weight: 900;

          line-height: 1;

          pointer-events: none;
        }

        .apply-info-section {
          width:
            min(1240px, calc(100% - 48px));

          margin: 0 auto;

          padding:
            55px 0 100px;
        }

        .apply-info-card {
          display: flex;

          align-items: flex-start;

          gap: 22px;

          padding: 28px 32px;

          border:
            1px solid var(--apply-border);

          border-radius: 21px;

          background:
            rgba(255, 255, 255, 0.78);

          box-shadow:
            0 12px 35px
            rgba(5, 47, 77, 0.055);
        }

        .apply-info-icon {
          flex: 0 0 auto;

          width: 45px;
          height: 45px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 14px;

          color:
            var(--apply-primary);

          background:
            #eaf7ff;
        }

        .apply-info-icon svg {
          width: 21px;
          height: 21px;
        }

        .apply-info-label {
          color:
            var(--apply-primary);

          font-size: 9px;

          font-weight: 850;

          letter-spacing: 0.15em;
        }

        .apply-info-card h3 {
          margin:
            5px 0;

          font-size: 17px;

          letter-spacing: -0.02em;
        }

        .apply-info-card p {
          max-width: 850px;

          margin: 0;

          color:
            var(--apply-muted);

          font-size: 13px;

          line-height: 1.7;
        }

        .application-workspace {
          min-height: 100vh;

          padding-bottom: 60px;

          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(56, 189, 248, 0.08),
              transparent 25%
            ),
            #f1f6f9;
        }

        .application-topbar {
          height: 76px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding:
            0 max(
              24px,
              calc((100vw - 1240px) / 2)
            );

          border-bottom:
            1px solid
            rgba(203, 219, 230, 0.8);

          background:
            rgba(255, 255, 255, 0.9);

          backdrop-filter:
            blur(20px);

          position: sticky;

          top: 0;

          z-index: 50;
        }

        .back-button {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          padding: 10px 14px;

          border: 0;

          border-radius: 11px;

          background: transparent;

          color: #526875;

          font-size: 12px;

          font-weight: 800;

          cursor: pointer;

          transition:
            color 0.25s ease,
            background 0.25s ease;
        }

        .back-button:hover {
          color:
            var(--apply-primary);

          background:
            #edf7fc;
        }

        .back-arrow {
          font-size: 19px;

          line-height: 1;
        }

        .workspace-label {
          display: flex;

          align-items: center;

          gap: 8px;

          color: #82939e;

          font-size: 9px;

          font-weight: 850;

          letter-spacing: 0.15em;
        }

        .workspace-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #19a875;

          box-shadow:
            0 0 0 4px
            rgba(25, 168, 117, 0.08);
        }

        .application-container {
          width:
            min(1180px, calc(100% - 36px));

          margin:
            35px auto 0;

          overflow: hidden;

          border:
            1px solid #d7e3eb;

          border-radius: 24px;

          background: white;

          box-shadow:
            0 25px 80px
            rgba(5, 47, 77, 0.1);
        }

        .application-header {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 30px;

          padding:
            35px 38px;

          color: white;

          background:
            radial-gradient(
              circle at 90% 0%,
              rgba(56, 189, 248, 0.22),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #052f4d,
              #075183
            );
        }

        .application-header-content {
          display: flex;

          align-items: center;

          gap: 20px;
        }

        .application-header-icon {
          flex: 0 0 auto;

          width: 62px;
          height: 62px;

          display: flex;

          align-items: center;

          justify-content: center;

          border:
            1px solid
            rgba(255, 255, 255, 0.13);

          border-radius: 17px;

          background:
            rgba(255, 255, 255, 0.09);

          color:
            #7dd3fc;

          backdrop-filter:
            blur(10px);
        }

        .application-header-icon svg {
          width: 28px;
          height: 28px;
        }

        .application-label {
          color:
            rgba(255, 255, 255, 0.55);

          font-size: 9px;

          font-weight: 850;

          letter-spacing: 0.16em;
        }

        .application-header h1 {
          margin:
            7px 0 12px;

          font-size:
            clamp(25px, 3vw, 36px);

          line-height: 1.1;

          letter-spacing: -0.04em;
        }

        .application-details {
          display: flex;

          align-items: center;

          gap: 18px;

          color:
            rgba(255, 255, 255, 0.67);

          font-size: 11px;

          font-weight: 700;
        }

        .application-details div {
          display: flex;

          align-items: center;

          gap: 7px;
        }

        .application-details svg {
          width: 16px;
          height: 16px;

          color:
            #7dd3fc;
        }

        .detail-dot {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background:
            #7dd3fc;
        }

        .external-form-button {
          flex: 0 0 auto;

          display: inline-flex;

          align-items: center;

          gap: 10px;

          padding:
            13px 16px;

          border:
            1px solid
            rgba(255, 255, 255, 0.16);

          border-radius: 12px;

          background:
            rgba(255, 255, 255, 0.09);

          color: white;

          font-size: 11px;

          font-weight: 800;

          text-decoration: none;

          backdrop-filter:
            blur(10px);

          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .external-form-button svg {
          width: 16px;
          height: 16px;
        }

        .external-form-button:hover {
          background:
            rgba(255, 255, 255, 0.16);

          transform:
            translateY(-2px);
        }

        .application-body {
          padding: 22px;
        }

        .application-notice {
          display: flex;

          align-items: center;

          gap: 13px;

          margin-bottom: 20px;

          padding: 14px 17px;

          border:
            1px solid #dcebf2;

          border-radius: 14px;

          background:
            #f7fbfd;
        }

        .notice-icon {
          flex: 0 0 auto;

          width: 34px;
          height: 34px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 10px;

          color: #15946b;

          background: #e8f8f1;
        }

        .notice-icon svg {
          width: 17px;
          height: 17px;
        }

        .notice-text {
          display: flex;

          flex-direction: column;

          gap: 2px;
        }

        .notice-text strong {
          color:
            var(--apply-text);

          font-size: 12px;
        }

        .notice-text span {
          color:
            var(--apply-muted);

          font-size: 11px;
        }

        .form-frame {
          overflow: hidden;

          min-height: 900px;

          border:
            1px solid #dce6ec;

          border-radius: 17px;

          background:
            white;
        }

        .application-iframe {
          display: block;

          width: 100%;

          height: 900px;

          border: 0;

          background:
            white;
        }

        .apply-button:focus-visible,
        .back-button:focus-visible,
        .external-form-button:focus-visible {
          outline:
            3px solid
            rgba(56, 189, 248, 0.45);

          outline-offset: 3px;
        }

        @media (max-width: 1050px) {
          .program-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .apply-section-heading {
            align-items:
              flex-start;

            flex-direction:
              column;

            gap: 18px;
          }

          .apply-section-heading p {
            max-width: 650px;
          }
        }

        @media (max-width: 760px) {
          .apply-hero {
            min-height: 520px;
          }

          .apply-hero-content {
            width:
              min(100% - 36px, 620px);

            padding:
              90px 0 70px;
          }

          .apply-hero h1 {
            font-size:
              clamp(43px, 12vw, 65px);
          }

          .apply-hero-description {
            font-size: 15px;
          }

          .apply-stats {
            margin-top: 40px;
          }

          .apply-stat {
            min-width: auto;
          }

          .apply-stat strong {
            font-size: 21px;
          }

          .apply-stat span {
            font-size: 9px;
          }

          .apply-stat-divider {
            margin: 0 15px;
          }

          .apply-content {
            width:
              min(100% - 36px, 620px);

            padding-top: 75px;
          }

          .program-grid {
            grid-template-columns: 1fr;
          }

          .program-card {
            min-height: auto;
          }

          .apply-info-section {
            width:
              min(100% - 36px, 620px);

            padding-bottom: 70px;
          }

          .application-header {
            align-items:
              flex-start;

            flex-direction:
              column;
          }

          .external-form-button {
            width: 100%;

            justify-content:
              center;
          }

          .application-body {
            padding: 14px;
          }

          .application-container {
            width:
              calc(100% - 24px);

            margin-top: 20px;

            border-radius: 18px;
          }
        }

        @media (max-width: 520px) {
          .apply-hero-content {
            width:
              calc(100% - 30px);
          }

          .apply-eyebrow {
            font-size: 9px;
          }

          .apply-hero h1 {
            font-size: 42px;

            letter-spacing: -0.06em;
          }

          .apply-hero-description {
            font-size: 14px;

            line-height: 1.65;
          }

          .apply-stats {
            flex-wrap: wrap;

            gap: 18px;
          }

          .apply-stat-divider {
            display: none;
          }

          .apply-stat {
            min-width:
              calc(50% - 10px);
          }

          .apply-content {
            width:
              calc(100% - 30px);
          }

          .apply-section-heading h2 {
            font-size: 36px;
          }

          .program-card {
            padding: 24px;

            border-radius: 21px;
          }

          .program-top {
            align-items:
              flex-start;
          }

          .program-status {
            max-width: 155px;

            text-align: right;
          }

          .program-card h3 {
            font-size: 21px;
          }

          .apply-info-section {
            width:
              calc(100% - 30px);
          }

          .apply-info-card {
            flex-direction:
              column;

            padding: 23px;
          }

          .application-topbar {
            height: 65px;

            padding: 0 12px;
          }

          .back-button {
            padding: 9px;
          }

          .back-button span:last-child {
            display: none;
          }

          .workspace-label {
            font-size: 8px;
          }

          .application-container {
            width:
              calc(100% - 16px);

            margin-top: 12px;
          }

          .application-header {
            padding:
              25px 20px;
          }

          .application-header-content {
            align-items:
              flex-start;

            flex-direction:
              column;
          }

          .application-header h1 {
            font-size: 25px;
          }

          .application-details {
            align-items:
              flex-start;

            flex-direction:
              column;

            gap: 8px;
          }

          .application-details .detail-dot {
            display: none;
          }

          .application-body {
            padding: 9px;
          }

          .application-notice {
            align-items:
              flex-start;
          }

          .notice-text span {
            line-height: 1.5;
          }

          .form-frame {
            border-radius: 12px;
          }

          .application-iframe {
            height: 850px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .program-card,
          .program-icon,
          .program-card-glow,
          .apply-button,
          .external-form-button {
            transition: none;
          }
        }
      `}</style>

      <main className="apply-page">
        {!selectedProgram ? (
          <>
            <section className="apply-hero">
              <div className="apply-grid" />
              <div className="apply-glow apply-glow-one" />
              <div className="apply-glow apply-glow-two" />

              <div className="apply-hero-content">
                <div className="apply-eyebrow">
                  <span className="apply-eyebrow-dot" />
                  PROGRAM APPLICATIONS
                </div>

                <h1>
                  Learn.
                  <span> Participate.</span>
                  <br />
                  Make an Impact.
                </h1>

                <p className="apply-hero-description">
                  Explore educational programs, training opportunities and
                  student-focused initiatives by Vets For Animal Welfare.
                </p>

                <div className="apply-stats">
                  <div className="apply-stat">
                    <strong>{programs.length}</strong>
                    <span>Programs</span>
                  </div>

                  <div className="apply-stat-divider" />

                  <div className="apply-stat">
                    <strong>{availablePrograms.length}</strong>
                    <span>Applications Available</span>
                  </div>

                  <div className="apply-stat-divider" />

                  <div className="apply-stat">
                    <strong>VFAW</strong>
                    <span>Student Led</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="apply-content">
              <div className="apply-section-heading">
                <div>
                  <span className="apply-kicker">
                    OPPORTUNITIES
                  </span>

                  <h2>
                    Choose a Program
                  </h2>
                </div>

                <p>
                  Find an opportunity that matches your interests and take the
                  next step in your learning journey.
                </p>
              </div>

              <div className="program-grid">
                {programs.map((program, index) => {
                  const formAvailable =
                    !program.formLink.includes("YOUR_FORM_ID");

                  return (
                    <article
                      key={program.id}
                      className="program-card"
                    >
                      <div className="program-card-glow" />

                      <div className="program-top">
                        <div className="program-number">
                          {String(program.id).padStart(2, "0")}
                        </div>

                        <div
                          className={`program-status ${
                            formAvailable
                              ? "status-available"
                              : "status-soon"
                          }`}
                        >
                          <span />

                          {formAvailable
                            ? "Application Available"
                            : "Coming Soon"}
                        </div>
                      </div>

                      <div className="program-icon">
                        <FormIcon />
                      </div>

                      <div className="program-category">
                        {program.type}
                      </div>

                      <h3>
                        {program.title}
                      </h3>

                      <p className="program-description">
                        {program.description}
                      </p>

                      <div className="program-meta">
                        <div className="program-date">
                          <CalendarIcon />

                          <span>
                            {program.date}
                          </span>
                        </div>
                      </div>

                      <div className="program-footer">
                        {formAvailable ? (
                          <button
                            type="button"
                            className="apply-button"
                            onClick={() =>
                              openProgram(program)
                            }
                          >
                            <span>
                              Apply Now
                            </span>

                            <ArrowIcon />
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="apply-button apply-button-disabled"
                            disabled
                          >
                            <span>
                              Applications Coming Soon
                            </span>
                          </button>
                        )}
                      </div>

                      <span className="program-index">
                        0{index + 1}
                      </span>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="apply-info-section">
              <div className="apply-info-card">
                <div className="apply-info-icon">
                  <CheckIcon />
                </div>

                <div>
                  <span className="apply-info-label">
                    BEFORE YOU APPLY
                  </span>

                  <h3>
                    Choose the opportunity that fits you best.
                  </h3>

                  <p>
                    Review the program information and complete the
                    application form carefully. Programs marked Coming Soon
                    will become available when registration opens.
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="application-workspace">
            <div className="application-topbar">
              <button
                type="button"
                className="back-button"
                onClick={() =>
                  setSelectedProgram(null)
                }
              >
                <span className="back-arrow">
                  ←
                </span>

                <span>
                  Back to Programs
                </span>
              </button>

              <div className="workspace-label">
                <span className="workspace-dot" />
                APPLICATION FORM
              </div>
            </div>

            <div className="application-container">
              <header className="application-header">
                <div className="application-header-content">
                  <div className="application-header-icon">
                    <FormIcon />
                  </div>

                  <div>
                    <span className="application-label">
                      PROGRAM APPLICATION
                    </span>

                    <h1>
                      {selectedProgram.title}
                    </h1>

                    <div className="application-details">
                      <div>
                        <CalendarIcon />
                        {selectedProgram.date}
                      </div>

                      <div>
                        <span className="detail-dot" />
                        {selectedProgram.type}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={selectedProgram.formLink}
                  target="_blank"
                  rel="noreferrer"
                  className="external-form-button"
                >
                  <span>
                    Open in New Tab
                  </span>

                  <ExternalIcon />
                </a>
              </header>

              <div className="application-body">
                <div className="application-notice">
                  <div className="notice-icon">
                    <CheckIcon />
                  </div>

                  <div className="notice-text">
                    <strong>
                      Application Form
                    </strong>

                    <span>
                      Complete the form below. If the form does not load,
                      use “Open in New Tab”.
                    </span>
                  </div>
                </div>

                <div className="form-frame">
                  <iframe
                    src={selectedProgram.formLink}
                    title={`${selectedProgram.title} application form`}
                    className="application-iframe"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                  >
                    Loading application form…
                  </iframe>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default Apply;
