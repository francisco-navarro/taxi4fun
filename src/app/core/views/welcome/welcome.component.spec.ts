import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'app/core/material.deps';
import { RouterLinkStubDirective } from 'app/core/testing/router/router.stubs';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ 
        WelcomeComponent,
        RouterLinkStubDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have links', () => {
    expect(component.links.length).toBeGreaterThan(0);
  });
});
