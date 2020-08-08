import React from 'react';
import servicesTxt from '../../text/services.txt';
import {splitAndFilterText} from '../functions';

const Contact = () => {
	return (
		<div>
			<h3>Services</h3>
			{
				splitAndFilterText(servicesTxt)
					.map(value => <p key={value}>{value}</p>)
			}

			<h3>Contact</h3>
		</div>
	)
};

export default Contact;
