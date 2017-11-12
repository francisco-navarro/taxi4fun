import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from 'app/core/services/auth.service';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private http: Http, private authService: AuthService) { }

  send(): Observable<Boolean> {
    return this.http.post( environment.endpoint + 'v1/sessions', {})
      .map(response =>
        this.authService.changeStatus(response.status === 200)
      );
  }
}