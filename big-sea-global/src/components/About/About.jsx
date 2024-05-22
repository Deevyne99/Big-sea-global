// import React from 'react'
import image from '../../assets/image.jpg'
import trophy from '../../assets/trophy-2.png'
import loading from '../../assets/loading.png'
const About = () => {
  return (
    <section className='my-12 mx-4 md:mx-16 xl:mx-24'>
      <div className='flex flex-col '>
        <div className='flex flex-col gap-4'>
          <h2 className='text-center text-xl capitalize font-bold text-[#0655A5]'>
            About us
          </h2>
          <h4 className='text-center text-2xl font-bold '>
            We offer quality services
          </h4>
        </div>
        <div className='flex flex-col md:flex-row gap-4 mt-12 justify-center items-start'>
          <div className='w-full md:w-1/2'>
            <img src={image} alt='' />
          </div>
          <div className='flex flex-col md:w-1/2 w-full'>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate corporis corrupti accusamus excepturi, ab tempora
              eligendi neque impedit exercitationem quidem temporibus sint,
              suscipit magni delectus qui iusto officiis quas explicabo esse!
              Dolor dignissimos recusandae neque perspiciatis adipisci esse
              temporibus obcaecati expedita! Nam iste esse consectetur, fugiat
              repudiandae repellendus dicta molestiae!
            </p>
            <div className='flex gap-4 mt-4'>
              <div className='h-[160px] w-[160px] bg-[#0655A5] rounded-md'>
                <div className='flex flex-col justify-center items-center'>
                  <img
                    src={trophy}
                    alt=''
                    className='h-[48px] mt-6 flex justify-center items-center w-[48px]'
                  />
                  <p className='text-sm text-[#fff] font-bold mt-4'>
                    +15 Years Experience
                  </p>
                </div>
              </div>
              <div className='h-[160px] w-[160px] bg-[#FF5D02] from-[#242221]'>
                <div className='flex flex-col justify-center items-center'>
                  <img
                    src={loading}
                    alt=''
                    className='h-[48px] mt-6 flex justify-center items-center w-[48px]'
                  />
                  <p className='text-sm text-[#fff] font-bold mt-4'>
                    +15 Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
