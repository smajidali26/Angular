import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService
{
  employees=[
    {
      id:1,
      name: 'Fahd Ahmed',
      designation:'CEO'
    },
    {
      id:2,
      name: 'Naqi Abbas',
      designation:'Manager'
    },
    {
      id:3,
      name: 'Aqib Khan',
      designation:'Manager'
    },
    {
      id:4,
      name: 'Wasif Ali',
      designation:'Manager'
    },
    {
      id:5,
      name: 'Imran Ashraf',
      designation:'Manager'
    }

  ]

constructor(private loggingService:LoggingService)
{

}

  AddEmployee(name:string, designation:string)
  {
    const count = this.employees.length+1;
    this.employees.push({
      id:count,
      name:name,
      designation:designation
    });
    //console.log('Employee ('+name+') added in array')
    this.loggingService.logToConsole('Employee ('+name+') added in array');
  }

  GetEmployee(id:number)
  {
    const employee = this.employees.find((x)=>{
      return x.id == id;
    })

    return employee;
  }
}
