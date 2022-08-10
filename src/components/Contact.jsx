import React from 'react';
import Button from './Button';
import '../styles/Contact.css';

const Contact = () => {
	return (
		<section className="contact">
			<div className="contact__text">
				<h2>Book a call with me</h2>
				<p>
					I’d love to have a chat to see how I can help you. The best first step
					is for us to discuss your project during a free consultation. Then we
					can move forward from there.
				</p>
			</div>
			<Button />
		</section>
	);
};

export default Contact;
