import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'y4f-data-driver',
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

  constructor() { }

  ngOnInit() {
  }

}
