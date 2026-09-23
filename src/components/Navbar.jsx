import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import logoHome from "../../public/logohome.png";
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


// ============================================================
// BELL ICON
// ============================================================

const BellIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
    <path d="M10 21h4" />
  </svg>
);


// ============================================================
// NAVBAR
// ============================================================

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();


  // ==========================================================
  // SCROLL EFFECT
  // ==========================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // ==========================================================
  // BODY SCROLL LOCK WHEN MOBILE MENU IS OPEN
  // ==========================================================

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  // ==========================================================
  // NAVIGATION
  // ==========================================================

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Apply", path: "/apply" },
    { name: "Library", path: "/library" },
    { name: "Gallery", path: "/gallery" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Contact", path: "/contact" },
    { name: "Notice", path: "/notice" },
  ];


  // ==========================================================
  // CLOSE MOBILE MENU
  // ==========================================================

  const closeMenu = () => {
    setIsOpen(false);
  };


  // ==========================================================
  // SORT NOTICES
  // NEWEST FIRST
  // ==========================================================

  const tickerNotices = useMemo(() => {
    return [...noticesData].sort(
      (a, b) =>
        parseLocalDate(b.date).getTime() -
        parseLocalDate(a.date).getTime()
    );
  }, []);


  // ==========================================================
  // DUPLICATE THE LIST FOR SEAMLESS INFINITE TICKER
  // ==========================================================

  const tickerItems = useMemo(() => {
    return [...tickerNotices, ...tickerNotices];
  }, [tickerNotices]);


  // ==========================================================
  // OPEN NOTICE
  // ==========================================================

  const openNotice = (noticeId) => {
    closeMenu();

    navigate(`/notice#notice-${noticeId}`);
  };


  return (
    <>
      {/* ======================================================
          MAIN FIXED NAVBAR
      ====================================================== */}

      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-[0_8px_30px_rgba(7,21,47,0.10)] backdrop-blur-xl"
            : "bg-white"
        }`}
      >
        <nav className="mx-auto flex h-[84px] max-w-[1500px] items-center px-3 sm:px-5 lg:h-[90px] lg:px-5 xl:px-7">

          {/* ==================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Vets for Animal Welfare Home"
            className="group flex shrink-0 items-center"
          >
            <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center sm:h-[72px] sm:w-[72px] lg:h-[76px] lg:w-[76px]">
              <img
                src={logoHome}
                alt="Vets for Animal Welfare"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="ml-2 sm:ml-2.5 lg:ml-3">
              <h1 className="whitespace-nowrap text-[16px] font-black leading-[1.05] tracking-[-0.035em] text-[#0756b8] sm:text-[18px] lg:text-[20px]">
                Vets for Animal Welfare
              </h1>

              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="h-[2px] w-5 rounded-full bg-[#e32932]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-[9px]">
                  VFAW
                </span>
              </div>
            </div>
          </Link>


          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="ml-auto hidden items-center lg:flex">
            <div className="flex items-center">

              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative whitespace-nowrap px-2 py-3 text-[11px] font-bold tracking-wide transition-all duration-300 xl:px-2.5 xl:text-[12px] ${
                      isActive
                        ? "text-[#0756b8]"
                        : "text-slate-600 hover:text-[#0756b8]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>

                      <span
                        className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#e32932] transition-all duration-300 ${
                          isActive
                            ? "w-4 opacity-100"
                            : "w-0 opacity-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}

            </div>


            {/* =================================================
                DESKTOP DONATE BUTTON
            ================================================= */}

            <Link
              to="/donate"
              className="group relative ml-2 inline-flex shrink-0 items-center gap-1.5 overflow-hidden rounded-xl bg-[#e32932] px-4 py-3 text-[11px] font-black tracking-wide text-white shadow-[0_8px_22px_rgba(227,41,50,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c91f28] hover:shadow-[0_12px_28px_rgba(227,41,50,0.32)] xl:ml-2.5 xl:px-4.5 xl:text-[12px]"
            >
              <span className="absolute inset-y-0 -left-10 w-7 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

              <svg
                className="relative h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>

              <span className="relative whitespace-nowrap">
                Donate
              </span>
            </Link>
          </div>


          {/* ==================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            className="ml-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0756b8] shadow-[0_6px_18px_rgba(7,21,47,0.10)] transition-all duration-300 hover:border-red-200 hover:text-[#e32932] lg:hidden"
          >
            <span className="relative flex h-[21px] w-[26px] flex-col justify-between">

              <span
                className={`block h-[2.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  isOpen
                    ? "translate-y-[9px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`block h-[2.5px] w-[18px] self-end rounded-full bg-current transition-all duration-300 ${
                  isOpen
                    ? "translate-x-5 opacity-0"
                    : ""
                }`}
              />

              <span
                className={`block h-[2.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  isOpen
                    ? "-translate-y-[9px] -rotate-45"
                    : ""
                }`}
              />

            </span>
          </button>
        </nav>


        {/* ======================================================
            MOBILE NAVIGATION
        ====================================================== */}

        <div
          className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
            isOpen
              ? "max-h-[calc(100vh-84px)] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl overflow-y-auto px-4 pb-6 pt-3 sm:px-6">

            <div className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-2">

              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-white text-[#0756b8] shadow-sm"
                        : "text-slate-600 hover:bg-white hover:text-[#0756b8]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>

                      <svg
                        className={`h-4 w-4 transition-all duration-200 ${
                          isActive
                            ? "translate-x-0 text-[#e32932] opacity-100"
                            : "-translate-x-1 text-slate-300 opacity-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 6l6 6-6 6"
                        />
                      </svg>
                    </>
                  )}
                </NavLink>
              ))}

            </div>


            {/* =================================================
                MOBILE DONATE BUTTON
            ================================================= */}

            <Link
              to="/donate"
              onClick={closeMenu}
              className="group relative mt-4 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#e32932] px-6 py-4 text-sm font-black text-white shadow-[0_12px_28px_rgba(227,41,50,0.25)] transition-all duration-300 hover:bg-[#c91f28]"
            >
              <span className="absolute inset-y-0 -left-12 w-10 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

              <svg
                className="relative h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>

              <span className="relative">
                Support Our Mission
              </span>

              <svg
                className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 6l6 6-6 6"
                />
              </svg>
            </Link>


            {/* =================================================
                MOBILE FOOTER LABEL
            ================================================= */}

            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-slate-200" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Vets for Animal Welfare
              </span>

              <span className="h-px w-8 bg-slate-200" />
            </div>

          </div>
        </div>
      </header>


      {/* ======================================================
          SPACE FOR FIXED NAVBAR
      ====================================================== */}

      <div className="h-[84px] lg:h-[90px]" />


      {/* ======================================================
          NOTICE TICKER
      ====================================================== */}

      {tickerNotices.length > 0 && (
        <div className="vfaw-notice-ticker">

          {/* ==================================================
              TICKER LABEL
          ================================================== */}

          <div className="vfaw-ticker-label">
            <BellIcon />
            <span>Notices</span>
          </div>


          {/* ==================================================
              TICKER WINDOW
          ================================================== */}

          <div className="vfaw-ticker-window">

            <div className="vfaw-ticker-track">

              {tickerItems.map((notice, index) => {
                const recent = isRecentNotice(notice.date);

                return (
                  <button
                    key={`${notice.id}-${index}`}
                    type="button"
                    className={`vfaw-ticker-item ${
                      recent
                        ? "vfaw-ticker-recent"
                        : "vfaw-ticker-old"
                    }`}
                    onClick={() => openNotice(notice.id)}
                    aria-label={`View ${notice.title}`}
                    tabIndex={
                      index >= tickerNotices.length
                        ? -1
                        : 0
                    }
                  >

                    <span className="vfaw-ticker-dot" />

                    {recent && (
                      <span className="vfaw-ticker-new">
                        NEW
                      </span>
                    )}

                    <span>{notice.title}</span>

                  </button>
                );
              })}

            </div>
          </div>
        </div>
      )}


      {/* ======================================================
          TICKER CSS
      ====================================================== */}

      <style>{`
        .vfaw-notice-ticker {
          position: relative;
          width: 100%;
          height: 46px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #ffffff;
          border-top: 1px solid #e7edf4;
          border-bottom: 1px solid #e7edf4;
          z-index: 30;
        }

        .vfaw-ticker-label {
          position: relative;
          z-index: 5;
          flex: 0 0 auto;
          height: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 22px;
          background: #0759b8;
          color: white;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
          box-shadow: 8px 0 20px rgba(7,89,184,.12);
        }

        .vfaw-ticker-label svg {
          width: 15px;
          height: 15px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
        }

        .vfaw-ticker-window {
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }

        .vfaw-ticker-track {
          width: max-content;
          display: flex;
          align-items: center;
          animation: vfawNoticeTicker 32s linear infinite;
          will-change: transform;
        }

        .vfaw-notice-ticker:hover .vfaw-ticker-track {
          animation-play-state: paused;
        }

        .vfaw-ticker-item {
          height: 46px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0 32px;
          white-space: nowrap;
          border: none;
          outline: none;
          background: transparent;
          cursor: pointer;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          transition:
            opacity .2s ease,
            transform .2s ease;
        }

        .vfaw-ticker-item:hover {
          opacity: .72;
        }

        .vfaw-ticker-item:active {
          transform: scale(.98);
        }

        .vfaw-ticker-item:focus-visible {
          outline: 2px solid rgba(7,89,184,.35);
          outline-offset: -3px;
          border-radius: 6px;
        }

        .vfaw-ticker-recent {
          color: #e53935;
        }

        .vfaw-ticker-old {
          color: #0759b8;
        }

        .vfaw-ticker-dot {
          width: 6px;
          height: 6px;
          flex: 0 0 6px;
          border-radius: 50%;
          background: currentColor;
        }

        .vfaw-ticker-new {
          padding: 4px 7px;
          border-radius: 5px;
          background: #fff1f1;
          color: #e53935;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .06em;
        }

        @keyframes vfawNoticeTicker {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 650px) {
          .vfaw-notice-ticker {
            height: 42px;
          }

          .vfaw-ticker-label {
            padding: 0 13px;
            font-size: 9px;
          }

          .vfaw-ticker-label svg {
            width: 13px;
            height: 13px;
          }

          .vfaw-ticker-item {
            height: 42px;
            padding: 0 20px;
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vfaw-ticker-track {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
