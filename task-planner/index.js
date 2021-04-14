const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

let readData = () => {
	let data = fs.readFileSync('tasks.json');
	let jsonObj = JSON.parse(data);
	return jsonObj;
};

let storeData = (taskDetails) => {
	let dataObj = readData();
	dataObj.push(taskDetails);
	let jsonData = JSON.stringify(dataObj);
	fs.writeFileSync('tasks.json', jsonData);
};

let deleteTask = (taskId) => {
	let dataObj = readData();
	let result = dataObj.filter((task) => task.taskId !== taskId);
	let jsonData = JSON.stringify(result);
	fs.writeFileSync('tasks.json', jsonData);
};

app.get('/tasks', (req, res) => {
	let data = readData();
	res.status(200).json(data);
});

app.post('/addTask', (req, res) => {
	storeData(req.body);
	res.redirect('/');
});

app.post('/deleteTask', (req, res) => {
	deleteTask(req.body.taskId);
	res.redirect('/');
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
	console.log(`Server running on ${port}`);
});
