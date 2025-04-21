import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className="flex flex-col py-16 items-center min-h-screen bg-gradient-to-b from-gray-900 to-black" id="contact">
      <div className="text-center text-[#FF8A3D] text-4xl md:text-6xl font-bold mb-16">Contactez-nous</div>

      <div className="w-full max-w-5xl px-4">
        <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-2xl text-white p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Phone Numbers Section */}
            <div className="flex flex-col items-center text-center p-6 hover:bg-gray-700/50 rounded-xl transition-all duration-300">
              <div className="p-5 bg-[#FF8A3D] rounded-full mb-4">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-3">Téléphone</h3>
              <div className="space-y-2">
                <a href="tel:+221784256060" className="block text-gray-300 hover:text-[#FF8A3D] transition-colors text-lg">
                  78 435 60 60
                </a>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center text-center p-6 hover:bg-gray-700/50 rounded-xl transition-all duration-300">
              <div className="p-5 bg-[#FF8A3D] rounded-full mb-4">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-3">Email</h3>
              <a href="mailto:contact@atlanticimmo.com" className="text-gray-300 hover:text-[#FF8A3D] transition-colors text-lg">
                contact@atlanticimmo.com
              </a>
            </div>

            {/* Instagram Section */}
            <div className="flex flex-col items-center text-center p-6 hover:bg-gray-700/50 rounded-xl transition-all duration-300">
              <div className="p-5 bg-[#FF8A3D] rounded-full mb-4">
                <FaInstagram className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-3">Instagram</h3>
              <a 
                href="https://www.instagram.com/atlanticimmo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-[#FF8A3D] transition-colors text-lg"
              >
                @atlanticimmo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
