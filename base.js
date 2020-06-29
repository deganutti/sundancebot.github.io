var mysql = require("mysql");

var conn = mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        password: "senha",
        database: ""
    }
);
conn.connect(function (err) {
    if (err) throw err;
    console.log("Base de dados conectado!");
});