import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import logo from '../assets/logo.svg'
import img_1 from '../assets/img_1.jpg'

const About = () => {
  return (
     <div className="flex justify-center items-center mt-10">
      <div className="xl:max-w-[1280px] w-full">
        {/* bread Cr */}
        <BreadCrumb title="About Me" subtitle="About"/>
        <div className="mx-2 md:mx-0 my-6 md:flex justify-between space-x-4">
          <div className="w-full md:w-6/12 outline-1">
              <img src={img_1} alt="" className='hover:brightness-75 rounded-lg'/>
          </div>
          <div className="space-y-4 w-full md:6/12">
            <h1 className="text-3xl font-bold font-poppins text-slate-700">Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="text-lg font-semibold font-poppins text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, doloremque harum? A odio officia totam velit corrupti eligendi aliquam dignissimos reiciendis commodi assumenda, voluptatem, est voluptatum eum nobis quae minus.</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 m-3 md:m-0">
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">HTML 5</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">CSSS 3</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">SCSS</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">PHP</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">JAVASCRIPT</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">PYTHON</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">C SHARP</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">LARAVEL</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">DJANGO</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">REACTjs</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">VUEjs</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">NUXTjs</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">SQL/DBS</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">GIT</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">TAILWIND</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">BOOSTRAP</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">TESTING</span>
              <span className="py-2 px-4 rounded-xl text-sm font-poppins bg-sky-600 text-white font-bold text-center">365</span>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default About