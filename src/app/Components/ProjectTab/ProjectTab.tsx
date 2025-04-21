'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ProjectTab = () => {
  return (
    <section id="projet" className="py-20 px-4">
      <div className="relative max-w-3xl mx-auto px-4 md:px-8">
      <div className="text-center text-[#FF8A3D] text-4xl md:text-6xl font-bold mb-16">Nos Projets</div>

        <Link href="/seradi">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative h-[60vh] w-full rounded-3xl overflow-hidden cursor-pointer group"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/Images/Salon 2.jpeg"
                alt="Seradi Residence"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80" />
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
              <div className="text-white">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  Résidence Seradi
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl md:text-2xl mb-8"
                >
                  Un projet immobilier d&apos;exception
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="inline-block"
                >
                  <span className="text-lg md:text-xl font-semibold border-b-2 border-white pb-1 group-hover:border-[#FF8A3D] transition-colors duration-300">
                    Découvrir le projet
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default ProjectTab; 