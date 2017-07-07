var React = require('react');
import NavItem from './header.js';
import {Link} from 'React-router-dom';

class About extends React.Component{
render(){
return (
    <div>
        <NavItem />
        <div className="container">  <br />
    <br />
            <h1>About Us</h1>
        </div>   
    </div>
)
}
};

    export default About