import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDashboardComponent } from './car-dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

class MatDialogRefMock {

}

describe('CarDashboardComponent', () => {
  let component: CarDashboardComponent;
  let fixture: ComponentFixture<CarDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDashboardComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: MatDialog, useClass: MatDialogRefMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
