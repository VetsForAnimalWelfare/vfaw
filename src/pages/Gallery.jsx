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
      src: '/welfare/IMG_2131.JPG',
      category: 'Animal Welfare',
      description: 'Latest medical care and treatment for street animals'
    },
    {
      src: '/welfare/IMG_2124.JPG',
      category: 'Animal Welfare',
      description: 'Recent animal care and treatment'
    },
    {
      src: '/welfare/IMG_2127.JPG',
      category: 'Animal Welfare',
      description: 'Animal welfare activities'
    },
    {
      src: '/welfare/IMG_2123.JPG',
      category: 'Animal Welfare',
      description: 'Medical interventions'
    },
    {
      src: '/welfare/IMG_2126.JPG',
      category: 'Animal Welfare',
      description: 'Animal care services'
    },
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
      src: '/control/IMG_20240216_000413_Original.JPG',
      category: 'Animal Birth Control',
      description: 'Latest birth control program implementation'
    },
    {
      src: '/control/IMG-20240215-WA0021_Original.JPG',
      category: 'Animal Birth Control',
      description: 'Recent vaccination drive'
    },
    {
      src: '/control/IMG_1974.JPG',
      category: 'Animal Birth Control',
      description: 'Birth control activities'
    },
    {
      src: '/control/IMG_1973.JPG',
      category: 'Animal Birth Control',
      description: 'Vaccination program'
    },
    {
      src: '/control/IMG_2007.JPG',
      category: 'Animal Birth Control',
      description: 'Community outreach'
    },
    {
      src: '/control/IMG_1975.JPG',
      category: 'Animal Birth Control',
      description: 'Animal care services'
    },
    {
      src: '/control/IMG_1996.JPG',
      category: 'Animal Birth Control',
      description: 'Medical interventions'
    },
    {
      src: '/control/IMG_1976.JPG',
      category: 'Animal Birth Control',
      description: 'Veterinary care'
    },
    {
      src: '/control/IMG_2003.JPG',
      category: 'Animal Birth Control',
      description: 'Animal welfare'
    },
    {
      src: '/control/IMG_1972.JPG',
      category: 'Animal Birth Control',
      description: 'Community programs'
    },
    {
      src: '/control/IMG_1977.JPG',
      category: 'Animal Birth Control',
      description: 'Medical services'
    },
    {
      src: '/control/IMG_2004.JPG',
      category: 'Animal Birth Control',
      description: 'Animal care'
    },
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
      src: '/feeding/IMG_2119.JPG',
      category: 'Street Dog Feeding',
      description: 'Latest feeding program'
    },
    {
      src: '/feeding/IMG_1988.JPG',
      category: 'Street Dog Feeding',
      description: 'Recent feeding initiative'
    },
    {
      src: '/feeding/IMG_1987.JPG',
      category: 'Street Dog Feeding',
      description: 'Community feeding program'
    },
    {
      src: '/feeding/IMG_1989.JPG',
      category: 'Street Dog Feeding',
      description: 'Regular feeding activities'
    },
    {
      src: '/feeding/IMG_1985.JPG',
      category: 'Street Dog Feeding',
      description: 'Animal care through feeding'
    },
    {
      src: '/feeding/IMG_1995.JPG',
      category: 'Street Dog Feeding',
      description: 'Feeding program implementation'
    },
    {
      src: '/feeding/IMG_2111.JPG',
      category: 'Street Dog Feeding',
      description: 'Community outreach'
    },
    {
      src: '/feeding/IMG_2117.JPG',
      category: 'Street Dog Feeding',
      description: 'Regular feeding services'
    },
    {
      src: '/feeding/IMG_1990.JPG',
      category: 'Street Dog Feeding',
      description: 'Animal welfare through feeding'
    },
    {
      src: '/feeding/IMG_2116.JPG',
      category: 'Street Dog Feeding',
      description: 'Feeding initiatives'
    },
    {
      src: '/feeding/IMG_1983.JPG',
      category: 'Street Dog Feeding',
      description: 'Community feeding'
    },
    {
      src: '/feeding/IMG_2126.JPG',
      category: 'Street Dog Feeding',
      description: 'Regular feeding program'
    },
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
    {
      src: '/feeding/4.jpg',
      category: 'Street Dog Feeding',
      description: 'Feeding program activities'
    },
    {
      src: '/feeding/5.JPG',
      category: 'Street Dog Feeding',
      description: 'Community feeding services'
    },

    // Rabies Vaccination
    {
      src: '/rabies/3.jpg',
      category: 'Rabies Vaccination',
      description: 'Community vaccination drive'
    },
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

    // Farm Animal Vaccination
    {
      src: '/vaccination/7.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Latest vaccination program'
    },
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
    {
      src: '/vaccination/4.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Veterinary services'
    },
    {
      src: '/vaccination/5.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Medical care'
    },
    {
      src: '/vaccination/6.jpg',
      category: 'Farm Animal Vaccination',
      description: 'Animal welfare'
    },

    // Farm Animal Survey
    {
      src: '/survey/IMG_2134.JPG',
      category: 'Farm Animal Survey',
      description: 'Latest research and data collection'
    },
    {
      src: '/survey/IMG_2135.JPG',
      category: 'Farm Animal Survey',
      description: 'Recent field survey'
    },
    {
      src: '/survey/IMG_1981.JPG',
      category: 'Farm Animal Survey',
      description: 'Health assessment program'
    },
    {
      src: '/survey/IMG_1980.JPG',
      category: 'Farm Animal Survey',
      description: 'Animal welfare survey'
    },
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
    {
      src: '/survey/4.JPG',
      category: 'Farm Animal Survey',
      description: 'Survey activities'
    },

    // Training and Awareness
    {
      src: '/awareness/7.jpg',
      category: 'Training and Awareness',
      description: 'Latest educational workshop'
    },
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
    {
      src: '/awareness/4.JPG',
      category: 'Training and Awareness',
      description: 'Training programs'
    },
    {
      src: '/awareness/5.jpg',
      category: 'Training and Awareness',
      description: 'Educational initiatives'
    },
    {
      src: '/awareness/6.jpg',
      category: 'Training and Awareness',
      description: 'Community awareness'
    },
    {
      src: '/awareness/8.jpg',
      category: 'Training and Awareness',
      description: 'Training sessions'
    },
    {
      src: '/awareness/9.jpg',
      category: 'Training and Awareness',
      description: 'Educational programs'
    },
    {
      src: '/awareness/10.jpg',
      category: 'Training and Awareness',
      description: 'Awareness activities'
    },
    {
      src: '/awareness/11.jpg',
      category: 'Training and Awareness',
      description: 'Training workshops'
    },
    {
      src: '/awareness/12.jpg',
      category: 'Training and Awareness',
      description: 'Educational sessions'
    },
    {
      src: '/awareness/13.jpg',
      category: 'Training and Awareness',
      description: 'Community programs'
    },
    {
      src: '/awareness/14.jpg',
      category: 'Training and Awareness',
      description: 'Training initiatives'
    },
    {
      src: '/awareness/15.jpg',
      category: 'Training and Awareness',
      description: 'Educational activities'
    },
    {
      src: '/awareness/16.jpg',
      category: 'Training and Awareness',
      description: 'Awareness programs'
    },

    // Virtual Sessions
    {
      src: '/virtual/IMG_2120.JPG',
      category: 'Virtual Sessions',
      description: 'Latest online training program'
    },
    {
      src: '/virtual/IMG_2114.JPG',
      category: 'Virtual Sessions',
      description: 'Recent digital workshop'
    },
    {
      src: '/virtual/IMG_1994.JPG',
      category: 'Virtual Sessions',
      description: 'Online learning session'
    },
    {
      src: '/virtual/IMG_1997.JPG',
      category: 'Virtual Sessions',
      description: 'Virtual training program'
    },
    {
      src: '/virtual/IMG_2129.JPG',
      category: 'Virtual Sessions',
      description: 'Digital education'
    },
    {
      src: '/virtual/IMG_1998.JPG',
      category: 'Virtual Sessions',
      description: 'Online workshop'
    },
    {
      src: '/virtual/IMG_2013.JPG',
      category: 'Virtual Sessions',
      description: 'Virtual learning'
    },
    {
      src: '/virtual/IMG_1166.JPG',
      category: 'Virtual Sessions',
      description: 'Digital training'
    },
    {
      src: '/virtual/3.jpg',
      category: 'Virtual Sessions',
      description: 'Online education'
    },
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
    {
      src: '/virtual/7.png',
      category: 'Virtual Sessions',
      description: 'Virtual education'
    },

    // In-house Capacity Building
    {
      src: '/capacity/IMG_2121.JPG',
      category: 'In-house Capacity Building',
      description: 'Latest staff training'
    },
    {
      src: '/capacity/IMG_2024.JPG',
      category: 'In-house Capacity Building',
      description: 'Recent volunteer development'
    },
    {
      src: '/capacity/IMG_2016.JPG',
      category: 'In-house Capacity Building',
      description: 'Team building activities'
    },
    {
      src: '/capacity/IMG_2023.JPG',
      category: 'In-house Capacity Building',
      description: 'Staff development'
    },
    {
      src: '/capacity/IMG_2020.JPG',
      category: 'In-house Capacity Building',
      description: 'Training programs'
    },
    {
      src: '/capacity/IMG_2019.JPG',
      category: 'In-house Capacity Building',
      description: 'Capacity building'
    },
    {
      src: '/capacity/IMG_1993.JPG',
      category: 'In-house Capacity Building',
      description: 'Team training'
    },
    {
      src: '/capacity/IMG_2022.JPG',
      category: 'In-house Capacity Building',
      description: 'Staff workshops'
    },
    {
      src: '/capacity/IMG_2017.JPG',
      category: 'In-house Capacity Building',
      description: 'Development programs'
    },
    {
      src: '/capacity/IMG_2025.JPG',
      category: 'In-house Capacity Building',
      description: 'Training initiatives'
    },
    {
      src: '/capacity/IMG_2018.JPG',
      category: 'In-house Capacity Building',
      description: 'Team development'
    },
    {
      src: '/capacity/1.JPG',
      category: 'In-house Capacity Building',
      description: 'Staff training'
    },
    {
      src: '/capacity/2.JPG',
      category: 'In-house Capacity Building',
      description: 'Volunteer development'
    },
    {
      src: '/capacity/3.jpg',
      category: 'In-house Capacity Building',
      description: 'Team building activities'
    },
    {
      src: '/capacity/4.jpg',
      category: 'In-house Capacity Building',
      description: 'Training sessions'
    },
    {
      src: '/capacity/5.jpg',
      category: 'In-house Capacity Building',
      description: 'Development activities'
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