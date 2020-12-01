import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import {ResponseHelper} from '../app/ResponseHelper'

@Injectable()
export class DataServiceService {

  private API_URL = 'http://localhost:2020/api/v1/';

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
     return this.http.get(`${this.API_URL}projects`)
   }

   postProject(project: any){
     const projectURL = `${this.API_URL}projects`;
     const body = JSON.stringify(project)
     const header = new HttpHeaders()
     header.set('Content-Type', 'application/json; charset=utf-8')
     return this.http.post(projectURL, project )
   }

   getMilestones(){
    return this.http.get(`${this.API_URL}milestones`)
   }
 
  registerUser(userInfo){
    const body = JSON.stringify(userInfo)
     const header = new HttpHeaders()
     header.set('Content-Type', 'application/json; charset=utf-8')
    return this.http.post(`${this.API_URL}sme/register`, userInfo, {observe : 'response'})
  }

  verifyNewAccount(userId, code){
    return this.http.get(`${this.API_URL}auth/verify-account/${userId}/${code}`, {observe: 'response'})
  }

  login(userInfo){
    const body = JSON.stringify(userInfo)
    const header = new HttpHeaders()
    header.set('Content-Type', 'application/json; charset=utf-8')
    return this.http.post(`${this.API_URL}auth/sme/login`, userInfo, {observe: 'response'})
  }
  passwordResetRequest(email){
    const body = JSON.stringify(email)
    const header = new HttpHeaders()
    header.set('Content-Type', 'application/json; charset=utf-8')
    return this.http.post<ResponseHelper>(`${this.API_URL}auth/reset-password-code`, email, {observe: 'response'})
  }
  confirmPasswordReset(userInfo){
    const body = JSON.stringify(userInfo)
    const header = new HttpHeaders()
    header.set('Content-Type', 'application/json; charset=utf-8')
    return this.http.post<ResponseHelper>(`${this.API_URL}auth/reset-password/`, userInfo, {observe: 'response'})
  }
}
