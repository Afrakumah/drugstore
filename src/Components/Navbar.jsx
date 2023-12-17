import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { ShoppingBag, ShoppingCart } from 'phosphor-react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <span>drugStore</span>

        <ul className='navlist'>
            <li>
               <NavLink to='/' >Shop <ShoppingBag /> </NavLink> 
               </li>
            <li>
                <NavLink to='/cart'>Cart <ShoppingCart
                //  size={32}
                  /> </NavLink>
            </li>
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
        </ul>
    </div>
  )
}
