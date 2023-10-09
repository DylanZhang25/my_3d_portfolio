// src\components\Experience.jsx

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { color, motion } from 'framer-motion';
import { styles } from '../styles';
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const ExperienceCard = ({ experience }) => (
  // VerticalTimelineElement component to create a vertical timeline style for the experience entry
  <VerticalTimelineElement 
    contentStyle={{ background: '#1d1836', color:'#fff'}}
    contentArrowStyle={{ borderRight: '7px solid  #1d1836' }}
    date={ experience.date }
    iconStyle={{ background: experience.iconBg }}
    // icon 属性接受一个 React 元素作为其值，因此可以在这里传递任何我们想要的东西，包括图像、SVG、图标字体等。
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className="w-[95%] h-[95%] object-contain" />
      </div>
  }>

    <div>
      <h3 className="text-white text-[20px] font-bold">
        {experience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 spac-y-2">
      {
        experience.points.map( (point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[15px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))
      }
    </ul>

  </VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My progress up to now is: </p>
        <h2 className={styles.sectionHeadText}>Career Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map( (experience, index) => (
            <ExperienceCard key={index} experience={experience} />

          ))}
        </VerticalTimeline>
      </div>
    
    </>
  )
}

export default SectionWrapper(Experience, "experience")