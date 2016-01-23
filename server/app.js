var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.get('/info', function(req, res) {
  res.json({
    message: 'If you see this message, you know where I live.  Stop it, it\'s creepy.'
  });
});

app.listen(3000, function() {
  console.log('app listening on 3000.');
});
