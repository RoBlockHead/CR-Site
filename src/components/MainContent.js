import React from 'react';
import {
	Switch,
	NavLink,
	Route
} from 'react-router-dom';
import "./style/common.scss";
import Home from '../pages/home';
import Error404 from '../pages/404';
const MainContent = () => {
	return(
		<div className="main">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={Error404} />
			</Switch>	

		</div>
	)
}
export default MainContent;