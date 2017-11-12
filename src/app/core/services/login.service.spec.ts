import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'app/core/services/auth.service';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => {
    let authServiceStub = {
      changeStatus: status => status 
    };
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
      ],
      providers: [
        LoginService,
        {provide: AuthService, useValue: authServiceStub }
      ]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
