import React, { Component } from "react";
import "./BackgroundImage.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import MinorSecond from "./MinorSecond";
import MajorSecond from "./MajorSecond";
import MinorThird from "./MinorThird";
import MajorThird from "./MajorThird";
import PerfectFourth from "./PerfectFourth";
import Tritone from "./Tritone";
import PerfectFifth from "./PerfectFifth";
import MinorSixth from "./MinorSixth";
import MajorSixth from "./MajorSixth";
import MinorSeventh from "./MinorSeventh";
import MajorSeventh from "./MajorSeventh";
import Octave from "./Octave";

const dropdownBtn = {
  backgroundColor: "black",
  position: "relative",
  top: "-180px",
  float: "right",
  fontSize: "85%"
}

class BackgroundImage extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="background">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret style={dropdownBtn}>
            Interval Examples <i className="fas fa-music"></i>
          </DropdownToggle>
          <DropdownMenu>
            <MinorSecond />
            <MajorSecond />
            <MinorThird />
            <MajorThird />
            <PerfectFourth />
            <Tritone />
            <PerfectFifth />
            <MinorSixth />
            <MajorSixth />
            <MinorSeventh />
            <MajorSeventh />
            <Octave />

          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default BackgroundImage;
