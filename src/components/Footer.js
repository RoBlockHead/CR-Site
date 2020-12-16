import React from 'react';
import "./style/footer.scss";
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import youtube from '../assets/icons/youtube.svg';
const Footer = () => {

	return(
		<footer className="footer">
			<div className="container">
				<div className="col">

				</div>
				<div className="col">
					<h3>&copy; 2020 CircuitRunners Robotics Inc.</h3>
				</div>
				<div className="col">
					<div className="social">
						<a href="https://facebook.com/circuitrunners" ><img alt="" className="facebook" src={facebook} /></a>
						<a href="https://twitter.com/circuitrunners" ><img alt="" className="twitter" src={twitter} /></a>
						<a href="https://youtube.com/circuitrunners" ><img alt="" className="youtube" src={youtube} /></a>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer;