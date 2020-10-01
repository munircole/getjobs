import { Component, OnInit } from '@angular/core';
import { CompanyService} from '../shared/company.service';
import { Employer } from 'src/app/model/employer';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  employers: Employer[];


  constructor( private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getEmployers()
    .subscribe(data => this.employers = data);
  }

  

}
