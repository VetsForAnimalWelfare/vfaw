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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
   * Scroll reveal observer
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

    return () => observer.disconnect();
  }, []);

  /*
   * Statistics observer
   */
  useEffect(() => {
    if (!statsRef.current) return;

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

    return () => observer.disconnect();
  }, []);

  const addSectionRef = (element, name) => {
    if (element && !sectionRefs.current.includes(element)) {
      element.dataset.section = name;
      sectionRefs.current.push(element);
    }
  };

  /*
   * Animated counter
   */
  const Counter = ({ end, suffix = '', duration = 1800 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsStarted) return;

      let startTime = null;

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

        setCount(Math.floor(easedProgress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, [statsStarted, end, duration]);

    return (
      <>
        {count.toLocaleString()}
        {suffix}
      </>
    );
  };

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
      image: '/control/IMG_20240216_000413_Original.JPG',
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

  const galleryItems = [
    {
      image: '/awareness/7.jpg',
      title: 'Awareness Program',
      description: 'Spreading knowledge and compassion',
      size: 'large',
    },
    {
      image: '/vaccination/7.jpg',
      title: 'Vaccination Program',
      description: 'Protecting animal health',
      size: 'normal',
    },
    {
      image: '/feeding/IMG_2117.JPG',
      title: 'Feeding Program',
      description: 'Supporting street animals',
      size: 'normal',
    },
    {
      image: '/capacity/1.JPG',
      title: 'Capacity Building',
      description: 'Empowering future leaders',
      size: 'large',
    },
  ];

  const collaborators = [2, 3, 4, 6, 7, 1];

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 scale-110 will-change-transform"
          style={{
            transform: `translate3d(0, ${scrollY * 0.18}px, 0) scale(1.1)`,
          }}
        >
          <img
            src={hero}
            alt="Vets for Animal Welfare"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Professional blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-indigo-950/55 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Ambient light */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

        <div
          className="absolute -right-48 top-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-3xl"
          style={{
            animation: 'float 9s ease-in-out infinite',
          }}
        />

        {/* Hero content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-28">

          <div className="max-w-6xl mx-auto text-center">

            {/* Welcome */}
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/30 bg-black/20 backdrop-blur-xl text-white text-sm sm:text-base font-semibold tracking-wide shadow-xl animate-[fadeInUp_0.8s_ease-out]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.9)] animate-pulse" />

              Welcome to VFAW
            </div>

            {/* Main heading */}
            <h1
              className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] text-white drop-shadow-2xl animate-[fadeInUp_1s_ease-out]"
            >
              VETS FOR

              <span className="block mt-3 bg-gradient-to-r from-blue-200 via-indigo-200 to-white bg-clip-text text-transparent">
                ANIMAL WELFARE
              </span>
            </h1>

            {/* Motto */}
            <p
              className="mt-8 text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 tracking-wide animate-[fadeInUp_1.2s_ease-out]"
            >
              Animal Welfare for a Better World
            </p>

            {/* Description */}
            <p
              className="max-w-3xl mx-auto mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-white/75 animate-[fadeInUp_1.3s_ease-out]"
            >
              A student-led organization advancing animal welfare,
              veterinary education, and compassionate community action.
            </p>

            {/* HERO BUTTONS */}
            <div
              className="relative z-50 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-[fadeInUp_1.5s_ease-out]"
            >

              {/* Get Involved */}
              <Link
                to="/get-involved"
                className="group relative z-50 min-w-[190px] inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-indigo-950 font-bold text-lg shadow-2xl border-2 border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
              >
                <span className="relative z-10">
                  Get Involved
                </span>

                <svg
                  className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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

                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Discover VFAW */}
              <Link
                to="/about"
                className="group relative z-50 min-w-[190px] inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-indigo-950/60 backdrop-blur-xl text-white font-bold text-lg border-2 border-white/60 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-900/80 hover:border-white"
              >
                Discover VFAW

                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30">

          <div className="flex flex-col items-center gap-2 text-white/70">

            <span className="text-[10px] uppercase tracking-[0.35em]">
              Scroll
            </span>

            <div className="w-6 h-10 rounded-full border border-white/40 flex justify-center pt-2 backdrop-blur-sm">
              <div className="w-1 h-2.5 rounded-full bg-white animate-bounce" />
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          IMPACT STATISTICS
      ========================================================= */}

      <section className="relative bg-white">

        <div
          ref={statsRef}
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10"
        >

          {/* Statistics container */}
          <div className="relative -mt-16 sm:-mt-20 z-30">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

              {/* 2017 */}
              <div className="group relative min-h-[190px] bg-white rounded-3xl border-2 border-indigo-100 shadow-[0_18px_45px_rgba(30,41,100,0.12)] hover:shadow-[0_25px_60px_rgba(30,41,100,0.22)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500" />

                <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-indigo-50 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">

                  <div className="text-4xl sm:text-5xl font-black text-indigo-700 tracking-tight">
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
              <div className="group relative min-h-[190px] bg-white rounded-3xl border-2 border-blue-100 shadow-[0_18px_45px_rgba(30,41,100,0.12)] hover:shadow-[0_25px_60px_rgba(30,41,100,0.22)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-500" />

                <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-blue-50 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">

                  <div className="text-4xl sm:text-5xl font-black text-blue-700 tracking-tight">
                    <Counter end={100} suffix="+" />
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
              <div className="group relative min-h-[190px] bg-white rounded-3xl border-2 border-indigo-100 shadow-[0_18px_45px_rgba(30,41,100,0.12)] hover:shadow-[0_25px_60px_rgba(30,41,100,0.22)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500" />

                <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-indigo-50 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">

                  <div className="text-4xl sm:text-5xl font-black text-indigo-700 tracking-tight">
                    <Counter end={1000} suffix="+" />
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
              <div className="group relative min-h-[190px] bg-white rounded-3xl border-2 border-blue-100 shadow-[0_18px_45px_rgba(30,41,100,0.12)] hover:shadow-[0_25px_60px_rgba(30,41,100,0.22)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" />

                <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-blue-50 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">

                  <div className="text-5xl sm:text-6xl font-black text-blue-700">
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


      {/* =========================================================
          WHAT WE DO
      ========================================================= */}

      <section
        ref={(el) => addSectionRef(el, 'activities')}
        className={`relative py-28 lg:py-36 bg-gray-50 transition-all duration-1000 ${
          visibleSections.activities
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* CENTERED HEADING */}
          <div className="max-w-3xl mx-auto text-center mb-16">

            <div className="flex items-center justify-center gap-3 mb-5">

              <span className="w-10 h-px bg-indigo-600" />

              <span className="text-sm font-bold tracking-[0.2em] uppercase text-indigo-600">
                What We Do
              </span>

              <span className="w-10 h-px bg-indigo-600" />

            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-950 leading-tight">
              Making a
              <span className="text-indigo-600"> difference.</span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              From direct veterinary intervention to community education,
              our programs turn compassion into meaningful action.
            </p>

          </div>


          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-7">

            {featuredActivities.map((activity, index) => (

              <Link
                to="/programs"
                key={activity.title}
                className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-indigo-900/10 transition-all duration-700 hover:-translate-y-3"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >

                <div className="relative h-72 overflow-hidden">

                  <img
                    src={activity.image}
                    alt={activity.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute top-5 left-5 w-11 h-11 rounded-full bg-black/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white font-bold">
                    {activity.number}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7">

                    <h3 className="text-2xl font-bold text-white">
                      {activity.title}
                    </h3>

                  </div>

                </div>

                <div className="p-7">

                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-indigo-600 font-bold">

                    Explore Program

                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
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

            ))}

          </div>


          <div className="mt-14 text-center">

            <Link
              to="/programs"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-700 text-white font-bold shadow-lg hover:bg-indigo-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >

              Explore All Programs

              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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


      {/* =========================================================
          GALLERY
      ========================================================= */}

      <section
        ref={(el) => addSectionRef(el, 'gallery')}
        className={`py-28 lg:py-36 bg-white transition-all duration-1000 ${
          visibleSections.gallery
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* CENTERED HEADING */}
          <div className="max-w-3xl mx-auto text-center mb-16">

            <div className="flex items-center justify-center gap-3 mb-5">

              <span className="w-10 h-px bg-indigo-600" />

              <span className="text-sm font-bold tracking-[0.2em] uppercase text-indigo-600">
                Our Work
              </span>

              <span className="w-10 h-px bg-indigo-600" />

            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Moments that
              <span className="text-indigo-600"> matter.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Every program represents a story of compassion,
              collaboration, and meaningful change.
            </p>

          </div>


          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {galleryItems.map((item) => (

              <Link
                to="/gallery"
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border-2 border-white shadow-xl ${
                  item.size === 'large'
                    ? 'lg:row-span-2 min-h-[420px]'
                    : 'min-h-[300px]'
                }`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-6 transform group-hover:-translate-y-2 transition-transform duration-500">

                  <div className="w-10 h-1 bg-white rounded-full mb-4 group-hover:w-16 transition-all duration-500" />

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-white/75">
                    {item.description}
                  </p>

                </div>

                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/40 transition-all duration-500" />

              </Link>

            ))}

          </div>


          <div className="mt-12 text-center">

            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gray-200 text-gray-900 font-bold hover:bg-gray-950 hover:text-white hover:border-gray-950 transition-all duration-300"
            >

              Explore Our Full Gallery

              <svg
                className="w-5 h-5"
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


      {/* =========================================================
          VOICES
      ========================================================= */}

      <section
        ref={(el) => addSectionRef(el, 'voices')}
        className={`transition-all duration-1000 ${
          visibleSections.voices
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        <VoicesSnapshot />

      </section>


      {/* =========================================================
          COLLABORATORS
      ========================================================= */}

      <section
        ref={(el) => addSectionRef(el, 'collaborators')}
        className={`relative py-28 lg:py-36 bg-gray-50 overflow-hidden transition-all duration-1000 ${
          visibleSections.collaborators
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* CENTERED HEADING */}
          <div className="max-w-3xl mx-auto text-center mb-16">

            <div className="flex items-center justify-center gap-3 mb-5">

              <span className="w-8 h-px bg-indigo-600" />

              <span className="text-sm font-bold tracking-[0.2em] uppercase text-indigo-600">
                Collaboration
              </span>

              <span className="w-8 h-px bg-indigo-600" />

            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Stronger
              <span className="text-indigo-600"> together.</span>
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Meaningful change becomes possible when organizations,
              communities, and individuals work together.
            </p>

          </div>


          {/* Collaborators */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

            {collaborators.map((num) => (

              <div
                key={num}
                className="group aspect-square bg-white rounded-2xl border-2 border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex items-center justify-center p-5 overflow-hidden"
              >

                <img
                  src={`/collaborators/${num}.${num === 1 || num === 7 ? 'jpg' : 'JPG'}`}
                  alt={`Collaborator ${num}`}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative py-28 lg:py-36 overflow-hidden bg-indigo-950 text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-900" />

        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full border border-white/5" />

        <div className="absolute -bottom-64 -left-48 w-[700px] h-[700px] rounded-full border border-white/5" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm text-white/75 mb-8">
            Be part of the change
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Compassion needs
            <span className="block text-blue-300">
              action.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg sm:text-xl text-white/70 leading-relaxed">
            Whether you are a veterinary student, professional,
            organization, or animal lover, there is a place for you
            in the movement for better animal welfare.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <Link
              to="/get-involved"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-indigo-950 font-bold text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >

              Get Involved

              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/25 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Contact VFAW
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

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
            transform: translateY(0px);
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
