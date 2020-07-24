import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @Input() employee: {name: string, designation: string};
  constructor() { }

  ngOnInit(): void {
  }

}
