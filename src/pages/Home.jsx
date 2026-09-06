import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../public/hero.jpg';
import VoicesSnapshot from '../components/VoicesSnapshot';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const [statsStarted, setStatsStarted] = useState(false);

  const sectionRefs = useRef([]);
  const statsRef = useRef(null);

  /*
   * =========================================================
   * SCROLL POSITION
   * =========================================================
   */

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
   * =========================================================
   * SCROLL REVEAL
   * =========================================================
   */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((previous) => ({
              ...previous,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -70px 0px',
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * =========================================================
   * STATISTICS OBSERVER
   * =========================================================
   */

  useEffect(() => {
    if (!statsRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsStarted(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(statsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * =========================================================
   * SECTION REF
   * =========================================================
   */

  const addSectionRef = (element, name) => {
    if (
      element &&
      !sectionRefs.current.includes(element)
    ) {
      element.dataset.section = name;
      sectionRefs.current.push(element);
    }
  };

  /*
   * =========================================================
   * ANIMATED COUNTER
   * =========================================================
   */

  const Counter = ({
    end,
    suffix = '',
    duration = 1800,
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsStarted) {
        return;
      }

      let startTime = null;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const easedProgress =
          1 - Math.pow(1 - progress, 3);

        setCount(
          Math.floor(easedProgress * end)
        );

        if (progress < 1) {
          animationFrame =
            requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame =
        requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, [statsStarted, end, duration]);

    return (
      <>
        {count.toLocaleString()}
        {suffix}
      </>
    );
  };

  /*
   * =========================================================
   * FEATURED ACTIVITIES
   * =========================================================
   */

  const featuredActivities = [
    {
      title: 'Animal Welfare',
      description:
        'Providing medical care and treatment for street animals, including before and after treatment cases.',
      image: '/welfare/IMG_2131.JPG',
      number: '01',
    },
    {
      title: 'Animal Birth Control & Vaccination',
      description:
        'Implementing birth control programs and vaccination drives to protect street animals and improve community health.',
      image:
        '/control/IMG_20240216_000413_Original.JPG',
      number: '02',
    },
    {
      title: 'Street Dog Feeding Program',
      description:
        'Regular feeding initiatives focused on improving the health, nutrition, and well-being of street dogs.',
      image: '/feeding/IMG_2119.JPG',
      number: '03',
    },
  ];

  /*
   * =========================================================
   * GALLERY ITEMS
   * =========================================================
   */

  const galleryItems = [
    {
      image: '/awareness/7.jpg',
      title: 'Awareness Program',
      description:
        'Spreading knowledge and compassion',
      size: 'large',
    },
    {
      image: '/vaccination/7.jpg',
      title: 'Vaccination Program',
      description:
        'Protecting animal health',
      size: 'normal',
    },
    {
      image: '/feeding/IMG_2117.JPG',
      title: 'Feeding Program',
      description:
        'Supporting street animals',
      size: 'normal',
    },
    {
      image: '/capacity/1.JPG',
      title: 'Capacity Building',
      description:
        'Empowering future leaders',
      size: 'large',
    },
  ];

  /*
   * =========================================================
   * COLLABORATORS
   * =========================================================
   */

  const collaborators = [
    2,
    3,
    4,
    6,
    7,
    1,
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-gray-900">

      {/* =====================================================
          PREMIUM HERO
      ===================================================== */}

      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#06152f]">

        {/* Background Image */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translate3d(0, ${
              scrollY * 0.12
            }px, 0) scale(1.08)`,
          }}
        >
          <img
            src={hero}
            alt="Vets for Animal Welfare"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Dark Base Overlay */}
        <div className="absolute inset-0 bg-[#06152f]/45" />

        {/* Main Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06152f] via-[#06152f]/85 to-[#06152f]/25" />

        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06152f] via-transparent to-[#06152f]/45" />

        {/* Blue Ambient Glow */}
        <div className="absolute -right-40 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Indigo Ambient Glow */}
        <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[110px]" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        {/* Decorative Circles */}
        <div className="absolute -right-20 -top-20 hidden h-[500px] w-[500px] rounded-full border border-white/10 lg:block" />

        <div className="absolute -right-5 top-[-35px] hidden h-[380px] w-[380px] rounded-full border border-white/5 lg:block" />

        {/* Hero Content */}
        <div className="relative z-20 mx-auto flex min-h-[calc(100vh-88px)] max-w-[1500px] items-center px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.75fr] xl:gap-24">

            {/* =================================================
                LEFT HERO CONTENT
            ================================================== */}

            <div className="max-w-4xl">

              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 shadow-2xl backdrop-blur-xl animate-[fadeInUp_0.8s_ease-out]"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 sm:text-xs">
                  Student-Led Animal Welfare Organization
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className="mt-7 text-[3.2rem] font-black leading-[0.9] tracking-[-0.045em] text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-[5.7rem] xl:text-[6.6rem] animate-[fadeInUp_1s_ease-out]"
              >
                VETS FOR

                <span className="mt-3 block bg-gradient-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent">
                  ANIMAL
                </span>

                <span className="mt-1 block text-white">
                  WELFARE
                </span>
              </h1>

              {/* Red Accent */}
              <div
                className="mt-7 h-1 w-20 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-[fadeInUp_1.1s_ease-out]"
              />

              {/* Motto */}
              <p
                className="mt-7 max-w-2xl text-xl font-semibold tracking-wide text-white/90 sm:text-2xl lg:text-[1.7rem] animate-[fadeInUp_1.2s_ease-out]"
              >
                Animal Welfare for a Better World
              </p>

              {/* Description */}
              <p
                className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8 animate-[fadeInUp_1.3s_ease-out]"
              >
                A student-led organization advancing
                animal welfare, veterinary education,
                and compassionate community action
                through meaningful programs and
                collaboration.
              </p>

              {/* =================================================
                  HERO ACTIONS
              ================================================== */}

              <div
                className="mt-9 flex flex-col gap-3 sm:flex-row animate-[fadeInUp_1.4s_ease-out]"
              >

                {/* Get Involved */}
                <Link
                  to="/get-involved"
                  className="group relative inline-flex min-h-[56px] items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#e32932] px-7 text-sm font-black text-white shadow-[0_15px_35px_rgba(227,41,50,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c91f28] hover:shadow-[0_20px_45px_rgba(227,41,50,0.38)]"
                >
                  <span className="absolute inset-y-0 -left-14 w-10 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

                  <span className="relative">
                    Get Involved
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

                {/* Discover VFAW */}
                <Link
                  to="/about"
                  className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.06] px-7 text-sm font-bold text-white shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
                >
                  Discover VFAW

                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

              {/* Trust Line */}
              <div
                className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-white/50 animate-[fadeInUp_1.6s_ease-out]"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Veterinary Students
                </div>

                <div className="h-4 w-px bg-white/15" />

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  Community Action
                </div>

                <div className="h-4 w-px bg-white/15" />

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Animal Welfare
                </div>
              </div>

            </div>


            {/* =================================================
                RIGHT MISSION PANEL
            ================================================== */}

            <div className="hidden lg:block">

              <div className="relative mx-auto max-w-[390px] xl:max-w-[420px]">

                {/* Glow */}
                <div className="absolute -inset-8 rounded-[3rem] bg-blue-500/10 blur-3xl" />

                {/* Panel */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#071a38]/65 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl xl:p-8">

                  {/* Top Accent */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-white/70 to-red-500" />

                  {/* Panel Header */}
                  <div className="flex items-start justify-between gap-5">

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-300">
                        Our Mission
                      </p>

                      <h2 className="mt-2 text-2xl font-black leading-tight text-white">
                        Compassion

                        <span className="block text-blue-300">
                          into action.
                        </span>
                      </h2>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-black text-white/60">
                      01
                    </div>

                  </div>

                  {/* Divider */}
                  <div className="my-7 h-px bg-white/10" />

                  {/* Mission Items */}
                  <div className="space-y-5">

                    {/* Protecting Animals */}
                    <div className="group flex gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 transition-all duration-300 group-hover:bg-blue-500/20">

                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21s-7-4.35-9.5-9.2C.5 7.7 2.6 4 6.5 4c2.1 0 3.6 1.2 4.5 2.5C11.9 5.2 13.4 4 15.5 4c3.9 0 6 3.7 4 7.8C19 16.65 12 21 12 21z"
                          />
                        </svg>

                      </div>

                      <div>
                        <h3 className="font-bold text-white">
                          Protecting Animals
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-white/45">
                          Promoting humane care,
                          treatment, and responsible
                          animal welfare.
                        </p>
                      </div>

                    </div>


                    {/* Empowering Communities */}
                    <div className="group flex gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-300 transition-all duration-300 group-hover:bg-red-500/20">

                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                          />

                          <circle
                            cx="9"
                            cy="7"
                            r="4"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M22 21v-2a4 4 0 00-3-3.87"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 3.13a4 4 0 010 7.75"
                          />
                        </svg>

                      </div>

                      <div>
                        <h3 className="font-bold text-white">
                          Empowering Communities
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-white/45">
                          Connecting people,
                          students, and professionals
                          for meaningful change.
                        </p>
                      </div>

                    </div>


                    {/* Better Future */}
                    <div className="group flex gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 transition-all duration-300 group-hover:bg-blue-500/20">

                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3l8 4.5v6.75c0 3.5-3.5 5.85-8 6.75-4.5-.9-8-3.25-8-6.75V7.5L12 3z"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.5 12l2.3 2.3 4.7-5"
                          />
                        </svg>

                      </div>

                      <div>
                        <h3 className="font-bold text-white">
                          Building a Better Future
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-white/45">
                          Advancing veterinary
                          education and sustainable
                          welfare solutions.
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Bottom Statistics */}
                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-4">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                          Since
                        </p>

                        <p className="mt-1 text-xl font-black text-white">
                          2017
                        </p>
                      </div>

                      <div className="h-8 w-px bg-white/10" />

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                          Focus
                        </p>

                        <p className="mt-1 text-xl font-black text-white">
                          Animal Welfare
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            SCROLL INDICATOR
        ================================================== */}

        <div className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2">

          <div className="flex flex-col items-center gap-2">

            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/40">
              Scroll to explore
            </span>

            <div className="flex h-9 w-6 justify-center rounded-full border border-white/20 bg-white/5 pt-2 backdrop-blur-sm">

              <div className="h-2 w-1 rounded-full bg-white/60 animate-bounce" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMPACT STATISTICS
      ===================================================== */}

      <section className="relative bg-white">

        <div
          ref={statsRef}
          className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"
        >

          <div className="relative z-30 -mt-16 sm:-mt-20">

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

              {/* Founded */}
              <div className="group relative min-h-[190px] overflow-hidden rounded-3xl border-2 border-indigo-100 bg-white shadow-[0_18px_45px_rgba(30,41,100,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(30,41,100,0.22)]">

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500" />

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-50 transition-transform duration-700 group-hover:scale-150" />

                <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">

                  <div className="text-4xl font-black tracking-tight text-indigo-700 sm:text-5xl">
                    <Counter end={2017} />
                  </div>

                  <div className="mt-3 text-lg font-bold text-gray-900">
                    Founded
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    Student-led journey
                  </div>

                </div>

              </div>


              {/* Activities */}
              <div className="group relative min-h-[190px] overflow-hidden rounded-3xl border-2 border-blue-100 bg-white shadow-[0_18px_45px_rgba(30,41,100,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(30,41,100,0.22)]">

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-500" />

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 transition-transform duration-700 group-hover:scale-150" />

                <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">

                  <div className="text-4xl font-black tracking-tight text-blue-700 sm:text-5xl">
                    <Counter
                      end={100}
                      suffix="+"
                    />
                  </div>

                  <div className="mt-3 text-lg font-bold text-gray-900">
                    Activities
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    Community initiatives
                  </div>

                </div>

              </div>


              {/* Animals */}
              <div className="group relative min-h-[190px] overflow-hidden rounded-3xl border-2 border-indigo-100 bg-white shadow-[0_18px_45px_rgba(30,41,100,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(30,41,100,0.22)]">

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500" />

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-50 transition-transform duration-700 group-hover:scale-150" />

                <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">

                  <div className="text-4xl font-black tracking-tight text-indigo-700 sm:text-5xl">
                    <Counter
                      end={1000}
                      suffix="+"
                    />
                  </div>

                  <div className="mt-3 text-lg font-bold text-gray-900">
                    Animals Reached
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    Through welfare programs
                  </div>

                </div>

              </div>


              {/* Commitment */}
              <div className="group relative min-h-[190px] overflow-hidden rounded-3xl border-2 border-blue-100 bg-white shadow-[0_18px_45px_rgba(30,41,100,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(30,41,100,0.22)]">

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" />

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 transition-transform duration-700 group-hover:scale-150" />

                <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">

                  <div className="text-5xl font-black text-blue-700 sm:text-6xl">
                    ∞
                  </div>

                  <div className="mt-2 text-lg font-bold text-gray-900">
                    Commitment
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    For animal welfare
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <section
        ref={(el) =>
          addSectionRef(el, 'activities')
        }
        className={`relative bg-gray-50 py-28 transition-all duration-1000 lg:py-36 ${
          visibleSections.activities
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0'
        }`}
      >

        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-px w-10 bg-indigo-600" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                What We Do
              </span>

              <span className="h-px w-10 bg-indigo-600" />

            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Making a
              <span className="text-indigo-600">
                {' '}
                difference.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              From direct veterinary intervention to
              community education, our programs turn
              compassion into meaningful action.
            </p>

          </div>


          {/* Activity Cards */}
          <div className="grid gap-7 lg:grid-cols-3">

            {featuredActivities.map(
              (activity, index) => (
                <Link
                  to="/programs"
                  key={activity.title}
                  className="group relative overflow-hidden rounded-3xl border-2 border-gray-100 bg-white shadow-lg transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-900/10"
                  style={{
                    transitionDelay: `${
                      index * 100
                    }ms`,
                  }}
                >

                  <div className="relative h-72 overflow-hidden">

                    <img
                      src={activity.image}
                      alt={activity.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/20 font-bold text-white backdrop-blur-md">
                      {activity.number}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-7">

                      <h3 className="text-2xl font-bold text-white">
                        {activity.title}
                      </h3>

                    </div>

                  </div>

                  <div className="p-7">

                    <p className="leading-relaxed text-gray-600">
                      {activity.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 font-bold text-indigo-600">

                      Explore Program

                      <svg
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>

                    </div>

                  </div>

                </Link>
              )
            )}

          </div>


          {/* All Programs */}
          <div className="mt-14 text-center">

            <Link
              to="/programs"
              className="group inline-flex items-center gap-3 rounded-full bg-indigo-700 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-800 hover:shadow-xl"
            >
              Explore All Programs

              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section
        ref={(el) =>
          addSectionRef(el, 'gallery')
        }
        className={`bg-white py-28 transition-all duration-1000 lg:py-36 ${
          visibleSections.gallery
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0'
        }`}
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-px w-10 bg-indigo-600" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                Our Work
              </span>

              <span className="h-px w-10 bg-indigo-600" />

            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Moments that
              <span className="text-indigo-600">
                {' '}
                matter.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Every program represents a story of
              compassion, collaboration, and
              meaningful change.
            </p>

          </div>


          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

            {galleryItems.map((item) => (
              <Link
                to="/gallery"
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border-2 border-white shadow-xl ${
                  item.size === 'large'
                    ? 'min-h-[420px] lg:row-span-2'
                    : 'min-h-[300px]'
                }`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">

                  <div className="mb-4 h-1 w-10 rounded-full bg-white transition-all duration-500 group-hover:w-16" />

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-white/75">
                    {item.description}
                  </p>

                </div>

                <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-500 group-hover:border-white/40" />

              </Link>
            ))}

          </div>


          {/* Full Gallery */}
          <div className="mt-12 text-center">

            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 rounded-full border-2 border-gray-200 px-8 py-4 font-bold text-gray-900 transition-all duration-300 hover:border-gray-950 hover:bg-gray-950 hover:text-white"
            >
              Explore Our Full Gallery

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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          VOICES
      ===================================================== */}

      <section
        ref={(el) =>
          addSectionRef(el, 'voices')
        }
        className={`transition-all duration-1000 ${
          visibleSections.voices
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0'
        }`}
      >
        <VoicesSnapshot />
      </section>


      {/* =====================================================
          COLLABORATORS
      ===================================================== */}

      <section
        ref={(el) =>
          addSectionRef(el, 'collaborators')
        }
        className={`relative overflow-hidden bg-gray-50 py-28 transition-all duration-1000 lg:py-36 ${
          visibleSections.collaborators
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0'
        }`}
      >

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-px w-8 bg-indigo-600" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                Collaboration
              </span>

              <span className="h-px w-8 bg-indigo-600" />

            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Stronger
              <span className="text-indigo-600">
                {' '}
                together.
              </span>
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Meaningful change becomes possible when
              organizations, communities, and
              individuals work together.
            </p>

          </div>


          {/* Collaborator Logos */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">

            {collaborators.map((num) => (
              <div
                key={num}
                className="group flex aspect-square items-center justify-center overflow-hidden rounded-2xl border-2 border-gray-100 bg-white p-5 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >

                <img
                  src={`/collaborators/${num}.${num === 1 || num === 7 ? 'jpg' : 'JPG'}`}
                  alt={`Collaborator ${num}`}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-indigo-950 py-28 text-white lg:py-36">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-900" />

        {/* Decorative Circle */}
        <div className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full border border-white/5" />

        <div className="absolute -bottom-64 -left-48 h-[700px] w-[700px] rounded-full border border-white/5" />

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white/75 backdrop-blur-md">
            Be part of the change
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Compassion needs

            <span className="block text-blue-300">
              action.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Whether you are a veterinary student,
            professional, organization, or animal
            lover, there is a place for you in the
            movement for better animal welfare.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/get-involved"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-indigo-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Get Involved

              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/25 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Contact VFAW
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          GLOBAL ANIMATIONS
      ===================================================== */}

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-25px);
          }
        }

        ::selection {
          background: rgba(79, 70, 229, 0.25);
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

    </main>
  );
};

export default Home;
