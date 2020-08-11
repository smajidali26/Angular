import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-routedynamicdata',
  templateUrl: './routedynamicdata.component.html',
  styleUrls: ['./routedynamicdata.component.css']
})
export class RoutedynamicdataComponent implements OnInit {
  id:number;
  name:string;
 // age:string;
 designation:string;
  constructor(private route:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    /*this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.age = this.route.snapshot.params['age'];*/

    this.route.params.subscribe((param:Params)=>{
      this.id = param['id'];
      const employee = this.employeeService.GetEmployee(this.id);
      this.name = employee.name;
      this.designation = employee.designation;
    });
  }

}
