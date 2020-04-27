import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepatmentContactComponent } from './depatment-contact/depatment-contact.component';
import { DepatmentOverviewComponent } from './depatment-overview/depatment-overview.component';


const routes: Routes = [
  {
    path:'' ,redirectTo:"/departments" , pathMatch:'full'

  },
  {
    path:"employee",
    component:EmployeeComponent
  },
  {
    path:"department",
    component:DepartmentComponent
  },
  {
    path:"department/:id" , component:DepartmentDetailsComponent,
    children:[
      {
        path:'overview' , component:DepatmentOverviewComponent
      },
      {
        path:'contact',component:DepatmentContactComponent
      }
    ]

  },
  {
    path: "**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EmployeeComponent,DepartmentComponent,PageNotFoundComponent,DepartmentDetailsComponent]
