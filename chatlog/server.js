const mongo = require('mongodb').MongoClient;
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

mongo.connect('mongodb://127.0.0.1/', function(err, client) {
	if (err) {
		throw err;
	}
	console.log('MongoDB Connected...');

	io.on('connection', (socket) => {
		let db = client.db('meanstack');
		let chat = db.collection('chats');
		console.log('Client Connected');
		socket.on('chat-message', (data) => {
			const { name, message } = data;
			chat.insertOne({ name, message });
		});
	});
});

http.listen(3000, () => {
	console.log('Server Up and running...');
});
