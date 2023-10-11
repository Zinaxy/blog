import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import user from '../assets/user.svg'
import img_1 from '../assets/img_1.jpg'
import { Link } from 'react-router-dom'
import TextArea from '../components/TextArea'
import ButtonPrimary from '../components/ButtonPrimary'

const ShowPost = () => {
    //let {id }= useParams()
  return (
    <div className="flex justify-center items-start my-10">
      <div className="xl:max-w-[1280px] w-full">
        <BreadCrumb title="Blog" subtitle="Single / Blog"/>
        <div className="mx-4 md:mx-0 md:flex justify-between space-x-10">
          <div className="md:w-10/12 flex-row space-y-4">
            <h3 className="text-2xl text-gradient-to-r to-primary from-sky-600 font-semibold font-poppins">BLOG PAGE</h3>
            <img src={img_1} alt="" className='w-full h-80'/>
            <h1 className="text-2xl md:text-4xl text-primary font-poppins font-bold">Lorem ipsum dolor sit amet . Nulla, facere?</h1>
            <p className="text-2xl font-semibold leading-none mt-3 text-gray-900 dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur aliquam labore veritatis vel deleniti sapiente nemo tempora cupiditate harum.</p>
            <div className="flex m-6">
              <img src={user} alt="" className='w-8 md:w-12 border-primary rounded-full border-4'/>
              <p className="flex">
               <span className="ml-4 mt-2 md:mt-3 text-sm md:text-2xl font-poppins font-semibold"> By <span className="text-rose-600">BEE ZINAXY</span> October 10, 2023</span>
              </p>
            </div>
            <div className="m-6">
              <h1 className="text-2xl">Comments:</h1>
              <div className="flex-col justify-start space-x-4 border-l-4 m-6">
                 <div className="flex justify-start m-4">
                  <img src={user} alt="" className='w-6 md:w-12 mt-0 hidden md:block'/>
                  <div className="md:ml-4">
                    <h1 className="text-lg font-poppins leading-relaxed font-semibold">Bee Zinaka <small className='ml-10 text-gray-500'>2 mins ago</small></h1>
                    <p className="text-1xl font-semibold font-poppins text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia iure libero autem quos molestias.</p>
                  </div>
                </div>
                 <div className="flex justify-start m-4">
                  <img src={user} alt="" className='w-6 md:w-12 mt-0 hidden md:block'/>
                  <div className="md:ml-4">
                    <h1 className="text-lg font-poppins leading-relaxed font-semibold">Bee Zinaka <small className='ml-10 text-gray-500'>2 mins ago</small></h1>
                    <p className="text-1xl font-semibold font-poppins text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia iure libero autem quos molestias.</p>
                  </div>
                </div>
                <div className="flex justify-start m-4">
                  <img src={user} alt="" className='w-6 md:w-12 mt-0 hidden md:block'/>
                  <div className="md:ml-4">
                    <h1 className="text-lg font-poppins leading-relaxed font-semibold">Bee Zinaka <small className='ml-10 text-gray-500'>2 mins ago</small></h1>
                    <p className="text-1xl font-semibold font-poppins text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia iure libero autem quos molestias.</p>
                  </div>
                </div>
              </div>
              <div className="my-3">
                    <TextArea placeholder="Leave a comment here" label="Post Comment"/>
                    <ButtonPrimary btnTitle="Post Comment" />
                  </div>
            </div>

          </div>
          <div className="hidden md:block w-full md:w-4/12 max-h-[50rem] flex-row shadow-lg   border-slate-200 rounded-lg justify-start space-y-3">
                <div className="m-4 divide-y-2  divide-slate-primary">
                  <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-600 font-bold font-poppins">Popular Posts</h1>
                </div>
                <div className="flex-raw m-6 divide-y-2  divide-slate-primary">
                  <Link to="#" className="my-6 md:flex space-x-3 hover:text-gray-400">
                    <span className="bg-primary rounded-full text-white py-2 px-4 my-0.5 h-10 font-bold">1</span>
                    <p className="font-bold font-primary font-poppins text-1xl trancate">Lorem ipsum dolor sit amet consectetur , mollitia?</p>
                     <img src={img_1} alt="" className='w-16 rounded brightness-90'/>
                  </Link>
                  <Link to="#" className="my-6 md:flex space-x-3 hover:text-gray-400">
                    <span className="bg-primary rounded-full text-white py-2 px-4 my-0.5 h-10 font-bold">2</span>
                    <p className="font-bold font-primary font-poppins text-1xl trancate">Lorem ipsum dolor sit amet consectetur , mollitia?</p>
                     <img src={img_1} alt="" className='w-16 rounded brightness-90'/>
                  </Link>
                  <Link to="#" className="my-6 md:flex space-x-3 hover:text-gray-400">
                    <span className="bg-primary rounded-full text-white py-2 px-4 my-0.5 h-10 font-bold">3</span>
                    <p className="font-bold font-primary font-poppins text-1xl trancate">Lorem ipsum dolor sit amet consectetur , mollitia?</p>
                     <img src={img_1} alt="" className='w-16 rounded brightness-90'/>
                  </Link>
                  <Link to="#" className="my-6 md:flex space-x-3 hover:text-gray-400">
                    <span className="bg-primary rounded-full text-white py-2 px-4 my-0.5 h-10 font-bold">4</span>
                    <p className="font-bold font-primary font-poppins text-1xl trancate">Lorem ipsum dolor sit amet consectetur , mollitia?</p>
                     <img src={img_1} alt="" className='w-16 rounded brightness-90'/>
                  </Link>
                  <Link to="#" className="my-6 md:flex space-x-3 hover:text-gray-400">
                    <span className="bg-primary rounded-full text-white py-2 px-4 my-0.5 h-10 font-bold">5</span>
                    <p className="font-bold font-primary font-poppins text-1xl trancate">Lorem ipsum dolor sit amet consectetur , mollitia?</p>
                     <img src={img_1} alt="" className='w-16 rounded brightness-90'/>
                  </Link>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowPost