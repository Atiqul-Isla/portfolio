import React, { useState } from 'react'
import WorkData from '../data/workData'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
const Work = () => {
 
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div id='work' className='h-[100%] flex relative'>
        <div className='container mx-auto rounded-2xl pb-32 my-0'>
            <h1 className='py-4 mt-20 uppercase text-indigo-600 text-center'>Work Experience;</h1>
            <div className='grid place-content-center mt-12'>
                <div className='grid gap-6 max-w-5xl'>
                    {WorkData.map((item) => {
                        return(
                            <div key={item.id} className='p-2 bg-gray-800 rounded-lg shadow-md shadow-black w-[75vh] flex justify-between'>
                                <div>
                                    <p>{item.jobName}</p>
                                    <p>{item.companyName}</p>
                                </div>
                                <div className='relative items-center text-indigo-600' onclick={handleOpen}>
                                    <AiOutlinePlus size={40} className={open ? 'visible hover:scale-[1.1] hover:bg-gray-300 hover:rounded-full p-2 cursor-pointer hover:bg-opacity-10' : 'hidden'}/>
                                    <AiOutlineMinus size={38} className={open ?'hidden' : 'visible hover:scale-[1.1] hover:bg-gray-300 hover:rounded-full p-2 cursor-pointer hover:bg-opacity-10' }/>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    </div>
  )
}

export default Work