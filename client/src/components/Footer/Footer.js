import React, { Component } from "react";

class Footer extends Component {
	state = {

	};

	render() {
		return(
		<div>
			<footer className="jumbotron bg-white">
				<div>
					<p className="body-text text-black">
						Meta Thinkers
					</p>
					<nav>
						<ul className="text-muted nav-text">
							<li className="">
								<u>
									<a href="/about">About</a>
								</u>
							</li>
							<li>
								<u>
									<a href="/contact">Contact</a>
								</u>
							</li>
						</ul>
					</nav>
				</div>
				<div className="two-toned-footer-color"></div>
				<p className="text-muted text-muted-footer text-right">
					&copy; Copyright 2018 Elliott Wendel
				</p>
			</footer>			
		</div>
		)
	}
};

export default Footer;