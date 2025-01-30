import { Link } from 'react-router-dom'
// import { BlurhashCanvas } from 'react-blurhash'

// eslint-disable-next-line react/prop-types
const CardItem = ({ img, title }) => {
  return (
    <div className='flex flex-col h-[300px] md:h-[250px] w-full  '>
      <Link className='h-[260px] w-full '>
        <div className='relative w-full h-[250px] md:h-[220px]'>
          <img
            src={img}
            alt={title}
            className={`w-full h-[250px] md:h-[220px] object-cover object-center  transition-opacity duration-300 `}
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>
      </Link>
      <div className='flex flex-col'>
        <div className='flex justify-between  text-sm text-[#6b7280]'>
          <h5 className='capitalize w-[140px] truncate'>name</h5>
          <h5>hello</h5>
        </div>
        {/* <p className='text-sm text-[#6b7280]'>{item.description}</p> */}
      </div>
    </div>
  )
}

export default CardItem
