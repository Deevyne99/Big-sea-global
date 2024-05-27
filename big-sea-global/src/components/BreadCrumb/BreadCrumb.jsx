// import React from 'react'
import image from '../../assets/image.jpg'

const BreadCrumb = () => {
  return (
    <div className='flex flex-col '>
      <div className='relative h-[400px] flex flex-col item-center justify-center'>
        <img
          src={image}
          alt=''
          className='blur-sm h-full object-cover flex justify-center items-center'
        />
        <h1 className='absolute top-[200px] left-0 right-0  mx-auto justify-center items-center text-[#fff] font-bold text-3xl text-center'>
          About us
        </h1>
      </div>
    </div>
  )
}

export default BreadCrumb
