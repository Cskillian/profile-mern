var express = require('express');
var app = express();
var mongo = require('mongodb');
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));
app.use(express.static('build'));
app.set('views', './build');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
