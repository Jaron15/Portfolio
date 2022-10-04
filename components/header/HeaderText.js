import React from 'react'
import {motion, Variants} from 'framer-motion';

const topTextAnimate = {
  y:[100,50,0],
  opacity:[0,1],
  transition:{duration:1.8}
}
  const textAnimate = {
    y:[100,0],
    opacity:[0,1],
    transition:{duration:.8, delay:.8}
  }
    const bottomTextAnimate = {
      y:[-40,0],
      opacity:[0,.25,.5,1],
      transition:{duration:.8, delay:1.5}
    }

function HeaderText() {
  return (
    <div className='bg-black w-full sm:w-3/5 h-3/5 m-auto flex 
    flex-col justify-center font-round'>
      <motion.div 
    
      viewport={{once: false, amount:1}}
    transition={{staggerChildren: 0.8}} className='w-fit self-center'>
      <motion.div animate={topTextAnimate} className='text-white w-full text-left text-7xl'>Hi</motion.div>
      <motion.div animate={textAnimate} className='text-white w-full text-left text-7xl'>I'm Jaron</motion.div>
      <motion.div animate={bottomTextAnimate} className='text-white w-full text-left text-4xl'>Front End Developer</motion.div>
      </motion.div>
      </div>
  ) 
}

export default HeaderText