import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Apply', path: '/apply' },
    { name: 'Library', path: '/library' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Contact', path: '/contact' },
  ];

  const programLinks = [
    'Animal Welfare',
    'Animal Birth Control',
    'Vaccination',
    'Street Dog Feeding',
    'Awareness Programs',
    'Capacity Building',
  ];

  return (
    <footer className="relative overflow-hidden bg-[#07152f] text-white">

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute -bottom-56 -left-56 h-[620px] w-[620px] rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute right-[15%] top-[35%] h-40 w-40 rounded-full border border-white/[0.04]" />

        <div className="absolute right-[13%] top-[33%] h-64 w-64 rounded-full border border-white/[0.025]" />

      </div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">

          {/* =====================================================
              BRAND COLUMN
          ===================================================== */}
          <div className="lg:col-span-4">

            {/* LOGO */}
            <div className="group mb-7 inline-flex items-center">

              <div className="relative flex h-[92px] w-[92px] items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.28)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_22px_50px_rgba(0,0,0,0.38)]">

                <div className="absolute inset-1 rounded-xl border border-slate-200" />

                <img
                  src="/logohome.png"
                  alt="Vets for Animal Welfare Logo"
                  className="relative z-10 h-full w-full object-contain"
                />

              </div>

            </div>

            {/* ORGANIZATION NAME */}
            <h2 className="max-w-sm text-2xl font-black tracking-tight text-white sm:text-3xl">

              Vets for

              <span className="block text-blue-300">
                Animal Welfare
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base">
              A student-led organization working to advance animal welfare,
              veterinary education, and compassionate community action in Nepal.
            </p>

            {/* BRAND LINE */}
            <div className="mt-7 flex items-center gap-3">

              <div className="h-1 w-12 rounded-full bg-blue-500" />

              <div className="h-1 w-5 rounded-full bg-red-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Welfare • Knowledge • Action
              </span>

            </div>

            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}
            <div className="mt-8 flex items-center gap-3">

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/vetsforanimalwelfare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VFAW Facebook"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/65 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500 hover:text-white hover:shadow-blue-500/20"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/vetsforanimalwelfare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VFAW Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/65 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500 hover:text-white hover:shadow-pink-500/20"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/company/vets-for-animal-welfare/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VFAW LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/65 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-600 hover:text-white hover:shadow-blue-600/20"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

            </div>

          </div>

          {/* =====================================================
              EXPLORE
          ===================================================== */}
          <div className="lg:col-span-2">

            <FooterHeading title="Explore" />

            <ul className="space-y-3.5">

              {quickLinks.map((link) => (
                <li key={link.path}>

                  <Link
                    to={link.path}
                    className="group flex items-center gap-3 text-sm text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >

                    <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-4" />

                    {link.name}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =====================================================
              OUR WORK
          ===================================================== */}
          <div className="lg:col-span-2">

            <FooterHeading title="Our Work" />

            <ul className="space-y-3.5">

              {programLinks.map((program) => (
                <li key={program}>

                  <Link
                    to="/programs"
                    className="group flex items-center gap-3 text-sm text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >

                    <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-red-500 transition-all duration-300 group-hover:w-4" />

                    {program}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}
          <div className="lg:col-span-4">

            <FooterHeading title="Get in Touch" />

            <div className="space-y-3">

              {/* LOCATION */}
              <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]">

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">

                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium text-white/75">
                      Siddharthanagar-1, Bhairahawa
                    </p>

                  </div>

                </div>

              </div>

              {/* EMAIL */}
              <a
                href="mailto:vfaw2017@gmail.com"
                className="group block rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.06]"
              >

                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">

                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                      />

                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        strokeWidth="1.8"
                      />
                    </svg>

                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm font-medium text-white/75 transition-colors duration-300 group-hover:text-blue-300">
                      vfaw2017@gmail.com
                    </p>

                  </div>

                </div>

              </a>

              {/* =================================================
                  DIRECT CALL BUTTON
              ================================================= */}
              <a
                href="tel:+9779844898004"
                className="group relative block overflow-hidden rounded-2xl border border-red-400/20 bg-gradient-to-r from-red-600 to-red-500 p-4 shadow-[0_12px_30px_rgba(220,38,38,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(220,38,38,0.30)]"
              >

                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">

                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 16.22V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                  </div>

                  <div className="flex-1">

                    <p className="text-xs font-bold uppercase tracking-wider text-white/65">
                      Call VFAW
                    </p>

                    <p className="mt-1 text-base font-black text-white">
                      +977 9844898004
                    </p>

                  </div>

                  <svg
                    className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4"
                    />
                  </svg>

                </div>

              </a>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          BOTTOM BAR
      ========================================================= */}
      <div className="relative z-10 border-t border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            {/* COPYRIGHT */}
            <div className="text-center md:text-left">

              <p className="text-xs leading-relaxed text-white/40 sm:text-sm">
                © {new Date().getFullYear()} Vets for Animal Welfare (VFAW).
                All rights reserved.
              </p>

            </div>

            {/* =================================================
                DESIGN CREDITS
            ================================================= */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">

              {/* BIBASH - PROMINENT */}
              <div className="text-center sm:text-right">

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                  Website Redesigned By
                </p>

                <a
                  href="#"
                  className="group mt-1 inline-flex items-center gap-2"
                >

                  <span className="text-sm font-black tracking-wide text-blue-300 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(147,197,253,0.45)] sm:text-base">
                    Bibash Lamichhane
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-transform duration-300 group-hover:scale-150" />

                </a>

              </div>

              <span className="hidden h-8 w-px bg-white/10 sm:block" />

              {/* NIRAJAN - ORIGINAL WATERMARK */}
              <div className="text-center sm:text-left">

                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/20">
                  Original Design
                </p>

                <p className="mt-1 text-xs text-white/30">

                  By{' '}

                  <a
                    href="https://nirajanacharya.com.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white/40 transition-colors duration-300 hover:text-blue-300"
                  >
                    Nirajan
                  </a>

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          BACK TO TOP
      ========================================================= */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#0b2854]/95 text-white shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-blue-600 ${
          showTop
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-5 opacity-0'
        }`}
      >

        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>

      </button>

    </footer>
  );
};

/* =============================================================
   FOOTER HEADING COMPONENT
============================================================= */
const FooterHeading = ({ title }) => {
  return (
    <div className="mb-6">

      <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-1.5">

        <span className="h-0.5 w-8 rounded-full bg-blue-500" />

        <span className="h-0.5 w-2 rounded-full bg-red-500" />

      </div>

    </div>
  );
};

export default Footer;
