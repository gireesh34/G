import { useEffect, useRef } from 'react';
import SomeComponent from './SomeComponent'; // Adjust the path as necessary
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg from '../assets/herobg.png';
import * as THREE from 'three';
import React, { Suspense } from 'react';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    let renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn('WebGL context lost, attempting to restore...');
      renderer.forceContextRestore();
    };

    const handleContextRestored = () => {
      console.log('WebGL context restored, reinitializing renderer...');
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    };
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);
    renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);

    return () => {
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, []);
  return (
    <section className={`relative w-full h-screen mx-auto`} style={{ backgroundImage: `url(${herobg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
      
      <div className={`${styles.paddingX} absolute inset-0 top-[60px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[violet]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[violet]">Gireesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-2 bottom-2 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 26, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <SomeComponent />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;
