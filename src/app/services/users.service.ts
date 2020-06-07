import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';




@Injectable({
    providedIn: "root"
})



export class UsersService{

    endpoint: string = 'http://localhost:4000/api/access';

    constructor(private http: HttpClient){}

    getPublicContent(): Observable<any> {
        return this.http.get(this.endpoint + 'all', {responseType: 'text'});
    }
    
    
    getJobseekerContent(): Observable<any> {
        return this.http.get(this.endpoint + 'jobseeker', {responseType: 'text'});
    }

    
    getEmployerContent(): Observable<any> {
        return this.http.get(this.endpoint + 'employer', {responseType: 'text'});
    }
    
    getModeratorContent(): Observable<any> {
        return this.http.get(this.endpoint + 'mod', {responseType: 'text'});
    }
    
    getAdminContent(): Observable<any> {
        return this.http.get(this.endpoint + 'admin', {responseType: 'text'});
    }
    
    
}