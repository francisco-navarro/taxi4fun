import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { LoginService } from './login.service';
import { AuthService } from 'app/core/services/auth.service';

describe('LoginService', () => {
  beforeEach(() => {
    let authServiceStub = {
      changeStatus: status => status 
    };
    TestBed.configureTestingModule({
      imports: [HttpModule],
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
