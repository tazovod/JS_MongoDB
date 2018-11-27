var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb+srv://admin:admin@bibacluster-rtacv.mongodb.net/test?retryWrites=true';
var collection = null;

/*MongoClient.connect(uri, function(err, client) {
    collection = client.db("Biba_base").collection("MongoDB");
});*/
/* GET home page. */

router.get('/', function(req, res, next) {
    MongoClient.connect(uri, function(err, client) {
        collection = client.db("Biba_base").collection("MongoDB");
    });
    var books = { name: req.param('id') };
    coll.insertOne(books, function (err, result){
        if (err) {
            return res.send('неудача');
        }
        res.render('index');
        res.send('успех');
    });
    res.render()
});

module.exports = router;
