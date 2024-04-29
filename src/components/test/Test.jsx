import React, { Component } from 'react'
// IMAGES
import ProfileImg from '../../images/testProfile.png'
import RateIcon from '../../images/testRate.svg'

export default class Test extends Component {
  render() {
    return (
      <div className='test-section'>
        <div className="container">
            <div className="test-section__content">
               <div className="test__title">
                    <h5>Testimonial</h5>
                    <h2>Making Food great again and again</h2>
                    <p>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.</p>
               </div>
                <div className="test__profile">
                    <img src={ProfileImg} alt="profile img" />
                    <p>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</p>
                    <img src={RateIcon} alt="stars icon" />
                    <h4>Augusta W. Reynoso</h4>
                    <h5>UI&UX DeSIGNER</h5>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
