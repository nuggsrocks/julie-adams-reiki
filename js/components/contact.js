import React from 'react';

const Contact = () => {
	return (
		<div>
			<h2>Contact</h2>

			<form>
				<label for='name'>Name</label>
				<input type='text' name='name' id='name'/>
			</form>
		</div>
	);
};

export default Contact;