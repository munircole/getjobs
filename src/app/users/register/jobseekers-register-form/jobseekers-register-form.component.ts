import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-jobseekers-register-form',
  templateUrl: './jobseekers-register-form.component.html',
  styleUrls: ['./jobseekers-register-form.component.css']
})
export class JobseekersRegisterFormComponent implements OnInit {
  registered = false;
  submitted = false;
  registerFailed = false;
  errorMessage = [];

  jobseekersForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private apiService: AuthService, private router: Router, private spinner: NgxSpinnerService) {
  }

  invalidFirstName() {
    return (this.submitted && this.jobseekersForm.controls.firstName.errors != null);
  };
  invalidLastName() {
    return (this.submitted && this.jobseekersForm.controls.lastName.errors != null);
  }
  invalidEmail() {
    return (this.submitted && this.jobseekersForm.controls.email.errors != null);
  }
  invalidContact_number() {
    return (this.submitted && this.jobseekersForm.controls.contact_number.errors != null);
  }
  invalidGender() {
    return (this.submitted && this.jobseekersForm.controls.gender.errors != null);
  }
  invalidDOB() {
    return (this.submitted && this.jobseekersForm.controls.dob.errors != null);
  }
  invalidCountry() {
    return (this.submitted && this.jobseekersForm.controls.country.errors != null);
  }
  invalidState() {
    return (this.submitted && this.jobseekersForm.controls.state.errors != null);
  }

  invalidQualification() {
    return (this.submitted && this.jobseekersForm.controls.qualification.errors != null);
  }
  invalidProfession() {
    return (this.submitted && this.jobseekersForm.controls.profession.errors != null);
  }
  invalidPassword() {
    return (this.submitted && this.jobseekersForm.controls.password.errors != null);
  }
  invalidConfirmPassword() {
    return (this.submitted && this.jobseekersForm.controls.confirmPassword.errors != null);
  }

  checkpassword() {
    return (this.jobseekersForm.controls.confirmPassword.value != this.jobseekersForm.controls.password.value);
  }


  showSpinner() {
    this.spinner.show();
  }

  ngOnInit() {
    this.jobseekersForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      otherName: [''],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      contact_number: ['', Validators.required],
      qualification: ['', Validators.required],
      profession: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      allow_mail: [''],

    });

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;
    this.apiService.createJobseeker(this.jobseekersForm.value).subscribe(
      data => {
        console.log(data);
        this.registered = true;
        this.jobseekersForm.reset();
        this.router.navigate(['user/login']);


      },
      err => {
        this.errorMessage = err;
        console.log(this.errorMessage);
      }

    );

    this.spinner.hide();

  };


}


