import React from 'react';

const GetInvolved = () => {
  const membershipOptions = [
    {
      title: 'Lifetime Membership',
      description: 'Become a driving force for animal welfare and contribute to building a better world. As a member of VFAW, you will have the opportunity to actively engage in impactful initiatives, including awareness campaigns, Animal Birth Control programs, vaccination drives, virtual sessions, the Veterinary Talk Series, leadership development activities, animal welfare projects, and other specialized online programs.',
      price: '3,000',
      benefits: [
        'Permanent Membership Status: Enjoy lifelong affiliation with VFAW without the need for annual renewals',
        'Exclusive Event Participation: Access to all VFAW events, programs, and training sessions',
        'Leadership and Volunteering Opportunities: Take part in leadership roles, project teams, and welfare campaigns',
        'Professional Networking: Connect with veterinarians, animal welfare experts, and professionals across various fields',
        'Recognition: Receive a lifetime membership certificate acknowledging your commitment to animal welfare',
        'Meaningful Contribution: Play an ongoing role in improving animal welfare standards and promoting humane practices'
      ],
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScQODnpyoZpB4o4JJyDqqUIN9Zm6OBdS0-pU4DVzs1hn1JpGw/viewform',
      buttonText: 'Apply for Lifetime Membership'
    },
    {
      title: 'Yearly Membership',
      description: 'Join VFAW and contribute to building a better world for animals. As a member, you will have the opportunity to engage in a range of impactful initiatives, including awareness campaigns, animal birth control programs, vaccination drives, virtual sessions, the Veterinary Talk Series, leadership development activities, animal welfare projects, and other educational programs.',
      price: '250',
      benefits: [
        'Participation in exclusive events',
        'Opportunity to improve animal welfare standards',
        'Valuable networking opportunities',
        'A platform to contribute to meaningful change'
      ],
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfZdM4_81s7b_d4_L55XttYlgHvlPK_mOAzbK8Ocd_0RaFYow/viewform',
      buttonText: 'Apply for Yearly Membership'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Join Vets for Animal Welfare (VFAW)
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Become a driving force for animal welfare and contribute to building a better world
            </p>
          </div>
        </div>
      </section>

      {/* Membership Options */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {membershipOptions.map((option, idx) => (
              <div
                key={option.title}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  idx === 0
                    ? 'border-yellow-400 hover:border-yellow-500' // Lifetime Membership
                    : 'border-indigo-400 hover:border-indigo-500' // Yearly Membership
                }`}
              >
                {/* Badge */}
                <div className={`absolute top-6 right-6 px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-md ${
                  idx === 0
                    ? 'bg-yellow-100 text-yellow-800 border border-yellow-300' // Lifetime
                    : 'bg-indigo-100 text-indigo-800 border border-indigo-300' // Yearly
                }`}>
                  {option.title}
                </div>
                {/* Icon */}
                <div className="flex justify-center mt-8 mb-4">
                  {idx === 0 ? (
                    <div className="bg-yellow-100 p-4 rounded-full shadow-inner">
                      <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v9m-7-7h14" />
                      </svg>
                    </div>
                  ) : (
                    <div className="bg-indigo-100 p-4 rounded-full shadow-inner">
                      <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                {/* Apply Button and Demarcation at the top */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-1 bg-gradient-to-r from-indigo-300 via-gray-200 to-yellow-300 rounded-full mb-2"></div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm ${idx === 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-indigo-100 text-indigo-700'}`}>Apply Now</span>
                  <a
                    href={option.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-3 inline-block w-full text-center px-6 py-3 rounded-xl text-lg font-bold shadow-md transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      idx === 0
                        ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500 focus:ring-yellow-400'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'
                    }`}
                  >
                    {option.buttonText}
                    <span className="ml-2 inline-block align-middle group-hover:translate-x-1 transition-transform duration-200">
                      <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="p-8 pt-2 flex flex-col h-full items-center text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className={`text-lg font-semibold mb-2 ${idx === 0 ? 'text-yellow-600' : 'text-indigo-600'}`}>
                    {option.price} <span className="text-sm text-gray-500">per {idx === 0 ? 'lifetime' : 'year'}</span>
                  </p>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="mt-2 mb-6 w-full flex justify-center">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        {option.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2">
                            <span className={idx === 0 ? 'text-yellow-500' : 'text-indigo-500'}>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-gray-700 text-left">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Why Join VFAW?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              As a member of VFAW, you become part of a community dedicated to making a difference in animal welfare
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Education & Action</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Advance animal welfare through comprehensive education programs and hands-on initiatives that make a real difference.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Professional Network</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Build valuable connections with veterinarians, animal welfare experts, and professionals across various fields.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Leadership Development</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Develop essential leadership skills through hands-on experience in organizing and managing animal welfare initiatives.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Meaningful Impact</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Participate in meaningful animal welfare initiatives that create lasting positive change in your community.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Welfare Standards</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Contribute to raising animal welfare standards through education, advocacy, and practical initiatives.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Continuous Growth</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Engage in ongoing learning and development opportunities to enhance your knowledge and skills in animal welfare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to Make a Difference?
                </h2>
                <p className="mt-4 text-lg text-indigo-100">
                  Fill out the membership form today and become part of a movement dedicated to making the world better for animals!
                </p>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved; 