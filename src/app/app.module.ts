import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule } from './material.module';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";

import { AuthInterceptor } from './helpers/auth.interceptor';

import { ComponentsModule } from './components/components.module';
import { DateAgoPipe} from './pipes/date-ago.pipe';
import { UsersService } from './services/users.service';
import { JobService } from '../app/jobs/shared/jobs.service';
import { CompanyService } from './companies/shared/company.service';
import {UserModule} from './users/users.module';
import { appRoutes } from "./app.routes";

import { JobListResolver } from './jobs/job-list/job-list.resolver';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navigations/navbar/navbar.component';
import { SidenavComponent } from './navigations/sidenav/sidenav.component';
import { FooterComponent } from './navigations/footer/footer.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobApplyFormComponent } from './jobs/job-details/job-apply-form/job-apply-form.component';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CompanyDetailsComponent } from './companies/companies-detail/companies-detail.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { ConnectLayoutComponent } from './layout/connect-layout/connect-layout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { RateUsComponent } from './rate-us/rate-us.component';
import { FindJobComponent } from './find-job/find-job.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    JobListComponent,
    JobDetailsComponent,
    JobApplyFormComponent,
    CompaniesListComponent,
    CompanyDetailsComponent,
    DashboardLayoutComponent,
    ConnectLayoutComponent,
    ContactUsComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    JobseekersComponent,
    PricingComponent,
    FaqComponent,
    RateUsComponent,
    FindJobComponent,
    DateAgoPipe

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
    UserModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    UsersService,
    JobService,
    CompanyService,
    JobListResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
