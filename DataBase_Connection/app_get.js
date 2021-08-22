var express = require('express');
var mysql = require('mysql');
var app = express();
var cors = require('cors')

// var connetion = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '12345600',
//     database: 'inter'
// })

//to limit the number of connections of user
var connection = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: '12345600',
    database: 'inter'
})

//if you created pool you add this code in app.get
// connetion.connect(function (error) {
//     if (!!error) {
//         console.log(404);
//     } else {
//         console.log(`200 ok connceted`);
//     }
// })

app.get('/', function (req, resp) {
    //my sql data fetching

    // connetion.query('SELECT * FROM movies', function (error, rows) {
    //     if (!!error) {
    //         console.log("query error")
    //     } else {
    //         console.log("successful query\n");
    //         console.log(rows[0].)
    //     }
    // })

    //if we created pool then use this

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
app.post('/', function (req, resp) {
    connection.getConnection(function (error, tempCont) {
        if (!!error) {
            tempCont.release()
            console.log(`404 POST`)
        } else {
            console.log("Connected POST!");
            tempCont.query('INSERT INTO movies', movieData, function (error, rows) {
                if (!!error) {
                    console.log("POST Query Error")
                } else {
                    console.log("POST successful query \n");
                    console.log(rows[0])
                }
            })
        }
    })
})
app.listen(3002)