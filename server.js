const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/src/html/index.html');
});

app.route('/what-is-reiki').get((req, res) => {
	res.sendFile(__dirname + '/src/html/what-is-reiki.html');
});

app.route('/reiki-session').get((req, res) => {
	res.sendFile(__dirname + '/src/html/reiki-session.html');
});

app.route('/contact').get((req, res) => {
	res.sendFile(__dirname + '/src/html/contact.html');
});

app.listen(port, () => console.log('************'));