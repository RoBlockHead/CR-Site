import React from 'react';
import Jumbotron, { JumboText } from '../components/jumbotron'
const Home = () => {


	return(
		<div className="home">
			<h1>HOMEPAGE</h1>
			<Jumbotron>
				<h1>Help</h1>
				<JumboText>FROM <span className="cyan">POTENTIAL</span> TO <span class="red">KINETIC</span></JumboText>
			</Jumbotron>
		</div>
	)
}
export default Home;