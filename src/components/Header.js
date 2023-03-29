import React from 'react'
import '../styles/Header.css'
import HeaderImage from '../assets/image-intro-desktop.jpg'
import HeaderMobileImage from '../assets/image-intro-mobile.jpg'
import HeaderCurlRight from '../assets/bg-pattern-intro-right-desktop.svg'
import HeaderCurlLeft from '../assets/bg-pattern-intro-left-desktop.svg'
import HeaderCurlRightMobile from '../assets/bg-pattern-intro-right-mobile.svg'
import { HashLink as Link } from 'react-router-hash-link'

class Header extends React.Component {
  render() {
    return (
      <>
        <div className='header_wrapper' id='view_plans'>
          <div className='header_container'>
            <div className='header_line'></div>
            <h1 className='header_title'>Humanizing your insurance.</h1>
            <p className='header_text'>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <Link to='#'>View plans</Link>
            <img
              className='header_curl_right_mobile'
              src={HeaderCurlRightMobile}
              alt='curly lines_right_mobile'
            ></img>
          </div>
          <div className='header_img_container'>
            <img
              className='header_img '
              src={HeaderImage}
              alt='Family dancing on the street'
            ></img>
            <img
              className='header_mobile_img '
              src={HeaderMobileImage}
              alt='Family dancing on the street'
            ></img>
          </div>
          <img
            className='header_curl_right'
            src={HeaderCurlRight}
            alt='curly lines_1'
          ></img>
          <img
            className='header_curl_left'
            src={HeaderCurlLeft}
            alt='curly lines_2'
          ></img>
        </div>
      </>
    )
  }
}

export default Header
