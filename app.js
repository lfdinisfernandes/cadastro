const express = require("express");

const app = express();

//conexão com obando de dados MySQL
const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost:3306',
    user     : 'root',
    password : 'Mustang8v081216',
    database : 'calke'
  });

 

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html")
    
});
app.get("/contato", function(req, res){
    res.send("contato")
});

//localhost:8080/
app.listen(8080);