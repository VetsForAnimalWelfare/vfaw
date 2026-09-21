import React, { useMemo, useState } from "react";

/*
  VFAW Notice Page
  File: src/pages/Notice.jsx
*/

const noticesData = [
  {
    id: 1,
    title: "Clinical Report Writing Competition",
    description:
      "Registration is now open for the VFAW Clinical Report Writing Competition.",
    category: "Competition",
    date: "2026-09-20",
    file: "/notices/clinical-report-writing.pdf",
    fileType: "pdf",
    important: true,
    pinned: true,
  },
  {
    id: 2,
    title: "VFAW Educational Webinar",
    description:
      "Join our upcoming educational webinar on animal welfare and veterinary practice.",
    category: "Event",
    date: "2026-09-18",
    file: "/notices/webinar.pdf",
    fileType: "pdf",
    important: false,
    pinned: true,
  },
  {
    id: 3,
    title: "Volunteer Registration Open",
    description:
      "Students interested in joining VFAW activities can now submit their applications.",
    category: "Opportunity",
    date: "2026-09-15",
    file: "/notices/volunteer.png",
    fileType: "image",
    important: false,
    pinned: false,
  },
];

const categories = [
  "All",
  "Important",
  "Competition",
  "Event",
  "Opportunity",
  "Announcement",
];

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function Notice() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedNotice, setSelectedNotice] = useState(null);

  const filteredNotices = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return noticesData.filter((notice) => {
      const matchesSearch =
        !searchText ||
        notice.title.toLowerCase().includes(searchText) ||
        notice.description.toLowerCase().includes(searchText) ||
        notice.category.toLowerCase().includes(searchText);

      let matchesCategory = true;

      if (activeCategory === "Important") {
        matchesCategory = notice.important;
      } else if (activeCategory !== "All") {
        matchesCategory = notice.category === activeCategory;
      }

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const tickerNotices = noticesData.filter(
    (notice) => notice.pinned || notice.important
  );

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  const closeModal = () => {
    setSelectedNotice(null);
  };

  return (
    <div className="vfaw-notices">
      <style>{`
        .vfaw-notices {
          --blue: #0759b8;
          --blue-dark: #063d82;
          --blue-light: #eaf4ff;
          --blue-soft: #f5f9ff;
          --text: #10243e;
          --muted: #66778c;
          --border: #e4ebf3;
          --white: #ffffff;
          --shadow-sm: 0 5px 20px rgba(20, 66, 110, 0.06);
          --shadow-md: 0 18px 50px rgba(20, 66, 110, 0.12);

          width: 100%;
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 10% 5%,
              rgba(7, 89, 184, 0.035),
              transparent 28%
            ),
            #ffffff;
          color: var(--text);
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          box-sizing: border-box;
        }

        .vfaw-notices *,
        .vfaw-notices *::before,
        .vfaw-notices *::after {
          box-sizing: border-box;
        }

        /* TICKER */

        .vfaw-ticker {
          width: 100%;
          height: 48px;
          display: flex;
          align-items: center;
          background: #ffffff;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          position: relative;
          z-index: 20;
        }

        .vfaw-ticker-label {
          height: 100%;
          min-width: 120px;
          padding: 0 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--blue);
          color: #ffffff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.3px;
          position: relative;
          z-index: 3;
        }

        .vfaw-ticker-bell {
          font-size: 14px;
        }

        .vfaw-ticker-window {
          height: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .vfaw-ticker-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: vfawTickerMove 35s linear infinite;
        }

        .vfaw-ticker-track:hover {
          animation-play-state: paused;
        }

        .vfaw-ticker-item {
          border: 0;
          background: transparent;
          padding: 0 18px;
          color: var(--text);
          font-family: inherit;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .vfaw-ticker-item:hover {
          color: var(--blue);
        }

        .vfaw-ticker-separator {
          color: #b9c9da;
        }

        .vfaw-ticker-all {
          height: 100%;
          padding: 0 20px;
          border: 0;
          border-left: 1px solid var(--border);
          background: #ffffff;
          color: var(--blue);
          font-family: inherit;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
          position: relative;
          z-index: 3;
        }

        .vfaw-ticker-all:hover {
          background: var(--blue-soft);
        }

        @keyframes vfawTickerMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* HERO */

        .vfaw-notice-hero {
          position: relative;
          min-height: 320px;
          padding: 65px max(6vw, 25px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          background:
            linear-gradient(
              120deg,
              #f7fbff 0%,
              #edf6ff 52%,
              #f9fcff 100%
            );
          border-bottom: 1px solid #e7eff7;
        }

        .vfaw-hero-content {
          max-width: 700px;
          position: relative;
          z-index: 2;
        }

        .vfaw-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 13px;
          border: 1px solid rgba(7, 89, 184, 0.12);
          border-radius: 100px;
          background: rgba(7, 89, 184, 0.07);
          color: var(--blue);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .vfaw-hero-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--blue);
          box-shadow: 0 0 0 4px rgba(7, 89, 184, 0.08);
        }

        .vfaw-hero-content h1 {
          margin: 18px 0 12px;
          font-size: clamp(40px, 5vw, 62px);
          line-height: 1.02;
          letter-spacing: -2.5px;
          font-weight: 850;
        }

        .vfaw-hero-content h1 span {
          color: var(--blue);
        }

        .vfaw-hero-content p {
          max-width: 620px;
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.7;
        }

        .vfaw-hero-decoration {
          width: 270px;
          height: 230px;
          position: relative;
          margin-right: 4vw;
        }

        .vfaw-decoration-circle {
          position: absolute;
          width: 220px;
          height: 220px;
          right: 0;
          top: 0;
          border-radius: 50%;
          background:
            linear-gradient(
              135deg,
              rgba(7, 89, 184, 0.16),
              rgba(7, 89, 184, 0.02)
            );
          border: 1px solid rgba(7, 89, 184, 0.08);
        }

        .vfaw-decoration-card {
          position: absolute;
          left: 0;
          bottom: 10px;
          width: 185px;
          padding: 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 18px 45px rgba(7, 89, 184, 0.13);
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .vfaw-decoration-card-icon {
          font-size: 28px;
        }

        .vfaw-decoration-card strong {
          font-size: 14px;
        }

        .vfaw-decoration-card small {
          color: var(--muted);
          font-size: 11px;
        }

        /* CONTROLS */

        .vfaw-controls {
          max-width: 1240px;
          margin: auto;
          padding: 35px 25px 15px;
        }

        .vfaw-search {
          width: 100%;
          height: 55px;
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 14px;
          box-shadow: var(--shadow-sm);
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .vfaw-search:focus-within {
          border-color: rgba(7, 89, 184, 0.35);
          box-shadow:
            0 0 0 4px rgba(7, 89, 184, 0.05),
            var(--shadow-sm);
        }

        .vfaw-search-icon {
          margin-left: 18px;
          color: #8797a9;
          font-size: 23px;
        }

        .vfaw-search input {
          flex: 1;
          height: 100%;
          padding: 0 15px;
          border: 0;
          outline: none;
          background: transparent;
          color: var(--text);
          font-family: inherit;
          font-size: 14px;
        }

        .vfaw-search input::placeholder {
          color: #9aa9b9;
        }

        .vfaw-clear {
          width: 30px;
          height: 30px;
          margin-right: 12px;
          border: 0;
          border-radius: 50%;
          background: #f1f5f9;
          color: #64748b;
          font-size: 18px;
          cursor: pointer;
        }

        .vfaw-category-row {
          display: flex;
          gap: 8px;
          margin-top: 15px;
          overflow-x: auto;
          padding-bottom: 5px;
          scrollbar-width: none;
        }

        .vfaw-category-row::-webkit-scrollbar {
          display: none;
        }

        .vfaw-category {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 9px 15px;
          border: 1px solid var(--border);
          border-radius: 100px;
          background: #ffffff;
          color: #65768a;
          font-family: inherit;
          font-size: 12px;
          font-weight: 650;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .vfaw-category:hover {
          color: var(--blue);
          border-color: rgba(7, 89, 184, 0.25);
        }

        .vfaw-category.active {
          background: var(--blue);
          border-color: var(--blue);
          color: #ffffff;
          box-shadow: 0 6px 18px rgba(7, 89, 184, 0.18);
        }

        /* SECTION HEADER */

        .vfaw-section-header {
          max-width: 1240px;
          margin: auto;
          padding: 28px 25px 20px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .vfaw-eyebrow {
          color: var(--blue);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .vfaw-section-header h2 {
          margin: 6px 0 0;
          font-size: 30px;
          letter-spacing: -0.8px;
        }

        .vfaw-section-header h2 span {
          color: var(--blue);
        }

        .vfaw-result-count {
          color: var(--muted);
          font-size: 12px;
          font-weight: 600;
        }

        /* NOTICE GRID */

        .vfaw-notice-grid {
          max-width: 1240px;
          margin: auto;
          padding: 0 25px 50px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .vfaw-notice-card {
          position: relative;
          min-height: 285px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 17px;
          background: #ffffff;
          box-shadow: var(--shadow-sm);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .vfaw-notice-card:hover {
          transform: translateY(-5px);
          border-color: rgba(7, 89, 184, 0.17);
          box-shadow: var(--shadow-md);
        }

        .vfaw-notice-card.important {
          border-color: rgba(7, 89, 184, 0.18);
          background:
            linear-gradient(
              180deg,
              rgba(7, 89, 184, 0.025),
              #ffffff 45%
            );
        }

        .vfaw-important-ribbon {
          position: absolute;
          top: 0;
          right: 0;
          padding: 7px 11px;
          border-bottom-left-radius: 12px;
          background: var(--blue);
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
        }

        .vfaw-card-top {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .vfaw-file-icon {
          width: 47px;
          height: 47px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          font-size: 10px;
          font-weight: 900;
        }

        .vfaw-pdf {
          background: #fff1f1;
          color: #dc2626;
        }

        .vfaw-image {
          background: #edf7ff;
          color: var(--blue);
        }

        .vfaw-card-meta {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .vfaw-card-category {
          color: var(--blue);
          font-size: 11px;
          font-weight: 800;
        }

        .vfaw-card-date {
          color: #8a9aad;
          font-size: 10px;
        }

        .vfaw-pin {
          margin-left: auto;
          font-size: 15px;
        }

        .vfaw-card-body {
          flex: 1;
          padding: 25px 0;
        }

        .vfaw-card-body h3 {
          margin: 0 0 9px;
          font-size: 18px;
          line-height: 1.35;
          letter-spacing: -0.3px;
        }

        .vfaw-card-body p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.65;
        }

        .vfaw-card-footer {
          padding-top: 15px;
          border-top: 1px solid #edf1f5;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .vfaw-file-type {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #8391a1;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.7px;
        }

        .vfaw-file-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #5c91c9;
        }

        .vfaw-view-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          border: 0;
          background: transparent;
          color: var(--blue);
          font-family: inherit;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .vfaw-view-btn span {
          transition: transform 0.2s ease;
        }

        .vfaw-view-btn:hover span {
          transform: translateX(4px);
        }

        /* EMPTY STATE */

        .vfaw-empty {
          max-width: 600px;
          margin: 30px auto 70px;
          padding: 55px 25px;
          text-align: center;
          border: 1px dashed #d5e1ed;
          border-radius: 22px;
          background: #fbfdff;
        }

        .vfaw-empty-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--blue-light);
          color: var(--blue);
          font-size: 28px;
        }

        .vfaw-empty h3 {
          margin: 0 0 8px;
          font-size: 20px;
        }

        .vfaw-empty p {
          margin: 0 0 20px;
          color: var(--muted);
          font-size: 13px;
        }

        .vfaw-empty button {
          padding: 10px 16px;
          border: 0;
          border-radius: 9px;
          background: var(--blue);
          color: #ffffff;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        /* INFO */

        .vfaw-info {
          max-width: 1190px;
          margin: 0 auto 50px;
          padding: 20px 22px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          border: 1px solid #e4edf6;
          border-radius: 15px;
          background: #f8fbff;
        }

        .vfaw-info-icon {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--blue);
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
        }

        .vfaw-info strong {
          display: block;
          margin-bottom: 4px;
          font-size: 13px;
        }

        .vfaw-info p {
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.6;
        }

        /* MODAL */

        .vfaw-modal {
          position: fixed;
          inset: 0;
          z-index: 99999;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(7, 23, 42, 0.72);
          backdrop-filter: blur(8px);
          animation: vfawModalFade 0.2s ease;
        }

        .vfaw-modal-box {
          width: min(1100px, 100%);
          height: min(92vh, 850px);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.3);
          animation: vfawModalUp 0.25s ease;
        }

        .vfaw-modal-header {
          min-height: 85px;
          padding: 17px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border);
        }

        .vfaw-modal-category {
          color: var(--blue);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .vfaw-modal-header h2 {
          margin: 4px 0;
          font-size: 18px;
        }

        .vfaw-modal-header p {
          margin: 0;
          color: var(--muted);
          font-size: 11px;
        }

        .vfaw-modal-close {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          border: 0;
          border-radius: 50%;
          background: #f1f5f9;
          color: #475569;
          font-size: 24px;
          cursor: pointer;
        }

        .vfaw-modal-close:hover {
          background: var(--blue);
          color: #ffffff;
        }

        .vfaw-viewer {
          flex: 1;
          min-height: 0;
          overflow: auto;
          background: #eef2f6;
        }

        .vfaw-pdf-viewer {
          width: 100%;
          height: 100%;
          min-height: 500px;
          display: block;
          border: 0;
          background: #ffffff;
        }

        .vfaw-image-viewer {
          width: 100%;
          height: 100%;
          min-height: 300px;
          padding: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: auto;
        }

        .vfaw-image-viewer img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 6px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .vfaw-modal-footer {
          min-height: 65px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          border-top: 1px solid var(--border);
        }

        .vfaw-download,
        .vfaw-open {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 15px;
          border-radius: 9px;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
        }

        .vfaw-download {
          background: var(--blue);
          color: #ffffff;
        }

        .vfaw-download:hover {
          background: var(--blue-dark);
        }

        .vfaw-open {
          background: #f1f5f9;
          color: #475569;
        }

        .vfaw-open:hover {
          background: #e7edf4;
        }

        /* ANIMATIONS */

        @keyframes vfawModalFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes vfawModalUp {
          from {
            opacity: 0;
            transform: translateY(15px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* TABLET */

        @media (max-width: 1000px) {
          .vfaw-notice-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .vfaw-hero-decoration {
            transform: scale(0.85);
            margin-right: 0;
          }
        }

        /* MOBILE */

        @media (max-width: 760px) {
          .vfaw-ticker {
            height: 44px;
          }

          .vfaw-ticker-label {
            min-width: 88px;
            padding: 0 10px;
            font-size: 9px;
          }

          .vfaw-ticker-item {
            padding: 0 12px;
            font-size: 11px;
          }

          .vfaw-ticker-all {
            padding: 0 12px;
            font-size: 10px;
          }

          .vfaw-notice-hero {
            min-height: auto;
            padding: 50px 22px;
          }

          .vfaw-hero-content h1 {
            font-size: 39px;
            letter-spacing: -1.5px;
          }

          .vfaw-hero-content p {
            font-size: 14px;
          }

          .vfaw-hero-decoration {
            display: none;
          }

          .vfaw-controls {
            padding: 25px 18px 15px;
          }

          .vfaw-section-header {
            padding: 25px 18px 18px;
          }

          .vfaw-section-header h2 {
            font-size: 26px;
          }

          .vfaw-notice-grid {
            grid-template-columns: 1fr;
            padding: 0 18px 40px;
          }

          .vfaw-info {
            margin: 0 18px 35px;
          }

          .vfaw-modal {
            padding: 0;
          }

          .vfaw-modal-box {
            width: 100%;
            height: 100%;
            border-radius: 0;
          }

          .vfaw-modal-header {
            padding: 13px 15px;
          }

          .vfaw-modal-header h2 {
            font-size: 15px;
          }

          .vfaw-modal-footer {
            flex-wrap: wrap;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 420px) {
          .vfaw-hero-content h1 {
            font-size: 34px;
          }

          .vfaw-hero-badge {
            font-size: 8px;
          }

          .vfaw-notice-card {
            padding: 18px;
          }

          .vfaw-card-body h3 {
            font-size: 16px;
          }

          .vfaw-card-body p {
            font-size: 12px;
          }

          .vfaw-download,
          .vfaw-open {
            padding: 9px 11px;
            font-size: 10px;
          }
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .vfaw-ticker-track {
            animation: none;
          }

          .vfaw-notice-card,
          .vfaw-view-btn span {
            transition: none;
          }
        }
      `}</style>

      {/* NOTICE TICKER */}
      <div className="vfaw-ticker">
        <div className="vfaw-ticker-label">
          <span className="vfaw-ticker-bell">🔔</span>
          <span>NOTICE</span>
        </div>

        <div className="vfaw-ticker-window">
          <div className="vfaw-ticker-track">
            {[...tickerNotices, ...tickerNotices].map(
              (notice, index) => (
                <React.Fragment key={`${notice.id}-${index}`}>
                  <button
                    type="button"
                    className="vfaw-ticker-item"
                    onClick={() => setSelectedNotice(notice)}
                  >
                    {notice.title}
                  </button>

                  <span className="vfaw-ticker-separator">
                    •
                  </span>
                </React.Fragment>
              )
            )}
          </div>
        </div>

        <button
          type="button"
          className="vfaw-ticker-all"
          onClick={() => {
            window.scrollTo({
              top: 300,
              behavior: "smooth",
            });
          }}
        >
          View all →
        </button>
      </div>

      {/* HERO */}
      <section className="vfaw-notice-hero">
        <div className="vfaw-hero-content">
          <div className="vfaw-hero-badge">
            <span className="vfaw-hero-dot" />
            VFAW INFORMATION CENTER
          </div>

          <h1>
            Notices &<span> Announcements</span>
          </h1>

          <p>
            Stay informed about VFAW programs,
            opportunities, competitions, events and
            important announcements.
          </p>
        </div>

        <div className="vfaw-hero-decoration">
          <div className="vfaw-decoration-circle" />

          <div className="vfaw-decoration-card">
            <span className="vfaw-decoration-card-icon">
              📢
            </span>

            <strong>Stay Updated</strong>

            <small>Latest VFAW notices</small>
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTER */}
      <section className="vfaw-controls">
        <div className="vfaw-search">
          <span className="vfaw-search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search notices..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {search && (
            <button
              type="button"
              className="vfaw-clear"
              aria-label="Clear search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}
        </div>

        <div className="vfaw-category-row">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`vfaw-category ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category === "Important" && "★ "}
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* SECTION HEADER */}
      <section className="vfaw-section-header">
        <div>
          <span className="vfaw-eyebrow">
            VFAW UPDATES
          </span>

          <h2>
            Latest <span>Notices</span>
          </h2>
        </div>

        <div className="vfaw-result-count">
          {filteredNotices.length}{" "}
          {filteredNotices.length === 1
            ? "notice"
            : "notices"}
        </div>
      </section>

      {/* NOTICE CARDS */}
      {filteredNotices.length > 0 ? (
        <section className="vfaw-notice-grid">
          {filteredNotices.map((notice) => (
            <article
              className={`vfaw-notice-card ${
                notice.important ? "important" : ""
              }`}
              key={notice.id}
            >
              {notice.important && (
                <div className="vfaw-important-ribbon">
                  ★ Important
                </div>
              )}

              <div className="vfaw-card-top">
                <div
                  className={`vfaw-file-icon ${
                    notice.fileType === "pdf"
                      ? "vfaw-pdf"
                      : "vfaw-image"
                  }`}
                >
                  {notice.fileType === "pdf" ? "PDF" : "IMG"}
                </div>

                <div className="vfaw-card-meta">
                  <span className="vfaw-card-category">
                    {notice.category}
                  </span>

                  <span className="vfaw-card-date">
                    {formatDate(notice.date)}
                  </span>
                </div>

                {notice.pinned && (
                  <span
                    className="vfaw-pin"
                    title="Pinned notice"
                    aria-label="Pinned notice"
                  >
                    📌
                  </span>
                )}
              </div>

              <div className="vfaw-card-body">
                <h3>{notice.title}</h3>

                <p>{notice.description}</p>
              </div>

              <div className="vfaw-card-footer">
                <span className="vfaw-file-type">
                  <span className="vfaw-file-dot" />

                  {notice.fileType === "pdf"
                    ? "PDF DOCUMENT"
                    : "IMAGE"}
                </span>

                <button
                  type="button"
                  className="vfaw-view-btn"
                  onClick={() => setSelectedNotice(notice)}
                >
                  View Notice
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className="vfaw-empty">
          <div className="vfaw-empty-icon">⌕</div>

          <h3>No notices found</h3>

          <p>
            Try another search term or select a
            different notice category.
          </p>

          <button
            type="button"
            onClick={clearFilters}
          >
            Clear filters
          </button>
        </section>
      )}

      {/* INFORMATION BOX */}
      <section className="vfaw-info">
        <div className="vfaw-info-icon">i</div>

        <div>
          <strong>Stay connected with VFAW</strong>

          <p>
            Check this page regularly for the latest
            announcements, opportunities, events and
            official VFAW notices.
          </p>
        </div>
      </section>

      {/* VIEWER MODAL */}
      {selectedNotice && (
        <div
          className="vfaw-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedNotice.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="vfaw-modal-box">
            <div className="vfaw-modal-header">
              <div>
                <span className="vfaw-modal-category">
                  {selectedNotice.category}
                </span>

                <h2>{selectedNotice.title}</h2>

                <p>
                  {formatDate(selectedNotice.date)}
                </p>
              </div>

              <button
                type="button"
                className="vfaw-modal-close"
                aria-label="Close notice"
                onClick={closeModal}
              >
                ×
              </button>
            </div>

            <div className="vfaw-viewer">
              {selectedNotice.fileType === "pdf" ? (
                <iframe
                  src={selectedNotice.file}
                  title={selectedNotice.title}
                  className="vfaw-pdf-viewer"
                />
              ) : (
                <div className="vfaw-image-viewer">
                  <img
                    src={selectedNotice.file}
                    alt={selectedNotice.title}
                  />
                </div>
              )}
            </div>

            <div className="vfaw-modal-footer">
              <a
                href={selectedNotice.file}
                download
                className="vfaw-download"
              >
                ↓ Download
              </a>

              <a
                href={selectedNotice.file}
                target="_blank"
                rel="noopener noreferrer"
                className="vfaw-open"
              >
                Open in new tab ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notice;
