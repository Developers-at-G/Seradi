import React, { useEffect, useRef } from "react";
import cx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./AnimatedTextPanel.module.scss";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextPanel = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.querySelectorAll("h1 span");

      gsap.fromTo(
        words,
        { opacity: 0.5, y: "100%" },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: true,
            markers: true
          },
        }
      );
    }
  }, []);

  return (
    <div className="mt-100">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-sans overflow-hidden mt-6 uppercase mt-6">A Propos</h1>
        <div className={cx(s["animated-text-panel"])} ref={textRef}>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans overflow-hidden mt-6 uppercase">
        {`La résidence SERADI, se situe dans la Commune de Ouakam du coté résidentiel, Le site est très accessible car le projet vient s’insérer à l’intérieur d’un tissu urbain relativement dense, d’une part irriguée par l’Avenue Cheikh Anta Diop et de l’autre, animé par le Lycée français Jean Mermoz.`
          .split(" ")
          .map((word, index) => (
            <span key={index} style={{ display: "inline-block", overflow: "hidden" }}>
              {word}&nbsp;
            </span>
          ))}
      </h1>
    </div>
    </div>
    
  );
};

export default AnimatedTextPanel;
