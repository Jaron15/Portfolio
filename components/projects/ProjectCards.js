import { useAnimation, motion } from 'framer-motion'
import React, {useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer';


const squareVariants = { 
    visible: {opacity: 1, scale: 1, transition: {duration: 1.25}},
    hidden: {opacity: 0, scale: 0}
}
const projectDetailsArray = [
    {
        project: 'drumclass',
        name: 'Drum Class',
        description: 'An application made with Next.js and MUI, used to take full advantage of free drum lessons.',
        githubLink: 'https://github.com/Jaron15/DrumClass',
        deployedLink: 'https://www.drumclass.org/'
    },
    {
        project: 'lifecompass',
        name: 'Life Compass',
        description: 'Life Compass is a powerful time management tool designed to help users stay organized and focused on what matters most to them. ',
        githubLink: 'https://github.com/Jaron15/lifecompass',
        deployedLink: 'https://lifecompass.vercel.app/'
    },
    {
        project: 'grounded',
        name: 'Grounded Electric',
        description: 'A fully interactive website developed for Grounded Electrical Service, a local Arizona business, enhancing customer interaction and service accessibility.',
        githubLink: 'https://github.com/Jaron15/GroundedElectrical',
        deployedLink: 'https://www.groundedinaz.com/'
    },
]

function ProjectCards(props) { 
    const [info, showInfo] = useState(false);

    const controls = useAnimation();
    const [ref, inView] = useInView();
    
    const selectedProject = props.project;
    useEffect(() => {
        
        if (inView) {
            controls.start('visible');
        }
        
    }, [controls, inView])
   const clickHandler = () => {
    showInfo(!info)
   }
   const projectDetails = projectDetailsArray.find((proj) => proj.project === selectedProject)
   
   

  return (
    <div className='flex justify-center flex-col items-center mt-10'>
    <motion.div 
    onClick={clickHandler}
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={squareVariants}
    style={{backgroundImage: `url(/${selectedProject}.jpg)`}}
    className={`xs:h-80 w-11/12 md:w-9/12 lg:w-7/12 h-56 md:h-96 flex justify-center items-center rounded-md mt-5 mb-5  bg-center bg-contain bg-no-repeat sm:bg-contain md:bg-contain`}>
        { info && 
        <div className='bg-black/80 w-full  h-full text-white flex justify-center items-center flex-col overflow-auto'>

            <div className='mb-2 xs:mb-5 underline underline-offset-2 font-semibold	
'>
                {projectDetails.name}    
            </div>

            <div className=' md:px-6 text-center mb-4 w-10/12 sm:w-3/5 md:w-8/12 lg:w-7/12 xl:w-2/5 flex'>
                {projectDetails.description}
            </div>

            <div className='flex '>
                <div className='flex justify-center align-middle text-center flex-col mx-8'>
                    <div className='flex justify-center'>
                        <a target="_blank" href={projectDetails.githubLink}>
                        <img src='/github.svg' className='w-11 text-center' />
                         </a>
                     </div>
                    <label>Visit Github </label> 
                </div>

                { projectDetails.deployedLink && <div className='flex justify-center align-middle text-center flex-col mx-8 '>
                    <div className='flex justify-center'>
                        <a target="_blank" href={projectDetails.deployedLink}>
                        <img src='/web.svg' className='w-11 text-center' />
                        </a>
                    </div>
                    <label>Visit Deployed App </label> 
                </div>}
            </div>

            {/* <div className='border flex flex-row'>
            <div className='flex flex-col'>
                <img src='/github.svg'  className='mx-8 bg-black' />
                <label className='w-20 mx-8 bg-black flex justify-center text-center'>Visit Github</label>
            </div>

            <div className='flex flex-col'>
            <img src='/web.svg' className='mx-8 border ' />
                
                <label className='w-28 mx-8 bg-black text-center'>Visit Deployed Website</label>
            </div>
            </div> */}
        </div>}

    </motion.div>

    </div>
  )
}

export default ProjectCards