import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  send(): Observable<Boolean> {
    return this.http.post( environment.endpoint + 'sessions/', {})
      .map(response => response.status === 200);
  }

}