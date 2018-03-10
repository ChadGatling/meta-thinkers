import React, { Component } from "react";

// Components
import Testimonial from "../../components/Testimonial";

const imageStyle = {
width:"100%",
height: "300px",
backgroundSize: "cover",
backgroundPosition: "30%",
backgroundImage: "url(http://www.meta-thinkers.com/uploads/7/2/9/8/72985429/background-images/1086952017.jpg)"
};

const bigText = {
	fontSize: "20pt"	
};

class About extends Component {
	state = {

	};

	render() {
		return(
		<div>
			<div style={imageStyle}></div>
			<div className="jumbotron bg-white about-text">
				<h1 className="header-text text-left text-black">About us</h1>
				<p className="">
					<span style={bigText}>Our vision</span> is to provide personalized enrichment programs that <strong>intrigue</strong>, <strong>engage</strong>, and <strong>enrich</strong> Thinkers, Parents and Educators to be active participants in their education. 
				</p>
				<p>
					Meta Thinkers’ pledge to Educators. Parents. and Thinkers.   
					To Educators, we pledge to:
				</p>
				<ul className="list-dot">
					<li>
						value your education and showcase your specialities
					</li>
					<li>
						listen to your feedback
					</li>
					<li>
						encourage and support development
					</li>
				</ul>
				<p>
					To Parents, we pledge to:
				</p>
				<ul className="list-dot">
					<li>
						be an advocate for you and your thinker(s)
					</li>
					<li>
						highlight family goals and connect your community
					</li>
					<li>
						encourage and support development
					</li>
				</ul>
				<p>
					To Thinkers, we pledge to:
				</p>
				<ul className="list-dot">
					<li>
						intrigue. engage. and enrich your independent whole self 
					</li>
					<li>
						highlight strengths and provide outlets to explore interests and emotions 
					</li>
					<li>
						present challenges that drive growth, push failure and build applicable life skills 
					</li>
					<li>
						encourage and support development
					</li>
				</ul>
			</div>
			<Testimonial>
				Tenley has that special spark with kids that makes it easy for them to connect and then in turn want to build relationship and grow. The MT enrichments have that same spark of love and creativity in them that draws children in, lets them take charge of their learning, and leads them to build and challenge themselves. Its a very unique program thats fills a need for parents who want something different." -MT Community Classroom Parent
			</Testimonial>
			<Testimonial>
				Meta Thinkers provides youth with exciting and engaging learning activities.  Thinkers are given the chance to experience their own unique creativity and to show that creativity to their community.  This is excellent for the self-esteem of children!  It is so important for every child to experience rich, engaging and creative experiences like what is offered through Meta Thinkers. This is what is missing in schools!" - MT Artisan 
			</Testimonial>
		</div>
		)
	}
};

export default About;