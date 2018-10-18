import React, { Component } from "react";

class Score extends Component {
  state = {
    score: 0
  };

  render() {
    const { score } = this.state;

    return <div className="card card-body mb-3">Score: {score}</div>;
  }
}

export default Score;
