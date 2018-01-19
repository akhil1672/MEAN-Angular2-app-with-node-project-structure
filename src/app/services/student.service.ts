import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { student } from '../student';
const url = environment.url;
let Students;
@Injectable()
export class StudentService {
  constructor(private http:HttpClient) { }

  getstudents(){
    //const url = "/api/students";
    let students=this.http.get<student[]>(url);
    Students=students;
    return students;
  }

  getstudent(name){
    return this.http.get<student>(url+'/'+name);
  }

  addstudent(newstudent){
    const url = "/api/students";
    let headers=new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log("service"+JSON.stringify(newstudent));
    //Students.push(newstudent);
    return this.http.post<student>(url,newstudent,{headers:headers});
  }

  deletestudent(studentname){
    //const url = "/api/students";
    return this.http.delete<student>(url+'/'+studentname);
  }

  updatestudent(updstudent){
    //const url = "/api/students";
    return this.http.put<student>(url+'/'+updstudent.name,updstudent);
  }

}
