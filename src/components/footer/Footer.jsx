import React, { Component } from 'react'
// IMAGES
import SiteLogo from '../../images/site-logo.svg'
import Social1 from '../../images/footerSocial1.svg'
import Social2 from '../../images/footerSocial2.svg'
import Social3 from '../../images/footerSocial3.svg'
import Social4 from '../../images/footerSocial4.svg'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
            <div className="footer__content">
                <ul className='footer__title'>
                    <img src={SiteLogo} alt="site logo" />
                    <li>www.company name.com</li>
                    <li>companyname@gmail.com</li>
                    <li>Phone: +7 485-118-03-25</li>
                </ul>
                <ul className="footer__list">
                    <h3>Home</h3>
                    <li>Landingpage</li>
                    <li>Documentation</li>
                    <li>Referral Program</li>
                    <li>UI & UX Design</li>
                    <li>Web Design</li>
                </ul>
                <ul className="footer__list">
                    <h3>Menu</h3>
                    <li>Landingpage</li>
                    <li>Documentation</li>
                    <li>Referral Program</li>
                    <li>UI & UX Design</li>
                    <li>Web Design</li>
                </ul>
                <ul className="footer__list">
                    <h3>Company</h3>
                    <li>Landingpage</li>
                    <li>Documentation</li>
                    <li>Referral Program</li>
                    <div>
                        <a href="https://www.instagram.com/">
                            <img src={Social1} alt="social img" />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img src={Social2} alt="social img" />
                        </a>
                        <a href="https://www.twitter.com/">
                            <img src={Social3} alt="social img" />
                        </a>
                        <a href="https://www.youtube.com/">
                            <img src={Social4} alt="social img" />
                        </a>
                    </div>
                </ul>
            </div>
        </div>
      </footer>
    )
  }
}
