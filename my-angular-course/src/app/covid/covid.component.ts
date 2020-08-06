import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector:'covid',
templateUrl:'./covid.component.html'
})

export class CovidComponent
{
  constructor(private route:Router)
  {

  }

  OnButtonClick()
  {
this.route.navigate(['dynamicdata',10,'Nabeel',18]);
  }
}
