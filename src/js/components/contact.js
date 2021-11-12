import React from 'react';

const Contact = () => {
	return (
		<div>
			<h2>Contact</h2>
			<form>
				<label htmlFor='name'>
					Name
					<input type='text' name='name' id='name' pattern='([A-z]|\s){1,24}'/>
				</label>

				<label htmlFor='email'>
					Email
					<input type='email' name='email' id='email' pattern='[A-z]{1,30}@[A-z]{1,20}(.com|.net|.org|.edu|.io)'/>
				</label>

				<label htmlFor='phone'>
					Phone
					<input type='tel' name='phone' id='phone' pattern='1?-?\s?\(?[0-9]{3}\)?\s?-?[0-9]{3}-?[0-9]{4}'/>
				</label>

				<label htmlFor='subject'>
					Subject
					<input type='text' name='subject' id='subject'/>
				</label>

				<label htmlFor='comment'>
					Comment
					<textarea id='comment'/>
				</label>

				<input type='submit' value='Submit' id='submit'/>
			</form>
		</div>
		);
};

export default Contact;
