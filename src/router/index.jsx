import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Posts from '../pages/Posts'
import ShowPost from '../pages/ShowPost'
import PostCreate from '../pages/PostCreate'
import Register from '../pages/Register'
import Login from '../pages/Login'

const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/post/:id' element={<ShowPost />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/create-post' element={<PostCreate />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={ <Login />} />
    </Routes>
  )
}

export default MyRouter