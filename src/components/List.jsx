import React, { Component } from 'react';
import { ListItem } from './ListItem.jsx';
import { LastListItem } from './LastListItem.jsx';


export class List extends Component {
	render() {
		const {
			data = [],
			tag = '',
			showList = this.bind(data)
		} = this.props;
		let i = 1;
		showList(data);
		const dataSorted = data.map((el) => {
			el.flag = i;
			i++;
			if (el.flag == data.length) {
				return(<LastListItem key={el.id} dude={el} />);		
			} else {
				return (<ListItem key={el.id} dude={el} />);
			}
		});
		if (tag == 'ul') {
			return (
				<ul className='list'>
					{dataSorted}
				</ul>
			);
		} else {
			return (
				<div className='list'>
					{dataSorted}
				</div>
			);
		}
	}
}

export default List;
