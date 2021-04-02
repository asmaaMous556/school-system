import { LoginComponent } from './components/login/login.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'details/:id',component:StudentDetailsComponent},
{path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
