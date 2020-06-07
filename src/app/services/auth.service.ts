import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Jobseeker} from '../model/jobseeker';
import { Employer } from '../model/employer';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Response } from 'selenium-webdriver/http';
import {LocalStorage} from '@ngx-pwa/local-storage';




const Auth_API = 'http://localhost:4000/api/auth/';

const httpOptions=  {
  headers: new HttpHeaders({ 'content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient, private router: Router, private localStorage: LocalStorage) { }

  login(user: any){
    return this.http.post<any>(Auth_API + 'signin',user, httpOptions).subscribe((res:any)=>{
      this.localStorage.setItem('access_token', res.token)
      this.router.navigate(['user/profile'])
    })
  }

  createJobseeker(jobseeker: Jobseeker): Observable<any>{
    return this.http.post(Auth_API + 'createJobseeker', jobseeker, httpOptions ).pipe(catchError(this.handleError))
  }

  createEmployer(employer: Employer): Observable<any>{
    return this.http.post(Auth_API + 'createEmployer', employer, httpOptions ).pipe(catchError(this.handleError))
  }


  getToken(){
    return this.localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = this.localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout(){
    let removeToken = this.localStorage.removeItem('access_token');
    if (removeToken == null){
      this.router.navigate(['user/login']);
    }
  }


  getJobseekerProfile(id): Observable<any> {
    return this.http.post(Auth_API + 'user-profile/${id}', httpOptions).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)

    )

  }

  handleError(error: HttpErrorResponse){
    let msg = '';
    if (error.error instanceof HttpErrorResponse ){
      msg = error.error.message;
    } else {
      msg = `Error code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(msg)
  }

}
