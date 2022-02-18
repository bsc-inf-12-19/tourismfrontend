import React from 'react';

class Gallery extends React.Component{
  render(){
     return( <div>
         <h1>Welcome to MalawiTourism gallery</h1>
        
          <form>
            <li><input  class = "id" type = "search" placeholder = "Search..."/></li>
            <br/>
            <li><input class = "id1" type = "submit" value = "Search"/></li>
            <br/>
        </form>        
        <li><a href = "home.js">HOME</a></li>
        <li><a href = "#">DESTINATION</a></li>
        <li><a href = "gallery.js">GALLERY</a></li>
        <li><a href = "mailto:patrickkamphulusa@gmail.com">FEEDBACK</a></li>
        <form class = "sign">
        <h2>Malawi Tourism</h2>
        <br/>
    <a href = "SignUp.html"><input type = "button" value = "SignUp"/></a>
    <a href = "#"><input type = "button" value = "SignIn"/></a>
</form>

    </div>
     );
         
  }  
}

export default Gallery;  