const fs = require('fs');

let readData = () => {
	let data = fs.readFileSync('logs.json');
	let jsonObj = JSON.parse(data);
	return jsonObj;
};

let storeData = (personDetails) => {
	let dataObj = readData();
	dataObj.push(personDetails);
	let jsonData = JSON.stringify(dataObj);
	fs.writeFileSync('logs.json', jsonData);
};

module.exports = { storeData };
