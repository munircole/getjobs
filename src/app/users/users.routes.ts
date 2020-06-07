import { JobSeekerProfileComponent } from './profile-pages/job-seeker-profile/job-seeker-profile.component';
import { JobSeekerDashboardComponent } from './profile-pages/jobseeker-dashboard/job-seeker-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployerRegisterFormComponent } from './register/employer-register-form/employer-register-form.component';
import { JobseekersRegisterFormComponent } from './register/jobseekers-register-form/jobseekers-register-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

export const usersRoutes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'register/employers', component:EmployerRegisterFormComponent},
    { path: 'register/jobseekers', component:JobseekersRegisterFormComponent},
    { path: 'reset-password', component: ResetPasswordComponent},
    { path: 'profile', component: JobSeekerProfileComponent},
    { path: 'profile/dashboard', component: JobSeekerDashboardComponent},
    { path: 'change-password', component: ChangePasswordComponent}
]