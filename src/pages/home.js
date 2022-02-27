import React from 'react';
import './Home.css';
class Home extends React.Component{
  render(){
     return( <div>
       <h1>WELCOME TO MALAWI TOURISM</h1>
       <br/>
       <form>
            <li><input  className = "id" type = "search" placeholder = "Search..."/></li>
            <li><input class = "id1" type = "submit" value = "Search"/></li>
            <br/>
        </form>
       {/* <body> */}
        
        {/* <h1><img className ="img1" src = "/assets/images/b.jpg"/>WELCOME TO MALAWI TOURISM</h1> */}
         <br/>
       
        {/* <li><button><a href = "home.js">HOME</a></button></li>
    <li><button ><a href = "destination.js">DESTINATION</a></button></li>
    <li><button><a href = "gallery.js">GALLERY</a></button></li>
    <li><button ><a href = "feedback.js">FEEDBACK</a></button></li> */}
{/* </body> */}
<br/>
<br/>
<br/>
      <h2>Experience the wonders of malawi nature</h2>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <marquee><h>Visit different tourist site within malawi and experience the beauty of malawi nature, including its massive lake Malawi, the mulanje mountain, zomba plateua, liwonde national park, and many other different amazing palces within malawi. For more check out the gallery and destination sections</h></marquee>
    
    </div>
     );
         
  }  
}

export default Home;  