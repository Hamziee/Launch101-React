import React from 'react'

import { Helmet } from 'react-helmet'

import './version.css'

const Version = (props) => {
  return (
    <div className="version-container">
      <Helmet>
        <title>version - Launch101</title>
        <meta property="og:title" content="version - Launch101" />
        <meta name="robots" content="noindex" />
      </Helmet>
    </div>
  )
}

export default Version
