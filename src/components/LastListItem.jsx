import React, { Component } from 'react';
import CutText from './CutText.jsx';

export class LastListItem extends Component {
	state = { isToggleOn: true };
	handleClick = this.handleClick.bind(this);

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}
	render() {
		return (
			<ul onClick={this.handleClick}>
				{this.state.isToggleOn ? null : 'The name of this hero is ' + (this.props.dude.name)}
				<li>{this.props.dude.hero}</li>
				<li><img src={this.props.dude.avatar}></img></li>
				<li>{this.props.dude.name}</li>
				<CutText text={this.props.dude.description} />
				<li>{this.props.handleClick}</li>
			</ul>
		);
	}
}

export default LastListItem;
