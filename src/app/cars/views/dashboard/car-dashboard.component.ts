import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CarComponent } from '../../components/car/car.component';

@Component({
  selector: 'y4f-car-dashboard',
  templateUrl: './car-dashboard.component.html',
  styleUrls: ['./car-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarDashboardComponent implements OnInit {

  cars = [
    {name: 'Coche 1', license: 'ER-12320', type: 'sedan'},
    {name: 'Coche 2', license: 'YT-42320', type: 'hatchback'},
    {name: 'Coche 3', license: 'PL-12320', type: 'van'}
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showModal(car) {
    const modal = this.dialog.open(CarComponent, {
      data: car
    });
    modal.afterClosed().subscribe($e => {
      car.license = $e.license;
      car.name = $e.name;
      car.type = $e.type;
      modal.close();
    });
  }

  showNewModal() {
    this.dialog.open(CarComponent, {
      data: {}
    });
  }

}
