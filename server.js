'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.all('*', (req, res) => {
	res.redirect('/');
});

const server = app.listen(process.env.PORT || 3000, () => {
	console.log('Server running on ' + server.address().port);
});
