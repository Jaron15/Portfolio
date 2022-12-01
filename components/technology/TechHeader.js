
import {Fragment, useEffect} from 'react';
import {useAnimation, motion, useScroll, useTransform} from 'framer-motion';
import { useRef } from "react";
import React from 'react'
import TechIcons from './TechIcons';

function TechHeader() {
    const textRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:textRef
  });

  const xPosAnim = useTransform(scrollYProgress, [1, .6, .2, 0], [ -250, 0, 0, 250, ])
  const xPosAnimLine = useTransform(scrollYProgress, [1, .6, .2, 0], [ 250, 0, 0, -250, ])
  const scrollOpacity = useTransform(scrollYProgress, [1, .7, .3, 0 ], [0, 1, 1, 0])

  return (
    <Fragment>
   <div  className="bg-black" style={{height: 300, }}></div>
      <div ref={textRef} className='flex bg-black flex-col h-24 items-center text-center justify-center w-full overflow-clip'>
      <motion.h1  
      className="text-white text-2xl font-round "
      style={{x:xPosAnim, opacity: scrollOpacity}}
      >Technologies</motion.h1>
      <motion.div className="bg-cyan-800 w-56 " style={{x:xPosAnimLine, opacity: scrollOpacity,  height: 3, }}></motion.div>
      </div>
      <TechIcons />
      <div style={{}}></div>
      </Fragment>

  )
}

export default TechHeader
 