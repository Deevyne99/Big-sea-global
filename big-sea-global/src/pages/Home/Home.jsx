// import React from 'react'

// import About from '../../components/About/About'
import Hero from '../../components/Hero'
import Products from '../../components/Products/Product'
import Values from '../../components/Values/Values'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Services from '../../components/services/Services'
// import TestimonialSlider from '../../components/testimonial/Testimonial'
import VissionAndMission from '../../components/vissionAndMission/VissionAndMission'

// import Navbar from '../../components/navbar/Navbar'

// import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col '>
      <div>
        <Navbar />
      </div>
      <div className=' w-full '>
        <Hero />
      </div>
      {/* <div className='flex flex-col '>
        <About />
      </div> */}
      <div>
        <Services />
      </div>
      <div>
        <Values />
      </div>
      <div>
        <VissionAndMission />
      </div>
      <div>
        <Products />
      </div>
      <div className='relative'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
