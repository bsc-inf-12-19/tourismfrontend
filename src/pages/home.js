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
<br/>
<br/>
<br/>
      <h2>Experience the beauty of malawi nature</h2>
      <marquee><h>Visit different tourist site within malawi and experience the beauty of malawi nature, including its massive lake Malawi, the mulanje mountain, zomba plateua, liwonde national park, and many other different amazing places within malawi. For more check out the gallery and destination sections on the top page</h></marquee>
      <img src = "/assets/images/ga3.jpg" alt="Mulanje mountain"/>
      <img src = "/assets/images/ga5.jpg" alt="Mulanje mountain"/>
      <img src = "/assets/images/ga11.jpg" alt="Mulanje mountain"/>
      <br/>
    
    </div>
     );
         
  }  
}

export default Home;  