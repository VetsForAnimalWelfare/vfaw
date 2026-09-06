import React, { useEffect, useState } from "react";

const voices = [
  {
    name: "Mr. Janma Jaya Gaire",
    role: "Campus Chief",
    image: "/voice/campus chief.JPG",
    text: "Vets for Animal Welfare (VFAW) reflects the true spirit of veterinary compassion, responsibility, and service. Through initiatives such as treatment and feeding of street animals, vaccination campaigns, animal birth control programs, welfare activities, and educational sessions, the organization is creating a meaningful impact both within and beyond the campus. By providing veterinary students with practical exposure and strengthening their sense of empathy and professional responsibility, VFAW is helping shape a more compassionate future for animal welfare. We are proud to support and stand alongside such a dedicated and impactful organization."
  },
  {
    name: "Sandesh Bhusal",
    role: "Semester: 4th",
    image: "/voice/Sandesh.jpg",
    text: "My experience working in the Animal Birth Control (ABC) program helped me understand the importance of humane and sustainable population management. I learned that responsible stray animal management is not simply about reducing numbers; it is about improving animal welfare, preventing unnecessary suffering, and building safer and healthier relationships between animals and communities. Humane approaches such as sterilization, vaccination, and continued care can create meaningful long-term change while reducing disease risks, injuries, and human–animal conflict."
  },
  {
    name: "Eliza Gautam",
    role: "Semester: 7th",
    image: "/voice/Eliza Gautam.png",
    text: "Participating in the street animal feeding initiative during World Veterinary Day was a deeply meaningful experience. It reminded me that even simple acts of kindness and care can make a significant difference in the lives of vulnerable animals. The experience strengthened my connection with animal welfare and reinforced the importance of compassion in veterinary practice."
  },
  {
    name: "Bibek Kumar Chaudhary",
    role: "Semester: 7th",
    image: "/voice/Bibek Kumar Chaudhary.png",
    text: "Volunteering in the anti-rabies vaccination program was both a valuable learning experience and a source of professional pride. The program provided a deeper understanding of the importance of preventive healthcare in protecting animals and communities. It reinforced how veterinary interventions can contribute directly to public health, animal welfare, and safer human–animal relationships."
  }
];

const VoicesSnapshot = () => {
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  /* ===============================
     AUTO PLAY
  =============================== */

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % voices.length
      );
    }, 5500);

    return () => clearInterval(interval);
  }, [isHovered]);

  /* ===============================
     NAVIGATION
  =============================== */

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

  const currentVoice = voices[currentIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50 py-16 lg:py-20">

      {/* Background Decoration */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-200/20 blur-3xl rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===============================
            SECTION HEADER
        =============================== */}

        <div className="text-center mb-10 lg:mb-12">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-xs font-bold tracking-wider mb-5">

            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />

            COMMUNITY VOICES

          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">

            Voices of{" "}

            <span className="text-blue-600">
              VFAW
            </span>

          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">

            Experiences, perspectives, and reflections from members of
            the Vets for Animal Welfare community.

          </p>

        </div>


        {/* ===============================
            TESTIMONIAL CAROUSEL
        =============================== */}

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
              -translate-x-5
              lg:-translate-x-16
              z-20

              w-11
              h-11

              flex
              items-center
              justify-center

              rounded-full

              bg-white
              border
              border-slate-200

              text-blue-600

              shadow-lg

              transition-all
              duration-300

              hover:bg-blue-600
              hover:text-white
              hover:border-blue-600
              hover:scale-110

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
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />

            </svg>

          </button>


          {/* ===============================
              MAIN CARD
          =============================== */}

          <div
            className="
              relative

              min-h-[390px]

              bg-white

              rounded-3xl

              border
              border-slate-200

              shadow-[0_20px_60px_rgba(15,23,42,0.10)]

              overflow-hidden

              transition-all
              duration-500
            "
          >

            {/* TOP ACCENT */}

            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600" />


            {/* Decorative Quote */}

            <div className="absolute top-7 right-8 text-[120px] leading-none font-serif text-blue-50 pointer-events-none select-none">

              “

            </div>


            {/* CONTENT */}

            <div className="relative z-10 p-7 sm:p-10 lg:p-12">

              <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-10">


                {/* PROFILE */}

                <div className="flex-shrink-0">

                  <div className="relative">

                    <div className="
                      absolute
                      inset-0
                      rounded-full
                      bg-blue-400/20
                      blur-xl
                      scale-110
                    " />

                    <img
                      src={currentVoice.image}
                      alt={currentVoice.name}
                      className="
                        relative

                        w-28
                        h-28

                        sm:w-32
                        sm:h-32

                        lg:w-36
                        lg:h-36

                        rounded-full

                        object-cover

                        border-[5px]
                        border-white

                        ring-1
                        ring-blue-100

                        shadow-xl
                      "
                    />

                  </div>

                </div>


                {/* TEXT CONTENT */}

                <div className="flex-1 text-center md:text-left">

                  <div className="
                    inline-flex
                    items-center
                    px-3
                    py-1

                    mb-4

                    rounded-full

                    bg-blue-50

                    text-blue-600

                    text-[10px]

                    font-extrabold

                    tracking-[0.15em]
                  ">

                    VFAW COMMUNITY MEMBER

                  </div>


                  <h3 className="
                    text-2xl
                    sm:text-3xl

                    font-bold

                    tracking-tight

                    text-slate-900

                    mb-2
                  ">

                    {currentVoice.name}

                  </h3>


                  <p className="
                    text-sm

                    font-semibold

                    text-blue-600

                    mb-6
                  ">

                    {currentVoice.role}

                  </p>


                  {/* TESTIMONIAL TEXT */}

                  <p className="
                    max-w-2xl

                    text-sm
                    sm:text-[15px]

                    leading-7
                    sm:leading-8

                    text-slate-600

                    font-normal
                  ">

                    "{currentVoice.text}"

                  </p>

                </div>

              </div>

            </div>


            {/* CARD FOOTER */}

            <div className="
              absolute
              bottom-0
              left-0
              right-0

              px-7
              sm:px-10

              py-4

              border-t
              border-slate-100

              bg-slate-50/70
            ">

              <div className="
                flex
                items-center
                justify-between
              ">

                <span className="
                  text-[10px]
                  font-bold
                  tracking-[0.12em]
                  text-slate-400
                ">

                  VETS FOR ANIMAL WELFARE

                </span>


                {/* AUTO PLAY STATUS */}

                <div className="
                  flex
                  items-center
                  gap-2

                  text-[10px]

                  font-semibold

                  text-slate-400
                ">

                  <span
                    className={`
                      w-2
                      h-2
                      rounded-full

                      ${
                        isHovered
                          ? "bg-slate-300"
                          : "bg-green-500 animate-pulse"
                      }
                    `}
                  />

                  {isHovered
                    ? "AUTO PLAY PAUSED"
                    : "AUTO PLAY"
                  }

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
              translate-x-5
              lg:translate-x-16
              z-20

              w-11
              h-11

              flex
              items-center
              justify-center

              rounded-full

              bg-white
              border
              border-slate-200

              text-blue-600

              shadow-lg

              transition-all
              duration-300

              hover:bg-blue-600
              hover:text-white
              hover:border-blue-600
              hover:scale-110

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
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />

            </svg>

          </button>

        </div>


        {/* ===============================
            DOT NAVIGATION
        =============================== */}

        <div className="
          flex
          justify-center
          items-center
          gap-3
          mt-8
        ">

          {voices.map((voice, index) => (

            <button
              key={voice.name}
              onClick={() => handleDotClick(index)}
              aria-label={`View testimonial ${index + 1}`}
              className={`
                transition-all
                duration-300

                rounded-full

                ${
                  index === currentIndex
                    ? "w-8 h-2.5 bg-blue-600"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-blue-400"
                }
              `}
            />

          ))}

        </div>


        {/* ===============================
            VIEW FULL TESTIMONIAL
        =============================== */}

        <div className="text-center mt-9">

          <button
            onClick={() => setSelectedVoice(currentVoice)}
            className="
              inline-flex
              items-center
              justify-center
              gap-3

              px-6
              py-3.5

              rounded-xl

              bg-slate-900

              text-white

              text-sm
              font-semibold

              shadow-lg

              transition-all
              duration-300

              hover:bg-blue-600
              hover:-translate-y-1
              hover:shadow-xl

              active:translate-y-0
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

        </div>

      </div>


      {/* ===============================
          MODAL
      =============================== */}

      {selectedVoice && (

        <div
          className="
            fixed
            inset-0
            z-[9999]

            flex
            items-center
            justify-center

            p-4

            bg-slate-950/60

            backdrop-blur-md
          "
          onClick={() => setSelectedVoice(null)}
        >

          <div
            className="
              relative

              w-full
              max-w-3xl

              max-h-[85vh]

              overflow-y-auto

              bg-white

              rounded-3xl

              shadow-2xl

              border
              border-white/40
            "
            onClick={(event) => event.stopPropagation()}
          >


            {/* MODAL HEADER */}

            <div className="
              sticky
              top-0

              z-20

              flex
              items-center
              justify-between

              p-6

              bg-white/95

              backdrop-blur-md

              border-b
              border-slate-100
            ">

              <div className="flex items-center gap-4">

                <img
                  src={selectedVoice.image}
                  alt={selectedVoice.name}
                  className="
                    w-14
                    h-14

                    rounded-full

                    object-cover

                    border-2
                    border-blue-100

                    shadow-md
                  "
                />

                <div>

                  <h3 className="
                    text-lg
                    sm:text-xl

                    font-bold

                    text-slate-900
                  ">

                    {selectedVoice.name}

                  </h3>

                  <p className="
                    text-sm
                    font-medium
                    text-blue-600
                  ">

                    {selectedVoice.role}

                  </p>

                </div>

              </div>


              {/* CLOSE BUTTON */}

              <button
                onClick={() => setSelectedVoice(null)}
                aria-label="Close testimonial"
                className="
                  w-10
                  h-10

                  flex
                  items-center
                  justify-center

                  rounded-full

                  bg-slate-100

                  text-slate-500

                  transition-all
                  duration-300

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

            </div>


            {/* MODAL CONTENT */}

            <div className="p-7 sm:p-10">

              <div className="
                absolute
                right-8
                top-24

                text-[120px]

                font-serif

                leading-none

                text-blue-50

                select-none

                pointer-events-none
              ">

                “

              </div>


              <p className="
                relative
                z-10

                text-[15px]
                sm:text-base

                leading-8
                sm:leading-9

                text-slate-600
              ">

                "{selectedVoice.text}"

              </p>

            </div>


            {/* MODAL FOOTER */}

            <div className="
              px-7
              sm:px-10

              py-5

              border-t
              border-slate-100

              bg-slate-50
            ">

              <div className="
                flex
                justify-between
                items-center
              ">

                <span className="
                  text-[10px]
                  font-bold
                  tracking-[0.15em]
                  text-slate-400
                ">

                  VFAW • COMMUNITY VOICES

                </span>


                <button
                  onClick={() => setSelectedVoice(null)}
                  className="
                    text-sm
                    font-semibold
                    text-blue-600

                    hover:text-blue-800
                  "
                >

                  Close

                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default VoicesSnapshot;
