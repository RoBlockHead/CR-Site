import React from 'react';
import Jumbotron, { JumboText, JumboTagline } from '../components/jumbotron'
import img1 from '../assets/Backdrop1.png'
import LinkButton from '../components/Button';
import Content from '../components/content';
const Home = () => {


	return(
		<div className="home">
			<Jumbotron image={img1} >
				<JumboText>FROM <span className="cyan">POTENTIAL</span> TO <span className="red">KINETIC</span></JumboText>
				<JumboTagline>We're CircuitRunners Robotics and we don't just build robots!</JumboTagline>
				<LinkButton internal={true} text="See More..." to="/about"/>
			</Jumbotron>
			<Content>

			</Content>
			
		</div>
	)
}
export default Home;