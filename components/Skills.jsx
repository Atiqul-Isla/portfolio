import React from 'react'
import Images from '../data/Images'
import Image from 'next/image'
import {useState } from "react"
import Filter from './Filter'
import {AnimatePresence, LayoutGroup, motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    // ['Frontend', 'Backend', 'Database', 'Data Analysis', 'Tools', 'Languages']
  const [imageItem, setImageItem] = useState(Images)
  const [buttons, setButtons] = useState([])
  
  const filter = (button) => {
    if(button === 'All'){
        setImageItem(Images)
        return
    }
    const filteredData = Images.filter(item => item.type === button)
    console.log(filteredData)
    setImageItem(filteredData)
  }


  const [ref, inView] = useInView({
    threshold: 0.5, // The percentage of the element that must be visible to trigger the callback
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
            staggerChildren: 0.7, // stagger the card animation
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
    <div className='mx-2 min-h-[200vh] sm:min-h-[150vh] md:min-h-[125vh] lg:min-h-[100vh] xl:min-h-[75vh] hidden md:block'>
        <div id='skills' className='items-center text-center relative' ref={ref}>
            <div className='container mx-auto rounded-2xl pb-6 my-0'>
                <h1 className='mt-60 uppercase'>Skills;</h1>
            </div>
            <AnimatePresence>
                {inView && (
                    <>
                        <motion.div className='container mx-auto flex flex-wrap pb-6 pt-12'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible">
                            <motion.div variants={cardVariants}>
                                <Filter filter={filter} />
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <motion.div layout className='container mx-auto min-h-fixed h-[250px] grid  grid-cols-1 md:grid-cols-6   lg:grid-cols-8  2xl:grid-cols-9 gap-4 '>
                <AnimatePresence>
                <LayoutGroup>
                {imageItem.map((item, index) => {
                    return(
                        <motion.div 
                        layout 
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        exit={{opacity: 0}}
                        transition={{
                            opacity: { duration: 0.2, ease: 'linear'},
                            layout: { duration: 0.3 }
                          }} 
                        className={'auto flex flex-col lg:flex-row gap-40 lg:gap-0 items-center justify-between p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 md:shadow-indigo-600 mt-12'} 
                        key={item.id}
                        style={{ width: '100%', height: '75%' }}
                        >
                                 <div className="card  text-indigo-600">
                                    <Image className='hidden md:block truncate' src={item.image} width={104} height={104} alt='' />
                                    <h3 className="text-lg font-bold mt-2 uppercase truncate"><strong>{item.name}</strong></h3>
                                </div>
                        </motion.div>
                    )
                    
                })}
                </LayoutGroup>
                </AnimatePresence>
                
            </motion.div>
        </div>
    </div>
  )
}

export default Skills