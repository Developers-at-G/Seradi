import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import cx from "clsx";
import s from "./AnimatedTextPanel.module.scss";
import Image from 'next/image';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const heroImages = [
  '/Images/Salon 2.jpeg',
  '/Images/Chambre.jpeg',
  '/Images/Cuisine.jpeg',
  '/Images/Salon.jpeg',
  '/Images/Salle a manger.jpeg',
];

const AnimatedTextPanel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(8px)'
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(8px)'
    })
  };

  const slideTransition = {
    x: { type: "spring", stiffness: 200, damping: 25 },
    opacity: { duration: 0.4 },
    scale: { duration: 0.4 },
    filter: { duration: 0.4 }
  };

  return (
    <div className={cx(s['animated-text-panel'], 'relative min-h-screen w-full overflow-hidden')} ref={containerRef} id="accueil">
      <HeaderMenu />
      
      {/* Hero Image Background with Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImageIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt="SERADI Residence"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="100vw"
              style={{
                objectPosition: 'center',
                filter: 'brightness(0.6) contrast(1.1) saturate(1.1)',
              }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
          <motion.button
            onClick={handlePrevImage}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={handleNextImage}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {heroImages.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: index === currentImageIndex ? 1.2 : 0.8 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight"
          >
            Résidence SERADI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-12 font-medium tracking-wide"
          >
            Une résidence d&apos;exception au cœur de Ouakam
          </motion.p>
          <motion.div 
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.p 
              className="text-lg md:text-xl text-gray-100 leading-relaxed tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              La résidence SERADI, se situe dans la Commune de Ouakam du coté résidentiel. Le site est très accessible car le projet vient s&apos;insérer à l&apos;intérieur d&apos;un tissu urbain relativement dense, d&apos;une part irriguée par l&apos;Avenue Cheikh Anta Diop et de l&apos;autre, animé par le Lycée français Jean Mermoz.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16"
        >
          {/* Location Map */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/Images/3.jpg"
              alt="Carte de localisation SERADI"
              fill
              className="object-cover"
              quality={100}
            />
          </div>

          {/* Key Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-white">Environnement direct</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Hôpitaux', distance: '500 m', icon: '🏥' },
                { name: 'Supermarché', distance: '200 m', icon: '🛒' },
                { name: 'Plage', distance: '300 m', icon: '🏖️' },
                { name: 'Restaurants', distance: '300 m', icon: '🍽️' },
                { name: 'Banques', distance: '200 m', icon: '🏦' },
                { name: 'Aéroport', distance: '70 km', icon: '✈️' },
                { name: 'Universités', distance: '1 km', icon: '🎓' },
                { name: 'Pharmacie', distance: '200 m', icon: '💊' },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-medium text-white">{item.name}</div>
                    <div className="text-sm text-gray-300">{item.distance}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedTextPanel;
