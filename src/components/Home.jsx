import React from 'react';
import List from './List';
import heroes from '../utils/heroes';
import BtnDesc from './btnDesc';


const listRenderer = (choose, data) => {
	if (choose === 'div') {
		return (
			<ul key = {data.id} className="newList">
				<li>{data.hero}</li>
				<li>
					<img src={data.avatar} />
				</li>
				<li>{data.name}</li>
				<BtnDesc desc={data.desc} />
			</ul>
		); 
	} else (
		<div key={data.hero}>
			{data.name}
			<div>
				<img src={data.avatar} />
			</div>
			<div>{data.name}</div>
			<div>{data.desc}</div>
			<BtnDesc desc={data.desc} />
		</div>
	);
};



class Home extends React.Component {
	render() {
		return (
			<div>
				<List
					heroes={heroes}
					choose={'div'}
					itemRenderer={listRenderer}
				/>
			</div>
		);
	}
}

export default Home;
