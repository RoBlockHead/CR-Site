import React, { useState } from 'react';
import './style/nav.scss';
import logo_wide from '../assets/logo_wide.png';

const Navbar = () => {
	const [ navOn, setNavOn ] = useState(false)
	const toggleNav = () => {
		setNavOn(!navOn)
	}
	const mainNav = 
		<>
			<NavItem name="Home" to="#" />
			<NavItem name="About Us" to="#" />
			<NavFolder name="Folder">
				<NavItem name="Folder Item" to="#" />
				<NavItem name="Folder Item" to="#" />
				<NavItem name="Folder Item" to="#" />
			</NavFolder>
			<NavItem name="Contact Us" to="#" />
			<NavItem name="Lorem Ipsum" to="#" />
			<NavItem name="Lorem Ipsum" to="#" />
			<NavItem name="Lorem Ipsum" to="#" />
			<NavItem name="Lorem Ipsum" to="#" />
			<NavItem name="Lorem Ipsum" to="#" />
		</>
	return(
		<div className="nav">
			<div className="desktop">
				<div className="navbar">
					<div className="nav-left">
						<div className="nav-logo">
							<img src={logo_wide} className="logo" alt="CircuitRunners Logo" />
						</div>
					</div>
					<nav className="nav-content">
						{mainNav}
					</nav>
				</div>
			</div>
			<div className="mobile">
				<div className="navbar-mobile navbar">
					<Hamburger navToggle={toggleNav} navState={navOn} />
					<img src={logo_wide} className="logo" alt="CircuitRunners Logo" />
				</div>
				<NavSlide navOn={navOn} navSetter={setNavOn}>
					{mainNav}
				</NavSlide>
			</div>
		</div>
	);
}
export default Navbar; 

const NavFolder = (props) => {
	const [ open, setOpen ] = useState(false);
	// const { height } = useWindowSize();
	const openFolder = () => {
		setOpen(!open)
	}
	return(
		<div className={ open ? "nav-folder item open" : "nav-folder item" }>
			<a className="name" onClick={openFolder} href="#">{props.name}</a>
			<div className="items">
			{props.children}
			</div>
		</div>
	)
}

const NavItem = (props) => {
	return(
		<div class="item"><a href={props.to} >{props.name}</a></div>
	)
}
const Hamburger = (props) => {

	return(
		<div className="ham" onClick={props.navToggle}>
			<div id="ham1" className={props.navState ? "changed" : ""}> </div>
			<div id="ham2" className={props.navState ? "changed" : ""}> </div>
			<div id="ham3" className={props.navState ? "changed" : ""}> </div>
		</div>
	)
}

const NavSlide = (props) => {
	return(
		<div className={props.navOn ? "visible navside side" : "navside side"}>
			<nav className="container">
				{props.children}
			</nav>
		</div>
	)
}
