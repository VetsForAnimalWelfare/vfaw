import React, { useEffect, useMemo, useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = [
    'All',
    'Animal Welfare',
    'Animal Birth Control',
    'Street Dog Feeding',
    'Rabies Vaccination',
    'Farm Animal Vaccination',
    'Farm Animal Survey',
    'Training and Awareness',
    'Virtual Sessions',
    'In-house Capacity Building'
  ];

  const images = [
    {
      src: '/capacity/p1.png',
      category: 'Basics of Hematological Tools and Techniques',
      description: 'Sep 5, Paklihawa Campus and Farm'
    },
    {
      src: '/capacity/p2.png',
      category: 'Basics of Hematological Tools and Techniques',
      description: 'Sep 5, Paklihawa Campus and Farm'
    },
    {
      src: '/capacity/p3.png',
      category: 'Basics of Hematological Tools and Techniques',
      description: 'Sep 5, Paklihawa Campus and Farm'
    },
    {
      src: '/capacity/p4.png',
      category: 'Basics of Hematological Tools and Techniques',
      description: 'Sep 5, Paklihawa Campus and Farm'
    },
    {
      src: '/capacity/p5.png',
      category: 'Basics of Hematological Tools and Techniques',
      description: 'Sep 5, Paklihawa Campus and Farm'
    },
    {
      src: '/capacity/p6.png',
      category: 'Basics of Hematological Tools and Techniques',
      description: 'Sep 5, Paklihawa Campus and Farm'
    },
    {
      src: '/capacity/p7.png',
      category: 'Basics of Hematological Tools and Techniques',
      description: 'Sep 5, Paklihawa Campus and Farm'
    },
    {
      src: '/capacity/p8.png',
      category: 'Basics of Hematological Tools and Techniques',
      description: 'Sep 5, Paklihawa Campus and Farm'
    },
    {
      src: '/capacity/p9.png',
      category: 'Basics of Hematological Tools and Techniques',
      description: 'Sep 5, Paklihawa Campus and Farm'
    },
    {
      src: '/capacity/p10.png',
      category: 'Basics of Hematological Tools and Techniques',
      description: 'Sep 5, Paklihawa Campus and Farm'
    },

    {
      src: '/welfare/IMG_2124.JPG',
      category: 'Animal Welfare',
      description: 'Recent animal care and treatment'
    },
    {
      src: '/welfare/IMG_2127.JPG',
      category: 'Animal Welfare',
      description: 'Animal welfare activities'
    },
    {
      src: '/welfare/IMG_2123.JPG',
      category: 'Animal Welfare',
      description: 'Medical interventions'
    },
    {
      src: '/welfare/IMG_2126.JPG',
      category: 'Animal Welfare',
      description: 'Animal care services'
    },
    {
      src: '/welfare/2.JPG',
      category: 'Animal Welfare',
      description: 'Before and after treatment cases'
    },
    {
      src: '/welfare/3.JPG',
      category: 'Animal Welfare',
      description: 'Animal care and rehabilitation'
    },
    {
      src: '/welfare/4.JPG',
      category: 'Animal Welfare',
      description: 'Emergency medical services'
    },
    {
      src: '/welfare/5.JPG',
      category: 'Animal Welfare',
      description: 'Veterinary care and treatment'
    },
    {
      src: '/welfare/6.JPG',
      category: 'Animal Welfare',
      description: 'Animal health check-ups'
    },
    {
      src: '/welfare/7.JPG',
      category: 'Animal Welfare',
      description: 'Post-treatment care'
    },
    {
      src: '/welfare/8.jpg',
      category: 'Animal Welfare',
      description: 'Animal welfare initiatives'
    },
    {
      src: '/welfare/9.jpg',
      category: 'Animal Welfare',
      description: 'Community outreach programs'
    },
    {
      src: '/welfare/10.jpg',
      category: 'Animal Welfare',
      description: 'Animal rescue operations'
    },
    {
      src: '/welfare/11.jpg',
      category: 'Animal Welfare',
      description: 'Medical interventions'
    },
    {
      src: '/welfare/12.jpg',
      category: 'Animal Welfare',
      description: 'Animal care services'
    },
    {
      src: '/welfare/13.jpg',
      category: 'Animal Welfare',
      description: 'Veterinary assistance'
    },
    {
      src: '/welfare/14.jpg',
      category: 'Animal Welfare',
      description: 'Animal welfare programs'
    },
    {
      src: '/welfare/15.jpg',
      category: 'Animal Welfare',
      description: 'Medical treatment cases'
    },
    {
      src: '/welfare/16.jpg',
      category: 'Animal Welfare',
      description: 'Animal care initiatives'
    },
    {
      src: '/welfare/17.jpg',
      category: 'Animal Welfare',
      description: 'Veterinary services'
    },
    {
      src: '/welfare/18.jpg',
      category: 'Animal Welfare',
      description: 'Animal welfare activities'
    },

    {
      src: '/control/IMG_20240216_000413_Original.JPG',
      category: 'Animal Birth Control',
      description: 'Latest birth control program implementation'
    },
    {
      src: '/control/IMG-20240215-WA0021_Original.JPG',
      category: 'Animal Birth Control',
      description: 'Recent vaccination drive'
    },
    {
      src: '/control/IMG_1974.JPG',
      category: 'Animal Birth Control',
      description: 'Birth control activities'
    },
    {
      src: '/control/IMG_1973.JPG',
      category: 'Animal Birth Control',
      description: 'Vaccination program'
    },
    {
      src: '/control/IMG_2007.JPG',
      category: 'Animal Birth Control',
      description: 'Community outreach'
    },
    {
      src: '/control/IMG_1975.JPG',
      category: 'Animal Birth Control',
      description: 'Animal care services'
    },
    {
      src: '/control/IMG_1996.JPG',
      category: 'Animal Birth Control',
      description: 'Medical interventions'
    },
    {
      src: '/control/IMG_1976.JPG',
      category: 'Animal Birth Control',
      description: 'Veterinary care'
    },
    {
      src: '/control/IMG_2003.JPG',
      category: 'Animal Birth Control',
      description: 'Animal welfare'
    },
    {
      src: '/control/IMG_1972.JPG',
      category: 'Animal Birth Control',
      description: 'Community programs'
    },
    {
      src: '/control/IMG_1977.JPG',
      category: 'Animal Birth Control',
      description: 'Medical services'
    },
    {
      src: '/control/IMG_2004.JPG',
      category: 'Animal Birth Control',
      description: 'Animal care'
    },
    {
      src: '/control/1.png',
      category: 'Animal Birth Control',
      description: 'Birth control program implementation'
    },
    {
      src: '/control/2.jpg',
      category: 'Animal Birth Control',
      description: 'Vaccination drives for street animals'
    },
    {
      src: '/control/3.jpg',
      category: 'Animal Birth Control',
      description: 'Community awareness programs'
    },

    {
      src: '/feeding/IMG_2119.JPG',
      category: 'Street Dog Feeding',
      description: 'Latest feeding program'
    },
    {
      src: '/feeding/IMG_1988.JPG',
      category: 'Street Dog Feeding',
      description: 'Recent feeding initiative'
    },
    {
      src: '/feeding/IMG_1987.JPG',
      category: 'Street Dog Feeding',
      description: 'Community feeding program'
    },
    {
      src: '/feeding/IMG_1989.JPG',
      category: 'Street Dog Feeding',
      description: 'Regular feeding activities'
    },
    {
      src: '/feeding/IMG_1985.JPG',
      category: 'Street Dog Feeding',
      description: 'Animal care through feeding'
    },
    {
      src: '/feeding/IMG_1995.JPG',
      category: 'Street Dog Feeding',
      description: 'Feeding program implementation'
    },
    {
      src: '/feeding/IMG_2111.JPG',
      category: 'Street Dog Feeding',
      description: 'Community outreach'
    },
    {
      src: '/feeding/IMG_2117.JPG',
      category: 'Street Dog Feeding',
      description: 'Regular feeding services'
    },
    {
      src: '/feeding/IMG_1990.JPG',
      category: 'Street Dog Feeding',
      description: 'Animal welfare through feeding'
    },
    {
      src: '/feeding/IMG_2116.JPG',
      category: 'Street Dog Feeding',
      description: 'Feeding initiatives'
    },
    {
      src: '/feeding/IMG_1983.JPG',
      category: 'Street Dog Feeding',
      description: 'Community feeding'
    },
    {
      src: '/feeding/IMG_2126.JPG',
      category: 'Street Dog Feeding',
      description: 'Regular feeding program'
    },
    {
      src: '/feeding/1.JPG',
      category: 'Street Dog Feeding',
      description: 'Regular feeding programs'
    },
    {
      src: '/feeding/2.JPG',
      category: 'Street Dog Feeding',
      description: 'Community feeding initiatives'
    },
    {
      src: '/feeding/3.jpg',
      category: 'Street Dog Feeding',
      description: 'Volunteer feeding activities'
    },
    {
      src: '/feeding/4.jpg',
      category: 'Street Dog Feeding',
      description: 'Feeding program activities'
    },
    {
      src: '/feeding/5.JPG',
      category: 'Street Dog Feeding',
      description: 'Community feeding services'
    },

    {
      src: '/rabies/IMG_2008.JPG',
      category: 'Rabies Vaccination',
      description: 'Latest vaccination drive'
    },
    {
      src: '/rabies/IMG_1978.JPG',
      category: 'Rabies Vaccination',
      description: 'Community vaccination program'
    },
    {
      src: '/rabies/IMG_2002.JPG',
      category: 'Rabies Vaccination',
      description: 'Vaccination activities'
    },
    {
      src: '/rabies/IMG_2009.JPG',
      category: 'Rabies Vaccination',
      description: 'Animal vaccination services'
    },
    {
      src: '/rabies/IMG_2010.JPG',
      category: 'Rabies Vaccination',
      description: 'Vaccination program implementation'
    },
    {
      src: '/rabies/3.jpg',
      category: 'Rabies Vaccination',
      description: 'Community vaccination drive'
    },
    {
      src: '/rabies/1.jpg',
      category: 'Rabies Vaccination',
      description: 'Canine vaccination program'
    },
    {
      src: '/rabies/2.jpg',
      category: 'Rabies Vaccination',
      description: 'Feline vaccination initiative'
    },

    {
      src: '/vaccination/7.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Latest vaccination program'
    },
    {
      src: '/vaccination/1.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Farm animal healthcare'
    },
    {
      src: '/vaccination/2.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Vaccination programs'
    },
    {
      src: '/vaccination/3.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Animal health check-ups'
    },
    {
      src: '/vaccination/4.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Veterinary services'
    },
    {
      src: '/vaccination/5.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Medical care'
    },
    {
      src: '/vaccination/6.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Animal welfare'
    },

    {
      src: '/survey/IMG_2134.JPG',
      category: 'Farm Animal Survey',
      description: 'Latest research and data collection'
    },
    {
      src: '/survey/IMG_1981.JPG',
      category: 'Farm Animal Survey',
      description: 'Recent field survey'
    },
    {
      src: '/survey/IMG_1980.JPG',
      category: 'Farm Animal Survey',
      description: 'Health assessment program'
    },
    {
      src: '/survey/IMG_2135.JPG',
      category: 'Farm Animal Survey',
      description: 'Animal welfare survey'
    },
    {
      src: '/survey/4.JPG',
      category: 'Farm Animal Survey',
      description: 'Survey activities'
    },
    {
      src: '/survey/3.JPG',
      category: 'Farm Animal Survey',
      description: 'Health assessment'
    },
    {
      src: '/survey/1.jpg',
      category: 'Farm Animal Survey',
      description: 'Research and data collection'
    },
    {
      src: '/survey/2.jpg',
      category: 'Farm Animal Survey',
      description: 'Field surveys'
    },

    {
      src: '/awareness/IMG_2024.JPG',
      category: 'Training and Awareness',
      description: 'Latest educational workshop'
    },
    {
      src: '/awareness/IMG_2016.JPG',
      category: 'Training and Awareness',
      description: 'Community training session'
    },
    {
      src: '/awareness/IMG_2023.JPG',
      category: 'Training and Awareness',
      description: 'Staff development program'
    },
    {
      src: '/awareness/IMG_2020.JPG',
      category: 'Training and Awareness',
      description: 'Training workshop'
    },
    {
      src: '/awareness/IMG_2019.JPG',
      category: 'Training and Awareness',
      description: 'Educational program'
    },
    {
      src: '/awareness/IMG_1993.JPG',
      category: 'Training and Awareness',
      description: 'Awareness campaign'
    },
    {
      src: '/awareness/IMG_2022.JPG',
      category: 'Training and Awareness',
      description: 'Training session'
    },
    {
      src: '/awareness/IMG_2017.JPG',
      category: 'Training and Awareness',
      description: 'Community workshop'
    },
    {
      src: '/awareness/IMG_2121.JPG',
      category: 'Training and Awareness',
      description: 'Educational initiative'
    },
    {
      src: '/awareness/IMG_2025.JPG',
      category: 'Training and Awareness',
      description: 'Training program'
    },
    {
      src: '/awareness/IMG_2018.JPG',
      category: 'Training and Awareness',
      description: 'Awareness session'
    },
    {
      src: '/awareness/1.jpg',
      category: 'Training and Awareness',
      description: 'Educational workshops'
    },
    {
      src: '/awareness/2.jpg',
      category: 'Training and Awareness',
      description: 'Community training'
    },
    {
      src: '/awareness/3.jpg',
      category: 'Training and Awareness',
      description: 'Awareness campaigns'
    },
    {
      src: '/awareness/4.JPG',
      category: 'Training and Awareness',
      description: 'Training programs'
    },
    {
      src: '/awareness/5.jpg',
      category: 'Training and Awareness',
      description: 'Educational initiatives'
    },
    {
      src: '/awareness/6.jpg',
      category: 'Training and Awareness',
      description: 'Community awareness'
    },
    {
      src: '/awareness/7.jpg',
      category: 'Training and Awareness',
      description: 'Training sessions'
    },
    {
      src: '/awareness/8.jpg',
      category: 'Training and Awareness',
      description: 'Educational programs'
    },
    {
      src: '/awareness/9.jpg',
      category: 'Training and Awareness',
      description: 'Awareness activities'
    },
    {
      src: '/awareness/10.jpg',
      category: 'Training and Awareness',
      description: 'Training workshops'
    },
    {
      src: '/awareness/11.jpg',
      category: 'Training and Awareness',
      description: 'Educational sessions'
    },
    {
      src: '/awareness/12.jpg',
      category: 'Training and Awareness',
      description: 'Community programs'
    },
    {
      src: '/awareness/13.jpg',
      category: 'Training and Awareness',
      description: 'Training initiatives'
    },
    {
      src: '/awareness/14.jpg',
      category: 'Training and Awareness',
      description: 'Educational activities'
    },
    {
      src: '/awareness/15.jpg',
      category: 'Training and Awareness',
      description: 'Awareness programs'
    },
    {
      src: '/awareness/16.jpg',
      category: 'Training and Awareness',
      description: 'Training activities'
    },

    {
      src: '/virtual/IMG_2120.JPG',
      category: 'Virtual Sessions',
      description: 'Latest online training program'
    },
    {
      src: '/virtual/IMG_1994.JPG',
      category: 'Virtual Sessions',
      description: 'Recent digital workshop'
    },
    {
      src: '/virtual/IMG_2114.JPG',
      category: 'Virtual Sessions',
      description: 'Online learning session'
    },
    {
      src: '/virtual/IMG_1997.JPG',
      category: 'Virtual Sessions',
      description: 'Virtual training program'
    },
    {
      src: '/virtual/IMG_2129.JPG',
      category: 'Virtual Sessions',
      description: 'Digital education'
    },
    {
      src: '/virtual/IMG_1998.JPG',
      category: 'Virtual Sessions',
      description: 'Online workshop'
    },
    {
      src: '/virtual/IMG_2013.JPG',
      category: 'Virtual Sessions',
      description: 'Virtual learning'
    },
    {
      src: '/virtual/IMG_1166.JPG',
      category: 'Virtual Sessions',
      description: 'Digital training'
    },
    {
      src: '/virtual/7.png',
      category: 'Virtual Sessions',
      description: 'Virtual education'
    },
    {
      src: '/virtual/6.jpg',
      category: 'Virtual Sessions',
      description: 'Online training programs'
    },
    {
      src: '/virtual/5.jpg',
      category: 'Virtual Sessions',
      description: 'Digital workshops'
    },
    {
      src: '/virtual/4.jpg',
      category: 'Virtual Sessions',
      description: 'Web-based learning'
    },
    {
      src: '/virtual/3.jpg',
      category: 'Virtual Sessions',
      description: 'Virtual education'
    },

    {
      src: '/capacity/1.JPG',
      category: 'In-house Capacity Building',
      description: 'Staff training'
    },
    {
      src: '/capacity/2.JPG',
      category: 'In-house Capacity Building',
      description: 'Volunteer development'
    },
    {
      src: '/capacity/3.jpg',
      category: 'In-house Capacity Building',
      description: 'Team building activities'
    },
    {
      src: '/capacity/4.jpg',
      category: 'In-house Capacity Building',
      description: 'Training sessions'
    },
    {
      src: '/capacity/5.jpg',
      category: 'In-house Capacity Building',
      description: 'Development activities'
    }
  ];

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') {
      return images;
    }

    return images.filter(
      (image) => image.category === selectedCategory
    );
  }, [selectedCategory]);

  const selectedImage =
    selectedImageIndex !== null
      ? filteredImages[selectedImageIndex]
      : null;

  const openImageModal = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = '';
  };

  const showPreviousImage = (event) => {
    if (event) {
      event.stopPropagation();
    }

    if (
      selectedImageIndex === null ||
      filteredImages.length === 0
    ) {
      return;
    }

    setSelectedImageIndex((current) =>
      current === 0
        ? filteredImages.length - 1
        : current - 1
    );
  };

  const showNextImage = (event) => {
    if (event) {
      event.stopPropagation();
    }

    if (
      selectedImageIndex === null ||
      filteredImages.length === 0
    ) {
      return;
    }

    setSelectedImageIndex((current) =>
      current === filteredImages.length - 1
        ? 0
        : current + 1
    );
  };

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (selectedImageIndex === null) {
        return;
      }

      if (event.key === 'Escape') {
        closeImageModal();
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage();
      }

      if (event.key === 'ArrowRight') {
        showNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyboard);

    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [selectedImageIndex, filteredImages.length]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-blue-950">

        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full border border-blue-800 opacity-40" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-blue-800 opacity-30" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-700 bg-blue-900 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              VFAW Visual Archive
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Our
              <span className="text-red-500"> Gallery</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
              Explore moments from our animal welfare, veterinary,
              vaccination, training, awareness and community programs.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

              <div className="rounded-2xl border border-blue-700 bg-blue-900 px-6 py-4">
                <p className="text-2xl font-black">
                  {images.length}
                </p>

                <p className="mt-1 text-xs uppercase tracking-widest text-blue-300">
                  Total Images
                </p>
              </div>

              <div className="rounded-2xl border border-blue-700 bg-blue-900 px-6 py-4">
                <p className="text-2xl font-black">
                  {categories.length - 1}
                </p>

                <p className="mt-1 text-xs uppercase tracking-widest text-blue-300">
                  Categories
                </p>
              </div>

              <div className="rounded-2xl border border-red-900 bg-red-950 px-6 py-4">
                <p className="text-2xl font-black text-red-400">
                  {filteredImages.length}
                </p>

                <p className="mt-1 text-xs uppercase tracking-widest text-red-300">
                  Showing
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="sticky top-0 z-30 border-b border-blue-900 bg-slate-950/95 backdrop-blur-xl">

        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

          <div className="mb-4 flex items-center justify-between gap-4">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                Explore
              </p>

              <h2 className="mt-1 text-lg font-bold text-white">
                Browse by Category
              </h2>
            </div>

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-blue-200">
                {filteredImages.length} images
              </p>

              <p className="text-xs text-slate-500">
                {selectedCategory}
              </p>
            </div>

          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">

            {categories.map((category) => {

              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedImageIndex(null);
                  }}
                  className={`
                    flex-shrink-0 rounded-xl border px-4 py-2.5
                    text-xs font-bold uppercase tracking-wide
                    transition-all duration-300
                    ${
                      isActive
                        ? 'border-red-500 bg-red-600 text-white shadow-lg shadow-red-900/30'
                        : 'border-blue-800 bg-blue-950 text-blue-200 hover:border-red-500 hover:bg-red-600 hover:text-white'
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}

          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-slate-950 py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-10 flex flex-col justify-between gap-6 border-b border-blue-900 pb-8 sm:flex-row sm:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                Visual Stories
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                {selectedCategory === 'All'
                  ? 'All Activities'
                  : selectedCategory}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                A collection of moments documenting our work,
                field activities and community impact.
              </p>

            </div>

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-red-500" />

              <span className="text-sm font-semibold text-blue-300">
                {filteredImages.length} photographs
              </span>

            </div>

          </div>

          {filteredImages.length > 0 ? (

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredImages.map((image, index) => (

                <article
                  key={`${image.src}-${index}`}
                  onClick={() => openImageModal(index)}
                  className="
                    group cursor-pointer
                    overflow-hidden
                    rounded-3xl
                    border border-blue-800
                    bg-blue-950
                    shadow-[0_18px_45px_rgba(0,0,0,0.35)]
                    transition-all duration-500
                    hover:-translate-y-3
                    hover:scale-[1.015]
                    hover:border-red-500
                    hover:bg-blue-900
                    hover:shadow-[0_25px_60px_rgba(220,38,38,0.28)]
                  "
                >

                  {/* IMAGE FRAME */}
                  <div className="relative m-3 overflow-hidden rounded-2xl border border-blue-800 bg-slate-900 shadow-inner">

                    <div className="absolute left-3 top-3 z-10">

                      <div className="rounded-lg border border-white/20 bg-blue-950/95 px-3 py-1.5 shadow-lg backdrop-blur-md">

                        <span className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-200">
                          VFAW
                        </span>

                      </div>

                    </div>

                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">

                      <img
                        src={image.src}
                        alt={image.description}
                        loading="lazy"
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-110
                        "
                      />

                      <div className="
                        absolute inset-0
                        bg-blue-950/0
                        transition-all duration-500
                        group-hover:bg-blue-950/20
                      " />

                      <div className="
                        pointer-events-none
                        absolute inset-0
                        rounded-xl
                        border-2 border-transparent
                        transition-all duration-500
                        group-hover:border-red-500
                      " />

                      <div className="
                        absolute bottom-4 right-4
                        translate-y-3
                        opacity-0
                        transition-all duration-500
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      ">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-red-600 text-white shadow-xl">

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />

                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>

                        </div>

                      </div>

                    </div>

                  </div>

                  {/* CARD CONTENT */}
                  <div className="px-5 pb-5 pt-2">

                    <div className="mb-3 flex items-center gap-2">

                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

                      <p className="line-clamp-1 text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                        {image.category}
                      </p>

                    </div>

                    <h3 className="
                      min-h-[48px]
                      text-base
                      font-bold
                      leading-6
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-red-400
                    ">
                      {image.description}
                    </h3>

                    <div className="mt-5 flex items-center justify-between border-t border-blue-800 pt-4">

                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        View Image
                      </span>

                      <span className="
                        flex h-8 w-8
                        items-center justify-center
                        rounded-lg
                        border border-blue-700
                        text-blue-300
                        transition-all duration-300
                        group-hover:border-red-500
                        group-hover:bg-red-600
                        group-hover:text-white
                      ">

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-3.5 w-3.5"
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

                      </span>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="rounded-3xl border border-blue-800 bg-blue-950 px-6 py-20 text-center">

              <h3 className="text-xl font-bold text-white">
                No Images Found
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                There are currently no photographs in this category.
              </p>

            </div>

          )}

        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (

        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-slate-950/98
            p-3
            sm:p-6
          "
          onClick={closeImageModal}
        >

          <div
            className="
              relative
              flex
              max-h-[96vh]
              w-full
              max-w-7xl
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-blue-800
              bg-blue-950
              shadow-[0_30px_100px_rgba(0,0,0,0.75)]
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-blue-800 bg-blue-950 px-4 py-4 sm:px-6">

              <div className="min-w-0 pr-4">

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-red-500" />

                  <p className="truncate text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">
                    {selectedImage.category}
                  </p>

                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Image {selectedImageIndex + 1} of {filteredImages.length}
                </p>

              </div>

              {/* LARGE VISIBLE CLOSE BUTTON */}
              <button
                type="button"
                onClick={closeImageModal}
                aria-label="Close image viewer"
                className="
                  relative
                  z-50
                  flex
                  h-12
                  w-12
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border-2
                  border-red-500
                  bg-red-600
                  text-white
                  shadow-lg
                  shadow-red-950/50
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-red-700
                  hover:shadow-xl
                  hover:shadow-red-900/60
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-400
                  focus:ring-offset-2
                  focus:ring-offset-blue-950
                "
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 6L6 18"
                  />
                </svg>

              </button>

            </div>

            {/* IMAGE AREA */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-slate-950 p-3 sm:p-6">

              {filteredImages.length > 1 && (

                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Previous image"
                  className="
                    absolute left-3 top-1/2 z-20
                    flex h-12 w-12
                    -translate-y-1/2
                    items-center justify-center
                    rounded-xl
                    border border-blue-700
                    bg-blue-950/95
                    text-white
                    shadow-xl
                    transition-all duration-300
                    hover:scale-110
                    hover:border-red-500
                    hover:bg-red-600
                  "
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 18l-6-6 6-6"
                    />
                  </svg>

                </button>

              )}

              <div className="relative flex max-h-[68vh] w-full items-center justify-center">

                <img
                  src={selectedImage.src}
                  alt={selectedImage.description}
                  className="
                    max-h-[68vh]
                    max-w-full
                    rounded-2xl
                    border-2
                    border-blue-800
                    bg-slate-900
                    p-1
                    object-contain
                    shadow-2xl
                  "
                />

              </div>

              {filteredImages.length > 1 && (

                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label="Next image"
                  className="
                    absolute right-3 top-1/2 z-20
                    flex h-12 w-12
                    -translate-y-1/2
                    items-center justify-center
                    rounded-xl
                    border border-blue-700
                    bg-blue-950/95
                    text-white
                    shadow-xl
                    transition-all duration-300
                    hover:scale-110
                    hover:border-red-500
                    hover:bg-red-600
                  "
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 18l6-6-6-6"
                    />
                  </svg>

                </button>

              )}

            </div>

            {/* MODAL FOOTER */}
            <div className="border-t border-blue-800 bg-blue-950 px-5 py-5 sm:px-7">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="min-w-0">

                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-500">
                    Program Activity
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                    {selectedImage.description}
                  </h3>

                </div>

                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="
                      rounded-xl
                      border border-blue-700
                      bg-blue-900
                      px-4 py-2.5
                      text-xs font-bold uppercase tracking-wider
                      text-blue-200
                      transition-all duration-300
                      hover:border-red-500
                      hover:bg-red-600
                      hover:text-white
                    "
                  >
                    Previous
                  </button>

                  <button
                    type="button"
                    onClick={showNextImage}
                    className="
                      rounded-xl
                      border border-red-500
                      bg-red-600
                      px-4 py-2.5
                      text-xs font-bold uppercase tracking-wider
                      text-white
                      transition-all duration-300
                      hover:bg-red-700
                    "
                  >
                    Next
                  </button>

                </div>

              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">

                <span>
                  ← Previous
                </span>

                <span>
                  → Next
                </span>

                <span>
                  ESC Close
                </span>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};

export default Gallery;
