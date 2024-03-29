import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import {Background} from '../components/Background'
import React, {useState, Suspense, useEffect} from 'react'
import styled from 'styled-components'
import {Canvas} from '@react-three/fiber'
import * as THREE from 'three'
import Skills from '../components/Skills'
import Examples from '../components/Examples'
import { motion } from 'framer-motion'
import Work from '../components/Work'
import Contact from '../components/Contact'


// const CanvasContainer = styled.div`
// // width:100%
// // height:100%
// // `
export default function Home() {
  const [color, setColor] = useState(false)
  

  const handleColor = () => {
    if (window.scrollY >= 5){
        setColor(true)
    }
    else {
        setColor(false)
    }
  }
  
  
  return (
    <div>
      <Head>
        <title>Atiqul Islam | Software Engineer</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className='h-[100vh]'>
        <Landing/>
        <Canvas>
          <Suspense fallback={null}>
            <Background/>
          </Suspense>
        </Canvas>
      </div>
      <About/>
      <Skills/>
      <Examples/>
      <Work/>
      <Contact/> 
    
    </div>
  )
}
