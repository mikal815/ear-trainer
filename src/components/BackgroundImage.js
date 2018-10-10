import React, { Component } from "react";
import "./BackgroundImage.css";

class BackgroundImage extends Component {
  render() {
    return (
      <div className="background">
        <div className="scoreCard">
          {/* <h1>Score: 0</h1> */}
          {/* <h2>
            Select a Song from below and play it back. Each correctly played
            note earns you 1 point!
          </h2> */}
        </div>
      </div>
    );
  }
}

export default BackgroundImage;
