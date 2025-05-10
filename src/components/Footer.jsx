import { Link } from 'react-router-dom';
import logoHome from '../../public/logohome.png';

const Footer = () => {
  return (
    <footer className="bg-[#1a1f2e] text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <div className="bg-white rounded-xl p-3 shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
              <img src={logoHome} alt="VFAW Logo" className="h-14 w-auto" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-white">Vets for Animal Welfare</h3>
            <p className="text-white/80 mb-6 text-sm leading-relaxed">
              Student-led organization dedicated to animal welfare and veterinary education in Nepal.
            </p>
            <div className="flex space-x-5">
              <a href="https://www.facebook.com/vetsforanimalwelfare" target="_blank" rel="noopener noreferrer" 
                className="text-white/80 hover:text-[#4f46e5] transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/vetsforanimalwelfare" target="_blank" rel="noopener noreferrer" 
                className="text-white/80 hover:text-[#4f46e5] transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/vets-for-animal-welfare/posts/?feedView=all" target="_blank" rel="noopener noreferrer" 
                className="text-white/80 hover:text-[#4f46e5] transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-display font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4f46e5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#4f46e5] transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#4f46e5] rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#4f46e5] transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#4f46e5] rounded-full mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-white/80 hover:text-[#4f46e5] transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#4f46e5] rounded-full mr-2"></span>
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/80 hover:text-[#4f46e5] transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#4f46e5] rounded-full mr-2"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-white/80 hover:text-[#4f46e5] transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#4f46e5] rounded-full mr-2"></span>
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-display font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#4f46e5] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/80">Siddharthanagar-1,Bhairahawa</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#4f46e5] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white/80">vfaw2017@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#4f46e5] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white/80">+977 9748771731</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} Vets for Animal Welfare (VFAW). All rights reserved.
            </p>
            <p className="text-white/70 text-sm">
              Designed by{' '}
              <a 
                href="https://nirajanacharya.com.np" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#4f46e5] hover:text-white transition-colors duration-300"
              >
                Nirajan
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 