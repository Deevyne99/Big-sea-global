import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Footer from '../../components/footer/Footer'
import MapComponent from '../../components/mapComponent/MapComponent'
import Navbar from '../../components/navbar/Navbar'

// import React from 'react'
const Contact = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <Navbar />
      </div>
      <div>
        <BreadCrumb />
      </div>
      <div className='flex mx-4 md:mx-12 justify-between mt-20'>
        <form
          action=''
          className='px-4 py-8 border w-[40%] flex gap-8 flex-col justify-between rounded-md'
        >
          <div>
            <input type='text' className='p-3 border w-full rounded-md' />
          </div>
          <div>
            <input type='text' className='p-3 border w-full rounded-md' />
          </div>
          <div>
            <input type='text' className='p-3 border w-full rounded-md' />
          </div>
          <div>
            <textarea
              name=''
              id=''
              className='p-2 border w-full rounded-md'
              cols={10}
              rows={3}
            ></textarea>
          </div>
        </form>
        <div className='flex flex-col  w-[40%] h-[400px]'>
          <MapComponent />
        </div>
      </div>
      <div className='flex flex-col mt-24'>
        <Footer />
      </div>
    </div>
  )
}

export default Contact
