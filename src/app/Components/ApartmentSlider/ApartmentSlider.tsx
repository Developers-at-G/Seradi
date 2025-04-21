import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import s from './ApartmentSlider.module.scss';
import clsx from 'clsx';
import styled from 'styled-components';

const BuildingAmenities = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [touchedId, setTouchedId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const amenities = [
    { id: 1, name: 'Salle de Sport', image: '/Images/gym.png', description: 'Équipement moderne et spacieux' },
    { id: 2, name: 'Piscine', image: '/Images/piscine.png', description: 'Piscine intérieure' },
    { id: 3, name: 'Espace Commune', image: '/Images/espace.jpeg', description: 'Corridors élégants' },
    { id: 4, name: 'Bureaux', image: '/Images/bureau-2.png', description: 'Espaces de travail professionnels' },
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

  const Dot = styled.button<{ active: boolean }>`
    background: ${props => props.active ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.3)'};
  `;

  const Button = styled.button`
    background: var(--primary-color);
    &:hover {
      background: var(--primary-color-light);
    }
  `;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
              onHoverStart={() => !isMobile && setHoveredId(amenity.id)}
              onHoverEnd={() => !isMobile && setHoveredId(null)}
              onTouchStart={() => {
                if (!isMobile) {
                  setTouchedId(touchedId === amenity.id ? null : amenity.id);
                }
              }}
            >
              <div className={s.imageContainer}>
                <motion.img 
                  src={amenity.image} 
                  alt={amenity.name}
                  animate={{
                    scale: !isMobile && (hoveredId === amenity.id || touchedId === amenity.id) ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className={s.overlay}
                  animate={{
                    opacity: !isMobile ? ((hoveredId === amenity.id || touchedId === amenity.id) ? 1 : 0) : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={s.amenityName}>{amenity.name}</h3>
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
              onHoverStart={() => !isMobile && setHoveredId(amenity.id)}
              onHoverEnd={() => !isMobile && setHoveredId(null)}
              onTouchStart={() => {
                if (!isMobile) {
                  setTouchedId(touchedId === amenity.id ? null : amenity.id);
                }
              }}
            >
              <div className={s.imageContainer}>
                <motion.img 
                  src={amenity.image} 
                  alt={amenity.name}
                  animate={{
                    scale: !isMobile && (hoveredId === amenity.id || touchedId === amenity.id) ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className={s.overlay}
                  animate={{
                    opacity: !isMobile ? ((hoveredId === amenity.id || touchedId === amenity.id) ? 1 : 0) : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={s.amenityName}>{amenity.name}</h3>
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
