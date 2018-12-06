import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import options from './utils/heroes';
import List from './components/List.jsx';

const myRenderer = (element, key) => {
	return (
		<li key={key}>
			<h1>{element.hero}</h1>
			<img src={element.avatar} />
			<figcaption style={{ textAlign: 'center' }}>{element.name}</figcaption>
			<p className="item-desc">{element.desc}</p>
		</li>
	);
};

const renderApplication = () => {
	ReactDOM.render(
		// <List options={options} holderNode="ul" renderType={myRenderer} />,
		<List options={options} holderNode="ul" />,
		document.querySelector('#root')
	);
};

renderApplication();

if (module.hot) {
	module.hot.accept('./components/List', () => {
		renderApplication();
	});
}
