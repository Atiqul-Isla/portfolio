import React from 'react'
import Link from 'next/link'

const Examples = () => {
  return (
    <>
    <div id='projects' className='w-full relative'>
        <div className='container mx-auto mt-[25vh]  p-12 rounded-2xl'>
            <div>
                <h1 className='text-center mb-12 text-indigo-600 mt-12'>Projects;</h1>
                <h4 className='text-white bold mb-6'>filter by 	&#160; 
                <p><Link href='/' className='hover:text-indigo-600'>All</Link> // <Link href='/' className='hover:text-indigo-600'>Full Stack</Link> // <Link href='/' className='hover:text-indigo-600'>API</Link> // <Link href='/' className='hover:text-indigo-600'>Algorithms</Link> // <Link href='/' className='hover:text-indigo-600'>Visual Data</Link></p>
                </h4>
            </div>
            <div className='grid grid-cols-3 gap-x-6 gap-y-6 grid-flow-row-dense h-[150vh]'>
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh] col-span-2 row-span-2' />
                {/* <div className='bg-orange-500 rounded-lg shadow-xl min-h-[30vh]' /> */}
                <div className='bg-gray-800 rounded-lg shadow-xl shadow-black min-h-[30vh]' />
                {/* <div className='bg-green-500 rounded-lg shadow-xl min-h-[30vh]' /> */}
                {/* <div className='bg-teal-500 rounded-lg shadow-xl min-h-[30vh]' /> */}
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
                <div className='bg-gray-800 rounded-lg shadow-lg shadow-black min-h-[30vh]' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Examples