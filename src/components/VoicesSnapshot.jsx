import React, { useState, useEffect } from 'react';

const voices = [
  {
    name: 'Mr. Janma Jaya Gaire',
    role: 'Campus Chief',
    image: '/voice/campus chief.JPG',
    text: 'Vets for Animal Welfare (Vfaw) embodies the true spirit of veterinary compassion and responsibility. Through their tireless efforts — from treating and feeding street animals to conducting welfare programs, vaccination drives, animal birth control initiatives, and educational sessions — they are making a lasting difference both within and beyond our campus. By empowering veterinary students with practical experience and a profound sense of empathy, Vfaw is shaping the future of animal welfare. We are proud to support and stand alongside such a dedicated and impactful organization.'
  },
  {
    name: 'Bashudev Acharya',
    role: 'Semester: 5th',
    image: '/voice/Basudev Acharya.png',
    text: 'While working on the ABC program, I realized how important it is to control stray animal populations humanely. It taught me that small efforts bring big changes in both animal and human lives.'
  },
  {
    name: 'Eliza Gautam',
    role: 'Semester: 5th',
    image: '/voice/Eliza Gautam.png',
    text: 'Feeding street dogs during World Veterinary Day made me feel so connected to them. It showed me how simple acts of kindness can bring happiness and hope to these innocent lives.'
  },
  {
    name: 'Bibek Kumar Chaudhary',
    role: 'Semester: 5th',
    image: '/voice/Bibek Kumar Chaudhary.png',
    text: 'Volunteering in the anti-rabies vaccination program made me proud. It gave me a deeper understanding of how important prevention is to protect both animals and our community.'
  }
];

const VoicesSnapshot = () => {
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % voices.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + voices.length) % voices.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % voices.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Voices of VFAW
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from our community members about their experiences
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 bg-white/80 hover:bg-white text-indigo-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="w-full max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                      <img
                        src={voices[currentIndex].image}
                        alt={voices[currentIndex].name}
                        className="w-full h-full rounded-full object-cover border-4 border-indigo-100 shadow-md"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {voices[currentIndex].name}
                      </h3>
                      <p className="text-indigo-600 font-medium mb-4">
                        {voices[currentIndex].role}
                      </p>
                      <p className="text-gray-600 text-lg italic">
                        "{voices[currentIndex].text}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 z-10 bg-white/80 hover:bg-white text-indigo-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {voices.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-indigo-600 scale-125'
                    : 'bg-indigo-200 hover:bg-indigo-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setSelectedVoice(voices[currentIndex])}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Full Testimonial
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedVoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 p-8 transform transition-all duration-300 scale-100">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedVoice.image}
                  alt={selectedVoice.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedVoice.name}</h3>
                  <p className="text-indigo-600 font-medium">{selectedVoice.role}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedVoice(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 italic text-lg leading-relaxed">
                "{selectedVoice.text}"
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VoicesSnapshot; 