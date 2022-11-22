import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        var name = document.getElementById('name')
        var email = document.getElementById('email')
        var message = document.getElementById('message')
        const success = document.getElementById('success')
        const danger = document.getElementById('danger')

        if(name.value === '' || email.value === '' || message.value === '' ) {
            danger.style.display = 'block'
            success.style.display = 'none'

            
        } else {
            setTimeout(() => {
                name.value = ''
                email.value = ''
                message.value = ''
            }, 2000)

            emailjs.sendForm('service_dthrqjn', 'template_9ps6hpm', e.target, 'yWiJgqqQ_6TeCQOD0')
            .then((result) => {
                console.log(result.text);
                console.alert(result.text)
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            success.style.display = 'block'
            danger.style.display = 'none'

        }
      }; 
      
  return (
    <div id='contact' className='h-[100%] flex relative mt-12'>
        <div className='container mx-auto rounded-2xl pb-32 my-0 flex flex-col md:flex-row md:space-x-12 md:space-y-0 space-y-6 overflow-hidden'>
        <div className=''>
                <div>
                    <h1 className='font-bold lg:text-4xl md:text-3xl sm:txt-2xl text-xl tracking- text-indigo-600'>Get in Touch!</h1>
                    <p className='pt-2 lg:text-3xl md:text-2xl sm:txt-xl text-xl tracking-wide text-indigo-400'>Whether you are curious about my work, want to schedule a meeting, or want a problem you need help with, do not hesitate to contact me!</p>
                    <span className='mt-4 text-lg text-indigo-200'>I am open to Full-time, Part-time, Contract and Freelance oppurtunities!</span>
                </div>
                <div className='py-8 text-white'>
                    <div className='flex flex-row py-2'>
                        <AiFillPhone size={30}/>
                        <span className='font-bold pl-2'>+1(647) 787 1532</span>
                    </div>
                    <div className='flex flex-row py-2'>
                        <AiOutlineMail size={30}/>
                        <span className='font-bold pl-2'>agency@nivaly.ca</span>
                    </div>
                </div>
            </div>
            <div className='relative'>
                
                <div className='bg-gray-800 shadow-black text-white rounded-xl shadow-lg p-8 md:w-[600px]'>
                    <form action="" className='flex flex-col space-y-4' onSubmit={sendEmail}>
                        <div>
                            <label className='pb-2'>Name<strong className='text-purple-600'>*</strong></label>
                            <input for="" className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 outline-none focus:ring-2 focus:ring-indigo-600 mt-2 py-1" placeholder='Enter your name...' name='from_name' id='name'/>
                        </div>
                        <div>
                            <label className='pb-2'>Email<strong className='text-purple-600'>*</strong></label>
                            <input for="" className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 outline-none focus:ring-2 focus:ring-indigo-600 mt-2 py-1" placeholder='Enter your email...' name='email' id='email'/>
                        </div>
                        
                        <div>
                            <label className='pb-2'>Message<strong className='text-purple-600'>*</strong></label>
                            <textarea rows="10" className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 outline-none focus:ring-2 focus:ring-indigo-600 mt-2" placeholder='Tell me your request...' name='message' style={{cursor: 'pointer'}} id='message'/>
                        </div>
                        <button  className='inline-block self-endbg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white border transition-colors duration-700 transform hover:bg-white hover:text-black focus:border-4 focus:border-black'>
                            <input type='submit' value='Send Message' style={{cursor: 'pointer'}}></input>
                        </button>
                        <div className='message'>
                            <div className='text-[#00df9a] text-center hidden' id='success'>Your message has been sent succesfully!</div>
                            <div className='text-[#FFa065] text-center hidden' id='danger'>Fields are empty!</div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact