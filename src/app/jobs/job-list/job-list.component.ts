import { Component, OnInit } from '@angular/core';
import { JobService } from '../shared/jobs.service';
import { Job } from '../shared/jobs'


@Component({
  selector: 'job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobs()
    .subscribe(data => this.jobs = data);
  }

}
