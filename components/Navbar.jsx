import React, {useState, useRef, useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  const [color, setColor] = useState(false)
  const handleColor = () => {
    if (window.scrollY >= 5){
        setColor(true)
    }
    else {
        setColor(false)
    }
  }
  
  if (typeof window !== "undefined") {
    window.addEventListener('scroll', handleColor)
  }
  
  

  return (
    <div className='fixed w-full h-20 shadow-md z-[100]' id={color ? 'black-bg' : 't-bg'}>
            <motion.div className='flex lg:justify-between items-center container mx-auto h-full px-2 2xl:px-16'
            initial="hidden" 
            animate="visible" 
            variants={{
                hidden: {
                  y: '-150%',
                  scale:.8,
                  opacity: 0
                },
                visible: {
                  y: '0%',
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    delay: .75
                  }
                }
              }}
            >
                <div className='lg:hidden hover:scale-105 cursor-pointer ml-5' onClick={handleNav}>
                    <AiOutlineMenu size={35} />
                </div>
                <h1 className='ml-10'>	&lt;AI/&gt;</h1>
                <div>
                    <div className='hidden md:hidden lg:flex list-none font-bold text-white'>
                        <Link href='/'>
                            <li className='mr-10 text-sm uppercase hover:text-[#9d4edd] ease-in duration-200'>\\ Home</li>
                        </Link>
                        <Link href='#about' offset={-150}>
                            <li className='mr-10 text-sm uppercase hover:text-[#9d4edd] ease-in duration-200'>\\ About</li>
                        </Link>
                        <Link href='#skills'>
                            <li className='mr-10 text-sm uppercase hover:text-[#9d4edd] ease-in duration-200 hidden md:block'>\\ Skills</li>
                        </Link>
                        <Link href='#projects'>
                            <li className='mr-10 text-sm uppercase hover:text-[#9d4edd] ease-in duration-200'>\\ Projects</li>
                        </Link>
                        <Link href='#work'>
                            <li className='mr-10 text-sm uppercase hover:text-[#9d4edd] ease-in duration-200'>\\ Work</li>
                        </Link>
                        <Link href='#contact'>
                            <li className='mr-10 text-sm uppercase hover:text-[#9d4edd] ease-in duration-200'>\\ Contact</li>
                        </Link>
                    </div>
                </div>
            </motion.div>
        <div className={nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-white/20' : ''}>
            <div className={nav ? 'fixed left-[0] top-0 w-[75%] sm:w-[65%] md:[45%] h-screen bg-[white] p-10 ease-in duration-500': 'fixed left-[-150%] top-0 w-[75%] sm:w-[65%] md:[45%] h-screen bg-[white] p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between border-b border-gray pb-4'>
                        <div><h1 className=''>&lt;AI/&gt;</h1></div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105' onClick={handleNav}>
                            <AiOutlineClose></AiOutlineClose>
                        </div>

                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm px-2 pr-2 hover:bg-[#e0aaff] rounded-md hover:text-white duration-200'>Home</li>
                            </Link>
                            <Link href='#about'>
                                <li className='py-4 text-sm px-2 hover:bg-[#e0aaff] rounded-md pr-2 hover:text-white duration-200'>About</li>
                            </Link>
                            <Link href='#skills'>
                                <li className='hidden md:block py-4 text-sm px-2 hover:bg-[#e0aaff] rounded-md pr-2 hover:text-white duration-200'>Skills</li>
                            </Link>
                            <Link href='#projects'>
                                <li className='py-4 text-sm px-2 hover:bg-[#e0aaff] rounded-md pr-2 hover:text-white duration-200'>Projects</li>
                            </Link>
                            <Link href='#work'>
                                <li className='py-4 text-sm px-2 hover:bg-[#e0aaff] rounded-md pr-2 hover:text-white duration-200'>Work</li>
                            </Link>
                            <Link href='#contact'>
                                <li className='py-4 text-sm px-2 hover:bg-[#e0aaff] rounded-md pr-2 hover:text-white duration-200'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest'>Connect With Me!</p>
                            <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar