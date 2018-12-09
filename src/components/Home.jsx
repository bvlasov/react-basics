import React from 'react';
import List from './List';
import ListHeroes from './ListHeroes';
import heroes from '../utils/heroes';
import order from '../images/order.png';

const type = 'ul';

class Home extends React.Component {
	trimDown = (str, id) => {
		if (str.length > 20) {
			return (
				<div>
					<input type="checkbox" className="read-more-state" id={id} />
					<p className="read-more-wrap">
						{str.slice(0, 21)}
						<span className="read-more-spread">...</span>
						<span className="read-more-target">{str.slice(21)}</span>
					</p>
					<label htmlFor={id} className="read-more-trigger">
						<img src={order} alt="whow more" />
					</label>
				</div>
			);
		}
		return <p>{str}</p>;
	};

	renderItemLi = element => {
		return (
			<li className="list-item" key={element.id}>
				<div>{element.hero}</div>
				<img src={element.avatar} />
				<div>{element.name}</div>
				{this.trimDown(element.disc, element.id)}
			</li>
		);
	};

	render() {
		return (
			<div>
				<ListHeroes
					options={heroes}
					listType={type}
					itemRender={this.renderItemLi}
				/>
			</div>
		);
	}
}
export default Home;
