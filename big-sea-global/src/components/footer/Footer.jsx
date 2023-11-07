// import React from 'react'
import logo from '../../assets/footer-logo.png'
import { NavLink } from 'react-router-dom'
import { links, contact } from '../../data'
links
const Footer = () => {
  return (
    <footer className='bg-linkColor py-12 '>
      <div className='md:mx-16 lg:mx-28 sm:flex-row items-center flex-col flex justify-between'>
        <div>
          <img src={logo} alt='logo' className='w-[200px]' />
        </div>
        <div className='flex justify-between text-[#fff]'>
          <div className='flex flex-col gap-1 text-[#fff]'>
            <h3 className='text-center font-bold'>Quick Links</h3>
            <ul className='flex flex-col text-[#fff] capitalize items-center'>
              {links.map((item) => {
                const { id, name, url } = item
                return (
                  <NavLink to={url} key={id}>
                    {name}
                  </NavLink>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-center text-[#fff] font-bold'>Contact us</h3>
          <ul className='flex flex-col text-[#fff] capitalize items-center'>
            {contact.map((item) => {
              const { id, line } = item
              return <li key={id}>{line}</li>
            })}
          </ul>
        </div>
        <div className='flex flex-col gap-2 text-[#fff] text-center'>
          <h3 className='text-center font-bold'>Address</h3>
          <p>
            Head office: BSG 36, <br /> old banex plaza,
            <br /> wuse 2 Abuja.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
