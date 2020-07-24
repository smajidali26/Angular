import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../logging.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-synergy',
  templateUrl: './synergy.component.html',
  styles: [`p{
    color: black;
}`]
})
export class SynergyComponent implements OnInit {
  employees:{name:string,designation:string}[]=[];
  constructor(private loggingService: LoggingService,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees =this.employeeService.employees;
  }


  emlopyeeAdded(emlpoyee : {name:string,designation:string})
  {
    //this.employees.push(emlpoyee);
    //console.log('Employee ('+name+') added in array');
    //this.loggingService.logToConsole('Employee ('+emlpoyee.name+') added in array');
  }
}
