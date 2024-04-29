import React, { Component } from 'react'
// IMAGES
import AboutHeroImg from '../../images/aboutHeroImg.png'

export default class About extends Component {
  render() {
    return (
      <div id='about' className='about-section'>
        <div className="container">
            <div className="about-section__content">
                <img src={AboutHeroImg} alt="hero img" />
                <div className="about__title">
                    <h5>About us</h5>
                    <h2>Food Stalls with Persons but  to  Product marketing plane catlogues etc to. </h2>
                    <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment  make your marketing plane Effective.</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}