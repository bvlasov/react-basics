import React from 'react';

export default class BtnDesc extends React.Component {

	state = {
		desc: this.props.desc.length > 15 ? this.props.desc.slice(0, 15) + '...' : this.props.desc 
	};
	render() {
		return (
			<div>
				{this.state.desc}
				{this.props.desc.length > 15 ? (
					<button onClick = {this.isOpen}>open</button>
				) : null}
			</div>
		);
	}

	isOpen = () => {
		this.setState({desc: this.props.desc});
	};
}