const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://root:root@localhost:27027/";
const database = "mydb"
const collection = "getdb"

const sendGetRequest = async () => {
    try {
        const resp = await axios.get('https://raw.githubusercontent.com/delta-protect/development-test/ecf81af87927f5828d4356ce87c49bfcc305a201/movies.json');
        const { data } = resp;

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(database);
            // var myobj = [
            //   { name: 'John', address: 'Highway 71'},
            //   { name: 'Peter', address: 'Lowstreet 4'},
            //   { name: 'Amy', address: 'Apple st 652'},
            //   { name: 'Hannah', address: 'Mountain 21'},
            //   { name: 'Michael', address: 'Valley 345'},
            //   { name: 'Sandy', address: 'Ocean blvd 2'},
            //   { name: 'Betty', address: 'Green Grass 1'},
            //   { name: 'Richard', address: 'Sky st 331'},
            //   { name: 'Susan', address: 'One way 98'},
            //   { name: 'Vicky', address: 'Yellow Garden 2'},
            //   { name: 'Ben', address: 'Park Lane 38'},
            //   { name: 'William', address: 'Central st 954'},
            //   { name: 'Chuck', address: 'Main Road 989'},
            //   { name: 'Viola', address: 'Sideway 1633'}
            // ];
            dbo.collection(collection).insertMany(data, function(err, res) {
              if (err) throw err;
              console.log("Number of documents inserted: " + res.insertedCount);
              db.close();
            });
          });  

    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendGetRequest();