import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import {NgForm} from '@angular/forms';
import { Student } from './student';
import { Router } from '@angular/router';

@Component({  
  moduleId:module.id,
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  private students;
  private name;
  private college;
  private _id;
  constructor(private student:StudentService,private router:Router) { }

  addstudent(newStudent){
    let students=this.students;
    // let newStudent = {
    //   name:this.name,
    //   college:this.college,
    //   _id:''
    // }
    console.log(newStudent);
    this.student.addstudent(newStudent).subscribe((student)=>{
      console.log(newStudent);
      this.router.navigate(['/students']);
    })
  }

  ngOnInit() {
    this.student.getstudents().subscribe(students=>{
      this.students=students;
      console.log(students);
    })
  }

}
