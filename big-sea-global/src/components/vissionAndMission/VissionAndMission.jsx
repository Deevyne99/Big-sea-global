// import React from 'react'

const VissionAndMission = () => {
  return (
    <section className='md:mt-12 mt-4 h-[600px] py-20 sm:h-[600px] md:h-screen relative w-full flex flex-col overflow-hidden'>
      <div className='grid grid-cols-2 justify-center items-center  relative w-full h-full '>
        <div className='w-full h-full bg-[#122a72] flex flex-col p-8 justify-between relative'>
          <div className='flex'>
            <p className='flex text-[#fff]'>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className='flex flex-col'>
            <h1 className='capitalize text-[#fff]'>Vission</h1>
            <p className='text-[#fff]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              iste iusto earum aut, cum quae magnam perferendis consectetur
              optio incidunt explicabo eveniet ea quod aperiam vitae
              repudiandae! Culpa, deserunt voluptatibus!
            </p>
          </div>
        </div>
        <div className='w-full h-full bg-[#2257f7] flex flex-col p-8 justify-between relative'>
          <div className='flex'>
            <p className='flex text-[#fff]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className='flex flex-col'>
            <h1 className='capitalize text-[#fff]'>Mission</h1>
            <p className='text-[#fff]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus repellendus dolore optio illo repellat vel possimus
              tenetur, dignissimos dolores autem, laudantium incidunt, quam
              animi porro. Dolor esse ut aspernatur asperiores?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VissionAndMission
