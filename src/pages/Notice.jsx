import React, { useEffect, useMemo, useState } from "react";

/* =========================================================
   NOTICE DATA
========================================================= */

const noticesData = [
  {
    id: 1,
    title: "Rabies Emergency Card Published",
    description:
      "Download the emergency card and share it with others.",
    category: "Notice",
    date: "2026-09-20",
    file: "/Notice/vfaw Emergency card.pdf",
    fileType: "pdf",
    important: true,
    pinned: true,
  },

  {
    id: 2,
    title: "AFU Seat",
    description:
      "Students interested in joining AFU can now submit their applications.",
    category: "Opportunity",
    date: "2026-09-15",
    file: "/Notice/seat.pdf",
    fileType: "pdf",
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
  "Notice",
];

/* =========================================================
   DATE HELPERS
========================================================= */

function parseLocalDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function isRecentNotice(dateString) {
  const noticeDate = parseLocalDate(dateString);

  const today = new Date();

  const todayOnly = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const difference = Math.floor(
    (todayOnly.getTime() - noticeDate.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return difference >= 0 && difference <= 3;
}

function formatDate(dateString) {
  return parseLocalDate(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/* =========================================================
   ICONS
========================================================= */

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.8l7.5-4.2M8.2 13.2l7.5 4.2" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 4h6v6" />
      <path d="M20 4l-9 9" />
      <path d="M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>
  );
}

/* =========================================================
   NOTICE PAGE
========================================================= */

function Notice() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [shareMessage, setShareMessage] = useState("");

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredNotices = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return noticesData.filter((notice) => {
      const matchesSearch =
        searchText === "" ||
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

  /* =======================================================
     TICKER
  ======================================================= */

  const tickerNotices = useMemo(() => {
    return [...noticesData].sort(
      (a, b) => parseLocalDate(b.date) - parseLocalDate(a.date)
    );
  }, []);

  /* =======================================================
     DOWNLOAD
  ======================================================= */

  const downloadNotice = async (notice) => {
    try {
      const response = await fetch(notice.file);

      if (!response.ok) {
        throw new Error("File could not be downloaded.");
      }

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;

      const cleanPath = notice.file.split("?")[0];

      const fileName =
        decodeURIComponent(cleanPath.split("/").pop()) ||
        "VFAW-notice";

      link.download = fileName;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);

      const link = document.createElement("a");

      link.href = notice.file;
      link.download = "";

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    }
  };

  /* =======================================================
     SHARE
  ======================================================= */

  const shareNotice = async (notice) => {
    const shareUrl = `${window.location.origin}${notice.file}`;

    const shareData = {
      title: notice.title,
      text: `${notice.title} — VFAW Official Notice`,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);

        setShareMessage("Notice link copied!");

        setTimeout(() => {
          setShareMessage("");
        }, 2500);

        return;
      }

      setShareMessage("Unable to share this notice.");

      setTimeout(() => {
        setShareMessage("");
      }, 2500);
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }

      setShareMessage("Unable to share this notice.");

      setTimeout(() => {
        setShareMessage("");
      }, 2500);
    }
  };

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedNotice(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    if (selectedNotice) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedNotice]);

  return (
    <div className="notice-page">

      <style>{`

        /* =====================================================
           BASE
        ===================================================== */

        .notice-page {
          --blue: #0759b8;
          --blue-dark: #06468f;
          --blue-light: #edf5ff;
          --blue-soft: #f6faff;

          --red: #e53935;
          --red-soft: #fff1f1;

          --text: #0c1b2a;
          --muted: #64748b;
          --border: #e7edf4;

          min-height: 100vh;

          background: #fbfcfe;

          color: var(--text);

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          overflow-x: hidden;
        }

        .notice-page *,
        .notice-page *::before,
        .notice-page *::after {
          box-sizing: border-box;
        }

        /* =====================================================
           TICKER
        ===================================================== */

        .notice-ticker {
          position: relative;

          width: 100%;
          height: 46px;

          display: flex;
          align-items: center;

          overflow: hidden;

          background: #ffffff;

          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);

          z-index: 20;
        }

        .ticker-label {
          position: relative;
          z-index: 5;

          flex: 0 0 auto;

          height: 100%;

          display: flex;
          align-items: center;

          gap: 8px;

          padding: 0 22px;

          background: var(--blue);

          color: white;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: .08em;

          text-transform: uppercase;

          box-shadow:
            8px 0 20px rgba(7,89,184,.12);
        }

        .ticker-label svg {
          width: 15px;
          height: 15px;

          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
        }

        .ticker-window {
          flex: 1;

          min-width: 0;

          overflow: hidden;
        }

        .ticker-track {
          width: max-content;

          display: flex;
          align-items: center;

          animation:
            noticeTicker 32s linear infinite;

          will-change: transform;
        }

        .notice-ticker:hover .ticker-track {
          animation-play-state: paused;
        }

        .ticker-group {
          display: flex;
          align-items: center;

          flex-shrink: 0;
        }

        /*
         * IMPORTANT:
         * Ticker items are buttons so each moving notice
         * can be clicked and opened individually.
         */

        .ticker-item {
          height: 46px;

          display: inline-flex;
          align-items: center;

          gap: 10px;

          padding: 0 32px;

          white-space: nowrap;

          border: none;
          outline: none;

          background: transparent;

          color: var(--blue);

          cursor: pointer;

          font-family: inherit;

          font-size: 13px;
          font-weight: 700;

          transition:
            opacity .2s ease,
            transform .2s ease;
        }

        .ticker-item:hover {
          opacity: .72;
        }

        .ticker-item:active {
          transform: scale(.98);
        }

        .ticker-item:focus-visible {
          outline:
            2px solid
            rgba(7,89,184,.35);

          outline-offset: -3px;

          border-radius: 6px;
        }

        .ticker-item.recent {
          color: var(--red);
        }

        .ticker-item.old {
          color: var(--blue);
        }

        .ticker-dot {
          width: 6px;
          height: 6px;

          flex: 0 0 6px;

          border-radius: 50%;

          background: currentColor;
        }

        .ticker-new {
          padding: 4px 7px;

          border-radius: 5px;

          background: var(--red-soft);

          color: var(--red);

          font-size: 9px;
          font-weight: 900;

          letter-spacing: .06em;
        }

        @keyframes noticeTicker {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* =====================================================
           HERO
        ===================================================== */

        .notice-hero {
          position: relative;

          overflow: hidden;

          padding:
            86px
            24px
            78px;

          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(7,89,184,.13),
              transparent 38%
            ),
            linear-gradient(
              180deg,
              #edf6ff 0%,
              #f8fbff 55%,
              #ffffff 100%
            );

          border-bottom: 1px solid #dce9f7;
        }

        .hero-grid {
          position: absolute;

          inset: 0;

          opacity: .45;

          background-image:
            linear-gradient(
              rgba(7,89,184,.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(7,89,184,.045) 1px,
              transparent 1px
            );

          background-size: 42px 42px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 90%
            );
        }

        .hero-inner {
          position: relative;

          z-index: 2;

          max-width: 900px;

          margin: 0 auto;

          text-align: center;

          display: flex;

          flex-direction: column;

          align-items: center;
        }

        .hero-kicker {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 20px;

          color: var(--blue);

          font-size: 12px;
          font-weight: 900;

          letter-spacing: .13em;

          text-transform: uppercase;
        }

        .hero-kicker::before,
        .hero-kicker::after {
          content: "";

          width: 26px;
          height: 2px;

          background: var(--blue);

          border-radius: 999px;
        }

        .hero-title {
          margin: 0;

          max-width: 900px;

          color: var(--text);

          font-size:
            clamp(48px, 8vw, 86px);

          line-height: .98;

          font-weight: 900;

          letter-spacing: -.065em;
        }

        .hero-title span {
          color: var(--blue);
        }

        .hero-description {
          max-width: 680px;

          margin: 25px auto 0;

          color: #64748b;

          font-size: 16px;

          line-height: 1.75;
        }

        .hero-meta {
          display: flex;

          justify-content: center;

          align-items: center;

          flex-wrap: wrap;

          gap: 9px;

          margin-top: 30px;
        }

        .hero-meta-item {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding: 9px 13px;

          border:
            1px solid
            rgba(7,89,184,.13);

          border-radius: 999px;

          background:
            rgba(255,255,255,.82);

          color: #526276;

          font-size: 12px;

          font-weight: 700;

          box-shadow:
            0 5px 18px rgba(7,89,184,.04);
        }

        .hero-meta-item strong {
          color: var(--text);
        }

        .hero-meta-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: var(--blue);
        }

        /* =====================================================
           MAIN
        ===================================================== */

        .notice-container {
          max-width: 1180px;

          margin: 0 auto;

          padding:
            55px
            24px
            100px;
        }

        /* =====================================================
           CONTROLS
        ===================================================== */

        .notice-controls {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          margin-bottom: 48px;
        }

        .search-box {
          position: relative;

          width: min(390px, 100%);
        }

        .search-box svg {
          position: absolute;

          left: 16px;
          top: 50%;

          width: 18px;
          height: 18px;

          transform: translateY(-50%);

          fill: none;
          stroke: #8a98a8;
          stroke-width: 1.8;

          pointer-events: none;
        }

        .search-box input {
          width: 100%;
          height: 48px;

          padding:
            0
            16px
            0
            46px;

          border:
            1px solid
            var(--border);

          border-radius: 12px;

          outline: none;

          background: white;

          color: var(--text);

          font-size: 14px;

          transition:
            border-color .2s ease,
            box-shadow .2s ease;
        }

        .search-box input:focus {
          border-color:
            rgba(7,89,184,.45);

          box-shadow:
            0 0 0 4px
            rgba(7,89,184,.08);
        }

        .category-list {
          display: flex;

          flex-wrap: wrap;

          justify-content: flex-end;

          gap: 7px;
        }

        .category-button {
          height: 38px;

          padding: 0 14px;

          border:
            1px solid
            var(--border);

          border-radius: 999px;

          background: white;

          color: #68788a;

          cursor: pointer;

          font-family: inherit;

          font-size: 12px;

          font-weight: 800;

          transition:
            transform .2s ease,
            color .2s ease,
            background .2s ease,
            border-color .2s ease;
        }

        .category-button:hover {
          transform: translateY(-1px);

          border-color: #c9d9e9;

          color: var(--blue);
        }

        .category-button.active {
          border-color: var(--blue);

          background: var(--blue);

          color: white;

          box-shadow:
            0 5px 15px
            rgba(7,89,184,.16);
        }

        /* =====================================================
           SECTION HEADER
        ===================================================== */

        .section-header {
          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 20px;

          margin-bottom: 24px;
        }

        .section-eyebrow {
          margin: 0 0 7px;

          color: var(--blue);

          font-size: 11px;

          font-weight: 900;

          letter-spacing: .12em;

          text-transform: uppercase;
        }

        .section-header h2 {
          margin: 0;

          color: var(--text);

          font-size: 30px;

          line-height: 1.1;

          letter-spacing: -.04em;
        }

        .section-count {
          color: #8b98a7;

          font-size: 12px;

          font-weight: 700;
        }

        /* =====================================================
           GRID
        ===================================================== */

        .notice-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 18px;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .notice-card {
          position: relative;

          display: flex;

          flex-direction: column;

          min-height: 355px;

          padding: 24px;

          background: white;

          border:
            1px solid
            var(--border);

          border-radius: 18px;

          overflow: hidden;

          transition:
            transform .3s
              cubic-bezier(.2,.8,.2,1),
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .notice-card:hover {
          transform: translateY(-6px);

          border-color: #d4e2ef;

          box-shadow:
            0 18px 45px
            rgba(19,52,84,.10);
        }

        .notice-card.recent {
          border-color:
            rgba(229,57,53,.18);
        }

        .notice-card.recent:hover {
          border-color:
            rgba(229,57,53,.34);

          box-shadow:
            0 18px 45px
            rgba(229,57,53,.10);
        }

        .card-accent {
          position: absolute;

          left: 0;
          top: 0;

          width: 100%;
          height: 3px;

          background: var(--blue);
        }

        .notice-card.recent .card-accent {
          background: var(--red);
        }

        .notice-card-top {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 10px;

          margin-bottom: 26px;
        }

        .notice-category {
          display: inline-flex;

          align-items: center;

          min-height: 28px;

          padding: 0 10px;

          border-radius: 7px;

          background: var(--blue-light);

          color: var(--blue);

          font-size: 10px;

          font-weight: 900;

          letter-spacing: .05em;

          text-transform: uppercase;
        }

        .notice-card.recent .notice-category {
          background: var(--red-soft);

          color: var(--red);
        }

        .new-label {
          display: inline-flex;

          align-items: center;

          gap: 5px;

          color: var(--red);

          font-size: 9px;

          font-weight: 900;

          letter-spacing: .08em;
        }

        .new-label::before {
          content: "";

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: var(--red);

          box-shadow:
            0 0 0 4px
            rgba(229,57,53,.08);
        }

        .important-label {
          display: inline-flex;

          align-items: center;

          padding: 5px 8px;

          border-radius: 6px;

          background: #fff7e8;

          color: #b86b00;

          font-size: 9px;

          font-weight: 900;

          letter-spacing: .06em;

          text-transform: uppercase;
        }

        .notice-title {
          margin: 0;

          color: var(--text);

          font-size: 21px;

          line-height: 1.3;

          font-weight: 850;

          letter-spacing: -.025em;
        }

        .notice-description {
          flex: 1;

          margin: 14px 0 0;

          color: #718094;

          font-size: 13px;

          line-height: 1.7;
        }

        .notice-date {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-top: 24px;

          padding-top: 16px;

          border-top:
            1px solid #edf1f5;

          color: #8a97a6;

          font-size: 11px;

          font-weight: 700;
        }

        .notice-date.recent-date {
          color: var(--red);
        }

        /* =====================================================
           ACTION BUTTONS
        ===================================================== */

        .notice-actions {
          display: grid;

          grid-template-columns:
            1.3fr 1fr 1fr;

          gap: 7px;

          margin-top: 17px;
        }

        .notice-button {
          min-height: 39px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          padding: 0 9px;

          border:
            1px solid transparent;

          border-radius: 9px;

          cursor: pointer;

          text-decoration: none;

          font-family: inherit;

          font-size: 11px;

          font-weight: 850;

          transition:
            transform .2s ease,
            background .2s ease,
            border-color .2s ease,
            color .2s ease;
        }

        .notice-button svg {
          width: 14px;
          height: 14px;

          fill: none;

          stroke: currentColor;

          stroke-width: 1.8;
        }

        .notice-button:hover {
          transform: translateY(-2px);
        }

        .notice-button:active {
          transform: translateY(0);
        }

        .notice-button.primary {
          border-color: var(--blue);

          background: var(--blue);

          color: white;
        }

        .notice-button.primary:hover {
          background: var(--blue-dark);

          border-color: var(--blue-dark);
        }

        .notice-button.secondary {
          border-color: var(--border);

          background: white;

          color: #526276;
        }

        .notice-button.secondary:hover {
          border-color: #cbd9e7;

          background: var(--blue-soft);

          color: var(--blue);
        }

        .notice-card.recent .share-button {
          border-color:
            rgba(229,57,53,.18);

          background: var(--red-soft);

          color: var(--red);
        }

        .notice-card.recent .share-button:hover {
          background: #ffe5e5;

          border-color:
            rgba(229,57,53,.32);
        }

        /* =====================================================
           EMPTY
        ===================================================== */

        .notice-empty {
          padding: 70px 25px;

          text-align: center;

          border:
            1px solid
            var(--border);

          border-radius: 18px;

          background: white;
        }

        .notice-empty h3 {
          margin: 0 0 8px;

          font-size: 21px;
        }

        .notice-empty p {
          margin: 0;

          color: var(--muted);

          font-size: 14px;
        }

        /* =====================================================
           INFO
        ===================================================== */

        .notice-info {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 30px;

          margin-top: 55px;

          padding: 28px 30px;

          border:
            1px solid #dce9f7;

          border-radius: 16px;

          background:
            linear-gradient(
              135deg,
              #f4f9ff,
              #ffffff
            );
        }

        .notice-info-left {
          display: flex;

          align-items: flex-start;

          gap: 15px;
        }

        .info-icon {
          width: 38px;
          height: 38px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex: 0 0 38px;

          border-radius: 10px;

          background: var(--blue);

          color: white;
        }

        .info-icon svg {
          width: 18px;
          height: 18px;

          fill: none;

          stroke: currentColor;

          stroke-width: 1.8;
        }

        .notice-info h3 {
          margin: 0 0 5px;

          color: var(--text);

          font-size: 15px;
        }

        .notice-info p {
          max-width: 700px;

          margin: 0;

          color: var(--muted);

          font-size: 12px;

          line-height: 1.65;
        }

        .info-brand {
          color: var(--blue);

          font-size: 11px;

          font-weight: 900;

          white-space: nowrap;
        }

        /* =====================================================
           TOAST
        ===================================================== */

        .share-toast {
          position: fixed;

          left: 50%;
          bottom: 28px;

          z-index: 10001;

          transform: translateX(-50%);

          padding: 12px 18px;

          border-radius: 10px;

          background: #0c1b2a;

          color: white;

          box-shadow:
            0 12px 35px
            rgba(0,0,0,.18);

          font-size: 12px;

          font-weight: 800;

          animation:
            toastIn .25s ease;
        }

        @keyframes toastIn {
          from {
            opacity: 0;

            transform:
              translate(-50%, 10px);
          }

          to {
            opacity: 1;

            transform:
              translate(-50%, 0);
          }
        }

        /* =====================================================
           MODAL
        ===================================================== */

        .notice-modal {
          position: fixed;

          inset: 0;

          z-index: 10000;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 20px;

          background:
            rgba(5,18,31,.80);

          backdrop-filter: blur(12px);

          -webkit-backdrop-filter:
            blur(12px);

          animation:
            modalBackground .2s ease;
        }

        .notice-modal-content {
          width:
            min(1150px, 100%);

          height:
            min(850px, 94vh);

          display: flex;

          flex-direction: column;

          overflow: hidden;

          background: white;

          border-radius: 18px;

          box-shadow:
            0 35px 100px
            rgba(0,0,0,.30);

          animation:
            modalIn .25s
            cubic-bezier(.2,.8,.2,1);
        }

        @keyframes modalBackground {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes modalIn {
          from {
            opacity: 0;

            transform:
              scale(.97)
              translateY(10px);
          }

          to {
            opacity: 1;

            transform:
              scale(1)
              translateY(0);
          }
        }

        /* =====================================================
           MODAL HEADER
        ===================================================== */

        .notice-modal-header {
          min-height: 70px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 15px;

          padding:
            10px
            18px
            10px
            22px;

          border-bottom:
            1px solid
            var(--border);

          background: white;
        }

        .modal-title-area {
          min-width: 0;
        }

        .modal-label {
          margin-bottom: 3px;

          color: var(--blue);

          font-size: 9px;

          font-weight: 900;

          letter-spacing: .1em;

          text-transform: uppercase;
        }

        .notice-modal-header h3 {
          overflow: hidden;

          margin: 0;

          color: var(--text);

          font-size: 15px;

          text-overflow: ellipsis;

          white-space: nowrap;
        }

        .modal-actions {
          display: flex;

          align-items: center;

          gap: 7px;

          flex-shrink: 0;
        }

        .modal-download {
          min-height: 38px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          padding: 0 13px;

          border: none;

          border-radius: 9px;

          background: var(--blue);

          color: white;

          cursor: pointer;

          font-family: inherit;

          font-size: 11px;

          font-weight: 850;

          transition:
            background .2s ease,
            transform .2s ease;
        }

        .modal-download:hover {
          background: var(--blue-dark);

          transform: translateY(-1px);
        }

        .modal-download svg {
          width: 14px;
          height: 14px;

          fill: none;

          stroke: currentColor;

          stroke-width: 1.8;
        }

        .notice-close {
          width: 38px;
          height: 38px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex: 0 0 38px;

          border:
            1px solid
            var(--border);

          border-radius: 9px;

          background: white;

          color: #637386;

          cursor: pointer;

          transition:
            background .2s ease,
            color .2s ease;
        }

        .notice-close:hover {
          background: #f5f7fa;

          color: var(--text);
        }

        .notice-close svg {
          width: 17px;
          height: 17px;

          fill: none;

          stroke: currentColor;

          stroke-width: 2;
        }

        /* =====================================================
           PREVIEW
        ===================================================== */

        .notice-preview {
          flex: 1;

          min-height: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          background: #e9eef3;
        }

        .notice-preview iframe {
          width: 100%;
          height: 100%;

          display: block;

          border: none;

          background: white;
        }

        .notice-preview img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: contain;

          padding: 15px;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 950px) {

          .notice-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .notice-controls {
            align-items: stretch;

            flex-direction: column;
          }

          .search-box {
            width: 100%;
          }

          .category-list {
            justify-content: flex-start;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 650px) {

          .notice-ticker {
            height: 42px;
          }

          .ticker-label {
            padding: 0 13px;

            font-size: 9px;
          }

          .ticker-label svg {
            width: 13px;
            height: 13px;
          }

          .ticker-item {
            height: 42px;

            padding: 0 20px;

            font-size: 11px;
          }

          .notice-hero {
            padding:
              64px
              18px
              58px;
          }

          .hero-kicker {
            font-size: 9px;
          }

          .hero-kicker::before,
          .hero-kicker::after {
            width: 18px;
          }

          .hero-title {
            font-size:
              clamp(44px, 14vw, 62px);
          }

          .hero-description {
            font-size: 14px;
          }

          .hero-meta {
            margin-top: 25px;
          }

          .notice-container {
            padding:
              38px
              16px
              70px;
          }

          .category-list {
            display: grid;

            grid-template-columns:
              repeat(2, 1fr);

            width: 100%;
          }

          .category-button {
            width: 100%;
          }

          .section-header {
            align-items: flex-start;

            flex-direction: column;

            gap: 7px;
          }

          .notice-grid {
            grid-template-columns: 1fr;
          }

          .notice-card {
            min-height: 330px;
          }

          .notice-info {
            align-items: flex-start;

            flex-direction: column;
          }

          .info-brand {
            padding-left: 53px;
          }

          .notice-modal {
            padding: 8px;
          }

          .notice-modal-content {
            height: 96vh;

            border-radius: 12px;
          }

          .notice-modal-header {
            min-height: 65px;

            padding-left: 14px;
          }

          .modal-download {
            width: 38px;

            padding: 0;

            font-size: 0;
          }

          .modal-download svg {
            width: 16px;
            height: 16px;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {

          .notice-actions {
            grid-template-columns:
              1fr 1fr;
          }

          .notice-actions .primary {
            grid-column:
              span 2;
          }

          .hero-title {
            letter-spacing:
              -.055em;
          }

        }

        /* =====================================================
           ACCESSIBILITY
        ===================================================== */

        .notice-button:focus-visible,
        .category-button:focus-visible,
        .notice-close:focus-visible,
        .modal-download:focus-visible,
        .search-box input:focus-visible {
          outline:
            3px solid
            rgba(7,89,184,.25);

          outline-offset: 2px;
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .ticker-track {
            animation: none;
          }

          .notice-card,
          .notice-button,
          .category-button,
          .modal-download,
          .ticker-item {
            transition: none;
          }

        }

      `}</style>

      {/* =====================================================
          MOVING NOTICE TICKER
      ===================================================== */}

      {tickerNotices.length > 0 && (
        <div className="notice-ticker">

          <div className="ticker-label">
            <BellIcon />
            Notices
          </div>

          <div className="ticker-window">

            <div className="ticker-track">

              {/* =================================================
                  FIRST TICKER COPY
              ================================================= */}

              <div className="ticker-group">

                {tickerNotices.map((notice) => {

                  const recent =
                    isRecentNotice(notice.date);

                  return (
                    <button
                      type="button"
                      className={`ticker-item ${
                        recent
                          ? "recent"
                          : "old"
                      }`}
                      key={`ticker-${notice.id}`}
                      onClick={() =>
                        setSelectedNotice(notice)
                      }
                      aria-label={`View ${notice.title}`}
                    >

                      <span className="ticker-dot"></span>

                      {recent && (
                        <span className="ticker-new">
                          NEW
                        </span>
                      )}

                      <span>
                        {notice.title}
                      </span>

                    </button>
                  );
                })}

              </div>

              {/* =================================================
                  SECOND TICKER COPY
                  Required for seamless infinite animation
              ================================================= */}

              <div
                className="ticker-group"
                aria-hidden="true"
              >

                {tickerNotices.map((notice) => {

                  const recent =
                    isRecentNotice(notice.date);

                  return (
                    <button
                      type="button"
                      className={`ticker-item ${
                        recent
                          ? "recent"
                          : "old"
                      }`}
                      key={`ticker-copy-${notice.id}`}
                      onClick={() =>
                        setSelectedNotice(notice)
                      }
                      tabIndex={-1}
                    >

                      <span className="ticker-dot"></span>

                      {recent && (
                        <span className="ticker-new">
                          NEW
                        </span>
                      )}

                      <span>
                        {notice.title}
                      </span>

                    </button>
                  );
                })}

              </div>

            </div>

          </div>

        </div>
      )}

      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="notice-hero">

        <div className="hero-grid"></div>

        <div className="hero-inner">

          <div className="hero-kicker">
            VFAW Official Communication
          </div>

          <h1 className="hero-title">
            Notices
            <br />
            <span>& Updates.</span>
          </h1>

          <p className="hero-description">
            Stay up to date with official VFAW
            announcements, competitions, educational
            events, opportunities and important activities.
          </p>

          <div className="hero-meta">

            <div className="hero-meta-item">

              <span className="hero-meta-dot"></span>

              <strong>
                {noticesData.length}
              </strong>

              published notices

            </div>

            <div className="hero-meta-item">

              <span className="hero-meta-dot"></span>

              Updated regularly

            </div>

            <div className="hero-meta-item">

              <span className="hero-meta-dot"></span>

              Official VFAW updates

            </div>

          </div>

        </div>

      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="notice-container">

        {/* ===================================================
            SEARCH + FILTER
        =================================================== */}

        <div className="notice-controls">

          <div className="search-box">

            <SearchIcon />

            <input
              type="search"
              placeholder="Search notices..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              aria-label="Search notices"
            />

          </div>

          <div className="category-list">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                className={`category-button ${
                  activeCategory === category
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>

        </div>

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <div className="section-header">

          <div>

            <p className="section-eyebrow">
              Official updates
            </p>

            <h2>
              Latest notices
            </h2>

          </div>

          <div className="section-count">

            Showing{" "}
            {filteredNotices.length}{" "}
            of{" "}
            {noticesData.length}{" "}
            notices

          </div>

        </div>

        {/* ===================================================
            NOTICE CARDS
        =================================================== */}

        {filteredNotices.length > 0 ? (

          <section className="notice-grid">

            {filteredNotices.map((notice) => {

              const recent =
                isRecentNotice(notice.date);

              return (

                <article
                  className={`notice-card ${
                    recent ? "recent" : ""
                  }`}
                  key={notice.id}
                >

                  <div className="card-accent"></div>

                  <div className="notice-card-top">

                    <span className="notice-category">
                      {notice.category}
                    </span>

                    <div>

                      {recent && (
                        <span className="new-label">
                          NEW
                        </span>
                      )}

                      {!recent &&
                        notice.important && (
                          <span className="important-label">
                            Important
                          </span>
                        )}

                    </div>

                  </div>

                  <h3 className="notice-title">
                    {notice.title}
                  </h3>

                  <p className="notice-description">
                    {notice.description}
                  </p>

                  <div
                    className={`notice-date ${
                      recent
                        ? "recent-date"
                        : ""
                    }`}
                  >

                    <span>
                      Published{" "}
                      {formatDate(notice.date)}
                    </span>

                    {recent && (
                      <span>
                        Recent
                      </span>
                    )}

                  </div>

                  {/* =================================================
                      ACTIONS
                  ================================================= */}

                  <div className="notice-actions">

                    {/* VIEW */}

                    <button
                      type="button"
                      className="notice-button primary"
                      onClick={() =>
                        setSelectedNotice(notice)
                      }
                    >

                      View

                      <ArrowIcon />

                    </button>

                    {/* OPEN */}

                    <a
                      className="notice-button secondary"
                      href={notice.file}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      Open

                      <ExternalIcon />

                    </a>

                    {/* SHARE */}

                    <button
                      type="button"
                      className="notice-button secondary share-button"
                      onClick={() =>
                        shareNotice(notice)
                      }
                    >

                      Share

                      <ShareIcon />

                    </button>

                  </div>

                  {/* DOWNLOAD */}

                  <button
                    type="button"
                    className="notice-button secondary"
                    style={{
                      marginTop: "7px",
                      width: "100%",
                    }}
                    onClick={() =>
                      downloadNotice(notice)
                    }
                  >

                    Download notice

                    <DownloadIcon />

                  </button>

                </article>

              );

            })}

          </section>

        ) : (

          <div className="notice-empty">

            <h3>
              No notices found
            </h3>

            <p>
              Try another search term or select
              a different category.
            </p>

          </div>

        )}

        {/* ===================================================
            INFORMATION
        =================================================== */}

        <section className="notice-info">

          <div className="notice-info-left">

            <div className="info-icon">
              <BellIcon />
            </div>

            <div>

              <h3>
                About VFAW Notices
              </h3>

              <p>
                This section contains official VFAW
                announcements, competitions, educational
                events, volunteer opportunities, programs
                and other important updates.
              </p>

            </div>

          </div>

          <div className="info-brand">
            Vets for Animal Welfare
          </div>

        </section>

      </main>

      {/* =====================================================
          NOTICE PREVIEW MODAL
      ===================================================== */}

      {selectedNotice && (

        <div
          className="notice-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedNotice.title}
          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {
              setSelectedNotice(null);
            }

          }}
        >

          <div className="notice-modal-content">

            {/* =================================================
                MODAL HEADER
            ================================================= */}

            <div className="notice-modal-header">

              <div className="modal-title-area">

                <div className="modal-label">
                  VFAW Official Notice
                </div>

                <h3>
                  {selectedNotice.title}
                </h3>

              </div>

              <div className="modal-actions">

                {/* DOWNLOAD */}

                <button
                  type="button"
                  className="modal-download"
                  onClick={() =>
                    downloadNotice(
                      selectedNotice
                    )
                  }
                  title="Download notice"
                >

                  <DownloadIcon />

                  <span>
                    Download
                  </span>

                </button>

                {/* CLOSE */}

                <button
                  type="button"
                  className="notice-close"
                  onClick={() =>
                    setSelectedNotice(null)
                  }
                  aria-label="Close notice"
                  title="Close"
                >

                  <CloseIcon />

                </button>

              </div>

            </div>

            {/* =================================================
                PREVIEW
            ================================================= */}

            <div className="notice-preview">

              {selectedNotice.fileType ===
              "pdf" ? (

                <iframe
                  src={`${selectedNotice.file}#toolbar=1&navpanes=0&scrollbar=1`}
                  title={
                    selectedNotice.title
                  }
                />

              ) : (

                <img
                  src={selectedNotice.file}
                  alt={
                    selectedNotice.title
                  }
                />

              )}

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          SHARE TOAST
      ===================================================== */}

      {shareMessage && (

        <div className="share-toast">
          {shareMessage}
        </div>

      )}

    </div>
  );
}

export default Notice;
