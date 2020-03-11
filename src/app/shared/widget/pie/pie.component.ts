import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

    Highcharts = Highcharts;
    chartOptions = {};
  @Input() pieChartOptions = {};
    constructor() { }
  
    ngOnInit(): void {
      this.chartOptions = this.pieChartOptions;
  
      HC_exporting(this.Highcharts);
    }

}
