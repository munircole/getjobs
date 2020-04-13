import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { JobSeekerProfileComponent } from '../profile-pages/job-seeker-profile/job-seeker-profile.component';
import { JobSeekerDashboardComponent} from '../profile-pages/jobseeker-dashboard/job-seeker-dashboard.component';
import { ProfileSidebarComponent } from '../profile-pages/sidebar/sidebar.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    JobSeekerProfileComponent,
    JobSeekerDashboardComponent,
    ProfileSidebarComponent
  ],
  exports: [
    JobSeekerProfileComponent,
    JobSeekerDashboardComponent,
    ProfileSidebarComponent
  ]
})
export class ProfilePagesModule { }
