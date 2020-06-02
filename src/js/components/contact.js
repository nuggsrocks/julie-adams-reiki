import React from 'react';
import text from '../../text/contact.js';

const Contact = () => {
	return (
		<div>
			<h3>Contact</h3>
			{
				text.map((value, index) =>
					<p key={index}>{value}</p>
				)
			}
		</div>
	)
};

export default Contact;
