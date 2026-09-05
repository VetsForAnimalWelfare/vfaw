const About = () => {
  const values = [
    {
      title: 'Animal Welfare',
      description:
        'We are committed to promoting the well-being of all animals through ethical and evidence-based practices.',
    },
    {
      title: 'Education',
      description:
        'We believe in empowering communities through knowledge and practical training in animal care.',
    },
    {
      title: 'Community Impact',
      description:
        'We work collaboratively with local communities to create sustainable change in animal welfare.',
    },
    {
      title: 'Student Development',
      description:
        'We focus on nurturing the next generation of veterinary leaders through hands-on experiences.',
    },
  ];

  const advisoryCommittee = [
    {
      name: 'Dr. Subash Rimal',
      role: 'Founder President, Asst. Prof. Paklihawa Campus',
      image: '/advisors/Subash.jpg',
    },
    {
      name: 'Dr. Grihamani Nepal',
      role: 'Asst. Prof. Paklihawa Campus',
      image: '/advisors/Grihamani.jpg',
    },
    {
      name: 'Dr. Amrit Shrestha',
      role: 'Former President',
      image: '/advisors/Amrit.jpg',
    },
    {
      name: 'Mr. Kamal Acharya',
      role: 'Former President',
      image: '/advisors/Kamal.jpg',
    },
  ];

  const executiveLeadership = [
    {
      name: 'Shankhar Rimal',
      role: 'President',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/shankar rimal.jpg',
    },
    {
      name: 'Kavya Ghimire',
      role: 'Vice-President',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Kavya Ghimire.jpg',
    },
    {
      name: 'Anisha Ranabhat',
      role: 'Vice-President',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Anisha Ranabhat.jpg',
    },
    {
      name: 'Bibas Tharu',
      role: 'Secretary',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Bibas Tharu.jpg',
    },
  ];

  const executiveMembers = [
    {
      name: 'Madan Krishna Neupane',
      role: 'Social Media Coordinator',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Madan Krishna Neupane.jpg',
    },
    {
      name: 'Jasmine Gharti Magar',
      role: 'Extension Coordinator',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Jasmine Gharti Magar.jpg',
    },
    {
      name: 'Sujal Ghimire',
      role: 'Extension Coordinator',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Sujal Ghimire.jpg',
    },
    {
      name: 'Bibek Sunrait',
      role: 'Vice-Secretary',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Bibek Sunrait.jpg',
    },
    {
      name: 'Mohan Karki',
      role: 'Treasurer',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Mohan Karki.jpg',
    },
    {
      name: 'Jageshwor Yadav',
      role: 'Board Member',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Jageshwor Yadav.jpg',
    },
    {
      name: 'Janak Raj Joshi',
      role: 'Jr.Board Member',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/jjphoto.jpg',
    },
    {
      name: 'Bipin Dahal',
      role: 'Jr.Board Member',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Bipin Dahal.jpg',
    },
    {
      name: 'Bal Krishna Acharya',
      role: 'Jr.Board Member',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Bal Krishna Acharya.jpg',
    },
    {
      name: 'Bibash Lamichhane',
      role: 'Social Media Wing',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Bibash Lamichhane.jpg',
    },
    {
      name: 'Samip Acharya',
      role: 'Content Creator',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Samip Acharya.jpg',
    },
    {
      name: 'Nishant Karki',
      role: 'Content Creator',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Nishant Karki.jpg',
    },
    {
      name: 'Resham Neupane',
      role: 'Extension Wing',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Resham Neupane.jpg',
    },
    {
      name: 'Surakshya Ghimire',
      role: 'Extension Wing',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Surakshya Ghimire.jpg',
    },
    {
      name: 'Dipendra Joshi',
      role: 'Animal Welfare Wing',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Dipendra Joshi.jpg',
    },
    {
      name: 'Arpita Thapa',
      role: 'Animal Welfare Wing',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Arpita Thapa.jpg',
    },
    {
      name: 'Diwakar Chapai',
      role: 'Animal Welfare Wing',
      image:
        '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Diwakar Chapai.jpg',
    },
  ];

  const foundingCommittee = [
    {
      name: 'Dr. Subash Rimal',
      role: 'President',
      image: '/advisors/Subash.jpg',
    },
    {
      name: 'Dr. Asmita Shrestha',
      role: 'Vice-President',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. asmita shrestha.JPG',
    },
    {
      name: 'Dr. Anil Adhikari',
      role: 'Secretary',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. Anil adhikari.PNG',
    },
    {
      name: 'Dr. Rabina Ghimire',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. rabina ghimire.JPG',
    },
    {
      name: 'Dr. Rabindra Tiwari',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. rabindra tiwari.JPG',
    },
    {
      name: 'Dr. Krishna Khadka',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. krishna khadka.JPG',
    },
    {
      name: 'Dr. Sagar Reshmi Magar',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. sagar reshmi magar.JPG',
    },
    {
      name: 'Dr. Astha Thapa',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. astha thapa.JPG',
    },
    {
      name: 'Dr. Monalisha Khanal',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. monalisha khanal.JPG',
    },
    {
      name: 'Dr. Romi Kunwar',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. romi kunwar.JPG',
    },
    {
      name: 'Dr. Keshav Kharel',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. keshav kharel.PNG',
    },
    {
      name: 'Dr. Sirjana Bamrel',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. sirjana bamrel.JPG',
    },
    {
      name: 'Dr. Binita Tamang',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. binita tamang.jpg',
    },
    {
      name: 'Dr. Pritvi Thapa',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. prithvi thapa.jpg',
    },
    {
      name: 'Dr. Raj Kumar Tharu',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. raj kumar tharu.jpg',
    },
    {
      name: 'Dr. Sumana Gyawali',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. sumana gyawali.JPG',
    },
    {
      name: 'Dr. Ghanashyam Dahal',
      role: 'Member',
      image:
        '/Founding committee-20250503T010429Z-001/Founding committee/Dr. ghanashyam dahal.JPG',
    },
  ];

  const TeamCard = ({ member }) => {
    return (
      <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="h-72 w-full overflow-hidden bg-slate-100 p-3">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="border-t border-slate-100 p-5">
          <h3 className="text-lg font-bold text-slate-900">
            {member.name}
          </h3>

          <p className="mt-2 text-sm font-semibold leading-6 text-indigo-600">
            {member.role}
          </p>
        </div>
      </div>
    );
  };

  const SectionHeading = ({ title, description }) => {
    return (
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-slate-600">
            {description}
          </p>
        )}

        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-indigo-600" />
      </div>
    );
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-indigo-700 text-white">

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-500 opacity-20 blur-3xl" />

        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-400 opacity-20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center sm:py-32">

          <div className="mx-auto mb-7 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
            Student-Led Animal Welfare Organization
          </div>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            About{' '}
            <span className="text-indigo-300">
              VFAW
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-indigo-100 sm:text-xl">
            Vets for Animal Welfare (VFAW) - A student-led organization
            dedicated to animal welfare and veterinary education.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <div className="min-w-[150px] rounded-2xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
                Founded
              </p>
              <p className="mt-1 text-xl font-bold">
                2017 AD
              </p>
            </div>

            <div className="min-w-[150px] rounded-2xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
                Institution
              </p>
              <p className="mt-1 text-xl font-bold">
                IAAS, TU
              </p>
            </div>

            <div className="min-w-[150px] rounded-2xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
                Focus
              </p>
              <p className="mt-1 text-xl font-bold">
                Animal Welfare
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* OUR STORY */}
      <section className="bg-slate-50 py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            title="Our Story"
            description="A student-driven journey dedicated to creating meaningful and lasting change in animal welfare."
          />

          <div className="grid gap-8 lg:grid-cols-2">

            {/* FIRST BLUE CARD */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 text-white shadow-xl shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10">

              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />

              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-950/20" />

              <div className="relative">

                <div className="mb-8 h-1 w-16 rounded-full bg-white/70" />

                <h3 className="text-2xl font-bold sm:text-3xl">
                  Where We Began
                </h3>

                <p className="mt-6 text-lg leading-8 text-blue-50">
                  Vets for Animal Welfare (VFAW) is a non-political,
                  non-beneficial, non-governmental, student-led organization
                  operating under the esteemed Institute of Agriculture and
                  Animal Science (IAAS), Tribhuvan University. Founded in 2017 AD
                  (2074 BS) by visionary IAAS, Paklihawa Campus students, VFAW
                  began with a focused mission: to assist and care for street
                  animals under the guiding principle,
                  <span className="font-bold text-white">
                    {' '}
                    "Animal Welfare for a Better World."
                  </span>
                </p>

              </div>

            </div>


            {/* SECOND BLUE CARD */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 p-8 text-white shadow-xl shadow-indigo-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10">

              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />

              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-950/20" />

              <div className="relative">

                <div className="mb-8 h-1 w-16 rounded-full bg-white/70" />

                <h3 className="text-2xl font-bold sm:text-3xl">
                  Growing Our Impact
                </h3>

                <p className="mt-6 text-lg leading-8 text-indigo-50">
                  Since its inception, VFAW has steadily expanded its outreach,
                  evolving to address the health and welfare of farm animals and
                  promoting broader veterinary welfare initiatives across Nepal.
                  Today, VFAW stands at the forefront of advancing animal health
                  and well-being through comprehensive veterinary services,
                  community engagement, and educational programs.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PRESIDENT */}
      <section className="bg-white py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            title="A Message from Our President"
          />

          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-50 shadow-xl">

            <div className="grid lg:grid-cols-[320px_1fr]">

              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 to-indigo-950 p-10 text-center text-white">

                <div className="h-52 w-52 overflow-hidden rounded-full border-8 border-white/20 bg-white shadow-xl">

                  <img
                    src="/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/shankar rimal.jpg"
                    alt="Shankhar Rimal"
                    className="h-full w-full object-cover"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Shankhar Rimal
                </h3>

                <p className="mt-2 text-indigo-200">
                  President, VFAW
                </p>

              </div>

              <div className="flex items-center p-8 sm:p-12">

                <blockquote className="text-lg leading-8 text-slate-600 sm:text-xl">

                  <span className="mb-4 block text-5xl font-black leading-none text-indigo-200">
                    “
                  </span>

                  At Vets for Animal Welfare, we are driven by a shared
                  purpose—to promote compassionate care for animals while
                  empowering veterinary students to become ethical, informed,
                  and proactive leaders. Through advocacy, education, and
                  hands-on action, we strive to build a future where animal
                  welfare is a priority and veterinary voices lead the way to
                  change.

                </blockquote>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* VISION MISSION ACTIVITIES */}
      <section className="bg-slate-50 py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            title="Vision, Mission & Activities"
            description="Our purpose, direction and commitment to animal welfare."
          />

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mb-6 h-1 w-14 rounded-full bg-white/70" />

              <h3 className="text-2xl font-bold">
                Vision
              </h3>

              <p className="mt-5 leading-8 text-blue-50">
                To create a healthier and more compassionate world for street
                dogs and farm animals by promoting welfare-driven practices and
                spreading knowledge within communities.
              </p>

            </div>


            <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-900 p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mb-6 h-1 w-14 rounded-full bg-white/70" />

              <h3 className="text-2xl font-bold">
                Mission
              </h3>

              <p className="mt-5 leading-8 text-indigo-50">
                To advance the well-being of street and farm animals through
                student-led veterinary outreach, public education, and
                collaborative community initiatives that empower both people
                and animals.
              </p>

            </div>


            <div className="rounded-3xl bg-gradient-to-br from-slate-700 to-slate-900 p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mb-6 h-1 w-14 rounded-full bg-white/70" />

              <h3 className="text-2xl font-bold">
                Key Activities
              </h3>

              <ul className="mt-5 space-y-4 text-slate-200">

                <li className="border-b border-white/10 pb-3">
                  Animal Birth Control (ABC) programs
                </li>

                <li className="border-b border-white/10 pb-3">
                  Vaccination and disease prevention
                </li>

                <li className="border-b border-white/10 pb-3">
                  Educational webinars and workshops
                </li>

                <li className="border-b border-white/10 pb-3">
                  Hands-on training sessions
                </li>

                <li>
                  Veterinary outreach programs
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* VALUES */}
      <section className="bg-white py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            title="Our Values"
            description="These core principles guide everything we do."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => (

              <div
                key={value.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl"
              >

                <div className="mb-6 h-1 w-12 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-20" />

                <h3 className="text-xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* OUR TEAM */}
      <section className="bg-slate-50 py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            title="Our Team"
            description="Dedicated individuals working together for animal welfare and veterinary development."
          />


          {/* ADVISORY COMMITTEE */}
          <div className="mb-24">

            <div className="mb-8 flex items-center gap-5">

              <div className="h-10 w-1 rounded-full bg-indigo-600" />

              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Advisory Committee
                </h2>

                <p className="mt-1 text-slate-600">
                  Guidance, mentorship and leadership.
                </p>
              </div>

            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

              {advisoryCommittee.map((member) => (
                <TeamCard
                  key={member.name}
                  member={member}
                />
              ))}

            </div>

          </div>


          {/* EXECUTIVE COMMITTEE */}
          <div className="mb-24">

            <div className="mb-12 text-center">

              <div className="mb-4 inline-flex rounded-full bg-indigo-100 px-5 py-2 text-sm font-bold text-indigo-700">
                Current Leadership
              </div>

              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
                Executive Committee 2025/2026
              </h2>

            </div>


            <h3 className="mb-6 text-xl font-bold text-slate-700">
              Leadership
            </h3>

            <div className="mb-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

              {executiveLeadership.map((member) => (
                <TeamCard
                  key={member.name}
                  member={member}
                />
              ))}

            </div>


            <h3 className="mb-6 text-xl font-bold text-slate-700">
              Committee Members
            </h3>

            <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

              {executiveMembers.map((member) => (
                <TeamCard
                  key={member.name}
                  member={member}
                />
              ))}

            </div>

          </div>


          {/* FOUNDING COMMITTEE */}
          <div>

            <div className="mb-12 text-center">

              <div className="mb-4 inline-flex rounded-full bg-indigo-100 px-5 py-2 text-sm font-bold text-indigo-700">
                Our Foundation
              </div>

              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
                Founding Committee
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                The individuals who laid the foundation of Vets for Animal
                Welfare.
              </p>

            </div>

            <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              {foundingCommittee.map((member) => (
                <TeamCard
                  key={member.name}
                  member={member}
                />
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* FINAL SECTION */}
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-indigo-800 py-24 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <div className="mx-auto h-1 w-20 rounded-full bg-indigo-400" />

          <h2 className="mt-8 text-4xl font-black tracking-tight sm:text-5xl">
            Animal Welfare for a Better World
          </h2>

          <p className="mt-6 text-lg leading-8 text-indigo-100">
            Together, through compassion, knowledge, education and action,
            we can create a healthier and more compassionate future for
            animals and communities.
          </p>

        </div>

      </section>

    </div>
  );
};

export default About;
