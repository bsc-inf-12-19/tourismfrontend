import React, { useState } from 'react';
import "./Feedback.css";
class Feedback extends React.Component{
    // const feedback = () =>{
    //     fetch("http://localhost:8080/api/v1/tourism").then(response => response.json()).then(data) => console.log(data)
    // }
    // render()
    // feeback()
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