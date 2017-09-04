const express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send("Hello World");
});

app.listen(4000, function () {
    console.log('App listening on the port 4000');
});