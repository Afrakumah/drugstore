import React from 'react'
import { Outlet } from 'react-router'


import Navbar from '../Components/Navbar'

import Shop from '../Pages/Shop/Shop'

export default function MainLayout() {
  return (
    <div>
        {/* <LoginPage /> */}
        <Navbar />
      {/* <Shop /> */}
       

        <Outlet />
    </div>
  )
}
