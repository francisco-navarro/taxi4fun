import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'y4f-car-list',
  templateUrl: './car-dashboard.component.html'
})
export class CarDashboardComponent implements OnInit {

  @Input() cars;
  @Output() carClicked = new EventEmitter();
  @Output() addNew = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
