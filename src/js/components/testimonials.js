import React from 'react';
import text from '../../text/testimonials';

const Testimonials = () => {
	return (
		<div>
			<h3>Testimonials</h3>
			{
				text.map((value, index) =>
					<p key={index}>{value}</p>
				)
			}
		</div>
	)
};

export default Testimonials;
