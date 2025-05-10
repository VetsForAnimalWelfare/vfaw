import React, { useState } from 'react';



const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const programs = [
    {
      title: 'Animal Welfare',
      description: 'Providing medical care and treatment for street animals, including before and after treatment cases.',
      images: [
        '/welfare/1.jpg',
        '/welfare/2.JPG',
        '/welfare/3.JPG',
        '/welfare/4.JPG',
        '/welfare/5.JPG',
        '/welfare/6.JPG',
        '/welfare/7.JPG',
        '/welfare/8.jpg',
        '/welfare/9.jpg',
        '/welfare/10.jpg',
        '/welfare/11.jpg',
        '/welfare/12.jpg',
        '/welfare/13.jpg',
        '/welfare/14.jpg',
        '/welfare/15.jpg',
        '/welfare/16.jpg',
        '/welfare/17.jpg',
        '/welfare/18.jpg',
      ]
    },
    {
      title: 'Animal Birth Control and Vaccination',
      description: 'Implementing birth control programs and vaccination drives for street animals.',
      images: [
        '/control/1.png',
        '/control/2.jpg',
        '/control/3.jpg',
        '/control/4.jpg',
        '/control/5.jpg',
        '/control/6.jpg',
        '/control/7.jpg',
        '/control/8.jpg',
        '/control/9.jpg'
        
        
      ]
    },
    {
      title: 'Street Dog Feeding Program',
      description: 'Regular feeding programs to ensure the well-being of street dogs.',
      images: ['/feeding/1.JPG',
    '/feeding/2.JPG',
    '/feeding/3.jpg',
    '/feeding/4.jpg',
    '/feeding/5.JPG']
    },
    {
      title: 'Rabies Vaccination',
      description: 'Vaccination programs for both canine and feline populations to prevent rabies.',
      images: [
        '/rabies/1.jpg',
        '/rabies/2.jpg',
        '/rabies/3.jpg'
        
      ]
    },
    {
      title: 'Farm Animal Vaccination',
      description: 'Vaccination and healthcare programs for farm animals.',
      images: [
        '/vaccination/1.jpg',
        '/vaccination/2.jpg',
        '/vaccination/3.jpg',
        '/vaccination/4.jpg',
        '/vaccination/5.jpg',
        '/vaccination/6.jpg',
        '/vaccination/7.jpg'
        
      ]
    },
    {
      title: 'Farm Animal Survey',
      description: 'Conducting surveys and research on farm animal health and welfare.',
      images: [
        '/survey/1.jpg',
        '/survey/2.jpg',
        '/survey/3.JPG',
        '/survey/4.JPG'
        
      ]
    },
    {
      title: 'Training and Awareness Programs',
      description: 'Educational programs to raise awareness about animal welfare.',
      images: [
        '/awareness/1.jpg',
        '/awareness/2.jpg',
        '/awareness/3.jpg',
        '/awareness/5.jpg',
        '/awareness/6.jpg',
        '/awareness/7.jpg',
        '/awareness/8.jpg',
        '/awareness/9.jpg',
        '/awareness/10.jpg',
        '/awareness/11.jpg',
        '/awareness/12.jpg',
        '/awareness/13.jpg',
        '/awareness/14.jpg',
        '/awareness/15.jpg',
        '/awareness/16.jpg',

      ]
    },
    {
      title: 'Virtual Sessions',
      description: 'Online training and educational sessions.',
      images: [
        '/virtual/4.jpg',
        '/virtual/5.jpg',
        '/virtual/6.jpg',
        '/virtual/7.png',
        
      ]
    },
    {
      title: 'In-house Capacity Building',
      description: 'Internal training programs for staff and volunteers.',
      images: [
        '/capacity/3.jpg',
        '/capacity/4.jpg',
        '/capacity/5.jpg'
        
      ]
    }
  ];

  const openModal = (program) => {
    setSelectedProgram(program);
    setCurrentSlideIndex(0);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedProgram(null);
    document.body.style.overflow = 'auto'; 
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => 
      (prevIndex + 1) % selectedProgram.images.length
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => 
      (prevIndex - 1 + selectedProgram.images.length) % selectedProgram.images.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Our Programs
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Discover the various initiatives we undertake to improve animal welfare and community engagement
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(program)}
              >
                <div className="relative">
                  <img
                    className="w-full h-64 object-cover"
                    src={program.images[0]}
                    alt={program.title}
                  />
                  {program.images.length > 1 && (
                    <div className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded-full text-sm">
                      +{program.images.length - 1} more
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Slideshow */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10"
            >
              <div className="relative w-8 h-8 bg-white rounded-full p-1 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-1 bg-red-500 rounded-full transform rotate-45"></div>
                  <div className="w-6 h-1 bg-red-500 rounded-full transform -rotate-45 absolute"></div>
                </div>
              </div>
            </button>

            {/* Slideshow */}
            <div className="relative">
              <img
                className="w-full h-[80vh] object-contain rounded-lg"
                src={selectedProgram.images[currentSlideIndex]}
                alt={`${selectedProgram.title} - Image ${currentSlideIndex + 1}`}
              />
              
              {/* Navigation buttons */}
              {selectedProgram.images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Program info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                <h3 className="text-xl font-semibold">{selectedProgram.title}</h3>
                <p className="text-sm opacity-90">{selectedProgram.description}</p>
                <div className="mt-2 text-sm">
                  Image {currentSlideIndex + 1} of {selectedProgram.images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Want to Get Involved?
                </h2>
                <p className="mt-4 text-lg text-indigo-100">
                  Join us in making a difference through our programs and initiatives.
                </p>
                <div className="mt-8">
                  <a
                    href="/get-involved"
                    className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100"
                  >
                    Learn How to Help
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

export default Programs; 