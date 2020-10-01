import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule,  } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../app/material.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule} from 'ngx-toastr';


import { UsersService } from '../services/users.service';

import { usersRoutes } from './users.routes';

import { JobSeekerProfileComponent } from './profile-pages/job-seeker-profile/job-seeker-profile.component';
import { JobSeekerDashboardComponent } from './profile-pages/jobseeker-dashboard/job-seeker-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployerRegisterFormComponent } from './register/employer-register-form/employer-register-form.component';
import { JobseekersRegisterFormComponent } from './register/jobseekers-register-form/jobseekers-register-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule,
        NgxSpinnerModule,
        ToastrModule,
        RouterModule.forChild(usersRoutes)
    ],

    declarations:[
        JobSeekerDashboardComponent,
        JobSeekerProfileComponent,
        LoginComponent,
        RegisterComponent,
        EmployerRegisterFormComponent,
        JobseekersRegisterFormComponent,
        ResetPasswordComponent,
        ChangePasswordComponent
        
    ],

    providers:[
        UsersService

    ]

})
export class UserModule{ }