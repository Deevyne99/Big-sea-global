// import React from 'react'

import Team from '../team/Team'

const TeamContainer = () => {
  return (
    <div className='flex flex-col '>
      <div className='flex flex-col gap-4'>
        <h2 className='text-center text-xl font-bold text-[#0655A5] text-'>
          Our Team
        </h2>
        <h4 className='text-center text-2xl  text-[#FF5D02] font-bold capitalize'>
          Meet Our Team
        </h4>
      </div>
      <div className='flex   flex-wrap gap-4 justify-center items-center mt-6 '>
        <Team />
        <Team />
        <Team />
        <Team />
      </div>
    </div>
  )
}

export default TeamContainer
