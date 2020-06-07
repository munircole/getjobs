import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email: null
  resetPasswordForm: FormControl;
  constructor(private router: Router, private formBuilder:FormBuilder, private formControl: FormControl) { }

  ngOnInit() {
    this.resetPasswordForm = new FormControl({
      email: ['', Validators.required]

    });
  }

  onSubmit(){
    console.log('foo');
  }
}
