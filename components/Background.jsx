import React from 'react'
import { Scroll } from '@react-three/drei'
import {OrbitControls, Stars, Sky, ScrollControls, Sparkles, Cloud} from '@react-three/drei'
import { motion } from 'framer-motion-3d'
export function Background(props) {
  return <>
      <ambientLight intensity={5}/>
      <Stars radius={300} depth={100} count={5000} factor={15} saturation={0} fade={true} speed={1}/>
      {/* <Sky distance={100050000} sunPosition={[0, 1, 1]} inclination={0} azimuth={0.25} {...props} /> */}
      </>
}

