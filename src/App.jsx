import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import { userInfo } from 'os';

const user = {
	firstName: 'John',
	lastName: 'Doe'
};

const renderApplication = () => {
	ReactDOM.render(<Home dog={user} />, document.querySelector('#root'));
};

renderApplication(Home);

if (module.hot) {
	module.hot.accept('./components/Home', () => {
		renderApplication();
	});
}
