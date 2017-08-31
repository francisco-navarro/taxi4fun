import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'y4f-car-dialog',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  license;
  name;
  type;
  isNew;

  @Output() onSave = new EventEmitter<any>();

  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
    this.license = data.license;
    this.name = data.name;
    this.type = data.type;
    this.isNew = !!data.license;
   }

  ngOnInit() {
  }

  save(car) {
    this.onSave.emit({
      license: this.license,
      name: this.name,
      type: this.type
    });
  }

}
