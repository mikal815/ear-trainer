import React, { Component } from "react";
import Login from '../Login/Login'
import './Header.css'

class Header extends Component {

  


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
//       <nav className="navbar navbar-expand-sm navbar-dark py-2">
//         <div className="container">
//           <a href="/" className="navbar-brand">
//             {branding}
//           </a>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <ul className="navbar-nav mr-auto">
//                 <li className="nav-item">
//                   <a href="/" className="nav-link">
//                     {timer}
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="/" style={{ color: "red" }} className="nav-link">
//                     {winstate}
//                   </a>
//                 </li>
//                 <li className="nav-item">{children}</li>
//                 <li className="nav-item">
//                   <a href="/" className="nav-link">
//                     Score: {score}
//                   </a>
//                 </li>

//                 <li>
//                   <Login handleUsernameChange={this.handleUsernameChange} />
//                 </li>
//               </ul>
//             </Nav>
//           </Collapse>
//         </div>
//       </nav>
//     );
//   }
//   };
  
//   Header.defaultProps = {
//     branding: "Music To My Ears",
// =======
    
    <div className="row topbar align-items-center text-center justify-content-center">
    
    
    
    <div className="col-12 col-sm-12 col-md-12 col-lg-3">
      <a href="/" style={{"color": "#000000", "font-weight": "bold"}} className="title">
       {branding}
      </a>
    </div>  
    
    <div className="col-3 col-sm-3 col-md-3 col-lg-1">
    <a href="/" style={{"color": "#000000"}} className="title">
    {timer}
    </a>
    </div>
    
    <div className="col-3 col-sm-3 col-md-3 col-lg-2">
    <a href="/" style={{"color": "#000000", "border-style": "inset", "border-width": "1px"}} className="title">
    {winstate}
    </a>
    </div>
    
    <div className="col-3 col-sm-3 col-md-3 col-lg-2" style={{"color": "#000000"}}>
    {children}
    </div>
    
    <div className="col-3 col-sm-3 col-md-3 col-lg-1">
    <a href="/" style={{"color": "#000000"}} className="title">
    Score: {score}
    </a>
    </div>
    

    <div className="col-12 col-sm-12 col-md-12 col-lg-3" style={{}}>
    <Login handleUsernameChange={this.handleUsernameChange} ></Login>
    </div>
    
  </div>
  
    );
  };
}
  
  Header.defaultProps = {
    branding: "Music to My Ears",
    score: 0
  };
  
  export default Header;