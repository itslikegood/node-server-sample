var router = require('express').Router();

module.exports = function(model) {

  router.get('/', function(req, res, next) {
    model.list(10, req.query.pageToken, function (err, entities, cursor) {
      if (err) {
        return next(err);
      }
      res.json({
        contests: entities,
        nextPageToken: cursor
      });
    });
  });

  return router;
};
