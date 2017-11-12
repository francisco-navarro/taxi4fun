import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'y4f-register-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string = '';
  lastName: string = '';
  password: string = '';
  password2: string = '';
  address: string = '';
  city: string = '';
  postalCode: string = '';
  email: string = '';
  phone: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
