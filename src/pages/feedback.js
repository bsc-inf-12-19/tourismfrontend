import React from 'react';
import "./Feedback.css";
class Feedback extends React.Component{
  render(){
     return(
    <div>
<h1>Feedback</h1>
    <h2><a href = "mailto:patrickkamphulusa@gmail.com">click to email</a></h2> 
    <div className="sign">
    <form>
    <input  className= "c1" type = "text" placeholder = "Enter your name"/>
    <br/>
    <br/>
   <input className="c2" type = "email" placeholder="Enter your email"/>
   <br/>
   <br/>
   <input className="c3" type = "submit" placeholder="submit"/> 
</form>
</div>
    </div> 
  );
         
 }  
}

export default Feedback;  