import { student } from './../../models/students';
import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
response:any
students:student[];
perPage=new FormControl();
pageNum:any;
defaultValue=2;
page:number=1
pageSize:number;
total:number;
maxNum:number;
  constructor(private studentsService:StudentsService) { }

  ngOnInit(): void {
    
     setTimeout(() => {
       this.perPage.setValue(this.defaultValue)
     }, 0);

     this.perPage.valueChanges.subscribe(value=>{
      this.pageSize=value;
      this.loadPage(this.page,this.pageSize);
     })
   
  }

loadPage (page:number,pageSize:number){
      this.page=page
      this.loadData(this.page,pageSize);
  
  }
  
  loadData(page:number,pageSize:number){
     this.studentsService.getStudentPerPage(page.toString(),pageSize.toString()).subscribe(res=>{
       this.response=res;
        this.students=this.response.data
        this.total=this.response.total;
      })
   }
    

}
