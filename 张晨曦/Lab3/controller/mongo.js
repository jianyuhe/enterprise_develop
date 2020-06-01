var mongo = require('C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\mongodb');

var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

const client = new MongoClient(url, {useUnifiedTopology: true});

client.connect(function(error) {
    if (error) throw error;
    db = client.db('C16434996');
    collection = db.collection('c16434996_teams');
    collection.find({}).toArray(function(err, docs) {
        console.log(docs);
        // callback(docs);
    });
});