'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from './ImageAnimation.module.scss';

const images = [
  '/Images/Salon 2.jpeg',
  '/Images/Chambre.jpeg',
  '/Images/Cuisine.jpeg',
  '/Images/Salon.jpeg',
  '/Images/Salle a manger.jpeg',
  '/Images/Cuisine 2.jpeg',
  '/Images/Salon 3.jpeg',
];

// Custom hook for window dimensions
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

// Calculate positions in a circular/surrounding layout
const calculatePosition = (index: number, total: number) => {
  if (index === 0) return { x: 0, y: 0 }; // Main image stays centered
  
  const angle = ((index - 1) * (2 * Math.PI)) / (total - 1);
  const radius = 60; // Slightly reduced radius to prevent cutoff
  
  // Calculate positions relative to center
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
};

export default function ImageAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    if (containerRef.current && windowHeight > 0) {
      setContainerHeight(windowHeight * 2);
    }
  }, [windowHeight]);

  // Main container animations - adjusted scale for better visibility
  const containerScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.7]);
  
  return (
    <div 
      ref={containerRef} 
      className={styles.container}
      style={{ height: containerHeight }}
    >
       <div className={styles.stickyContainer}>
        <motion.div 
          className={styles.titleContainer}
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
            y: useTransform(scrollYProgress, [0, 0.2], [0, -50])
          }}
        >
          <div className="w-full flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
                delay: 0.2
              }}
              className="text-4xl font-bold mb-12 text-[#FF8A3D] relative inline-block"
            >
              <span className="relative z-10">Nos Appartements</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-[#FF8A3D]/30"
              />
            </motion.h1>
          </div>
          <motion.div 
            className={styles.apartmentInfo}
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
              y: useTransform(scrollYProgress, [0, 0.2], [0, -30])
            }}
          >
            <motion.h2 className={styles.subtitle}>4 appartements par étage</motion.h2>
            <motion.div className={styles.apartmentTypes}>
              <motion.p>F3 (Façade arrière) : 131 - 161 m²</motion.p>
              <motion.p>F4 (Façade principale) : 181 - 183 m²</motion.p>
            </motion.div>
            <motion.h3 className={styles.featuresTitle}>Chaque appartement comprend :</motion.h3>
            <motion.ul className={styles.featuresList}>
              <motion.li>Grand séjour lumineux</motion.li>
              <motion.li>Cuisine moderne équipée</motion.li>
              <motion.li>Chambres avec dressing et sdb privée</motion.li>
              <motion.li>Toilettes visiteurs</motion.li>
              <motion.li>Balcons spacieux</motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
        <motion.div 
          className={styles.imageContainer}
          style={{ scale: containerScale }}
        >
          <div className={styles.imagesWrapper}>
            {images.map((src, index) => {
              const { x, y } = calculatePosition(index, images.length);
              
              return (
                <ImageItem
                  key={src}
                  src={src}
                  index={index}
                  x={x}
                  y={y}
                  windowWidth={windowWidth}
                  windowHeight={windowHeight}
                  scrollYProgress={scrollYProgress}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const ImageItem = ({ 
  src, 
  index, 
  x, 
  y, 
  windowWidth, 
  windowHeight, 
  scrollYProgress 
}: { 
  src: string;
  index: number;
  x: number;
  y: number;
  windowWidth: number;
  windowHeight: number;
  scrollYProgress: any;
}) => {
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    index === 0 ? [1.1, 0.95, 0.8] : [0.6, 0.7, 0.8]
  );

  const imageX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, x * (windowWidth || 0) / 100]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, y * (windowHeight || 0) / 100]
  );

  const opacity = useTransform(
    scrollYProgress,
    index === 0 
      ? [0, 0.1, 0.9, 1] 
      : [0.2, 0.3, 0.8, 1],
    index === 0
      ? [1, 1, 0.95, 0.9]
      : [0, 1, 1, 1]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    ['8px', '16px']
  );

  const zIndex = index === 0 ? 2 : 1;

  return (
    <motion.div
      className={`${styles.imageWrapper} ${index === 0 ? styles.mainImage : ''}`}
      style={{ 
        opacity,
        scale: imageScale,
        x: imageX,
        y: imageY,
        zIndex,
        borderRadius,
      }}
    >
      <motion.div
        className={styles.imageBorder}
        style={{ borderRadius }}
      >
        <img 
          src={src} 
          alt={`Interior ${index + 1}`}
          className={styles.image}
        />
      </motion.div>
    </motion.div>
  );
};
