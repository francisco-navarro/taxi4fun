import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'y4f-data-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
  animations: [
  trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
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

}
