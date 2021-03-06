import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    
    <h2>you selected department with id={{departmentId}}</h2>

    <p>
    <button (click)="showOverview()">Overview</button>
    <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    </p>
  <div>
   <button (click)="gotoDepartments()">Back</button>
  </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId=id;
  }
  goPrevious(){
    let previousId=this.departmentId-1;
    this.router.navigate(['/department',previousId]);
  }
  goNext(){
    let nextId=this.departmentId+1;
    this.router.navigate(['/department',nextId]);

  }
  gotoDepartments(){
    let selectedId=this.departmentId ? this.departmentId :null;
    this.router.navigate(['..',{id:selectedId}],{relativeTo:this.route});
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }

}
