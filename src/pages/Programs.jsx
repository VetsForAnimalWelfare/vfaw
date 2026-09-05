import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const programs = [
    {
      title: 'Basics of Hematological Tools and Techniques',
      description:
        'Practical learning sessions designed to strengthen veterinary diagnostic skills through hands-on training in hematological tools and techniques.',
      category: 'Capacity Building',
      images: [
        '/capacity/p1.png',
        '/capacity/p2.png',
        '/capacity/p3.png',
        '/capacity/p4.png',
        '/capacity/p5.png',
        '/capacity/p6.png',
        '/capacity/p7.png',
        '/capacity/p8.png',
        '/capacity/p9.png',
        '/capacity/p10.png',
      ],
    },

    {
      title: 'Farmed Animal Welfare',
      description:
        'Dedicated to the protection, rehabilitation, and compassionate care of farm animals through welfare-focused initiatives and community engagement.',
      category: 'Animal Welfare',
      images: [
        '/welfare/farmed_1.jpg',
        '/welfare/farmed_2.jpg',
        '/welfare/farmed_3.jpg',
        '/welfare/farmed_4.jpg',
      ],
    },

    {
      title: 'Animal Welfare',
      description:
        'Providing medical care, treatment, rehabilitation, and compassionate support for street animals, including before and after treatment cases.',
      category: 'Animal Welfare',
      images: [
        '/welfare/IMG_2131.JPG',
        '/welfare/IMG_2124.JPG',
        '/welfare/IMG_2127.JPG',
        '/welfare/IMG_2123.JPG',
        '/welfare/IMG_2126.JPG',
        '/welfare/2.JPG',
        '/welfare/3.JPG',
        '/welfare/4.JPG',
        '/welfare/5.JPG',
        '/welfare/6.JPG',
        '/welfare/7.JPG',
        '/welfare/8.jpg',
        '/welfare/9.jpg',
        '/welfare/10.jpg',
        '/welfare/11.jpg',
        '/welfare/12.jpg',
        '/welfare/13.jpg',
        '/welfare/14.jpg',
        '/welfare/15.jpg',
        '/welfare/16.jpg',
        '/welfare/17.jpg',
        '/welfare/18.jpg',
      ],
    },

    {
      title: 'Animal Birth Control and Vaccination',
      description:
        'Implementing responsible animal birth control and vaccination programs to support healthier street animal populations and safer communities.',
      category: 'Animal Health',
      images: [
        '/control/IMG_20240216_000413_Original.JPG',
        '/control/IMG-20240215-WA0021_Original.JPG',
        '/control/IMG_1974.JPG',
        '/control/IMG_1973.JPG',
        '/control/IMG_2007.JPG',
        '/control/IMG_1975.JPG',
        '/control/IMG_1996.JPG',
        '/control/IMG_1976.JPG',
        '/control/IMG_2003.JPG',
        '/control/IMG_1972.JPG',
        '/control/IMG_1977.JPG',
        '/control/IMG_2004.JPG',
        '/control/1.png',
        '/control/2.jpg',
        '/control/3.jpg',
        '/control/4.jpg',
        '/control/6.jpg',
        '/control/7.jpg',
        '/control/8.jpg',
        '/control/9.jpg',
      ],
    },

    {
      title: 'Street Dog Feeding Program',
      description:
        'Regular feeding initiatives supporting the nutritional well-being of street dogs while promoting compassionate community involvement.',
      category: 'Community Outreach',
      images: [
        '/feeding/IMG_2119.JPG',
        '/feeding/IMG_1988.JPG',
        '/feeding/IMG_1987.JPG',
        '/feeding/IMG_1989.JPG',
        '/feeding/IMG_1985.JPG',
        '/feeding/IMG_1995.JPG',
        '/feeding/IMG_2111.JPG',
        '/feeding/IMG_2117.JPG',
        '/feeding/IMG_1990.JPG',
        '/feeding/IMG_2116.JPG',
        '/feeding/IMG_1983.JPG',
        '/feeding/IMG_2126.JPG',
        '/feeding/1.JPG',
        '/feeding/2.JPG',
        '/feeding/3.jpg',
        '/feeding/4.jpg',
        '/feeding/5.JPG',
      ],
    },

    {
      title: 'Rabies Vaccination',
      description:
        'Vaccination initiatives for canine and feline populations aimed at preventing rabies and contributing to safer communities.',
      category: 'Animal Health',
      images: [
        '/rabies/IMG_2008.JPG',
        '/rabies/IMG_1978.JPG',
        '/rabies/IMG_2002.JPG',
        '/rabies/IMG_2009.JPG',
        '/rabies/IMG_2010.JPG',
        '/rabies/3.jpg',
        '/rabies/1.jpg',
        '/rabies/2.jpg',
      ],
    },

    {
      title: 'Farm Animal Vaccination',
      description:
        'Animal healthcare and vaccination programs supporting disease prevention and improved health of farm animals.',
      category: 'Animal Health',
      images: [
        '/vaccination/7.jpg',
        '/vaccination/1.jpg',
        '/vaccination/2.jpg',
        '/vaccination/3.jpg',
        '/vaccination/4.jpg',
        '/vaccination/5.jpg',
        '/vaccination/6.jpg',
      ],
    },

    {
      title: 'Farm Animal Survey',
      description:
        'Field-based surveys and research activities focused on understanding farm animal health, management, and welfare conditions.',
      category: 'Research',
      images: [
        '/survey/IMG_2134.JPG',
        '/survey/IMG_1981.JPG',
        '/survey/IMG_1980.JPG',
        '/survey/IMG_2135.JPG',
        '/survey/4.JPG',
        '/survey/3.JPG',
        '/survey/1.jpg',
        '/survey/2.jpg',
      ],
    },

    {
      title: 'Training and Awareness Programs',
      description:
        'Educational programs, workshops, and awareness activities promoting responsible animal care and stronger understanding of animal welfare.',
      category: 'Education',
      images: [
        '/awareness/IMG_2024.JPG',
        '/awareness/IMG_2016.JPG',
        '/awareness/IMG_2023.JPG',
        '/awareness/IMG_2020.JPG',
        '/awareness/IMG_2019.JPG',
        '/awareness/IMG_1993.JPG',
        '/awareness/IMG_2022.JPG',
        '/awareness/IMG_2017.JPG',
        '/awareness/IMG_2121.JPG',
        '/awareness/IMG_2025.JPG',
        '/awareness/IMG_2018.JPG',
        '/awareness/1.jpg',
        '/awareness/2.jpg',
        '/awareness/3.jpg',
        '/awareness/4.JPG',
        '/awareness/5.jpg',
        '/awareness/6.jpg',
        '/awareness/7.jpg',
        '/awareness/8.jpg',
        '/awareness/9.jpg',
        '/awareness/10.jpg',
        '/awareness/11.jpg',
        '/awareness/12.jpg',
        '/awareness/13.jpg',
        '/awareness/14.jpg',
        '/awareness/15.jpg',
        '/awareness/16.jpg',
      ],
    },

    {
      title: 'Virtual Sessions',
      description:
        'Online educational and training sessions connecting students, professionals, and communities through accessible learning opportunities.',
      category: 'Education',
      images: [
        '/virtual/IMG_2120.JPG',
        '/virtual/IMG_1994.JPG',
        '/virtual/IMG_2114.JPG',
        '/virtual/IMG_1997.JPG',
        '/virtual/IMG_2129.JPG',
        '/virtual/IMG_1998.JPG',
        '/virtual/IMG_2013.JPG',
        '/virtual/IMG_1166.JPG',
        '/virtual/7.png',
        '/virtual/6.jpg',
        '/virtual/5.jpg',
        '/virtual/4.jpg',
        '/virtual/3.jpg',
      ],
    },

    {
      title: 'In-house Capacity Building',
      description:
        'Internal training and capacity-building programs designed to strengthen the knowledge, skills, and effectiveness of staff and volunteers.',
      category: 'Capacity Building',
      images: [
        '/capacity/1.JPG',
        '/capacity/2.JPG',
        '/capacity/3.jpg',
        '/capacity/4.jpg',
        '/capacity/5.jpg',
      ],
    },
  ];

  const categories = [
    'All',
    ...new Set(programs.map((program) => program.category)),
  ];

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const matchesCategory =
        activeCategory === 'All' || program.category === activeCategory;

      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        !search ||
        program.title.toLowerCase().includes(search) ||
        program.description.toLowerCase().includes(search) ||
        program.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const openModal = (program) => {
    setSelectedProgram(program);
    setCurrentSlideIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProgram(null);
    setCurrentSlideIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextSlide = () => {
    if (!selectedProgram) return;

    setCurrentSlideIndex(
      (prevIndex) =>
        (prevIndex + 1) % selectedProgram.images.length
    );
  };

  const prevSlide = () => {
    if (!selectedProgram) return;

    setCurrentSlideIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedProgram.images.length) %
        selectedProgram.images.length
    );
  };

  const selectSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedProgram) return;

      if (event.key === 'Escape') {
        closeModal();
      }

      if (event.key === 'ArrowRight') {
        nextSlide();
      }

      if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProgram]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-gray-900">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#07152f] bg-gradient-to-br from-[#07152f] via-[#10285a] to-[#173b79]">

        <div className="absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">

          <div className="mx-auto max-w-4xl text-center">

            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-100 shadow-lg backdrop-blur-md sm:text-sm">
              VETS FOR ANIMAL WELFARE
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Our Programs
              <br />
              <span className="text-blue-300">
                Action with Purpose.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-blue-100/80 sm:text-lg lg:text-xl">
              Explore the programs, field initiatives, educational activities,
              and community-based interventions through which VFAW works to
              advance animal welfare and veterinary engagement.
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================
          INTRO / STATS
      ========================================================== */}
      <section className="relative z-10 -mt-10 px-5 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 md:grid-cols-3">

            <div className="group rounded-3xl border-2 border-gray-100 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 transition-all duration-500 group-hover:bg-indigo-700 group-hover:text-white">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.5 12 4l9 9.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.5 11.5V20h13v-8.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 20v-5h6v5"
                    />
                  </svg>

                </div>

                <div>
                  <p className="text-3xl font-black text-gray-900">
                    {programs.length}
                  </p>

                  <p className="text-sm font-bold text-gray-500">
                    Active Program Areas
                  </p>
                </div>

              </div>

            </div>

            <div className="group rounded-3xl border-2 border-gray-100 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 transition-all duration-500 group-hover:bg-indigo-700 group-hover:text-white">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 12 2.25 2.25L15.75 9"
                    />
                  </svg>

                </div>

                <div>
                  <p className="text-3xl font-black text-gray-900">
                    {programs.reduce(
                      (total, program) => total + program.images.length,
                      0
                    )}
                  </p>

                  <p className="text-sm font-bold text-gray-500">
                    Field Moments Documented
                  </p>
                </div>

              </div>

            </div>

            <div className="group rounded-3xl border-2 border-gray-100 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 transition-all duration-500 group-hover:bg-indigo-700 group-hover:text-white">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.5 7.5c0-1.657-2.015-3-4.5-3s-4.5 1.343-4.5 3 2.015 3 4.5 3 4.5 1.343 4.5 3-2.015 3-4.5 3-4.5-1.343-4.5-3"
                    />
                  </svg>

                </div>

                <div>
                  <p className="text-3xl font-black text-gray-900">
                    2017
                  </p>

                  <p className="text-sm font-bold text-gray-500">
                    Founded
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          PROGRAM SECTION
      ========================================================== */}
      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-indigo-700">
              What We Do
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
              Programs that create
              <span className="text-indigo-700"> real impact.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              From direct animal welfare interventions to education,
              vaccination, research, and community outreach, our programs
              bring veterinary knowledge and compassionate action together.
            </p>

          </div>

          {/* Search */}
          <div className="mx-auto mt-12 max-w-3xl">

            <div className="relative">

              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5 text-gray-400">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
                  />
                </svg>

              </div>

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search programs..."
                className="w-full rounded-2xl border-2 border-gray-200 bg-white py-4 pl-13 pr-5 text-sm font-semibold text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-5 text-gray-400 transition-colors hover:text-indigo-700"
                  aria-label="Clear search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}

            </div>

          </div>

          {/* Categories */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-extrabold transition-all duration-300 ${
                  activeCategory === category
                    ? 'border-indigo-700 bg-indigo-700 text-white shadow-lg shadow-indigo-700/20'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700'
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* Results count */}
          <div className="mt-12 flex flex-col gap-3 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-bold text-gray-500">
                Showing
                <span className="mx-1 text-indigo-700">
                  {filteredPrograms.length}
                </span>
                of
                <span className="mx-1 text-gray-900">
                  {programs.length}
                </span>
                programs
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              VFAW Program Portfolio
            </div>

          </div>

          {/* Program Grid */}
          {filteredPrograms.length > 0 ? (
            <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {filteredPrograms.map((program, index) => (

                <article
                  key={program.title}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-gray-100 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-100 hover:shadow-[0_25px_60px_rgba(15,23,42,0.14)]"
                  onClick={() => openModal(program)}
                >

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={program.images[0]}
                      alt={program.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/80 via-[#07152f]/10 to-transparent opacity-80" />

                    {/* Number */}
                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#07152f]/70 text-sm font-black text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Image count */}
                    <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#07152f]/70 px-3 py-2 text-xs font-black text-white backdrop-blur-md">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="3"
                          rx="2"
                        />
                        <circle
                          cx="8.5"
                          cy="8.5"
                          r="1.5"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 15-5-5L5 21"
                        />
                      </svg>

                      {program.images.length}

                    </div>

                    {/* Category */}
                    <div className="absolute bottom-5 left-5">
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-white backdrop-blur-md">
                        {program.category}
                      </span>
                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="text-xl font-black leading-7 text-gray-900 transition-colors duration-300 group-hover:text-indigo-700">
                      {program.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                      {program.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                      <span className="text-sm font-black text-indigo-700">
                        Explore program
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 transition-all duration-300 group-hover:bg-indigo-700 group-hover:text-white group-hover:translate-x-1">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9 18 6-6-6-6"
                          />
                        </svg>

                      </span>

                    </div>

                  </div>

                </article>

              ))}

            </div>
          ) : (
            <div className="mt-10 rounded-3xl border-2 border-dashed border-gray-200 bg-white px-6 py-16 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-500">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
                  />
                </svg>

              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                No programs found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-gray-500">
                Try another search term or choose a different program category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
                className="mt-6 rounded-xl bg-indigo-700 px-6 py-3 font-black text-white transition-all duration-300 hover:bg-indigo-800 hover:-translate-y-1"
              >
                Reset Filters
              </button>

            </div>
          )}

        </div>

      </section>

      {/* =========================================================
          IMPACT SECTION
      ========================================================== */}
      <section className="border-y border-gray-100 bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            <div>

              <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-indigo-700">
                Our Approach
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl">
                From knowledge
                <br />
                <span className="text-indigo-700">
                  to meaningful action.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                Our programs connect veterinary knowledge with practical
                action. We work through education, direct interventions,
                preventive healthcare, research, and community engagement to
                create sustainable improvements in animal welfare.
              </p>

              <div className="mt-8">

                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 rounded-xl bg-indigo-700 px-6 py-3.5 font-black text-white shadow-lg shadow-indigo-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-800"
                >
                  Learn About VFAW

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m13.5 4.5 7.5 7.5m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>

                </Link>

              </div>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  title: 'Animal Welfare',
                  text: 'Promoting compassionate, ethical, and evidence-based animal care.',
                },
                {
                  title: 'Prevention',
                  text: 'Supporting vaccination and disease prevention initiatives.',
                },
                {
                  title: 'Education',
                  text: 'Building knowledge through training, workshops, and awareness.',
                },
                {
                  title: 'Community',
                  text: 'Working with communities to create sustainable welfare solutions.',
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="group rounded-3xl border-2 border-gray-100 bg-[#f7f9fc] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-100 hover:bg-white hover:shadow-xl"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 transition-all duration-300 group-hover:bg-indigo-700 group-hover:text-white">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3 4.5 6v5.5c0 4.5 3.2 7.8 7.5 9.5 4.3-1.7 7.5-5 7.5-9.5V6L12 3Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 12 2 2 4-4"
                      />
                    </svg>

                  </div>

                  <h3 className="mt-5 text-lg font-black text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#07152f] via-[#10285a] to-[#173b79] py-24 sm:py-28">

        <div className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">

          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300 sm:text-sm">
            Be Part of the Change
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Want to make
            <br />
            <span className="text-blue-300">
              a difference?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
            Your time, knowledge, ideas, and support can help strengthen animal
            welfare and create meaningful change in communities.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-black text-indigo-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Get Involved

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m13.5 4.5 7.5 7.5m0 0-7.5 7.5M21 12H3"
                />
              </svg>

            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/20 bg-white/10 px-7 py-4 font-black text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-indigo-700"
            >
              Contact VFAW

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75"
                />
              </svg>

            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          FULL SCREEN GALLERY MODAL
      ========================================================== */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/95 p-3 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >

          <div className="relative flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#07152f] shadow-2xl sm:h-[94vh] sm:rounded-3xl">

            {/* Modal Header */}
            <div className="relative z-20 flex items-center justify-between gap-4 border-b border-white/10 bg-[#07152f]/95 px-4 py-4 backdrop-blur-xl sm:px-6">

              <div className="min-w-0">

                <div className="flex flex-wrap items-center gap-2">

                  <span className="rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-blue-200">
                    {selectedProgram.category}
                  </span>

                  <span className="text-xs font-bold text-white/40">
                    {currentSlideIndex + 1} / {selectedProgram.images.length}
                  </span>

                </div>

                <h3 className="mt-2 truncate text-base font-black text-white sm:text-xl">
                  {selectedProgram.title}
                </h3>

              </div>

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close gallery"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>

              </button>

            </div>

            {/* Main Image */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black/20 p-3 sm:p-8">

              <img
                src={selectedProgram.images[currentSlideIndex]}
                alt={`${selectedProgram.title} - Image ${currentSlideIndex + 1}`}
                className="max-h-full max-w-full rounded-xl object-contain shadow-2xl sm:rounded-2xl"
              />

              {/* Previous */}
              {selectedProgram.images.length > 1 && (
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-gray-900 sm:left-7 sm:h-14 sm:w-14"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15 19-7-7 7-7"
                    />
                  </svg>

                </button>
              )}

              {/* Next */}
              {selectedProgram.images.length > 1 && (
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-gray-900 sm:right-7 sm:h-14 sm:w-14"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>

                </button>
              )}

            </div>

            {/* Description */}
            <div className="hidden border-t border-white/10 bg-[#07152f]/95 px-6 py-4 sm:block">

              <p className="mx-auto max-w-4xl text-center text-sm leading-6 text-white/60">
                {selectedProgram.description}
              </p>

            </div>

            {/* Thumbnail Strip */}
            {selectedProgram.images.length > 1 && (
              <div className="border-t border-white/10 bg-black/20 px-3 py-3 sm:px-5">

                <div className="flex gap-2 overflow-x-auto pb-1">

                  {selectedProgram.images.map((image, index) => (

                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => selectSlide(index)}
                      className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 sm:h-20 sm:w-28 ${
                        currentSlideIndex === index
                          ? 'border-blue-400 opacity-100 ring-2 ring-blue-400/30'
                          : 'border-white/10 opacity-50 hover:border-white/30 hover:opacity-90'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >

                      <img
                        src={image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />

                      {currentSlideIndex === index && (
                        <div className="absolute inset-0 bg-blue-400/10" />
                      )}

                    </button>

                  ))}

                </div>

              </div>
            )}

          </div>

        </div>
      )}

    </main>
  );
};

export default Programs;
