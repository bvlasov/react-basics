import React, { Component } from 'react';
import TextTrimmer from '../TextTrimmer';
class Item extends Component {

	defaultRenderer(element, key) {
		if (element === 'div') {
			return (
				<div className="item">
					<h1>{element.hero}</h1>
					<img src={element.avatar} />
					<figcaption style={{ textAlign: 'center' }}>
						{element.name}
					</figcaption>
					<TextTrimmer text={element.desc} />
				</div>
			);
		} else {
			return (
				<li className="item" key={key}>
					<h1>{element.hero}</h1>
					<img src={element.avatar} />
					<figcaption style={{ textAlign: 'center' }}>
						{element.name}
					</figcaption>
					<TextTrimmer text={element.desc} />
				</li>
			);
		}
	}

	render() {
		const { renderTemplate = this.defaultRenderer, options, key } = this.props;
		return renderTemplate(options, key);
	}
}
export default Item;
