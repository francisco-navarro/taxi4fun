import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'app/core/services/auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [AuthService]
    });
  });

  it('should be created with no login', inject([AuthService], (service: AuthService) => {
    service.canActivate().subscribe(result => 
      expect(result).toBeFalsy());
    }));

  it('should be activate when login', inject([AuthService], (service: AuthService) => {
    service.changeStatus(true);
    service.canActivate().subscribe(result => 
      expect(result).toBeTruthy());
    }));

});
