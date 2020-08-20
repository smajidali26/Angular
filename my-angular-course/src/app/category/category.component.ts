import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Categories} from '../category/model/category';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Categories[];
  errorMessage:string;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
    });

    let options = {
      headers : headers
    }
    this.httpClient.get<Categories[]>("http://localhost:44365/api/Categories",options)
    .pipe(
      tap((data)=>{

        data.forEach(function(value){
          if(value.Description == null)
          {
            value.Description = value.CategoryName;
          }
        })
      }),
      catchError(this.handleError)
    ).subscribe({
      next:(data)=>{
        this.categories = data
      },
      error: (err)=>{this.errorMessage = err;}
    })
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
