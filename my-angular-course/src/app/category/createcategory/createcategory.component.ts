import { Component, OnInit } from '@angular/core';
import {CategoryCreate} from '../model/categorycreate';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  categoryCreate: CategoryCreate;
  categoryCreateForm:FormGroup;
  errorMessage:string;
  constructor(private formBuilder: FormBuilder,private httpClient:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.categoryCreateForm = this.formBuilder.group({
      CategoryName:['',Validators.required]
    });
  }
  get getCategoryName()
  {
    return this.categoryCreateForm.get('CategoryName');
  }

  OnCategoryCreate()
  {
    let model = JSON.stringify(this.FillModel());

    let headers = new HttpHeaders({
      'Content-Type':'application/json',
    });

    let options = {
      headers : headers
    }
    this.httpClient.post<any>("http://localhost:44365/api/Categories",model,options)
    .pipe(catchError(this.handleError)).subscribe(
      (response) => this.route.navigate(['categories']),
      (error) => (this.errorMessage = error)
    );

  }

  FillModel()
  {
    this.categoryCreate = new CategoryCreate();
    this.categoryCreate.CategoryName = this.getCategoryName.value;
    return this.categoryCreate;
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code : ${err.status}, error message is : ${err.error.Message}`;
    }
    return throwError(errorMessage);
  }
}
