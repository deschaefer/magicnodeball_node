express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){

  var pos = Math.floor((Math.random()*10)+1);

  var body = 'Hello World : '+pos;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);

});

var choices = [
    'No',
    'Yes',
    'Ask me later',
    'Better not',
    'Definitely Not!',
    'Do not hesitate',
    'Green',
    'Red',
    'Vote Yes',
    'Vote No'
]

app.get('/ball', function(req, res){

    var pos = Math.floor((Math.random()*10)+1);

    var body = 'magicnodeball : { response : \'' + choices[pos-1] + '\'}';
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Length', body.length);
    res.end(body);

});

app.listen(process.env.PORT || 80);
console.log('Listening on port ' + process.env.PORT || 80);

