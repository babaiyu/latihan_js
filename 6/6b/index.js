const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const dummyData = require('./dummyData');

const app = express();

// Konfigurasi ke Database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'warunkqu',
});

// Koneksi ke Database
conn.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Set View File
app.set('views', path.join(__dirname, 'views'));

// Set View Engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Folder Public
app.use('/public', express.static(__dirname + '/public'));

// Set Route
app.get('/', (req, res) => {
  res.render('product_view', {
    data: dummyData,
  });
    // let sql = "SELECT * FROM product";
    // let query = conn.query(sql, (err, results) => {
    //     if (err) throw err;
    //     res.render('product_view', {
    //         results: results
    //     });
    // });
});


//server listening
app.listen(1000, () => {
    console.log('Server is running at port 1000');
});
