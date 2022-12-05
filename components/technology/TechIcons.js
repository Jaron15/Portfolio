import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer'


function TechIcons() {
    
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
  return (
    <div className='w-4/5 sm:w-5/12 md:w-2/4 lg:w-2/5 xl:w-2/6 2xl:w-1/4 h-56 mx-auto '>
        <motion.div 
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={container}
        className='flex flex-wrap justify-center '>
        <motion.img variants={iconVariant} src='/react.svg' alt='React' className='p-2 md:p-4'/>
        <motion.img variants={iconVariant} src='/next-js.svg' alt='Next.js' className='p-2 md:p-4'/>
        <motion.img variants={iconVariant} src='/material.svg' alt='Material ui' className='p-2 md:p-4'/>
        <motion.img variants={iconVariant} src='/tailwind.svg' alt='Tailwind css' className='p-2 md:p-4'/>
        <motion.img variants={iconVariant} src='/redux.svg' alt='Redux' className='p-2 md:p-4'/>
        <motion.img variants={iconVariant} src='/nodejs.svg' alt='Node.js' className='p-2 md:p-4'/>
        <motion.img variants={iconVariant} src='/mongodb.svg'alt='MongoDB' className='p-2 md:p-4'/>
        <motion.img variants={iconVariant} src='/css.svg' alt='CSS' className='p-2 md:p-4'/>
        {/* <img src='/javascript.svg' className='p-2 md:p-4'/> */}
        </motion.div>
    </div>
  )
}

export default TechIcons