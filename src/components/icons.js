import React from "react";
export const ChevronRot = (props) => {

	return(

		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="arcs" transform={props.rotate &&"rotate(90)"}>
			<defs>
				<style>
				</style>
			</defs>
			<path d="M9 18l6-6-6-6"/>
		</svg>
	);
}
export default ""