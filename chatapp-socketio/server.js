let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	console.log('Client Connected');
	socket.on('chat-message', (data) => {
		const { name, message } = data;
		console.log(`Hello ${name}\nYour ${message}\n`);
	});
});

http.listen(3000, () => {
	console.log('Server Up and running...');
});
