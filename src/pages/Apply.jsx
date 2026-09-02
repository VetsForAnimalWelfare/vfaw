import { useState } from "react";

const Apply = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Animal Welfare Training Program",
      description: "Training program focused on animal welfare and community development.",
      formLink:
        "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
    },
    {
      id: 2,
      title: "Veterinary Workshop",
      description: "Upcoming veterinary education and practical training workshop.",
      formLink:
        "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
    },
    {
      id: 3,
      title: "Youth Development Program",
      description: "A program designed for youth learning and development.",
      formLink:
        "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
    },
  ];

  return (
    <div className="apply-page">
      {!selectedProgram ? (
        <>
          <h1>Apply for a Program</h1>
          <p>Select one of our upcoming programs.</p>

          <div className="program-list">
            {programs.map((program) => (
              <div className="program-card" key={program.id}>
                <h2>{program.title}</h2>
                <p>{program.description}</p>

                <button onClick={() => setSelectedProgram(program)}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button onClick={() => setSelectedProgram(null)}>
            ← Back to Programs
          </button>

          <h1>{selectedProgram.title}</h1>

          <iframe
            src={selectedProgram.formLink}
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title={selectedProgram.title}
          >
            Loading…
          </iframe>
        </>
      )}
    </div>
  );
};

export default Apply;
