// Modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Nav from "./components/Nav";
import Home from "./pages/Home";

// Stylesheet etc.
import './App.css';

class App extends Component {
	state = {

	};
	
	render() {
		return (
			<div>
				<Nav />
				<Router>
					<div>
						<Switch />
						<Route exact path="/" component={Home} />
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
