import { useState } from 'react'
import image from '../../assets/cart-percent.png'

const ServicesCard = () => {
  const [readMore, setReadMore] = useState(false)
  const info = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          voluptas obcaecati, adipisci error quos quas. Laborum earum
          consequatur unde esse.`
  return (
    <div className='bg-[#C3EAFF] px-4 py-8 flex flex-col w-full max-w-[300px] rounded-md border-b-[2px] border-[#FF5D02]'>
      <div className='flex flex-col justify-center items-center'>
        <img src={image} alt='' className='w-[60px] h-[60px]' />
      </div>
      <h2 className='text-xl text-center mt-4 capitalize '>Sales</h2>
      <div>
        <p className='text-sm text-center'>
          {readMore ? info : `${info.substring(0, 100)}...`}
        </p>
      </div>
      <button
        onClick={() => setReadMore(!readMore)}
        className='text-[#FF5D02] font-bold capitalize mt-2'
      >
        {readMore ? 'show less' : 'read more'}
      </button>
    </div>
  )
}

export default ServicesCard
