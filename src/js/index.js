import '../scss/index.scss';


import React from 'react';
import ReactDOM from 'react-dom';
import aboutMeText from '../text/about-me.txt';

import {splitAndFilterText} from './functions';


const Menu = () => {
	return (
		<nav>
			<h1>Julie Adams Reiki</h1>
			<section>
				<button>About Me</button>
				<button>What Is Reiki</button>
				<button>Reiki Session</button>
				<button>Contact</button>
			</section>
		</nav>
	)
};

class Main extends React.Component {
	render() {
		return (
			<div>
				<Menu/>
				{
					splitAndFilterText(aboutMeText).map((paragraph, index) => {
						return <p key={`paragraph ${index}`}>{paragraph}</p>
					})
				}
			</div>
		);
	}
};



ReactDOM.render(<Main/>, document.querySelector('#root'));
