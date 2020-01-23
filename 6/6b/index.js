const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const {dummyData, dummyCashier, dummyMenu} = require('./dummyData');

const app = express();

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
    dataCashier: dummyCashier,
    dataMenu: dummyMenu,
  });
});


//server listening
app.listen(1000, () => {
    console.log('Server is running at port 1000');
});
