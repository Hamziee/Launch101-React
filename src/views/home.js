import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Launch101</title>
        <meta
          name="description"
          content="Launch101 allows you to install and play your favorite Link101 Modpacks, all in one neat little package."
        />
        <meta property="og:title" content="Launch101" />
        <meta
          property="og:description"
          content="Launch101 allows you to install and play your favorite Link101 Modpacks, all in one neat little package."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9eff9b94-ff27-418b-83d3-94c1a74f7304/1bfa5f69-5f3e-4342-8290-d26c0f959568?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <header data-role="Header" className="home-header">
        <img alt="logo" src="/logo-200h.png" className="home-image" />
        <div className="home-nav">
          <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
        </div>
        <div className="home-btn-group">
          <Link to="/download" className="home-register button">
            Download
          </Link>
        </div>
        <div data-role="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-nav1">
            <div className="home-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image1"
              />
              <div data-role="CloseMobileMenu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <h1 className="home-text">
          <span className="home-text01"> Link101 Modpacks </span>
          <br></br>
        </h1>
        <span className="home-text03">in one place</span>
        <span className="home-text04">
          <br></br>
          <span>
            Launch101 allows you to install and play your favorite
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Link101 Modpacks, all in one neat little package.</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className="home-btn-group1">
          <Link to="/download" className="home-navlink button">
            Download for windows
          </Link>
        </div>
      </div>
      <div id="features" className="home-features">
        <h1 className="home-text11">All these impressive features 😍</h1>
        <div className="home-container2">
          <FeatureCard2
            title="Simple and Quick"
            description="Launch101 is a fast and simple platform without any unnecessary features (bloat)."
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard2
            title="Performance"
            description="Launch101 is built on Python, utilizing minimal resources and consuming less memory than leading Minecraft launchers."
            rootClassName="rootClassName3"
          ></FeatureCard2>
          <FeatureCard2
            title="Modpack Management"
            description="Launch101 simplifies the management of Link101's Modpacks, allowing you to install and uninstall them with just a single click."
            rootClassName="rootClassName2"
          ></FeatureCard2>
          <FeatureCard2
            title="Support Developers"
            description="We will be donating 70% of the website's revenue to mod developers included in the modpacks. (Coming Soon)"
            rootClassName="rootClassName1"
          ></FeatureCard2>
        </div>
      </div>
      <div id="about" className="home-banner">
        <h1 className="home-text12">About this project</h1>
        <span className="home-text13">
          <br></br>
          <span>
            I made Launch101 as a fun experiment to see what the limits were of
            Python and to learn new stuff. The idea came up because I wanted to
            make it easy for people to install and use Link101&apos;s Minecraft
            modpacks. It&apos;s all about using modpacks more straightforward
            and enjoyable for everyone. - Hamza
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            ____________________________________________________________________________
          </span>
          <br></br>
          <br></br>
          <span className="home-text21">Credits (Name | Discord Username)</span>
          <br className="home-text22"></br>
          <span>Development: Hamza | hamzieee</span>
          <br></br>
          <span>Logo: Panedwards | panedwards</span>
          <br></br>
        </span>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
