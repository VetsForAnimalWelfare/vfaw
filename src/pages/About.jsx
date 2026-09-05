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

const executiveCoordinators = [
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
];

const executiveBoard = [
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
];

const executiveWings = [
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

const TeamCard = ({ member }) => ( <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"> <div className="relative h-72 overflow-hidden bg-slate-100"> <img
       src={member.image}
       alt={member.name}
       className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-105"
       loading="lazy"
     />

```
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/30 to-transparent" />
  </div>

  <div className="relative p-6">
    <div className="absolute left-6 top-0 h-1 w-12 -translate-y-1/2 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-20" />

    <h3 className="text-lg font-bold tracking-tight text-slate-900">
      {member.name}
    </h3>

    <p className="mt-2 text-sm font-medium leading-relaxed text-indigo-600">
      {member.role}
    </p>
  </div>
</div>
```

);

const SectionTitle = ({ badge, title, description }) => ( <div className="mx-auto mb-14 max-w-3xl text-center">
{badge && ( <div className="mb-4 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">
{badge} </div>
)}

```
  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
    {title}
  </h2>

  {description && (
    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
      {description}
    </p>
  )}

  <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500" />
</div>
```

);

return ( <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">

```
  {/* HERO SECTION */}
  <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-indigo-800 text-white">

    <div className="absolute inset-0 opacity-20">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-400 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-indigo-400 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-400 blur-3xl" />
    </div>

    <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">

      <div className="mx-auto max-w-4xl text-center">

        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Student-Led • Animal Welfare • Veterinary Education
        </div>

        <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
          About{' '}
          <span className="bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
            VFAW
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-indigo-100 sm:text-xl">
          Vets for Animal Welfare (VFAW) - A student-led organization
          dedicated to animal welfare and veterinary education.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-left backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
              Founded
            </p>
            <p className="mt-1 text-xl font-bold">2017 AD</p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-left backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
              Institution
            </p>
            <p className="mt-1 text-xl font-bold">IAAS, TU</p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-left backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
              Purpose
            </p>
            <p className="mt-1 text-xl font-bold">Animal Welfare</p>
          </div>

        </div>

      </div>

    </div>

    <div className="absolute bottom-0 left-0 right-0">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 120H1440V50C1220 95 1000 95 720 60C450 25 230 20 0 65V120Z"
          fill="#f8fafc"
        />
      </svg>
    </div>

  </section>


  {/* OUR STORY */}
  <section className="relative py-24 lg:py-32">

    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      <SectionTitle
        badge="Our Journey"
        title="Our Story"
        description="A student-driven journey dedicated to creating meaningful and lasting change in animal welfare."
      />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-10">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
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

        <div className="rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-950 p-8 text-white shadow-2xl sm:p-10">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl backdrop-blur">
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
  <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-24 lg:py-32">

    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      <SectionTitle
        badge="Leadership"
        title="A Message from Our President"
      />

      <div className="mx-auto max-w-5xl">

        <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-indigo-100">

          <div className="grid lg:grid-cols-[320px_1fr]">

            <div className="relative flex items-center justify-center bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-950 p-10">

              <div className="absolute inset-0 opacity-30">
                <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-blue-400 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-purple-400 blur-3xl" />
              </div>

              <div className="relative text-center">

                <div className="mx-auto h-52 w-52 overflow-hidden rounded-full border-8 border-white/20 bg-white shadow-2xl">
                  <img
                    src="/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/shankar rimal.jpg"
                    alt="Shankhar Rimal"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Shankhar Rimal
                </h3>

                <p className="mt-2 text-sm font-medium text-indigo-200">
                  President, VFAW
                </p>

              </div>

            </div>

            <div className="flex items-center p-8 sm:p-12">

              <blockquote className="relative text-lg leading-8 text-slate-600 sm:text-xl">

                <div className="mb-6 text-6xl font-black leading-none text-indigo-200">
                  “
                </div>

                At Vets for Animal Welfare, we are driven by a shared
                purpose—to promote compassionate care for animals while
                empowering veterinary students to become ethical, informed,
                and proactive leaders. Through advocacy, education, and
                hands-on action, we strive to build a future where animal
                welfare is a priority and veterinary voices lead the way to
                change.

                <div className="mt-6 text-6xl font-black leading-none text-indigo-200">
                  ”
                </div>

              </blockquote>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>


  {/* VISION MISSION ACTIVITIES */}
  <section className="bg-white py-24 lg:py-32">

    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      <SectionTitle
        badge="Our Purpose"
        title="Vision, Mission & Activities"
        description="Guided by compassion, education, and meaningful action."
      />

      <div className="grid gap-8 lg:grid-cols-3">

        <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
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


        <div className="group rounded-3xl bg-gradient-to-br from-indigo-700 to-indigo-950 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl backdrop-blur">
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


        <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
            ⚕️
          </div>

          <h3 className="text-2xl font-bold text-slate-900">
            Key Activities
          </h3>

          <ul className="mt-5 space-y-3 text-slate-600">

            {[
              'Animal Birth Control (ABC) programs',
              'Vaccination and disease prevention',
              'Educational webinars and workshops',
              'Hands-on training sessions',
              'Veterinary outreach programs',
            ].map((activity) => (
              <li key={activity} className="flex items-start gap-3">

                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-600" />

                <span>{activity}</span>

              </li>
            ))}

          </ul>

        </div>

      </div>

    </div>

  </section>


  {/* VALUES */}
  <section className="bg-slate-50 py-24 lg:py-32">

    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      <SectionTitle
        badge="What Guides Us"
        title="Our Values"
        description="These core principles guide everything we do."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {values.map((value) => (
          <div
            key={value.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-indigo-50 transition-transform duration-500 group-hover:scale-150" />

            <div className="relative">

              <div className="mb-6 text-4xl">
                {value.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {value.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>

  </section>


  {/* TEAM */}
  <section className="bg-white py-24 lg:py-32">

    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      <SectionTitle
        badge="The People Behind VFAW"
        title="Our Team"
        description="A dedicated network of advisors, veterinary leaders, students, and welfare advocates working together for a better world for animals."
      />


      {/* ADVISORY COMMITTEE */}
      <div className="mb-28">

        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Advisory Committee
            </h2>

            <p className="mt-2 text-slate-600">
              Guidance, mentorship and leadership.
            </p>
          </div>

          <div className="h-px flex-1 bg-slate-200 sm:ml-8" />

        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {advisoryCommittee.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}

        </div>

      </div>


      {/* EXECUTIVE COMMITTEE */}
      <div className="mb-28">

        <div className="mb-12 text-center">

          <div className="mb-4 inline-flex rounded-full bg-indigo-50 px-5 py-2 text-sm font-bold text-indigo-700">
            Current Leadership
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Executive Committee 2025/2026
          </h2>

        </div>


        {/* Leadership */}
        <div className="mb-10">

          <h3 className="mb-6 text-xl font-bold text-slate-700">
            Executive Leadership
          </h3>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {executiveLeadership.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}

          </div>

        </div>


        {/* Coordinators */}
        <div className="mb-10">

          <h3 className="mb-6 text-xl font-bold text-slate-700">
            Executive & Coordinators
          </h3>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

            {executiveCoordinators.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}

          </div>

        </div>


        {/* Board */}
        <div className="mb-10">

          <h3 className="mb-6 text-xl font-bold text-slate-700">
            Board Members
          </h3>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {executiveBoard.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}

          </div>

        </div>


        {/* Wings */}
        <div>

          <h3 className="mb-6 text-xl font-bold text-slate-700">
            Wings & Creative Team
          </h3>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

            {executiveWings.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}

          </div>

        </div>

      </div>


      {/* FOUNDING COMMITTEE */}
      <div>

        <div className="mb-12 text-center">

          <div className="mb-4 inline-flex rounded-full bg-amber-50 px-5 py-2 text-sm font-bold text-amber-700">
            Our Foundation
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Founding Committee
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            The visionary individuals who laid the foundation of Vets for
            Animal Welfare.
          </p>

        </div>

        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {foundingCommittee.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}

        </div>

      </div>

    </div>

  </section>


  {/* FINAL CTA */}
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-indigo-800 py-24 text-white">

    <div className="absolute inset-0 opacity-20">

      <div className="absolute left-10 top-0 h-72 w-72 rounded-full bg-blue-400 blur-3xl" />

      <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-purple-400 blur-3xl" />

    </div>

    <div className="relative mx-auto max-w-4xl px-6 text-center">

      <div className="text-5xl">
        🐾
      </div>

      <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
        Animal Welfare for a Better World
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-indigo-100">
        Together, through compassion, knowledge, and action, we can create
        a better future for animals and the communities that care for them.
      </p>

    </div>

  </section>

</div>
```

);
};

export default About;
