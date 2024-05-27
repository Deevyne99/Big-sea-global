// import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../../data'
import logo from '../../assets/logo.png'
// import Footer from '../footer/Footer'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineAlignRight } from 'react-icons/ai'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div className='fixed flex flex-col justify-between w-full z-50 bg-[#FFF]'>
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
          <button className='md:hidden flex' onClick={() => setSidebar(true)}>
            <AiOutlineAlignRight className='text-linkColor text-xl' />
          </button>
          <div
            className={` transition-all duration-300 ${
              sidebar
                ? 'bg-[#000] bg-opacity-70 flex-col z-0 top-0 fixed left-0 w-full h-full flex translate-x-0'
                : 'hidden'
            }`}
          >
            <aside
              className={`md:hidden  flex flex-col fixed w-[250px]   bg-[#FFF] h-full   transition-all right-0 top-0 duration-300  ${
                sidebar ? 'translate-x-[0px] ' : 'translate-x-[500px]'
              }`}
            >
              <button
                className=' mt-4 mr-auto mx-4'
                onClick={() => setSidebar((prev) => !prev)}
              >
                <AiOutlineClose className='text-linkColor text-xl' />
              </button>
              <ul className='md:hidden my-8 gap-8  flex flex-col capitalize text-linkColor font-semibold px-8'>
                {links.map((link) => {
                  const { id, name, url } = link
                  return (
                    <NavLink
                      key={id}
                      to={url}
                      onClick={() => setSidebar(false)}
                    >
                      {name}
                    </NavLink>
                  )
                })}
              </ul>
            </aside>
          </div>
        </nav>
      </header>
      {/* <Outlet /> */}
    </div>
  )
}

export default Navbar
