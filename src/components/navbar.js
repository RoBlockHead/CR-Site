import React, { useState } from 'react';
import '../style/navbar.css';
import logo_wide from '../assets/logo_wide.png';
const Navbar = () => {
	const [ navOn, setNavOn ] = useState(false)
	const toggleNav = () => {
		setNavOn(!navOn)

	}
	return(
		<>
		<div className="navbar">
			<div className="nav-left">
				<div className="nav-logo">
					<img src={logo_wide} className="logo" alt="CircuitRunners Logo" />
				</div>
			</div>
			<div className="nav-right">
				<div className="nav-item"><a href="#">Home</a></div>
				<div className="nav-item"><a href="#"></a></div>
			</div>
		</div>
		<div className="navbar-mobile">
			<div className="ham" onClick={toggleNav}>
				<div id="ham1" className={navOn ? "changed" : ""}> </div>
				<div id="ham2" className={navOn ? "changed" : ""}> </div>
				<div id="ham3" className={navOn ? "changed" : ""}> </div>
			</div>
			<img src={logo_wide} className="logo" alt="CircuitRunners Logo" />
		</div>
		<div className={navOn ? "visible navslide-mobile" : "navslide-mobile"}>
			<div className="container">
				<div class=""><a href="#">Home</a></div>
			</div>
		</div>
		</>
	);
}

export default Navbar;