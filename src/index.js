import logMessage from './js/logger';
import './css/style.css';

logMessage('Welcome to webpack!');

if(typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef
}