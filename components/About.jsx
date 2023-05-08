import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RLOGO from '../public/assets/react-1-logo-black-and-white.png'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import images from "../data/Images"
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [width, setWidth] = useState(0)
    const slider = useRef()

    useEffect(() => {
        console.log(slider)
    }, [])

    const [ref, inView] = useInView({
        threshold: 0.2, // The percentage of the element that must be visible to trigger the callback
        triggerOnce: true, // Only trigger the callback once
      });

    const containerVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.3, // add a delay so the cards stagger after the container animation
            staggerChildren: 0.5, // stagger the card animation
            duration: 1, // Increase the duration of the animation
            ease: "easeInOut", // Use an easing function to make it smoother
             },
        },
      };
      
    const cardVariants = {
        hidden: {
          opacity: 0,
          y: 300,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1, // Increase the duration of the animation
            ease: "easeInOut", // Use an easing function to make it smoother
          },
        },
      };
      
    
    
  return (
    <div  id='about' className='flex items-center text-center relative'>
        <div className='container mx-auto rounded-2xl' ref={ref}>
        
            <h1 className='py-4 mt-20 uppercase'>About;</h1>
            <AnimatePresence>
                {inView && (
                    <>
                        <motion.div
                        className="flex flex-wrap md:justify-center overflow-hidden"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        >
                            <motion.div className='p-4 sm:w-1/2 lg:w-1/3'  variants={cardVariants}>
                                <div className='h-full border-2 border-indigo-700 border-opacity-60 rounded-lg overflow-hidden'> 
                                    <Image src={require('../public/assets/React-Icon.jpg')} alt='' className=' w-full lg:h-72 md:h-48 md:block md:w-full md:object-cover md:object-center hidden md:border-indigo-700'></Image>
                                    <div className='p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in'>
                                        <h3 className='text-md font-medium text-indigo-300 mb-1'>Full Stack;</h3>
                                        <h2 className='text-xl font-semibold mb-3'>Web Developer &#123;</h2>
                                        <p className=' text-sm leading-relaxed mb-3'>I am an experienced Web Developer who has worked on over 30 projects &#125;</p>
                                        <div className='flex items-center flex-wrap'>
                                            <Link href={'/'} className='text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0'>See-My-Work() =&gt;</Link>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                            <motion.div className='p-4 sm:w-1/2 lg:w-1/3'  variants={cardVariants}>
                                <div className='h-full border-2 border-indigo-700 border-opacity-60 rounded-lg overflow-hidden'> 
                                    <Image src={require('../public/assets/Data.jpg')} alt='' className='w-full lg:h-72 md:h-48 md:block md:w-full md:object-cover md:object-center hidden md:border-indigo-700'></Image>
                                    <div className='p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in'>
                                        <h3 className='text-md font-medium text-indigo-300 mb-1'>Visuals, Models, Reports;</h3>
                                        <h2 className='text-xl font-semibold mb-3'>Data Analyst &#123;</h2>
                                        <p className=' text-sm leading-relaxed mb-3'>I am experienced working with data including using Machine Learning &#125;</p>
                                        <div className='flex items-center flex-wrap'>
                                            <Link href={'/'} className='text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0'>See-My-Work() =&gt;</Link>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                            <motion.div className='p-4 sm:w-1/2 lg:w-1/3'  variants={cardVariants}>
                                <div className='h-full border-2 border-indigo-700 border-opacity-60 rounded-lg overflow-hidden'> 
                                    <Image src={require('../public/assets/Devops.jpg')} alt='' className='w-full lg:h-72 md:h-48 md:block md:w-full md:object-cover md:object-center hidden md:border-indigo-700'></Image>
                                    <div className='p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in'>
                                        <h3 className='text-md font-medium text-indigo-300 mb-1'>Delivery, Administration;</h3>
                                        <h2 className='text-xl font-semibold mb-3'>DevOps &#123;</h2>
                                        <p className=' text-sm leading-relaxed mb-3'>I am an experienced with project administration using Linux &#125;</p>
                                        <div className='flex items-center flex-wrap'>
                                            <Link href={'/'} className='text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0'>See-My-Work() =&gt;</Link>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
                
        </div>
    </div>
  )
}

export default About