import React from 'react'
import { AiOutlineMail, AiOutlineDown } from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {RiMailFill} from 'react-icons/ri'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from 'react-scroll'

const Landing = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:isla.atiqul@gmail.com';
  };

  const handleResumeClick = () => {
    window.open('/assets/resume.pdf', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Atiqul-Isla', '_blank');

  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/islam-atiqul/', '_blank');
  };
  return (
    <div className='absolute w-full h-screen text-center z-[50]'>
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
                    <motion.div className='rounded-full shadow-md  p-3 cursor-pointer hover:scale-105 bg-[white] text-black'><Link onClick={handleLinkedInClick}><FaLinkedin size={40} className=" rounded-md"></FaLinkedin></Link></motion.div>
                    <motion.div className='rounded-full shadow-md  p-3 cursor-pointer hover:scale-105 bg-[white] text-black'><Link onClick={handleGitHubClick}><FaGithub size={40} className="rounded-2xl" /></Link></motion.div>
                    <motion.div className='rounded-full shadow-md  p-3 cursor-pointer hover:scale-105 bg-[white] text-black'><Link onClick={handleEmailClick}><RiMailFill size={40} className=" rounded-md"/></Link></motion.div>
                    <motion.div className='rounded-full shadow-md  p-3 cursor-pointer hover:scale-105 bg-[white] text-black'><Link onClick={handleResumeClick}><BsPersonLinesFill size={40} className=" rounded-md"/></Link></motion.div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Landing