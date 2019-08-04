import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  validationProfile = this.fb.group({
    firstName : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    txtEmail : ['', [Validators.email]]
  });

  ngOnInit() {
  }

  onSubmit() {
    alert(JSON.stringify(this.validationProfile.value))
}  

get firstName() {
  return this.validationProfile.get('firstName');
}

get txtEmail() {
  return this.validationProfile.get('txtEmail');
}
}
