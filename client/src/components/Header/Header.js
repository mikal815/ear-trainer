import React from "react";

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
    <li className="nav-item">
    {props.children}
    </li>
    <li className="nav-item">
    <a href="/" className="nav-link">
    Score: {score}
    </a>
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
  