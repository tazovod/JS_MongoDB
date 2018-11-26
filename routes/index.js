var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var collection = null;

var uri = "mongodb+srv://admin:admin@bibacluster-rtacv.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
    collection = client.db("Biba_base").collection("MongoDB");
    // perform actions on the collection object
    client.close();
});

collection.find({}).toArray(function(err, docs) {
    res.render('index', {title: 'MongoDB', shoppingList: docs});
});
/* GET home page. */

router.get('/add/:id', function(req, res, next) {
    var books = { name: req.param('id') };
    coll.insertOne(books, function (err, result){
        if (err) {
            return res.send('неудача');
        }
        res.send('успех');
    });
});

module.exports = router;
