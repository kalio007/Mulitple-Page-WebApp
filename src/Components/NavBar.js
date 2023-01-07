import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='NavBar'>
        <div className='NavBar-logo'>
            <h1>Welcome</h1>
        </div>
        <div className='NavBar-Menu'>
                <ul className='NavBar-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                
                </ul>
        </div>
    </div>
  )
}

export default NavBar