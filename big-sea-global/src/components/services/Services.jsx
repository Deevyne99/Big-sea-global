import ServicesCard from './ServicesCard'

// import React from 'react'

const Services = () => {
  return (
    <section className='my-12 mx-4 md:mx-16 xl:mx-24'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-center text-xl font-bold text-[#0655A5] text-'>
          Our Services
        </h2>
        <h4 className='text-center text-2xl  text-[#FF5D02] font-bold capitalize'>
          We offer quality services
        </h4>
        <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
    </section>
  )
}

export default Services
