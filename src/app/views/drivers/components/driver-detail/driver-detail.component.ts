import { Component, OnInit, Input } from '@angular/core';
import { Driver } from "app/models/driver";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 't4y-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss'],
  animations: [
  trigger('state', [
      state('folded', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('unfolded',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class DriverDetailComponent implements OnInit {

  @Input() driver : Driver;

  folded : boolean = true;

  constructor() { }

  ngOnInit() {
    console.log(this.driver)
  }

  fold() {
    this.folded = !this.folded;
  }

}
