const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const db = require('./courseModel');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const courseRoute = require('./courseRoute');

const port = 3000;

app.use('/api/course', courseRoute);

app.get('/*', (req, res) => {
	if (req.url == '/') {
		res.sendFile(__dirname + '/index.html');
	} else if (req.url == '/addcourse') {
		res.sendFile(__dirname + '/addcourse.html');
	} else if (req.url == '/deletecourse') {
		res.sendFile(__dirname + '/deletecourse.html');
	} else if (req.url == '/updatecourse') {
		res.sendFile(__dirname + '/updatecourse.html');
	} else if (req.url == '/fetchcourse') {
		res.sendFile(__dirname + '/fetchcourse.html');
	} else {
		res.send('Page Not Found 404');
	}
});

app.listen(port, () => {
	console.log(`Server up and running ${port}`);
});
