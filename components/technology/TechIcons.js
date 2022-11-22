import React from 'react'
import Image from 'next/image'


function TechIcons() {
  return (
    <div className='w-4/5 sm:w-5/12 md:w-2/4 lg:w-2/5 xl:w-2/6 2xl:w-1/4 h-56 mx-auto '>
        <div className='flex flex-wrap justify-center '>
        <img src='/react.svg' alt='React' className='p-2 md:p-4'/>
        <img src='/next-js.svg' alt='Next.js' className='p-2 md:p-4'/>
        <img src='/material.svg' alt='Material ui' className='p-2 md:p-4'/>
        <img src='/tailwind.svg' alt='Tailwind css' className='p-2 md:p-4'/>
        <img src='/redux.svg' alt='Redux' className='p-2 md:p-4'/>
        <img src='/nodejs.svg' alt='Node.js' className='p-2 md:p-4'/>
        <img src='/mongodb.svg'alt='MongoDB' className='p-2 md:p-4'/>
        <img src='/css.svg' alt='CSS  ' className='p-2 md:p-4'/>
        {/* <img src='/javascript.svg' className='p-2 md:p-4'/> */}
        </div>
    </div>
  )
}

export default TechIcons