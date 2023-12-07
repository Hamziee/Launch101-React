import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a
        href="https://launch101.heo-systems.net/#features"
        className="navigation-links-link"
      >
        {props.text}
      </a>
      <a
        href="https://launch101.heo-systems.net/#about"
        className="navigation-links-link1"
      >
        {props.text1}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text: 'Features',
  rootClassName: '',
  text1: 'About',
  text2: 'HEO Systems',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
