import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../routes';

const Menu = () => {
	return (
		<nav id='menu'>
			<h1 className='menu-item title'>
				Julie Adams Reiki
			</h1>
			{
				routes.map(({name, path}) => 
					<Link className='link menu-item' key={name} to={path}>{name}</Link>
				)
			}
		</nav>
	)
}

export default Menu;
