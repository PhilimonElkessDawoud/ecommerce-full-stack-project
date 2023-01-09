import React from 'react'
import { Outlet } from 'react-router-dom'
import { Form } from '../sections'

const GuestLayout = () => {
  return (
    <div>
        <Form><Outlet/></Form>
    </div>
  )
}

export default GuestLayout