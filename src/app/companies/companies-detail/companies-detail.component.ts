import { Component, OnInit } from '@angular/core';
import {CompanyService } from '../shared/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employer } from 'src/app/model/employer';
import { Job } from 'src/app/jobs/shared/jobs';


@Component({
  selector: 'app-companies-detail',
  templateUrl: './companies-detail.component.html',
  styleUrls: ['./companies-detail.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  employer: Employer;
  jobs: Job[];

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyService.getEmployer(+this.route.snapshot.params['id']).subscribe(data => this.employer = data);
    this.companyService.getJobsByEmployer(+this.route.snapshot.params['id'])
    .subscribe(data => this.jobs = data);



  }

}
