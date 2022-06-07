const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(express.json());
var url = "mongodb+srv://walnut1234:almond1234@cluster0.twixd.mongodb.net/adminapidb";
var database;
app.listen(1, () => {
    MongoClient.connect(url, { useNewUrlParser: true }, (error, result) => {
        if (error) throw error;
        database = result.db('adminapidb');
        console.log("Connection successful");
    });
});
/*app.get('/', (req, res) => {
    res.send("Welcome");
});*/

app.get('/api/questions', (req, res) => {
    database.collection("companyquestions").find({}, { projection: { _id: 0, question: 1 } }).toArray(function (err, result) {
        if (err) throw err;
        res.send(result);

    });
});