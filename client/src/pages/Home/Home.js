import React, { Component } from "react";

const imageStyle = {
width:"100%",
height: "300px",
backgroundSize: "cover",
backgroundPosition: "30%",
backgroundImage: "url(http://www.meta-thinkers.com/uploads/7/2/9/8/72985429/background-images/1086952017.jpg)"
};

const bodyFont = {
	fontFamily: "fontBody"	
};

class Home extends Component {
	state = {

	};

	render() {
		return(
		<div>
			<div style={imageStyle}></div>
			
			<div className="jumbotron body-text">
				<p>
					Meta Thinkers provides personalized enrichment programs with strong foundations and practices around whole-child education that is transferable into themes and projects fit to each unique learning environment. 
				</p>
				<p>
					MT Enrichment Programs provide a vital nutriment that challenge strengths, encourage growth, and foster social and emotional intelligence. Thinkers, Parents, and MT Artisans are coached and supported through these mapped programs embedded with applicable life skills and practices.
				</p>
				<p>
					Ownership is celebrated in Thinker Showcases, bringing whole-communities together.
				</p>
			</div>
		</div>
		)
	}
};

export default Home;