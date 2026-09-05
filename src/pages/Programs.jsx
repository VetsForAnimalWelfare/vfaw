import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const programs = [
    {
      title: 'Basics of Hematological Tools and Techniques',
      description:
        'Practical learning sessions designed to strengthen veterinary diagnostic skills through hands-on training in hematological tools and techniques.',
      category: 'Capacity Building',
      article: {
        introduction:
          'The Basics of Hematological Tools and Techniques program is designed to strengthen practical diagnostic knowledge among veterinary students and participants. The program introduces essential hematological equipment, sample handling procedures, and fundamental techniques used in veterinary practice.',
        objectives: [
          'Introduce participants to commonly used hematological tools and equipment.',
          'Develop practical understanding of blood sample collection and handling.',
          'Explain basic hematological testing procedures and their applications.',
          'Strengthen interpretation of basic hematological parameters.',
          'Promote accurate, ethical, and responsible diagnostic practices.',
        ],
        activities: [
          'Demonstration of hematological instruments and laboratory tools.',
          'Practical sessions on blood sample handling.',
          'Introduction to hematological examination techniques.',
          'Discussion of common diagnostic parameters.',
          'Interactive learning and practical demonstrations.',
        ],
        impact:
          'The program contributes to improving the practical diagnostic capacity of veterinary students and volunteers, helping them develop skills that can be applied during clinical training and future veterinary practice.',
      },
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
      article: {
        introduction:
          'Farmed Animal Welfare focuses on improving the quality of life, health, and management of animals raised for agricultural purposes. The program promotes practical welfare principles and encourages responsible animal husbandry.',
        objectives: [
          'Promote awareness of farm animal welfare principles.',
          'Encourage humane handling and management practices.',
          'Support better animal health and living conditions.',
          'Identify common welfare challenges affecting farm animals.',
          'Encourage farmers and communities to adopt welfare-oriented practices.',
        ],
        activities: [
          'Farm visits and field observations.',
          'Animal welfare assessments.',
          'Community awareness activities.',
          'Educational discussions with farmers and students.',
          'Promotion of responsible animal husbandry.',
        ],
        impact:
          'By connecting veterinary knowledge with farming communities, the program supports healthier animals, improved husbandry practices, and greater awareness of animal welfare in agricultural systems.',
      },
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
      article: {
        introduction:
          'The Animal Welfare program focuses on supporting vulnerable street animals through veterinary care, treatment, rehabilitation, and compassionate intervention. It reflects VFAW’s commitment to improving animal well-being through practical veterinary action.',
        objectives: [
          'Provide appropriate veterinary assistance to animals in need.',
          'Promote humane treatment of street animals.',
          'Support recovery and rehabilitation of injured or sick animals.',
          'Increase community awareness about responsible animal care.',
          'Encourage compassionate and evidence-based welfare practices.',
        ],
        activities: [
          'Veterinary examination and basic treatment.',
          'First-aid and emergency support.',
          'Wound management and follow-up care.',
          'Before-and-after treatment monitoring.',
          'Community-based animal welfare activities.',
        ],
        impact:
          'The program provides direct support to animals while also demonstrating the importance of compassionate veterinary intervention and responsible community participation in animal welfare.',
      },
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
      article: {
        introduction:
          'Animal Birth Control and Vaccination is an important component of humane population management and disease prevention. The program combines veterinary intervention with public awareness to support healthier street animal populations.',
        objectives: [
          'Promote humane approaches to street animal population management.',
          'Support vaccination against important infectious diseases.',
          'Reduce preventable animal suffering.',
          'Increase awareness of responsible animal population management.',
          'Encourage community participation in preventive veterinary programs.',
        ],
        activities: [
          'Animal identification and assessment.',
          'Vaccination campaigns.',
          'Animal birth control interventions.',
          'Post-procedure monitoring and care.',
          'Community awareness and education.',
        ],
        impact:
          'The program supports animal health and welfare while contributing to responsible population management and improved understanding of preventive veterinary care within communities.',
      },
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
      article: {
        introduction:
          'The Street Dog Feeding Program provides nutritional support to street dogs while encouraging communities to participate in compassionate animal welfare activities. Regular access to food can be particularly important for animals living in challenging environments.',
        objectives: [
          'Provide nutritional support to vulnerable street dogs.',
          'Encourage humane community interaction with street animals.',
          'Promote awareness of responsible feeding practices.',
          'Encourage volunteers to participate in animal welfare activities.',
          'Strengthen community involvement in street animal welfare.',
        ],
        activities: [
          'Organized feeding activities.',
          'Volunteer-led food distribution.',
          'Observation of animal health and condition.',
          'Community engagement.',
          'Documentation of feeding activities.',
        ],
        impact:
          'The program creates opportunities for direct animal support while encouraging compassion, volunteerism, and responsible community involvement in street animal welfare.',
      },
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
      article: {
        introduction:
          'Rabies vaccination is a key component of responsible animal health and public health programs. This initiative focuses on improving vaccination coverage among susceptible canine and feline populations.',
        objectives: [
          'Increase access to rabies vaccination.',
          'Promote preventive veterinary healthcare.',
          'Support responsible animal health management.',
          'Raise public awareness about rabies prevention.',
          'Contribute to safer communities through disease prevention.',
        ],
        activities: [
          'Animal health assessment.',
          'Rabies vaccination campaigns.',
          'Vaccination documentation.',
          'Community education.',
          'Follow-up and monitoring where appropriate.',
        ],
        impact:
          'Through vaccination and awareness, the program contributes to disease prevention, animal welfare, and greater community understanding of rabies and responsible animal healthcare.',
      },
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
      article: {
        introduction:
          'Farm Animal Vaccination supports preventive healthcare among livestock by promoting vaccination and better disease prevention practices. Healthy animals are essential to sustainable farming and livelihoods.',
        objectives: [
          'Promote preventive healthcare among farm animals.',
          'Increase awareness of livestock vaccination.',
          'Support disease prevention at the farm level.',
          'Encourage responsible animal health management.',
          'Connect veterinary services with farming communities.',
        ],
        activities: [
          'Farm animal health assessments.',
          'Vaccination activities.',
          'Farmer education.',
          'Disease prevention discussions.',
          'Documentation and field observation.',
        ],
        impact:
          'The program helps strengthen preventive animal healthcare and encourages farmers to adopt practices that contribute to healthier livestock and more resilient farming systems.',
      },
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
      article: {
        introduction:
          'The Farm Animal Survey program supports field-based information gathering related to animal health, management, and welfare. Evidence from surveys can help identify challenges and guide future veterinary and welfare interventions.',
        objectives: [
          'Understand common farm animal health challenges.',
          'Assess animal management practices.',
          'Identify welfare-related concerns.',
          'Collect field information for future interventions.',
          'Promote evidence-based animal welfare planning.',
        ],
        activities: [
          'Farm visits.',
          'Structured field observations.',
          'Collection of relevant information.',
          'Interaction with farmers.',
          'Analysis and documentation of findings.',
        ],
        impact:
          'Field surveys provide valuable information for understanding real-world animal health and welfare conditions and can help inform future education, intervention, and research activities.',
      },
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
      article: {
        introduction:
          'Training and Awareness Programs are designed to share knowledge about animal welfare, responsible animal care, veterinary practices, and community responsibility. Education is central to creating sustainable change.',
        objectives: [
          'Increase understanding of animal welfare.',
          'Provide practical knowledge about responsible animal care.',
          'Create opportunities for veterinary and community education.',
          'Encourage informed decision-making.',
          'Develop a culture of compassion and responsible animal stewardship.',
        ],
        activities: [
          'Awareness campaigns.',
          'Educational workshops.',
          'Training sessions.',
          'Interactive discussions.',
          'Community outreach and knowledge sharing.',
        ],
        impact:
          'By sharing knowledge with students, volunteers, communities, and stakeholders, the program helps create informed individuals who can contribute to long-term improvements in animal welfare.',
      },
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
      article: {
        introduction:
          'Virtual Sessions extend VFAW’s educational outreach beyond physical locations. Online sessions provide opportunities for students, professionals, volunteers, and interested communities to connect and learn.',
        objectives: [
          'Make educational opportunities more accessible.',
          'Connect learners with veterinary and welfare knowledge.',
          'Support knowledge sharing across locations.',
          'Create opportunities for expert interaction.',
          'Use digital platforms to strengthen animal welfare education.',
        ],
        activities: [
          'Online lectures.',
          'Interactive webinars.',
          'Expert discussions.',
          'Question-and-answer sessions.',
          'Digital educational campaigns.',
        ],
        impact:
          'Virtual education enables VFAW to reach wider audiences while creating flexible learning opportunities and strengthening knowledge exchange within the animal welfare community.',
      },
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
      article: {
        introduction:
          'In-house Capacity Building focuses on strengthening the skills, knowledge, teamwork, and practical abilities of individuals involved with VFAW. Strong internal capacity is essential for delivering effective and responsible programs.',
        objectives: [
          'Strengthen practical skills among volunteers and members.',
          'Improve organizational preparedness.',
          'Promote teamwork and effective communication.',
          'Develop leadership and field-level capabilities.',
          'Improve the quality of future program implementation.',
        ],
        activities: [
          'Internal training sessions.',
          'Skill-development workshops.',
          'Team discussions.',
          'Practical demonstrations.',
          'Organizational learning activities.',
        ],
        impact:
          'Investing in people strengthens the organization itself. Capacity-building activities help volunteers and members become more confident, capable, and prepared to contribute to animal welfare initiatives.',
      },
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

  const openGallery = (program) => {
    setSelectedProgram(program);
    setCurrentSlideIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const openArticle = (program) => {
    setSelectedArticle(program);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedProgram(null);
    setCurrentSlideIndex(0);
    document.body.style.overflow = 'auto';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'auto';
  };

  const nextSlide = () => {
    if (!selectedProgram) return;

    setCurrentSlideIndex(
      (previous) =>
        (previous + 1) % selectedProgram.images.length
    );
  };

  const prevSlide = () => {
    if (!selectedProgram) return;

    setCurrentSlideIndex(
      (previous) =>
        (previous - 1 + selectedProgram.images.length) %
        selectedProgram.images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedProgram) {
        if (event.key === 'Escape') {
          closeGallery();
        }

        if (event.key === 'ArrowRight') {
          nextSlide();
        }

        if (event.key === 'ArrowLeft') {
          prevSlide();
        }
      }

      if (selectedArticle && event.key === 'Escape') {
        closeArticle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProgram, selectedArticle]);

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

        <div className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/5 blur-3xl" />

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
          STATS
      ========================================================== */}

      <section className="relative z-10 -mt-10 px-5 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 md:grid-cols-3">

            {/* Program count */}
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
                      d="M8 9h8M8 12h8M8 15h5"
                    />
                  </svg>

                </div>

                <div>
                  <p className="text-3xl font-black text-gray-900">
                    {programs.length}
                  </p>

                  <p className="text-sm font-bold text-gray-500">
                    Program Areas
                  </p>
                </div>

              </div>

            </div>

            {/* Documented moments */}
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
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="3"
                      rx="3"
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

                </div>

                <div>
                  <p className="text-3xl font-black text-gray-900">
                    {programs.reduce(
                      (total, program) => total + program.images.length,
                      0
                    )}
                  </p>

                  <p className="text-sm font-bold text-gray-500">
                    Field Moments
                  </p>
                </div>

              </div>

            </div>

            {/* Founded */}
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
                    <rect
                      x="4"
                      y="5"
                      width="16"
                      height="15"
                      rx="2"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 3v4M16 3v4M4 10h16"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 14h2M14 14h2M8 17h2"
                    />
                  </svg>

                </div>

                <div>
                  <p className="text-3xl font-black text-gray-900">
                    2017
                  </p>

                  <p className="text-sm font-bold text-gray-500">
                    VFAW Founded
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          PROGRAMS
      ========================================================== */}

      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

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

              <div className="pointer-events-none absolute left-0 top-0 flex h-full w-14 items-center justify-center text-gray-400">

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
                className="w-full rounded-2xl border-2 border-gray-200 bg-white py-4 pl-14 pr-12 text-sm font-semibold text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                  className="absolute right-0 top-0 flex h-full w-12 items-center justify-center text-gray-400 transition-colors hover:text-indigo-700"
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

          {/* Results */}
          <div className="mt-12 flex flex-col gap-3 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:justify-between">

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

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">

              <span className="h-2 w-2 rounded-full bg-green-500" />

              VFAW Program Portfolio

            </div>

          </div>

          {/* Cards */}
          {filteredPrograms.length > 0 ? (
            <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {filteredPrograms.map((program, index) => (

                <article
                  key={program.title}
                  className="group overflow-hidden rounded-3xl border-2 border-gray-100 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-100 hover:shadow-[0_25px_60px_rgba(15,23,42,0.14)]"
                >

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={program.images[0]}
                      alt={program.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/90 via-[#07152f]/20 to-transparent" />

                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#07152f]/70 text-sm font-black text-white backdrop-blur-md">
                      {String(index + 1).padStart(2, '0')}
                    </div>

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

                    <div className="absolute bottom-5 left-5">

                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-white backdrop-blur-md">
                        {program.category}
                      </span>

                    </div>

                  </div>

                  {/* Card content */}
                  <div className="p-6">

                    <h3 className="text-xl font-black leading-7 text-gray-900 transition-colors duration-300 group-hover:text-indigo-700">
                      {program.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                      {program.description}
                    </p>

                    {/* Two actions */}
                    <div className="mt-6 grid grid-cols-2 gap-3 border-t border-gray-100 pt-5">

                      <button
                        type="button"
                        onClick={() => openGallery(program)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-3 py-3 text-xs font-black text-white shadow-lg shadow-indigo-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-800 sm:text-sm"
                      >

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.8"
                          stroke="currentColor"
                          className="h-4 w-4 shrink-0"
                        >
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="3"
                            rx="3"
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

                        View Gallery

                      </button>

                      <button
                        type="button"
                        onClick={() => openArticle(program)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-3 py-3 text-xs font-black text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 sm:text-sm"
                      >

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.8"
                          stroke="currentColor"
                          className="h-4 w-4 shrink-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 4.5h10A2.5 2.5 0 0 1 17.5 7v12.5H7A2.5 2.5 0 0 1 4.5 17V5.5A1 1 0 0 1 5.5 4.5H5Z"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.5 19.5H19a1 1 0 0 0 1-1V7a2.5 2.5 0 0 0-2.5-2.5"
                          />

                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 9h6M8 12h6M8 15h4"
                          />
                        </svg>

                        Read About

                      </button>

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
                className="mt-6 rounded-xl bg-indigo-700 px-6 py-3 font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-800"
              >
                Reset Filters
              </button>

            </div>
          )}

        </div>

      </section>

      {/* =========================================================
          APPROACH
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
          GALLERY MODAL
      ========================================================== */}

      {selectedProgram && (
        <div
          className="fixed inset-0 z-[200] bg-[#020617]/95 backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeGallery();
            }
          }}
        >

          <div className="flex h-screen w-full flex-col">

            {/* Gallery Header */}
            <header className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#07152f] px-4 py-4 sm:px-6 lg:px-8">

              <div className="min-w-0 pr-4">

                <div className="flex flex-wrap items-center gap-2">

                  <span className="rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-blue-200">
                    {selectedProgram.category}
                  </span>

                  <span className="text-xs font-bold text-white/50">
                    Image {currentSlideIndex + 1} of {selectedProgram.images.length}
                  </span>

                </div>

                <h2 className="mt-1 truncate text-base font-black text-white sm:text-xl">
                  {selectedProgram.title}
                </h2>

              </div>

              {/* Highly visible close button */}
              <button
                type="button"
                onClick={closeGallery}
                aria-label="Exit gallery"
                className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-[#07152f] sm:h-14 sm:w-14"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>

              </button>

            </header>

            {/* Main Gallery Area */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black/40 px-3 py-4 sm:px-8 sm:py-6 lg:px-16 lg:py-8">

              <img
                src={selectedProgram.images[currentSlideIndex]}
                alt={`${selectedProgram.title} - Image ${currentSlideIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />

              {/* Previous */}
              {selectedProgram.images.length > 1 && (
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-gray-900 sm:left-6 sm:h-14 sm:w-14 lg:left-10"
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
                  className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-gray-900 sm:right-6 sm:h-14 sm:w-14 lg:right-10"
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

            {/* Gallery Bottom */}
            <div className="shrink-0 border-t border-white/10 bg-[#07152f]">

              <div className="px-3 py-3 sm:px-6">

                <div className="flex gap-2 overflow-x-auto pb-1">

                  {selectedProgram.images.map((image, index) => (

                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setCurrentSlideIndex(index)}
                      className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 sm:h-20 sm:w-28 ${
                        currentSlideIndex === index
                          ? 'border-blue-400 opacity-100 ring-2 ring-blue-400/30'
                          : 'border-white/10 opacity-50 hover:border-white/30 hover:opacity-100'
                      }`}
                    >

                      <img
                        src={image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />

                    </button>

                  ))}

                </div>

              </div>

              <div className="border-t border-white/10 px-4 py-3 text-center sm:px-6">

                <p className="text-xs font-medium text-white/40">
                  Use the left and right arrow keys to navigate
                  <span className="mx-2">•</span>
                  Press ESC to exit
                </p>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* =========================================================
          ARTICLE / READING VIEW
      ========================================================== */}

      {selectedArticle && (
        <div className="fixed inset-0 z-[250] overflow-y-auto bg-[#f7f9fc]">

          {/* Reading Header */}
          <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur-xl">

            <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">

              <div className="flex min-w-0 items-center gap-3">

                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-700 text-white sm:flex">

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
                      d="M5 4.5h10A2.5 2.5 0 0 1 17.5 7v12.5H7A2.5 2.5 0 0 1 4.5 17V5.5A1 1 0 0 1 5.5 4.5H5Z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.5 19.5H19a1 1 0 0 0 1-1V7a2.5 2.5 0 0 0-2.5-2.5"
                    />
                  </svg>

                </div>

                <div className="min-w-0">

                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-indigo-600">
                    VFAW Program
                  </p>

                  <p className="truncate text-sm font-black text-gray-900 sm:text-base">
                    {selectedArticle.title}
                  </p>

                </div>

              </div>

              <button
                type="button"
                onClick={closeArticle}
                className="group flex h-11 shrink-0 items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-4 text-sm font-black text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>

                <span className="hidden sm:inline">
                  Close
                </span>

              </button>

            </div>

          </header>

          {/* Article */}
          <article className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

            <div className="text-center">

              <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-indigo-700">
                {selectedArticle.category}
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                {selectedArticle.title}
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                {selectedArticle.description}
              </p>

            </div>

            {/* Featured Image */}
            <div className="mt-12 overflow-hidden rounded-3xl border-2 border-gray-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]">

              <img
                src={selectedArticle.images[0]}
                alt={selectedArticle.title}
                className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[500px]"
              />

            </div>

            {/* Introduction */}
            <div className="mt-12">

              <p className="text-xl font-bold leading-9 text-gray-700 sm:text-2xl">
                {selectedArticle.article.introduction}
              </p>

            </div>

            {/* Objectives */}
            <section className="mt-14">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-700 text-white">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-6 w-6"
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

                <h2 className="text-3xl font-black text-gray-900">
                  Program Objectives
                </h2>

              </div>

              <div className="mt-7 space-y-4">

                {selectedArticle.article.objectives.map(
                  (objective, index) => (
                    <div
                      key={objective}
                      className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                    >

                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-black text-indigo-700">
                        {index + 1}
                      </div>

                      <p className="text-base leading-7 text-gray-600">
                        {objective}
                      </p>

                    </div>
                  )
                )}

              </div>

            </section>

            {/* Activities */}
            <section className="mt-14">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75h7.5M8.25 10.5h7.5M8.25 14.25h4.5"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 3.75h13.5A1.5 1.5 0 0 1 20.25 5.25v13.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5Z"
                    />
                  </svg>

                </div>

                <h2 className="text-3xl font-black text-gray-900">
                  Key Activities
                </h2>

              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                {selectedArticle.article.activities.map(
                  (activity) => (
                    <div
                      key={activity}
                      className="rounded-2xl border-2 border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg"
                    >

                      <div className="flex gap-3">

                        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-600" />

                        <p className="text-sm font-semibold leading-6 text-gray-600">
                          {activity}
                        </p>

                      </div>

                    </div>
                  )
                )}

              </div>

            </section>

            {/* Impact */}
            <section className="mt-14 rounded-3xl bg-gradient-to-br from-[#07152f] via-[#10285a] to-[#173b79] p-7 text-white shadow-xl sm:p-10">

              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">
                Program Impact
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Why this program matters
              </h2>

              <p className="mt-5 text-base leading-8 text-blue-100/80 sm:text-lg">
                {selectedArticle.article.impact}
              </p>

            </section>

            {/* Gallery preview */}
            {selectedArticle.images.length > 1 && (
              <section className="mt-14">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-600">
                      Program Documentation
                    </p>

                    <h2 className="mt-2 text-3xl font-black text-gray-900">
                      Explore the gallery
                    </h2>

                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      closeArticle();
                      setTimeout(() => {
                        openGallery(selectedArticle);
                      }, 50);
                    }}
                    className="hidden rounded-xl bg-indigo-700 px-5 py-3 text-sm font-black text-white transition-all duration-300 hover:bg-indigo-800 sm:inline-flex"
                  >
                    View All
                  </button>

                </div>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">

                  {selectedArticle.images.slice(0, 6).map(
                    (image, index) => (

                      <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() => {
                          closeArticle();

                          setTimeout(() => {
                            setSelectedProgram(selectedArticle);
                            setCurrentSlideIndex(index);
                            document.body.style.overflow = 'hidden';
                          }, 50);
                        }}
                        className="group relative h-36 overflow-hidden rounded-2xl border-2 border-gray-100 bg-white sm:h-48"
                      >

                        <img
                          src={image}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />

                      </button>

                    )
                  )}

                </div>

              </section>
            )}

            {/* Bottom CTA */}
            <div className="mt-16 border-t border-gray-200 pt-10 text-center">

              <p className="text-sm font-bold text-gray-500">
                Want to support animal welfare?
              </p>

              <Link
                to="/get-involved"
                onClick={closeArticle}
                className="mt-4 inline-flex items-center gap-3 rounded-xl bg-indigo-700 px-7 py-4 font-black text-white shadow-lg shadow-indigo-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-800"
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

            </div>

          </article>

        </div>
      )}

    </main>
  );
};

export default Programs;
