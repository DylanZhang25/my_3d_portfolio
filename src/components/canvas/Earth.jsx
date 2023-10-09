// src\components\canvas\Earth.jsx

import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const { scene, animations } = useGLTF('./solar_system_animation/scene.gltf');
  // animations is an array of AnimationClips
  // console.log(animations);
  const { ref, actions } = useAnimations(animations); // useAnimations() returns an object with two properties: ref and actions
  
  useEffect(() => {
    // Play the animation
    if (actions.Animation) {
      actions.Animation.play();  
    }
  }, [actions]);
  
  return (
    <mesh ref={ref}>
      <primitive object={scene} scale={0.03} />
    </mesh>
  );
}

const EarthCanvas = () => { 
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 5]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          maxPolarAngle={Math.PI}  // allow full rotation from top to bottom
          minPolarAngle={0}        // allow full rotation from top to bottom
        />
        <ambientLight intensity={0.75} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;
