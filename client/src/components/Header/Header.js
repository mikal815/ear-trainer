import React, { Component } from "react";
import Login from "../Login/Login";
import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class Header extends Component {
  state = {
    isOpen: false,
    username: ''
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleUsernameChange = (username) => {
    console.log(username)
    this.props.callbackFromParent(username)
  }


  render() {
    const { branding } = this.props;
    const { score } = this.props;
    const { winstate } = this.props;
    const { timer } = this.props;
    const { children } = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark py-2">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    {timer}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" style={{ color: "red" }} className="nav-link">
                    {winstate}
                  </a>
                </li>
                <li className="nav-item">{children}</li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Score: {score}
                  </a>
                </li>

                <li>
                  <Login handleUsernameChange={this.handleUsernameChange} username={this.username} />
                </li>
              </ul>
            </Nav>
          </Collapse>
        </div>
      </nav>
    );
  }
  };
  
  Header.defaultProps = {
    branding: "Music To My Ears",
    score: 0
  };
  
  export default Header;
