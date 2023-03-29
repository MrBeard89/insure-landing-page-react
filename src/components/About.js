import React from 'react'
import 'boxicons'
import '../styles/About.css'

class About extends React.Component {
  render() {
    return (
      <div className='about_container ' id='how_we_work'>
        <div className='about_main'>
          <div className='about_line'></div>
          <h2>We’re different</h2>
          <div className='about_item_container'>
            <div className='about_process'>
              <div className='circle_box'>
                <box-icon
                  className='box_icon'
                  color='white'
                  name='fast-forward'
                ></box-icon>
              </div>
              <h3>Snappy Process</h3>
              <p>
                Our application process can be completed in minutes, not hours.
                Don’t get stuck filling in tedious forms.
              </p>
            </div>
            <div className='about_prices'>
              <div className='circle_box'>
                <box-icon
                  className='box_icon'
                  color='white'
                  name='dollar'
                ></box-icon>
              </div>
              <h3>Affordable Prices</h3>
              <p>
                We don’t want you worrying about high monthly costs. Our prices
                may be low, but we still offer the best coverage possible.
              </p>
            </div>
            <div className='about_people'>
              <div className='circle_box'>
                <box-icon
                  className='box_icon'
                  name='user'
                  color='white'
                  type='solid'
                ></box-icon>
              </div>
              <h3>People First</h3>
              <p>
                Our plans aren’t full of conditions and clauses to prevent
                payouts. We make sure you’re covered when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About
