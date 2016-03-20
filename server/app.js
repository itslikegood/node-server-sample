var bodyParser = require('body-parser');
var config     = require('./config');
var express    = require('express');
var pkgJson    = require('../package.json');

var app = express();
var env = app.get('env');
var server;

var models = {
  contest: require('./contest/contest.model')(config)
};

if (env === 'development') {
  app.set('json spaces', 2);
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/info', function(req, res) {
  res.json({
    version: pkgJson.version,
    dataBackend: config.dataBackend
  });
});

app.use('/api/contest', require('./contest/contest.routes')(models.contest));

app.use(function(req, res, next) {
  next();
});

app.use(function(req, res) {
  res.status(404).json({
    message: 'Resource ' + req.path + ' not found.'
  });
})

server = app.listen(process.env.PORT || 8080, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('app listening at http://%s:%s', host, port);
});

module.exports = app;
