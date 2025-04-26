import React from "react";
import cx from "clsx";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <div
      className={cx(
        "relative min-h-screen overflow-hidden bg-cover bg-no-repeat",
        s["hero"]
      )}
    >
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <section className="text-white text-center max-w-5xl mx-auto">
          <h1 className={cx("text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 font-sans tracking-tight", s["title-animation"])}>
            Atlantic Immo, l’excellence à votre service.
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Hero;
