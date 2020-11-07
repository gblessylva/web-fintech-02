import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class DataServiceService {

  private API_URL = 'http://localhost:2020/api/v1/users';

  constructor(private http : HttpClient) {


   }

  //  handleError(error: HttpErrorResponse) {
  //   let errorMessage = 'Unknown error!';
  //   if (error.error instanceof ErrorEvent) {
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return Error(errorMessage);
  // }

   getPosts(){
     return this.http.get(this.API_URL).pipe(retry(3))
   }

   postMilestones(milestone: any){
    const milestonesURL: string ='http://localhost:2020/api/v1/milestones'
    const body = JSON.stringify(milestone)
    const header = new HttpHeaders()
    header.set('Content-Type', 'application/json; charset=utf-8')

     return this.http.post(milestonesURL, milestone)
   }

   getProject(){
     return this.http.get('http://localhost:2020/api/v1/projects')
   }
  
}
