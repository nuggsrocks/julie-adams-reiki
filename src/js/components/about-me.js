import React from 'react';
import text from '../../text/about-me.js';

const AboutMe = () => {
	return (
		<div>
			<h3>About Me</h3>
			{
				text.map((value, index) =>
					<p key={index}>{value}</p>
				)
			}
		</div>
	)
};

export default AboutMe;
