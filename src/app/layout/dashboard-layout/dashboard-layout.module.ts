import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule,  } from '@angular/router'
import { ClipboardModule } from 'ngx-clipboard';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { DashboardLayoutRoutes } from './dashboard-layout.routes';

import {UserProfileComponent } from '../../dashboard-pages/user-profile/user-profile.component';
import { ApplicationsComponent } from '../../dashboard-pages/applications/applications.component';
import { BillingComponent } from '../../dashboard-pages/billing/billing.component';
import { DashboardComponent } from '../../dashboard-pages/dashboard/dashboard.component';
import { EmployersComponent } from '../../dashboard-pages/employers/employers.component';
import { InterviewComponent } from '../../dashboard-pages/interview/interview.component';
import { JobSeekersComponent} from '../../dashboard-pages/job-seekers/job-seekers.component';
import { SendMailComponent } from '../../dashboard-pages/send-mail/send-mail.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ClipboardModule,
        HttpClientModule,
        NgbModule,
        RouterModule.forChild(DashboardLayoutRoutes)
    ],

    declarations:[
        ApplicationsComponent,
        BillingComponent,
        DashboardComponent,
        EmployersComponent,
        InterviewComponent,
        JobSeekersComponent,
        UserProfileComponent,
        SendMailComponent
        
    ],

    providers:[

    ]

})
export class DashboardLayoutModule{ }