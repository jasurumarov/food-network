import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className='contact-section'>
        <div className="container">
            <div className="contact-section__content">
                <h5>Contact</h5>
                <h2>Food Stalls with Persons but also specialized equipment, Skills to manage.</h2>
                <form>
                    <input required type="text" placeholder='Enter your message' />
                    <button>Send</button>
                </form>
            </div>
        </div>
      </div>
    )
  }
}
