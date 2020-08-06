import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routedynamicdata',
  templateUrl: './routedynamicdata.component.html',
  styleUrls: ['./routedynamicdata.component.css']
})
export class RoutedynamicdataComponent implements OnInit {
  id:string;
  name:string;
  age:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.age = this.route.snapshot.params['age'];
  }

}
