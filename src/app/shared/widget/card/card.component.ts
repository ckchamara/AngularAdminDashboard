import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
          chart: {
              type: 'area',
              backgroundColor: null,
              borderWidth: 0,
              margin: [2,2,2,2],
              height :60
          },
          title: {
              text: null
          },
          subtitle: {
              text: null
          },
          tooltip: {
              split: true,
              outside: true
          },
          legend: {
            enabled: false
          },
          credits: {
              enabled: false
          },
          exporting: {
              enabled: false
          },
          series: [{
              name: 'Asia',
              data: [502, 635, 809, 947, 1402, 3634, 4300]
          }]
      };

    HC_exporting(this.Highcharts);
  }


}
