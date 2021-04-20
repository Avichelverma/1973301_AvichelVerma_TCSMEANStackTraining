const fs = require('fs');
let mongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost:27017';

let data = fs.readFileSync('call_data.json');
let dataArr = JSON.parse(data);

const options = { ordered: true };

mongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
	let db = client.db('meanstack');
	db.collection('callrecords').insertMany(dataArr, options, (error, result) => {
		if (!error) {
			console.log(result.insertedCount);
		} else {
			console.log(error.message);
		}
		client.close();
	});
});
// console.log(dataArr);
