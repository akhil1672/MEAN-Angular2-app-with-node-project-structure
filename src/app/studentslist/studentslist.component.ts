import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { student } from '../student';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {
  
  selectedStudent: student;
  public students:any;
  constructor(private studentservice:StudentService) { }

  selectStudent(student: student) {
    this.selectedStudent = student;
  }

  ngOnInit() {
    this.studentservice.getstudents().subscribe(studentsresponse=>{
      this.students=studentsresponse;
      console.log(studentsresponse);
    })
  }

}
