import React, { Component } from 'react'
// IMAGES
import SiteLogo from '../../images/site-logo.svg'
import MenuBtn from '../../images/menu-btn.svg'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      toggle: false
    }
  }
  render() {
    return (
      <header>
        <div className="container">
          <nav className='navbar'>
            <div className="navbar__left">
              <img src={SiteLogo} alt="site logo" />
              <ul className={`navbar__left-list ${this.state.toggle ? "show" : ""}`}>
                <li>
                  <a className='home' href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#menu">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#features">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar__right">
              <button className='navbar__booking-btn'>Booking Now</button>
              <button onClick={() => this.setState({toggle: !this.state.toggle})} className="navbar__menu-btn">
                <img src={MenuBtn} alt="menu btn" />
              </button>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
