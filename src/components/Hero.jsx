// src\components\Hero.jsx

import React, { useContext } from 'react';
import { motion } from 'framer-motion'; // Animation library for React
import { styles } from '../styles'; // Styles component
import { ComputersCanvas } from './canvas'; // Canvas component
import ViaMobileContext from '../contexts/ViaMobileContext'; // import ViaMobileContext from React Context
import { personalInfo } from '../constants';

const Hero = () => {
  const viaMobile = useContext(ViaMobileContext);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 mt-10`}
      >
        <div id="leftArea" className='w-1/2 flex flex-row items-center'>
          <div className='flex flex-col items-center mr-10'>
            <div className="w-5 h-5 bg-transparent animate-spin"
                style={{
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                }}>
              <div className="absolute inset-0 bg-[#fc6f03]"></div>
            </div>
            <div className='w-1 sm:h-80 h-40 orange-gradient ' />
          </div>

          <div className='flex flex-col items-start'>
            <h2 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#fc6f03]'>Haitian</span>
            </h2>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop full-stack web applications. <br/> I have expertise in deploying & managing APPs on the cloud.
            </p>
          </div>
        </div>

        <div id="rightArea" className='w-1/2 flex flex-col items-center justify-center mt-16'>
          <img src={personalInfo[0].icon} alt="icon" className="w-36 h-36 rounded-full" />
        </div>     
      </div>

      <ComputersCanvas/>

      <div className='absolute xs:bottom-100 bottom-14 w-full flex justify-center items-center'>
        <a href="#about">
          <div className=
            {viaMobile ? 'w-[25px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2' : 'w-[35px] h-[65px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'}
          >
            <motion.div
              animate={{ y: [0, 35, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero