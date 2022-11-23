import React,{ useState }  from 'react'
import { motion } from 'framer-motion'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const workCard = (props) => {

// eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(true)

  const handleClick = (id) => {
    setOpen(!open)
  }
  return (
    <motion.div className=' bg-gray-900 rounded-lg shadow-lg shadow-black w-[75vh]'>
            <motion.div className='flex justify-center justify-between ml-2'>
                <motion.div>
                    <motion.p className='pl-2 pt-2 font-bold uppercase'>JOb Name</motion.p>
                    <motion.span className=' pb-2 text-purple-400 pl-2 font-bold opacity-80'>Company name</motion.span>
                </motion.div>
                <motion.div onClick={() => setOpen(!open)}>
                {open ? <AiOutlinePlus size={38}  className=' hover:bg-gray-300 rounded-full hover:bg-opacity-10 cursor-pointer mt-2 mr-2 p-2'/> : 
                        <AiOutlineMinus size={38} className=' hover:bg-gray-300 rounded-full hover:bg-opacity-10 cursor-pointer p-2'/>}
                </motion.div>
            </motion.div>
            {!open && 
            <motion.div className='bg-gray-300 rounded-b-lg pl-2'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </motion.div>}
    </motion.div>
  )
}

export default workCard