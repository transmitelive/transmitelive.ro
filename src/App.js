import React, { Component } from 'react';
import VideoCover from 'react-video-cover';
import { FadeIn, FadeInDown, } from "animate-components";
import { FaMobileAlt, FaFacebookSquare, FaYoutubeSquare, FaEnvelopeSquare } from 'react-icons/fa';
import Roll from './Roll';
import logo from './logo.png';
import { isMobile } from "react-device-detect";
import 'normalize.css/normalize.css';
import './App.css';

class App extends Component {
  render() {
    const videoOptions = {
      src: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
      autoPlay: true,
      muted: true,
      loop: true,
    };

    return (
      <div className={isMobile ? "backup-background" : ""}>
        <div className="background-video" >
          <div className="background-overlayer" />
            {!isMobile &&
              <VideoCover
                videoOptions={videoOptions}
                remeasureOnWindowResize
              />
            }
        </div>
        <div className="main">
          <div className="logo-container">
            <FadeInDown
              duration="2s"
              as="div"
            >
              <img src={logo} className="logo" alt="Transmitelive.ro" />
            </FadeInDown>
            <FadeIn duration="4s" as="div">
              <div className="description">
                <span className="social social-animation">Evenimentele</span> tale pe toate platformele de&nbsp;
                <span className="social social-animation-delayed">social media</span>
              </div>
            </FadeIn>
            <FadeIn
              duration="2s"
              as="div"
            >
              <div className="roll">
                <Roll
                  position="left"
                  list={[
                    "Lansari",
                    "Concerte",
                    "Spectacole",
                    "Reclame",
                    "Concursuri",
                    "Emisiuni"
                  ]}
                />
                transmise live pe
                <Roll
                  delay={5}
                  position="right"
                  list={[
                    "Facebook",
                    "Youtube",
                    "Twitch",
                    "Web"
                  ]}
                />
              </div>
            </FadeIn>
            <FadeIn duration="4s" as="div">
              <div className="phone">
                <a href="tel:0736433455">
                 <FaMobileAlt size="1.1rem" /> 0736 433 455
                </a>
              </div>
            </FadeIn>
            <div className="social-media">
              <FadeInDown duration="2s" as="div">
                <a href="https://www.facebook.com/transmite.live.3" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size="2.5rem" color="#f5f5f5" /></a>
              </FadeInDown>
              <FadeInDown duration="3s" as="div">
                <a href="https://www.youtube.com/channel/UC3oXdZebbp7_IOsj40DgFtw?disable_polymer=true" target="_blank" rel="noopener noreferrer"><FaYoutubeSquare size="2.5rem" color="#f5f5f5" /></a>
              </FadeInDown>
              <FadeInDown duration="4s" as="div">
                <a href="mailto:transmitelive@gmail.com?Subject=Hello"><FaEnvelopeSquare size="2.5rem" color="#f5f5f5" /></a>
              </FadeInDown>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;