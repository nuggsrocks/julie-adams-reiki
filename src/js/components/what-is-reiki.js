import React from 'react';
import txt from '../../text/what-is-reiki.txt';
import {splitAndFilterText} from '../functions';

const WhatIsReiki = () => {
	return (
		<div>
			<h3>What Is Reiki?</h3>
			{
				splitAndFilterText(txt)
					.map(value => <p key={value}>{value}</p>)
			}
		</div>
	)
};

export default WhatIsReiki;
