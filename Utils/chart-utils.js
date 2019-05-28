

// import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
import moment from 'moment';

export function parseJson(data){
	const newData = data.map(item => {
		const str = item.split(',');
		return ({
			date: parseDate(moment.unix(str[0]/1000).format('YYYY-MM-DD')),
			open: str[1],
			high: str[2],
			low: str[3],
			close: str[4],
			volume: str[5]
		});
	});
	newData.sort(function(a, b){
    var keyA = a.date, keyB = b.date;
    // Compare the 2 dates
		if(keyA < keyB) return -1;
		if(keyA > keyB) return 1;
		return 0;
	});
	return newData;
}

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
	const promiseMSFT = fetch("http://kaboom.rksv.net/api/historical?interval=1'")
		.then(response => response.json())
		.then(data => parseJson(data))
	console.log(promiseMSFT)
	return promiseMSFT;
}
