import React from 'react';
import './Destination.css';

class Destination extends React.Component{
  render(){
     return( <div>
    <h1>POPULAR DESTINATIONS</h1>
    <div className = "move"/>
   <h1>Liwonde National Park</h1>
   <p>Liwonde national park is located in the southern part of malawi
    on the edge of shire river, the largest river in malawi</p>
   <section className = "sec1"></section>
  <section className = "content">
  <img src = "/assets/images/liwo3.jpg" alt="Mulanje mountain"/>
  </section>
  <h1>Mulanje Mountain</h1>
  <p>The tallest mountain in Malawi, it has the highest point above sea level the whole of southern africa</p>
  <section className = "sec2"></section>
  <section className = "content">
  <img src = "/assets/images/mount1.jpg" alt="Mulanje mountain"/>
</section>
 <h1>Lake Malawi</h1>
 <p>It is the fresh water lake with most species of fish than anywhere in the world</p>
  <section className = "sec3"></section>
  <section className = "content">
  <img src = "/assets/images/ga3.jpg" alt="Mulanje mountain" />
  </section>


    </div>
     );
         
  }  
}

export default Destination;  