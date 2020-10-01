import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Jobseeker } from '../model/jobseeker';
import { Employer } from '../model/employer';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Response } from 'selenium-webdriver/http';




const Auth_API = 'http://localhost:3000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = {};


  constructor(private http: HttpClient, private router: Router) { }



  login(jobseeker: Jobseeker) {
    return this.http.post<any>(Auth_API + 'signin', jobseeker, httpOptions).pipe(map(jobseeker => {
      if (jobseeker && jobseeker.token) {
        localStorage.setItem('access_token', jobseeker.token);
      }
    }),
      catchError(this.handleError)
    );

  }

  createJobseeker(jobseeker: Jobseeker): Observable<any> {
    return this.http.post(Auth_API + 'Jsregister', jobseeker, httpOptions).pipe(catchError(this.handleError))
  }

  createEmployer(employer: Employer): Observable<any> {
    return this.http.post(Auth_API + 'registerEmployer', employer, httpOptions).pipe(catchError(this.handleError))
  }

  getJobseekerProfile(id): Observable<any> {
    return this.http.post(Auth_API + 'employers/${id}', httpOptions).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)

    )

  }


  isLoggedIn(){
    if(localStorage.getItem('access_token')){
      return true;
    }
    return false;
  }

  getToken(){
    const currentUser = localStorage.getItem('access_token');
    return currentUser;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['user/login']);
    }
  }



  //Error

    handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof HttpErrorResponse) {
      msg = error.error.message;
    } else {
      msg = error.error.message
    }

    return throwError(msg)
  }


}
