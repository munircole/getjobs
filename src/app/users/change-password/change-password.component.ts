import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      newPassword: ['', Validators.required, Validators.minLength(8)],
      confirmNewPassword: ['', Validators.required, Validators.minLength(8)]

    });
  }


  onSubmit(){
    console.log('foo');
  }

}
