import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'y4f-data-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  name: String = '';
  lastName: String = '';
  password = '';
  password2 = '';
  address = '';
  city = '';
  postalCode = '';
  email = '';
  phone = '';
  driverLicense = '';
  driverLicenseRenovation = '';

  constructor() { }

  ngOnInit() {
  }

}
