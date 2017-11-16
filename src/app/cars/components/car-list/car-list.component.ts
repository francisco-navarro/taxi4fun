import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'y4f-car-list',
  templateUrl: './car-list.component.html'
})
export class CarListComponent implements OnInit {

  @Input() cars;
  @Output() carClicked = new EventEmitter();
  @Output() addNew = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
