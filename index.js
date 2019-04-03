var express = require('express')
var app = express()
app.use(express.static('public'));

var array=["Angular", "React", "Node JS"]

app.get('/', function (req, res) {
  res.send('Hello Worldss')
})

app.post('/test', function (req, res) {
  res.send(array);
})

app.listen(3000) 
