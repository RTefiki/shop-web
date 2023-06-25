
import { Link } from 'react-router-dom'
import {ShoppingCart } from 'phosphor-react'
import "./Navbar.css"
import React from "react";



export default function Navbar(props) {
 

 
  return (
    <div className='navbar'>
     <div className='links'>
       <Link to="/"> Shop</Link>
       <Link to="/cart">
          <ShoppingCart  size={30} />
       
       </Link>
     </div>
    </div>
  )
}
