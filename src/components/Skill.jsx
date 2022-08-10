import React from 'react';
import PatternGraphic from '../assets/pattern-graphic-design.svg';
import PatternUIUX from '../assets/pattern-ui-ux.svg';
import PatternApps from '../assets/pattern-apps.svg';
import PatternIllustrations from '../assets/pattern-illustrations.svg';
import PatternMotion from '../assets/pattern-motion-graphics.svg';
import PatternPhotography from '../assets/pattern-photography.svg';

import '../styles/Skill.css';

const Skill = () => {
	const skills = [
		{
			name: 'Graphic Design',
			image: PatternGraphic,
			text: 'graphic',
		},
		{
			name: 'UI/UX',
			image: PatternUIUX,
			text: 'uiux',
		},
		{
			name: 'Apps',
			image: PatternApps,
			text: 'apps',
		},
		{
			name: 'Illustrations',
			image: PatternIllustrations,
			text: 'illustrations',
		},
		{
			name: 'Photography',
			image: PatternPhotography,
			text: 'photography',
		},
		{
			name: 'Motion Graphics',
			image: PatternMotion,
			text: 'motion',
		},
	];

	return (
		<section className="skill">
			{skills.map((skill) => {
				return (
					<div
						key={skill.text}
						className={`skill__inner skill__inner--${skill.text}`}
					>
						<p>{skill.name}</p>
						<img src={skill.image} alt={skill.name} />
					</div>
				);
			})}
		</section>
	);
};

export default Skill;
