import React from 'react';

class Home extends React.Component{
  render(){
     return( <div>

        <h1><img class ="img1" src = "assets/images/b.jpg"/>MALAWI TOURISM</h1>
         <br/>
        <form>
            <li><input  class = "id" type = "search" placeholder = "Search..."/></li>
            <br/>
            <li><input class = "id1" type = "submit" value = "Search"/></li>
            <br/>
        </form>        
        <li><a href = "Home.html">HOME</a></li>
        
        <li><a href = "#">DESTINATION</a></li>
        <li><a href = "gallery.js">GALLERY</a></li>
        <li><a href = "mailto:patrickkamphulusa@gmail.com">FEEDBACK</a></li>
       
        <div>
        <form class = "sign">
        <h2>Malawi Tourism</h2>
        <br/>
    <a href = "SignUp.html"><input type = "button" value = "SignUp"/></a>
    <a href = "#"><input type = "button" value = "SignIn"/></a>
    </form>
    </div>



    </div>
     );
         
  }  
}

export default Home;  