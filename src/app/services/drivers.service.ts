import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { Driver } from '../models/driver';

@Injectable()
export class DriversService {

  ENDPOINT = environment.endpoint + '/drivers';

  constructor(private http: Http) { }

  list () : Observable<Driver[]> {
    return this.http.get(this.ENDPOINT)
      .map(resp => resp.json() as Driver[]);
  }

}
