import React, { useEffect } from 'react'
import {motion, useAnimation} from 'framer';
import {useInView} from 'react-intersection-observer'


function TechIcons({setTechnology}) {
    const container = {
        hidden: { rotate: 0 },
        show: {
            rotate: 0,
            transition: {
                staggerChildren: .25,
                delayChildren: .3
            },
        },
    }
    const iconVariant = {
        hidden: {scale: 0, rotate: -180},
        show: {scale: 1, rotate: 0, transition: {duration: .6}}
    }
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => { 
    if (inView) {
        controls.start('show');
    }
    }, [controls, inView])
    const clickHandler = (tech) => {
        setTechnology(tech)
    }
  return (
    <div className='w-4/5 sm:w-5/12 md:w-2/4 lg:w-2/5 xl:w-2/6 2xl:w-1/4 h-56 mx-auto '>
        <motion.div 
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={container}
        className='flex flex-wrap justify-center '>
        <motion.img variants={iconVariant} onClick={() => clickHandler('React')} src='/react.svg' alt='React' className='p-2 md:p-4 hover:cursor-pointer'/>
        <motion.img variants={iconVariant} onClick={() => clickHandler('Next.js')} src='/next-js.svg' alt='Next.js' className='p-2 md:p-4 hover:cursor-pointer'/>
        <motion.img variants={iconVariant} onClick={() => clickHandler('MaterialUI')} src='/material.svg' alt='Material ui' className='p-2 md:p-4 hover:cursor-pointer'/>
        <motion.img variants={iconVariant} onClick={() => clickHandler('TailwindCSS')} src='/tailwind.svg' alt='Tailwind css' className='p-2 md:p-4 hover:cursor-pointer'/>
        <motion.img variants={iconVariant} onClick={() => clickHandler('Redux')} src='/redux.svg' alt='Redux' className='p-2 md:p-4 hover:cursor-pointer'/>
        <motion.img variants={iconVariant} onClick={() => clickHandler('Node.js')} src='/nodejs.svg' alt='Node.js' className='p-2 md:p-4 hover:cursor-pointer'/>
        <motion.img variants={iconVariant} onClick={() => clickHandler('MongoDB')} src='/mongodb.svg'alt='MongoDB' className='p-2 md:p-4 hover:cursor-pointer'/>
        <motion.img variants={iconVariant} onClick={() => clickHandler('CSS')} src='/css.svg' alt='CSS' className='p-2 md:p-4 hover:cursor-pointer'/>
        {/* <img src='/javascript.svg' className='p-2 md:p-4'/> */}
        </motion.div>
    </div>
  )
}

export default TechIcons