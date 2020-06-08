import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from '../routes';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Main = (props) => {
	return (
		<Switch>
			<TransitionGroup>
		{
			routes.map(({path, Component}) => 
				<Route key={path} exact path={path}>
					<CSSTransition
							key={path}
							in={props.location === path}
							timeout={200}
							classNames={'component'}
							unmountOnExit
						>
							<div className='component'>
								<Component/>
							</div>
					</CSSTransition>

				</Route>
			)
		}
			</TransitionGroup>
		</Switch>
	)
};

export default Main;
