import React, { useState } from 'react'
import WorkData from '../data/workData'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { IoMdArrowDropright } from 'react-icons/io';
import {delay, motion, AnimatePresence} from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Work = () => {
    const [open, setOpen] = useState(true)

    const handleClick = (id) => {
      setOpen((prevState) => ({...prevState, [id]: !prevState[id] }))
      console.log(open)
    }

    const [ref, inView] = useInView({
        threshold: 0.3, // The percentage of the element that must be visible to trigger the callback
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
    <div id='work' className='h-[100%] min-h-[80vh] pt-[10vh] flex relative'>
        <div className='container mx-auto rounded-2xl pb-32 my-0' ref={ref}>
            <h1 className='py-4 mt-20 uppercase text-indigo-600 text-center'>Work Experience;</h1>
            <AnimatePresence>
                {inView && ( 
                    <motion.div className='grid place-content-center mt-12'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    >
                        <motion.div className='grid gap-y-6 min-w-5xl md:max-w-5xl' variants={cardVariants}>
                        {WorkData.map((item) => {
                            return(
                                <>
                                <motion.div layout className='w-[90vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] flex flex-col '>
                                    <motion.div layout key={item.id} className=' bg-gray-900 rounded-lg shadow-lg shadow-black'>
                                        <motion.div layout className='flex justify-between ml-2'>
                                            <motion.div layout>
                                                <motion.p className='pl-2 pt-2 font-bold uppercase'>{item.jobName}</motion.p>
                                                <motion.span  className=' pb-2 text-purple-400 pl-2 font-bold opacity-80'>{item.companyName} - {item.date}</motion.span>
                                            </motion.div>
                                            <motion.div  onClick={() => handleClick(item.id)}>
                                            {open[item.id] ? <AiOutlinePlus size={38}  className=' hover:bg-gray-300 rounded-full hover:bg-opacity-10 cursor-pointer mt-2 mr-2 p-2'/> : 
                                                    <AiOutlineMinus size={38} className=' hover:bg-gray-300 rounded-full hover:bg-opacity-10 cursor-pointer p-2 mt-2 mr-2'/>}
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                    {!open[item.id] && 
                                    <motion.ul layout className='bg-gray-300 rounded-lg pl-2 mt-4' initial={{opacity: 0, y:-30}} animate={{opacity: 1, y:0}} exit={{opacity: 0, y:-30}} transition={{duration: 0.3, delay: 0.3}}>
                                          {item.details.map((point, index) => (
                                            <div key={index} className="pb-4 pt-2">
                                              <div className='flex'><IoMdArrowDropright className="mr-2 mt-1 flex-shrink-0" size={20}/> {point}</div>
                                            </div>
                                          ))}
                                   
                                    </motion.ul>}
                                </motion.div>
                                </>
                            )
                        })}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default Work
