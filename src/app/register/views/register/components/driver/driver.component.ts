import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'y4f-register-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  name: string = '';
  lastName: string = '';
  password: string = '';
  password2: string = '';
  address: string = '';
  city: string = '';
  postalCode: string = '';
  email: string = '';
  phone: string = '';
  driverLicense: string = '';
  driverLicenseRenovation: string = '';
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
