// import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { links } from '../../data'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className='fixed flex flex-col justify-between w-full '>
      <header className='w-full  p-3 shadow-lg  '>
        <nav className='flex  items-center   justify-between  md:mx-8'>
          <img src={logo} alt='logo' className='w-[170px]' />
          <ul className='flex gap-8 capitalize text-linkColor font-semibold'>
            {links.map((link) => {
              const { id, name, url } = link
              return (
                <NavLink key={id} to={url}>
                  {name}
                </NavLink>
              )
            })}
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>footer</footer>
    </div>
  )
}

export default Navbar
