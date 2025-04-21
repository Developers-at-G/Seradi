import React from "react";
import s from "./ProjectComponent.module.scss";
import cx from "clsx";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ProjectComponent = () => {
  const [refArchitecture, inViewArchitecture] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refEspaces, inViewEspaces] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="relative w-full bg-gradient-to-b from-gray-900 to-gray-900 py-24">
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
      
      <div className={cx("relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", s['text-with-description'])} id="projet">
        <div className="text-center mb-20">
          <h2 className="text-base font-semibold text-[#FF8A3D] tracking-wide uppercase">Découvrez</h2>
          <h1 className="mt-3 text-5xl font-extrabold text-white sm:text-6xl">
            Nos Projets
          </h1>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-xl text-gray-400">
              Une résidence d&apos;exception alliant architecture moderne et confort premium
            </p>
          </div>
        </div>
        
        {/* Architecture & Confort Section */}
        <section
          ref={refArchitecture}
          className={cx(
            "mb-24 transition-all duration-1000 ease-in-out transform",
            inViewArchitecture ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A3D]/20 to-transparent opacity-20"></div>
            <div className="relative flex flex-col lg:flex-row items-start gap-12 p-8 sm:p-12">
              <div className="lg:w-1/3 flex-shrink-0">
                <h2 className="text-3xl font-bold text-white">
                  <span className="block text-[#FF8A3D] mb-2">01</span>
                  Architecture & Confort
                </h2>
                <p className="mt-4 text-gray-400 text-lg">
                  Une conception architecturale moderne qui privilégie la lumière et le confort de vie
                </p>
              </div>
              
              <div className="lg:w-2/3 grid gap-8 sm:grid-cols-2">
                <div className="group">
                  <div className="flex items-start space-x-4">
                    <span className="inline-flex w-12 h-12 bg-[#FF8A3D]/10 rounded-xl mr-4 flex-shrink-0 items-center justify-center group-hover:bg-[#FF8A3D]/20 transition-colors">
                      <i className="material-icons text-[#FF8A3D] text-2xl">architecture</i>
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Façade Moderne</h3>
                      <p className="text-gray-400">Balcons filants et garde-corps en verre</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4">
                    <span className="inline-flex w-12 h-12 bg-[#FF8A3D]/10 rounded-xl mr-4 flex-shrink-0 items-center justify-center group-hover:bg-[#FF8A3D]/20 transition-colors">
                      <i className="material-icons text-[#FF8A3D] text-2xl">wb_sunny</i>
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Structure en T</h3>
                      <p className="text-gray-400">Optimisation de la ventilation et lumière naturelle</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4">
                    <span className="inline-flex w-12 h-12 bg-[#FF8A3D]/10 rounded-xl mr-4 flex-shrink-0 items-center justify-center group-hover:bg-[#FF8A3D]/20 transition-colors">
                      <i className="material-icons text-[#FF8A3D] text-2xl">diamond</i>
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Finitions Premium</h3>
                      <p className="text-gray-400">Matériaux nobles et finitions haut de gamme</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4">
                    <span className="inline-flex w-12 h-12 bg-[#FF8A3D]/10 rounded-xl mr-4 flex-shrink-0 items-center justify-center group-hover:bg-[#FF8A3D]/20 transition-colors">
                      <i className="material-icons text-[#FF8A3D] text-2xl">bedroom</i>
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Suites Privatives</h3>
                      <p className="text-gray-400">Chambres avec salle de bain et dressing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Espaces Communs Premium Section */}
        <section
          ref={refEspaces}
          className={cx(
            "mb-24 transition-all duration-1000 ease-in-out transform",
            inViewEspaces ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A3D]/20 to-transparent opacity-20"></div>
            <div className="relative flex flex-col lg:flex-row items-start gap-12 p-8 sm:p-12">
              <div className="lg:w-1/3 flex-shrink-0">
                <h2 className="text-3xl font-bold text-white">
                  <span className="block text-[#FF8A3D] mb-2">02</span>
                  Espaces Communs Premium
                </h2>
                <p className="mt-4 text-gray-400 text-lg">
                  Des espaces communs luxueux conçus pour votre bien-être et votre confort
                </p>
              </div>
              
              <div className="lg:w-2/3 grid gap-8 sm:grid-cols-2">
                <div className="group">
                  <div className="flex items-start space-x-4">
                    <span className="inline-flex w-12 h-12 bg-[#FF8A3D]/10 rounded-xl mr-4 flex-shrink-0 items-center justify-center group-hover:bg-[#FF8A3D]/20 transition-colors">
                      <i className="material-icons text-[#FF8A3D] text-2xl">meeting_room</i>
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Lobby Premium</h3>
                      <p className="text-gray-400">Accueil sécurisé et ambiance raffinée</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4">
                    <span className="inline-flex w-12 h-12 bg-[#FF8A3D]/10 rounded-xl mr-4 flex-shrink-0 items-center justify-center group-hover:bg-[#FF8A3D]/20 transition-colors">
                      <i className="material-icons text-[#FF8A3D] text-2xl">pool</i>
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Piscine Privée</h3>
                      <p className="text-gray-400">Accès exclusif aux résidents</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4">
                    <span className="inline-flex w-12 h-12 bg-[#FF8A3D]/10 rounded-xl mr-4 flex-shrink-0 items-center justify-center group-hover:bg-[#FF8A3D]/20 transition-colors">
                      <i className="material-icons text-[#FF8A3D] text-2xl">fitness_center</i>
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Salle de Sport</h3>
                      <p className="text-gray-400">Équipements modernes avec vue piscine</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-4">
                    <span className="inline-flex w-12 h-12 bg-[#FF8A3D]/10 rounded-xl mr-4 flex-shrink-0 items-center justify-center group-hover:bg-[#FF8A3D]/20 transition-colors">
                      <i className="material-icons text-[#FF8A3D] text-2xl">groups</i>
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Espace Polyvalent</h3>
                      <p className="text-gray-400">Pour vos réunions et événements privés</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectComponent;
