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
    { name: 'Programs', path: '/programs' },
    { name: 'Apply', path: '/apply' },
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
      {/* ================================
          NAVBAR
      ================================= */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-[0_8px_30px_rgba(7,21,47,0.10)] backdrop-blur-xl'
            : 'bg-white'
        }`}
      >
        <nav className="mx-auto flex h-[84px] max-w-[1500px] items-center px-3 sm:px-5 lg:h-[90px] lg:px-5 xl:px-7">
          {/* ================================
              BRAND
          ================================= */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Vets for Animal Welfare Home"
            className="group flex shrink-0 items-center"
          >
            {/* Transparent Logo */}
            <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center sm:h-[72px] sm:w-[72px] lg:h-[76px] lg:w-[76px]">
              <img
                src={logoHome}
                alt="Vets for Animal Welfare"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Organization Name */}
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

          {/* ================================
              DESKTOP NAVIGATION
          ================================= */}
          <div className="ml-auto hidden items-center lg:flex">
            <div className="flex items-center">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative whitespace-nowrap px-2 py-3 text-[11px] font-bold tracking-wide transition-all duration-300 xl:px-2.5 xl:text-[12px] ${
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
                        className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#e32932] transition-all duration-300 ${
                          isActive
                            ? 'w-4 opacity-100'
                            : 'w-0 opacity-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* ================================
                DONATE BUTTON
            ================================= */}
            <Link
              to="/donate"
              className="group relative ml-2 inline-flex shrink-0 items-center gap-1.5 overflow-hidden rounded-xl bg-[#e32932] px-4 py-3 text-[11px] font-black tracking-wide text-white shadow-[0_8px_22px_rgba(227,41,50,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c91f28] hover:shadow-[0_12px_28px_rgba(227,41,50,0.32)] xl:ml-2.5 xl:px-4.5 xl:text-[12px]"
            >
              {/* Shine Effect */}
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

          {/* ================================
              MOBILE MENU BUTTON
          ================================= */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={isOpen}
            className="ml-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0756b8] shadow-[0_6px_18px_rgba(7,21,47,0.10)] transition-all duration-300 hover:border-red-200 hover:text-[#e32932] lg:hidden"
          >
            <span className="relative flex h-[21px] w-[26px] flex-col justify-between">
              <span
                className={`block h-[2.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  isOpen ? 'translate-y-[9px] rotate-45' : ''
                }`}
              />

              <span
                className={`block h-[2.5px] w-[18px] self-end rounded-full bg-current transition-all duration-300 ${
                  isOpen ? 'translate-x-5 opacity-0' : ''
                }`}
              />

              <span
                className={`block h-[2.5px] w-full rounded-full bg-current transition-all duration-300 ${
                  isOpen ? '-translate-y-[9px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </nav>

        {/* ================================
            MOBILE NAVIGATION
        ================================= */}
        <div
          className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
            isOpen
              ? 'max-h-[calc(100vh-84px)] opacity-100'
              : 'max-h-0 border-transparent opacity-0'
          }`}
        >
          <div className="mx-auto max-w-7xl overflow-y-auto px-4 pb-6 pt-3 sm:px-6">
            {/* Mobile Links */}
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
                        className={`h-4 w-4 transition-all duration-200 ${
                          isActive
                            ? 'translate-x-0 text-[#e32932] opacity-100'
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
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
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

      {/* Navbar Height Spacer */}
      <div className="h-[84px] lg:h-[90px]" />
    </>
  );
};

export default Navbar;
