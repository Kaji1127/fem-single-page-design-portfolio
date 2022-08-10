import React from 'react';
import Avatar from '../assets/image-amy.webp';
import Button from './Button';

import '../styles/About.css';

const About = () => {
	return (
		<section className="about">
			<img src={Avatar} alt="profileImage" />
			<div className="about__text">
				<h2>I’m Amy, and I’d love to work on your next project</h2>
				<p>
					I love working with others to create beautiful design solutions. I’ve
					designed everything from brand illustrations to complete mobile apps.
					I’m also handy with a camera!
				</p>
				<Button />
			</div>
		</section>
	);
};

export default About;
