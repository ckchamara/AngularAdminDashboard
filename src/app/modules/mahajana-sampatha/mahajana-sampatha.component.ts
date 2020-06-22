import { Component, OnInit } from '@angular/core';
import {Prizetable} from '../../interfaces/prizetable';
import {LotteryComponentsService} from '../../services/sharedService/lottery-components.service';


const ELEMENT_DATA: Prizetable[] = [
  {position: 1, pattern: 'Letter and 6th 6 Numbers Correct ', prize: 'Rs. Super Prize..!'},
  {position: 2, pattern: '6th 6 Numbers Correct ', prize: 'Rs. 2,000,000.00'},
  {position: 3, pattern: '6th 5 Numbers Correct ', prize: 'Rs. 100,000.00'},
  {position: 4, pattern: '6th 4 Numbers Correct ', prize: 'Rs. 10,000.00'},
  {position: 5, pattern: '6th 3 Numbers Correct ', prize: 'Rs. 1,000.00'},
  {position: 6, pattern: '6th 2 Numbers Correct ', prize: 'Rs. 100.00'},
  {position: 7, pattern: '6th Number Correct ', prize: 'Rs. 20.00'},
  {position: 8, pattern: '5th 5 Numbers Correct ', prize: 'Rs. 10,000.00'},
  {position: 9, pattern: '4th 4 Numbers Correct ', prize: 'Rs. 1,000.00'},
  {position: 10, pattern: '3rd 3 Numbers Correct  ', prize: 'Rs. 100.00'},
  {position: 11, pattern: '2nd 2 Numbers Correct  ', prize: 'Rs. 50.00'},
  {position: 12, pattern: 'Letter Correct  ', prize: 'Rs. 20.00'}
];

@Component({
  selector: 'app-mahajana-sampatha',
  templateUrl: './mahajana-sampatha.component.html',
  styleUrls: ['./mahajana-sampatha.component.scss'],
})
export class MahajanaSampathaComponent implements OnInit {

  lotteryOptions = {};

  reqBody = {
    name: 'mahajanasampatha',
    id: 321 ,
    lotteryElementCount: 7
  };
  constructor() { }


  displayedColumns: string[] = ['position', 'pattern', 'prize'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.lotteryOptions = this.reqBody;
  }

}
