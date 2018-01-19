let express= require('express');
let app=express.Router();
let mongodb=require('mongodb').MongoClient;
let database=require('../config/db');
const studentsCol="students";
let db;
let student = require('../services/students')

// async function connectdb(){
//     db=await database();
//     // console.log("db:",db);
// }

// connectdb();

app.get('/students',student.getStudents); 

app.post('/students',student.postStudent);

app.get('/students/:name',student.getStudent);

app.delete('/students/:name',student.deleteStudent);

app.put('/students/:name',student.updatestudent);

module.exports=app;
