import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CovidComponent } from './covid/covid.component';
import { SynergyComponent } from './synergy/synergy.component';
import { AttributeComponent } from './attribute/attribute.component';
import { DatabindingComponent } from './databinding/databinding.component';
import {FormsModule} from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeeService} from './employee.service';
import{LoggingService} from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    CovidComponent,
    SynergyComponent,
    AttributeComponent,
    DatabindingComponent,
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService,LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
