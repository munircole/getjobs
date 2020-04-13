import { ApplicationsComponent } from '../../dashboard-pages/applications/applications.component';
import { BillingComponent } from '../../dashboard-pages/billing/billing.component';
import { DashboardComponent } from '../../dashboard-pages/dashboard/dashboard.component';
import { EmployersComponent } from '../../dashboard-pages/employers/employers.component';
import { InterviewComponent } from '../../dashboard-pages/interview/interview.component';
import { JobSeekersComponent} from '../../dashboard-pages/job-seekers/job-seekers.component';
import { UserProfileComponent } from '../../dashboard-pages/user-profile/user-profile.component';
import { SendMailComponent } from '../../dashboard-pages/send-mail/send-mail.component';


export const DashboardLayoutRoutes = [
    { path: '',      component: DashboardComponent },
    { path: 'applications',   component: ApplicationsComponent },
    { path: 'employers',      component: EmployersComponent },
    { path: 'interview',      component: InterviewComponent },
    { path: 'billing',        component: BillingComponent },
    { path: 'Job-Seekers',    component: JobSeekersComponent},
    { path: 'user-profile', component: UserProfileComponent},
    { path: 'send-mail', component: SendMailComponent}
]