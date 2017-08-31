import { Component, OnInit, Inject } from '@angular/core';
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

  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
    this.license = data.license;
    this.name = data.name;
    this.type = data.type;
   }

  ngOnInit() {
  }

  isNew() {
    return !!this.license;
  }

}
