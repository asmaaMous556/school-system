import { student } from './../../models/students';
import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
response:any
students:student[]
  constructor(private studentsService:StudentsService) { }

  ngOnInit(): void {
    
    this.studentsService.getAllStudents().subscribe(res=>{
      this.response=res;
      this.students=this.response.data
    })
  }
  
    

}
