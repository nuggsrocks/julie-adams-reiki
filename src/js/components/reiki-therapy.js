import React from 'react';
import text from '../../text/reiki-therapy';

const ReikiTherapy = () => {
	return (
		<div>
			<h3>Reiki Therapy</h3>
			{
				text.map((value, index) =>
					<p key={index}>{value}</p>
				)
			}
		</div>
	)
};

export default ReikiTherapy;
