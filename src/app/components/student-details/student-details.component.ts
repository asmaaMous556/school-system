import { student } from './../../models/students';
import { StudentsService } from './../../services/students.service';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
id:string;
student:student
  constructor(private route:ActivatedRoute, private studentService:StudentsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
   this.id=params['id'];
 
    this.getStudent(this.id);
   
    })
  }

  getStudent(id:string){
    this.studentService.getStudentById(id).subscribe(res=>{
    this.student=res.data
    console.log(this.student)
    })
  }

}
