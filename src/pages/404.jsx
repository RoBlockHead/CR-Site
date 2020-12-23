import React from 'react';
import Jumbotron, { JumboText } from '../components/jumbotron'
const Error404 = () => {


	return(
		<div className="404">
			<Jumbotron>
				<JumboText><span className="red">Error 404</span></JumboText>
				<h3>Sorry, the page you requested could not be found.</h3>
			</Jumbotron>
		</div>
	)
}
export default Error404;