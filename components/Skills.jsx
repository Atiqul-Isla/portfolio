import React from 'react'
import Images from './Images'
import Image from 'next/image'
import {useState } from "react"
import Filter from './Filter'
import {AnimatePresence, motion} from 'framer-motion'
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

  return (
    <div>
        <div id='skills' className='h-full  bottom-[20vh] items-center  text-center relative'>
            <div className='container mx-auto rounded-2xl pb-6 my-0'>
                <h1 className='mt-60'>Skills;</h1>
            </div>
            <div className='container mx-auto flex flex-wrap pb-6 pt-12'>
                <Filter filter={filter} />
            </div>
            <motion.div layout className='container mx-auto h-full grid  grid-cols-3 md:grid-cols-4   lg:grid-cols-8  2xl:grid-cols-9 gap-4'>
                <AnimatePresence>
                {imageItem.map(item => {
                    return(
                        <motion.div layout initial={{opacity: 1}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{opacity: { duration: 1 },x: { duration: 0.3 }}}className={'flex flex-col lg:flex-row gap-40 lg:gap-0 items-center justify-between p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 shadow-indigo-600 mt-12 lg:mx-2'} key={item.id}>
                                <Image src={item.image} width={104} height={104} alt=''></Image>
                        </motion.div>
                    )
                    
        
                })}
                </AnimatePresence>
                
            </motion.div>
        </div>
    </div>
  )
}

export default Skills