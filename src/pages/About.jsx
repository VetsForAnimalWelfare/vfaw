import dramrit from '/advisors/Amrit.jpg'
import drsubash from '/advisors/Subash.jpg'
import drgrihamani from '/advisors/Grihamani.jpg'
import drkamal from '/advisors/Kamal.jpg'
import about from '/about.jpg'

const About = () => {
  

  const values = [
    {
      title: 'Animal Welfare',
      description: 'We are committed to promoting the well-being of all animals through ethical and evidence-based practices.',
    },
    {
      title: 'Education',
      description: 'We believe in empowering communities through knowledge and practical training in animal care.',
    },
    {
      title: 'Community Impact',
      description: 'We work collaboratively with local communities to create sustainable change in animal welfare.',
    },
    {
      title: 'Student Development',
      description: 'We focus on nurturing the next generation of veterinary leaders through hands-on experiences.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              About VFAW
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Vets for Animal Welfare (VFAW) - A student-led organization dedicated to animal welfare and veterinary education
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                Vets for Animal Welfare (VFAW) is a non-political, non-beneficial, non-governmental, student-led organization operating under the esteemed Institute of Agriculture and Animal Science (IAAS), Tribhuvan University. Founded in 2017 AD (2074 BS) by visionary IAAS, Paklihawa Campus students, VFAW began with a focused mission: to assist and care for street animals under the guiding principle, "Animal Welfare for a Better World."
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Since its inception, VFAW has steadily expanded its outreach, evolving to address the health and welfare of farm animals and promoting broader veterinary welfare initiatives across Nepal. Today, VFAW stands at the forefront of advancing animal health and well-being through comprehensive veterinary services, community engagement, and educational programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              A Message from Our President
            </h2>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/president.JPG" 
                  alt="Urmila Chhetri" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Urmila Chhetri</h3>
                <p className="text-indigo-600 font-semibold mb-6">President, VFAW</p>
                <blockquote className="text-lg text-gray-700 italic relative">
                  <svg className="absolute -top-4 -left-4 w-8 h-8 text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  "At Vets for Animal Welfare, we are driven by a shared purpose—to promote compassionate care for animals while empowering veterinary students to become ethical, informed, and proactive leaders. Through advocacy, education, and hands-on action, we strive to build a future where animal welfare is a priority and veterinary voices lead the way to change."
                  <svg className="absolute -bottom-4 -right-4 w-8 h-8 text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, and Goals */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
              <p className="mt-2 text-gray-600">
                To create a healthier and more compassionate world for street dogs and farm animals by promoting welfare-driven practices and spreading knowledge within communities.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
              <p className="mt-2 text-gray-600">
                To advance the well-being of street and farm animals through student-led veterinary outreach, public education, and collaborative community initiatives that empower both people and animals.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Key Activities</h3>
              <ul className="mt-2 text-gray-600 list-disc pl-5">
                <li>Animal Birth Control (ABC) programs</li>
                <li>Vaccination and disease prevention</li>
                <li>Educational webinars and workshops</li>
                <li>Hands-on training sessions</li>
                <li>Veterinary outreach programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              These core principles guide everything we do
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Advisory Committee */}
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
              Advisory Committee
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {[
                {
                  name: 'Dr. Subash Rimal',
                  role: 'Founder President, Asst. Prof. Paklihawa Campus',
                  image: drsubash,
                },
                {
                  name: 'Dr. Grihamani Nepal',
                  role: 'Asst. Prof. Paklihawa Campus',
                  image: drgrihamani,
                },
                {
                  name: 'Dr. Amrit Shrestha',
                  role: 'Former President',
                  image: dramrit,
                },
                {
                  name: 'Mr. Kamal Acharya',
                  role: 'Former President',
                  image: drkamal,
                },
              ].map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <img 
                      className="absolute inset-0 w-full h-full object-contain p-2 bg-gray-50" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Committee */}
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
              Executive Committee 2024/2025
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {[
                {
                  name: 'Urmila Chhetri',
                  role: 'President',
                  image: '/president.JPG',
                },
                {
                  name: 'Anish Pandey',
                  role: 'Vice-President',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Anish Pandey.jpg',
                },
                {
                  name: 'Menuka Adhikari',
                  role: 'Vice-President',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Menuka Adhikari.jpg',
                },
                {
                  name: 'Minu Gupta',
                  role: 'Secretary',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Minu Gupta.jpg',
                },
              ].map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <img 
                      className="absolute inset-0 w-full h-full object-contain p-2 bg-gray-50" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {[
                {
                  name: 'Bibas Tharu',
                  role: 'Social Media Coordinator',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Bibas Tharu.jpg',
                },
                {
                  name: 'Asmita Sharma',
                  role: 'Extension Coordinator',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Asmita_Sharma.jpg',
                },
                {
                  name: 'Shankar Rimal',
                  role: 'Vice-Secretary',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/shankar rimal.jpg',
                },
                {
                  name: 'Sujata Gautam',
                  role: 'Treasurer',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Sujata Gautam.jpg',
                },
              ].map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <img 
                      className="absolute inset-0 w-full h-full object-contain p-2 bg-gray-50" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {[
                {
                  name: 'Prakash Chaudhary',
                  role: 'Board Member',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/prakash chaudhary.jpg',
                },
                {
                  name: 'Anisha Ranabhat',
                  role: 'Board Member',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Anisha Ranabhat.jpg',
                },
                {
                  name: 'Kavya Ghimire',
                  role: 'Board Member',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Kavya Ghimire.jpg',
                },
                {
                  name: 'Malati Chhetri',
                  role: 'Board Member',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Malati Chhetri.jpeg',
                },
              ].map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <img 
                      className="absolute inset-0 w-full h-full object-contain p-2 bg-gray-50" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-5">
              {[
                {
                  name: 'Madan Krishna Neupane',
                  role: 'Social Media Wing',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Madan Krishna Neupane.jpg',
                },
                {
                  name: 'Rizan Bartaula',
                  role: 'Content Creator',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Rizan Bartaula.jpg',
                },
                {
                  name: 'Bibek Sunrait',
                  role: 'Extension Wing',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Bibek Sunrait.jpg',
                },
                {
                  name: 'Balkrishna Acharya',
                  role: 'Animal Welfare Wing',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Bal Krishna Acharya.jpg',
                },
                {
                  name: 'Janak Raj Joshi',
                  role: 'Animal Welfare Wing',
                  image: '/Executive committee 2024-2025-20250503T010429Z-001/Executive committee 2024-2025/Janak Raj Joshi.jpg',
                },
              ].map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <img 
                      className="absolute inset-0 w-full h-full object-contain p-2 bg-gray-50" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founding Committee */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
              Founding Committee
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {[
                {
                  name: 'Dr. Subash Rimal',
                  role: 'President',
                  image: '/advisors/Subash.jpg',
                },
                {
                  name: 'Dr. Asmita Shrestha',
                  role: 'Vice-President',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. asmita shrestha.JPG',
                },
                {
                  name: 'Dr. Anil Adhikari',
                  role: 'Secretary',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. Anil adhikari.PNG',
                },
                {
                  name: 'Dr. Rabina Ghimire',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. rabina ghimire.JPG',
                },
              ].map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <img 
                      className="absolute inset-0 w-full h-full object-contain p-2 bg-gray-50" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {[
                {
                  name: 'Dr. Rabindra Tiwari',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. rabindra tiwari.JPG',
                },
                {
                  name: 'Dr. Krishna Khadka',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. krishna khadka.JPG',
                },
                {
                  name: 'Dr. Sagar Reshmi Magar',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. sagar reshmi magar.JPG',
                },
                {
                  name: 'Dr. Astha Thapa',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. astha thapa.JPG',
                },
              ].map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <img 
                      className="absolute inset-0 w-full h-full object-contain p-2 bg-gray-50" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {[
                {
                  name: 'Dr. Monalisha Khanal',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. monalisha khanal.JPG',
                },
                {
                  name: 'Dr. Romi Kunwar',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. romi kunwar.JPG',
                },
                {
                  name: 'Dr. Keshav Kharel',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. keshav kharel.PNG',
                },
                {
                  name: 'Dr. Sirjana Bamrel',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. sirjana bamrel.JPG',
                },
              ].map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <img 
                      className="absolute inset-0 w-full h-full object-contain p-2 bg-gray-50" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {[
                {
                  name: 'Dr. Binita Tamang',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. binita tamang.jpg',
                },
                {
                  name: 'Dr. Pritvi Thapa',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. prithvi thapa.jpg',
                },
                {
                  name: 'Dr. Raj Kumar Tharu',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. raj kumar tharu.jpg',
                },
                {
                  name: 'Dr. Sumana Gyawali',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. sumana gyawali.JPG',
                },
              ].map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <img 
                      className="absolute inset-0 w-full h-full object-contain p-2 bg-gray-50" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {[
                {
                  name: 'Dr. Ghanashyam Dahal',
                  role: 'Member',
                  image: '/Founding committee-20250503T010429Z-001/Founding committee/Dr. ghanashyam dahal.JPG',
                },
              ].map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <img 
                      className="absolute inset-0 w-full h-full object-contain p-2 bg-gray-50" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 