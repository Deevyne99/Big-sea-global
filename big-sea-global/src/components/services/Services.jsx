import { services } from '../../data'
import ServicesCard from './ServicesCard'

// import React from 'react'

const Services = () => {
  return (
    <section className='py-28 bg-[#faf5ff]  w-full'>
      <div className='mx-4 md:mx-12'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-center text-xl font-bold  text-'>Our Services</h2>
          <h4 className='text-center text-2xl   font-medium capitalize'>
            We offer quality services
          </h4>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-center gap-6 mt-8'>
            {services.map((service) => {
              return <ServicesCard key={service.id} {...service} /> // Spread operator
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
