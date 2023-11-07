import { useState, useEffect } from 'react'
import { products } from '../data'

// import React from 'react'

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
    <section className=' mb-12'>
      <div
        className={`flex justify-center items-center gap-8 relative w-full h-[400px]`}
      >
        <button onClick={() => setProductIndex(productIndex - 1)}>
          click me
        </button>
        {items.map((item, index) => {
          const { id, title, img } = item
          let position = 'nextSlide'
          if (productIndex === index) {
            position = 'activeSlide'
          }
          if (
            index === productIndex - 1 ||
            (productIndex === 0 && index === items.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <div
              key={id}
              className={`absolute top-0 left-0 flex md:flex-row flex-col     items-center  justify-center  w-full   transform transition duration-500   opacity-0 
               ${
                 position === 'activeSlide' ? 'translate-x-0 opacity-100' : ''
               }         
                ${position === 'nextSlide' ? 'translate-x-[100%] ' : ''}
                ${position === 'lastSlide' ? 'translate-x-[-100%] ' : ''}`}
            >
              <img
                src={img}
                alt={title}
                className='h-[400px]  w-full drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]'
              />
            </div>
          )
        })}
        <button onClick={() => setProductIndex(productIndex + 1)}>
          click me
        </button>
      </div>
    </section>
  )
}

export default Hero
