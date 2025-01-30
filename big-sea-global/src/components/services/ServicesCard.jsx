// eslint-disable-next-line react/prop-types
const ServicesCard = ({ title, description, icon }) => {
  // const [readMore, setReadMore] = useState(false)

  return (
    <div className='bg-[#fff]  px-4 py-8 flex flex-col w-full  rounded-md ]'>
      <div className='flex flex-col justify-center items-center'>
        <div className='h-12 w-12 rounded-full p-2 bg-[#122a72] justify-center flex items-center text-xl text-[#fff]'>
          {icon}
        </div>
      </div>
      <h2 className='text-xl text-center mt-4 capitalize '>{title}</h2>
      <div>
        <p className='text-sm text-center text-[#94a3b8] leading-6 tracking-wide mt-4'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ServicesCard
