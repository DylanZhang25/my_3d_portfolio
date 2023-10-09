// src\components\Tech.jsx

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import React, { useEffect, useState } from "react";
import useIsMobile from '../hooks/useIsMobile';

const Tech = () => {
  const isMobile = useIsMobile();
  console.log(isMobile);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {
        technologies.map((technology) => (
          <div className="w-25 h-25" key={technology.name}>
            {!isMobile && <BallCanvas icon={technology.icon}/>} {/* Render only if not mobile */}
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, "tech");