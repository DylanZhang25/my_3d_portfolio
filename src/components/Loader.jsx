// src\components\Loader.jsx

import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      {/* Flex container to position the loader */}
      <div className="flex items-center justify-center w-screen h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-36">
        <div className="relative w-32 h-32">
          <div className="w-32 h-32 border-t-4 border-white rounded-full animate-spin"></div>
          <p 
            className="text-xl text-white font-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{fontSize: '1.5rem', fontWeight: 300}}
          >
              {progress.toFixed(2)}% loaded
          </p>
        </div>
      </div>
    </Html>
  )
}

export default Loader