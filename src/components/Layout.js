import React from 'react'
import Navbar from './Navbar';
import '../styles/global.css'

const Layout = ({ children }) => {
  return ( 
    <div className='layout'>
      <Navbar />
      <div clasName="content">
        { children }
      </div>
      <footer>
        <p>Copyright 2021 Programming Princess</p>
      </footer>
    </div>
   );
}
 
export default Layout;