import Image from 'next/image'
import React from 'react'
import cx from "clsx";
import s from "./TextWithMedia.module.scss";
import { motion } from 'framer-motion';

const TextWithMedia = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#next-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={cx(s['text-with-media'], 'container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row gap-8 md:gap-16')}
      >
        <motion.div 
          whileInView={{ x: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className={cx('flex flex-col gap-6 md:w-1/2', s['text-with-media__text'])}
        >
          <h2 className={cx(s['text-with-media__title'], 'text-4xl md:text-5xl font-bold text-white')}>
            Immeuble Neuf à Ouakam
          </h2>
          <p className={cx(s['text-with-media__body'], 'text-lg text-gray-300 leading-relaxed')}>
            A usage de commerces, de bureaux et d'habitation avec:
            <br />
            Sous-sol, Parking, Rez-de-chaussé Mêzzanie, 6 Etages et Terasse
          </p>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNextSection}
              className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:from-indigo-700 hover:to-blue-600 transition-all w-fit"
            >
              En savoir plus
            </motion.button>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-white"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className={cx(s['text-with-media__media'], 'flex flex-col md:flex-row gap-6 md:w-1/2')}
        >
          <motion.div 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={cx('rounded-2xl overflow-hidden shadow-2xl w-full')}
          >
            <Image 
              src="/Images/0.jpg" 
              width={600} 
              height={600} 
              alt='building-day'
              className='w-full h-[300px] md:h-[400px] object-cover rounded-xl hover:brightness-125 transition-all'
            />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={cx('rounded-2xl overflow-hidden shadow-2xl w-full')}
          >
            <Image 
              src="/Images/1.jpg" 
              width={600} 
              height={600} 
              alt='building-night'
              className='w-full h-[300px] md:h-[400px] object-cover rounded-xl hover:brightness-125 transition-all'
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TextWithMedia
