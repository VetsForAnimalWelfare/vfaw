import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../public/hero.jpg';
import VoicesSnapshot from '../components/VoicesSnapshot';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addSectionRef = (element, name) => {
    if (element && !sectionRefs.current.includes(element)) {
      element.dataset.section = name;
      sectionRefs.current.push(element);
    }
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

  const stats = [
    {
      value: '2017',
      label: 'Founded',
      description: 'Student-led journey',
    },
    {
      value: '100+',
      label: 'Activities',
      description: 'Community initiatives',
    },
    {
      value: '1000+',
      label: 'Animals Reached',
      description: 'Through welfare programs',
    },
    {
      value: '∞',
      label: 'Commitment',
      description: 'For animal welfare',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 scale-110"
          style={{
            transform: `translateY(${scrollY * 0.22}px) scale(1.1)`,
          }}
        >
          <img
            src={hero}
            alt="Vets for Animal Welfare"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-indigo-900/55 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Animated light effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

        <div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-3xl"
          style={{
            animation: 'float 8s ease-in-out infinite',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-20">

          <div className="max-w-5xl mx-auto text-center">

            {/* Small label */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-sm sm:text-base font-medium tracking-wide mb-8 animate-[fadeInUp_0.8s_ease-out]">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              VETS FOR ANIMAL WELFARE
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-white animate-[fadeInUp_1s_ease-out]">

              <span className="block">
                Compassion
              </span>

              <span className="block mt-2 bg-gradient-to-r from-blue-300 via-indigo-300 to-white bg-clip-text text-transparent">
                In Action.
              </span>

            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto mt-8 text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/80 animate-[fadeInUp_1.2s_ease-out]">
              A student-led movement advancing animal welfare,
              veterinary education, and compassionate community action.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 animate-[fadeInUp_1.4s_ease-out]">

              <Link
                to="/get-involved"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-indigo-900 font-bold text-lg shadow-2xl shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-white/20"
              >
                <span className="relative z-10">
                  Get Involved
                </span>

                <svg
                  className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
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

                <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>

              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold text-lg transition-all duration-500 hover:bg-white/20 hover:border-white/50 hover:-translate-y-1"
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">

          <div className="flex flex-col items-center gap-3 text-white/60">

            <span className="text-xs uppercase tracking-[0.3em]">
              Scroll
            </span>

            <div className="w-6 h-10 rounded-full border border-white/30 flex justify-center pt-2">
              <div className="w-1 h-2.5 rounded-full bg-white/70 animate-bounce" />
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRO / STATS
      ========================================================= */}
      <section
        ref={(el) => addSectionRef(el, 'stats')}
        className="relative bg-white"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="relative -mt-16 z-20">

            <div className="grid grid-cols-2 lg:grid-cols-4 bg-white rounded-3xl shadow-2xl shadow-indigo-900/10 border border-gray-100 overflow-hidden">

              {stats.map((stat, index) => (

                <div
                  key={stat.label}
                  className={`relative p-6 sm:p-8 lg:p-10 text-center group transition-all duration-500 hover:bg-indigo-50/60 ${
                    index !== stats.length - 1
                      ? 'border-r border-gray-100'
                      : ''
                  }`}
                >

                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-700 tracking-tight">
                    {stat.value}
                  </div>

                  <div className="mt-2 font-bold text-gray-900">
                    {stat.label}
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    {stat.description}
                  </div>

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-indigo-600 group-hover:w-16 transition-all duration-500 rounded-full" />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MAKING A DIFFERENCE
      ========================================================= */}
      <section
        ref={(el) => addSectionRef(el, 'activities')}
        className={`relative py-28 lg:py-36 bg-gray-50 transition-all duration-1000 ${
          visibleSections.activities
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading */}
          <div className="max-w-3xl mb-16">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-indigo-600" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-indigo-600">
                What We Do
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-950 leading-tight">
              Making a difference
              <span className="text-indigo-600"> where it matters.</span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              From direct veterinary intervention to community education,
              our programs turn compassion into meaningful action.
            </p>

          </div>


          {/* Activity Cards */}
          <div className="grid lg:grid-cols-3 gap-7">

            {featuredActivities.map((activity, index) => (

              <Link
                to="/programs"
                key={activity.title}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-indigo-900/10 transition-all duration-700 hover:-translate-y-3"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >

                {/* Image */}
                <div className="relative h-72 overflow-hidden">

                  <img
                    src={activity.image}
                    alt={activity.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Number */}
                  <div className="absolute top-5 left-5 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-bold">
                    {activity.number}
                  </div>

                  {/* Bottom title */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">

                    <h3 className="text-2xl font-bold text-white">
                      {activity.title}
                    </h3>

                  </div>

                </div>

                {/* Content */}
                <div className="p-7">

                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-indigo-600 font-bold">

                    <span>
                      Explore Program
                    </span>

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


          {/* Button */}
          <div className="mt-14 text-center">

            <Link
              to="/programs"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-700/20 hover:bg-indigo-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
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

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-indigo-600" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-indigo-600">
                  Our Work
                </span>
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

            <Link
              to="/gallery"
              className="group inline-flex items-center gap-2 text-indigo-700 font-bold hover:text-indigo-900 transition-colors"
            >
              View Full Gallery

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


          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {galleryItems.map((item, index) => (

              <Link
                to="/gallery"
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl ${
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

                <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-500 group-hover:-translate-y-2">

                  <div className="w-10 h-1 bg-white rounded-full mb-4 transition-all duration-500 group-hover:w-16" />

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-white/75">
                    {item.description}
                  </p>

                </div>

                {/* Hover border */}
                <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-white/40 transition-all duration-500" />

              </Link>

            ))}

          </div>


          <div className="mt-12 text-center">

            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gray-200 text-gray-900 font-bold hover:bg-gray-950 hover:text-white hover:border-gray-950 transition-all duration-300"
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

        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <div className="flex items-center justify-center gap-3 mb-5">

              <span className="w-8 h-px bg-indigo-600" />

              <span className="text-sm font-bold tracking-[0.2em] uppercase text-indigo-600">
                Collaboration
              </span>

              <span className="w-8 h-px bg-indigo-600" />

            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Stronger
              <span className="text-indigo-600"> together.</span>
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Meaningful change becomes possible when organizations,
              communities, and individuals work together.
            </p>

          </div>


          {/* Collaborator logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

            {collaborators.map((num) => (

              <div
                key={num}
                className="group aspect-square bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex items-center justify-center p-5 overflow-hidden"
              >

                <img
                  src={`/collaborators/${num}.${num === 1 || num === 7 ? 'jpg' : 'JPG'}`}
                  alt={`Collaborator ${num}`}
                  loading="lazy"
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
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

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-900" />

        {/* Decorative circles */}
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full border border-white/5" />
        <div className="absolute -bottom-64 -left-48 w-[700px] h-[700px] rounded-full border border-white/5" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-sm text-white/70 mb-8">
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
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/25 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Contact VFAW
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          GLOBAL ANIMATIONS
      ========================================================= */}
      <style>{`

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(79, 70, 229, 0.25);
        }

      `}</style>

    </main>
  );
};

export default Home;
