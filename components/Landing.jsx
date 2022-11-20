import React from 'react'
import { AiOutlineMail, AiOutlineDown } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {RiMailFill} from 'react-icons/ri'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const Landing = () => {
  return (
    <div className='absolute w-full h-screen text-center z-[95]'>
        <div className='container mx-auto h-full w-full p-2 flex justify-center items-center'>
            <div>
                <h1 className='uppercase tracking-widest sm:7xl md:text-8xl'>Atiqul Islam</h1>
                <motion.h2 className='text-[#e0aaff] sm:4xl md:text-5xl' initial="hidden" animate="visible" variants={{
              hidden: {
                y: '20%',
                scale:.8,
                opacity: 0
              },
              visible: {
                y: '0%',
                scale: 1,
                opacity: 1,
                transition: {
                  type: 'spring',
                  delay: 0.9
                }
              }
            }}>
              Software Engineer & Data Analyst
            </motion.h2>
                <motion.div className='flex items-center justify-between max-w-[300px] m-auto py-4 pt-10' initial="hidden" animate="visible" variants={{
                  hidden: {
                    y: '20%',
                    scale:.8,
                    opacity: 0
                  },
                  visible: {
                    y: '0%',
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      delay: 1
                    }
                  }
                }}>
                    <motion.div className='rounded-full shadow-md  p-3 cursor-pointer hover:scale-105 bg-[white] text-black'><FaLinkedin size={40} className=" rounded-md"></FaLinkedin></motion.div>
                    <motion.div className='rounded-full shadow-md  p-3 cursor-pointer hover:scale-105 bg-[white] text-black'><FaGithub size={40} className="rounded-2xl" /></motion.div>
                    <motion.div className='rounded-full shadow-md  p-3 cursor-pointer hover:scale-105 bg-[white] text-black'><RiMailFill size={40} className=" rounded-md"/></motion.div>
                    <motion.div className='rounded-full shadow-md  p-3 cursor-pointer hover:scale-105 bg-[white] text-black'><BsPersonLinesFill size={40} className=" rounded-md"/></motion.div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Landing