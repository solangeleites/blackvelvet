import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../../pages/footer/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    <div>{children}</div>
    <Footer />
    </>
  )
}

export default Layout