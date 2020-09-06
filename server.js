const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/*', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, '192.168.1.11', () => console.log('************'));