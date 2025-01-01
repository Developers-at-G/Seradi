import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import cx from "clsx";
import s from "./AnimatedTextPanel.module.scss";
import Image from 'next/image';

const AnimatedTextPanel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 15%"]
  });

  const getWordDelay = (index: number) => {
    if (window.innerWidth < 768) return index * 0.08;
    if (window.innerWidth < 1024) return index * 0.09;
    return index * 0.1;
  };

  return (
    <div className={cx(s['animated-text-panel'], 'px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-900 text-gray-100')} ref={containerRef} id="accueil">
      <div className={cx("text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase my-8 md:my-12 lg:my-20 text-white", s['animated-text-panel__title'])}>
        A Propos
      </div>
      <motion.div className={cx(s["animated-text-panel__body"], 'h-full')}>
        <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-sans overflow-hidden text-center leading-relaxed md:leading-loose lg:leading-loose text-gray-100">
          {`La résidence SERADI, se situe dans la Commune de Ouakam du coté résidentiel, Le site est très accessible car le projet vient s'insérer à l'intérieur d'un tissu urbain relativement dense, d'une part irriguée par l'Avenue Cheikh Anta Diop et de l'autre, animé par le Lycée français Jean Mermoz.`
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                style={{ display: "inline-block", overflow: "hidden" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: getWordDelay(index),
                  ease: "easeOut"
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
        </h1>
      </motion.div>
      
      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        {/* Map Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl border border-gray-700">
          <Image
            src="/Images/3.jpg"
            alt="Carte de localisation SERADI"
            fill
            className="object-cover"
          />
        </div>

        {/* Amenities List */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-white">Environnement direct</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Hôpitaux', distance: '500 m', icon: '🏥' },
              { name: 'Supermarché', distance: '200 m', icon: '🛒' },
              { name: 'Plage', distance: '300 m', icon: '🏖️' },
              { name: 'Restaurants', distance: '300 m', icon: '🍽️' },
              { name: 'Banques', distance: '200 m', icon: '🏦' },
              { name: 'Aéroport', distance: '70 km', icon: '✈️' },
              { name: 'Universités', distance: '1 km', icon: '🎓' },
              { name: 'Pharmacie', distance: '200 m', icon: '💊' },
              { name: 'Gendarmerie', distance: '400 m', icon: '👮' },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 2 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-medium text-white">{item.name}</div>
                  <div className="text-sm text-gray-400">{item.distance}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedTextPanel;
