import Image from 'next/image'
import React from 'react'
import cx from "clsx";
import s from "./TextWithMedia.module.scss";
import { motion } from 'framer-motion';

const TextWithMedia = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#projet');
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
            A Propos de Seradi
          </h2>
          <div className="space-y-4">
            <p className={cx(s['text-with-media__body'], 'text-lg text-gray-300 leading-relaxed')}>
              <span className="font-semibold text-white">Commerces, bureaux, habitations</span>
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Sous-sol</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>24 places de parking</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Rez-de-chaussée</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Espace lobby et salle d&apos;attente</li>
                  <li>Service de conciergerie</li>
                  <li>Surveillance vidéo</li>
                  <li>Service sécurité 24h/24</li>
                  <li>Aire commerciale</li>
                  <li>Piscine et salle de sport</li>
                  <li>Deux ascenseurs</li>
                  <li>Sortie de secours</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Mezzanine</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>2 plateaux aménageables en bureaux</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Étages</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Étage 1 à 6 : 24 appartements (12 F4 & 12 F3)</li>
                  <li>Étage 7 : 1 Penthouse</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-white font-medium mb-2">Équipements & Sécurité</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Extincteurs</li>
                  <li>Désenfumage ventilateur d&apos;extraction</li>
                  <li>Station de pompage</li>
                  <li>3 réservoirs eau 8000L</li>
                  <li>Climatisation et VMC</li>
                  <li>Groupe électrogène</li>
                  <li>Réseaux intérieurs (informatique, téléphonique, télévision)</li>
                  <li>Sécurité bouche d&apos;alimentation colonne sèche</li>
                  <li>Détecteurs d&apos;incendie automatiques</li>
                  <li>Avertisseur de fumée</li>
                </ul>
              </div>
            </div>
          </div>
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
            className="relative w-full h-[300px] md:h-[400px]"
          >
            <Image 
              src="/Images/0.jpg" 
              alt='building-day'
              fill
              className="object-cover rounded-xl hover:brightness-125 transition-all"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-[300px] md:h-[400px]"
          >
            <Image 
              src="/Images/1.jpg" 
              alt='building-night'
              fill
              className="object-cover rounded-xl hover:brightness-125 transition-all"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TextWithMedia
