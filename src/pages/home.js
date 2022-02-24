import React from 'react';

class Home extends React.Component{
  render(){
     return( <div>
       <body>
        <h1><img class ="img1" src = "assets/images/b.jpg"/>MALAWI TOURISM</h1>
         <br/>
        <form>
            <li><input  class = "id" type = "search" placeholder = "Search..."/></li>
            <br/>
            <li><input class = "id1" type = "submit" value = "Search"/></li>
            <br/>
        </form>
        <li><button><a href = "home.js">HOME</a></button></li>
    <li><button ><a href = "destination.js">DESTINATION</a></button></li>
    <li><button><a href = "gallery.js">GALLERY</a></button></li>
    <li><button ><a href = "feedback.js">FEEDBACK</a></button></li>        
        {/* <li><a href = "home.js">HOME</a></li>
        
        <li><a href = "destination.js">DESTINATION</a></li>
        <li><a href = "gallery.js">GALLERY</a></li>
        <li><a href = "feedback.js">FEEDBACK</a></li> */}
       
        <div>
          <br/>
          <br/>
          <footer>
    <h3>The warm heart of africa</h3>
</footer>
    </div>
</body>


    </div>
     );
         
  }  
}

export default Home;  