import React, { Component } from 'react'
// IMAGES
import HeroImg from '../../images/heroImg.png'

export default class Hero extends Component {
  render() {
    return (
      <div className='hero-section'>
        <div className="container">
          <div className="hero-section__content">
            <div className="hero__title">
              <h1>Making time a good time by making food the good food.</h1>
              <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
              <div>
                <button>Order Now</button>
                <button>Food Details</button>
              </div>
            </div>
            <img src={HeroImg} alt="hero img" />
          </div>
        </div>
      </div>
    )
  }
}
