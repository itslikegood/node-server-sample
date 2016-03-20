'use strict';

var models = {
  datastore: require('./contest.datastore'),
  mongodb: { message: 'Not so fast...' } // not yet implemented
};

module.exports = function (config) {
  return models[config.dataBackend](config);
};
