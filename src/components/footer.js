import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <img alt={props.imagealt} src={props.imagesrc} className="footer-image" />
      <img
        alt={props.imagealt1}
        src={props.imagesrc1}
        className="footer-image1"
      />
      <div className="footer-container">
        <span className="footer-text">
          <span className="footer-text1">
            © 2023 HEO Systems, All Rights Reserved.
          </span>
          <br></br>
        </span>
        <span className="footer-text3">
          <span>We are in no way affiliated with Minecraft or Mojang.</span>
          <br></br>
        </span>
      </div>
      <div className="footer-container1"></div>
    </footer>
  )
}

Footer.defaultProps = {
  imagealt: 'logo',
  imagesrc: '/logo-200h.png',
  imagesrc1: '/heo%20systems%20modern%20transparent-200h.png',
  imagealt1: 'logo',
}

Footer.propTypes = {
  imagealt: PropTypes.string,
  imagesrc: PropTypes.string,
  imagesrc1: PropTypes.string,
  imagealt1: PropTypes.string,
}

export default Footer
