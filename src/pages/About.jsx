const About = () => {
  const values = [
    {
      title: 'Animal Welfare',
      description:
        'We are committed to promoting the well-being of all animals through ethical and evidence-based practices.',
      icon: '🐾',
    },
    {
      title: 'Education',
      description:
        'We believe in empowering communities through knowledge and practical training in animal care.',
      icon: '🎓',
    },
    {
      title: 'Community Impact',
      description:
        'We work collaboratively with local communities to create sustainable change in animal welfare.',
      icon: '🌍',
    },
    {
      title: 'Student Development',
      description:
        'We focus on nurturing the next generation of veterinary leaders through hands-on experiences.',
      icon: '🚀',
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

  const TeamCard = ({ member }) => (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="h-72 w-full bg-slate-100 p-3">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="border-t border-slate-100 p-5">
        <h3 className="text-lg font-bold text-slate-900">
          {member.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-indigo-600">
          {member.role}
        </p>
      </div>
    </div>
  );

  const SectionHeading = ({ title, description }) => (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          {description}
        </p>
      )}

      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-indigo-600" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-800 to-blue-700 text-white">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-purple-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center sm:py-32">

          <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
            Student-Led Animal Welfare Organization
          </div>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            About VFAW
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-indigo-100 sm:text-xl">
            Vets for Animal Welfare (VFAW) - A student-led organization
            dedicated to animal welfare and veterinary education.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <div className="rounded-xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wider text-indigo-200">
                Founded
              </p>
              <p className="mt-1 text-xl font-bold">
                2017 AD
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wider text-indigo-200">
                Institution
              </p>
              <p className="mt-1 text-xl font-bold">
                IAAS, TU
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wider text-indigo-200">
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
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <SectionHeading
            title="Our Story"
            description="Our journey from a student initiative to a growing force for animal welfare."
          />

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-lg sm:p-10">

              <div className="mb-6 text-4xl">
                🐾
              </div>

              <p className="text-lg leading-8 text-slate-600">
                Vets for Animal Welfare (VFAW) is a non-political,
                non-beneficial, non-governmental, student-led organization
                operating under the esteemed Institute of Agriculture and
                Animal Science (IAAS), Tribhuvan University. Founded in 2017 AD
                (2074 BS) by visionary IAAS, Paklihawa Campus students, VFAW
                began with a focused mission: to assist and care for street
                animals under the guiding principle,
                <span className="font-semibold text-indigo-700">
                  {' '}
                  "Animal Welfare for a Better World."
                </span>
              </p>

            </div>


            <div className="rounded-3xl bg-gradient-to-br from-indigo-700 to-indigo-950 p-8 text-white shadow-xl sm:p-10">

              <div className="mb-6 text-4xl">
                🌍
              </div>

              <p className="text-lg leading-8 text-indigo-100">
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

      </section>


      {/* PRESIDENT MESSAGE */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <SectionHeading
            title="A Message from Our President"
          />

          <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-slate-50 shadow-xl lg:grid-cols-[320px_1fr]">

            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 to-indigo-950 p-10 text-center text-white">

              <div className="h-52 w-52 overflow-hidden rounded-full border-8 border-white/20 bg-white">

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

                <span className="mb-3 block text-5xl font-black text-indigo-200">
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

      </section>


      {/* VISION MISSION ACTIVITIES */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <SectionHeading
            title="Vision, Mission & Activities"
            description="Our purpose, direction and commitment to animal welfare."
          />

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-5 text-4xl">
                👁️
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Vision
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                To create a healthier and more compassionate world for street
                dogs and farm animals by promoting welfare-driven practices and
                spreading knowledge within communities.
              </p>

            </div>


            <div className="rounded-3xl bg-gradient-to-br from-indigo-700 to-indigo-950 p-8 text-white shadow-xl">

              <div className="mb-5 text-4xl">
                🎯
              </div>

              <h3 className="text-2xl font-bold">
                Mission
              </h3>

              <p className="mt-4 leading-7 text-indigo-100">
                To advance the well-being of street and farm animals through
                student-led veterinary outreach, public education, and
                collaborative community initiatives that empower both people
                and animals.
              </p>

            </div>


            <div className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-5 text-4xl">
                ⚕️
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Key Activities
              </h3>

              <ul className="mt-5 space-y-3 text-slate-600">

                <li>• Animal Birth Control (ABC) programs</li>
                <li>• Vaccination and disease prevention</li>
                <li>• Educational webinars and workshops</li>
                <li>• Hands-on training sessions</li>
                <li>• Veterinary outreach programs</li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* VALUES */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <SectionHeading
            title="Our Values"
            description="These core principles guide everything we do."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => (

              <div
                key={value.title}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >

                <div className="text-4xl">
                  {value.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {value.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* OUR TEAM */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <SectionHeading
            title="Our Team"
            description="Dedicated individuals working together for animal welfare and veterinary development."
          />


          {/* ADVISORY */}
          <div className="mb-24">

            <h2 className="mb-8 text-3xl font-extrabold text-slate-900">
              Advisory Committee
            </h2>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

              {advisoryCommittee.map((member) => (
                <TeamCard
                  key={member.name}
                  member={member}
                />
              ))}

            </div>

          </div>


          {/* EXECUTIVE */}
          <div className="mb-24">

            <h2 className="mb-10 text-center text-4xl font-extrabold text-slate-900">
              Executive Committee 2025/2026
            </h2>


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

            <h2 className="mb-10 text-center text-4xl font-extrabold text-slate-900">
              Founding Committee
            </h2>

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


      {/* FOOTER CTA */}
      <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-800 py-24 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <div className="text-5xl">
            🐾
          </div>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl">
            Animal Welfare for a Better World
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-indigo-100">
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
