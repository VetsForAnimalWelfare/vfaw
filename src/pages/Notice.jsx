import React, { useMemo, useState } from "react";

const notices = [
  {
    id: "clinical-report-writing",
    title: "Clinical Report Writing Competition",
    category: "Competition",
    date: "2026-09-20",
    description:
      "Showcase your clinical reporting skills and participate in the VFAW Clinical Report Writing Competition.",
    type: "PDF",
    file: "/notices/clinical-report-writing.pdf",
    important: true,
    pinned: true,
  },
  {
    id: "educational-webinar",
    title: "VFAW Educational Webinar",
    category: "Event",
    date: "2026-09-18",
    description:
      "Join our educational webinar and gain valuable knowledge from veterinary and animal welfare professionals.",
    type: "PDF",
    file: "/notices/webinar.pdf",
    important: false,
    pinned: true,
  },
  {
    id: "volunteer-registration",
    title: "Volunteer Registration Open",
    category: "Opportunity",
    date: "2026-09-15",
    description:
      "Applications are open for students interested in joining VFAW activities and contributing to animal welfare.",
    type: "Image",
    file: "/notices/volunteer.png",
    important: false,
    pinned: false,
  },
  {
    id: "animal-welfare-awareness",
    title: "Animal Welfare Awareness Program",
    category: "Program",
    date: "2026-09-12",
    description:
      "An upcoming awareness initiative focused on responsible animal care, welfare education and community participation.",
    type: "PDF",
    file: "/notices/animal-welfare-awareness.pdf",
    important: false,
    pinned: false,
  },
];

const categories = [
  "All",
  ...new Set(notices.map((notice) => notice.category)),
];

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function scrollToNotice(id) {
  const element = document.getElementById(`notice-${id}`);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  window.history.replaceState(
    null,
    "",
    `#notice-${id}`
  );

  element.classList.remove("notice-highlight");

  void element.offsetWidth;

  element.classList.add("notice-highlight");

  setTimeout(() => {
    element.classList.remove("notice-highlight");
  }, 1800);
}

export default function Notice() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedNotice, setSelectedNotice] = useState(null);

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const categoryMatch =
        activeCategory === "All" ||
        notice.category === activeCategory;

      const searchValue = search.toLowerCase().trim();

      const searchMatch =
        !searchValue ||
        notice.title.toLowerCase().includes(searchValue) ||
        notice.description.toLowerCase().includes(searchValue) ||
        notice.category.toLowerCase().includes(searchValue);

      return categoryMatch && searchMatch;
    });
  }, [search, activeCategory]);

  /*
    Duplicate ticker items create a seamless loop.
    Clicking either copy still scrolls to the ORIGINAL notice card.
  */
  const tickerNotices = [...notices, ...notices];

  return (
    <>
      <style>{`

        /* =========================================================
           GLOBAL
        ========================================================= */

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .notice-page {
          min-height: 100vh;
          background: #f7f9fc;
          color: #101828;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }


        /* =========================================================
           MOVING NOTICE TICKER
        ========================================================= */

        .notice-ticker-wrapper {
          position: relative;
          z-index: 20;

          display: flex;
          align-items: center;

          height: 52px;

          overflow: hidden;

          background: #ffffff;

          border-bottom: 1px solid #e5eaf1;

          box-shadow:
            0 4px 18px rgba(15, 23, 42, 0.05);
        }

        .notice-ticker-label {
          position: relative;
          z-index: 4;

          flex-shrink: 0;

          height: 100%;

          display: flex;
          align-items: center;

          gap: 9px;

          padding: 0 24px;

          background: #0759b8;

          color: #ffffff;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 1.4px;
        }

        .ticker-label-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #ffffff;

          box-shadow:
            0 0 0 4px rgba(255,255,255,0.15);
        }

        .notice-ticker {
          position: relative;

          flex: 1;

          height: 100%;

          overflow: hidden;
        }

        .notice-ticker::before,
        .notice-ticker::after {
          content: "";

          position: absolute;

          top: 0;
          bottom: 0;

          width: 55px;

          z-index: 3;

          pointer-events: none;
        }

        .notice-ticker::before {
          left: 0;

          background:
            linear-gradient(
              to right,
              #ffffff,
              rgba(255,255,255,0)
            );
        }

        .notice-ticker::after {
          right: 0;

          background:
            linear-gradient(
              to left,
              #ffffff,
              rgba(255,255,255,0)
            );
        }

        .notice-ticker-track {
          width: max-content;
          height: 100%;

          display: inline-flex;
          align-items: center;

          animation:
            tickerMove 25s linear infinite;
        }

        .notice-ticker:hover
        .notice-ticker-track {
          animation-play-state: paused;
        }

        @keyframes tickerMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .ticker-notice {
          appearance: none;

          display: inline-flex;
          align-items: center;

          gap: 9px;

          margin: 0;
          padding: 7px 14px;

          border: 0;
          border-radius: 999px;

          background: transparent;

          color: #0759b8;

          font: inherit;
          font-size: 13px;
          font-weight: 650;

          white-space: nowrap;

          cursor: pointer;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .ticker-notice:hover {
          background: #0759b8;
          color: #ffffff;

          transform: translateY(-1px);
        }

        .ticker-dot {
          width: 7px;
          height: 7px;

          flex-shrink: 0;

          border-radius: 50%;

          background: currentColor;
        }

        .ticker-separator {
          margin: 0 12px;

          color: #b7c2d1;

          font-size: 16px;
        }


        /* =========================================================
           HERO
        ========================================================= */

        .notice-hero {
          position: relative;

          min-height: 390px;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(255,255,255,0.14),
              transparent 27%
            ),
            radial-gradient(
              circle at 85% 80%,
              rgba(255,255,255,0.11),
              transparent 30%
            ),
            #0759b8;

          color: #ffffff;

          text-align: center;
        }

        .hero-grid {
          position: absolute;

          inset: 0;

          opacity: 0.08;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            );

          background-size: 42px 42px;

          mask-image:
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.9),
              transparent
            );
        }

        .hero-decoration {
          position: absolute;

          border: 1px solid
            rgba(255,255,255,0.15);

          border-radius: 50%;

          pointer-events: none;
        }

        .hero-decoration-one {
          width: 340px;
          height: 340px;

          left: -180px;
          top: -160px;
        }

        .hero-decoration-two {
          width: 460px;
          height: 460px;

          right: -280px;
          bottom: -300px;
        }

        .notice-hero-content {
          position: relative;
          z-index: 2;

          width: min(850px, 90%);

          padding: 70px 0;
        }

        .hero-badge {
          width: fit-content;

          margin: 0 auto 20px;

          display: inline-flex;
          align-items: center;

          gap: 9px;

          padding: 8px 15px;

          border:
            1px solid
            rgba(255,255,255,0.25);

          border-radius: 999px;

          background:
            rgba(255,255,255,0.1);

          backdrop-filter: blur(10px);

          font-size: 12px;
          font-weight: 650;

          letter-spacing: 0.3px;
        }

        .hero-badge-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #ffffff;
        }

        .notice-hero h1 {
          margin: 0;

          font-size:
            clamp(42px, 7vw, 72px);

          line-height: 0.98;

          letter-spacing: -3px;

          font-weight: 800;
        }

        .notice-hero h1 span {
          opacity: 0.72;
        }

        .notice-hero p {
          max-width: 650px;

          margin: 25px auto 0;

          color:
            rgba(255,255,255,0.83);

          font-size: 16px;

          line-height: 1.7;
        }

        .hero-stats {
          margin-top: 35px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 28px;
        }

        .hero-stat {
          display: flex;
          flex-direction: column;

          gap: 3px;
        }

        .hero-stat strong {
          font-size: 18px;
          font-weight: 750;
        }

        .hero-stat span {
          color:
            rgba(255,255,255,0.65);

          font-size: 11px;

          text-transform: uppercase;

          letter-spacing: 1px;
        }

        .hero-stat-divider {
          width: 1px;
          height: 34px;

          background:
            rgba(255,255,255,0.25);
        }


        /* =========================================================
           MAIN
        ========================================================= */

        .notice-container {
          width:
            min(1180px, calc(100% - 40px));

          margin: 0 auto;

          padding: 55px 0 90px;
        }


        /* =========================================================
           CONTROLS
        ========================================================= */

        .notice-controls {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 25px;

          margin-bottom: 25px;
        }

        .notice-search {
          position: relative;

          width: 310px;

          flex-shrink: 0;
        }

        .notice-search > svg {
          position: absolute;

          left: 16px;
          top: 50%;

          width: 18px;
          height: 18px;

          transform:
            translateY(-50%);

          color: #8491a5;
        }

        .notice-search input {
          width: 100%;
          height: 46px;

          padding:
            0 43px 0 45px;

          border:
            1px solid #dfe5ed;

          border-radius: 12px;

          outline: none;

          background: #ffffff;

          color: #172033;

          font: inherit;

          font-size: 13px;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .notice-search input:focus {
          border-color: #0759b8;

          box-shadow:
            0 0 0 4px
            rgba(7,89,184,0.08);
        }

        .clear-search {
          position: absolute;

          right: 10px;
          top: 50%;

          width: 27px;
          height: 27px;

          transform:
            translateY(-50%);

          border: 0;
          border-radius: 50%;

          background: #eef2f7;

          color: #68778c;

          cursor: pointer;

          font-size: 18px;
          line-height: 1;
        }

        .category-filters {
          display: flex;

          align-items: center;
          justify-content: flex-end;

          gap: 7px;

          flex-wrap: wrap;
        }

        .category-btn {
          padding: 9px 15px;

          border:
            1px solid #e0e6ee;

          border-radius: 999px;

          background: #ffffff;

          color: #637187;

          font: inherit;

          font-size: 12px;
          font-weight: 650;

          cursor: pointer;

          transition: all 0.2s ease;
        }

        .category-btn:hover {
          border-color: #0759b8;
          color: #0759b8;
        }

        .category-btn.active {
          border-color: #0759b8;

          background: #0759b8;

          color: #ffffff;
        }


        /* =========================================================
           RESULTS
        ========================================================= */

        .notice-results-info {
          display: flex;

          align-items: center;
          justify-content: space-between;

          margin-bottom: 17px;

          color: #778499;

          font-size: 12px;
        }

        .notice-results-info strong {
          color: #182234;
        }

        .reset-filters {
          border: 0;

          background: transparent;

          color: #0759b8;

          font: inherit;

          font-size: 12px;
          font-weight: 700;

          cursor: pointer;
        }


        /* =========================================================
           NOTICE CARDS
        ========================================================= */

        .notice-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 18px;
        }

        .notice-card {
          position: relative;

          display: flex;
          flex-direction: column;

          min-height: 320px;

          padding: 25px;

          background: #ffffff;

          border:
            1px solid #e4e9f0;

          border-radius: 18px;

          box-shadow:
            0 8px 25px
            rgba(15,23,42,0.045);

          scroll-margin-top: 100px;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .notice-card:hover {
          transform:
            translateY(-4px);

          border-color: #cbd9e9;

          box-shadow:
            0 18px 40px
            rgba(15,23,42,0.08);
        }

        /*
          This is the temporary effect shown after
          clicking a notice from the moving ticker.
        */

        .notice-card.notice-highlight {
          animation:
            noticeHighlight 1.8s ease;
        }

        @keyframes noticeHighlight {
          0% {
            transform: scale(1);

            box-shadow:
              0 0 0
              rgba(7,89,184,0);
          }

          25% {
            transform: scale(1.018);

            border-color: #0759b8;

            box-shadow:
              0 0 0 5px
              rgba(7,89,184,0.12),
              0 25px 50px
              rgba(7,89,184,0.12);
          }

          100% {
            transform: scale(1);
          }
        }

        .notice-card-top {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 15px;
        }

        .notice-category {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          color: #0759b8;

          font-size: 11px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 0.7px;
        }

        .category-dot {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #0759b8;
        }

        .notice-card-actions {
          display: flex;

          align-items: center;

          gap: 7px;
        }

        .important-badge {
          padding: 5px 8px;

          border-radius: 6px;

          background: #fff3e7;

          color: #b85c08;

          font-size: 9px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 0.5px;
        }

        .pin-badge {
          display: flex;

          align-items: center;
          justify-content: center;

          width: 28px;
          height: 28px;

          border-radius: 8px;

          background: #edf5ff;

          color: #0759b8;
        }

        .pin-badge svg {
          width: 14px;
          height: 14px;
        }

        .notice-date {
          display: flex;

          align-items: center;

          gap: 7px;

          margin-top: 25px;

          color: #8995a7;

          font-size: 11px;

          font-weight: 550;
        }

        .notice-date svg {
          width: 14px;
          height: 14px;
        }

        .notice-card h2 {
          margin:
            13px 0 10px;

          color: #152033;

          font-size: 22px;

          line-height: 1.25;

          letter-spacing: -0.5px;
        }

        .notice-description {
          margin: 0;

          color: #69778c;

          font-size: 13px;

          line-height: 1.7;
        }

        .notice-card-footer {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 15px;

          margin-top: auto;

          padding-top: 25px;
        }

        .notice-file-type {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: #778499;

          font-size: 11px;

          font-weight: 650;
        }

        .file-icon {
          display: flex;

          align-items: center;
          justify-content: center;

          width: 30px;
          height: 30px;

          border-radius: 8px;

          background: #f0f5fb;

          color: #0759b8;
        }

        .file-icon svg {
          width: 15px;
          height: 15px;
        }

        .view-notice-btn {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          border: 0;

          background: transparent;

          color: #0759b8;

          font: inherit;

          font-size: 12px;

          font-weight: 750;

          cursor: pointer;

          transition:
            gap 0.2s ease;
        }

        .view-notice-btn:hover {
          gap: 12px;
        }

        .view-notice-btn svg {
          width: 15px;
          height: 15px;
        }


        /* =========================================================
           EMPTY STATE
        ========================================================= */

        .empty-state {
          padding: 75px 20px;

          text-align: center;

          background: #ffffff;

          border:
            1px solid #e4e9f0;

          border-radius: 18px;
        }

        .empty-icon {
          display: flex;

          align-items: center;
          justify-content: center;

          width: 60px;
          height: 60px;

          margin:
            0 auto 18px;

          border-radius: 50%;

          background: #edf5ff;

          color: #0759b8;
        }

        .empty-icon svg {
          width: 25px;
          height: 25px;
        }

        .empty-state h2 {
          margin:
            0 0 8px;

          font-size: 20px;
        }

        .empty-state p {
          max-width: 420px;

          margin:
            0 auto 22px;

          color: #7b8798;

          font-size: 13px;

          line-height: 1.6;
        }

        .empty-state button {
          padding: 10px 16px;

          border: 0;

          border-radius: 9px;

          background: #0759b8;

          color: #ffffff;

          font: inherit;

          font-size: 12px;

          font-weight: 700;

          cursor: pointer;
        }


        /* =========================================================
           MODAL
        ========================================================= */

        .notice-modal-backdrop {
          position: fixed;

          z-index: 1000;

          inset: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          padding: 25px;

          background:
            rgba(8,19,35,0.72);

          backdrop-filter: blur(8px);

          animation:
            modalFade 0.2s ease;
        }

        @keyframes modalFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .notice-modal {
          width:
            min(1050px, 100%);

          height:
            min(850px, 92vh);

          display: flex;
          flex-direction: column;

          overflow: hidden;

          border-radius: 18px;

          background: #ffffff;

          box-shadow:
            0 30px 100px
            rgba(0,0,0,0.3);

          animation:
            modalUp 0.25s ease;
        }

        @keyframes modalUp {
          from {
            transform:
              translateY(15px)
              scale(0.98);

            opacity: 0;
          }

          to {
            transform:
              translateY(0)
              scale(1);

            opacity: 1;
          }
        }

        .modal-header {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 20px;

          padding: 20px 24px;

          border-bottom:
            1px solid #e7ebf0;
        }

        .modal-category {
          color: #0759b8;

          font-size: 10px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 1px;
        }

        .modal-header h2 {
          margin:
            5px 0 0;

          font-size: 20px;

          line-height: 1.3;
        }

        .modal-close {
          display: flex;

          align-items: center;
          justify-content: center;

          width: 36px;
          height: 36px;

          flex-shrink: 0;

          border: 0;

          border-radius: 10px;

          background: #f0f3f7;

          color: #526174;

          cursor: pointer;

          font-size: 24px;

          line-height: 1;

          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: #0759b8;

          color: #ffffff;
        }

        .modal-content {
          flex: 1;

          min-height: 0;

          background: #edf0f4;
        }

        .notice-pdf {
          width: 100%;
          height: 100%;

          border: 0;
        }

        .notice-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: contain;

          padding: 20px;
        }

        .modal-footer {
          display: flex;

          align-items: center;
          justify-content: space-between;

          padding: 13px 20px;

          border-top:
            1px solid #e7ebf0;

          color: #8792a3;

          font-size: 11px;
        }

        .open-new-tab {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          color: #0759b8;

          font-size: 11px;

          font-weight: 700;

          text-decoration: none;
        }

        .open-new-tab svg {
          width: 13px;
          height: 13px;
        }


        /* =========================================================
           RESPONSIVE
        ========================================================= */

        @media (max-width: 900px) {

          .notice-controls {
            flex-direction: column;

            align-items: stretch;
          }

          .notice-search {
            width: 100%;
          }

          .category-filters {
            justify-content: flex-start;
          }

          .notice-grid {
            grid-template-columns: 1fr;
          }
        }


        @media (max-width: 650px) {

          .notice-ticker-wrapper {
            height: 46px;
          }

          .notice-ticker-label {
            padding: 0 14px;

            font-size: 9px;
          }

          .notice-ticker-track {
            animation-duration: 22s;
          }

          .ticker-notice {
            font-size: 11px;
          }

          .notice-hero {
            min-height: 350px;
          }

          .notice-hero-content {
            padding: 55px 0;
          }

          .notice-hero h1 {
            font-size: 43px;

            letter-spacing: -2px;
          }

          .notice-hero p {
            font-size: 14px;
          }

          .hero-stats {
            gap: 18px;
          }

          .notice-container {
            width:
              min(100% - 26px, 1180px);

            padding-top: 35px;
          }

          .notice-card {
            min-height: 300px;

            padding: 20px;
          }

          .notice-card h2 {
            font-size: 19px;
          }

          .notice-card-footer {
            align-items: flex-end;
          }

          .notice-modal-backdrop {
            padding: 10px;
          }

          .notice-modal {
            height: 95vh;

            border-radius: 14px;
          }

          .modal-header {
            padding: 16px;
          }

          .modal-header h2 {
            font-size: 16px;
          }

          .modal-footer {
            padding: 11px 14px;
          }
        }


        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {

          html {
            scroll-behavior: auto;
          }

          .notice-ticker-track {
            animation: none;
          }

          .notice-card,
          .ticker-notice,
          .view-notice-btn {
            transition: none;
          }
        }

      `}</style>

      <div className="notice-page">

        {/* =====================================================
            MOVING NOTICE BAR
        ===================================================== */}

        <div className="notice-ticker-wrapper">

          <div className="notice-ticker-label">
            <span className="ticker-label-dot"></span>

            <span>NOTICE</span>
          </div>

          <div className="notice-ticker">

            <div className="notice-ticker-track">

              {tickerNotices.map((notice, index) => (
                <React.Fragment
                  key={`${notice.id}-${index}`}
                >

                  <button
                    type="button"
                    className="ticker-notice"
                    onClick={() =>
                      scrollToNotice(notice.id)
                    }
                  >

                    <span className="ticker-dot"></span>

                    <span>
                      {notice.title}
                    </span>

                  </button>

                  <span className="ticker-separator">
                    •
                  </span>

                </React.Fragment>
              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="notice-hero">

          <div className="hero-grid"></div>

          <div
            className="hero-decoration hero-decoration-one"
          ></div>

          <div
            className="hero-decoration hero-decoration-two"
          ></div>

          <div className="notice-hero-content">

            <div className="hero-badge">

              <span className="hero-badge-dot"></span>

              VFAW Official Communication

            </div>

            <h1>
              Notices
              <span> & Updates.</span>
            </h1>

            <p>
              Stay up to date with official VFAW
              announcements, competitions,
              educational events, opportunities
              and important activities.
            </p>

            <div className="hero-stats">

              <div className="hero-stat">

                <strong>
                  {notices.length}
                </strong>

                <span>
                  Published Notices
                </span>

              </div>

              <div className="hero-stat-divider"></div>

              <div className="hero-stat">

                <strong>
                  Regularly
                </strong>

                <span>
                  Updated
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <main className="notice-container">

          {/* SEARCH + CATEGORY */}

          <section className="notice-controls">

            <div className="notice-search">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />

                <path d="m20 20-4-4" />
              </svg>

              <input
                type="text"
                placeholder="Search notices..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              {search && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() =>
                    setSearch("")
                  }
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}

            </div>


            <div className="category-filters">

              {categories.map((category) => (

                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "category-btn active"
                      : "category-btn"
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>

              ))}

            </div>

          </section>


          {/* RESULTS */}

          <div className="notice-results-info">

            <span>
              Showing{" "}
              <strong>
                {filteredNotices.length}
              </strong>{" "}
              {filteredNotices.length === 1
                ? "notice"
                : "notices"}
            </span>

            {(search ||
              activeCategory !== "All") && (

              <button
                type="button"
                className="reset-filters"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Reset filters
              </button>

            )}

          </div>


          {/* =================================================
              NOTICE CARDS
          ================================================= */}

          {filteredNotices.length > 0 ? (

            <section className="notice-grid">

              {filteredNotices.map((notice) => (

                <article
                  key={notice.id}
                  id={`notice-${notice.id}`}
                  className="notice-card"
                >

                  {/* CARD TOP */}

                  <div className="notice-card-top">

                    <div className="notice-category">

                      <span className="category-dot"></span>

                      {notice.category}

                    </div>


                    <div className="notice-card-actions">

                      {notice.important && (
                        <span className="important-badge">
                          Important
                        </span>
                      )}

                      {notice.pinned && (

                        <span className="pin-badge">

                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="m15 4 5 5-3 1-4 6-4-4 6-4z" />
                            <path d="M9 15 4 20" />
                          </svg>

                        </span>

                      )}

                    </div>

                  </div>


                  {/* DATE */}

                  <div className="notice-date">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                      />

                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>

                    {formatDate(notice.date)}

                  </div>


                  {/* TITLE */}

                  <h2>
                    {notice.title}
                  </h2>


                  {/* DESCRIPTION */}

                  <p className="notice-description">
                    {notice.description}
                  </p>


                  {/* FOOTER */}

                  <div className="notice-card-footer">

                    <span className="notice-file-type">

                      <span className="file-icon">

                        {notice.type === "PDF" ? (

                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />

                            <path d="M14 2v6h6" />

                            <path d="M8 13h2M8 17h6" />
                          </svg>

                        ) : (

                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="2"
                            />

                            <circle
                              cx="8.5"
                              cy="8.5"
                              r="1.5"
                            />

                            <path d="m21 15-5-5L5 21" />
                          </svg>

                        )}

                      </span>

                      {notice.type}

                    </span>


                    <button
                      type="button"
                      className="view-notice-btn"
                      onClick={() =>
                        setSelectedNotice(notice)
                      }
                    >

                      View Notice

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>

                    </button>

                  </div>

                </article>

              ))}

            </section>

          ) : (

            /* =================================================
               EMPTY STATE
            ================================================= */

            <section className="empty-state">

              <div className="empty-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                  />

                  <path d="m20 20-4-4" />
                </svg>

              </div>

              <h2>
                No notices found
              </h2>

              <p>
                We couldn't find any notices
                matching your search or selected
                category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                View all notices
              </button>

            </section>

          )}

        </main>


        {/* =====================================================
            NOTICE VIEWER
        ===================================================== */}

        {selectedNotice && (

          <div
            className="notice-modal-backdrop"
            onClick={() =>
              setSelectedNotice(null)
            }
          >

            <div
              className="notice-modal"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <div className="modal-header">

                <div>

                  <span className="modal-category">
                    {selectedNotice.category}
                  </span>

                  <h2>
                    {selectedNotice.title}
                  </h2>

                </div>


                <button
                  type="button"
                  className="modal-close"
                  onClick={() =>
                    setSelectedNotice(null)
                  }
                  aria-label="Close notice"
                >
                  ×
                </button>

              </div>


              <div className="modal-content">

                {selectedNotice.type === "PDF" ? (

                  <iframe
                    src={selectedNotice.file}
                    title={selectedNotice.title}
                    className="notice-pdf"
                  />

                ) : (

                  <img
                    src={selectedNotice.file}
                    alt={selectedNotice.title}
                    className="notice-image"
                  />

                )}

              </div>


              <div className="modal-footer">

                <span>
                  Published{" "}
                  {formatDate(
                    selectedNotice.date
                  )}
                </span>


                <a
                  href={selectedNotice.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-new-tab"
                >

                  Open in new tab

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 3h7v7" />
                    <path d="M10 14 21 3" />
                    <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                  </svg>

                </a>

              </div>

            </div>

          </div>

        )}

      </div>
    </>
  );
}
