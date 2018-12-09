import React, { Component } from 'react';
import CutText from './CutText.jsx';

export class ListItem extends Component {

	render() {
		return (
			<ul>
				<li>{this.props.dude.hero}</li>
				<li><img src={this.props.dude.avatar}></img></li>
				<li>{this.props.dude.name}</li>
				<CutText text={this.props.dude.description} />
				<li>{this.props.handleClick}</li>
			</ul>
		);
	}
}

export default ListItem;
