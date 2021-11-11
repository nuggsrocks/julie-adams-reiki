import React from 'react';

const Contact = () => {
	return (
		<div>
			<h2>Contact</h2>
			<form>
				<section>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' id='name' pattern='([A-z]|\s){1,24}'/>
				</section>

				<section>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' id='email' pattern='[A-z]{1,30}@[A-z]{1,20}(.com|.net|.org|.edu|.io)'/>
				</section>

				<section>
					<label htmlFor='phone'>Phone</label>
					<input type='tel' name='phone' id='phone' pattern='1?-?\s?\(?[0-9]{3}\)?\s?-?[0-9]{3}-?[0-9]{4}'/>
				</section>

				<section>
					<label htmlFor='subject'>Subject</label>
					<input type='text' name='subject' id='subject'/>
				</section>

				<section id='textarea'>
					<label htmlFor='comment'>Comment</label>
					<textarea id='comment'/>
				</section>

				<section>
					<input type='submit' value='Submit' id='submit'/>
				</section>
			</form>
		</div>
		);
};

export default Contact;
