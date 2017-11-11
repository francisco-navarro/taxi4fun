import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/core/services/login.service';

@Component({
  selector: 'y4f-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router: Router ) {
   }

  ngOnInit() {
  }

  sendLogin() {
    this.loginService.send().subscribe(response => {
      if (response) {
        this.router.navigate(['/welcome']);
      }
    });
  }

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

}
