import React from 'react';
import aboutMeTxt from '../../text/about-me.txt';
import certTxt from '../../text/certifications.txt';

const AboutMe = () => {
	console.log(certTxt.split(/\n/ig));

	let aboutMeArr = aboutMeTxt.split(/\n/ig).filter(value => value !== '');
	return (
		<div>
			<h3>About Me</h3>
			{
				aboutMeArr.map(value => <p key={value}>{value}</p>)
			}
		</div>
	)
};

export default AboutMe;
