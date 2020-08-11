import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { CovidComponent } from './covid/covid.component';
import { SynergyComponent } from './synergy/synergy.component';
import { HomeComponent } from './home/home.component';
import { RoutedynamicdataComponent } from './routedynamicdata/routedynamicdata.component';
import { NotFoundComponent } from './not-found/not-found.component';

const applicationRoutes : Routes =[

  {path:'',component:HomeComponent},
  {path:'nabeel',component:SynergyComponent},
  {path:'covid',component:CovidComponent},
  //{path:'dynamicdata/:id/:name/:age',component:RoutedynamicdataComponent}
  {path:'dynamicdata/:id',component:RoutedynamicdataComponent},
  {path:'notfound',component:NotFoundComponent},
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
