import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-rate-us',
  templateUrl: './rate-us.component.html',
  styleUrls: ['./rate-us.component.css']
})
export class RateUsComponent implements OnInit {
  rateUsForm: FormGroup;

  public form = {
    rate: null,
    message: null,
    email: null
  };


  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rateUsForm = this.formBuilder.group({
      rate:['', Validators.required],
      message: ['', Validators.required],
      email: ['', Validators.compose([Validators.required])],
    });
  }

  onSubmit(){
    console.log(this.rateUsForm.value)
  }
}


