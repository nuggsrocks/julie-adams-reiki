import React from 'react';
import txt from '../../text/reiki-session.txt';
import {splitAndFilterText} from '../functions';

const ReikiSession = () => {
	return (
		<div>
			<h3>Reiki Session</h3>
			{
				splitAndFilterText(txt)
					.map(value => <p key={value}>{value}</p>)
			}
		</div>
	)
};

export default ReikiSession;
