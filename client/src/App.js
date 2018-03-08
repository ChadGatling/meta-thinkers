import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import './App.css';

class App extends Component {
	state = {

	};
	
	render() {
		return (
			<div>
				<Router>
					<div>
						<Switch />
						<Route exact path="/" component={Welcome} />
					</div>
				</Router>
				<footer className="footer">
					<div className="two-toned-footer-color"></div>
					<p className="text-muted text-muted-footer text-center">
						&copy; Copyright 2018 Elliott Wendel
					</p>
				</footer>
			</div>
		);
	}
}

export default App;
