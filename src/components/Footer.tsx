import React from 'react';
import "./style/footer.scss";
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import youtube from '../assets/icons/youtube.svg';
interface FooterProps {
	
}
const Footer: React.FC<FooterProps> = (props: FooterProps) => {

	return(
		<footer className="footer">
			<div className="container">
				<div className="col">

				</div>
				<div className="col">
					<span class="copyright">&copy; 2021 CircuitRunners Robotics Inc.</span>
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