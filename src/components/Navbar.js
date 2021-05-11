import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
  return ( 
    <nav>
      <h1>Programming Princess</h1>
      <div className=''>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;