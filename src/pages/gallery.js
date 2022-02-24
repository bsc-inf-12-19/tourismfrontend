import React from 'react';
import ga1 from "../pages/ga1.jpg";

class Gallery extends React.Component{
  render(){
     return( <div>

{/* <body> */}
    <h1>Welcome to MalawiTourism gallery</h1>
    <div class = "move">
      </div>
    <br/>
    <nav>
    <ul>
        <div>
            <form>
                <li><input  class = "id" type = "search" placeholder = "Search..."/></li>
                <li><input class = "id1" type = "submit" value = "Search"/></li>
            </form>
    <li><button><a href = "home.js">HOME</a></button></li>
    <li><button ><a href = "destination.js">DESTINATION</a></button></li>
    <li><button><a href = "gallery.js">GALLERY</a></button></li>
    <li><button ><a href = "feedback.js">FEEDBACK</a></button></li>
</div>
</ul>
</nav>

<br/>
<br/>
<br/>
    <h2>The warm heart of africa</h2>

  
   <br/>
   <img src = "assets/images/ga1.jpg" alt="Mulanje mountain"/>
   <img src = "assets/images/ga2.jpg" alt ="fish spicies of Lake Malawi"/> 
   <img src = "assets/images/ga3.jpg" alt ="lake malawi beach"/>
   <hr/>
   <img src = "assets/images/ga4.jpg" alt ="elephant and tourists"/>
   <img src = "assets/images/ga5.jpg" alt = "Mulanje mountain waterfalls"/>
   <img src = "assets/images/ga6.jpg" alt = "elephants by the side of river"/>
   <hr/>
   <img src = "assets/images/ga7.jpg" alt = "a lodge on lake shore"/>
   <img src = "assets/images/ga8.jpg" alt = "lodge on rocks surrounded by lake malawi"/>
   <img src = "assets/images/ga9.jpg" alt = "lake beach"/>
   <hr/>
   <img src = "assets/images/ga10.jpg" alt = "lake earia view"/>
   <img src = "assets/images/ga11.jpg" alt = "zomba plateua"/>
   <img src = "assets/images/ga12.jpg" alt = "tourists on boat"/>

{/* </body> */}
         {/* <h1>Welcome to MalawiTourism gallery</h1>
        
          <form>
            <li><input  class = "id" type = "search" placeholder = "Search..."/></li>
            <br/>
            <li><input class = "id1" type = "submit" value = "Search"/></li>
            <br/>
        </form>        
        <li><a href = "home.js">HOME</a></li>
        <li><a href = "#">DESTINATION</a></li>
        <li><a href = "gallery.js">GALLERY</a></li>
        <li><a href = "#">FEEDBACK</a></li> */}
    </div>
     );
         
  }  
}

export default Gallery;  