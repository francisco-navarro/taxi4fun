import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService  implements CanActivate {
  logged:boolean;

  constructor(private router: Router) {
    this.logged = false;
  }

  changeStatus(status:boolean): boolean {
    // TODO: guardar en local storage
    this.logged = status;
    return this.logged;
  }

  canActivate(): Observable<boolean> {
    if(!this.logged) {
      this.router.navigate(['/login']);
    }
    return  Observable.of(this.logged);
  }
}