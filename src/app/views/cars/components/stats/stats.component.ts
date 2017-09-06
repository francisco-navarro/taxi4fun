import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'y4f-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Coche A' },
    { data: [120, 455, 100, 340], label: 'Coche B' },
    { data: [45, 67, 800, 500], label: 'Coche C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  onChartClick(event) {
    console.log(event);
  }

}
