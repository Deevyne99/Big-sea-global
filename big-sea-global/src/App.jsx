// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
// import Landing from './pages/Landing/Landing'
import { AppProvider } from './context/Context'
import Navbar from './components/navbar/Navbar'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <Error />,
//   },

//   {
//     path: '/about',
//     element: <About />,
//     // errorElement: <Error />,
//   },
//   {
//     path: '/contact',
//     element: <Contact />,
//     // errorElement: <Error />,
//   },
// ])
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route index element={} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
