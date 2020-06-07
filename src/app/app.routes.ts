import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { ConnectLayoutComponent } from './layout/connect-layout/connect-layout.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RateUsComponent } from './rate-us/rate-us.component';
import { PricingComponent } from './pricing/pricing.component';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { DashboardLayoutModule } from './layout/dashboard-layout/dashboard-layout.module';
import { ConnectLayoutModule } from './layout/connect-layout/connect-layout.module';
import { FindJobComponent } from './find-job/find-job.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'find-job', component: FindJobComponent},
  { path: 'jobseekers', component:JobseekersComponent},
  { path: 'contact', component: ContactUsComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'rate-us', component: RateUsComponent},
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  { path: 'privacy-policy', component:PrivacyPolicyComponent},
  { path: 'user', loadChildren: './users/users.module#UserModule' },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layout/dashboard-layout/dashboard-layout.module#DashboardLayoutModule'
      }
    ]
  },
  {
    path: 'connect',
    component: ConnectLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layout/connect-layout/connect-layout.module#ConnectLayoutModule'
      }
    ]
  },
  

]