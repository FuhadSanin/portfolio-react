import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Banner from '../Banner/banner'
import About from '../About/about'
import Portfolio from '../Portfolio/portfolio'
import Contact from '../Contact/contact'
import Footer from '../Footer/footer'
import Skills from '../Skills/skills'
function home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default home