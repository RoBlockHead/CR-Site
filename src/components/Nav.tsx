import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style/nav.scss';
import logo_wide from '../assets/logo_wide.png';
import { ChevronRot } from './icons';

// Navigation menu definition at end of file

interface NavProps {
	navState: boolean;
	navSetter: Function;
	navImage?: string;
}
const Navbar: React.FC<NavProps> = ( props: NavProps ) => {
	const [ navOn, setNavOn ] = [ props.navState, props.navSetter ]
	const [ windowOffset, setWindowOffset ] = useState(0);
	const toggleNav = () => {
		setNavOn(!navOn); 
	}
return(
		<div className="nav">
	
			<div className="desktop">
				<div className="navbar">
					<div className="nav-left">
						<img src={logo_wide} className="logo" alt="CircuitRunners Logo" />
					</div>
					<nav>
						{mainNav}
					</nav>
				</div>
			</div>
			<div className="mobile">
				<div className="navbar">
					<Hamburger navToggle={toggleNav} navState={navOn} />
					<img src={logo_wide} className="logo" alt="CircuitRunners Logo" />
				</div>
				
				<NavSlide navState={navOn} navSetter={setNavOn} >
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
		<div className={ open ? "folder item open" : "folder item" }>
			<a className="name" onClick={openFolder} href="#">{props.name}</a>
			<div className="items">
			{props.children}
			</div>
		</div>
	)
}

const NavItem = (props) => {
	return(
		<div className="item"><NavLink to={props.to} >{props.name}</NavLink></div>
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

export const NavSlide = (props) => {
	return(
		<div className={props.navState ? "visible side" : "side"} >
			<nav className="container" >
				{props.children}
			</nav>
		</div>
	)
}

const mainNav = 
	<>
		<NavItem name="Home" to="/" />
		<NavItem name="About Us" to="/about" />
		<NavItem name="Sponsors" to="/sponsors" />
		<NavFolder name="Teams">
			<NavItem name="FRC 1002" to="#" />
			<NavItem name="FTC 1002" to="#" />
			<NavItem name="FTC 11347" to="#" />
		</NavFolder>
		<NavItem name="Contact Us" to="#" />
		<NavItem name="Lorem Ipsum" to="#" />
		<NavItem name="Lorem Ipsum" to="#" />
	</>