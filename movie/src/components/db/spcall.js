// // let mysql = require("mysql");
// // let config = require("./db.config.js");

// // let connection = mysql.createConnection(config);

// // export const Asycnway = ({
// //     idmovie,
// //     movie_name,
// //     movie_desc,
// //     dir,
// //     wr,
// //     release_date
// // }) => {
// //     let sql = `CALL add_movies(?,(${idmovie}, ${movie_name}, ${movie_desc}, ${dir}, ${wr}, ${release_date}))`;

// //     connection.query(sql, true, (error, results, fields) => {
// //         if (error) {
// //             return console.error(error.message);
// //         }
// //     });

// //     connection.end();
// // }
// const express = require('express');
// const bodyParser = require('body-parser');
// var connection = require('express-myconnection');
// var mysql = require('mysql');

// const app = express();
// app.use(bodyParser.json());

// app.use(

//     connection(mysql, {

//         host: 'localhost',
//         user: 'root',
//         password: '12345600',
//         port: 3306,
//         database: 'inter'

//     }, 'pool')); //or single

// app.post('/add_movie', (req, res) => {

//     let {
//         idmovie,
//         movie_name,
//         movie_desc,
//         dir,
//         wr,
//         release_date
//     } = req.body;


//     if (!idmovie) return res.status(400).json('Movie ID cant be blank');
//     if (!movie_name) return res.status(400).json('Movie Name cant be blank');

//     var data = {
//         idmovie: idmovie,
//         movie_name: movie_name,
//         movie_desc: movie_desc,
//         dir: dir,
//         wr: wr,
//         release_date: release_date
//     };


//     var query = connection.query("INSERT INTO movies set ? ", data,
//         function (err, rows) {

//             if (err) {
//                 //If error
//                 res.status(400).json('Sorry!!Unable To Add');
//                 console.log("Error inserting : %s ", err);
//             } else
//                 //If success
//                 res.status(200).json('movie Added Successfully!!')

//         });


// });


// app.listen(3000, () => {
//     console.log(`app is running on port 3000`);
// });