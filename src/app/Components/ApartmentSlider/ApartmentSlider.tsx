import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import s from './ApartmentSlider.module.scss';
import clsx from 'clsx';

const BuildingAmenities = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const amenities = [
    { id: 1, name: 'Salle de Sport', image: '/Images/38.jpg', description: 'Équipement moderne et spacieux' },
    { id: 2, name: 'Piscine', image: '/Images/10.jpg', description: 'Piscine intérieure chauffée' },
    { id: 3, name: 'Espaces Communs', image: '/Images/8.jpg', description: 'Corridors élégants' },
    { id: 4, name: 'Bureaux', image: '/Images/14.jpg', description: 'Espaces de travail professionnels' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  return (
    <div className={s.container} ref={containerRef}>
      <motion.div 
        className={s.amenitiesGrid}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className={s.row}>
          {amenities.slice(0, 2).map((amenity) => (
            <motion.div
              key={amenity.id}
              className={s.amenityItem}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(amenity.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className={s.imageContainer}>
                <motion.img 
                  src={amenity.image} 
                  alt={amenity.name}
                  animate={{
                    scale: hoveredId === amenity.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className={s.overlay}
                  animate={{
                    opacity: hoveredId === amenity.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{amenity.name}</h3>
                  <p>{amenity.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className={s.row}>
          {amenities.slice(2).map((amenity) => (
            <motion.div
              key={amenity.id}
              className={s.amenityItem}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(amenity.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className={s.imageContainer}>
                <motion.img 
                  src={amenity.image} 
                  alt={amenity.name}
                  animate={{
                    scale: hoveredId === amenity.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className={s.overlay}
                  animate={{
                    opacity: hoveredId === amenity.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{amenity.name}</h3>
                  <p>{amenity.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BuildingAmenities;
