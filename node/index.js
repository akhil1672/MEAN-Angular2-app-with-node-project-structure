const express = require('express');
require('dotenv').config();
const path = require('path');
const body = require('body-parser');
const mongodb=require('mongodb').MongoClient;
const app = express();
const routes=require('./node-src/routes/routes');
const index=require('./node-src/routes/startpage');

app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/',index);
app.use('/api',routes);

app.listen(process.env.PORT || 3000, () => {
    console.log("App listening at 3000");
})
