import React from 'react';
import text from '../../text/services';

const Services = () => {
	return (
		<div>
			<h3>Services</h3>
			{
				text.map((value, index) => 
					<p key={index}>{value}</p>
				)
			}
		</div>
	)
};

export default Services;
