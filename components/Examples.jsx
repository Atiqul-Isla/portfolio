import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image1 from '../public/assets/Devops.jpg'
import { motion, whileHover, AnimatePresence } from 'framer-motion'
import projects from '../data/projectData'
import { useRouter } from 'next/router';
import { FaGithub, FaFilePdf, FaYoutube } from "react-icons/fa";
import Slider from "react-slick";
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Examples = ({projectData, projectId}) => {

    const selectedImage = projects.find(project => project.id === projectId);

    const hoverMotion = {
        rest: {
          color: "grey",
          x: 0,
          transition: {
            duration: 2,
            type: "tween",
            ease: "easeIn"
          }
        },
        hover: {
        //   color: "blue",
        x: 30,
          transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
          }
        }
      };
    
    const textMotion = {
        initial: {opacity: 0},
        rest: { ease: "easeOut", duration: 0.2},
        hover: {
          y: ['50%','90%'],
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeIn"
          }
        }
      };
    
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleShowPopup = (project) => {
      setSelectedProject(project);
      setShowPopup(true);
    }

    const [ref, inView] = useInView({
      threshold: 0.99, // The percentage of the element that must be visible to trigger the callback
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
            duration: 1.5, // Increase the duration of the animation
            ease: "easeInOut", // Use an easing function to make it smoother
          },
        },
      };
  

  return (
    
    <div id='projects' className='mt-[70vh] 2xl:mt-[20vh] w-full' ref={ref}>
      <AnimatePresence>
        {inView && (
          <motion.div className='container mx-auto  p-12 rounded-2xl'>
            <h1 className='text-center mb-12 text-indigo-600 mt-12 uppercase'>Projects;</h1>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
                
                <motion.div className='grid  xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6 grid-flow-row-dense h-[350vh] lg:h-[350vh] xl:h-[150vh] max-h-[350vh] max-lg:h-[350vh] max-xl:h-[150vh]'
                variants={cardVariants}
                >
                    {projects.map((project) => {
                        return(
                          <motion.div
                            key={project.id}
                            className="relative rounded-2xl shadow-lg shadow-black min-h-[20vh] cursor-pointer lg:col-span-1 group bg-gradient-to-t from-black via-black to-indigo-900"
                            initial="rest"
                            whileHover="hover"
                            // variants={cardVariants}
                          >
                            <Image
                              src={project.image}
                              alt=""
                              className="object-cover rounded-2xl shadow-gray-800 shadow-lg w-full h-full group-hover:opacity-10 ease-in duration-300 absolute t-0"
                              loading="lazy"
                            />
                            <motion.div
                              className="text-white text-center hidden group-hover:block overflow-hidden text-ellipsis whitespace-nowrap w-[100%]"
                              variants={textMotion}
                            >
                              <h4 className="">{project.name}</h4>
                              <button
                                type="button"
                                onClick={() => handleShowPopup(project)}
                                className="rounded-full px-4 py-2 mt-4 inline-block"
                              >
                                See More
                              </button>
                            </motion.div>
                          
                            {showPopup && (
                              <motion.div
                                className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-20 flex items-center justify-center z-[99] filter-none backdrop-blur-sm backdrop-brightness-100 cursor-default"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <motion.div
                                  className="bg-[#1b1d20] rounded-lg w-[60vw] h-[70vh] l "
                                  style={{overflowY: "scroll" }}
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
                                          delay: 0.75,
                                          stiffness: 50,
                                          damping: 12
                                        }
                                      }
                                  }}
                                  exit={{ opacity: 0, y: -50 }}
                                  transition={{ duration: 0.2, delay: 0.1 }}
                                >
                                
                                  <div
                                    className="absolute top-0 right-0 m-4 mt-2 text-4xl hover:text-indigo-600 cursor-pointer"
                                    onClick={() => setShowPopup(false)}
                                  >
                                    &times;
                                  </div>
                                  <div className="p-6">
                                  <h2 className="font-bold mt-6 text-center text-2xl uppercase">{selectedProject.name}</h2>
                                  <p className="text-gray-500 text-sm text-center">{selectedProject.members} | Personal Role: {selectedProject.role} | {selectedProject.date}</p>
                                  <div className="flex justify-between items-start">
                                    <div className="flex-1 mr-6">
                                      <h3 className="text-lg font-bold mb-2 mt-4">Tags:</h3>
                                      <div className="flex flex-wrap">
                                        {selectedProject.tags.map(tag => (
                                          <span className="text-indigo-500 bg-gray-800 px-2 py-1 rounded-full text-sm mr-2 mt-4 sm:text-md sm:mr-4 truncate" key={tag}>
                                            {tag}
                                          </span>
                                        ))}
                                      </div>
                                      <h3 className="text-lg font-bold mb-2 mt-4">Skills:</h3>
                                      <div className="flex flex-wrap">
                                        {selectedProject.skills.map(skill => (
                                          <span className="text-indigo-500 bg-gray-800 px-2 py-1 rounded-full text-sm mr-2 mt-4 truncate" key={skill}>
                                            {skill}
                                          </span>
                                        ))}
                                      </div>
                                      <h3 className="text-lg font-bold mt-6 mb-2">Details:</h3>
                                      <p className="text-gray-400 text-sm">{selectedProject.details}</p>
                                      <div className="rounded-lg shadow-lg overflow-hidden mb-8 mt-8">
                                          <Carousel
                                            showArrows={true}
                                            showThumbs={false}
                                            selectedItem={0}
                                            infiniteLoop={true}
                                            autoPlay={true}
                                            interval={5000}
                                            transitionTime={500}
                                            useKeyboardArrows={true}
                                            dynamicHeight={false}
                                            style={{ width: '90%', margin: '0 auto' }}
                                          >
                                            {selectedProject.slideImages.map((image, index) => (
                                              <div key={index}>
                                                <Image src={image} alt="Project detail" className="w-full max-h-[60vh] object-contain" />
                                              </div>
                                            ))}
                                          </Carousel>
                                      </div>
                                      <div className="mt-8">
                                        <h3 className="text-2xl font-bold mb-4">Features:</h3>
                                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                          {selectedProject.features.map((feature, index) => (
                                            <li key={index} className="p-4 rounded-lg shadow-lg bg-gradient-to-br from-indigo-800 to-purple-700 text-white">
                                              <h4 className="text-xl font-bold mb-2 truncate">{feature.title}</h4>
                                              <p className="text-sm">{feature.description}</p>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-8 pt-8 mb-4 flex justify-center">
                                    <a
                                      href={selectedProject.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-gray-400 hover:text-indigo-500 mx-2"
                                    >
                                      <FaGithub size={30} />
                                    </a>
                                    <a
                                      href={selectedProject.reportUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-gray-400 hover:text-indigo-500 mx-2"
                                    >
                                      <FaFilePdf size={30} />
                                    </a>
                                    <a
                                      href={selectedProject.videoUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-gray-400 hover:text-indigo-500 mx-2"
                                    >
                                      <FaYoutube size={30} />
                                    </a>
                                  </div>
                                </div>
                                </motion.div>
                              </motion.div>
                            )}
                          </motion.div>
                          
                            
                            
                        )
                    })}
                </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Examples

{/* <h1 className='text-center mb-12 text-indigo-600 mt-12 uppercase'>Projects;</h1>
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
      
                <div className='bg-gray-800 rounded-lg shadow-xl shadow-black min-h-[30vh]' />
      
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
            </motion.div> */}