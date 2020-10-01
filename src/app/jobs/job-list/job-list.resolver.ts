import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { JobService } from '../shared/jobs.service'
import { map } from 'rxjs/operators'

@Injectable()
export class JobListResolver implements Resolve<any>{
    constructor(private jobService:JobService){

    }
    resolve(){
        return this.jobService.getJobs().pipe(map(jobs => jobs))
    }
}