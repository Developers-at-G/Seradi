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
    <>
      <div className={cx(s['animated-text-panel'], 'relative min-h-screen w-full overflow-hidden')} ref={containerRef} id="accueil">
        <HeaderMenu />
        
        {/* Title Section - Moved to top */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 text-center pt-24 pb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            Résidence SERADI
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 md:pb-32">
          {/* Banner Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={s['banner-static']}
          >
            <Image
              src="/Images/banner.jpeg"
              alt="Atlantic Immo Banner"
              width={1200}
              height={250}
              priority
              className="object-contain rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Description Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16 mt-12"
          >
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-200 shadow-xl">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed tracking-wide">
                La résidence SERADI, se situe dans la Commune de Ouakam du coté résidentiel. Le site est très accessible car le projet vient s'insérer à l'intérieur d'un tissu urbain relativement dense, d'une part irriguée par l'Avenue Cheikh Anta Diop et de l'autre, animé par le Lycée français Jean Mermoz.
              </p>
            </div>
          </motion.div>

          {/* Environment Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-16"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200 max-w-3xl w-full">
              <h2 className="text-3xl font-semibold mb-8 text-gray-900 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Environnement direct
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-gray-100"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500 mt-1">{item.distance}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AnimatedTextPanel;
