// Modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// Pages
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Programs from "./pages/Programs";

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
						<Route exact path="/about" component={About} />
						<Route exact path="/programs" component={Programs} />
						<Route exact path="/blog" component={Blog} />
						<Route exact path="/contact" component={Contact} />
					</div>
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
