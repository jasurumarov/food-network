import React, { Component } from 'react'
// IMAGES
import FeaturesImg1 from '../../images/features1.svg'
import FeaturesImg2 from '../../images/features2.svg'
import FeaturesImg3 from '../../images/features3.svg'

export default class Features extends Component {
  render() {
    return (
      <div className='features-section'>
        <div className="container">
            <div className="features-section__content">
                <h4>Features</h4>
                <h2>Food with a New Passion</h2>
                <div className="features__cards">
                    <div className="features__card">
                        <img src={FeaturesImg1} alt="features icon" />
                        <h3>Quality Food</h3>
                        <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                    </div>
                    <div className="features__card">
                        <img src={FeaturesImg2} alt="features icon" />
                        <h3>Food Delivery</h3>
                        <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                    </div>
                    <div className="features__card">
                        <img src={FeaturesImg3} alt="features icon" />
                        <h3>Super Taste</h3>
                        <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
