import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoHome from '../../public/logohome.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Apply', path: '/apply' },
    { name: 'Library', path: '/library' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.14)]'
          : 'bg-white shadow-[0_6px_20px_rgba(0,0,0,0.10)]'
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[78px]">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center flex-shrink-0 group"
          >
            <div
              className="
                bg-white
                rounded-xl
                p-1
                border
                border-gray-100
                shadow-[0_5px_0_rgba(0,0,0,0.10),0_10px_20px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:shadow-[0_8px_0_rgba(0,0,0,0.10),0_15px_25px_rgba(0,0,0,0.16)]
              "
            >
              <img
                src={logoHome}
                alt="VFAW Logo"
                className="
                  h-11
                  sm:h-12
                  w-auto
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </div>

            <div className="ml-2 sm:ml-3">
              <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-gray-900 leading-none">
                VFAW
              </h1>

              <p className="hidden sm:block text-[8px] sm:text-[9px] font-semibold tracking-[0.12em] text-emerald-600 uppercase mt-1">
                Voice For Animal Welfare
              </p>
            </div>
          </Link>


          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden xl:flex items-center">

            <div
              className="
                flex
                items-center
                gap-1
                p-1.5
                rounded-2xl
                bg-gray-50
                border
                border-gray-100
                shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)]
              "
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    relative
                    whitespace-nowrap
                    px-2.5
                    2xl:px-3.5
                    py-2
                    rounded-xl
                    text-[13px]
                    2xl:text-sm
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      isActive(link.path)
                        ? `
                          bg-white
                          text-emerald-700
                          shadow-[0_4px_10px_rgba(0,0,0,0.12)]
                          -translate-y-[1px]
                        `
                        : `
                          text-gray-600
                          hover:text-emerald-700
                          hover:bg-white
                          hover:shadow-[0_3px_8px_rgba(0,0,0,0.08)]
                          hover:-translate-y-[1px]
                        `
                    }
                  `}
                >
                  {link.name}

                  {isActive(link.path) && (
                    <span className="absolute left-1/2 -bottom-[2px] -translate-x-1/2 w-5 h-[3px] bg-emerald-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>


            {/* ================= DONATE BUTTON ================= */}
            <Link
              to="/donate"
              className="
                ml-3
                flex
                items-center
                justify-center
                whitespace-nowrap
                px-4
                2xl:px-5
                py-2.5
                rounded-xl
                bg-gradient-to-br
                from-emerald-500
                to-emerald-700
                text-white
                text-sm
                font-bold
                shadow-[0_6px_0_rgb(4,120,87),0_10px_20px_rgba(16,185,129,0.25)]
                transition-all
                duration-200
                hover:-translate-y-[2px]
                hover:shadow-[0_8px_0_rgb(4,120,87),0_15px_25px_rgba(16,185,129,0.30)]
                active:translate-y-[3px]
                active:shadow-[0_2px_0_rgb(4,120,87)]
              "
            >
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              Donate
            </Link>
          </div>


          {/* ================= MOBILE / TABLET MENU BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              xl:hidden
              flex
              items-center
              justify-center
              flex-shrink-0

              w-14
              h-14

              rounded-2xl

              bg-white
              text-gray-900

              border-2
              border-gray-200

              shadow-[0_5px_0_rgba(0,0,0,0.14),0_10px_25px_rgba(0,0,0,0.12)]

              hover:text-emerald-700
              hover:border-emerald-300
              hover:-translate-y-[2px]

              hover:shadow-[0_7px_0_rgba(0,0,0,0.12),0_15px_30px_rgba(0,0,0,0.16)]

              active:translate-y-[3px]
              active:shadow-[0_2px_0_rgba(0,0,0,0.12)]

              transition-all
              duration-300
            "
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (

              /* CLOSE ICON */
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.8}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

            ) : (

              /* HAMBURGER ICON */
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.8}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

            )}
          </button>

        </div>
      </div>


      {/* ================= MOBILE / TABLET MENU ================= */}
      <div
        className={`
          xl:hidden
          overflow-hidden
          transition-all
          duration-500
          ease-in-out
          ${
            isOpen
              ? 'max-h-[750px] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >
        <div className="px-4 sm:px-6 pb-5">

          <div
            className="
              mt-1
              p-3
              rounded-2xl
              bg-white
              border
              border-gray-100
              shadow-[0_15px_35px_rgba(0,0,0,0.16)]
            "
          >

            {/* NAVIGATION LINKS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex
                    items-center
                    px-4
                    py-3.5
                    rounded-xl
                    text-base
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      isActive(link.path)
                        ? `
                          bg-emerald-50
                          text-emerald-700
                          border
                          border-emerald-100
                          shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]
                        `
                        : `
                          text-gray-700
                          bg-white
                          hover:bg-gray-50
                          hover:text-emerald-700
                          hover:translate-x-1
                        `
                    }
                  `}
                >
                  <span
                    className={`
                      mr-3
                      w-2
                      h-2
                      rounded-full
                      ${
                        isActive(link.path)
                          ? 'bg-emerald-600'
                          : 'bg-gray-300'
                      }
                    `}
                  />

                  {link.name}
                </Link>
              ))}

            </div>


            {/* ================= MOBILE DONATE BUTTON ================= */}
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="
                mt-4
                w-full
                flex
                items-center
                justify-center

                py-3.5

                rounded-xl

                bg-gradient-to-br
                from-emerald-500
                to-emerald-700

                text-white
                text-base
                font-bold

                shadow-[0_6px_0_rgb(4,120,87),0_12px_25px_rgba(16,185,129,0.25)]

                transition-all
                duration-200

                hover:-translate-y-[2px]

                hover:shadow-[0_8px_0_rgb(4,120,87),0_16px_30px_rgba(16,185,129,0.30)]

                active:translate-y-[3px]
                active:shadow-[0_2px_0_rgb(4,120,87)]
              "
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              Donate Now
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
