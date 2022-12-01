import { useAnimation, motion } from 'framer'
import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer';

const squareVariants = { 
    visible: {opacity: 1, scale: 1, transition: {duration: 1.25}},
    hidden: {opacity: 0, scale: 0}
}
// const projectDetails = [
//     {
//         project: 'drumclass',
//         description: ''
//     }
// ]

function ProjectCards(props) { 
    const controls = useAnimation();
    const [ref, inView] = useInView();
    console.log(props.project);
    const background = props.project;
    console.log('-------------------------');
    console.log(background);
    console.log('-------------------------');
    useEffect(() => {
        
        if (inView) {
            controls.start('visible');
        }
        
    }, [controls, inView])
   
    
  return (
    <div className='flex justify-center flex-col items-center mt-10'>
    <motion.div 
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={squareVariants}
    className={` w-11/12 h-56 md:w-9/12 md:h-96 lg:w-7/12 flex justify-center items-center rounded-md mt-5 mb-5 bg-${background} bg-center bg-cover bg-no-repeat md:bg-contain `}>
    </motion.div>

    </div>
  )
}

export default ProjectCards