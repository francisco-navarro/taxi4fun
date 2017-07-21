import { Component, OnInit, Input } from '@angular/core';
import { Driver } from "app/models/driver";

@Component({
  selector: 't4y-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {

  @Input() driver : Driver;

  constructor() { }

  ngOnInit() {
    console.log(this.driver)
  }

}
