import React, { Component } from "react";
//import { DefaultPlayer as Video } from 'react-html5video';
import "./VideoBanner.scss";

export default class VideoBanner extends Component {
  render() {
    return (
      <div className="banner">
        {/* <Video className="bg-video__content" autoPlay muted loop>
          <source src="../img/video.mp4" type="video/mp4"/>
          <source src="../img/video.webm" type="video/webm"/>
          Your broser is not supported!
        </Video> */}
        <img src="https://letzsushi.dk/wp-content/uploads/2016/06/020117_homepage-banner.png" alt="Banner"/>
      </div>
    );
  }
}
