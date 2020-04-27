import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  departments=[
    {"id":1, "name":"ANGULAR"},
    {"id":2, "name":"NODE"},
    {"id":3, "name":"MONGODB"},
    {"id":4, "name":"RUBY"},
    {"id":5, "name":"BOOTSTRAP"}


  ]
  onSelect(department){
    this.router.navigate(['/department',department.id]);

  }

}
 