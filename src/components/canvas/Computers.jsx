// src\components\canvas\Computers.jsx

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import ViaMobileContext from '../../contexts/ViaMobileContext';  // import ViaMobileContext from React Context


const Computers = ( {viaMobile} ) => {
  const computer = useGLTF('./laptop6/scene.gltf');

  return (
    <mesh>
      <ambientLight color={'#ffffff'} intensity={5} />

      {/* <hemisphereLight intensity={10} groundColor="white" /> */}
      {/* <pointLight intensity={10} /> */}
      {/* <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      /> */}
      {/* <spotLight position={[0, 10, 5]} angle={0.3} /> */}

      <directionalLight position={[0, 10, 5]} target-position={[0, 0, 0]} intensity={10}/>
      <pointLight position={[0, 5, 5]} intensity={10} />
      <spotLight position={[0, 10, 5]} target-position={[0, 0, 0]} intensity={10}/>

      <primitive
        object={computer.scene}
        scale={viaMobile? 0.75 : 1}
        // position={viaMobile? [0, -5, -1.5] : [0, -4, -1.5]}
        position={viaMobile? [0, -3.5, 0] : [0, -3.5, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [viaMobile, setViaMobile] = useState(false);

  useEffect(() => {
    // Add a listener for the screen size change
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    // Set the initial state of the screen size to "viaMobile"
    setViaMobile(mediaQuery.matches);
    // Define a callback function to handle changes to mediaQuery
    const mediaQueryChangeHandler = (e) => {
      setViaMobile(e.matches); // e.matches is true if the media query is satisfied
    };
    // Add the callback function as a listener to mediaQuery
    mediaQuery.addEventListener('change', mediaQueryChangeHandler);
    /**
     * Optional but Suggested
     * If you don't remove the listener, it will be triggered multiple times when the media query is satisfied.
     */
    return () => {  
      mediaQuery.removeEventListener('change', mediaQueryChangeHandler);
    }
  }, []);


  return (
    <Canvas
      frameloop='demand' 
      shadows 
      camera={{ position: [-5, 15, -20], fov: 25 }}
      // gl={{ preserveDrawingBuffer: true }}
      gl={{ alpha: true }}
    >
      <ViaMobileContext.Provider value={viaMobile}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2} // rotate camera only vertically
            minPolarAngle={Math.PI / 2} // rotate camera only vertically
            maxAzimuthAngle={Math.PI / 2} // 180 degrees to the right
            minAzimuthAngle={-Math.PI / 2} // 180 degrees to the left
            target={[0, 0, 0]} 
          />
          
          <Computers viaMobile={viaMobile} />

        </Suspense>
      </ViaMobileContext.Provider>
        
      <Preload all />

    </Canvas>
  )
}

export default ComputersCanvas;