import React from 'react'
import Links from '../components/footer/Links'
import Arrow from '../components/header/Arrow'
import Header from '../components/header/Header'
import Projects from '../components/projects/Projects'
import TechHeader from '../components/technology/TechHeader'
import Head from 'next/head'


export default function Home() {
  return (
    <>
    <Head>
    <link rel="icon" href="/favicon2.ico" />
    <link rel="apple-touch-icon" href="/favicon2.ico" />
    </Head>
    <div className='bg-black h-screen'>
    <Header />
    <Arrow />
    <TechHeader />
    <Projects />
    <Links />
  </div>
  </>
  )
}
