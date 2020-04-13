import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobseeker } from '../model/jobseeker';


@Injectable({
    providedIn: "root"
})

export class UsersService{
    constructor(private http: HttpClient){}
    baseUrl = 'http://localhost/getjobs/php/';

    CreateJobseeker(jobseeker: Jobseeker): Observable<Jobseeker>{
        return this.http.post<Jobseeker>(`${this.baseUrl}/jobseekerreg.php`, jobseeker);


    }
}