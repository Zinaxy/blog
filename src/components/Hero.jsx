import React from 'react'
import logo from '../assets/logo.svg'
import facebook from '../assets/facebook.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import whatsapp from '../assets/whatsapp.svg'
import call from '../assets/call.png'
import bg from '../assets/bg.png'

const Hero = () => {
  return (
    <div className='m-6 md:m-20 justify-center text-start items-center'>
      <div className="block md:flex justify-between">
        <div className="flex-col flex-1 my-10">          
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-primary from-sky-400">Blog Website By</span> Zinaxy.</h1> 
          <p class="max-w-lg text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white">The React + Tailwind app will help you improve yourself by analysing your everyday coding life.</p>
          <div className="mt-10">
            <a href="#" className="w-full px-5 py-2.5 mr-2 mb-2 focus:ring-gray-200 border-2 border-primary rounded text-primary font-semibold hover:bg-primary  hover:text-white">Get Started</a>
          </div>
          <div className="grid grid-cols-6 gap-4 mt-10 ">
            <a  href='#' className="cursor-pointer"><img src={facebook} alt="" className=' hover:skew-y-12 brightness-75 hover:brightness-100' /></a>
            <a  href='#' className="cursor-pointer"><img src={whatsapp} alt="" className='hover:skew-y-12 brightness-75 hover:brightness-100' /></a>
            <a  href='#' className="cursor-pointer"><img src={call} alt="" className='hover:skew-y-12 h-10 md:h-20 brightness-75 hover:brightness-100' /></a>
            <a  href='#' className="cursor-pointer"><img src={github} alt="" className='hover:skew-y-12 brightness-75 hover:brightness-100' /></a>
            <a  href='#' className="cursor-pointer"><img src={linkedin} alt="" className='hover:skew-y-12 brightness-75 hover:brightness-100' /></a>
          </div>
        </div>
        <div className="flex-col flex-1 md:my-10 md:mx-10">
          <img src={bg} alt="" className='w-full mr-11' />
          <h1 className='text-center font-bold font-poppins text-md md:text-2xl bg-slate-100 rounded-2xl px-0 py-3'>Reactjs<span className="rounded-full p-0.5 mx-5 text-white bg-slate-400 text-sm font-mono"> + </span>Tailwindcss</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero