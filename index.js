const express     = require('express');
const app         = express();
const path        = require('path');
let params_module = require('./params.js');

let port = 3000;

app.get('/', (req, res) => {//callback o requisição e resposta
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/json', (req, res) => {//Json
	res.status(200).json({user: "Isadora", password: 123456});
});

app.get('/reg/ab[0-9]', (req, res) => {//regex
	res.send("REGEX");
});

app.use('/', params_module);//params

app.post('/post/form', (req, res) => {//POST
	res.send("Acessando o POST!");
});

app.get('*', (req, res) => {
	res.send("Link Inválido: 404");
});

app.listen(port, () => {
	console.log(`Escutando na porta ${port}`);
});