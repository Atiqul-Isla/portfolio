import React, { useState } from 'react'
import WorkData from '../data/workData'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {delay, motion} from 'framer-motion'
const Work = () => {
    const [open, setOpen] = useState(true)

    const handleClick = (id) => {
      setOpen((prevState) => ({...prevState, [id]: !prevState[id] }))
      console.log(open)
    }

  return (
    <div id='work' className='h-[100%] min-h-[80vh]  flex relative'>
        <div className='container mx-auto rounded-2xl pb-32 my-0'>
            <h1 className='py-4 mt-20 uppercase text-indigo-600 text-center'>Work Experience;</h1>
            <div className='grid place-content-center mt-12'>
                <div className='grid gap-6 max-w-5xl'>
                 {WorkData.map((item) => {
                    return(
                        <>
                        <motion.div layout className='w-[50vw] flex flex-col '>
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
                            <motion.div layout className='bg-gray-300 rounded-lg pl-2 mt-4' initial={{opacity: 0, y:-30}} animate={{opacity: 1, y:0}} exit={{opacity: 0, y:-30}} transition={{duration: 0.3, delay: 0.3}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </motion.div>}
                        </motion.div>
                        </>
                    )
                })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
