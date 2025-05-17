import { Link } from 'react-router-dom';
import hero from '../../public/hero.jpg';
import React, { useEffect, useState } from 'react';
import logo from '../../public/logohome.png';
import VoicesSnapshot from '../components/VoicesSnapshot';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredActivities = [
    {
      title: 'Animal Welfare',
      description: 'Providing medical care and treatment for street animals, including before and after treatment cases.',
      image: '/welfare/IMG_2131.JPG',
      color: 'bg-indigo-50'
    },
    {
      title: 'Animal Birth Control and Vaccination',
      description: 'Implementing birth control programs and vaccination drives for street animals.',
      image: '/control/IMG_20240216_000413_Original.JPG',
      color: 'bg-purple-50'
    },
    {
      title: 'Street Dog Feeding Program',
      description: 'Regular feeding programs to ensure the well-being of street dogs.',
      image: '/feeding/IMG_2119.JPG',
      color: 'bg-pink-50'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollPosition * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={hero}
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 via-purple-900/30 to-pink-900/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl relative">
                <span className="block text-white mb-4 drop-shadow-lg">Welcome to</span>
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg">
                  VETS FOR ANIMAL WELFARE
                </span>
              </h1>
            </div>
            <p className="mt-6 text-2xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-lg">
              "Animal Welfare for a Better World"
            </p>
            <div className="mt-12 space-x-6">
              <Link
                to="/get-involved"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
              </Link>
              <Link
                to="/about"
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-xl font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      
      {/* Featured Activities Preview */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Making a Difference
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Discover how we're transforming lives, one animal at a time
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {featuredActivities.slice(0,2).map((activity) => (
              <Link
                to="/programs"
                key={activity.title}
                className={`${activity.color} rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    src={activity.image}
                    alt={activity.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{activity.description}</p>
                  <div className="mt-6 flex items-center text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">
                    <span className="font-semibold">Learn More</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/programs"
              className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Our Programs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Moments That Matter
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Witness the impact of our work through these powerful moments
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Gallery Snapshots */}
            <Link to="/gallery" className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/awareness/7.jpg"
                  alt="Awareness Program"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Awareness Program</h3>
                <p className="text-gray-600 text-sm">Spreading knowledge and compassion</p>
              </div>
            </Link>
            <Link to="/gallery" className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/vaccination/7.jpg"
                  alt="Vaccination Program"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Vaccination Program</h3>
                <p className="text-gray-600 text-sm">Protecting animal health</p>
              </div>
            </Link>
            <Link to="/gallery" className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/feeding/IMG_2117.JPG"
                  alt="Feeding Program"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Feeding Program</h3>
                <p className="text-gray-600 text-sm">Ensuring well-being of street animals</p>
              </div>
            </Link>
            <Link to="/gallery" className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/capacity/IMG_2121.JPG"
                  alt="Capacity Building"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Capacity Building</h3>
                <p className="text-gray-600 text-sm">Empowering future leaders</p>
              </div>
            </Link>
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Full Gallery
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Voices of VFAW Snapshot */}
      <VoicesSnapshot />

      {/* Collaborators Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Collaborators
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Working together for a better future
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[2, 3, 4, 6, 7, 1].map((num) => (
              <div key={num} className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={`/collaborators/${num}.${num === 1 || num === 7 ? 'jpg' : 'JPG'}`}
                    alt={`Collaborator ${num}`}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready to Make a Difference?
            </h2>
            <p className="mt-4 text-lg">
              Join us in our mission to create positive change in our community.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 