import styled from 'styled-components';

export const Container = styled.div`
	width: 800px;
	margin: auto;
`;

export const TableContainer = styled.table`
	margin: auto;
	width: 100%;
  border-collapse: collapse;

	th {
		background: #00c5c0;
    color: white;
	}

	th, td {
		border: 1px solid #c7f3ed;
		text-align: left;
		padding: 8px;
	}
	tr:nth-child(even) {
  background-color: #c7f3ed;
}
`;
