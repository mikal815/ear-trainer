import React from "react";
import Login from '../Login/Login'
import './Header.css'

const Header = props => {
  const { branding } = props;
  const { score } = props;
  const {winstate} = props;
  
  

  return (

    
    <div className="row topbar align-items-center">
    
    
    
    <div className="col-sm-4">
      <a href="/" style={{"color": "#000000", "font-weight": "bold"}} className="title">
       {branding}
      </a>
    </div>  
    
    <div className="col">
    <a href="/" style={{"color": "#000000"}} className="title">
    {props.timer}
    </a>
    </div>
    
    <div className="col">
    <a href="/" style={{"color": "#000000"}} className="title">
    {winstate}
    </a>
    </div>
    
    <div className="col title" style={{"color": "#000000"}}>
    {props.children}
    </div>
    
    <div className="col">
    <a href="/" style={{"color": "#000000"}} className="title">
    Score: {score}
    </a>
    </div>
    

    <div className="col" style={{}}>
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
  