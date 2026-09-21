import React, { useMemo, useState } from "react";

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

 {
    id: 4,
    title: "Afu Seat",
    description:
      "Students interested in joining Afu can now submit their applications.",
    category: "Opportunity",
    date: "2026-09-15",
    file: "/notices/seat.png",
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

  const tickerNotices = noticesData.filter(
    (notice) => notice.pinned || notice.important
  );

  return (
    <div className="notice-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .notice-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 10% 10%, rgba(30, 136, 229, 0.10), transparent 28%),
            radial-gradient(circle at 90% 25%, rgba(0, 105, 190, 0.10), transparent 28%),
            #f5f9ff;
          color: #102a43;
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        /* =========================
           NOTICE TICKER
        ========================== */

        .notice-ticker {
          width: 100%;
          overflow: hidden;
          background: #0757a0;
          color: #ffffff;
          border-top: 1px solid rgba(255,255,255,0.15);
          border-bottom: 1px solid rgba(255,255,255,0.18);
          box-shadow: 0 4px 14px rgba(7,87,160,0.22);
          cursor: default;
        }

        .ticker-content {
          display: flex;
          width: max-content;
          animation: noticeTicker 12s linear infinite;
          will-change: transform;
        }

        /* Stop immediately when cursor is over ticker */
        .notice-ticker:hover .ticker-content {
          animation-play-state: paused;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 34px;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.1px;
        }

        .ticker-dot {
          width: 8px;
          height: 8px;
          background: #ffffff;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 0 4px rgba(255,255,255,0.12);
        }

        @keyframes noticeTicker {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* =========================
           HERO
        ========================== */

        .notice-hero {
          position: relative;
          padding: 75px 20px 70px;
          overflow: hidden;
          background:
            linear-gradient(
              135deg,
              #ffffff 0%,
              #edf6ff 50%,
              #dceeff 100%
            );
          border-bottom: 1px solid #cfe2f5;
        }

        .notice-hero::before {
          content: "";
          position: absolute;
          width: 330px;
          height: 330px;
          right: -100px;
          top: -120px;
          border-radius: 50%;
          background: rgba(7, 87, 160, 0.12);
        }

        .notice-hero::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          left: -100px;
          bottom: -100px;
          border-radius: 50%;
          background: rgba(30, 136, 229, 0.10);
        }

        .notice-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          text-align: center;
        }

        .notice-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 17px;
          border-radius: 999px;
          background: #0757a0;
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 20px;
          box-shadow:
            0 7px 0 #043e73,
            0 12px 25px rgba(7,87,160,0.22);
        }

        .notice-hero h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 68px);
          line-height: 1.02;
          letter-spacing: -2.5px;
          color: #082d4f;
          font-weight: 900;
        }

        .notice-hero p {
          max-width: 730px;
          margin: 22px auto 0;
          color: #526b84;
          font-size: 17px;
          line-height: 1.75;
        }

        /* =========================
           MAIN CONTAINER
        ========================== */

        .notice-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 50px 20px 85px;
        }

        /* =========================
           SEARCH + FILTERS
        ========================== */

        .notice-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 42px;
        }

        .notice-search {
          flex: 1;
          min-width: 270px;
          position: relative;
        }

        .notice-search input {
          width: 100%;
          padding: 16px 19px;
          border: 2px solid #d5e4f2;
          border-radius: 14px;
          background: #ffffff;
          color: #17324d;
          outline: none;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.25s ease;
          box-shadow:
            0 5px 0 #dce8f3,
            0 12px 25px rgba(15, 76, 129, 0.07);
        }

        .notice-search input::placeholder {
          color: #8aa0b5;
        }

        .notice-search input:focus {
          border-color: #1677d2;
          transform: translateY(-2px);
          box-shadow:
            0 7px 0 #b9d4ec,
            0 16px 30px rgba(22,119,210,0.13);
        }

        .category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .category-button {
          border: 2px solid #d8e6f3;
          background: #ffffff;
          color: #41617d;
          padding: 10px 15px;
          border-radius: 11px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 800;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease,
            color 0.2s ease;
          box-shadow: 0 4px 0 #dce7f1;
        }

        .category-button:hover {
          transform: translateY(-3px);
          color: #0757a0;
          border-color: #8dbce5;
          box-shadow: 0 7px 0 #c3d9eb;
        }

        .category-button:active {
          transform: translateY(1px);
          box-shadow: 0 2px 0 #c3d9eb;
        }

        .category-button.active {
          background: #0757a0;
          color: #ffffff;
          border-color: #0757a0;
          box-shadow:
            0 5px 0 #043e73,
            0 10px 20px rgba(7,87,160,0.20);
        }

        /* =========================
           SECTION HEADING
        ========================== */

        .notice-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 23px;
        }

        .notice-heading h2 {
          margin: 0;
          color: #082d4f;
          font-size: 30px;
          font-weight: 900;
          letter-spacing: -0.7px;
        }

        .notice-heading p {
          margin: 7px 0 0;
          color: #6c8195;
          font-size: 14px;
        }

        .notice-count {
          padding: 9px 14px;
          border-radius: 10px;
          background: #dceeff;
          color: #0757a0;
          font-weight: 900;
          font-size: 13px;
          box-shadow: 0 4px 0 #c2dbef;
        }

        /* =========================
           NOTICE CARDS
        ========================== */

        .notice-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .notice-card {
          position: relative;
          background: #ffffff;
          border: 2px solid #dce8f3;
          border-radius: 18px;
          padding: 25px;
          box-shadow:
            0 7px 0 #d2e2f0,
            0 16px 30px rgba(15, 76, 129, 0.08);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
          display: flex;
          flex-direction: column;
          min-height: 305px;
          overflow: hidden;
        }

        .notice-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 6px;
          background: #0757a0;
        }

        .notice-card:hover {
          transform: translateY(-10px) rotateX(1deg);
          border-color: #83b8e5;
          box-shadow:
            0 12px 0 #b8d2e8,
            0 28px 45px rgba(7,87,160,0.18);
        }

        .notice-card:active {
          transform: translateY(-3px);
        }

        .notice-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 10px;
          margin: 5px 0 20px;
        }

        .notice-category {
          display: inline-flex;
          padding: 7px 11px;
          border-radius: 8px;
          background: #0757a0;
          color: #ffffff;
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 0 #043e73;
        }

        .important-label {
          color: #ffffff;
          background: #e67e22;
          padding: 7px 10px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 900;
          box-shadow: 0 4px 0 #b85d0d;
        }

        .notice-card h3 {
          margin: 0 0 12px;
          color: #092f50;
          font-size: 21px;
          line-height: 1.35;
          font-weight: 900;
        }

        .notice-card-description {
          color: #60788e;
          line-height: 1.65;
          font-size: 14px;
          flex: 1;
          margin: 0;
        }

        .notice-date {
          color: #7890a6;
          font-size: 12px;
          font-weight: 700;
          margin: 18px 0;
        }

        .notice-actions {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
        }

        .notice-button {
          border: none;
          padding: 11px 8px;
          border-radius: 9px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
          text-align: center;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .notice-button:hover {
          transform: translateY(-3px);
        }

        .notice-button:active {
          transform: translateY(1px);
        }

        .notice-button.primary {
          background: #0757a0;
          color: #ffffff;
          box-shadow: 0 4px 0 #043e73;
        }

        .notice-button.primary:hover {
          background: #096bc2;
          box-shadow: 0 6px 0 #043e73;
        }

        .notice-button.secondary {
          background: #e6f2ff;
          color: #0757a0;
          box-shadow: 0 4px 0 #c6ddf1;
        }

        .notice-button.secondary:hover {
          background: #cfe8ff;
          box-shadow: 0 6px 0 #b2d1e9;
        }

        /* =========================
           EMPTY STATE
        ========================== */

        .notice-empty {
          text-align: center;
          background: #ffffff;
          border: 2px solid #dce8f3;
          border-radius: 18px;
          padding: 65px 20px;
          box-shadow:
            0 7px 0 #d2e2f0,
            0 18px 35px rgba(15,76,129,0.07);
        }

        .notice-empty h3 {
          margin: 0 0 8px;
          color: #082d4f;
          font-size: 22px;
        }

        .notice-empty p {
          margin: 0;
          color: #71879b;
        }

        /* =========================
           INFO BOX
        ========================== */

        .notice-info {
          margin-top: 48px;
          padding: 27px;
          border-radius: 17px;
          background: #0757a0;
          color: #ffffff;
          border: 2px solid #064b8b;
          box-shadow:
            0 7px 0 #043e73,
            0 18px 35px rgba(7,87,160,0.18);
        }

        .notice-info h3 {
          margin: 0 0 9px;
          color: #ffffff;
          font-size: 20px;
        }

        .notice-info p {
          margin: 0;
          color: #e7f3ff;
          line-height: 1.7;
          font-size: 14px;
        }

        /* =========================
           MODAL
        ========================== */

        .notice-modal {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(3, 25, 45, 0.82);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .notice-modal-content {
          width: min(1100px, 100%);
          height: min(850px, 92vh);
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow:
            0 15px 0 #043e73,
            0 35px 70px rgba(0,0,0,0.35);
        }

        .notice-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 15px 18px;
          background: #0757a0;
          color: #ffffff;
        }

        .notice-modal-header h3 {
          margin: 0;
          font-size: 17px;
          color: #ffffff;
        }

        .notice-close {
          border: none;
          background: #ffffff;
          color: #0757a0;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 22px;
          font-weight: 900;
          transition: 0.2s ease;
          box-shadow: 0 4px 0 #c9dce9;
        }

        .notice-close:hover {
          transform: translateY(-2px);
          background: #eaf5ff;
        }

        .notice-preview {
          flex: 1;
          min-height: 0;
          background: #edf3f8;
        }

        .notice-preview iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .notice-preview img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* =========================
           TABLET
        ========================== */

        @media (max-width: 950px) {
          .notice-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .notice-controls {
            align-items: stretch;
            flex-direction: column;
          }

          .notice-search {
            width: 100%;
          }

          .category-list {
            width: 100%;
          }
        }

        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 650px) {
          .notice-hero {
            padding: 55px 17px 50px;
          }

          .notice-hero h1 {
            font-size: 42px;
            letter-spacing: -1.5px;
          }

          .notice-hero p {
            font-size: 15px;
          }

          .notice-container {
            padding: 32px 15px 60px;
          }

          .notice-grid {
            grid-template-columns: 1fr;
          }

          .notice-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .category-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .category-button {
            width: 100%;
          }

          .notice-card {
            min-height: auto;
          }

          .notice-actions {
            grid-template-columns: 1fr 1fr 1fr;
          }

          .ticker-item {
            padding: 12px 25px;
            font-size: 13px;
          }

          .notice-modal {
            padding: 8px;
          }

          .notice-modal-content {
            height: 95vh;
            border-radius: 12px;
          }
        }

        @media (max-width: 420px) {
          .notice-hero h1 {
            font-size: 36px;
          }

          .notice-actions {
            grid-template-columns: 1fr;
          }

          .notice-button {
            width: 100%;
          }
        }
      `}</style>

      {/* =========================
          FAST NOTICE TICKER
      ========================== */}

      {tickerNotices.length > 0 && (
        <div className="notice-ticker">
          <div className="ticker-content">
            {tickerNotices.map((notice) => (
              <div className="ticker-item" key={notice.id}>
                <span className="ticker-dot"></span>
                {notice.title}
              </div>
            ))}

            {tickerNotices.map((notice) => (
              <div className="ticker-item" key={`copy-${notice.id}`}>
                <span className="ticker-dot"></span>
                {notice.title}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================
          HERO
      ========================== */}

      <section className="notice-hero">
        <div className="notice-hero-inner">
          <div className="notice-badge">
            VFAW • Official Notices
          </div>

          <h1>Notices & Updates</h1>

          <p>
            Stay informed about competitions, events, opportunities,
            announcements, and important activities from Vets for Animal
            Welfare.
          </p>
        </div>
      </section>

      {/* =========================
          CONTENT
      ========================== */}

      <main className="notice-container">
        {/* Search and filters */}
        <div className="notice-controls">
          <div className="notice-search">
            <input
              type="search"
              placeholder="Search notices..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search notices"
            />
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`category-button ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Section heading */}
        <div className="notice-heading">
          <div>
            <h2>Latest Notices</h2>
            <p>
              Official updates and announcements from VFAW.
            </p>
          </div>

          <div className="notice-count">
            {filteredNotices.length} notice
            {filteredNotices.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Notice cards */}
        {filteredNotices.length > 0 ? (
          <section className="notice-grid">
            {filteredNotices.map((notice) => (
              <article className="notice-card" key={notice.id}>
                <div className="notice-card-top">
                  <span className="notice-category">
                    {notice.category}
                  </span>

                  {notice.important && (
                    <span className="important-label">
                      Important
                    </span>
                  )}
                </div>

                <h3>{notice.title}</h3>

                <p className="notice-card-description">
                  {notice.description}
                </p>

                <div className="notice-date">
                  Published: {formatDate(notice.date)}
                </div>

                <div className="notice-actions">
                  <button
                    type="button"
                    className="notice-button primary"
                    onClick={() => setSelectedNotice(notice)}
                  >
                    View
                  </button>

                  <a
                    className="notice-button secondary"
                    href={notice.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open
                  </a>

                  <a
                    className="notice-button secondary"
                    href={notice.file}
                    download
                  >
                    Download
                  </a>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <div className="notice-empty">
            <h3>No notices found</h3>
            <p>
              Try another search term or select a different category.
            </p>
          </div>
        )}

        {/* Information box */}
        <section className="notice-info">
          <h3>About VFAW Notices</h3>

          <p>
            This section is intended for official VFAW announcements,
            competitions, educational events, volunteer opportunities,
            programs, and other important updates. Always check the
            latest notice before participating in an activity.
          </p>
        </section>
      </main>

      {/* =========================
          PREVIEW MODAL
      ========================== */}

      {selectedNotice && (
        <div
          className="notice-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedNotice.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedNotice(null);
            }
          }}
        >
          <div className="notice-modal-content">
            <div className="notice-modal-header">
              <h3>{selectedNotice.title}</h3>

              <button
                type="button"
                className="notice-close"
                onClick={() => setSelectedNotice(null)}
                aria-label="Close notice"
              >
                ×
              </button>
            </div>

            <div className="notice-preview">
              {selectedNotice.fileType === "pdf" ? (
                <iframe
                  src={selectedNotice.file}
                  title={selectedNotice.title}
                ></iframe>
              ) : (
                <img
                  src={selectedNotice.file}
                  alt={selectedNotice.title}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notice;
