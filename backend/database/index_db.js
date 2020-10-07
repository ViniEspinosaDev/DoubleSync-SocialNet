const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3333; //porta padrão
const mysql = require('mysql');
const cors = require('cors');
const { response } = require('express');
const router = require('express').Router();

//inicia o servidor
app.listen(port);
console.log('API funcionandooo!');


//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use('/', router);



router.get('/', (req, res) => res.json({ message: 'Funcionandoo!' }));


router.get('/usuarios/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM Usuarios' + filter, res);
})

router.post('/usuarios', (req, res) =>{
	const nome = req.body.nome.substring(0,150);
    const email = req.body.email.substring(0,100);
    const senha = req.body.senha.substring(0,50);
	execSQLQuery(`INSERT INTO Usuarios(Nome,Email, Senha) VALUES('${nome}','${email}','${senha}')`, res);
	
	/* return response.json({
		success: true
	}) */
});




function execSQLQuery(sqlQry, res){
	const connection = mysql.createConnection({
		host     : 'mysql669.umbler.com',
		port     : 41890,
		user     : 'admin_doublesync',
		password : 'admin12345',
		database : 'ds_database'
	  });
	connection.query(sqlQry, function(error, results, fields){
		if(error) 
		  res.json(error);
		else
		  res.json(results);
		connection.end();
		console.log('executou!');
	});
  } 