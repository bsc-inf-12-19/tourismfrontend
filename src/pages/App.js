import {BrowserRouter as  Router, Routes, Route, Link} from 'react-router-dom';

import Navbar from '../Navbar';
import Home from './home';
import Destination from './destination';
import Gallery from './gallery';
import Feedback from './feedback';
// import logo from './logo.svg';
import './App.css';

function App(){
  return (
    // <div>
      <Router>
        <Navbar/>

        {/* <nav>
          <Link to="/Home">Home</Link>
          <Link to="Destination">Destination</Link>
          <Link to="Gallery">Gallery</Link>
          <Link to="Feedback">Feedback</Link>
        </nav> */}


        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Destination' element={<Destination/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
          <Route path='/Feedback' element={<Feedback/>}/>
        </Routes>
      </Router> 
   /* <Home/> */
    /* <Destination/> */
       /* <Gallery/> */
   /* <Feedback/> */
    // </div>
  );
       
}

export default App;
