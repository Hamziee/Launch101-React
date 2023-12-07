import React from 'react'

import { Helmet } from 'react-helmet'

import './latest-video.css'

const LatestVideo = (props) => {
  return (
    <div className="latest-video-container">
      <Helmet>
        <title>latest-video - Launch101</title>
        <meta
          name="description"
          content="Launch101 allows you to install and play your favorite Link101 Modpacks, all in one neat little package."
        />
        <meta property="og:title" content="latest-video - Launch101" />
        <meta
          property="og:description"
          content="Launch101 allows you to install and play your favorite Link101 Modpacks, all in one neat little package."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9eff9b94-ff27-418b-83d3-94c1a74f7304/1bfa5f69-5f3e-4342-8290-d26c0f959568?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <iframe
        src="https://www.youtube.com/embed?listType=playlist&amp;list=UULFUnJfNnQCOrznIOoTgZadOw"
        className="latest-video-iframe"
      ></iframe>
    </div>
  )
}

export default LatestVideo
