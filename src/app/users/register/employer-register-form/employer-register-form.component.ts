import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employer-register-form',
  templateUrl: './employer-register-form.component.html',
  styleUrls: ['./employer-register-form.component.css']
})
export class EmployerRegisterFormComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'otherName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'contact_number': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'company_position': new FormControl('', Validators.required),
          });

    this.secondFormGroup = new FormGroup({
      'company_name': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'industry': new FormControl('', Validators.required),
      'company_description': new FormControl('', Validators.required),
      'password': new FormControl('',[ Validators.required, Validators.minLength(8)]),
      'confirmPassword': new FormControl('',[ Validators.required, Validators.minLength(8)]),
      'company_logo': new FormControl('', Validators.required),
      'company_website': new FormControl('', Validators.required),
    });

  }

}
