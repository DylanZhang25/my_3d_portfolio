//src\components\Works.jsx

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants'; 
import { zoomIn, fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={zoomIn(0.1, 1)}>
      <Tilt className="bg-custom1 p-5 rounded-2xl sm:w-[360px] w-full" options={{max:45, scale:1, speed:500}}>
        {/* Display the project screenshot */}
        <div className='relative w-full h-[200px]'>
          <img src={image} alt={name} className='w-full h-full object-contain rounded-2xl' />
          
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='w-10 h-10 rounded-full bg-[#fc6f03] flex justify-center items-center cursor-pointer'>
              <img src={github} alt="github" className='w-5/6 h-5/6 object-contain' />
            </div>
          </div>
        </div>
        {/* Display the project name and description */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[25px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[12px]'>{description}</p>
        </div>
        {/* Display the project tags */}
        <div className='mt-5 flex flex-wrap gap-2'>
          {
            tags.map( (tag) => (
              <p key={tag.name} className={`text-[11px] font-bold ${tag.color}`}>
                # {tag.name}
              </p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Every day is a school day: </p>
        <h2 className={styles.sectionHeadText}>My Projects:</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.2, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        The projects showcased below are a testament to my skills and expertise.
        Each project is accompanied by a succinct description, GitHub links to the source code, and live demos. 
        They collectively highlight my proficiency in tackling intricate challenges, adapting to new technologies, and steering projects to success.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {
          projects.map( (project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ) )
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works, "Projects");