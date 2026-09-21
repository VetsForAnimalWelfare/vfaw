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
        .notice-page {
          min-height: 100vh;
          background: #f7faff;
          color: #0f172a;
          font-family: Arial, Helvetica, sans-serif;
        }

        .notice-ticker {
          width: 100%;
          overflow: hidden;
          background: #0757a0;
          color: white;
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }

        .ticker-content {
          display: flex;
          width: max-content;
          animation: noticeTicker 28s linear infinite;
        }

        .ticker-content:hover {
          animation-play-state: paused;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 35px;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 600;
        }

        .ticker-dot {
          width: 7px;
          height: 7px;
          background: #ffffff;
          border-radius: 50%;
          display: inline-block;
        }

        @keyframes noticeTicker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .notice-hero {
          padding: 70px 20px 60px;
          background:
            radial-gradient(circle at top right, rgba(26,115,232,0.16), transparent 35%),
            linear-gradient(135deg, #ffffff 0%, #eef6ff 100%);
          border-bottom: 1px solid #e2e8f0;
        }

        .notice-hero-inner {
          max-width: 1180px;
          margin: 0 auto;
          text-align: center;
        }

        .notice-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 15px;
          border-radius: 999px;
          background: #e7f1ff;
          color: #0757a0;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .notice-hero h1 {
          margin: 0;
          font-size: clamp(36px, 6vw, 64px);
          line-height: 1.05;
          letter-spacing: -2px;
          color: #0b2d4d;
        }

        .notice-hero p {
          max-width: 720px;
          margin: 20px auto 0;
          color: #64748b;
          font-size: 17px;
          line-height: 1.7;
        }

        .notice-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 45px 20px 80px;
        }

        .notice-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 35px;
        }

        .notice-search {
          flex: 1;
          min-width: 260px;
          position: relative;
        }

        .notice-search input {
          width: 100%;
          box-sizing: border-box;
          padding: 15px 18px;
          border: 1px solid #d7e0ea;
          border-radius: 14px;
          background: white;
          outline: none;
          font-size: 15px;
          transition: 0.2s ease;
        }

        .notice-search input:focus {
          border-color: #1677d2;
          box-shadow: 0 0 0 4px rgba(22,119,210,0.1);
        }

        .category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .category-button {
          border: 1px solid #d7e0ea;
          background: white;
          color: #475569;
          padding: 10px 15px;
          border-radius: 999px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          transition: 0.2s ease;
        }

        .category-button:hover {
          border-color: #1677d2;
          color: #0757a0;
        }

        .category-button.active {
          background: #0757a0;
          color: white;
          border-color: #0757a0;
        }

        .notice-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 20px;
        }

        .notice-heading h2 {
          margin: 0;
          color: #0b2d4d;
          font-size: 28px;
        }

        .notice-heading p {
          margin: 6px 0 0;
          color: #64748b;
        }

        .notice-count {
          color: #0757a0;
          font-weight: 700;
          font-size: 14px;
        }

        .notice-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .notice-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 35px rgba(15,23,42,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
          min-height: 280px;
        }

        .notice-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 45px rgba(15,23,42,0.11);
        }

        .notice-card-top {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 18px;
        }

        .notice-category {
          display: inline-flex;
          padding: 6px 10px;
          border-radius: 8px;
          background: #edf6ff;
          color: #0757a0;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .important-label {
          color: #b45309;
          background: #fff7df;
          padding: 6px 10px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
        }

        .notice-card h3 {
          margin: 0 0 12px;
          color: #0b2d4d;
          font-size: 21px;
          line-height: 1.35;
        }

        .notice-card-description {
          color: #64748b;
          line-height: 1.65;
          font-size: 14px;
          flex: 1;
        }

        .notice-date {
          color: #94a3b8;
          font-size: 13px;
          margin: 16px 0;
        }

        .notice-actions {
          display: flex;
          gap: 9px;
        }

        .notice-button {
          flex: 1;
          border: none;
          padding: 11px 13px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          text-align: center;
          box-sizing: border-box;
        }

        .notice-button.primary {
          background: #0757a0;
          color: white;
        }

        .notice-button.primary:hover {
          background: #06467f;
        }

        .notice-button.secondary {
          background: #eef5fb;
          color: #0757a0;
        }

        .notice-empty {
          text-align: center;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 60px 20px;
        }

        .notice-empty h3 {
          margin: 0 0 8px;
          color: #0b2d4d;
        }

        .notice-empty p {
          margin: 0;
          color: #64748b;
        }

        .notice-info {
          margin-top: 45px;
          padding: 25px;
          border-radius: 18px;
          background: #eaf4ff;
          border: 1px solid #cfe5fa;
        }

        .notice-info h3 {
          margin: 0 0 8px;
          color: #0757a0;
        }

        .notice-info p {
          margin: 0;
          color: #475569;
          line-height: 1.7;
          font-size: 14px;
        }

        .notice-modal {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(15,23,42,0.78);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .notice-modal-content {
          width: min(1100px, 100%);
          height: min(850px, 92vh);
          background: white;
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .notice-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 15px 18px;
          border-bottom: 1px solid #e2e8f0;
        }

        .notice-modal-header h3 {
          margin: 0;
          font-size: 17px;
          color: #0b2d4d;
        }

        .notice-close {
          border: none;
          background: #eef2f7;
          color: #334155;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
        }

        .notice-preview {
          flex: 1;
          min-height: 0;
          background: #f1f5f9;
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

        @media (max-width: 900px) {
          .notice-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .notice-hero {
            padding: 50px 18px 45px;
          }

          .notice-container {
            padding: 30px 15px 60px;
          }

          .notice-grid {
            grid-template-columns: 1fr;
          }

          .notice-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .category-list {
            width: 100%;
          }

          .category-button {
            flex: 1;
          }

          .notice-card {
            min-height: auto;
          }

          .notice-modal {
            padding: 8px;
          }

          .notice-modal-content {
            height: 95vh;
            border-radius: 12px;
          }
        }
      `}</style>

      {/* Scrolling notice ticker */}
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

      {/* Hero section */}
      <section className="notice-hero">
        <div className="notice-hero-inner">
          <div className="notice-badge">VFAW • Official Notices</div>

          <h1>Notices & Updates</h1>

          <p>
            Stay informed about competitions, events, opportunities,
            announcements, and important activities from Vets for Animal
            Welfare.
          </p>
        </div>
      </section>

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

        {/* Heading */}
        <div className="notice-heading">
          <div>
            <h2>Latest Notices</h2>
            <p>Official updates and announcements from VFAW.</p>
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
                    <span className="important-label">Important</span>
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
            programs, and other important updates. Always check the latest
            notice before participating in an activity.
          </p>
        </section>
      </main>

      {/* Preview modal */}
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
