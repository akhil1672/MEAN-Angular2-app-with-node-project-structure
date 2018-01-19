const mongodb=require('mongodb').MongoClient;
require('dotenv').config();

module.exports=function db(){
    return new Promise((res,rej)=>{
        mongodb.connect(process.env.MONGODB_URI, function (err, database) {
            if (err) {
                console.error(err);
                rej(err);
            }
            else {
                console.log("Database connected");
                res(database);
            }
        });
    })
}

