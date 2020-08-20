import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  Email:string;
  Password:string;
  @ViewChild('f')  form:NgForm;
  constructor() {
    this.form=null;
   }

  ngOnInit(): void {
    //this.form.form.patchValue({email:'ali@test.com',password:'654321'});
    this.Email = 'ali@test.com';
    this.Password='1234568910';
  }
  onSubmit()
  {
    console.log(this.form);
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    console.log(this.Email);
    console.log(this.Password);
  }
}
