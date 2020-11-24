import React from 'react';

const Jumbotron = (props) => {
	return(
		<div class="jumbotron">
			{props.children}
		</div>
	)
}
export const JumboText  = (props) => {
	return(
		<h1 className="JumboText">{props.children}</h1>
	)
}
export const JumboTagline = (props) => {
	return(
		<h3 className="JumboTagline">{props.children}</h3>
	)
}
export default Jumbotron;