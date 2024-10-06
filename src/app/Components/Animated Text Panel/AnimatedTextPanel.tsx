import React, { useEffect, useRef } from "react";
import cx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./AnimatedTextPanel.module.scss";
import { Content } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextPanel = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.querySelectorAll("h1 span");

      gsap.fromTo(
        words,
        { opacity: 0.2 },
        {
          opacity: 1,
          duration: 5,
          stagger: 1.25,
          ease:"power1.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom bottom",
            scrub: true,
            markers: false
          },
        }
      );
    }
  }, []);

  return (
    <div className={cx(s['animated-text-panel'])} ref ={containerRef}>
        <div className={cx("text-center text-2xl sm:text-3xl lg:text-4xl uppercase mt-20 mb-10 ", s['animated-text-panel__title'])}>A Propos</div>
        <div className={cx(s["animated-text-panel__body"], 'h-full')} ref={textRef}>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans overflow-hidden mt-6 uppercase text-center">
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
