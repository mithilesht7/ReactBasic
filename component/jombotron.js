var React = require('react');

class Jumbotron extends React.Component{
render(){
return (
            
    <div className="jumbotron text-center">
    <div className="row">
    <div className="col-md-6 col-md-offset-3">
  <h1>HAVE A QUESTION?</h1> 
  <p>Below enter what you are looking for!</p> 
  <form>
    <div className="input-group">
      <input type="email" className="form-control main-search" size="50" placeholder="Enter Question?" required />
      <div className="input-group-btn">
        <button type="button" className="btn btn-success btn-lg search-btn">SEARCH</button>
      </div>
    </div>
  </form>
    </div>
    </div>
</div>
        
        )
    }
    
};


export default Jumbotron