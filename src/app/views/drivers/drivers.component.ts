import { Component, OnInit } from '@angular/core';
import { DriversService } from "app/services/drivers.service";
import { Driver } from "app/models/driver";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  list : Driver[];

  constructor(private driversService : DriversService) { }

  ngOnInit() {
    this.driversService.list()
      .subscribe(resp => this.list = resp);
  }

}
