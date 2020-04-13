import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import  {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Jobseeker} from '../../../model/jobseeker';

@Component({
  selector: 'app-jobseekers-register-form',
  templateUrl: './jobseekers-register-form.component.html',
  styleUrls: ['./jobseekers-register-form.component.css']
})
export class JobseekersRegisterFormComponent implements OnInit {
  jobseekersForm: FormGroup;
  constructor(private apiService: UsersService, private router: Router, private spinner: NgxSpinnerService) {
  }

  showSpinner(){
    this.spinner.show();
  }

  ngOnInit() {
    this.initForm();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  private initForm(){
    this.jobseekersForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'otherName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'dob': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
      'contact_number': new FormControl('', Validators.required),
      'qualification': new FormControl('', Validators.required),
      'profession': new FormControl('', Validators.required),
      'password': new FormControl('',[ Validators.required, Validators.minLength(8)]),
      'confirmPassword': new FormControl('',[ Validators.required, Validators.minLength(8)]),
      'allow_mail': new FormControl(''),
    })

  }

  onSubmit(){
    this.apiService.CreateJobseeker(this.jobseekersForm.value).subscribe((jobseeker: Jobseeker) =>{
      console.log("registered, ", jobseeker);
      this.spinner.hide();
      //this.router.navigate(['user/login'])
    });

  }

}


