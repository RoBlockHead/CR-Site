import React from 'react';
import {
	Switch,
	NavLink,
	Route
} from 'react-router-dom';
import Home from '../pages/home';

const MainContent = () => {
	return(
		<div className="main">
			<Switch>
				<Route path="/" component={Home} />
			</Switch>	

		</div>
	)
}
export default MainContent;