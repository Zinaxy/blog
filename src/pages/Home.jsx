import React from 'react'
import Hero from '../components/Hero'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <>
        <div className="flex justify-center items-start">
            <div className="xl:max-w-[1280px] w-full">
                <Hero />
            </div>
         </div>
        <div className="bg-gray-200 flex justify-center items-start">
            <div className="xl:max-w-[1280px] w-full">
            <Subscribe />
            </div>
        </div>
    </>
  )
}

export default Home