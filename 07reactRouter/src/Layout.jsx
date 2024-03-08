import React from 'react'
import  Header from './components/Header/Header'
import  Footer   from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'


import {  Outlet, BrowserRouter, Routes, Route } from 'react-router-dom'


function Layout() {
    return(
        <>
        <BrowserRouter>
            <Header/>
            <Outlet/>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='user/:userid' element={<User/>}/>
                <Route
                // loader={githubInfoLoader}
                 path='github'
                  element={<Github/>}
                 />

            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
    )
    
}
export default Layout