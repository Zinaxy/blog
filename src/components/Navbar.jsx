import React, {useState} from 'react'
import code from '../assets/code.svg'
import close from '../assets/close.svg'
import bars from '../assets/bars.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-betwwen items-center">
        <span className='flex bg-clip-text text-transparent bg-gradient-to-r from-primary to-sky-600 text-1xl font-bold font-poppins leading-tight border-4 px-5 py-2 border-gray-800 rounded-full shadow-lg shadow-black'> <img src={code} alt="" className='w-6' />MYBLOG</span>

        <ul className="font-semibold list-none sm:flex hidden justify-end items-center flex-1">
            <li className="font-poppins cursor-pointer text-primary text-[16px] mr-10 hover:underline decoration-primary decoration-2">
                <Link to="/" className="">Home</Link>
            </li>
            <li className="font-poppins cursor-pointer text-gray-600 text-[16px] mr-10">
                <Link to="/posts" className="">Blog</Link>
            </li>
            <li className="font-poppins cursor-pointer text-gray-600 text-[16px] mr-10">
                <Link to="/about-us" className="">About</Link>
            </li>
            <li className="font-poppins cursor-pointer text-gray-600 text-[16px] mr-10">
                <Link to="#" className="">Contact </Link>
            </li>
            <li className="font-poppins cursor-pointer text-gray-600 text-[16px] mr-10">
                <Link to="/register" className='px-5 py-2  border-solid border-2 border-primary rounded shadow-sm hover:bg-primary hover:text-white'>SignUp</Link>
            </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img 
            src={toggle ? close : bars} 
            alt="menu" 
            className="w-[28px] h-[28px] cursor-pointer object-contain font-bold"
            onClick={() => setToggle((prev) => !prev)}
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white shadow border border-gray-200 absolute top-20 right-0 mx-4 my-2 mih-w-[140px] rounded-xl sidebar`}>
                <ul className="font-semibold list-none flex justify-end items-center flex-col">
                    <li className="font-poppins cursor-pointer text-primary text-[16px] mb-4 hover:underline decoration-primary decoration-2">
                        <Link to="/" className="">Home</Link>
                    </li>
                    <li className="font-poppins cursor-pointer text-gray-600 text-[16px] mb-4">
                        <Link to="/posts" className="">Blog</Link>
                    </li>
                    <li className="font-poppins cursor-pointer text-gray-600 text-[16px] mb-4">
                        <Link to="/about-us" className="">About</Link>
                    </li>
                    <li className="font-poppins cursor-pointer text-gray-600 text-[16px] mb-4">
                        <Link to="#" className="">Contact </Link>
                    </li>
                    <li className="font-poppins cursor-pointer text-gray-600 text-[16px] mb-4">
                        <Link to="/register" className='px-5 py-2  border-solid border-2 border-primary rounded shadow-sm hover:bg-primary hover:text-white'>SignUp</Link>
                    </li>
        </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
