import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    'All',
    'Animal Welfare',
    'Animal Birth Control',
    'Street Dog Feeding',
    'Rabies Vaccination',
    'Farm Animal Vaccination',
    'Farm Animal Survey',
    'Training and Awareness',
    'Virtual Sessions',
    'In-house Capacity Building'
  ];

  const images = [
    // Animal Welfare
    {
      src: '/welfare/1.jpg',
      category: 'Animal Welfare',
      description: 'Medical care and treatment for street animals'
    },
    {
      src: '/welfare/2.JPG',
      category: 'Animal Welfare',
      description: 'Before and after treatment cases'
    },
    {
      src: '/welfare/3.JPG',
      category: 'Animal Welfare',
      description: 'Animal care and rehabilitation'
    },
    {
      src: '/welfare/4.JPG',
      category: 'Animal Welfare',
      description: 'Emergency medical services'
    },
    {
      src: '/welfare/5.JPG',
      category: 'Animal Welfare',
      description: 'Veterinary care and treatment'
    },
    {
      src: '/welfare/6.JPG',
      category: 'Animal Welfare',
      description: 'Animal health check-ups'
    },
    {
      src: '/welfare/7.JPG',
      category: 'Animal Welfare',
      description: 'Post-treatment care'
    },
    {
      src: '/welfare/8.jpg',
      category: 'Animal Welfare',
      description: 'Animal welfare initiatives'
    },
    {
      src: '/welfare/9.jpg',
      category: 'Animal Welfare',
      description: 'Community outreach programs'
    },
    {
      src: '/welfare/10.jpg',
      category: 'Animal Welfare',
      description: 'Animal rescue operations'
    },
    {
      src: '/welfare/11.jpg',
      category: 'Animal Welfare',
      description: 'Medical interventions'
    },
    {
      src: '/welfare/12.jpg',
      category: 'Animal Welfare',
      description: 'Animal care services'
    },
    {
      src: '/welfare/13.jpg',
      category: 'Animal Welfare',
      description: 'Veterinary assistance'
    },
    {
      src: '/welfare/14.jpg',
      category: 'Animal Welfare',
      description: 'Animal welfare programs'
    },
    {
      src: '/welfare/15.jpg',
      category: 'Animal Welfare',
      description: 'Medical treatment cases'
    },
    {
      src: '/welfare/16.jpg',
      category: 'Animal Welfare',
      description: 'Animal care initiatives'
    },
    {
      src: '/welfare/17.jpg',
      category: 'Animal Welfare',
      description: 'Veterinary services'
    },
    {
      src: '/welfare/18.jpg',
      category: 'Animal Welfare',
      description: 'Animal welfare activities'
    },

    // Animal Birth Control
    {
      src: '/control/1.png',
      category: 'Animal Birth Control',
      description: 'Birth control program implementation'
    },
    {
      src: '/control/2.jpg',
      category: 'Animal Birth Control',
      description: 'Vaccination drives for street animals'
    },
    {
      src: '/control/3.jpg',
      category: 'Animal Birth Control',
      description: 'Community awareness programs'
    },

    // Street Dog Feeding
    {
      src: '/feeding/1.JPG',
      category: 'Street Dog Feeding',
      description: 'Regular feeding programs'
    },
    {
      src: '/feeding/2.JPG',
      category: 'Street Dog Feeding',
      description: 'Community feeding initiatives'
    },
    {
      src: '/feeding/3.jpg',
      category: 'Street Dog Feeding',
      description: 'Volunteer feeding activities'
    },

    // Rabies Vaccination
    {
      src: '/rabies/1.jpg',
      category: 'Rabies Vaccination',
      description: 'Canine vaccination program'
    },
    {
      src: '/rabies/2.jpg',
      category: 'Rabies Vaccination',
      description: 'Feline vaccination initiative'
    },
    {
      src: '/rabies/3.jpg',
      category: 'Rabies Vaccination',
      description: 'Community vaccination drive'
    },

    // Farm Animal Vaccination
    {
      src: '/vaccination/1.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Farm animal healthcare'
    },
    {
      src: '/vaccination/2.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Vaccination programs'
    },
    {
      src: '/vaccination/3.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Animal health check-ups'
    },

    // Farm Animal Survey
    {
      src: '/survey/1.jpg',
      category: 'Farm Animal Survey',
      description: 'Research and data collection'
    },
    {
      src: '/survey/2.jpg',
      category: 'Farm Animal Survey',
      description: 'Field surveys'
    },
    {
      src: '/survey/3.JPG',
      category: 'Farm Animal Survey',
      description: 'Health assessment'
    },

    // Training and Awareness
    {
      src: '/awareness/1.jpg',
      category: 'Training and Awareness',
      description: 'Educational workshops'
    },
    {
      src: '/awareness/2.jpg',
      category: 'Training and Awareness',
      description: 'Community training'
    },
    {
      src: '/awareness/3.jpg',
      category: 'Training and Awareness',
      description: 'Awareness campaigns'
    },

    // Virtual Sessions
    {
      src: '/virtual/4.jpg',
      category: 'Virtual Sessions',
      description: 'Online training programs'
    },
    {
      src: '/virtual/5.jpg',
      category: 'Virtual Sessions',
      description: 'Digital workshops'
    },
    {
      src: '/virtual/6.jpg',
      category: 'Virtual Sessions',
      description: 'Web-based learning'
    },

    // In-house Capacity Building
    {
      src: '/capacity/3.jpg',
      category: 'In-house Capacity Building',
      description: 'Staff training'
    },
    {
      src: '/capacity/4.jpg',
      category: 'In-house Capacity Building',
      description: 'Volunteer development'
    },
    {
      src: '/capacity/5.jpg',
      category: 'In-house Capacity Building',
      description: 'Team building activities'
    }
  ];

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(image => image.category === selectedCategory);

  const openImageModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute top-2 right-2">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 rounded-sm transform rotate-45 shadow-lg"></div>
                <div className="absolute inset-0 bg-red-500 rounded-sm transform -rotate-45 shadow-lg"></div>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Our Gallery
              </h1>
              <p className="mt-6 text-xl max-w-3xl mx-auto">
                A visual journey through our programs and impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => openImageModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.description}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="text-lg font-semibold">{image.category}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10"
            >
              <div className="relative w-8 h-8 bg-white rounded-full p-1 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-1 bg-red-500 rounded-full transform rotate-45"></div>
                  <div className="w-6 h-1 bg-red-500 rounded-full transform -rotate-45 absolute"></div>
                </div>
              </div>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.description}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white rounded-b-lg">
              <h3 className="text-xl font-semibold">{selectedImage.category}</h3>
              <p className="text-sm opacity-90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 