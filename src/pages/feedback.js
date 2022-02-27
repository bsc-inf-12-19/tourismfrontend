import React from 'react';
import "./Feedback.css";
class Feedback extends React.Component{
  render(){
     return(

    <div>

{/* <body> */}
<h1>Feedback</h1>
    {/* <nav> */}
        {/* <ul>
                <form>
                    <li><input  className = "id" type = "search" placeholder = "Search..."/></li>
                    <li><input className = "id1" type = "submit" value = "Search"/></li>
                </form> */}
        {/* <li><button ><a href = "Home.html">HOME</a></button></li>
        <li><button ><a href = "Destination.html">DESTINATION</a></button></li>
        <li><button ><a href = "gallery.html">GALLERY</a></button></li>
        <li><button ><a href = "Feedback.html">FEEDBACK</a></button></li> */}
    {/* </ul> */}
    {/* </nav> */}
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
{/* </body> */}
    </div> 
  );
         
 }  
}

export default Feedback;  