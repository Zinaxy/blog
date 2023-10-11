import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MyRouter from './router'
const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className=" px-6 sm:px-16 flex justify-center items-center  shadow-md">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>
    <MyRouter />
     <div className="bg-white flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
       <Footer />
      </div>
    </div>
  </div>
)

export default App