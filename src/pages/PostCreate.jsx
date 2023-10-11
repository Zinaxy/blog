import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import InputText from '../components/InputText'
import TextArea from '../components/TextArea'
import ButtonPrimary from '../components/ButtonPrimary'
import blog from '../assets/blog.svg'
import ToastSuccess from '../components/ToastSuccess'

const PostCreate = () => {
   
  return (
    <div className='flex justify-center items-start my-10'>
        <div className="xl:max-w-[1280px] w-full">
            <BreadCrumb title="Create Post" subtitle="blog / create"/>

            <div className="mt-5  flex  justify-center">
                    <div className="shadow border-gray-200 rounded w-full md:w-8/12 ">
                        <div className="flex justify-center m-4">
                            <div className="w-20">
                               <img src={blog} alt="" className='rounded-full border-4'/>
                            </div>
                        </div>
                        <form action="" className="m-6">
                           <div className="m-3">
                             <InputText type="text" name="subject" placeholder="Subject Title " label="Subject Title"/>
                           </div>
                            <div className="m-3">
                                <TextArea name="body" placeholder="Please type your post here " label="Your Post"/>
                            </div>
                            <div className="mt-3 flex justify-start">
                                <ButtonPrimary type="submit" btnTitle="Create Post"/>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default PostCreate