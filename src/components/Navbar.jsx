import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logoHome from '../../public/logohome.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Library', path: '/library' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-[0_8px_30px_rgba(7,21,47,0.08)] backdrop-blur-xl'
            : 'bg-white'
        }`}
      >
        <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[86px] lg:px-8">
          {/* =========================
              BRAND
          ========================== */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex min-w-0 items-center"
            aria-label="Vets for Animal Welfare Home"
          >
            {/* Transparent Logo */}
            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center sm:h-[64px] sm:w-[64px]">
              <img
                src={logoHome}
                alt="Vets for Animal Welfare logo"
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Organization Name */}
            <div className="ml-2.5 min-w-0 sm:ml-3">
              <div className="whitespace-nowrap text-[15px] font-black leading-none tracking-[-0.025em] text-[#0756b8] sm:text-[18px] lg:text-[19px]">
                Vets for Animal Welfare
              </div>

              <div className="mt-1.5 flex items-center gap-2">
                <span className="h-px w-5 bg-red-500" />

                <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-slate-400 sm:text-[9px]">
                  VFAW
                </span>
              </div>
            </div>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2.5 text-[13px] font-bold tracking-wide transition duration-300 ${
                      isActive
                        ? 'text-[#0756b8]'
                        : 'text-slate-600 hover:text-[#0756b8]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>

                      <span
                        className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-red-500 transition-all duration-300 ${
                          isActive
                            ? 'w-5 opacity-100'
                            : 'w-0 opacity-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* =========================
                PREMIUM DONATE BUTTON
            ========================== */}
            <Link
              to="/donate"
              className="group relative ml-5 inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-[#e32932] px-6 py-3.5 text-[13px] font-black tracking-wide text-white shadow-[0_10px_25px_rgba(227,41,50,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c91f28] hover:shadow-[0_14px_30px_rgba(227,41,50,0.32)]"
            >
              {/* Shine */}
              <span className="absolute inset-y-0 -left-12 w-8 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative">Donate</span>

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
          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0756b8] shadow-[0_6px_20px_rgba(7,21,47,0.08)] transition-all duration-300 hover:border-red-200 hover:text-red-500 lg:hidden"
          >
            <span className="relative flex h-5 w-6 flex-col justify-between">
              <span
                className={`block h-[2.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  isOpen
                    ? 'translate-y-[8.75px] rotate-45'
                    : ''
                }`}
              />

              <span
                className={`block h-[2.5px] w-4 self-end rounded-full bg-current transition-all duration-300 ${
                  isOpen
                    ? 'translate-x-5 opacity-0'
                    : ''
                }`}
              />

              <span
                className={`block h-[2.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  isOpen
                    ? '-translate-y-[8.75px] -rotate-45'
                    : ''
                }`}
              />
            </span>
          </button>
        </nav>

        {/* =========================
            MOBILE MENU
        ========================== */}
        <div
          className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
            isOpen
              ? 'max-h-[calc(100vh-78px)] opacity-100'
              : 'max-h-0 border-transparent opacity-0'
          }`}
        >
          <div className="mx-auto max-w-7xl overflow-y-auto px-4 pb-6 pt-3 sm:px-6">
            {/* Mobile Navigation */}
            <div className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-[#0756b8] shadow-sm'
                        : 'text-slate-600 hover:bg-white hover:text-[#0756b8]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>

                      <svg
                        className={`h-4 w-4 transition-all ${
                          isActive
                            ? 'translate-x-0 text-red-500 opacity-100'
                            : '-translate-x-1 text-slate-300 opacity-0'
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

            {/* Mobile Donate */}
            <Link
              to="/donate"
              onClick={closeMenu}
              className="group relative mt-4 flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#e32932] px-6 py-4 text-sm font-black text-white shadow-[0_12px_28px_rgba(227,41,50,0.22)] transition-all duration-300 hover:bg-[#c91f28] hover:shadow-[0_16px_35px_rgba(227,41,50,0.3)]"
            >
              <span className="absolute inset-y-0 -left-12 w-10 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative">Support Our Mission</span>

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

            {/* Mobile Brand Footer */}
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

      {/* =========================
          NAVBAR SPACER
      ========================== */}
      <div className="h-[78px] lg:h-[86px]" />
    </>
  );
};

export default Navbar;
