import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'y4f-car-list',
  templateUrl: './car-dashboard.component.html'
})
export class CarDashboardComponent implements OnInit {

  @Input() cars;

  constructor() { }

  ngOnInit() {
  }

}
