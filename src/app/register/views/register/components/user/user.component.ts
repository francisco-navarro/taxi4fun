import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'y4f-register-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: String = '';
  lastName: String = '';
  password: String = '';
  password2: String = '';
  address: String = '';
  city: String = '';
  postalCode: String = '';
  email: String = '';
  phone: String = '';
  
  constructor() { }

  ngOnInit() {
  }

}
