import { useState, useEffect } from 'react'
import { products } from '../data'

const Hero = () => {
  const [productIndex, setProductIndex] = useState(0)
  const [steps, setSteps] = useState(products)

  useEffect(() => {
    const lastIndex = products.length - 1
    if (productIndex < 0) {
      setProductIndex(lastIndex)
    }
    if (productIndex > lastIndex) {
      setProductIndex(0)
    }
  }, [productIndex])

  useEffect(() => {
    const slider = setInterval(() => {
      setProductIndex(productIndex + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [productIndex])

  return (
    <section className='flex relative  mt-8 items-center w-full justify-center overflow-hidden px-4 md:px-12'>
      <div className='flex flex-col md:h-[500px] h-[600px]  w-full gap-4 md:gap-8 mt-16 md:mt-24    relative items-center justify-center '>
        {products.map((item, index) => {
          const { id, img, descp, title } = item
          let position = 'translate-x-full opacity-0'
          let vertical = 'translate-y-full opacity-0'

          if (productIndex === index) {
            position = 'translate-x-0 opacity-100'
            vertical = 'translate-y-0 opacity-100'
          } else if (
            index === productIndex - 1 ||
            (productIndex === 0 && index === products.length - 1)
          ) {
            position = '-translate-x-full opacity-0'
            vertical = '-translate-y-full opacity-0'
          }
          return (
            <div
              className={`absolute top-0 left-0 w-full flex flex-col md:flex-row items-center  justify-center md:justify-between md:gap-12 gap-4 transition-transform duration-300 mx-auto `}
              key={id}
            >
              <article
                className={`w-full md:w-[50%] flex max-w-[600px] flex-col transition-transform duration-400 mt-8 sm:mt-20 md:mt-0 order-2 md:order-1  ${position}`}
              >
                <h2 className='text-2xl md:text-left text-center text-[#94a3b8] max-w-[500px] font-bold'>
                  {title}
                </h2>
                <p className='text-[#94a3b8] w-full  p-2 tracking-wide leading-loose text-center md:text-left'>
                  {descp}
                </p>
                <button className='p-2 flex justify-center items-center mt-8 bg-[#60a5fa] text-white font-semibold rounded-md w-[200px] mx-auto md:mx-0'>
                  Get Started
                </button>
              </article>
              <div className='w-full order-1 md:w-[50%] md:flex-row flex-col flex md:gap-4 gap-0 justify-center items-center'>
                <div className='flex relative  md:flex-col gap-8 flex-row order-2 md:order-1 justify-center items-center md:w-[20px] w-full md:bg-[#fff] bg-transparent '>
                  {steps.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className={`${
                          productIndex === index ? 'bg-[#60a5fa]' : 'bg-[#eee]'
                        }  md:w-[5px] md:h-[80px] w-[40px] h-[5px] md:mt-0 sm:mt-8 `}
                      ></div>
                    )
                  })}
                </div>
                <div
                  className={`justify-center items-center flex transition-transform h-[200px]  md:h-[300px] duration-400 order-1 md:order-2 w-full ${vertical} `}
                >
                  <img src={img} alt='' className='w-full  ' />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Hero
