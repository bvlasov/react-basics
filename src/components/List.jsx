import React, { Component } from 'react';

import Item from './Item';

export default class List extends Component {
	
	render() {
		const {
			options = [],
			holderNode = 'div',
			renderType = this.defaultRenderer,
		} = this.props;

		let list = options.map((element, idx) => (
			<Item options={element} key={idx} renderTemplate={renderType} />
		));

		if (holderNode === 'div') {
			return <div className="list-container">{list}</div>;
		} else {
			return <ul className="list">{list}</ul>;
		}
	}
}
