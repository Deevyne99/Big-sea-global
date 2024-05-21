// import React from 'react'
import image from '../../assets/image.jpg'
const About = () => {
  return (
    <section className='my-12 xl:mx-24'>
      <div className='flex flex-col '>
        <div className='flex flex-col gap-6'>
          <h2 className='text-center text-lg font-bold '>About us</h2>
          <h4 className='text-center text-2xl font-bold '>
            We offer quality services
          </h4>
        </div>
        <div className='flex gap-4 mt-12 justify-center items-start'>
          <div className='w-1/2'>
            <img src={image} alt='' />
          </div>
          <div className='flex flex-col w-1/2'>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate corporis corrupti accusamus excepturi, ab tempora
              eligendi neque impedit exercitationem quidem temporibus sint,
              suscipit magni delectus qui iusto officiis quas explicabo esse!
              Dolor dignissimos recusandae neque perspiciatis adipisci esse
              temporibus obcaecati expedita! Nam iste esse consectetur, fugiat
              repudiandae repellendus dicta molestiae!
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
