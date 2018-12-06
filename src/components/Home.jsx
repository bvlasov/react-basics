import React from 'react';
import List from './List';
import TextTrimmer from './TextTrimmer';
import heroes from '../utils/heroes';

function renderItem(node, item) {
	if (node === 'li') {
		return (
			<li key={item.id}>
				<div>Hero - {item.hero}</div>
				<img src={item.avatar} />
				<div>Name - {item.name}</div>
				<TextTrimmer text={item.description} />
			</li>
		);
	} else {
		return (
			<div key={item.id}>
				<div>Hero - {item.hero}</div>
				<img src={item.avatar} />
				<div>Name - {item.name}</div>
				<TextTrimmer text={item.description} />
			</div>
		);
	}
}

class Home extends React.Component {
	render() {
		return (
			<div>
				<List options={heroes} parentNode={'ul'} renderItem={renderItem} />
			</div>
		);
	}
}

export default Home;
