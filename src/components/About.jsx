import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "../styles/about.css"; // Importando o CSS para a página AboutUs

const AboutUs = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="about-heading">
        <p className={`about-subtitle ${styles.sectionSubText}`}>Um Gole de Rybena</p>
        <h2 className={`about-title ${styles.sectionHeadText}`}>Sobre a Cafeteria Rybena</h2>
      </motion.div>

      <motion.p
  variants={fadeIn("", "", 1, 1)}
  className={`about-description ${styles.padding} mt-4 text-[#597E52] max-w-3xl mx-auto`}
  style={{ backgroundColor: "#C6A969", fontSize: "1.6rem", lineHeight: "2.5rem", textAlign: "center" }}
>
  Apaixonados por café e tecnologia, somos a Cafeteria Rybena, um lugar onde a magia da cafeína encontra a inovação digital. Como baristas do mundo da programação, contamos com mais de 3 anos de experiência em misturar ingredientes como React, Node e MySQL para criar um sabor único na web.

  Junte-se a nós na jornada onde cada linha de código é uma nota em nossa sinfonia digital, e cada visita à nossa cafeteria é uma degustação de novas descobertas tecnológicas. Bem-vindo à Cafeteria Rybena, onde o café encontra a inovação em cada xícara.
</motion.p>

    </>
  );
};

export default SectionWrapper(AboutUs, "about");
