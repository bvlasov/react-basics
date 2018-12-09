import React from 'react';
import {List} from './List.jsx';
import heroes from '../utils/heroes.js';

const Home = () => (
	<div>
		<List data={heroes} tag={'ul'} showList={reverseList}/>
	</div>
);
function reverseList (props) {
	return props.reverse();
}
export default Home;