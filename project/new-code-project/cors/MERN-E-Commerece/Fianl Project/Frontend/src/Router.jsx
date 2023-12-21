import React from 'react'
import {Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Policy from './Pages/Policy'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'
import Person from './Pages/Auth/Person'



const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/policy' element = {<Policy/>}/>
        <Route path='*' element = {<Error/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/person' element = {<Person/>}/>
      </Routes>
    </>
  )
}

export default Router
