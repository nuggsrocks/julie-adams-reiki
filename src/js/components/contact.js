import React from 'react';
import servicesTxt from '../../text/services.txt';
import {splitAndFilterText} from '../functions';

const Contact = () => {
	return (
		<div>
			<article>
				<h3>Services</h3>
				{
					splitAndFilterText(servicesTxt)
						.map(value => <p key={value}>{value}</p>)
				}
			</article>

			<article>
				<h3>Contact</h3>
				<form>
					<label htmlFor='name'>Name:</label>
					<input id='name' type='text' name='name'/>
					<label htmlFor='email'>Email:</label>
					<input id='email' type='text' name='email'/>
					<label htmlFor='phone'>Phone Number:</label>
					<input id='phone' type='text' name='phone'/>
					<label htmlFor='comment'>Comments/Questions:</label>
					<textarea id='comment' type='text' name='comment' rows='10' cols='20'></textarea>
				</form>
			</article>
		</div>
	)
};

export default Contact;
