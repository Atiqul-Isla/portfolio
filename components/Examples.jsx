import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image1 from '../public/assets/Devops.jpg'
import { motion } from 'framer-motion'
import projects from '../data/projectData'
const Examples = () => {

  return (
    
    <div id='projects' className='mt-[20vh] w-full'>
        <div className='container mx-auto  p-12 rounded-2xl'>
            <h1 className='text-center mb-12 text-indigo-600 mt-12 uppercase'>Projects;</h1>
                <p className='text-white mb-6'>
                    <Link href='/' className='hover:text-indigo-600'>All</Link>&#160;//&#160; 
                    <Link href='/' className='hover:text-indigo-600'>Full Stack</Link>&#160;//&#160; 
                    <Link href='/' className='hover:text-indigo-600'>API</Link>&#160;//&#160;
                    <Link href='/' className='hover:text-indigo-600'>Algorithms</Link>&#160;// &#160;
                    <Link href='/' className='hover:text-indigo-600'>Visual Data</Link>
                </p>
            <div className='grid  xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6 grid-flow-row-dense h-[300vh] lg:h-[300vh] xl:h-[150vh]'>
                {projects.map((project) => {
                    return(
                        <div key={project.id} className={project.class}>
                            <Image src={project.image} alt='' className='object-cover rounded-2xl shadow-gray-900 shadow-lg w-full h-full'></Image>
                            <motion.div className='pb-16 ml-12 object-contain'>
                                <p className='font-bold text-white mt-2 md:mt-4'>Nivaly Creative Agency</p>
                                <motion.div className=''><Link href='/' className='text-gray-200 hover:text-purple-500'>View Project__</Link></motion.div>
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Examples

