



import React from 'react';

export class Qz_section extends React.Component{
  constructor() {
 	super();
this.state={items:[]};
 }
 componentDidMount(){
  fetch('https://api.myjson.com/bins/s6y2v')
.then(result=>result.json())
   .then(items=>this.setState({items}))
 }
   render(){
       return(
<div className="container">
<div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
         {
 this.state.items.length ?	
this.state.items.map(item=><div className="listing-grid" key={item.id} >

<div className="row">
<div className="col-md-2 col-sm-2 col-xs-12 hidden-xs"> <a data-toggle="tooltip" data-placement="bottom" data-original-title="Martina Jaz" href="#"> 
<img alt="" className="img-responsive center-block" src={item.URL} /> </a> 
   </div>
   <div className="col-md-7 col-sm-8  col-xs-12">
     <h3><a href="#">{item.title}</a></h3>
     <div className="listing-meta"> <span><i className="fa fa-clock-o" aria-hidden="true"></i>8 mintes ago</span> <span><i className="fa fa fa-eye" aria-hidden="true"></i> 750 Views</span> </div>
   </div>

<div className="col-md-3 col-sm-2 col-xs-12">
     <ul className="question-statistic">
       <li className="active"> <a data-toggle="tooltip" data-placement="bottom" data-original-title="Answers"><span>2</span></a> </li>
       <li> <a data-toggle="tooltip" data-placement="bottom" data-original-title="Votes"><span>0</span></a> </li>
     </ul>
   </div>

<div className="col-md-10 col-sm-10  col-xs-12">
     <p>{item.body}</p>
     <div className="pull-right tagcloud"> {item.tag} </div>
   </div>

</div>
</div>) 
           : <div>Loading...</div>
         }
     </div> 
  </div> 
   </div> 

       )
   }
}





