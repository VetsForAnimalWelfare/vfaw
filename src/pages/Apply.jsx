import { useState } from "react";

const Apply = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Animal Welfare Training Program",
      description:
        "Training program focused on animal welfare and community development.",
      date: "Coming Soon",
      formLink:
        "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
    },
    {
      id: 2,
      title: "Veterinary Workshop",
      description:
        "Upcoming veterinary education and practical training workshop.",
      date: "Coming Soon",
      formLink:
        "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
    },
    {
      id: 3,
      title: "Youth Development Program",
      description:
        "A program designed for youth learning and development.",
      date: "Coming Soon",
      formLink:
        "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-28 pb-20 px-4 sm:px-6 lg:px-8">

      {!selectedProgram ? (
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
              PROGRAM APPLICATIONS
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Apply for a Program
            </h1>

            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Explore our upcoming programs and choose the one you would like
              to participate in.
            </p>
          </div>

          {/* 3D Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {programs.map((program) => (
              <div
                key={program.id}
                className="group perspective"
              >
                <div
                  className="
                    relative h-full
                    bg-white
                    rounded-3xl
                    border border-gray-100
                    shadow-[0_15px_35px_rgba(0,0,0,0.10)]
                    p-8
                    transition-all
                    duration-500
                    ease-out
                    transform
                    group-hover:-translate-y-4
                    group-hover:rotate-[1deg]
                    group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]
                  "
                >

                  {/* Top glow */}
                  <div
                    className="
                      absolute top-0 left-0 right-0 h-1.5
                      bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600
                      rounded-t-3xl
                      transition-all duration-500
                      group-hover:h-2
                    "
                  />

                  {/* Program Number */}
                  <div className="flex justify-between items-center mb-7">

                    <div
                      className="
                        w-14 h-14
                        rounded-2xl
                        bg-emerald-50
                        flex items-center justify-center
                        text-emerald-600
                        text-xl font-extrabold
                        shadow-inner
                        transition-all duration-500
                        group-hover:bg-emerald-600
                        group-hover:text-white
                        group-hover:scale-110
                        group-hover:rotate-6
                      "
                    >
                      {String(program.id).padStart(2, "0")}
                    </div>

                    <span
                      className="
                        px-3 py-1.5
                        rounded-full
                        bg-emerald-50
                        text-emerald-700
                        text-xs
                        font-bold
                        transition-all duration-300
                        group-hover:bg-emerald-600
                        group-hover:text-white
                      "
                    >
                      {program.date}
                    </span>

                  </div>

                  {/* Title */}
                  <h2
                    className="
                      text-2xl
                      font-extrabold
                      text-gray-900
                      mb-4
                      transition-colors duration-300
                      group-hover:text-emerald-700
                    "
                  >
                    {program.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {program.description}
                  </p>

                  {/* Apply Button */}
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="
                      w-full
                      py-3.5
                      px-6
                      rounded-xl
                      bg-gray-900
                      text-white
                      font-bold
                      transition-all
                      duration-300
                      hover:bg-emerald-600
                      hover:shadow-lg
                      hover:shadow-emerald-200
                      hover:scale-[1.02]
                      active:scale-95
                    "
                  >
                    Apply Now →
                  </button>

                  {/* Bottom decorative shadow */}
                  <div
                    className="
                      absolute -bottom-3 left-6 right-6 h-5
                      bg-emerald-600/10
                      blur-xl
                      rounded-full
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-500
                    "
                  />

                </div>
              </div>
            ))}

          </div>
        </div>

      ) : (

        /* Google Form */
        <div className="max-w-5xl mx-auto">

          <button
            onClick={() => setSelectedProgram(null)}
            className="
              mb-6
              px-5 py-3
              rounded-xl
              bg-white
              text-gray-700
              font-semibold
              shadow-md
              hover:bg-emerald-50
              hover:text-emerald-700
              transition-all
            "
          >
            ← Back to Programs
          </button>

          <div
            className="
              bg-white
              rounded-3xl
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              overflow-hidden
              border border-gray-100
            "
          >

            <div className="p-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <h1 className="text-3xl font-extrabold">
                {selectedProgram.title}
              </h1>

              <p className="mt-2 text-emerald-50">
                Complete the application form below.
              </p>
            </div>

            <div className="p-3">
              <iframe
                src={selectedProgram.formLink}
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title={selectedProgram.title}
                className="rounded-xl"
              >
                Loading…
              </iframe>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Apply;
