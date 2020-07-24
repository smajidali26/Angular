import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import{LoggingService} from '../logging.service';
import{EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  //@Output() emlopyeeAdded = new EventEmitter<{name: string, designation: string}>();
  constructor(private loggingService: LoggingService,private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }
  onCreateEmployee(employeeName: string, role: string) {
    /*this.emlopyeeAdded.emit({
        name: employeeName,
      designation: role
    });*/
    //console.log('New Employee '+employeeName+' request generated ');
    //const logging = new LoggingService();
    this.employeeService.AddEmployee(employeeName,role);
    this.loggingService.logToConsole('New Employee '+employeeName+' request generated ');
  }

}
