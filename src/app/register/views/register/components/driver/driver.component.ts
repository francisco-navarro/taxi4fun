import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'y4f-register-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  name: String = '';
  lastName: String = '';
  password: String = '';
  password2: String = '';
  address: String = '';
  city: String = '';
  postalCode: String = '';
  email: String = '';
  phone: String = '';
  driverLicense: String = '';
  driverLicenseRenovation: String = '';
  state;

  constructor() { }

  ngOnInit() {
  }

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

}
