import React from 'react';
import Jumbotron, { JumboText } from '../components/jumbotron'
import Content from '../components/content';
import ContactForm from '../components/contactForm';
const About = () => {
	return(
		<div className="about">
			<Jumbotron>
				<JumboText>About Us</JumboText>
			</Jumbotron>
			<Content>
				<h3>Who We Are</h3>
				<p>CircuitRunners Robotics is best known as a nonprofit FIRST robotics 
					organization based at Wheeler High School. While we compete as FIRST 
					Robotics Competition Team 1002, FIRST Tech Challenge Teams 1002 
					and 11347, we are so much more than that. We have been competing and spreading 
					STEM in Marietta, Georgia and beyond since 2002. We seek to instill important 
					values of engineering, business, and so much more to our members, our 
					community, and the world to inspire and create innovators and future leaders 
					necessary for advancing society. We have been competing for almost 20 years 
					across FIRST Robotics Competition, VEX Robotics, FIRST Tech Challenge, 
					BEST Robotics, and Zero Robotics. Hundreds of students have used their 
					CircuitRunner experience to be the foundation for a strong STEM career. We 
					have and continue to help teams from around the world become better through 
					mentoring and competition, and we do our best to show students what is possible 
					through a STEM education. But while we have almost two decades of experience 
					under our belt, we are not quite finished yet – we aim to keep shooting higher 
					and higher!
				</p>
				<h3>History</h3>
				<p>
					All the way back in 2002, CircuitRunners Robotics joined the robotics community 
					with a mission of giving high school students the best hands-on opportunities to 
					begin a lifelong journey in the fields of Science, Technology, Engineering, and 
					Math. Since then, CircuitRunners Robotics has become an integral part of the 
					Georgia competition robotics community. We have always taken pride in our 
					strong outreach base, our competitive spirit, and our tight-knit community that 
					spans decades.
				</p>
				<ContactForm />
			</Content>
			
		</div>
	)
}
export default About;