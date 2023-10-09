// src\components\About.jsx

import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div
        variants={fadeIn("right", "spring", 1*index+0.5, 0.75)}
        className='w-full blue-pink-gradient rounded-[18px] p-[1px] shadow-card'
      >
        <div
          // options={{
          //   max: 45,
          //   scale: 1,
          //   speed: 450
          // }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className='w-20 h-20 object-contain' />
          <h5 className='text-white text-[18px] font-bold text-center'>{title}</h5>
        </div>
      </motion.div>
    </Tilt>
  )
}  

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]'
      >
      I'm a software engineer with a focus on full-stack web development and over 2 years of hands-on experience.
      My expertise extends to deploying and managing applications on cloud platforms.
      I pride myself on being a swift learner, always eager to embrace new challenges and technologies.
      Collaborative teamwork is at the heart of what I do; I'm keen on both imparting my knowledge and gaining insights from peers. 
      Furthermore, I bring to the table strong professional experience with agile development process, complemented by essential soft skills like effective communication, teamwork, and leadership.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-16'>
        {services.map( (service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        )
        )
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")