import React from "react";
import Login from '../Login/Login'
import './Header.css'

const Header = props => {
  const { branding } = props;
  const { score } = props;
  const {winstate} = props;
  
  

  return (


    <div className="topbar d-flex align-items-center justify-content-md-around">
    
    
    <div className="">
      <a href="/" style={{"color": "#000000"}} className="title">
       {branding}
      </a>
    </div>  
    
    <div className="">
    <a href="/" style={{"color": "#000000"}} className="title">
    {props.timer}
    </a>
    </div>
    
    <div className="">
    <a href="/" style={{"color": "#000000"}} className="title">
    {winstate}
    </a>
    </div>
    
    <div className="title" style={{"color": "#000000"}}>
    {props.children}
    </div>
    
    <div className="">
    <a href="/" style={{"color": "#000000"}} className="title">
    Score: {score}
    </a>
    </div>
    

    <div className="">
    <Login></Login>
    </div>
    
  </div>
    );
  };
  
  Header.defaultProps = {
    branding: "Music to My Ears",
    score: 0
  };
  
  export default Header;
  