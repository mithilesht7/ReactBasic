var React = require('react');
import {NavLink} from 'React-router-dom';

class NavItem extends React.Component{
render(){
return (

<div>    
<nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">Logo</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><NavLink activeClassName="active" to="/">HOME</NavLink></li>
        <li><NavLink activeClassName="active" to="/about">ABOUT US</NavLink></li>
        
      </ul>
    </div>
  </div>
</nav>
    
</div>    
)
}
};

    export default NavItem