// src/TestimonialSlider.js
import { useState, useEffect } from 'react'
import { testimonials } from '../../data'

const TestimonialSlider = () => {
  const [items, setItems] = useState(testimonials)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const lastIndex = items.length - 1
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex)
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0)
    }
  }, [currentIndex, items])

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex(currentIndex + 1)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(slider)
  }, [currentIndex])

  return (
    <section className='h-[300px] md:h-[300px] relative w-full flex flex-col overflow-hidden'>
      <div className='flex justify-center items-center gap-8 relative w-full h-full'>
        {items.map((item, index) => {
          const { id, name, text, image } = item
          let position = 'translate-x-full opacity-0'

          if (currentIndex === index) {
            position = 'translate-x-0 opacity-100'
          } else if (
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === items.length - 1)
          ) {
            position = '-translate-x-full opacity-100'
          }

          return (
            <div
              key={id}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-300 ${position}`}
            >
              <div className='w-full p-4 flex flex-col items-center'>
                <img src={image} alt={name} className='rounded-full mb-4' />
                <p className='text-lg italic text-gray-600'>{text}</p>
                <h3 className='mt-4 text-xl font-semibold text-gray-800'>
                  {name}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TestimonialSlider
