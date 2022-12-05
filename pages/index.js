import React from 'react'
import Links from '../components/footer/Links'
import Arrow from '../components/header/Arrow'
import Header from '../components/header/Header'
import Projects from '../components/projects/Projects'
import TechHeader from '../components/technology/TechHeader'


export default function Home() {
  return (
    <div className='bg-black h-screen'>
    <Header />
    <Arrow />
    <TechHeader />
    <Projects />
    <Links />
  </div>
  )
}
