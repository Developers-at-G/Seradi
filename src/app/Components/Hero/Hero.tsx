import React from "react";
import cx from "clsx";
import s from "./Hero.module.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Hero = () => {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 pt-0 text-center",
        s["hero"]
      )}
    >
      <HeaderMenu />
      <div className="flex flex-col bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed justify-center">
        <section className="text-white py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-sans">
            Appartement de luxe à Ouakam
          </h1>
          <div className={cx('text-2xl sm:text-3xl lg:text-4xl font-sans overflow-hidden mt-6 uppercase', s[' hero-animated-text'])}>
          <h3>
            Trouver votre{" "}
            <h3 className={cx(s['hero--rotating-text'], 'bold')}>
              <h3 className={cx ('bold')}>espace</h3>
              <h3 className={cx ('bold')}>place</h3>
              <h3 className={cx ('bold')}>maison</h3>
            </h3>
          </h3>
        </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
