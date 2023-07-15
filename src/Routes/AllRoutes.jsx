import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Todos from '../Pages/Todos'
import Shop from '../Pages/Shop'
import Cart from '../Pages/Cart'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route element={<Navbar/>}>
            <Route index path='/' element={<Home/>} />
            <Route  path='/about' element={<About/>} />
            <Route  path='/contact' element={<Contact/>} />
            <Route  path='/todos' element={<Todos/>} />
            <Route  path='/shop' element={<Shop/>} />
            <Route  path='/cart' element={<Cart/>} />
            <Route  path='/signup' element={<Signup/>} />
        </Route>
    </Routes>
  )
}

export default AllRoutes