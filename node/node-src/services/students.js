// let express = require('express');

let mongodb = require('mongodb').MongoClient;
let database = require('../config/db');
const studentsCol = "students";
let db;

async function connectdb() {
    db = await database();
    // console.log("db:",db);
}

connectdb();

module.exports = {
    async getStudents(req, res) {
    //console.log(db)
        db.createCollection(studentsCol, { strict: true }, function (err) {
            db.collection(studentsCol).find({}).toArray((err, students) => {
                if (err) {
                    console.error("Error in retrieving students");
                    process.exit(1);
                }
                res.json(students);
            });
        });
    },

    async postStudent(req, res) {
        console.log(req.body);
        let newstudent = req.body;
        console.log(newstudent)
        // if(newstudent._id==''){
        //     newstudent._id=new ID;
        // }
        db.collection(studentsCol).insertOne(newstudent, function (err, student) {
            if (err) {
                console.error("Error in inserting student");
                process.exit(1);
            }
            res.json(student.ops[0]);
        })
    },

    async getStudent(req, res) {
        db.collection(studentsCol).findOne({ name: req.params.name }, function (err, student) {
            if (err) {
                console.error("Error in finding student");
                process.exit(1);
            }
            res.json(student);
        })
    },

    async deleteStudent(req, res) {
        db.collection(studentsCol).deleteOne({ name: req.params.name }, function (err, student) {
            if (err) {
                console.error("Error in deleting student");
                process.exit(1);
            }
            res.json(student);//check 
        })
    },

    async updatestudent(req, res) {
        let updatestudent = req.body;

        db.collection(studentsCol).findOne({ name: req.params.name }, updatestudent, {}, function (err, student) {
            if (err) {
                console.error("Error in updating student");
                process.exit(1);
            }
            res.json(student);//check
        })

    }

}