import React from 'react';
import Logo from '../assets/logo.svg';
import Button from './Button';

const HeaderFooter = () => {
	return (
		<>
			<a href="/">
				<img src={Logo} alt="logo" />
			</a>
			<Button />
		</>
	);
};

export default HeaderFooter;
