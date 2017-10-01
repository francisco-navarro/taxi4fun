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
    if(!this.logged) {
      this.router.navigate(['/login']);
      return false;
    }
    return  Observable.of(this.logged);
  }
}