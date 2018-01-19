import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { StudentslistComponent } from './studentslist/studentslist.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentService } from './services/student.service';
import { AddstudentComponent } from './addstudent/addstudent.component';
import {FormsModule} from  '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentslistComponent,
    StudentdetailsComponent,
    AddstudentComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot([
      {path:'students',component:StudentslistComponent},
      {path:'home',component:WelcomeComponent},
      { path: 'addstudent', component: AddstudentComponent },
      {path:'students/:name',component:StudentdetailsComponent},
      {path:'',redirectTo:'home',pathMatch:"full"}
    ])
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
