import React from 'react';

export default class List extends React.Component {
	renderItem(element) {
		if (this.props.node === 'ul') {
			return <li key={element.id}>{element.value}</li>;
		} else return <div key={element.id}>{element.value}</div>;
	}

	render() {
		const {
			node = 'div',
			itemRenderer = this.renderItem,
			options = []
		} = this.props;
		const childNode = node === 'ul' ? 'li' : 'div';
		const listItems = options.map(element => itemRenderer(childNode, element));
		if (node === 'ul') return <ul className="list">{listItems}</ul>;
		else return <div className="list">{listItems}</div>;
	}
}
