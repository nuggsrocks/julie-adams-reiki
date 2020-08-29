import React from 'react';

const Contact = () => {
	return (
		<div>
			<h2>Contact</h2>

			<form>
				<section>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' id='name'/>
				</section>

				<section>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' id='email'/>
				</section>

				<section>
					<label htmlFor='phone'>Phone</label>
					<input type='tel' name='phone' id='phone'/>
				</section>

				<section>
					<label htmlFor='subject'>Subject</label>
					<input type='text' name='subject' id='subject'/>
				</section>

				<section id='textarea'>
					<label htmlFor='comment'>Comment</label>
					<textarea id='comment'></textarea>
				</section>
			</form>
		</div>
	);
};

export default Contact;