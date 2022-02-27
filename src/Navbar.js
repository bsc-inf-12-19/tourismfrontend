import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar(){
	return (
		<div className="navbar">
		<div className="rightSide">
			<Link to="/">Home</Link>
			<Link to="/Destination">Destination</Link>
			<Link to="/Gallery">Gallery</Link>
			<Link to="/Feedback">Feedback</Link>
		</div>
		</div>
	);
}

export default Navbar;