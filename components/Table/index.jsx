import React from 'react'
import moment from 'moment'
import { Container, TableContainer } from './styles';

const Table = ({className, data}) => (
		<Container className={className}>
			<TableContainer>
				<tbody>
				<tr>
					<th>Date</th>
					<th>Open</th>
					<th>High</th>
					<th>Low</th>
					<th>Close</th>
					<th>Volume</th>
				</tr>
				{data.map(item => (
					<tr>
						<td>{moment(item.date).format("DD-MM-YYYY")}</td>
						<td>{item.open}</td>
						<td>{item.high}</td>
						<td>{item.low}</td>
						<td>{item.close}</td>
						<td>{item.volume}</td>
					</tr>
				))}
				</tbody>
			</TableContainer>
		</Container>
	);

export default Table;