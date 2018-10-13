import React, { Component } from "react";
import "./BackgroundImage.css";
import PlayBox from "./PlayBox";
import { Container, Row, Col } from "./Grid";

class BackgroundImage extends Component {
  render() {
    return (
      <div className="background">
      {/* <PlayBox /> */}
      <Container>
          <Row>
            <Col size="lg-4">
                <PlayBox />
            </Col>
          </Row>
        </Container>
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
