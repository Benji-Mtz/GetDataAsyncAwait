const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://root:root@localhost:27027/mytest";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});