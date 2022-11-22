import React from 'react'
import Link from 'next/link'
import projectCard from './projectCard'
import Image from 'next/image'
import image1 from '../public/assets/Devops.jpg'
import { motion } from 'framer-motion'
const Examples = () => {

  return (
    <>
    <div id='projects' className='mt-[20vh] w-full relative'>
        <div className='container mx-auto  p-12 rounded-2xl'>
            <div>
                <h1 className='text-center mb-12 text-indigo-600 mt-12 uppercase'>Projects;</h1>
                <div className='text-white bold mb-6'><h3>filter by 	&#160;</h3> 
                <p>
                    <Link href='/' className='hover:text-indigo-600'>All</Link>&#160;//&#160; 
                    <Link href='/' className='hover:text-indigo-600'>Full Stack</Link>&#160;//&#160; 
                    <Link href='/' className='hover:text-indigo-600'>API</Link>&#160;//&#160;
                    <Link href='/' className='hover:text-indigo-600'>Algorithms</Link>&#160;// &#160;
                    <Link href='/' className='hover:text-indigo-600'>Visual Data</Link>
                </p>
                </div>
            </div>
            <motion.div className='grid grid-cols-3 gap-x-6 gap-y-6 grid-flow-row-dense h-[150vh]'>
                <motion.div className='bg-gray-800  rounded-lg shadow-lg shadow-black min-h-[30vh]' whileHover={{scale: 1.05}}>
                    <Image src={image1} alt='' className='object-cover rounded-t-lg'></Image>
                   <div className='pb-16 ml-12'>
                        <h3 className='font-bold text-white mt-4'>Nivaly Creative Agency</h3>
                        <motion.h4 className='text-gray-200 hover'>Fullstack</motion.h4>
                        <motion.div className='mt-4'><Link href='/' className='text-gray-200 hover:text-purple-500'>View Project__</Link></motion.div>
                   </div>
                </motion.div>
                <motion.div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <motion.div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh] col-span-2 row-span-2' />
                {/* <div className='bg-orange-500 rounded-lg shadow-xl min-h-[30vh]' /> */}
                <div className='bg-gray-800 rounded-lg shadow-xl shadow-black min-h-[30vh]' />
                {/* <div className='bg-green-500 rounded-lg shadow-xl min-h-[30vh]' /> */}
                {/* <div className='bg-teal-500 rounded-lg shadow-xl min-h-[30vh]' /> */}
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
            </motion.div>
        </div>
    </div>
    </>
  )
}

export default Examples