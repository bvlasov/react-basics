import React from 'react';
import List from './List';
import ListHeroes from './ListHeroes';
import heroes from '../utils/heroes';

const trimDown = str => {
	if (str.length > 20) {
		return str.slice(0, 20) + '...';
	}
	return str;
};

const renderItemLi = element => {
	let disc = element.disc;
	if (disc.length > 20) {
		disc = trimDown(element.disc);
		return (
			<li key={element.id}>
				<div>{element.hero}</div>
				<img src={element.avatar} />
				<div>{element.name}</div>
				<p>
					{disc}
					<a href="#">show all</a>
				</p>
			</li>
		);
	}

	return (
		<li key={element.id}>
			<div>{element.hero}</div>
			<img src={element.avatar} />
			<div>{element.name}</div>
			<p>{disc}</p>
		</li>
	);
};
const type = 'ul';

class Home extends React.Component {
	render() {
		return (
			<div>
				<ListHeroes
					options={heroes}
					listType={type}
					itemRender={renderItemLi}
				/>
			</div>
		);
	}
}
export default Home;
