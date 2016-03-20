var gcloud = require('gcloud');

module.exports = function(config) {

  var kind = 'Contest';
  var ds   = gcloud.datastore.dataset(config.gcloud);

  return {
    create: create,
    read: read,
    update: update,
    delete: _delete,
    list: list
  };

  function create() {}
  function read() {}
  function update() {}
  function _delete() {}

  function list(limit, token, cb) {
    var q = ds.createQuery([ kind ])
      .limit(limit || 10)
      // .order('Title')
      .start(token);

    ds.runQuery(q, function(err, entities, nextQuery) {
      var hasMore;
      if (err) {
        return cb(err);
      }
      hasMore = entities.length === limit ? nextQuery.startVal : false;
      cb(null, entities.map(fromDatastore), hasMore);
    });
  }

  // datastore normalization util
  function fromDatastore(obj) {
    obj.data.id = obj.key.id;
    return obj.data;
  }
};
