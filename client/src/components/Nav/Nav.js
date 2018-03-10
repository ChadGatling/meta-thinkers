import React, { Component } from "react";

const fullWidth = {
	width: "100%"
}

class Nav extends Component {
	state = {

	};

	render() {
		return(
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-white text-uppercase">				
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarEnabledContent" aria-controls="navbarEnabledContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<a className="navbar-brand header-text mx-auto" href="/">Meta Thinkers</a>
				
				

				<div className="collapse navbar-collapse" id="navbarEnabledContent">
					<ul className="navbar-nav mt-2 mt-lg-0 nav-text text-black mx-auto">
						<li className="nav-item">
							<a className="nav-link" href="/">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/about">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/programs">MT Enrichment Programs</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/blog">Blog</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/contact">Contact</a>
						</li>
					</ul>
					{/*<form className="form-inline my-2 my-lg-0">
						<input className="form-control mr-sm-2" type="search" placeholder="Search" />
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>*/}
				</div>
			</nav>		
		</div>
		)
	}
};

export default Nav;