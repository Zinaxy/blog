
import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import InputText from '../components/InputText'
import ButtonPrimary from '../components/ButtonPrimary'
import blog from '../assets/blog.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-center items-start my-10'>
        <div className="xl:max-w-[1280px] w-full">
            <BreadCrumb title="Sign In" subtitle="profile / login"/>

            <div className="mt-5  flex  justify-center">
                    <div className="shadow border-gray-200 rounded w-full md:w-8/12 ">
                        <div className="flex justify-center m-4">
                            <div className="w-20">
                               <img src={blog} alt="" className='rounded-full border-4'/>
                            </div>
                        </div>
                        <form action="" className="m-6">
                           <div className="m-3">
                             <InputText type="email" name="email" placeholder="example@gmail.com " label="Email"/>
                           </div>
                           <div className="m-3">
                             <InputText type="password" name="password" placeholder="************* " label="Password"/>
                           </div>
                            <div className="mt-3 flex justify-start">
                                <ButtonPrimary type="submit" btnTitle="Login"/>
                                <span className="ml-20 my-2">Not Registered ? <Link to="/register" className="justify-right right-0 underline"> Register</Link></span>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Login