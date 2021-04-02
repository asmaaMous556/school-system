import { student } from './../models/students';
import {  url1 } from './url.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
URL1 =url1
  constructor(private http:HttpClient) { }

  getAllStudents(){
    return this.http.get(this.URL1);
  }

  getStudentById(id:string){
  return this.http.get<any>(this.URL1 + id);
  }
  
 getStudentPerPage(page?:string, perPage?:string){
   let params={
     page:page,
     per_page:perPage

   }
    return this.http.get(this.URL1,{params:params})
 }
}
