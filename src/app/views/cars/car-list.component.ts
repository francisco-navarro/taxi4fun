import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { CarComponent } from './components/car/car.component';

@Component({
  selector: 'y4f-cars',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars = [
    {name: 'Coche 1', license: 'ER-12320', type: 'sedan'},
    {name: 'Coche 2', license: 'YT-42320', type: 'hatchback'},
    {name: 'Coche 3', license: 'PL-12320', type: 'van'}
  ];

  constructor(public dialog: MdDialog) {}

  ngOnInit() {
  }

  showModal(car) {
    this.dialog.open(CarComponent, {
      data: car
    });
  }

  showNewModal() {
    this.dialog.open(CarComponent, {
      data: {}
    });
  }

}
