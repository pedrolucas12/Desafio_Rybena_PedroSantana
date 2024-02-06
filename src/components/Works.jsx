import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { degustacaoIcon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import "../styles/works.css"; // Importando o CSS para o Hero



const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
}) => {
  return (
    <motion.div className={`project-card ${styles.WorksContainer}`}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 999,
        }}
        className='bg-secondary p-5 rounded-2xl sm:w-[360px] w-full' // Alterei para a cor secundária
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='project-card-image rounded-2xl'
          />
          <div className='project-card-overlay absolute inset-0 flex justify-end m-3'>
            <div className='project-card-hover bg-tertiary animate-pulse hover:brightness-125 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'></div>
          </div>
        </div>
        <div className='project-card-content mt-5'>
          <h3 className='project-card-title text-quaternary font-bold text-[24px]'>{name}</h3>
          <p className='project-card-description mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='project-card-tags mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`project-card-tag text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className='works-section'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} works-description`}>Veja meus</p>
        <h2 className={`${styles.sectionHeadText}`}>Diferenciais</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Aqui estão algumas das coisas incríveis que fizemos. A cada visita à nossa cafeteria é uma degustação de novas descobertas tecnológicas.
        </motion.p>
      </div>
      <div className='mt-20 flex justify-center project-card-container'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, 'works');