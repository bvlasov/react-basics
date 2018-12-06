import React from 'react';
import List from './List';
import heroes from '../utils/heroes';
import TextTrimmer from './TextTrimmer';

function heroRender(node, element) {
	if (node === 'li') {
		return (
			<li key={element.id}>
				<figure>
					<figcaption>{element.hero}</figcaption>
					<img src={element.avatar} alt={element.hero} />
					<figcaption>{element.name}</figcaption>
					<TextTrimmer text={element.description} />
				</figure>
			</li>
		);
	} else
		return (
			<div key={element.id}>
				<figure>
					<figcaption>{element.hero}</figcaption>
					<img src={element.avatar} alt={element.hero} />
					<figcaption>{element.name}</figcaption>
					<TextTrimmer text={element.description} />
				</figure>
			</div>
		);
}

class Home extends React.Component {
	render() {
		return (
			<div>
				<List options={heroes} node="div" itemRenderer={heroRender} />
			</div>
		);
	}
}

export default Home;
