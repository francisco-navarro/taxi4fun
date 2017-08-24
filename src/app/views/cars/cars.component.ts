import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'y4f-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = [
    {name: 'Coche 1', license: 'ER-12320'},
    {name: 'Coche 2', license: 'YT-42320'},
    {name: 'Coche 3', license: 'PL-12320'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
