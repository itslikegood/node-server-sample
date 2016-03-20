var config;
var projectId;

config = module.exports = {
  port: process.env.PORT || 8080,

  // Configure which data tier implementation to utilize
  dataBackend: process.env.BACKEND || 'datastore',

  gcloud: {
    // gccloud specific configuraiton
    projectId: process.env.GCLOUD_PROJECT || 'dailynervedev'
  },

  mongodb: {
    // mongodb configuration
    url: process.env.MONGO_URL || 'mongodb://localhost:27017',
    collection: process.env.MONGO_COLLECTION || 'dailynerve'
  }
};

projectId = config.gcloud.projectId;

if (!projectId || projectId === 'dailynervedev') {
  console.error('process.env.GCLOUD_PROJECT is not set, defaulting to \'' +  projectId + '\'.');
}
