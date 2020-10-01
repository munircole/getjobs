import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


import { Employer } from '../../model/employer';
import { Job } from 'src/app/jobs/shared/jobs';





@Injectable()
export class CompanyService {
    private employersUrl = "http://localhost:3000/api/employers";
    private employerJobsUrl = "http://localhost:300/api/employers/:employerId/jobs";

    constructor(private http: HttpClient, private router: Router) { }
    employer: [];
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.error.message}`);
            return of(result as T);
        };

    }


    

    getEmployers(): Observable<Employer[]> {
        return this.http.get<Employer[]>(this.employersUrl).pipe(
            tap(_ => console.log('fetched employers')),
        )
    }

    getEmployer(id: number): Observable<Employer> {
        const url = `${this.employersUrl}/${id}`;
        return this.http.get<Employer>(url).pipe(
            tap(_ => console.log('fetched employer'))
        )
    }

    getJobsByEmployer(id: number): Observable<Job[]>{
        return this.http.get<Job[]>(this.employerJobsUrl).pipe(
            tap(_ => console.log('fetched jobs by employer'))
        )


    }
}
