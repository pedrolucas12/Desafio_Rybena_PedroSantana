// Hero.js
import React from "react";
import Marquee from "./Marquee";
import { Link } from "react-router-dom";
import { styles } from "../styles"; // Importe os estilos do arquivo styles.js
import "../styles/hero.css"; // Importando o CSS para o Hero
import logo from "../assets/logo.png"; // Importe o logo da cafeteria

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto hero`} style={{ backgroundColor: "#F1E4C3" }}>
      <div className={`absolute inset-0 top-[130px] lg:top-[170px] justify-center max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-5 hero-content`}>
        <div className="hero-text">
          <h1 className={`${styles.heroHeadText}  text-[#FFFFEC] hero-title`}>
            <span className="text-[#FFFFEC]">Cafeteria do Rybena</span>
          </h1>
          <p className={`${styles.heroSubText} lg:w-[56%] hero-description`}>
            <span className="text-[#FFFFEC]">Bem-vindo à nossa cafeteria! ☕</span>
            <span className="">
              Um lugar onde a paixão por café encontra a magia da tecnologia.
            </span>
          </p>
        </div>

        <Marquee />

      </div>
    </section>
  );
};

export default Hero;
