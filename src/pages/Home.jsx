import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../public/hero.jpg';
import VoicesSnapshot from '../components/VoicesSnapshot';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const [statsStarted, setStatsStarted] = useState(false);
  
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  const sectionRefs = useRef([]);
  const statsRef = useRef(null);

  /* =========================================================
     SCROLL / PARALLAX
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((previous) => ({
              ...previous,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -70px 0px',
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     STATISTICS OBSERVER
  ========================================================= */

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsStarted(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     SECTION REF
  ========================================================= */

  const addSectionRef = (element, name) => {
    if (element && !sectionRefs.current.includes(element)) {
      element.dataset.section = name;
      sectionRefs.current.push(element);
    }
  };

  /* =========================================================
     ANIMATED COUNTER
  ========================================================= */

  const Counter = ({
    end,
    suffix = '',
    duration = 1800,
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsStarted) return;

      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const easedProgress =
          1 - Math.pow(1 - progress, 3);

        setCount(
          Math.floor(easedProgress * end)
        );

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, [statsStarted, end, duration]);

    return (
      <>
        {count.toLocaleString()}
        {suffix}
      
    );
  };

  /* =========================================================
     FEATURED ACTIVITIES
  ========================================================= */

  const featuredActivities = [
    {
      title: 'Animal Welfare',
      description:
        'Providing medical care and treatment for street animals, including before and after treatment cases.',
      image: '/welfare/IMG_2131.JPG',
      number: '01',
    },
    {
      title: 'Animal Birth Control & Vaccination',
      description:
        'Implementing birth control programs and vaccination drives to protect street animals and improve community health.',
      image:
        '/control/IMG_20240216_000413_Original.JPG',
      number: '02',
    },
    {
      title: 'Street Dog Feeding Program',
      description:
        'Regular feeding initiatives focused on improving the health, nutrition, and well-being of street dogs.',
      image: '/feeding/IMG_2119.JPG',
      number: '03',
    },
  ];

  /* =========================================================
     GALLERY / SLIDER DATA
  ========================================================= */

  const galleryItems = [
    {
      image: '/awareness/7.jpg',
      title: 'Awareness Program',
      description: 'Spreading knowledge and compassion',
    },
    {
      image: '/vaccination/7.jpg',
      title: 'Vaccination Program',
      description: 'Protecting animal health',
    },
    {
      image: '/feeding/IMG_2117.JPG',
      title: 'Feeding Program',
      description: 'Supporting street animals',
    },
    {
      image: '/capacity/1.JPG',
      title: 'Capacity Building',
      description: 'Empowering future leaders',
    },
  ];

  /* =========================================================
     1-SECOND AUTOMATIC IMAGE SLIDER LOGIC
  ========================================================= */

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
    }, 1000); // Transitions every 1 second

    return () => clearInterval(slideInterval);
  }, [galleryItems.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  /* =========================================================
     COLLABORATORS
  ========================================================= */

  const collaborators = [2, 3, 4, 6, 7, 1];

  const collaboratorPath = (num) =>
    `/collaborators/\({num}.\){num === 1 || num === 7 ? 'jpg' : 'JPG'}`;

  return (
    

      {/* =====================================================
          HERO
      ====================================================== */}
