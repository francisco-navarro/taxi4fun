import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'y4f-car-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() cars;
  @Output() carClicked = new EventEmitter();
  @Output() addNew = new EventEmitter();

  clickNew() {
    this.addNew.emit();
  }

  clicked(car) {
    this.carClicked.emit(car);
  }

}
