import React from 'react'

const Subscribe = () => {
  return (
    <div className="justify-center text-center items-center my-5">
       <h1 className="text-lg md:text-4xl font-poppins font-bold leading-none text-primary">Join<span className="text-transparent bg-clip-text bg-gradient-to-r to-primary from-sky-400"> 5000+ </span> Subscribers</h1>
       <p className="text-lg text-trancate text-semibold m-4 hidden md:block">Get exclusive access to freebies and news. We don’t spam, rent or sell your email. See our Privacy Policy.</p>
       <form action="">
        <div className="m-4 md:m-0 md:flex space-y-5 md:space-y-0 justify-between md:mx-80">
            <input type="text" className='w-full border-primary rounded-lg py-2.5 pl-4 text-primary focus:ring-0' placeholder='example@gmail.com' autoFocus/>
            <button type='button' className='font-bold ml-5 px-10 py-2.5 bg-gradient-to-r to-primary from-sky-400 text-white rounded-lg'>Subscribe</button>
       </div>
       </form>
    </div>
  )
}

export default Subscribe