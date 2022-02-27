import {BrowserRouter as  Router, Routes, Route, Link} from 'react-router-dom';

import Navbar from '../Navbar';
import Home from './home';
import Destination from './destination';
import Gallery from './gallery';
import Feedback from './feedback';
import './App.css';
function App(){
  return (
      <Router>
        <Navbar/>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Destination' element={<Destination/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
          <Route path='/Feedback' element={<Feedback/>}/>
        </Routes>
      </Router> 
  );
       
}

export default App;
