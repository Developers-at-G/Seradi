import React from "react";
import s from "./TextWithDescription.module.scss";
import cx from "clsx";
import { useInView } from "react-intersection-observer";

const TextWithDescription = () => {
  // Configure inView hook for each section
  const [refSousSol, inViewSousSol] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refRezDeChaussee, inViewRezDeChaussee] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refEtages, inViewEtages] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refMezzanie, inViewMezzanie] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className={cx("max-w-6xl mx-auto my-16 p-12 bg-gray-900 shadow-2xl rounded-2xl", s['text-with-description'])} id="projet">
      <h1 className="text-4xl font-bold mb-12 text-center text-white">
        Nos Projets
      </h1>
        
      {/* Sous Sol Section */}
      <section
        ref={refSousSol}
        className={cx(
          "mb-12 transition-all duration-1000 ease-in-out transform",
          inViewSousSol ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        )}
      >
        <div className="flex flex-col md:flex-row items-start gap-8 hover:bg-gray-800 p-6 rounded-xl transition-colors">
          <h2 className="text-2xl font-semibold text-gray-100 md:w-1/3 flex-shrink-0">Sous Sol</h2>
          <div className="md:w-2/3 flex-grow">
            <p className="text-lg text-gray-300 flex items-center flex-wrap gap-2">
              <span className="inline-flex w-8 h-8 bg-gray-700 rounded-full mr-4 flex-shrink-0 items-center justify-center">
                {/* <span className="material-icons text-blue-600">local_parking</span> */}
              </span>
              <span className="flex-grow">24 places de parking</span>
            </p>
          </div>
        </div>
      </section>
      <hr className="my-8 border-gray-700" />

      {/* Rez de Chaussée Section */}
      <section
        ref={refRezDeChaussee}
        className={cx(
          "mb-12 transition-all duration-1000 ease-in-out transform",
          inViewRezDeChaussee ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        )}
      >
        <div className="flex flex-col md:flex-row items-start gap-8 hover:bg-gray-800 p-6 rounded-xl transition-colors">
          <h2 className="text-2xl font-semibold text-gray-100 md:w-1/3 flex-shrink-0">Rez de Chaussée</h2>
          <div className="md:w-2/3 flex-grow">
            <ul className="space-y-4">
              <li className="flex items-start text-lg text-gray-300">
                <span className="inline-flex w-8 h-8 bg-gray-700 rounded-full mr-4 flex-shrink-0 items-center justify-center">
                  {/* <span className="material-icons text-blue-600">reception</span> */}
                </span>
                <span className="flex-grow pt-1">Un accueil avec réception surveillée</span>
              </li>
              <li className="flex items-start text-lg text-gray-300">
                <span className="inline-flex w-8 h-8 bg-gray-700 rounded-full mr-4 flex-shrink-0 items-center justify-center">
                  {/* <span className="material-icons text-blue-600">concierge</span> */}
                </span>
                <span className="flex-grow pt-1">Un poste garding + Conciergerie</span>
              </li>
              <li className="flex items-start text-lg text-gray-300">
                <span className="inline-flex w-8 h-8 bg-gray-700 rounded-full mr-4 flex-shrink-0 items-center justify-center">
                  {/* <span className="material-icons text-blue-600">escalator</span> */}
                </span>
                <span className="flex-grow pt-1">Deux ascenseurs de 8 personnes et une cage d’escalier</span>
              </li>
              <li className="flex items-start text-lg text-gray-300">
                <span className="inline-flex w-8 h-8 bg-gray-700 rounded-full mr-4 flex-shrink-0 items-center justify-center">
                  {/* <span className="material-icons text-blue-600">pool</span> */}
                </span>
                <span className="flex-grow pt-1">Une piscine privée</span>
              </li>
              <li className="flex items-start text-lg text-gray-300">
                <span className="inline-flex w-8 h-8 bg-gray-700 rounded-full mr-4 flex-shrink-0 items-center justify-center">
                  {/* <span className="material-icons text-blue-600">fitness_center</span> */}
                </span>
                <span className="flex-grow pt-1">Une salle de gym avec accès privé</span>
              </li>
              <li className="flex items-start text-lg text-gray-300">
                <span className="inline-flex w-8 h-8 bg-gray-700 rounded-full mr-4 flex-shrink-0 items-center justify-center">
                  {/* <span className="material-icons text-blue-600">store</span> */}
                </span>
                <span className="flex-grow pt-1">Une espace commerciale de 400m²</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="my-8 border-gray-700" />

      {/* Etages Section */}
      <section
        ref={refEtages}
        className={cx(
          "mb-12 transition-all duration-1000 ease-in-out transform",
          inViewEtages ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        )}
      >
        <div className="flex flex-col md:flex-row items-start gap-8 hover:bg-gray-800 p-6 rounded-xl transition-colors">
          <h2 className="text-2xl font-semibold text-gray-100 md:w-1/3">Etages</h2>
          <div className="md:w-2/3">
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-300">
                <span className="inline-block w-8 h-8 bg-gray-700 rounded-full mr-4 flex items-center justify-center">
                  {/* <span className="material-icons text-blue-600">home</span> */}
                </span>
                Douze (12) appartements type F3 en façade arrière
              </li>
              <li className="flex items-center text-lg text-gray-300">
                <span className="inline-block w-8 h-8 bg-gray-700 rounded-full mr-4 flex items-center justify-center">
                  {/* <span className="material-icons text-blue-600">home</span> */}
                </span>
                Douze (12) appartements type F4 en façade principale
              </li>
              <li className="flex items-center text-lg text-gray-300">
                <span className="inline-block w-8 h-8 bg-gray-700 rounded-full mr-4 flex items-center justify-center">
                  {/* <span className="material-icons text-blue-600">home</span> */}
                </span>
                Quatre appartements par niveau
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="my-8 border-gray-700" />

      {/* Mezzanie Section */}
      <section
        ref={refMezzanie}
        className={cx(
          "mb-12 transition-all duration-1000 ease-in-out transform",
          inViewMezzanie ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        )}
      >
        <div className="flex flex-col md:flex-row items-start gap-8 hover:bg-gray-800 p-6 rounded-xl transition-colors">
          <h2 className="text-2xl font-semibold text-gray-100 md:w-1/3">Mezzanie</h2>
          <div className="md:w-2/3">
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-300">
                <span className="inline-block w-8 h-8 bg-gray-700 rounded-full mr-4 flex items-center justify-center">
                  {/* <span className="material-icons text-blue-600">work</span> */}
                </span>
                Deux (2) plateaux de bureaux sur 500m²
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextWithDescription;
