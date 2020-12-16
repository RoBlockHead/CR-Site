import React from 'react';
import "./style/jumbotron.scss";

const Jumbotron = (props) => {
	const jumboStyle = {
		backgroundImage: 'url(' + props.image + ')',
		backgroundColor: props.color,
		objectFit: 'cover',
		backgroundPosition: 'center center'
	}
	return(
		<div className="jumbotron" style={jumboStyle}>
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