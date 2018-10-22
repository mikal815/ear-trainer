import React from "react";
import Login from '../Login/Login'
import './Header.css'

const Header = props => {
  const { branding } = props;
  const { score } = props;
  const {winstate} = props;
  
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark  py-2">
    
    <div className="container">
    <a href="/" className="navbar-brand">
    {branding}
    </a>
    <div>
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
    <a href="/" className="nav-link">
    {props.timer}
    </a>
    </li>
    <li className="nav-item">
    <a href="/" className="nav-link">
    {winstate}
    </a>
    </li>
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Mode
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    <a href="/" className="dropdown-item">
    Free Play
    </a>
    <a href="/" className="dropdown-item">
    Intervals
    </a>
    <a href="/" className="dropdown-item">
    Arpeggio
    </a>
    <a href="/" className="dropdown-item">
    Tone Row
    </a>
    </div>
    </li>
    <li className="nav-item">
    <a href="/" className="nav-link">
    Score: {score}
    </a>
    </li>

    <li>
    <Login></Login>
    </li>

    </ul>
    </div>
    </div>
    </nav>
    );
  };
  
  Header.defaultProps = {
    branding: "Ear Trainer",
    score: 0
  };
  
  export default Header;
  