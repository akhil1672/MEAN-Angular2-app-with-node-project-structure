let express = require('express');
let app = express.Router();

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: '../src' });
})

module.exports=app;