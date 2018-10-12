import React, { Component } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import BackgroundImage from "./components/BackgroundImage";
import PlayBox from "./components/PlayBox";
import { Container, Row, Col } from "./components/Grid";

import "react-piano/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <BackgroundImage />
        <Keyboard />
        <Container>
          <Row>
            <Col size="lg-4">
                <PlayBox />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
