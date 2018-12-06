import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';

const user = {
	firstName: 'John',
	lastName: 'Doe'
};

const renderApplication = () => {
	ReactDOM.render(
		<Home />,
		document.querySelector('#root')
	);
};

renderApplication(Home);

if (module.hot) {
	module.hot.accept('./components/Home', () => {
		renderApplication();
	});
}


// e.nativeEvent