import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

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
import { HomeComponent } from './home/home.component';
import { RoutedynamicdataComponent } from './routedynamicdata/routedynamicdata.component';

const applicationRoutes : Routes =[
  {path:'',component:HomeComponent},
  {path:'nabeel',component:SynergyComponent},
  {path:'covid',component:CovidComponent},
  {path:'dynamicdata/:id/:name/:age',component:RoutedynamicdataComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CovidComponent,
    SynergyComponent,
    AttributeComponent,
    DatabindingComponent,
    EmployeesComponent,
    EmployeeComponent,
    HomeComponent,
    RoutedynamicdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [EmployeeService,LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
