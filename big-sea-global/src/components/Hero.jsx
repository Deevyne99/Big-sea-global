import { useState, useEffect } from 'react'
import { products } from '../data'

const Hero = () => {
  const [items, setItems] = useState(products)
  const [productIndex, setProductIndex] = useState(0)

  useEffect(() => {
    const lastIndex = items.length - 1
    if (productIndex < 0) {
      setProductIndex(lastIndex)
    }
    if (productIndex > lastIndex) {
      setProductIndex(0)
    }
  }, [productIndex, items])

  useEffect(() => {
    let slider = setInterval(() => {
      setProductIndex(productIndex + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [productIndex])

  return (
    <section className='h-[300px] md:h-[600px] relative w-full flex flex-col overflow-hidden'>
      <div className='flex justify-center items-center gap-8 relative w-full h-full'>
        {items.map((item, index) => {
          const { id, title, img } = item
          let position = 'translate-x-full opacity-0'

          if (productIndex === index) {
            position = 'translate-x-0 opacity-100'
          } else if (
            index === productIndex - 1 ||
            (productIndex === 0 && index === items.length - 1)
          ) {
            position = '-translate-x-full opacity-0'
          }

          return (
            <div
              key={id}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-500 ${position}`}
            >
              <img
                src={img}
                alt={title}
                className='h-full w-full object-cover filter blur-sm brightness-75'
              />
              <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                <h2 className='font-bold text-2xl text-white max-w-[400px] text-center p-4 drop-shadow-lg text-[#fff]'>
                  The best when it comes to installation, maintenance, and sales
                  of ICT gadgets
                </h2>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Hero
