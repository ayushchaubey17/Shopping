import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className=''>
      <div className="space-x-4 sm:space-x-10   font-bold bg-gray-600 rounded-md p-2 text-white">
       
      
       <NavLink to="/" >Home</NavLink>
       <NavLink to="/about" >About </NavLink>
       <NavLink to="/contact" >Contact </NavLink>
       <NavLink to="/more" >More </NavLink>
       <NavLink to="/cart" >Cart </NavLink>

       

       

      </div>

      
    </div>
  )
}
