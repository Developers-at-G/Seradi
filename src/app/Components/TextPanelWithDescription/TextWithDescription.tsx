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
    <div className={cx("mx-auto my-10 p-8 bg-white shadow-lg", s['text-with-description'])}>
      <h1 className="text-3xl font-bold mb-6">Projets</h1>
        
      {/* Sous Sol Section */}
      <section
        ref={refSousSol}
        className={cx(
          "mb-8 flex flex-row transition-opacity duration-1000 ease-in-out",
          inViewSousSol ? "opacity-100" : "opacity-0"
        )}
      >
        <h2 className="text-xl font-semibold mb-2 w-full">Sous Sol</h2>
        <div className="w-full">
          <p>24 places de parking</p>
        </div>
      </section>
      <hr className="my-4" />

      {/* Rez de Chaussée Section */}
      <section
        ref={refRezDeChaussee}
        className={cx(
          "mb-8 flex flex-row transition-opacity duration-1000 ease-in-out",
          inViewRezDeChaussee ? "opacity-100" : "opacity-0"
        )}
      >
        <h2 className="text-xl font-semibold mb-2 w-full">Rez de Chaussée</h2>
        <div className="w-full">
          <ul className="list-disc pl-5">
            <li>Un accueil avec réception surveillée</li>
            <li>Un poste garding + Conciergerie</li>
            <li>Deux ascenseurs de 8 personnes et une cage d’escalier</li>
            <li>Une piscine privée</li>
            <li>Une salle de gym avec accès privé</li>
            <li>Une espace commerciale de 400m²</li>
          </ul>
        </div>
      </section>
      <hr className="my-4" />

      {/* Etages Section */}
      <section
        ref={refEtages}
        className={cx(
          "mb-8 flex flex-row transition-opacity duration-1000 ease-in-out",
          inViewEtages ? "opacity-100" : "opacity-0"
        )}
      >
        <h2 className="text-xl font-semibold mb-2 w-full">Etages</h2>
        <div className="w-full">
          <ul className="list-disc pl-5">
            <li>Douze (12) appartements type F3 en façade arrière</li>
            <li>Douze (12) appartements type F4 en façade principale</li>
            <li>Quatre appartements par niveau</li>
          </ul>
        </div>
      </section>
      <hr className="my-4" />

      {/* Mezzanie Section */}
      <section
        ref={refMezzanie}
        className={cx(
          "mb-8 flex flex-row transition-opacity duration-1000 ease-in-out",
          inViewMezzanie ? "opacity-100" : "opacity-0"
        )}
      >
        <h2 className="text-xl font-semibold mb-2 w-full">Mezzanie</h2>
        <div className="w-full">
          <ul className="list-disc pl-5">
            <li>Deux (2) plateaux de bureaux sur 500m²</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TextWithDescription;
