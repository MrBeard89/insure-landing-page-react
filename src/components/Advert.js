import React from 'react'
import '../styles/Advert.css'
import { HashLink as Link } from 'react-router-hash-link'

class Advert extends React.Component {
  render() {
    return (
      <div className='advert_container'>
        <div className='advert_main'>
          <div className='advert_text_container'>
            <h2>Find out more about how we work</h2>
          </div>
          <div className='advert_btn_container'>
            <Link to='#'>
              How we work
              {/* <button type='button'>How we work</button> */}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Advert
