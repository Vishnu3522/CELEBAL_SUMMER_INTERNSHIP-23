import React from 'react'
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

function Navbar() {
  return (
    <div>
          <nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    <li className='right' ><Link to  = "/login">Login</Link></li>
  </ul>
</nav>
    </div>
  )
}

export default Navbar