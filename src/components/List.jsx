import React from 'react';


export default class List extends React.Component {

	renderItem(data) {
		if (this.props.choose === 'li') {
			return <li key = {data.id}>{data.value}</li>;
		} else {
			return <div key = {data.id}>{data.value}</div>;
		}
	}
	render() {
		const { heroes = [], choose = 'li',  itemRenderer = this.renderItem } = this.props;
		const letsChoose = choose === 'li' ? 'li' : 'div';
		const typeItems = heroes.map( data => itemRenderer(letsChoose, data));
		if (choose === 'li') {
			return <ul className = "liList">{typeItems}</ul>;
		} else {
			return <div className="divList">{typeItems}</div>;
		}
		
	}
}
