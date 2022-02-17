import React from 'react';

class Home extends React.Component{
  render(){
         
        //   <div>  <h1><img class ="img1" src = "b.jpg"><span style = "color:black"/>Mala</span><span style = "color:red">wiTou</span><span style = "color:green">rism</span></h1>
         {/* <div class = "move">
         <br>
         <nav>
         <ul>
             <div> */}
             return <div>
                     <form>
                     <li><input  class = "id" type = "search" placeholder = "Search..."/></li>
                     <br></br>
                     <li><input class = "id1" type = "submit" value = "Search"/></li>
                     </form>
                </div> 
         {/* <li><button = "button"><a href = "Home.html">HOME</a></button></li>
         <li><button = "button"><a href = "#">DESTINATION</a></button></li>
         <li><button = "button"><a href = "gallery.html">GALLERY</a></button></li>
         <li><button = "button"><a href = "mailto:patrickkamphulusa@gmail.com">FEEDBACK</a></button></li>
     </div>
     </ul>
     </nav>
     <br> */}
     <div class = "h2">
         <form class = "sign">
             <h2>Malawi Tourism</h2>
             <br/>
         <a href = "SignUp.html"><input type = "button" value = "SignUp" style = "color:gold; background:blue"/></a>
         <a href = "#"><input type = "button" value = "SignIn" style = "color:gold; background:blue"/></a>
     </form></div>
      
         
  }  
}

export default Home;  