'use strict';
const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');

app.use(compression());
app.use(express.static(path.join(__dirname, 'dist'), { maxAge: '30d' }));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.all('*', (req, res) => {
	res.redirect('/');
});

const server = app.listen(process.env.PORT || 3000, () => {
	console.log('Server running on ' + server.address().port);
});
