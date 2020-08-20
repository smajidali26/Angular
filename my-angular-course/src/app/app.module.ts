import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CovidComponent } from './covid/covid.component';
import { SynergyComponent } from './synergy/synergy.component';
import { AttributeComponent } from './attribute/attribute.component';
import { DatabindingComponent } from './databinding/databinding.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeeService} from './employee.service';
import{LoggingService} from './logging.service';
import { HomeComponent } from './home/home.component';
import { RoutedynamicdataComponent } from './routedynamicdata/routedynamicdata.component';
import {AppRoutingModule} from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CategoryComponent } from './category/category.component';
import { CreatecategoryComponent } from './category/createcategory/createcategory.component';
import {HttpClientModule} from '@angular/common/http';
/*const applicationRoutes : Routes =[
  {path:'',component:HomeComponent},
  {path:'nabeel',component:SynergyComponent},
  {path:'covid',component:CovidComponent},
  //{path:'dynamicdata/:id/:name/:age',component:RoutedynamicdataComponent}
  {path:'dynamicdata/:id',component:RoutedynamicdataComponent}
]*/

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
    RoutedynamicdataComponent,
    NotFoundComponent,
    TemplateformComponent,
    ReactiveformComponent,
    CategoryComponent,
    CreatecategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    //RouterModule.forRoot(applicationRoutes)
  ],
  providers: [EmployeeService,LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
