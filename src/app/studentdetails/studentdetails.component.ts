import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { student } from '../student';
import { StudentslistComponent } from '../studentslist/studentslist.component';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  
  student:student;
  

  constructor(private studentservice:StudentService,private route:Router,private aroute:ActivatedRoute) { }

  update(updstudent:NgForm){
    this.studentservice.updatestudent(updstudent).subscribe(()=>{
      console.log("Updated student with name "+updstudent.name);
    })
    this.route.navigate(['/students']);
  }

  delete(name){
    this.studentservice.deletestudent(name).subscribe((student)=>{
      console.log("Deleted student details with name "+name);
    })
    this.route.navigate(['/students']);
  }

  ngOnInit() {
    this.studentservice.getstudent(this.aroute.snapshot.params['name']).subscribe((student)=>{
      this.student=student;
    })
  }
}
