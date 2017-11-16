import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'y4f-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarComponent implements OnInit {

  license;
  name;
  type;
  isNew;

  @Output() onSave = new EventEmitter<any>();
  
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
      this.license = data.license;
      this.name = data.name;
      this.type = data.type;
      this.isNew = !!data.license;
     }
  
    ngOnInit() {
    }
  
    save() {
      this.onSave.emit({
        license: this.license,
        name: this.name,
        type: this.type
      });
    }

}
