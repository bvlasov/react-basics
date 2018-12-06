import React from 'react';

export default class ListHeroes extends React.Component {
	
	renderItem(element) {
		return (
			<div key={element.id}>
				<div>{element.hero}</div>
				<img src={element.avatar} />
				<div>{element.name}</div>
			</div>
		);
	}

	render() {
		const { options = [], listType = 'div', itemRender = this.renderItemDiv } = this.props;
		const listItems = this.props.options.map(itemRender);
		if (this.props.listType === 'ul') {
			return <ul>{listItems}</ul>;
		} else if (this.props.listType === 'div') {
			return <div>{listItems}</div>;
		}	
	}
}
