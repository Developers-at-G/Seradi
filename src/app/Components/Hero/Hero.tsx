import React from "react";
import cx from "clsx";
import s from "./Hero.module.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

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
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 font-sans tracking-tight">
            Appartement de luxe à Ouakam
          </h1>
          <div className={cx('mt-8', s['animated-text-container'])}>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-4">
              Trouver votre
              <span className={cx(s['rotating-text-wrapper'], 'inline-block ml-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600')}>
                <span className={s['rotating-text']}>espace</span>
                <span className={s['rotating-text']}>place</span>
                <span className={s['rotating-text']}>maison</span>
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
