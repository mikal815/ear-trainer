import React from "react";
import Login from '../Login/Login'
import './Header.css'

const Header = props => {
  const { branding } = props;
  const { score } = props;
  const {winstate} = props;
  
  

  return (

    
    <div className="row topbar align-items-center text-center justify-content-center">
    
    
    
    <div className="col-12 col-sm-12 col-md-12 col-lg-3">
      <a href="/" style={{"color": "#000000", "font-weight": "bold"}} className="title">
       {branding}
      </a>
    </div>  
    
    <div className="col-3 col-sm-3 col-md-3 col-lg-1">
    <a href="/" style={{"color": "#000000"}} className="title">
    {props.timer}
    </a>
    </div>
    
    <div className="col-3 col-sm-3 col-md-3 col-lg-2">
    <a href="/" style={{"color": "#000000", "border-style": "inset", "border-width": "1px"}} className="title">
    {winstate}
    </a>
    </div>
    
    <div className="col-3 col-sm-3 col-md-3 col-lg-2" style={{"color": "#000000"}}>
    {props.children}
    </div>
    
    <div className="col-3 col-sm-3 col-md-3 col-lg-1">
    <a href="/" style={{"color": "#000000"}} className="title">
    Score: {score}
    </a>
    </div>
    

    <div className="col-12 col-sm-12 col-md-12 col-lg-3" style={{}}>
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
  