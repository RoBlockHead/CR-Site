import React from 'react';
import {
	Switch,
	NavLink,
	Route
} from 'react-router-dom';
import "./style/common.scss";
import './style/main.scss';
import Home from '../pages/home';
import About from '../pages/about';
import Error404 from '../pages/404';
import PaymentPage from '../pages/PaymentPage';
const MainContent = () => {
	return(
		<div className="main">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/payment" component={PaymentPage} />
				<Route component={Error404} />
			</Switch>	

		</div>
	)
}
export default MainContent;