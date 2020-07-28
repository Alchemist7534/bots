var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', function (req, res) {
res.type('text/plain');
res.send('Congratularions, You sent a GET request');
console.log('Recieved a GET request and sent a response');
});
app.listen(app.get('port'), function () {
console.log('App now listening on port', app.get('port'));
});