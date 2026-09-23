import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import noticesData from "../data/notices";


// ============================================================
// DATE HELPERS
// ============================================================

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
  const date = parseLocalDate(dateString);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}


// ============================================================
// ICONS
// ============================================================

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-4-4" />
  </svg>
);

const ShareIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="m8.6 13.5 6.8 4" />
    <path d="m15.4 6.5-6.8 4" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 3h7v7" />
    <path d="M10 14 21 3" />
    <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </svg>
);

const BellIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
    <path d="M10 21h4" />
  </svg>
);


// ============================================================
// NOTICE PAGE
// ============================================================

const Notice = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [shareMessage, setShareMessage] = useState("");


  // ==========================================================
  // CATEGORIES
  // ==========================================================

  const categories = [
    "All",
    "Important",
    "Competition",
    "Event",
    "Opportunity",
    "Announcement",
    "Notice",
  ];


  // ==========================================================
  // SORT NOTICES
  // ==========================================================

  const sortedNotices = useMemo(() => {
    return [...noticesData].sort(
      (a, b) =>
        parseLocalDate(b.date).getTime() -
        parseLocalDate(a.date).getTime()
    );
  }, []);


  // ==========================================================
  // FILTER
  // ==========================================================

  const filteredNotices = useMemo(() => {
    const query = search.trim().toLowerCase();

    return sortedNotices.filter((notice) => {
      const matchesSearch =
        !query ||
        notice.title.toLowerCase().includes(query) ||
        notice.description.toLowerCase().includes(query) ||
        notice.category.toLowerCase().includes(query);

      const matchesCategory =
        activeCategory === "All"
          ? true
          : activeCategory === "Important"
          ? notice.important
          : notice.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [sortedNotices, search, activeCategory]);


  // ==========================================================
  // OPEN NOTICE FROM URL HASH
  //
  // /notice#notice-1
  // /notice#notice-2
  // ==========================================================

  useEffect(() => {
    const openNoticeFromHash = () => {
      const hash = window.location.hash;

      if (!hash.startsWith("#notice-")) {
        return;
      }

      const noticeId = Number(
        hash.replace("#notice-", "")
      );

      if (Number.isNaN(noticeId)) {
        return;
      }

      const notice = noticesData.find(
        (item) => item.id === noticeId
      );

      if (!notice) {
        return;
      }

      setSelectedNotice(notice);

      setTimeout(() => {
        document
          .getElementById(`notice-${notice.id}`)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }, 150);
    };

    openNoticeFromHash();

    window.addEventListener(
      "hashchange",
      openNoticeFromHash
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        openNoticeFromHash
      );
    };
  }, []);


  // ==========================================================
  // BODY SCROLL LOCK WHEN MODAL OPEN
  // ==========================================================

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


  // ==========================================================
  // ESCAPE KEY
  // ==========================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedNotice(null);

        if (
          window.location.hash.startsWith(
            "#notice-"
          )
        ) {
          window.history.replaceState(
            null,
            "",
            window.location.pathname +
              window.location.search
          );
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);


  // ==========================================================
  // DOWNLOAD
  // ==========================================================

  const downloadNotice = (notice) => {
    if (!notice.file) return;

    const link = document.createElement("a");

    link.href = notice.file;
    link.download = notice.file.split("/").pop();

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };


  // ==========================================================
  // SHARE
  // ==========================================================

  const shareNotice = async (notice) => {
    const url =
      `${window.location.origin}/notice#notice-${notice.id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: notice.title,
          text: notice.description,
          url,
        });

        return;
      }

      await navigator.clipboard.writeText(url);

      setShareMessage("Link copied!");

      setTimeout(() => {
        setShareMessage("");
      }, 2200);
    } catch (error) {
      // User cancelled native sharing.
    }
  };


  // ==========================================================
  // CLOSE MODAL
  // ==========================================================

  const closeNotice = () => {
    setSelectedNotice(null);

    if (
      window.location.hash.startsWith("#notice-")
    ) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname +
          window.location.search
      );
    }
  };


  // ==========================================================
  // OPEN NOTICE FROM CARD
  // ==========================================================

  const openNotice = (notice) => {
    window.history.pushState(
      null,
      "",
      `/notice#notice-${notice.id}`
    );

    setSelectedNotice(notice);
  };


  return (
    <div className="min-h-screen bg-[#f7faff] text-slate-900">


      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#0759b8]">

        {/* Decorative circles */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="mx-auto max-w-3xl text-center text-white">

            {/* Small label */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

              <BellIcon />

              <span className="text-[10px] font-black uppercase tracking-[0.18em]">
                VFAW Official Communication
              </span>

            </div>


            {/* Heading */}

            <h1 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Notices & Updates.
            </h1>


            {/* Description */}

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              Stay up to date with official VFAW
              announcements, competitions,
              educational events, opportunities
              and important activities.
            </p>


            {/* Stats */}

            <div className="mt-8 flex justify-center">

              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">

                <span className="text-2xl font-black">
                  {noticesData.length}
                </span>

                <span className="text-left text-[10px] font-bold uppercase tracking-[0.12em] text-blue-100">
                  Published
                  <br />
                  Notices
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">


        {/* ====================================================
            SEARCH + CATEGORY CONTROLS
        ==================================================== */}

        <div className="mb-10">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}

            <div className="relative w-full lg:max-w-md">

              <SearchIcon />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search notices..."
                className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-[#0759b8] focus:ring-4 focus:ring-blue-100"
              />

            </div>


            {/* Result count */}

            <div className="text-center text-xs font-bold text-slate-400 lg:text-right">
              Showing{" "}
              <span className="text-[#0759b8]">
                {filteredNotices.length}
              </span>{" "}
              of {noticesData.length} notices
            </div>

          </div>


          {/* Categories */}

          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-black transition-all ${
                  activeCategory === category
                    ? "bg-[#0759b8] text-white shadow-[0_8px_20px_rgba(7,89,184,0.18)]"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-[#0759b8]"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>


        {/* ====================================================
            SECTION HEADING
        ==================================================== */}

        <div className="mb-7 flex items-end justify-between gap-4">

          <div>

            <div className="mb-2 flex items-center gap-2">

              <span className="h-1.5 w-7 rounded-full bg-[#e32932]" />

              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0759b8]">
                Latest Information
              </span>

            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Latest Notices
            </h2>

          </div>

        </div>


        {/* ====================================================
            NOTICE GRID
        ==================================================== */}

        {filteredNotices.length > 0 ? (

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {filteredNotices.map((notice) => {

              const recent = isRecentNotice(
                notice.date
              );

              return (
                <article
                  id={`notice-${notice.id}`}
                  className={`notice-card group relative overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(7,35,70,0.10)] ${
                    recent
                      ? "border-blue-200"
                      : "border-slate-200"
                  }`}
                  key={notice.id}
                >

                  {/* Recent indicator */}

                  {recent && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#e32932]" />
                  )}


                  <div className="p-6">

                    {/* Top row */}

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex flex-wrap items-center gap-2">

                        <span className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.1em] text-[#0759b8]">
                          {notice.category}
                        </span>

                        {notice.important && (
                          <span className="rounded-lg bg-red-50 px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.1em] text-[#e32932]">
                            Important
                          </span>
                        )}

                        {recent && (
                          <span className="rounded-lg bg-[#fff1f1] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.1em] text-[#e32932]">
                            NEW
                          </span>
                        )}

                      </div>


                      {/* Date */}

                      <span className="shrink-0 text-[10px] font-bold text-slate-400">
                        {formatDate(notice.date)}
                      </span>

                    </div>


                    {/* Title */}

                    <h3 className="mt-5 text-xl font-black leading-tight tracking-[-0.025em] text-slate-900 transition-colors group-hover:text-[#0759b8]">
                      {notice.title}
                    </h3>


                    {/* Description */}

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                      {notice.description}
                    </p>


                    {/* Bottom */}

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                      <button
                        type="button"
                        onClick={() =>
                          openNotice(notice)
                        }
                        className="inline-flex items-center gap-2 text-xs font-black text-[#0759b8] transition-all hover:gap-3"
                      >
                        View Notice

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50">

                          <ArrowIcon />

                        </span>
                      </button>


                      {/* Quick actions */}

                      <div className="flex items-center gap-1">

                        <button
                          type="button"
                          onClick={() =>
                            shareNotice(notice)
                          }
                          aria-label={`Share ${notice.title}`}
                          className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition-all hover:bg-blue-50 hover:text-[#0759b8]"
                        >
                          <ShareIcon />
                        </button>

                        {notice.file && (
                          <button
                            type="button"
                            onClick={() =>
                              downloadNotice(notice)
                            }
                            aria-label={`Download ${notice.title}`}
                            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition-all hover:bg-blue-50 hover:text-[#0759b8]"
                          >
                            <DownloadIcon />
                          </button>
                        )}

                      </div>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        ) : (

          /* ==================================================
             NO RESULTS
          ================================================== */

          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0759b8]">
              <SearchIcon />
            </div>

            <h3 className="mt-5 text-xl font-black text-slate-900">
              No notices found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Try changing your search term or
              selecting another category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-6 rounded-xl bg-[#0759b8] px-5 py-3 text-xs font-black text-white transition-all hover:bg-[#064d9e]"
            >
              Clear Filters
            </button>

          </div>
        )}


        {/* ====================================================
            INFORMATION SECTION
        ==================================================== */}

        <section className="mt-14 overflow-hidden rounded-3xl border border-blue-100 bg-white">

          <div className="grid lg:grid-cols-[1fr_auto]">

            <div className="p-7 sm:p-9">

              <div className="mb-3 flex items-center gap-2">

                <span className="h-1.5 w-6 rounded-full bg-[#e32932]" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0759b8]">
                  Stay Connected
                </span>

              </div>

              <h3 className="text-2xl font-black tracking-tight text-slate-900">
                Don't miss an update.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                Check this page regularly for VFAW
                competitions, educational activities,
                opportunities, announcements and
                important organizational updates.
              </p>

            </div>


            <div className="flex items-center bg-[#0759b8] px-7 py-8 lg:px-10">

              <div className="flex items-center gap-4 text-white">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <BellIcon />
                </div>

                <div>

                  <p className="text-sm font-black">
                    VFAW Notices
                  </p>

                  <p className="mt-1 text-xs text-blue-100">
                    Updated regularly
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* ======================================================
          SHARE TOAST
      ====================================================== */}

      {shareMessage && (
        <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-white shadow-2xl">
          {shareMessage}
        </div>
      )}


      {/* ======================================================
          NOTICE MODAL
      ====================================================== */}

      {selectedNotice && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeNotice();
            }
          }}
        >

          <div className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]">


            {/* ==================================================
                MODAL HEADER
            ================================================== */}

            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-100 bg-white px-5 py-4 sm:px-7">

              <div className="min-w-0">

                <div className="flex flex-wrap items-center gap-2">

                  <span className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.1em] text-[#0759b8]">
                    {selectedNotice.category}
                  </span>

                  {selectedNotice.important && (
                    <span className="rounded-lg bg-red-50 px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.1em] text-[#e32932]">
                      Important
                    </span>
                  )}

                </div>

                <h2 className="mt-2 truncate text-base font-black text-slate-900 sm:text-lg">
                  {selectedNotice.title}
                </h2>

              </div>


              {/* Close */}

              <button
                type="button"
                onClick={closeNotice}
                aria-label="Close notice"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:border-red-200 hover:bg-red-50 hover:text-[#e32932]"
              >
                <CloseIcon />
              </button>

            </div>


            {/* ==================================================
                MODAL CONTENT
            ================================================== */}

            <div className="min-h-0 flex-1 overflow-auto bg-[#f4f7fb] p-3 sm:p-5">

              {selectedNotice.file ? (

                selectedNotice.fileType === "image" ? (

                  <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-white p-3">

                    <img
                      src={selectedNotice.file}
                      alt={selectedNotice.title}
                      className="max-h-[72vh] max-w-full rounded-xl object-contain"
                    />

                  </div>

                ) : (

                  <iframe
                    src={selectedNotice.file}
                    title={selectedNotice.title}
                    className="h-[68vh] min-h-[420px] w-full rounded-2xl border border-slate-200 bg-white"
                  />

                )

              ) : (

                <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-white p-8 text-center">

                  <div>

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0759b8]">
                      <BellIcon />
                    </div>

                    <h3 className="mt-5 text-xl font-black text-slate-900">
                      {selectedNotice.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                      {selectedNotice.description}
                    </p>

                  </div>

                </div>

              )}

            </div>


            {/* ==================================================
                MODAL FOOTER
            ================================================== */}

            <div className="flex shrink-0 flex-col gap-3 border-t border-slate-100 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  Published
                </p>

                <p className="mt-1 text-xs font-black text-slate-700">
                  {formatDate(selectedNotice.date)}
                </p>

              </div>


              <div className="flex flex-wrap gap-2">

                {selectedNotice.file && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        downloadNotice(
                          selectedNotice
                        )
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-black text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-[#0759b8]"
                    >
                      <DownloadIcon />
                      Download
                    </button>

                    <a
                      href={selectedNotice.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-black text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-[#0759b8]"
                    >
                      <ExternalIcon />
                      Open
                    </a>
                  </>
                )}

                <button
                  type="button"
                  onClick={() =>
                    shareNotice(
                      selectedNotice
                    )
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0759b8] px-4 py-3 text-xs font-black text-white transition-all hover:bg-[#064d9e]"
                >
                  <ShareIcon />
                  Share
                </button>

              </div>

            </div>

          </div>

        </div>
      )}


      {/* ======================================================
          PAGE CSS
      ====================================================== */}

      <style>{`

        .notice-card {
          scroll-margin-top: 130px;
        }

        .notice-card svg {
          width: 16px;
          height: 16px;
        }

        input[type="search"]::-webkit-search-cancel-button {
          cursor: pointer;
        }

        @media (prefers-reduced-motion: reduce) {
          .notice-card {
            transition: none;
          }
        }

      `}</style>

    </div>
  );
};

export default Notice;
