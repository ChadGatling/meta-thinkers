import React, { Component } from "react";

const big = {
	fontSize: "40pt",
    lineHeight: "0",
    position: "relative",
    top: "20px",
    left: "-30px",
};

class Testimonial extends Component {
	state = {

	};

	render() {
		return(
		<div>
			<p className="jumbotron testimonial-text mx-5 px-5 py-1">
				<span style={big}>&ldquo;</span>
				<span>{this.props.children}</span>
			</p>
		</div>
		)
	}
};

export default Testimonial;