import React from 'react'
import code from '../assets/code.svg'

const Footer = () => {
  return (
    
<footer className="bg-white  m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
               <span className='hidden  md:flex bg-clip-text text-transparent bg-gradient-to-r from-primary to-sky-600 text-1xl font-bold font-poppins leading-tight border-4 px-5 py-2 border-gray-800 rounded-full shadow-lg shadow-black'> <img src={code} alt="" className='w-6' />MYBLOG</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Zinaxy™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer