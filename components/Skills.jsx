import React from 'react'
import Images from '../data/Images'
import Image from 'next/image'
import {useState } from "react"
import Filter from './Filter'
import {AnimatePresence, LayoutGroup, motion} from 'framer-motion'
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
    <div className='mx-2 min-h-[200vh] sm:min-h-[150vh] md:min-h-[125vh] lg:min-h-[100vh] xl:min-h-[75vh] hidden md:block'>
        <div id='skills' className='items-center text-center relative'>
            <div className='container mx-auto rounded-2xl pb-6 my-0'>
                <h1 className='mt-60 uppercase'>Skills;</h1>
            </div>
            <div className='container mx-auto flex flex-wrap pb-6 pt-12'>
                <Filter filter={filter} />
            </div>
            <motion.div layout className='container mx-auto min-h-fixed h-[250px] grid  grid-cols-1 md:grid-cols-6   lg:grid-cols-8  2xl:grid-cols-9 gap-4'>
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
                        className={'auto flex flex-col lg:flex-row gap-40 lg:gap-0 items-center justify-between p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 md:shadow-indigo-600 mt-12 lg:mx-2'} 
                        key={item.id}
                        style={{ width: '100%', height: '75%' }}
                        >
                                 <div className="card  text-indigo-600">
                                    <Image className='hidden md:block' src={item.image} width={104} height={104} alt='' />
                                    <h3 className="text-lg font-bold mt-2 uppercase"><strong>{item.name}</strong></h3>
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