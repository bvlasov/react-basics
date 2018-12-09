import React, { Component } from 'react';

export class CutText extends Component {
	state = {
		text:
			this.props.text.length > 20 ? this.props.text.slice(0, 20) : this.props.text
	};
	showFullText = () => {
		this.setState({ text: this.props.text });
	};
	render() {
		return (
			<div>
				{this.state.text}
				{this.props.text.length > 20 ? (
					<button onClick={this.showFullText}>Show Full Text</button>
				) : null}
			</div>
		);
	}
	
}

export default CutText;
