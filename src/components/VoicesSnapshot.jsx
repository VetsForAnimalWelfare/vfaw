import React, { useEffect, useState } from "react";

const voices = [
  {
    name: "Mr. Janma Jaya Gaire",
    role: "Campus Chief",
    image: "/voice/campus chief.JPG",
    text: "Vets for Animal Welfare (VFAW) embodies the true spirit of veterinary compassion and responsibility. Through their tireless efforts — from treating and feeding street animals to conducting welfare programs, vaccination drives, animal birth control initiatives, and educational sessions — they are making a lasting difference both within and beyond our campus. By empowering veterinary students with practical experience and a profound sense of empathy, VFAW is shaping the future of animal welfare. We are proud to support and stand alongside such a dedicated and impactful organization.",
  },
  {
    name: "Sandesh Bhusal",
    role: "Semester: 4th",
    image: "/voice/Sandesh.jpg",
    text: "While working on the ABC (Animal Birth Control) program, I realized how important humane population management is for improving the lives of both stray animals and people. The experience helped me understand that controlling stray animal populations is not simply about reducing numbers—it is about promoting animal welfare, preventing unnecessary suffering, and creating a safer and healthier relationship between animals and communities. Through the program, I learned that humane approaches such as sterilization, vaccination, and proper care can create long-term positive changes. These efforts help prevent the uncontrolled growth of stray animal populations while also reducing the risks of disease transmission, injuries, and conflicts between humans and animals.",
  },
  {
    name: "Eliza Gautam",
    role: "Semester: 7th",
    image: "/voice/Eliza Gautam.png",
    text: "Feeding street dogs during World Veterinary Day made me feel deeply connected to them. The experience showed me that even simple acts of kindness can bring comfort, happiness, and hope to innocent animals living on the streets.",
  },
  {
    name: "Bibek Kumar Chaudhary",
    role: "Semester: 7th",
    image: "/voice/Bibek Kumar Chaudhary.png",
    text: "Volunteering in the anti-rabies vaccination program made me proud to contribute to a cause that protects both animals and people. The experience gave me a deeper understanding of how important prevention, awareness, and responsible veterinary action are for the health of our communities.",
  },
];

const VoicesSnapshot = () => {
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isPaused || selectedVoice) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) =>
        (previousIndex + 1) % voices.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, selectedVoice]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedVoice && event.key === "Escape") {
        setSelectedVoice(null);
      }

      if (!selectedVoice) {
        if (event.key === "ArrowRight") {
          handleNext();
        }

        if (event.key === "ArrowLeft") {
          handlePrevious();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVoice]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);

    setCurrentIndex((previousIndex) =>
      previousIndex === 0
        ? voices.length - 1
        : previousIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);

    setCurrentIndex((previousIndex) =>
      (previousIndex + 1) % voices.length
    );
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const handleToggleAutoPlay = () => {
    setIsAutoPlaying((previousState) => !previousState);
  };

  const currentVoice = voices[currentIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbfd] via-white to-[#eef7fb] py-24">

      {/* Background Decoration */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#1671b8 1px, transparent 1px), linear-gradient(90deg, #1671b8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-5 py-2 shadow-sm">

            <span className="h-2 w-2 rounded-full bg-[#1671b8] shadow-[0_0_12px_rgba(22,113,184,0.6)]" />

            <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#1671b8]">
              COMMUNITY VOICES
            </span>

          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#13232f] sm:text-5xl lg:text-6xl">

            Voices of{" "}

            <span className="bg-gradient-to-r from-[#075183] via-[#1671b8] to-[#38bdf8] bg-clip-text text-transparent">
              VFAW
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6c7f8c] sm:text-lg">

            Real experiences from the people who learn, volunteer,
            contribute, and grow with Vets For Animal Welfare.

          </p>

        </div>


        {/* Main Testimonial Area */}

        <div
          className="relative mx-auto max-w-6xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Main Card */}

          <div className="relative overflow-hidden rounded-[32px] border border-[#d9e7ef] bg-white shadow-[0_30px_80px_rgba(11,66,101,0.12)]">

            {/* Top Accent */}

            <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-[#075183] via-[#1671b8] to-[#38bdf8]" />


            {/* Decorative Glow */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#38bdf8]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#1671b8]/10 blur-3xl" />


            <div className="relative grid min-h-[470px] grid-cols-1 lg:grid-cols-[330px_1fr]">


              {/* Profile Section */}

              <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#052f4d] via-[#075183] to-[#1671b8] px-8 py-14 text-center">

                {/* Background Circle */}

                <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full border border-white/10" />

                <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full border border-white/10" />


                {/* Slide Number */}

                <div className="absolute left-7 top-7 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-[0.16em] text-white/80 backdrop-blur-md">

                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(voices.length).padStart(2, "0")}

                </div>


                {/* Image */}

                <div className="relative">

                  <div className="absolute inset-0 scale-110 rounded-full bg-sky-300/20 blur-2xl" />

                  <img
                    src={currentVoice.image}
                    alt={currentVoice.name}
                    className="relative h-40 w-40 rounded-full border-[5px] border-white/20 object-cover shadow-[0_20px_45px_rgba(0,0,0,0.3)]"
                  />

                </div>


                {/* Name */}

                <h3 className="relative mt-7 text-2xl font-extrabold text-white">

                  {currentVoice.name}

                </h3>


                {/* Role */}

                <div className="relative mt-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">

                  <span className="text-xs font-semibold tracking-wide text-sky-100">

                    {currentVoice.role}

                  </span>

                </div>


                {/* Community Label */}

                <div className="relative mt-8 flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] text-white/50">

                  <span className="h-px w-8 bg-white/30" />

                  VFAW COMMUNITY

                  <span className="h-px w-8 bg-white/30" />

                </div>

              </div>


              {/* Content Section */}

              <div className="relative flex flex-col justify-between px-8 py-12 sm:px-12 lg:px-16">


                {/* Quote Icon */}

                <div className="absolute right-8 top-7 text-[120px] font-serif leading-none text-[#1671b8]/[0.06]">

                  “

                </div>


                <div className="relative">


                  <div className="mb-7 flex items-center gap-3">

                    <div className="h-px w-10 bg-[#1671b8]" />

                    <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#1671b8]">

                      THEIR EXPERIENCE

                    </span>

                  </div>


                  <blockquote className="max-w-3xl text-xl font-medium leading-[1.9] text-[#3d535f] sm:text-2xl">

                    “{currentVoice.text}”

                  </blockquote>

                </div>


                {/* Bottom Controls */}

                <div className="relative mt-10 flex flex-col gap-6 border-t border-[#e3edf2] pt-7 sm:flex-row sm:items-center sm:justify-between">


                  {/* Navigation Dots */}

                  <div className="flex items-center gap-3">

                    {voices.map((voice, index) => (

                      <button
                        key={voice.name}
                        type="button"
                        onClick={() => handleDotClick(index)}
                        aria-label={`View testimonial ${index + 1}`}
                        className={`group relative h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "w-10 bg-[#1671b8]"
                            : "w-3 bg-[#cbdde8] hover:bg-[#75b5d5]"
                        }`}
                      >

                        {index === currentIndex && isAutoPlaying && !isPaused && (

                          <span className="absolute inset-0 animate-pulse rounded-full bg-[#38bdf8]/30" />

                        )}

                      </button>

                    ))}

                  </div>


                  {/* Controls */}

                  <div className="flex items-center gap-3">


                    {/* Previous */}

                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d5e3eb] bg-white text-[#1671b8] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1671b8] hover:bg-[#eef8fc] hover:shadow-md"
                      aria-label="Previous testimonial"
                    >

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
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>

                    </button>


                    {/* Autoplay */}

                    <button
                      type="button"
                      onClick={handleToggleAutoPlay}
                      className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#d5e3eb] bg-[#f8fbfd] px-4 text-xs font-bold text-[#496675] transition-all duration-300 hover:border-[#1671b8] hover:text-[#1671b8]"
                    >

                      {isAutoPlaying ? (

                        <>
                          <span>Ⅱ</span>
                          Pause
                        </>

                      ) : (

                        <>
                          <span>▶</span>
                          Play
                        </>

                      )}

                    </button>


                    {/* Next */}

                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#075183] to-[#1671b8] text-white shadow-[0_8px_20px_rgba(22,113,184,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(22,113,184,0.35)]"
                      aria-label="Next testimonial"
                    >

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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* View Full Story */}

          <div className="mt-10 text-center">

            <button
              type="button"
              onClick={() => setSelectedVoice(currentVoice)}
              className="group inline-flex items-center gap-3 rounded-xl bg-[#13232f] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(19,35,47,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1671b8] hover:shadow-[0_18px_40px_rgba(22,113,184,0.25)]"
            >

              Read Full Testimonial

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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>

            </button>

          </div>

        </div>

      </div>


      {/* =====================================================
          FULL TESTIMONIAL MODAL
      ===================================================== */}

      {selectedVoice && (

        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#06131c]/70 p-4 backdrop-blur-md"
          onClick={() => setSelectedVoice(null)}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[28px] border border-white/20 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Modal Top */}

            <div className="relative overflow-hidden bg-gradient-to-br from-[#052f4d] via-[#075183] to-[#1671b8] px-8 py-10 sm:px-12">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

              <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl" />


              {/* Close Button */}

              <button
                type="button"
                onClick={() => setSelectedVoice(null)}
                aria-label="Close testimonial"
                className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-[#1671b8]"
              >

                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

              </button>


              <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">

                <img
                  src={selectedVoice.image}
                  alt={selectedVoice.name}
                  className="h-24 w-24 rounded-full border-4 border-white/20 object-cover shadow-xl"
                />

                <div>

                  <span className="text-[10px] font-bold tracking-[0.18em] text-sky-200">

                    VFAW COMMUNITY VOICE

                  </span>

                  <h3 className="mt-2 text-3xl font-extrabold text-white">

                    {selectedVoice.name}

                  </h3>

                  <p className="mt-2 text-sm font-medium text-sky-100">

                    {selectedVoice.role}

                  </p>

                </div>

              </div>

            </div>


            {/* Modal Content */}

            <div className="relative px-8 py-10 sm:px-12 sm:py-12">

              <div className="absolute left-8 top-4 text-8xl font-serif leading-none text-[#1671b8]/5">

                “

              </div>

              <p className="relative text-base leading-9 text-[#4b616d] sm:text-lg sm:leading-9">

                {selectedVoice.text}

              </p>


              <div className="mt-10 flex items-center gap-3 border-t border-[#e3edf2] pt-7">

                <div className="h-1.5 w-1.5 rounded-full bg-[#1671b8]" />

                <span className="text-[10px] font-bold tracking-[0.16em] text-[#8a9da8]">

                  VETS FOR ANIMAL WELFARE

                </span>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default VoicesSnapshot;
