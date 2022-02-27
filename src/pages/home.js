import React from 'react';
import './Home.css';
class Home extends React.Component{
  render(){
     return( <div>
       <body>
        <h1><img className ="img1" src = "/assets/images/b.jpg"/>MALAWI TOURISM</h1>
         <br/>
        <form>
            <li><input  className = "id" type = "search" placeholder = "Search..."/></li>
            <br/>
            <li><input class = "id1" type = "submit" value = "Search"/></li>
            <br/>
        </form>
        {/* <li><button><a href = "home.js">HOME</a></button></li>
    <li><button ><a href = "destination.js">DESTINATION</a></button></li>
    <li><button><a href = "gallery.js">GALLERY</a></button></li>
    <li><button ><a href = "feedback.js">FEEDBACK</a></button></li> */}
</body>

      <h2>Experience the wonders of nature</h2>
    </div>
     );
         
  }  
}

export default Home;  