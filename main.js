var React = require('react');
var ReactDOM = require('react-dom');
import 'bootstrap/dist/css/bootstrap.css';
import text from './src/css/style.css';
import Jumbotron from './component/jombotron.js';
import NavItem from './component/header.js';
import {Qz_section} from './component/questions.js';
import { BrowserRouter as Router, Route, browserHistory, Redirect, withRouter } from 'react-router-dom';
import About from './component/About';


var App = React.createClass({
render : function (){
return (
    <div> 
        <NavItem />
        <Jumbotron />
        <Qz_section />
        
    
    </div>
)
}
});	
    



ReactDOM.render((
   <Router>
    <div>
        <Route exact path = "/" component = {App}> </Route>
        <Route path = "/about" component = {About}> </Route>
    </div>
   </Router>
	
), document.getElementById('main'))
    
