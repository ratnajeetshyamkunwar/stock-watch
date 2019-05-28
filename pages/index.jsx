import React, { Component } from 'react'

import Chart from '../components/Chart';
import {Container, H2} from './styles';
import { getData } from '../components/Chart/utils';

class HistoricalPage extends Component {
	state = {
		data: null
	}

	componentDidMount() {
		getData().then(data => {
			this.setState({ data });
		});
	}
	

	render(){
		return (
		<Container>
			<H2>Historical Data</H2>
			{this.state.data ? <Chart data={this.state.data} /> : <div>Loading...</div>}
		</Container>)
	}
}

export default HistoricalPage;