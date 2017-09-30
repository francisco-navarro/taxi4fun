import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService  implements CanActivate {
  logged:boolean;

  constructor(private router: Router) {
    this.logged = false;
  }

  canActivate() {
    // return Observable.of(this.logged);
    if(!this.logged) {
      this.router.navigate(['/login']);
      return false;
    }
    return this.logged;
  }
}