
var express = require('express');
var bodyParser = require('body-parser');
var dateFormat = require('dateformat');

var app = express();

var port = 3000;

app.listen(port, function(){
  console.log('now listening on ' + port);
})

app.use(express.static('assets'))
app.use(bodyParser.json())

var messages = [{
  message : "hello world",
}];

app.get('/messages', function(req, res, next){
  res.status(200).json({
    messages : messages
  });
})

app.post('/messages', function(req, res, next){
  var now = dateFormat(new Date(), "h:MM TT");

  messages.push({message: req.body.message, time: now});
  res.status(200).json({
    messages : messages
  });
})
