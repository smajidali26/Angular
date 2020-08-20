import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  invalidEmails=['test@test.com','email@email.com'];
  form:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form =new FormGroup({
      'email': new FormControl(null,[this.invalidEmailsValidator.bind(this)]),
      'password':new FormControl(null,Validators.required)
    });
  }

  onSubmit()
  {
    console.log(this.form);
  }
  invalidEmailsValidator(control:FormControl):{[x:string]: boolean}
  {
    if(this.invalidEmails.indexOf(control.value) !== -1)
    {
      return {'invalidEmails': true};
    }
    return null;
  }
}
