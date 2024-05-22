// import React from 'react'
import dartBoard from '../../assets/dartboard.png'

const Values = () => {
  return (
    <section className='my-12 xl:mx-24'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-center text-xl font-bold text-[#0655A5] text-'>
          Our Values
        </h2>
        <h4 className='text-center text-2xl  text-[#FF5D02] font-bold capitalize'>
          What we aim to achieve
        </h4>
        <div className='flex flex-col md:flex-row gap-4 justify-center items-center mt-4'>
          <div className='flex flex-col justify-center items-center w-[300px]'>
            <div className='flex flex-col justify-center items-center'>
              <img src={dartBoard} alt='' className='w-[60px] h-[60px]' />
            </div>
            <p className='text-center'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              amet molestiae impedit dolores incidunt. Soluta qui, numquam in
              quam dolores, ipsum inventore maiores molestiae saepe dignissimos
              voluptatum cupiditate? Voluptatum, maxime!
            </p>
          </div>

          <div className='flex flex-col justify-center items-center w-[300px]'>
            <div className='flex flex-col justify-center items-center'>
              <img src={dartBoard} alt='' className='w-[60px] h-[60px]' />
            </div>
            <p className='text-center'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              amet molestiae impedit dolores incidunt. Soluta qui, numquam in
              quam dolores, ipsum inventore maiores molestiae saepe dignissimos
              voluptatum cupiditate? Voluptatum, maxime!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
