import React from 'react';
import aboutMeTxt from '../../text/about-me.txt';
import certTxt from '../../text/certifications.txt';
import {splitAndFilterText} from '../functions';

const AboutMe = () => {
	return (
		<div>
			<h3>About Me</h3>
			{
				splitAndFilterText(aboutMeTxt)
					.map(value => 
						<p key={value}>{value}</p>
					)
			}

			<section>
				<h4>Degrees &amp; Certifications</h4>

				{
					splitAndFilterText(certTxt)
						.map(value => 
							<p key={value}>{value}</p>
						)
				}
				
			</section>
		</div>
	)
};

export default AboutMe;
