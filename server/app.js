var express    = require('express');
var bodyParser = require('body-parser');
var gcloud     = require('gcloud')({ projectId: 'dailynervedev' });

var app = express();
var gcs = gcloud.storage();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/info', function(req, res) {
  res.json({
    message: 'If you see this message, you know where I live.  Stop it, it\'s creepy.'
  });
});

app.listen(3000, function() {
  console.log('app listening on 3000.');
});
