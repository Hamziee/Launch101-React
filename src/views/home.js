import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Launch101</title>
        <meta property="og:title" content="Launch101" />
      </Helmet>
      <span>Text</span>
    </div>
  )
}

export default Home
