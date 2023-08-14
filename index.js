const express = require('express');
const app = express();

const path = __dirname + '/views/';
app.use(express.static(path));

app.get('/', function (req, res) {
	res.sendFile(path + 'index.html');
});

app.listen(process.env.PORT || 4000, () => {
	console.log('Listening on port ' + process.env.PORT);
});
