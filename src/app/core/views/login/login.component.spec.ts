import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { LoginComponent } from './login.component';
import { LoginService } from 'app/core/services/login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginResponse = true;

  beforeEach(async(() => {
    let loginServiceStub = {
      send: () => Observable.of(loginResponse)
    };

    TestBed.configureTestingModule({
      imports: [ MaterialModule, BrowserAnimationsModule, RouterTestingModule ],
      providers: [ {provide: LoginService, useValue: loginServiceStub } ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
