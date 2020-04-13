import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MaterialModule } from './material.module';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ComponentsModule } from './components/components.module';

import { UsersService } from './services/users.service';


import { ConfirmEqualValidatorDirective } from './directives/confirm-equal.directive';




import { appRoutes } from "./app.routes";



import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navigations/navbar/navbar.component';
import { SidenavComponent } from './navigations/sidenav/sidenav.component';
import { FooterComponent } from './navigations/footer/footer.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobThumbnailComponent } from './jobs/job-thumbnail/job-thumbnail.component';
import { CreateJobsComponent } from './jobs/create-jobs/create-jobs.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobApplyFormComponent } from './jobs/job-details/job-apply-form/job-apply-form.component';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CompaniesThumbnailComponent } from './companies/companies-thumbnail/companies-thumbnail.component';
import { CompaniesDetailComponent } from './companies/companies-detail/companies-detail.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { RateUsComponent } from './rate-us/rate-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    JobListComponent,
    JobThumbnailComponent,
    CreateJobsComponent,
    JobDetailsComponent,
    JobApplyFormComponent,
    CompaniesListComponent,
    CompaniesThumbnailComponent,
    CompaniesDetailComponent,
    DashboardLayoutComponent,
    ConfirmEqualValidatorDirective,
    ContactUsComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    JobseekersComponent,
    PricingComponent,
    FaqComponent,
    RateUsComponent  

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule,
    ComponentsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
