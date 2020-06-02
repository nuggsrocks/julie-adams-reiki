import React from 'react';
import text from '../../text/reiki-session.js';

const ReikiSession = () => {
	return (
		<div>
			<h3>Reiki Session</h3>
			{
				text.map((value, index) =>
					<p key={index}>{value}</p>
				)
			}
		</div>
	)
};

export default ReikiSession;
