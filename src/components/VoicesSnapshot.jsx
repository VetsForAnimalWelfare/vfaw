import React, { useState, useEffect } from "react";

const voices = [
  {
    name: "Mr. Janma Jaya Gaire",
    role: "Campus Chief",
    image: "/voice/campus chief.JPG",
    text: "Vets for Animal Welfare (VFAW) reflects the true values of veterinary compassion, responsibility, and service. Through initiatives such as street animal care, feeding programs, vaccination campaigns, animal birth control activities, and educational sessions, the organization is creating a meaningful and lasting impact. By providing veterinary students with practical exposure while strengthening their sense of empathy and social responsibility, VFAW is helping shape a more compassionate future for animal welfare. We are proud to support and stand alongside such a dedicated and impactful organization.",
  },
  {
    name: "Sandesh Bhusal",
    role: "Semester: 4th",
    image: "/voice/Sandesh.jpg",
    text: "My experience in the Animal Birth Control program helped me understand the importance of humane and sustainable population management. It demonstrated that effective stray animal management is not simply about reducing population numbers, but about improving animal welfare, preventing unnecessary suffering, and promoting safer relationships between animals and communities. Through sterilization, vaccination, and responsible care, long-term positive changes can be achieved for both animals and society.",
  },
  {
    name: "Eliza Gautam",
    role: "Semester: 7th",
    image: "/voice/Eliza Gautam.png",
    text: "Participating in street animal feeding activities during World Veterinary Day was a deeply meaningful experience. It reminded me that even small acts of compassion can have a significant impact on the lives of vulnerable animals and can inspire greater awareness and kindness within our communities.",
  },
  {
    name: "Bibek Kumar Chaudhary",
    role: "Semester: 7th",
    image: "/voice/Bibek Kumar Chaudhary.png",
    text: "Volunteering in the anti-rabies vaccination program gave me valuable practical experience and strengthened my understanding of preventive animal healthcare. The program highlighted the important role of vaccination in protecting animal health, safeguarding communities, and reducing the risk of zoonotic disease transmission.",
  },
];

const VoicesSnapshot = () => {
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % voices.length;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + voices.length) % voices.length
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % voices.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  const currentVoice = voices[currentIndex];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN BLUE CONTAINER */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-[#0A4F86]
            shadow-[0_30px_80px_rgba(8,55,95,0.25)]
            px-5
            py-10
            sm:px-10
            sm:py-12
            lg:px-16
            lg:py-14
          "
        >

          {/* Decorative Background */}

          <div
            className="
              absolute
              -top-40
              -right-40
              w-[500px]
              h-[500px]
              rounded-full
              bg-blue-400/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-52
              -left-40
              w-[500px]
              h-[500px]
              rounded-full
              bg-cyan-300/10
              blur-3xl
            "
          />

          {/* Small Grid Pattern */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.05]
              pointer-events-none
            "
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="relative z-10">

            {/* HEADER */}

            <div className="text-center mb-9 sm:mb-12">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-[10px]
                  sm:text-xs
                  font-bold
                  tracking-[0.2em]
                  text-blue-100
                "
              >
                COMMUNITY PERSPECTIVES
              </span>

              <h2
                className="
                  mt-5
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-extrabold
                  tracking-tight
                  text-white
                "
              >
                Voices of VFAW
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  mx-auto
                  text-sm
                  sm:text-base
                  leading-relaxed
                  text-blue-100/80
                "
              >
                Experiences and reflections from members of our
                veterinary community and animal welfare initiatives.
              </p>

            </div>


            {/* TESTIMONIAL CAROUSEL */}

            <div
              className="relative max-w-5xl mx-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >

              {/* PREVIOUS BUTTON */}

              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="
                  absolute
                  left-0
                  top-1/2
                  -translate-y-1/2
                  -translate-x-3
                  sm:-translate-x-6
                  lg:-translate-x-10
                  z-20

                  w-11
                  h-11

                  flex
                  items-center
                  justify-center

                  rounded-full

                  bg-white
                  text-[#0A4F86]

                  shadow-xl

                  transition-all
                  duration-300

                  hover:scale-110
                  hover:bg-blue-50
                  active:scale-95
                "
              >

                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>

              </button>


              {/* MAIN CARD */}

              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[26px]

                  bg-white

                  border
                  border-white/40

                  shadow-[0_25px_60px_rgba(0,0,0,0.20)]

                  transition-all
                  duration-500
                "
              >

                {/* Top Accent */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-1.5

                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-cyan-400
                  "
                />


                <div
                  className="
                    p-6
                    sm:p-8
                    lg:p-10
                  "
                >

                  <div
                    className="
                      flex
                      flex-col
                      md:flex-row

                      items-center

                      gap-7
                      lg:gap-10
                    "
                  >


                    {/* PROFESSIONAL IMAGE FRAME */}

                    <div
                      className="
                        relative
                        flex-shrink-0
                      "
                    >

                      {/* Outer Decorative Square */}

                      <div
                        className="
                          absolute
                          -inset-3

                          rounded-[28px]

                          border
                          border-blue-200

                          rotate-6

                          bg-blue-50
                        "
                      />

                      {/* Second Decorative Layer */}

                      <div
                        className="
                          absolute
                          -inset-2

                          rounded-[26px]

                          bg-gradient-to-br
                          from-[#0A4F86]
                          via-blue-600
                          to-cyan-400

                          -rotate-3
                        "
                      />

                      {/* Image Container */}

                      <div
                        className="
                          relative

                          w-32
                          h-32

                          sm:w-36
                          sm:h-36

                          lg:w-40
                          lg:h-40

                          overflow-hidden

                          rounded-[24px]

                          bg-white

                          p-1.5

                          shadow-xl
                        "
                      >

                        <img
                          src={currentVoice.image}
                          alt={currentVoice.name}
                          className="
                            w-full
                            h-full

                            object-cover

                            rounded-[19px]
                          "
                        />

                      </div>


                      {/* Small Verified Badge */}

                      <div
                        className="
                          absolute
                          -right-3
                          -bottom-3

                          w-10
                          h-10

                          flex
                          items-center
                          justify-center

                          rounded-full

                          bg-[#0A4F86]

                          border-4
                          border-white

                          text-white

                          shadow-lg
                        "
                      >

                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>

                      </div>

                    </div>


                    {/* TEXT AREA */}

                    <div
                      className="
                        flex-1
                        text-center
                        md:text-left
                      "
                    >

                      {/* Quote Symbol */}

                      <div
                        className="
                          mb-3

                          text-5xl
                          font-serif

                          leading-none

                          text-blue-100

                          md:text-left
                        "
                      >
                        “
                      </div>


                      <h3
                        className="
                          text-xl
                          sm:text-2xl

                          font-extrabold

                          tracking-tight

                          text-slate-900
                        "
                      >
                        {currentVoice.name}
                      </h3>


                      <div
                        className="
                          mt-2

                          inline-flex

                          items-center
                          gap-2

                          px-3
                          py-1.5

                          rounded-full

                          bg-blue-50

                          text-[10px]
                          sm:text-xs

                          font-bold

                          tracking-wide

                          text-[#0A4F86]
                        "
                      >

                        <span
                          className="
                            w-1.5
                            h-1.5
                            rounded-full
                            bg-cyan-500
                          "
                        />

                        {currentVoice.role}

                      </div>


                      {/* PROFESSIONAL SMALLER QUOTE */}

                      <p
                        className="
                          mt-5

                          text-sm
                          sm:text-[15px]

                          leading-7

                          text-slate-600

                          max-w-2xl

                          mx-auto
                          md:mx-0
                        "
                      >
                        {currentVoice.text}
                      </p>


                      {/* Bottom Controls */}

                      <div
                        className="
                          mt-7

                          flex

                          flex-wrap

                          justify-center
                          md:justify-start

                          items-center

                          gap-3
                        "
                      >

                        {/* VIEW FULL */}

                        <button
                          onClick={() =>
                            setSelectedVoice(currentVoice)
                          }
                          className="
                            inline-flex

                            items-center
                            gap-2

                            px-5
                            py-2.5

                            rounded-xl

                            bg-[#0A4F86]

                            text-xs

                            font-bold

                            text-white

                            shadow-lg

                            transition-all
                            duration-300

                            hover:bg-[#083f6b]
                            hover:-translate-y-0.5
                            active:scale-95
                          "
                        >
                          Read Full Experience

                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>

                        </button>


                        {/* PLAY / PAUSE */}

                        <button
                          onClick={toggleAutoPlay}
                          className="
                            inline-flex

                            items-center
                            gap-2

                            px-4
                            py-2.5

                            rounded-xl

                            border

                            border-slate-200

                            bg-white

                            text-xs

                            font-semibold

                            text-slate-600

                            transition-all
                            duration-300

                            hover:border-blue-300
                            hover:bg-blue-50
                            hover:text-[#0A4F86]
                          "
                        >

                          {isAutoPlaying ? (
                            <>
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <rect
                                  x="6"
                                  y="5"
                                  width="4"
                                  height="14"
                                  rx="1"
                                />

                                <rect
                                  x="14"
                                  y="5"
                                  width="4"
                                  height="14"
                                  rx="1"
                                />
                              </svg>

                              Pause Auto Play
                            </>
                          ) : (
                            <>
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>

                              Resume Auto Play
                            </>
                          )}

                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* NEXT BUTTON */}

              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="
                  absolute
                  right-0
                  top-1/2
                  -translate-y-1/2
                  translate-x-3
                  sm:translate-x-6
                  lg:translate-x-10
                  z-20

                  w-11
                  h-11

                  flex
                  items-center
                  justify-center

                  rounded-full

                  bg-white
                  text-[#0A4F86]

                  shadow-xl

                  transition-all
                  duration-300

                  hover:scale-110
                  hover:bg-blue-50
                  active:scale-95
                "
              >

                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>

              </button>

            </div>


            {/* DOTS */}

            <div
              className="
                flex
                justify-center
                items-center
                gap-2
                mt-9
              "
            >

              {voices.map((voice, index) => (

                <button
                  key={voice.name}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      index === currentIndex
                        ? "w-8 h-2.5 bg-white"
                        : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                    }
                  `}
                />

              ))}

            </div>


            {/* STATUS */}

            <div
              className="
                text-center
                mt-5

                text-[10px]

                font-semibold

                tracking-[0.15em]

                uppercase

                text-blue-200
              "
            >

              {isHovered
                ? "Auto play paused while viewing"
                : isAutoPlaying
                ? "Auto playing testimonials"
                : "Auto play manually paused"}

            </div>

          </div>

        </div>

      </div>


      {/* FULL TESTIMONIAL MODAL */}

      {selectedVoice && (

        <div
          className="
            fixed
            inset-0

            z-[9999]

            flex
            items-center
            justify-center

            bg-slate-950/70

            backdrop-blur-md

            p-4
          "
          onClick={() => setSelectedVoice(null)}
        >

          <div
            className="
              relative

              w-full
              max-w-3xl

              max-h-[90vh]

              overflow-y-auto

              rounded-[28px]

              bg-white

              shadow-2xl

              p-7
              sm:p-10
            "
            onClick={(event) => event.stopPropagation()}
          >


            {/* Close */}

            <button
              onClick={() => setSelectedVoice(null)}
              aria-label="Close testimonial"
              className="
                absolute

                top-5
                right-5

                w-10
                h-10

                flex
                items-center
                justify-center

                rounded-full

                bg-slate-100

                text-slate-500

                transition-all

                hover:bg-red-50
                hover:text-red-500
                hover:rotate-90
              "
            >

              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

            </button>


            {/* Modal Profile */}

            <div
              className="
                flex
                flex-col
                sm:flex-row

                items-center
                sm:items-start

                gap-6
              "
            >

              <div
                className="
                  p-1.5

                  rounded-[22px]

                  bg-gradient-to-br

                  from-[#0A4F86]
                  via-blue-500
                  to-cyan-400

                  shadow-xl
                "
              >

                <img
                  src={selectedVoice.image}
                  alt={selectedVoice.name}
                  className="
                    w-28
                    h-28

                    rounded-[17px]

                    object-cover
                  "
                />

              </div>


              <div className="text-center sm:text-left">

                <p
                  className="
                    text-[10px]

                    font-bold

                    tracking-[0.18em]

                    text-[#0A4F86]
                  "
                >
                  VFAW COMMUNITY VOICE
                </p>

                <h3
                  className="
                    mt-2

                    text-2xl

                    font-extrabold

                    text-slate-900
                  "
                >
                  {selectedVoice.name}
                </h3>

                <p
                  className="
                    mt-1

                    text-sm

                    font-semibold

                    text-blue-600
                  "
                >
                  {selectedVoice.role}
                </p>

              </div>

            </div>


            {/* Full Text */}

            <div
              className="
                mt-9

                border-t

                border-slate-100

                pt-8
              "
            >

              <div
                className="
                  text-6xl

                  font-serif

                  leading-none

                  text-blue-100
                "
              >
                “
              </div>

              <p
                className="
                  mt-2

                  text-[15px]
                  sm:text-base

                  leading-8

                  text-slate-600
                "
              >
                {selectedVoice.text}
              </p>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default VoicesSnapshot;
