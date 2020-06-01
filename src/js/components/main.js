import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from '../routes';

const Main = () => {
	return (
		<Switch>
		{
			routes.map(({path, Component}) => 
				<Route key={path} exact path={path}>
					<div className='component'>
						<Component/>
					</div>
				</Route>
			)
		}
		</Switch>
	)
};

export default Main;
