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

  /* =========================================================
     SCROLL / PARALLAX
  ========================================================= */

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

  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

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

  /* =========================================================
     STATISTICS OBSERVER
  ========================================================= */

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

  /* =========================================================
     SECTION REF
  ========================================================= */

  const addSectionRef = (element, name) => {
    if (element && !sectionRefs.current.includes(element)) {
      element.dataset.section = name;
      sectionRefs.current.push(element);
    }
  };

  /* =========================================================
     ANIMATED COUNTER
  ========================================================= */

  const Counter = ({
    end,
    suffix = '',
    duration = 1800,
  }) => {
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

        setCount(
          Math.floor(easedProgress * end)
        );

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

  /* =========================================================
     FEATURED ACTIVITIES
  ========================================================= */

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

  /* =========================================================
     GALLERY
  ========================================================= */

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

  /* =========================================================
     COLLABORATORS
     
     ORIGINAL PATH LOGIC PRESERVED
  ========================================================= */

  const collaborators = [2, 3, 4, 6, 7, 1];

  const collaboratorPath = (num) =>
    `/collaborators/${num}.${num === 1 || num === 7 ? 'jpg' : 'JPG'}`;

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-78px)] flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 scale-110 will-change-transform"
          style={{
            transform: `translate3d(0, ${scrollY * 0.12}px, 0) scale(1.1)`,
          }}
        >
          <img
            src={hero}
            alt="Vets for Animal Welfare"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06152f]/95 via-[#0b1f4d]/75 to-[#06152f]/40" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#06152f]/80 to-transparent" />

        {/* Ambient light */}
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-blue-500/15 blur-3xl animate-pulse" />

        <div
          className="absolute -right-48 top-1/4 w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-3xl"
          style={{
            animation: 'float 9s ease-in-out infinite',
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-10 sm:pt-12 lg:pt-8 pb-20 sm:pb-20">

          <div className="max-w-6xl mx-auto text-center">

            {/* Welcome */}
            <div
              className="
                inline-flex
                items-center
                gap-2.5
                px-5
                py-2.5
                rounded-full
                border
                border-white/25
                bg-black/25
                backdrop-blur-xl
                text-white
                text-xs
                sm:text-sm
                font-semibold
                tracking-wide
                shadow-xl
                animate-[fadeInUp_0.8s_ease-out]
              "
            >
              <span className="w-2 h-2 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.9)] animate-pulse" />

              Welcome to VFAW
            </div>

            {/* Main heading */}
            <h1
              className="
                mt-5
                sm:mt-6
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[70px]
                xl:text-[82px]
                font-black
                tracking-[-0.04em]
                leading-[0.9]
                text-white
                drop-shadow-2xl
                animate-[fadeInUp_1s_ease-out]
              "
            >
              VETS FOR

              <span className="block mt-2 bg-gradient-to-r from-blue-200 via-blue-300 to-white bg-clip-text text-transparent">
                ANIMAL WELFARE
              </span>
            </h1>

            {/* Red accent */}
            <div className="flex items-center justify-center gap-3 mt-5">

              <span className="w-12 h-[3px] bg-red-500 rounded-full" />

              <span className="w-16 h-px bg-white/25" />

              <span className="w-12 h-[3px] bg-red-500 rounded-full" />

            </div>

            {/* Motto */}
            <p
              className="
                mt-5
                text-lg
                sm:text-xl
                lg:text-2xl
                font-semibold
                text-white
                tracking-wide
                animate-[fadeInUp_1.2s_ease-out]
              "
            >
              Animal Welfare for a
              <span className="text-red-400">
                {' '}Better World
              </span>
            </p>

            {/* Description */}
            <p
              className="
                max-w-2xl
                mx-auto
                mt-3
                text-sm
                sm:text-base
                lg:text-lg
                leading-relaxed
                text-white/80
                animate-[fadeInUp_1.3s_ease-out]
              "
            >
              A student-led organization advancing animal welfare,
              veterinary education, and compassionate community action.
            </p>

            {/* HERO BUTTONS */}
            <div
              className="
                relative
                z-50
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                gap-3
                mt-7
                animate-[fadeInUp_1.5s_ease-out]
              "
            >

              {/* Get Involved */}
              <Link
                to="/get-involved"
                className="
                  group
                  relative
                  z-50
                  min-w-[175px]
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-3.5
                  rounded-full
                  bg-red-600
                  text-white
                  font-bold
                  text-base
                  shadow-2xl
                  border-2
                  border-red-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-red-500
                  hover:shadow-[0_20px_45px_rgba(220,38,38,0.35)]
                "
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
              </Link>

              {/* Discover */}
              <Link
                to="/about"
                className="
                  group
                  relative
                  z-50
                  min-w-[175px]
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-3.5
                  rounded-full
                  bg-white/[0.08]
                  backdrop-blur-xl
                  text-white
                  font-bold
                  text-base
                  border-2
                  border-white/45
                  shadow-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.16]
                  hover:border-white/80
                "
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

            {/* =================================================
                THREE SUPPORTING ITEMS
            ================================================== */}

            <div
              className="
                max-w-2xl
                mx-auto
                mt-7
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-2.5
                animate-[fadeInUp_1.6s_ease-out]
              "
            >

              {/* Veterinary Students */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-3
                  py-3
                  rounded-xl
                  border
                  border-white/20
                  bg-[#06152f]/70
                  backdrop-blur-md
                  shadow-lg
                "
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />

                <span className="text-white text-xs sm:text-[13px] font-semibold whitespace-nowrap">
                  Veterinary Students
                </span>
              </div>

              {/* Community Action */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-3
                  py-3
                  rounded-xl
                  border
                  border-white/20
                  bg-[#06152f]/70
                  backdrop-blur-md
                  shadow-lg
                "
              >
                <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />

                <span className="text-white text-xs sm:text-[13px] font-semibold whitespace-nowrap">
                  Community Action
                </span>
              </div>

              {/* Animal Welfare */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-3
                  py-3
                  rounded-xl
                  border
                  border-white/20
                  bg-[#06152f]/70
                  backdrop-blur-md
                  shadow-lg
                "
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />

                <span className="text-white text-xs sm:text-[13px] font-semibold whitespace-nowrap">
                  Animal Welfare
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 hidden md:block">

          <div className="flex flex-col items-center gap-1.5 text-white/60">

            <span className="text-[9px] uppercase tracking-[0.35em]">
              Scroll
            </span>

            <div className="w-5 h-8 rounded-full border border-white/35 flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-white animate-bounce" />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMPACT STATISTICS
      ====================================================== */}

      <section className="relative bg-white">

        <div
          ref={statsRef}
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10"
        >

          <div className="relative -mt-14 sm:-mt-16 z-30">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

              {/* Founded */}
              <div className="group relative min-h-[180px] bg-white rounded-3xl border-2 border-indigo-100 shadow-[0_18px_45px_rgba(30,41,100,0.12)] hover:shadow-[0_28px_60px_rgba(30,41,100,0.22)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500" />

                <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-indigo-50 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative h-full flex flex-col items-center justify-center p-7 text-center">

                  <div className="text-4xl sm:text-5xl font-black text-indigo-700 tracking-tight">
                    <Counter end={2017} />
                  </div>

                  <div className="mt-2 text-lg font-bold text-gray-900">
                    Founded
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    Student-led journey
                  </div>

                </div>

              </div>


              {/* Activities */}
              <div className="group relative min-h-[180px] bg-white rounded-3xl border-2 border-blue-100 shadow-[0_18px_45px_rgba(30,41,100,0.12)] hover:shadow-[0_28px_60px_rgba(30,41,100,0.22)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-500" />

                <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-blue-50 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative h-full flex flex-col items-center justify-center p-7 text-center">

                  <div className="text-4xl sm:text-5xl font-black text-blue-700 tracking-tight">
                    <Counter end={100} suffix="+" />
                  </div>

                  <div className="mt-2 text-lg font-bold text-gray-900">
                    Activities
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    Community initiatives
                  </div>

                </div>

              </div>


              {/* Animals */}
              <div className="group relative min-h-[180px] bg-white rounded-3xl border-2 border-indigo-100 shadow-[0_18px_45px_rgba(30,41,100,0.12)] hover:shadow-[0_28px_60px_rgba(30,41,100,0.22)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500" />

                <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-indigo-50 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative h-full flex flex-col items-center justify-center p-7 text-center">

                  <div className="text-4xl sm:text-5xl font-black text-indigo-700 tracking-tight">
                    <Counter end={1000} suffix="+" />
                  </div>

                  <div className="mt-2 text-lg font-bold text-gray-900">
                    Animals Reached
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    Through welfare programs
                  </div>

                </div>

              </div>


              {/* Commitment */}
              <div className="group relative min-h-[180px] bg-white rounded-3xl border-2 border-blue-100 shadow-[0_18px_45px_rgba(30,41,100,0.12)] hover:shadow-[0_28px_60px_rgba(30,41,100,0.22)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" />

                <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-blue-50 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative h-full flex flex-col items-center justify-center p-7 text-center">

                  <div className="text-5xl sm:text-6xl font-black text-blue-700">
                    ∞
                  </div>

                  <div className="mt-1 text-lg font-bold text-gray-900">
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
      ====================================================== */}

      <section
        ref={(el) => addSectionRef(el, 'activities')}
        className={`relative py-20 sm:py-24 lg:py-28 transition-all duration-1000 ${
          visibleSections.activities
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        {/* Background */}
        <div className="absolute inset-0 bg-[#06152f]" />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-red-600/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* =================================================
              CENTERED SECTION HEADER
          ================================================== */}

          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">

            <div className="flex items-center justify-center gap-3 mb-5">

              <span className="w-10 h-[2px] bg-red-500 rounded-full" />

              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-blue-300">
                What We Do
              </span>

              <span className="w-10 h-[2px] bg-red-500 rounded-full" />

            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">

              Turning concern

              <span className="text-blue-400">
                {' '}into action.
              </span>

            </h2>

            <p className="mt-5 text-base sm:text-lg text-white/65 leading-relaxed max-w-2xl mx-auto">
              Our work connects veterinary knowledge with practical
              community-based animal welfare programs.
            </p>

          </div>


          {/* =================================================
              SOLID PROGRAM BOX
          ================================================== */}

          <div className="relative rounded-[32px] bg-white p-4 sm:p-6 lg:p-7 shadow-[0_30px_80px_rgba(0,0,0,0.28)] border border-white/10">

            {/* Top accent */}
            <div className="absolute top-0 left-12 right-12 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-red-500 rounded-full" />

            <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">

              {featuredActivities.map((activity, index) => (

                <Link
                  to="/programs"
                  key={activity.title}
                  className="
                    group
                    relative
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    border
                    border-gray-200
                    shadow-[0_10px_25px_rgba(15,23,42,0.08)]
                    hover:shadow-[0_28px_55px_rgba(15,23,42,0.20)]
                    hover:-translate-y-3
                    hover:rotate-[0.3deg]
                    transition-all
                    duration-500
                  "
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                >

                  {/* Image */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">

                    <img
                      src={activity.image}
                      alt={activity.title}
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                    {/* Number */}
                    <div className="
                      absolute
                      top-5
                      left-5
                      w-11
                      h-11
                      rounded-xl
                      bg-[#06152f]/85
                      backdrop-blur-md
                      border
                      border-white/30
                      flex
                      items-center
                      justify-center
                      text-white
                      font-black
                      text-sm
                      shadow-lg
                    ">
                      {activity.number}
                    </div>

                    {/* Image title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">

                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {activity.title}
                      </h3>

                    </div>

                  </div>


                  {/* Card content */}
                  <div className="p-6 sm:p-7">

                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {activity.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">

                      <span className="text-blue-700 font-bold text-sm">
                        Explore Program
                      </span>

                      <span className="
                        w-9
                        h-9
                        rounded-full
                        bg-blue-50
                        flex
                        items-center
                        justify-center
                        text-blue-700
                        group-hover:bg-red-50
                        group-hover:text-red-600
                        transition-all
                        duration-300
                      ">

                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

                      </span>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>


          {/* All programs */}
          <div className="mt-10 text-center">

            <Link
              to="/programs"
              className="
                group
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-red-600
                text-white
                font-bold
                shadow-xl
                hover:bg-red-500
                hover:-translate-y-1
                hover:shadow-2xl
                transition-all
                duration-300
              "
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


      {/* =====================================================
          GALLERY
      ====================================================== */}

      <section
        ref={(el) => addSectionRef(el, 'gallery')}
        className={`py-20 sm:py-24 lg:py-28 bg-white transition-all duration-1000 ${
          visibleSections.gallery
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">

            <div className="flex items-center justify-center gap-3 mb-5">

              <span className="w-10 h-px bg-red-500" />

              <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-700">
                Our Work
              </span>

              <span className="w-10 h-px bg-red-500" />

            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">

              Moments that

              <span className="text-blue-600">
                {' '}matter.
              </span>

            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
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

                  <div className="w-10 h-1 bg-red-500 rounded-full mb-4 group-hover:w-16 transition-all duration-500" />

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
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                border-2
                border-gray-200
                text-gray-900
                font-bold
                hover:bg-[#06152f]
                hover:text-white
                hover:border-[#06152f]
                transition-all
                duration-300
              "
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


      {/* =====================================================
          VOICES
      ====================================================== */}

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


      {/* =====================================================
          COLLABORATORS
      ====================================================== */}

      <section
        ref={(el) => addSectionRef(el, 'collaborators')}
        className={`relative py-20 sm:py-24 lg:py-28 bg-gray-50 overflow-hidden transition-all duration-1000 ${
          visibleSections.collaborators
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-100/70 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-red-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* =================================================
              CENTERED HEADER
          ================================================== */}

          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">

            <div className="flex items-center justify-center gap-3 mb-5">

              <span className="w-9 h-[2px] bg-red-500 rounded-full" />

              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-blue-700">
                Collaboration
              </span>

              <span className="w-9 h-[2px] bg-red-500 rounded-full" />

            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#06152f]">

              Stronger

              <span className="text-blue-600">
                {' '}together.
              </span>

            </h2>

            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
              Meaningful change becomes possible when organizations,
              communities, and individuals work together.
            </p>

          </div>


          {/* =================================================
              COLLABORATOR LOGO FRAMES
          ================================================== */}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

            {collaborators.map((num, index) => (

              <div
                key={num}
                className="
                  group
                  relative
                  rounded-3xl
                  bg-white
                  p-2
                  border
                  border-gray-200
                  shadow-[0_12px_30px_rgba(15,23,42,0.08)]
                  hover:shadow-[0_25px_50px_rgba(15,23,42,0.16)]
                  hover:-translate-y-3
                  transition-all
                  duration-500
                "
                style={{
                  transitionDelay: `${index * 60}ms`,
                }}
              >

                {/* Outer logo frame */}
                <div
                  className="
                    relative
                    aspect-square
                    rounded-[22px]
                    overflow-hidden
                    bg-gradient-to-br
                    from-gray-50
                    via-white
                    to-blue-50
                    border
                    border-gray-100
                    flex
                    items-center
                    justify-center
                  "
                >

                  {/* Decorative frame */}
                  <div className="
                    absolute
                    inset-2
                    rounded-[18px]
                    border
                    border-blue-100
                    pointer-events-none
                    group-hover:border-blue-300
                    transition-colors
                    duration-500
                  " />

                  {/* Corner accents */}
                  <span className="
                    absolute
                    top-3
                    left-3
                    w-5
                    h-5
                    border-t-2
                    border-l-2
                    border-blue-500
                    rounded-tl-md
                    opacity-60
                    group-hover:opacity-100
                    transition-opacity
                  " />

                  <span className="
                    absolute
                    bottom-3
                    right-3
                    w-5
                    h-5
                    border-b-2
                    border-r-2
                    border-red-500
                    rounded-br-md
                    opacity-60
                    group-hover:opacity-100
                    transition-opacity
                  " />

                  {/* Logo white presentation area */}
                  <div className="
                    relative
                    z-10
                    w-[78%]
                    h-[70%]
                    rounded-2xl
                    bg-white
                    border
                    border-gray-100
                    shadow-[0_8px_20px_rgba(15,23,42,0.08)]
                    flex
                    items-center
                    justify-center
                    p-4
                    group-hover:shadow-[0_12px_28px_rgba(15,23,42,0.13)]
                    transition-all
                    duration-500
                  ">

                    <img
                      src={collaboratorPath(num)}
                      alt={`Collaborator ${num}`}
                      loading="lazy"
                      className="
                        max-w-full
                        max-h-full
                        w-auto
                        h-auto
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                  </div>

                  {/* Bottom accent */}
                  <div className="
                    absolute
                    bottom-0
                    left-1/2
                    -translate-x-1/2
                    w-10
                    h-1
                    bg-gradient-to-r
                    from-blue-600
                    to-red-500
                    rounded-t-full
                    group-hover:w-16
                    transition-all
                    duration-500
                  " />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden bg-[#06152f] text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-[#06152f] via-blue-950 to-[#10265a]" />

        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full border border-white/5" />

        <div className="absolute -bottom-64 -left-48 w-[700px] h-[700px] rounded-full border border-white/5" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm text-white/75 mb-7">

            <span className="w-2 h-2 rounded-full bg-red-500 mr-2.5" />

            Be part of the change

          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">

            Compassion needs

            <span className="block text-blue-300">
              action.
            </span>

          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-white/70 leading-relaxed">

            Whether you are a veterinary student, professional,
            organization, or animal lover, there is a place for you
            in the movement for better animal welfare.

          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">

            <Link
              to="/get-involved"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-red-600
                text-white
                font-bold
                text-base
                hover:bg-red-500
                hover:-translate-y-1
                hover:shadow-2xl
                transition-all
                duration-300
              "
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
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-full
                border-2
                border-white/25
                bg-white/5
                backdrop-blur-md
                text-white
                font-semibold
                text-base
                hover:bg-white/10
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Contact VFAW
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`

        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeInUp {

          from {
            opacity: 0;
            transform: translateY(25px);
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
            transform: translateY(-20px);
          }

        }

        ::selection {
          background: rgba(37, 99, 235, 0.25);
        }

        @media (max-width: 640px) {

          .hero-heading {
            letter-spacing: -0.035em;
          }

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
