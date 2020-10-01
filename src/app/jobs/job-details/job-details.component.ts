import { Component, OnInit } from '@angular/core';
import { JobService } from '../shared/jobs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from '../shared/jobs';

@Component({
  selector: 'job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job: Job

  constructor(private jobService: JobService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  this.jobService.getJob(+this.route.snapshot.params['id']).subscribe(data => this.job = data);

  }


}
