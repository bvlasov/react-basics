import React, { Component } from 'react';

class Item extends Component {
	constructor(params) {
		super();
		this.state = {
			text:
				this.props.options.desc.length > 50
					? this.props.options.desc.slice(0, 50)
					: this.props.options.desc,
		};
	}
	defaultRenderer(element, key) {
		const textTrimmer = text => {
			if (text.length > 50) {
				return (
					<div>
						<p className="itemDesc">{this.state.text}</p>
						<button>Show</button>
					</div>
				);
			} else {
				return (
					<div>
						<p className="itemDesc">{this.state.text}</p>
					</div>
				);
			}
		};
		if (element === 'div') {
			return (
				<div className="item">
					<h1>{element.hero}</h1>
					<img src={element.avatar} />
					<figcaption style={{ textAlign: 'center' }}>
						{element.name}
					</figcaption>
					{textTrimmer(this.state.text)}
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
					{textTrimmer(this.state.text)}
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
