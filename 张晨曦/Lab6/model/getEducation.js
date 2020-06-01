// Using the response reference from controller to pass the result from the model..

function queryEducation(callback) {


    var mongo = require('C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\mongodb');

    var MongoClient = mongo.MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client){
        if (err) throw err;

        var db = client.db('C16434996');

        db.collection('nodejs').find({}).project({'_id': 0}).toArray(function(err, data){
            if (err) throw err;
            callback(data);
        });
    });
};


module.exports.queryEducation = queryEducation;