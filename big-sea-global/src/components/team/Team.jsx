// import React from 'react'
import man from '../../assets/man-5.jpg'

const Team = () => {
  return (
    <div className='flex flex-col w-[90%] max-w-[300px] md:w-[200px] h-[400px]'>
      <div className='h-[250px]'>
        <img
          src={man}
          alt=''
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div className='flex bg-linkColor text-center flex-col text-[#fff] p-2 gap-2 justify-center'>
        <p>kalu Divine</p>
        <p>CEO</p>
      </div>
    </div>
  )
}

export default Team
