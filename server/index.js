const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + './../'));

app.get('/', (req, res) => res.send('Server Message!'));

app.get('/test', (req, res) => {
	console.log('im success im server');
  res.send('Get request success!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
