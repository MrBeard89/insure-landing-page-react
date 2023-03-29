import Logo from '../assets/logo.svg'
import '../styles/Navbar.css'
import { HashLink as Link } from 'react-router-hash-link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <>
      <div className='navbar_container'>
        <div className='logo'>
          <img className='logo_img' src={Logo} alt='logo'></img>
        </div>
        <div className='navbar_links_container'>
          <ul
            className={isMobile ? 'navbar_links_mobile' : 'navbar_links'}
            onClick={() => setIsMobile(false)}
          >
            <Link to='/pathLink#how_we_work'>
              <li>How we work</li>
            </Link>
            <Link to='#'>
              <li>Blog</li>
            </Link>
            <Link to='#'>
              <li>Account</li>
            </Link>
            <Link to='/pathLink#view_plans'>
              <li>View plans</li>
            </Link>
          </ul>
          <button
            className='mobile_menu_icon'
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <box-icon name='x'></box-icon>
            ) : (
              <box-icon name='menu'></box-icon>
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
