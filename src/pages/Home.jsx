import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../public/hero.jpg';
import VoicesSnapshot from '../components/VoicesSnapshot';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const [statsStarted, setStatsStarted] = useState(false);

  const statsRef = useRef(null);
  const sectionRefs = useRef({});

  /* =========================
     SCROLL / PARALLAX
  ========================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* =========================
     SECTION REVEAL
  ========================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.section;

            setVisibleSections((prev) => ({
              ...prev,
              [id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* =========================
     STAT COUNTER
  ========================= */
  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  /* =========================
     COUNTER
  ========================= */
  const Counter = ({ value, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsStarted) return;

      const duration = 1600;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const eased =
          1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(value * eased));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [statsStarted, value]);

    return (
      <>
        {count}
        {suffix}
      </>
    );
  };

  /* =========================
     FEATURED ACTIVITIES
  ========================= */
  const featuredActivities = [
    {
      number: '01',
      title: 'Animal Welfare',
      description:
        'Promoting compassionate treatment, responsible care and protection of animals through community-based initiatives.',
      image: '/welfare/IMG_2131.JPG',
    },
    {
      number: '02',
      title: 'Animal Birth Control & Vaccination',
      description:
        'Supporting humane population management and preventive healthcare to improve the lives of community animals.',
      image: '/control/IMG_20240216_000413_Original.JPG',
    },
    {
      number: '03',
      title: 'Street Dog Feeding Program',
      description:
        'Providing food and care to vulnerable street animals while building awareness around responsible community participation.',
      image: '/feeding/IMG_2119.JPG',
    },
  ];

  /* =========================
     GALLERY
  ========================= */
  const galleryItems = [
    {
      title: 'Awareness Program',
      image: '/awareness/7.jpg',
    },
    {
      title: 'Vaccination Program',
      image: '/vaccination/7.jpg',
    },
    {
      title: 'Feeding Program',
      image: '/feeding/IMG_2117.JPG',
    },
    {
      title: 'Capacity Building',
      image: '/capacity/1.JPG',
    },
  ];

  /* =========================
     COLLABORATORS
  ========================= */
  const collaborators = [2, 3, 4, 6, 7, 1];

  /* =========================
     REAL HOSTED ANIMAL IMAGES
  ========================= */
  const animals = [
    {
      name: 'Cow',
      image:
        'https://images.unsplash.com/photo-1546447147-3fc2b4f4a9e3?auto=format&fit=crop&w=900&q=85',
    },
    {
      name: 'Buffalo',
      image:
        'https://commons.wikimedia.org/wiki/Special:Redirect/file/Indian_Water_Buffalo.jpg',
    },
    {
      name: 'Dog',
      image:
        'https://commons.wikimedia.org/wiki/Special:Redirect/file/Good_dog.jpg',
    },
    {
      name: 'Cat',
      image:
        'https://commons.wikimedia.org/wiki/Special:Redirect/file/Domestic_Cat.jpg',
    },
    {
      name: 'Horse',
      image:
        'https://commons.wikimedia.org/wiki/Special:Redirect/file/Horse.JPG',
    },
  ];

  return (
    <div className="bg-white text-slate-900 overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative min-h-[760px] lg:min-h-[820px] overflow-hidden bg-[#06152f]">

        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.12}px) scale(1.06)`,
          }}
        >
          <img
            src={hero}
            alt="VFAW animal welfare"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-[#06152f]/90" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06152f] via-[#06152f]/90 to-[#06152f]/60" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#06152f] via-transparent to-[#06152f]/30" />

        {/* Blue Ambient Glow */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute right-0 top-1/3 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Main Hero Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-24">

          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-center">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}
            <div className="max-w-2xl">

              {/* Organization Name */}
              <div className="mb-6">

                <div className="inline-flex items-center gap-3 mb-4">

                  <span className="w-9 h-[3px] bg-red-500 rounded-full" />

                  <span className="text-blue-300 uppercase tracking-[0.22em] text-[11px] sm:text-xs font-semibold">
                    Vets for Animal Welfare
                  </span>

                </div>

                <p className="text-white/60 text-sm">
                  Compassion • Veterinary Action • Community
                </p>

              </div>

              {/* Main Heading */}
              <h1 className="font-black uppercase leading-[0.88] tracking-[-0.055em]">

                <span className="block text-white text-[48px] sm:text-[64px] md:text-[76px] lg:text-[78px] xl:text-[86px]">
                  VETS FOR
                </span>

                <span className="block text-[48px] sm:text-[64px] md:text-[76px] lg:text-[78px] xl:text-[86px] bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                  ANIMAL
                </span>

                <span className="block text-white text-[48px] sm:text-[64px] md:text-[76px] lg:text-[78px] xl:text-[86px]">
                  WELFARE
                </span>

              </h1>

              {/* Red Accent */}
              <div className="flex items-center gap-4 mt-7 mb-6">

                <div className="h-[4px] w-16 bg-red-500 rounded-full" />

                <div className="h-[1px] w-20 bg-white/20" />

              </div>

              {/* Motto */}
              <h2 className="text-xl sm:text-2xl md:text-[27px] font-semibold text-white leading-snug">
                Animal Welfare for a
                <span className="text-red-400"> Better World</span>
              </h2>

              <p className="mt-5 text-white/70 text-sm sm:text-base leading-7 max-w-xl">
                A veterinary-led initiative dedicated to creating a
                compassionate society where animals are protected,
                communities are empowered and responsible animal care
                becomes a shared commitment.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">

                <Link
                  to="/get-involved"
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-950/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Get Involved

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl border border-white/20 bg-white/[0.07] hover:bg-white/[0.13] backdrop-blur-md text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
                >
                  Discover VFAW

                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                </Link>

              </div>

              {/* =================================================
                  THREE TRUST ITEMS
              ================================================== */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 max-w-xl">

                <div className="rounded-xl border border-white/15 bg-white/[0.09] backdrop-blur-md px-4 py-4 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="2"
                    >
                      <path d="M12 14c4 0 7 2 7 5" />
                      <circle cx="12" cy="7" r="3" />
                      <path d="M5 19c0-3 2-5 5-5" />
                    </svg>
                  </div>

                  <p className="text-white font-semibold text-sm leading-tight">
                    Veterinary Students
                  </p>
                </div>

                <div className="rounded-xl border border-white/15 bg-white/[0.09] backdrop-blur-md px-4 py-4 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center mb-3">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f87171"
                      strokeWidth="2"
                    >
                      <path d="M3 12h18" />
                      <path d="M12 3v18" />
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </div>

                  <p className="text-white font-semibold text-sm leading-tight">
                    Community Action
                  </p>
                </div>

                <div className="rounded-xl border border-white/15 bg-white/[0.09] backdrop-blur-md px-4 py-4 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="2"
                    >
                      <path d="M12 21s-7-4.4-9-9.5C1.5 7.5 4 4 7.5 4c2 0 3.5 1 4.5 2.5C13 5 14.5 4 16.5 4 20 4 22.5 7.5 21 11.5 19 16.6 12 21 12 21Z" />
                    </svg>
                  </div>

                  <p className="text-white font-semibold text-sm leading-tight">
                    Animal Welfare
                  </p>
                </div>

              </div>

            </div>

            {/* =================================================
                RIGHT ANIMAL PANEL
            ================================================== */}
            <div className="relative">

              {/* Main Panel */}
              <div className="relative rounded-[28px] border border-white/15 bg-white/[0.075] backdrop-blur-xl p-5 sm:p-6 lg:p-7 shadow-2xl">

                {/* Panel Header */}
                <div className="flex items-start justify-between gap-5 mb-6">

                  <div>

                    <p className="text-red-400 uppercase tracking-[0.22em] text-[10px] sm:text-xs font-bold mb-2">
                      Our Mission
                    </p>

                    <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
                      Compassion
                      <span className="text-blue-400"> into action.</span>
                    </h3>

                  </div>

                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-950/30">

                    <span className="text-white font-black text-sm">
                      01
                    </span>

                  </div>

                </div>

                <p className="text-white/65 text-sm leading-6 mb-6 max-w-lg">
                  Protecting animals through veterinary knowledge,
                  community participation, preventive healthcare and
                  practical welfare initiatives.
                </p>

                {/* =================================================
                    ANIMAL IMAGE GRID
                ================================================== */}
                <div className="grid grid-cols-5 gap-2.5">

                  {animals.map((animal, index) => (
                    <div
                      key={animal.name}
                      className={`group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 ${
                        index === 0
                          ? 'h-40 sm:h-44 lg:h-48'
                          : 'h-40 sm:h-44 lg:h-48'
                      }`}
                    >

                      <img
                        src={animal.image}
                        alt={animal.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#06152f]/90 via-transparent to-transparent" />

                      <div className="absolute bottom-2 left-2 right-2">

                        <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white font-bold">
                          {animal.name}
                        </span>

                      </div>

                    </div>
                  ))}

                </div>

                {/* Mission Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">

                  <div className="rounded-xl bg-white/[0.06] border border-white/10 px-3 py-3">
                    <p className="text-blue-300 text-[10px] uppercase tracking-wider font-bold">
                      Focus
                    </p>
                    <p className="text-white text-xs font-semibold mt-1">
                      Animal Welfare
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.06] border border-white/10 px-3 py-3">
                    <p className="text-red-300 text-[10px] uppercase tracking-wider font-bold">
                      Approach
                    </p>
                    <p className="text-white text-xs font-semibold mt-1">
                      Community Action
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.06] border border-white/10 px-3 py-3">
                    <p className="text-blue-300 text-[10px] uppercase tracking-wider font-bold">
                      Driven By
                    </p>
                    <p className="text-white text-xs font-semibold mt-1">
                      Veterinary Students
                    </p>
                  </div>

                </div>

              </div>

              {/* Decorative Red Line */}
              <div className="absolute -bottom-3 left-10 right-10 h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />

            </div>

          </div>

        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06152f] to-transparent pointer-events-none" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50">

          <span className="text-[9px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />

        </div>

      </section>

      {/* =====================================================
          IMPACT STATISTICS
      ====================================================== */}
      <section
        ref={(el) => (statsRef.current = el)}
        className="relative bg-[#06152f] py-14 sm:py-16"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">

            {[
              {
                value: 8,
                suffix: '+',
                label: 'Years of Action',
              },
              {
                value: 20,
                suffix: '+',
                label: 'Programs',
              },
              {
                value: 1000,
                suffix: '+',
                label: 'Animals Reached',
              },
              {
                value: 100,
                suffix: '%',
                label: 'Community Driven',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-7 text-center hover:bg-white/[0.08] transition-all duration-300"
              >

                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                <p className="mt-2 text-xs sm:text-sm text-blue-200/70 font-medium">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHAT WE DO
      ====================================================== */}
      <section
        data-section="activities"
        ref={(el) => (sectionRefs.current.activities = el)}
        className={`py-20 sm:py-24 lg:py-28 bg-white transition-all duration-1000 ${
          visibleSections.activities
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Section Header */}
          <div className="max-w-2xl mb-12">

            <div className="flex items-center gap-3 mb-4">

              <span className="w-9 h-[3px] bg-red-500 rounded-full" />

              <span className="uppercase tracking-[0.2em] text-xs font-bold text-blue-700">
                What We Do
              </span>

            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#06152f]">
              Turning concern
              <span className="text-blue-600"> into action.</span>
            </h2>

            <p className="mt-5 text-slate-600 leading-7">
              Our work connects veterinary knowledge with practical
              community-based animal welfare programs.
            </p>

          </div>

          {/* Activity Cards */}
          <div className="grid md:grid-cols-3 gap-6">

            {featuredActivities.map((activity) => (
              <article
                key={activity.number}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <span className="absolute top-5 left-5 w-11 h-11 rounded-xl bg-white/95 flex items-center justify-center text-blue-700 font-black text-sm shadow-lg">
                    {activity.number}
                  </span>

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-[#06152f]">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-6">
                    {activity.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-700">
                    Learn more

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}
      <section
        data-section="gallery"
        ref={(el) => (sectionRefs.current.gallery = el)}
        className={`py-20 sm:py-24 bg-slate-50 transition-all duration-1000 ${
          visibleSections.gallery
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">

            <div>

              <div className="flex items-center gap-3 mb-4">

                <span className="w-9 h-[3px] bg-red-500 rounded-full" />

                <span className="uppercase tracking-[0.2em] text-xs font-bold text-blue-700">
                  Our Work
                </span>

              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-[#06152f]">
                Moments of
                <span className="text-blue-600"> impact.</span>
              </h2>

            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-red-600 transition-colors"
            >
              View Full Gallery

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>

            </Link>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            {galleryItems.map((item) => (
              <Link
                to="/gallery"
                key={item.title}
                className="group relative h-64 sm:h-72 lg:h-80 overflow-hidden rounded-2xl bg-slate-200"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06152f]/90 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">

                  <p className="text-white font-bold text-sm sm:text-base">
                    {item.title}
                  </p>

                  <div className="w-8 h-[2px] bg-red-500 mt-2 group-hover:w-14 transition-all duration-300" />

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          VOICES
      ====================================================== */}
      <section
        data-section="voices"
        ref={(el) => (sectionRefs.current.voices = el)}
        className={`transition-all duration-1000 ${
          visibleSections.voices
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <VoicesSnapshot />
      </section>

      {/* =====================================================
          COLLABORATORS
      ====================================================== */}
      <section
        data-section="collaborators"
        ref={(el) => (sectionRefs.current.collaborators = el)}
        className={`py-20 sm:py-24 bg-white transition-all duration-1000 ${
          visibleSections.collaborators
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center mb-12">

            <div className="flex justify-center items-center gap-3 mb-4">

              <span className="w-9 h-[3px] bg-red-500 rounded-full" />

              <span className="uppercase tracking-[0.2em] text-xs font-bold text-blue-700">
                Our Network
              </span>

              <span className="w-9 h-[3px] bg-red-500 rounded-full" />

            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-[#06152f]">
              Working
              <span className="text-blue-600"> together.</span>
            </h2>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

            {collaborators.map((number) => (
              <div
                key={number}
                className="h-28 rounded-2xl border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <img
                  src={`/collaborators/${number}.png`}
                  alt={`Collaborator ${number}`}
                  className="max-w-[75%] max-h-[65%] object-contain"
                  loading="lazy"
                />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#06152f] py-20 sm:py-24">

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">

          <div className="flex justify-center items-center gap-3 mb-5">

            <span className="w-9 h-[3px] bg-red-500 rounded-full" />

            <span className="uppercase tracking-[0.22em] text-xs font-bold text-blue-300">
              Be Part of the Change
            </span>

            <span className="w-9 h-[3px] bg-red-500 rounded-full" />

          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Together, we can build
            <span className="block text-blue-400">
              a better world for animals.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-white/65 leading-7">
            Join VFAW in creating meaningful change through veterinary
            action, education, compassion and community participation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-9">

            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-950/30 transition-all duration-300 hover:-translate-y-1"
            >
              Get Involved

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>

            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-sm transition-all duration-300"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}
      <style>{`
        @keyframes softFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

    </div>
  );
};

export default Home;
