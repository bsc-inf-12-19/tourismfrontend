import React from 'react';
import './Home.css';
class Home extends React.Component{
  render(){
     return( <div>
       <body>
        <h1>WELCOME TO MALAWI TOURISM</h1>
        {/* <h1><img className ="img1" src = "/assets/images/b.jpg"/>WELCOME TO MALAWI TOURISM</h1> */}
         <br/>
        <form>
            <li><input  className = "id" type = "search" placeholder = "Search..."/></li>
            <li><input class = "id1" type = "submit" value = "Search"/></li>
            <br/>
        </form>
        {/* <li><button><a href = "home.js">HOME</a></button></li>
    <li><button ><a href = "destination.js">DESTINATION</a></button></li>
    <li><button><a href = "gallery.js">GALLERY</a></button></li>
    <li><button ><a href = "feedback.js">FEEDBACK</a></button></li> */}
</body>
<br/>
<br/>
<br/>
      <h2>Experience the wonders of malawi nature</h2>
      
    </div>
     );
         
  }  
}

export default Home;  