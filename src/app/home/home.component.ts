import { Component, OnInit } from '@angular/core';
import { JobService } from '../jobs/shared/jobs.service';
import { Job } from '../jobs/shared/jobs'

import { CompanyService } from '../companies/shared/company.service';
import { Employer } from 'src/app/model/employer';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs: Job[];
  employers: Employer[];

  constructor(private jobService: JobService, private companyService: CompanyService) { }

  ngOnInit() {
    this.jobService.getJobs()
      .subscribe(data => this.jobs = data);

    this.companyService.getEmployers()
      .subscribe(data => this.employers = data);

  }

}

