import React from 'react';
import aboutMeTxt from '../../text/about-me.txt';
import certTxt from '../../text/certifications.txt';
import {splitAndFilterText} from '../functions';

const AboutMe = () => {
	return (
		<div>
			<section>
				<h3>About Me</h3>
				{
					splitAndFilterText(aboutMeTxt)
						.map(value => 
							<p key={value}>{value}</p>
						)
				}
			</section>

			<section>
				<h3>Degrees &amp; Certifications</h3>

				<table>
				{
					splitAndFilterText(certTxt)
						.map(value => 
							<tr key={value}>
								<td>{value}</td>
							</tr>
						)
				}
				</table>
				
			</section>
		</div>
	)
};

export default AboutMe;
