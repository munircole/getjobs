import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Response } from 'selenium-webdriver/http';


import { Job } from './jobs'





@Injectable()
export class JobService {
    private jobsUrl = "http://localhost:3000/api/jobs";

    constructor(private http: HttpClient, private router: Router) { }
    job: [];
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };

    }


    

    getJobs(): Observable<Job[]> {
        return this.http.get<Job[]>(this.jobsUrl).pipe(
            tap(_ => console.log('fetched jobs'))
        )
        
              

    }

    getJob(id: number): Observable<Job> {
        const url = `${this.jobsUrl}/${id}`;
        return this.http.get<Job>(url).pipe(
            tap(_ => console.log('fetched jobs'))
        )
    }

}
