import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedIn = false;
  submitted = false;
  errorMessage = {};
  loginError: string;


  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  onSubmit() {
    this.submitted = true;
    this.authService.login(this.loginForm.value).subscribe(data => {
      this.toastr.success('Logged In Successfully, Welcome to your profile')
      this.router.navigate(['/user/profile']);

    },
      error => {
        this.errorMessage = error
      }

    )


  
  }

}
