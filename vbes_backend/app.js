var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const Users = require('./routes/users');
const Email = require('./routes/email');

app.use('/users', Users);
app.use('/email', Email);

app.listen(port, function() {
  console.log('Server is running on port: ' + port);
});
