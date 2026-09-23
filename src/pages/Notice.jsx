import React, { useMemo, useState } from "react";
import "./Notice.css";

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

const categories = ["All", ...new Set(notices.map((notice) => notice.category))];

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

  // Update URL hash without causing another jump.
  window.history.replaceState(null, "", `#notice-${id}`);

  // Add temporary highlight.
  element.classList.remove("notice-highlight");

  // Force browser to restart animation.
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
      const matchesCategory =
        activeCategory === "All" || notice.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        notice.title.toLowerCase().includes(searchText) ||
        notice.description.toLowerCase().includes(searchText) ||
        notice.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const tickerNotices = [...notices, ...notices];

  return (
    <div className="notice-page">
      {/* =========================================================
          MOVING NOTICE TICKER
      ========================================================= */}
      <div className="notice-ticker-wrapper">
        <div className="notice-ticker-label">
          <span className="ticker-label-dot"></span>
          <span>NOTICE</span>
        </div>

        <div className="notice-ticker">
          <div className="notice-ticker-track">
            {tickerNotices.map((notice, index) => (
              <React.Fragment key={`${notice.id}-${index}`}>
                <button
                  type="button"
                  className="ticker-notice"
                  onClick={() => scrollToNotice(notice.id)}
                >
                  <span className="ticker-dot"></span>
                  <span>{notice.title}</span>
                </button>

                <span className="ticker-separator">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="notice-hero">
        <div className="hero-decoration hero-decoration-one"></div>
        <div className="hero-decoration hero-decoration-two"></div>
        <div className="hero-grid"></div>

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
            Stay up to date with official VFAW announcements, competitions,
            educational events, opportunities and important activities.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>{notices.length}</strong>
              <span>Published Notices</span>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">
              <strong>Regularly</strong>
              <span>Updated</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <main className="notice-container">
        {/* Search + Filters */}
        <section className="notice-controls">
          <div className="notice-search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-4-4"></path>
            </svg>

            <input
              type="text"
              placeholder="Search notices..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearch("")}
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
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Results info */}
        <div className="notice-results-info">
          <span>
            Showing <strong>{filteredNotices.length}</strong>{" "}
            {filteredNotices.length === 1 ? "notice" : "notices"}
          </span>

          {(search || activeCategory !== "All") && (
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

        {/* =========================================================
            NOTICE CARDS
        ========================================================= */}
        {filteredNotices.length > 0 ? (
          <section className="notice-grid">
            {filteredNotices.map((notice) => (
              <article
                key={notice.id}
                id={`notice-${notice.id}`}
                className="notice-card"
              >
                {/* Card top */}
                <div className="notice-card-top">
                  <div className="notice-category">
                    <span className="category-dot"></span>
                    {notice.category}
                  </div>

                  <div className="notice-card-actions">
                    {notice.important && (
                      <span className="important-badge">Important</span>
                    )}

                    {notice.pinned && (
                      <span className="pin-badge">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="m15 4 5 5-3 1-4 6-4-4 6-4z"></path>
                          <path d="M9 15 4 20"></path>
                        </svg>
                      </span>
                    )}
                  </div>
                </div>

                {/* Date */}
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
                    ></rect>
                    <path d="M16 2v4M8 2v4M3 10h18"></path>
                  </svg>

                  {formatDate(notice.date)}
                </div>

                {/* Title */}
                <h2>{notice.title}</h2>

                {/* Description */}
                <p className="notice-description">{notice.description}</p>

                {/* Card bottom */}
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
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <path d="M14 2v6h6"></path>
                          <path d="M8 13h2M8 17h6"></path>
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
                          ></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <path d="m21 15-5-5L5 21"></path>
                        </svg>
                      )}
                    </span>

                    {notice.type}
                  </span>

                  <button
                    type="button"
                    className="view-notice-btn"
                    onClick={() => setSelectedNotice(notice)}
                  >
                    View Notice
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m13 6 6 6-6 6"></path>
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="empty-state">
            <div className="empty-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="11" cy="11" r="7"></circle>
                <path d="m20 20-4-4"></path>
              </svg>
            </div>

            <h2>No notices found</h2>

            <p>
              We couldn't find any notices matching your search or selected
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

      {/* =========================================================
          NOTICE VIEWER MODAL
      ========================================================= */}
      {selectedNotice && (
        <div
          className="notice-modal-backdrop"
          onClick={() => setSelectedNotice(null)}
        >
          <div
            className="notice-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="modal-category">
                  {selectedNotice.category}
                </span>

                <h2>{selectedNotice.title}</h2>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={() => setSelectedNotice(null)}
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
                Published {formatDate(selectedNotice.date)}
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
                  <path d="M14 3h7v7"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
