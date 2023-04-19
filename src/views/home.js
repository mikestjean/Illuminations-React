import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Illuminations</title>
        <meta property="og:title" content="Illuminations" />
      </Helmet>
      <div className="home-container01">
        <video
          src
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          className="home-video"
        ></video>
      </div>
      <div className="home-container02">
        <h1 className="home-text">Illuminations</h1>
        <span className="home-text01">
          <span>Illuminance I - XXXII</span>
          <br></br>
          <br></br>
          <span>reimagined as a</span>
          <br></br>
          <span>generative audio-visual installation</span>
          <br></br>
          <br></br>
          <span>a meditation on performance, presence,</span>
          <br></br>
          <br></br>
          <span>creativity &amp; community.</span>
        </span>
        <span className="home-text14">
          <span>February 21 - April 5 2023</span>
          <br></br>
          <span>32 performances were captured:</span>
          <br></br>
          <span>
            Each main 90 minute event was converted to &apos;video
            barcodes&apos; while 20 minutes of pre-show performed ambience, was
            captured as 2x stereo files, &apos;cloud&apos; &amp;
            &apos;sub&apos;.
          </span>
        </span>
        <div className="home-container03">
          <div className="home-container04">
            <img
              alt="image"
              src="https://github.com/mikestjean/illuminations/blob/main/IlluminanceXXIII-Brussels-16899557_NoText.png"
              className="home-image"
            />
          </div>
          <div className="home-container05">
            <img
              alt="image"
              src="https://github.com/mikestjean/illuminations/blob/main/IlluminanceXXIV-Stuttgart-16906838_NoText.png"
              className="home-image1"
            />
          </div>
          <div className="home-container06">
            <img
              alt="image"
              src="https://github.com/mikestjean/illuminations/blob/main/IlluminanceXXV-Paris-16914085_NoText.png"
              className="home-image2"
            />
          </div>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <span className="home-text20">
              <span>Illuminance XXIII</span>
              <br></br>
              <span>Brussels, Belgium</span>
              <br></br>
              <span>03.24.2023</span>
              <br></br>
              <span>1424 Present</span>
              <br></br>
              <span>Block Height:</span>
              <br></br>
              <span>16899557 -</span>
              <br></br>
              <span>16899985</span>
              <br></br>
            </span>
          </div>
          <div className="home-container09">
            <span className="home-text35">
              <span>Illuminance XXV</span>
              <br></br>
              <span>Paris, France</span>
              <br></br>
              <span>03.26.2023</span>
              <br></br>
              <span>1920 Present</span>
              <br></br>
              <span>Block Height:</span>
              <br></br>
              <span>
                16914085 -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>16914500</span>
              <br></br>
            </span>
          </div>
          <div className="home-container10">
            <span className="home-text50">
              <span>Illuminance XXIV</span>
              <br></br>
              <span>Stuttgart, DE</span>
              <br></br>
              <span>03.25.2023</span>
              <br></br>
              <span>795 Present</span>
              <br></br>
              <span>Block Height:</span>
              <br></br>
              <span>
                16906838 -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>16907257</span>
              <br></br>
            </span>
          </div>
        </div>
        <span className="home-text65">
          <span>
            Illuminations reads the Ethereum blockchain, pulling data about
            current block, hash, miner address and gas price, to inform a
            layering of visual &apos;barcodes&apos; and aural ambience, creating
            a generative meditation, with 1024 possible combinations.
          </span>
          <br></br>
          <br></br>
          <span className="home-text69">
            [*separating audio &amp; video further would lead to 1,048,576
            possible combinations]
          </span>
        </span>
      </div>
    </div>
  )
}

export default Home
