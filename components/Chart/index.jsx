import React from 'react';
import Chart from './Chart';

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
	render() {
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.props.data} ratio={1} />}
			</TypeChooser>
		)
	}
}

export default ChartComponent;