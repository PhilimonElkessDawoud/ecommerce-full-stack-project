import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header, Footer} from 'C:/xampp/htdocs/ecommerce-full-stack-project/project/src/sections/index'

const RootLayout = () => {
  return (
    <div className='root-layout'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout