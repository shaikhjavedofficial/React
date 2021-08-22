var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: '12345600',
    database: 'inter'
})

app.post('/add_movies', function (req, resp) {
    connection.getConnection(function (error, tempCont) {
        if (!!error) {
            tempCont.release()
            console.log(404)
        } else {
            console.log("Connected !");
            tempCont.query('SELECT * FROM movies', function (error, rows) {
                if (!!error) {
                    console.log("Query Error")
                } else {
                    console.log("successful query \n");
                    console.log(rows[0])
                }
            })
        }
    })
})
app.listen(3003)