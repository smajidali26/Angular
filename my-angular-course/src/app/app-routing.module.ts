import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { CovidComponent } from './covid/covid.component';
import { SynergyComponent } from './synergy/synergy.component';
import { HomeComponent } from './home/home.component';
import { RoutedynamicdataComponent } from './routedynamicdata/routedynamicdata.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CategoryComponent } from './category/category.component';
import { CreatecategoryComponent } from './category/createcategory/createcategory.component';
const applicationRoutes : Routes =[

  {path:'',component:HomeComponent},
  {path:'nabeel',component:SynergyComponent},
  {path:'covid',component:CovidComponent},
  //{path:'dynamicdata/:id/:name/:age',component:RoutedynamicdataComponent}
  {path:'dynamicdata/:id',component:RoutedynamicdataComponent},
  {path:'notfound',component:NotFoundComponent},
  {path:'templateform',component:TemplateformComponent},
  {path:'reactiveform',component:ReactiveformComponent},
  {path:'categories',component:CategoryComponent},
  {path:'categorycreate',component:CreatecategoryComponent},
  {path:'**',redirectTo:'/notfound'}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(applicationRoutes) ],
  exports: [RouterModule],
  providers: [],
})


export class AppRoutingModule
{

}
