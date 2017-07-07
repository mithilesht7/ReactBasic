var React = require('react');
var ReactDOM = require('react-dom');
import 'bootstrap/dist/css/bootstrap.css';
import style from './src/css/style.css';
import text from './src/json/name.json';

var App = React.createClass({
render : function (){
return (
    <div> 
    <NavItem />
    <Container />
    <ScriptT />
    <TestingCode />
    <TodoList />
    <City />
  

    </div>
)
}
});	
    



var NavItem = React.createClass({
render : function (){
return (
    <div className="container">
    
        <nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#myPage">Logo</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#pricing">PRICING</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>
    
    </div>
    
    
    
    
)
}
});

var ScriptT = React.createClass({
render : function (){
return (
            
        <div className="container"> 
    
            {2 + 2}
    
        </div>
        
        )
    }
    
});



class TestingCode extends React.Component{
    getName(){
        return("Testing")
    }
    render(){
        return(
            <div className="container">               
                <h2>
            
                    {this.getName() + " " + "Code"}
                   
            
                </h2>    
            
            </div>
        )
    }
}

class Container extends React.Component{
    
    render(){
        
        return(
            <div className="container">
            <h1>To do list is rendering</h1>
            </div>
        
        )
    }
}

class TodoList extends React.Component{
    constructor(){
        super();
        this.state={

            name:["Menu 1","Menu 2","Menu 3"]
        }

    }
    
    render(){
        return(
            <div className="container">      
                <hr />
                <h3>State and props --- list</h3>
                <ul>
            
                    {
                        this.state.name.map(function(cityname){
                        return <TodoMenu key={cityname} detail={cityname} />
                        
                 
                        })
        
                    }
                </ul>
            </div>
            
         )
    }
}

class TodoMenu extends React.Component{
    render(){
        return(
        
            <li>
                {this.props.detail}
            </li>
        
        )
    }
}

class City extends React.Component{
   
    constructor(){
        super();
        
        this.state={
            
            cityOption:["New Delhi","Dwarka","Koral Bagh","Sahdara","Mehrauli","Rohini","Pitampura","Vasant Kung","Old Delhi"]
        }
    }
    render(){
        
        
         var myStyle = {
         fontSize: '14px',
         background: '#eee',
         border:'1px solid #000 '
          }
         
        return(
            
            <div className="container">
            <hr />
            <h3>State and props Selet Box</h3>
            <div className="row">
            <div className="col-md-3">
                <div className="form-group">
                <label>Select City</label>
            
                <select className="form-control" style = {myStyle} >
            
                {this.state.cityOption.map(function(cityOption){
                    return <CitySelect key={cityOption} detail={cityOption} />
                })
            
                }
            </select>
        </div>
        </div>
        </div>
        </div>
            
        )
        
    }
}

class CitySelect extends React.Component{
    render(){
        return(
            <option>
                {this.props.detail}
            </option>
        
        )
    }
}
    
ReactDOM.render(<App />, document.getElementById('main'));