import React from 'react'
import '../styles/Footer.css'
import Logo from '../assets/logo.svg'
import { HashLink as Link } from 'react-router-hash-link'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer_container'>
        <div className='footer_main'>
          <div className='footer_logo'>
            <img src={Logo} alt='logo' />
          </div>
          <div className='footer_icons'>
            <Link to='#'>
              <box-icon
                type='logo'
                color='hsl(273, 4%, 51%)'
                name='facebook-square'
              ></box-icon>
            </Link>
            <Link to='#'>
              <box-icon
                name='twitter'
                color='hsl(273, 4%, 51%)'
                type='logo'
              ></box-icon>
            </Link>
            <Link to='#'>
              <box-icon
                name='pinterest'
                color='hsl(273, 4%, 51%)'
                type='logo'
              ></box-icon>
            </Link>
            <Link to='#'>
              <box-icon
                name='instagram'
                color='hsl(273, 4%, 51%)'
                type='logo'
              ></box-icon>
            </Link>
          </div>
        </div>
        <div className='footer_line'></div>

        <div className='footer_links'>
          <div className='footer_company'>
            <h3>Our company</h3>
            <ul>
              <Link to='#'>
                <li>How we work</li>
              </Link>
              <Link to='#'>
                <li>Why Insure?</li>
              </Link>
              <Link to='#'>
                <li>View plans</li>
              </Link>
              <Link to='#'>
                <li>Reviews</li>
              </Link>
            </ul>
          </div>
          <div className='footer_helpme'>
            <h3>Help me</h3>
            <ul>
              <Link to='#'>
                <li>FAQ</li>
              </Link>
              <Link to='#'>
                <li>Terms of use</li>
              </Link>
              <Link to='#'>
                <li>Privacy policy</li>
              </Link>
              <Link to='#'>
                <li>Cookies</li>
              </Link>
            </ul>
          </div>
          <div className='footer_contact'>
            <h3>Contact</h3>
            <ul>
              <Link to='#'>
                <li>Sales</li>
              </Link>
              <Link to='#'>
                <li>Support</li>
              </Link>
              <Link to='#'>
                <li>Live chat</li>
              </Link>
            </ul>
          </div>
          <div className='footer_others'>
            <h3>Others</h3>
            <ul>
              <Link to='#'>
                <li>Careers</li>
              </Link>
              <Link to='#'>
                <li>Press</li>
              </Link>
              <Link to='#'>
                <li>Licenses</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='coded_div'>
          <p className='coded'>Coded by:Norbert Kovacs</p>
        </div>
      </div>
    )
  }
}
export default Footer
