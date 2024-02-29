import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer_container container">
        <h1 className="footer_title">Vinay</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">About</a>
          </li>

          <li>
            <a href="#services" className="footer_link">Services</a>
          </li>

          <li>
            <a href="#projects" className="footer_link">Projects</a>
          </li>

        </ul>
        <div className="footer_icons">
        <div className="wrapper">
          <div className="icon facebook">
            <div className="tooltip">Facebook</div>
            <span>
              <a href="https://www.facebook.com/profile.php?id=100075935713969" target="_blank" className='link'>
                <i className='bx bxl-facebook'></i>
              </a>
            </span>
            
          </div>
          <div className="icon linkedin">
            <div className="tooltip">LinkedIn</div>
            <span>
              <a href="https://www.linkedin.com/in/vinay-gollapalli-094831228/" target="_blank" className='link'>
                <i className='bx bxl-linkedin'></i>
              </a>
            </span>
          </div>
          <div className="icon twitter">
            <div className="tooltip">Twitter</div>
            <span>
              <a href="https://twitter.com/Vinay_568" target="_blank" className='link'>
                <i className='bx bxl-twitter'></i>
              </a>
            </span>
          </div>
          <div className="icon instagram">
            <div className="tooltip">Instagram</div>
            <span>
              <a href="https://www.instagram.com/just_v_1_n_a_y/" target="_blank" className='link'>
                <i className='bx bxl-instagram'></i>
              </a>
            </span>
          </div>
          <div className="icon github">
            <div className="tooltip">GitHub</div>
            <span>
              <a href="https://github.com/VinayG56" target="_blank" className='link'>
                <i className='bx bxl-github'></i>
              </a>
            </span>
          </div>
        </div>
        </div>
        <span className="footer_copy">
        © Designed by Vinay. All rights reserved
        </span>
      </div>
      </footer>
  )
}

export default Footer
