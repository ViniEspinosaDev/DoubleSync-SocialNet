const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'mysql669.umbler.com',
  port     : 41890,
  user     : 'admin_doublesync',
  password : 'admin12345',
  database : 'ds_database'
});


connection.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou!');
  createTable(connection);
  addRows(connection);
})


function createTable(conn){

      const sql = "CREATE TABLE IF NOT EXISTS Usuarios ("+
                  "ID int NOT NULL AUTO_INCREMENT,"+
                  "Nome varchar(150) NOT NULL,"+
				  "Email varchar(100) NOT NULL,"+
				  "Senha varchar(50) NOT NULL,"+
                  "PRIMARY KEY (ID)"+
                  ");";
      
      conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log('criou a tabela!');
      });
}

function addRows(conn){
	const sql = "INSERT INTO Usuarios(Nome,Email,Senha) VALUES ?";
	const values = [
		  ['Samuel', 'samuca.youtube@live.com', 'samuel123'],
		  ['Vinicius', 'vinicius.youtube@live.com','vinicius123']
		];
	conn.query(sql, [values], function (error, results, fields){
			if(error) return console.log(error);
			console.log('adicionou registros!');
			conn.end();//fecha a conexão
		});
  }
  
