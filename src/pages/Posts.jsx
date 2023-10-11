import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import logo from '../assets/logo.svg'
import img_1 from '../assets/img_1.jpg'
import img_2 from '../assets/img_2.jpg'
import LinkPrimary from '../components/LinkPrimary'

const Posts = () => {
  
  return (
    <>
    <div className="flex justify-center items-start my-10">
      <div className="xl:max-w-[1280px] w-full ">
          {/* Bread Crampb */}
          <BreadCrumb title="Blogs" subtitle="Blogs"/>
          {/* POSTS */}
          <section id="posts" className='my-10'>
            <div className="grid grid-rows-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 shadow rounded-lg w-full hover:bg-gray-100">
              <div className="justify-center">
                <img src={img_1} alt="" className='p-6 rounded-lg border-gray-200 hover:brightness-50 h-[18rem]'/>
                <div className="text-center m-4">
                  <h1 className=" text-2xl font-semibold justify-start">Blog Subject</h1>
                  <p className='my-4'>Published <span className='underline decoration-solid'>2 mins ago</span> by <strong>Bee Zinaxy</strong></p>
                <p className="leading-tight trancate tracking-wide">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum accusamus vero illo minus praesentium. Deleniti optio nam minus expedita vero.</p>
               <div className="mt-5">
                 <LinkPrimary linkAdress="/post/1" linkName="Read More"/>
               </div>
              </div>
            </div>
            </div>

              <div className="border border-gray-200 shadow rounded-lg w-full">
              <div className="justify-center">
                <img src={img_2} alt="" className='p-6 rounded-lg border-gray-200 hover:brightness-50 h-[18rem]'/>
                <div className="text-center m-4">
                  <h1 className=" text-2xl font-semibold justify-start">Blog Subject</h1>
                  <p className='my-4'>Published <span className='underline decoration-solid'>2 mins ago</span> by <strong>Bee Zinaxy</strong></p>
                <p className="leading-tight trancate tracking-wide">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum accusamus vero illo minus praesentium. Deleniti optio nam minus expedita vero.</p>
               <div className="mt-5">
                  <LinkPrimary linkAdress="/post/1" linkName="Read More"/>
               </div>
              </div>
            </div>
            </div>

              <div className="border border-gray-200 shadow rounded-lg w-full">
              <div className="justify-center">
                <img src={img_1} alt="" className='p-6 rounded-lg border-gray-200 hover:brightness-50 h-[18rem]'/>
                <div className="text-center m-4">
                  <h1 className=" text-2xl font-semibold justify-start">Blog Subject</h1>
                  <p className='my-4'>Published <span className='underline decoration-solid'>2 mins ago</span> by <strong>Bee Zinaxy</strong></p>
                <p className="leading-tight trancate tracking-wide">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum accusamus vero illo minus praesentium. Deleniti optio nam minus expedita vero.</p>
               <div className="mt-5">
                  <LinkPrimary linkAdress="/post/1" linkName="Read More"/>
               </div>
              </div>
            </div>
            </div>
          </div>
          </section>
          <div className="mt-20 flex justify-center ">
            <LinkPrimary linkAdress="/create-post" linkName="Create Post"/>
          </div>
      </div>
    </div>
    </>
  )
}

export default Posts