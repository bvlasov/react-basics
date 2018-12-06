import React from 'react';

export default class List extends React.Component {
	render() {
		const { parentNode = 'ul', options = [], renderItem } = this.props;
		const childNode = parentNode === 'ul' ? 'li' : 'div';
		const listItems = options.map(item => {
			return renderItem(childNode, item);
		});

		return parentNode.toLowerCase() === 'ul' ? <ul>{listItems}</ul> : <div>{listItems}</div>;
	}
}
