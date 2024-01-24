import React from 'react'

function Links() {
  return (
    <div className='flex justify-center items-center flex-col'>
        <div className=' lg:flex text-white text-6xl font-round mb-6'>
    Find Me:
        </div>
        
        <a  href='mailto:jaronkenyon@gmail.com' className='text-white bg-black hover:bg-white border-t-4 border-neutral-400 lg:border-none h-20 w-full lg:w-2/3 flex hover:text-black transition ease-in-out duration-1200'>
            <div className='flex justify-start items-center h-full   w-1/2 text-2xl pl-4 md:pl-6 font-semibold'>
            Email
            </div>
            <div className='flex jusify-center items-center h-full  w-1/2 '>
            <div className='flex w-full justify-end mr-4 md:mr-6'>
            <img src='/email.svg' className='w-11 text-center ' />
            </div>
            </div>
        </a>
       

        <a target="_blank" rel="noreferrer noopener" href='https://github.com/Jaron15' className='text-white bg-black hover:bg-white border-t-4 border-neutral-400 lg:border-none h-20 w-full lg:w-2/3 flex hover:text-black transition ease-in-out duration-1200'>
            <div className='flex justify-start items-center h-full  w-1/2 text-2xl pl-4 md:pl-6 font-semibold'>
            Github
            </div>
            <div className='flex jusify-center items-center h-full  w-1/2   '>
            <div className='flex w-full justify-end mr-4 md:mr-6'>
            <img src='/github.svg' className='w-11 text-center ' />
            </div>
            </div>
        </a>

        <a target="_blank" rel="noreferrer noopener" href='https://www.linkedin.com/in/jaron-kenyon-41917b217/' className='text-white bg-black hover:bg-white border-t-4 border-neutral-400 lg:border-none h-20 w-full lg:w-2/3 flex hover:text-black transition ease-in-out duration-1200'>
            <div className='flex justify-start items-center h-full   w-1/2 text-2xl pl-4 md:pl-6 font-semibold'>
            LinkedIn
            </div>
            <div className='flex jusify-center items-center h-full  w-1/2 '>
            <div className='flex w-full justify-end mr-4 md:mr-6'>
            <img src='/linkedin.svg' className='w-11 text-center ' />
            </div>
            </div>
        </a>
    </div>
  )
}

export default Links