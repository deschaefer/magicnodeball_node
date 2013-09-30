express = require('express');
var app = express();

app.get('/index.html', function(req, res){

  var pos = Math.floor((Math.random()*10)+1);

  var body = 'try the /ball url.';
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

    // var body = 'magicnodeball : { response : \'' + choices[pos-1] + '\'}';

	var rval = {};
	rval.magicnodeball = {};
	rval.magicnodeball.reponse = choices[pos-1];
	

    // res.setHeader('Content-Type', 'application/json');
    // res.setHeader('Content-Length', body.length);
    // res.end(body);

	res.json(rval);

});

app.listen(process.env.PORT || 2000);
console.log('Listening on port ' + process.env.PORT || 2000);

