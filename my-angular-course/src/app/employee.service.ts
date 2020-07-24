import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService
{
  employees=[
    {
      name: 'Fahd Ahmed',
      designation:'CEO'
    },
    {
      name: 'Naqi Abbas',
      designation:'Manager'
    },
    {
      name: 'Aqib Khan',
      designation:'Manager'
    },
    {
      name: 'Wasif Ali',
      designation:'Manager'
    },
    {
      name: 'Imran Ashraf',
      designation:'Manager'
    }

  ]

constructor(private loggingService:LoggingService)
{

}

  AddEmployee(name:string, designation:string)
  {
    this.employees.push({
      name:name,
      designation:designation
    });
    //console.log('Employee ('+name+') added in array')
    this.loggingService.logToConsole('Employee ('+name+') added in array');
  }
}
