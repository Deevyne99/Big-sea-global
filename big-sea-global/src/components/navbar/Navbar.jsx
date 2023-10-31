// import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { links } from '../../data'
import logo from '../../assets/logo.png'
import Footer from '../footer/Footer'
import { useState } from 'react'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div className='fixed flex flex-col justify-between w-full '>
      <header className='w-full  p-3 shadow-lg  '>
        <nav className='flex  items-center   justify-between  md:mx-8'>
          <img src={logo} alt='logo' className='w-[170px]' />
          <ul className='md:flex gap-8 hidden capitalize text-linkColor font-semibold'>
            {links.map((link) => {
              const { id, name, url } = link
              return (
                <NavLink key={id} to={url}>
                  {name}
                </NavLink>
              )
            })}
          </ul>
          <button
            className='md:hidden flex'
            onClick={() => setSidebar((prev) => !prev)}
          >
            open
          </button>
          <aside
            className={`md:hidden flex flex-col fixed w-[250px]   bg-[#F5F5F5] h-full translate-x-[500px]  transition-all right-0 top-0 duration-300 ${
              sidebar ? 'translate-x-[0px]' : 'translate-x-[500px]'
            }`}
          >
            <button
              className='md:hidden flex ml-auto mx-6 mt-4'
              onClick={() => setSidebar((prev) => !prev)}
            >
              open
            </button>
            <ul className='md:hidden my-8 gap-8 flex flex-col capitalize text-linkColor font-semibold px-8'>
              {links.map((link) => {
                const { id, name, url } = link
                return (
                  <NavLink key={id} to={url}>
                    {name}
                  </NavLink>
                )
              })}
            </ul>
          </aside>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Navbar
