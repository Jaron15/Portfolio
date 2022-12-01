import Head from 'next/head'
import Image from 'next/image'
import Arrow from '../components/header/Arrow'
import Header from '../components/Header/Header'
import Projects from '../components/projects/Projects'
import TechHeader from '../components/technology/TechHeader'


export default function Home() {
  return (
    <div className='bg-black h-screen'>
    <Header />
    <Arrow />
    <TechHeader />
    <Projects />
  </div>
  )
}
