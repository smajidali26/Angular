import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  day = "Tuesday"
  date="21-07-2020"
  disable=false
  someText="Some Text"
  synergyEmployees=['Haris','Usman','Naqi']
  constructor() {
    setTimeout(()=>{
      this.disable = true
    },2000)

  }

  ngOnInit(): void {
  }

  onInput(event:Event)
  {
    this.someText = (<HTMLInputElement>event.target).value;
  }

}
