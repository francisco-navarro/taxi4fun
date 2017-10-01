import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginService } from './login.service';
import { AuthService } from 'app/core/services/auth.service';

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
