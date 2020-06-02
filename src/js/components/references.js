import React from 'react';
import text from '../../text/references.js';

const References = () => {
	return (
		<div>
			<h3>References</h3>
			{
				text.map((value, index) =>
					<p key={index}>{value}</p>
				)
			}
		</div>
	)
};

export default References;
