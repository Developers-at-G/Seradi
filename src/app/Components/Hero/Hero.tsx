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
        <HeaderMenu/>
      <div className="flex flex-col bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
        <section className="text-white py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-sans">
            Appartement de luxe à Ouakam
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto font-sans">
            Le meilleur dans la cite
          </p>
        </section>
      </div>
    </div>
  );
};

export default Hero;
