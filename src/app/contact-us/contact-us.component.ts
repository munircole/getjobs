import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import  {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  public form = {
    name:null,
    email: null,
    message: null
  };
  constructor(private router: Router, private spinner: NgxSpinnerService) {
  }


  ngOnInit() {
    this.initForm();

  }

  private initForm(){
    this.contactForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'message': new FormControl('', Validators.required),
    })

  }

  onSubmit(){
    console.log(this.contactForm.value)
  }
}
