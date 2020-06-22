import { Component, OnInit } from '@angular/core';
import {Prizetable} from '../../interfaces/prizetable';

const ELEMENT_DATA: Prizetable[] = [
  {position: 1, pattern: 'Letter and 6 Numbers Correct', prize: 'Rs. Super Prize..!'},
  {position: 2, pattern: '6 Numbers Correct ', prize: 'Rs. 2,000,000.00'},
  {position: 3, pattern: 'Last 5 Numbers Correct  ', prize: 'Rs. 100,000.00'},
  {position: 4, pattern: 'Last 4 Numbers Correct ', prize: 'Rs. 10,000.00'},
  {position: 5, pattern: 'Last 4 Numbers Correct ', prize: 'Rs. 1,000.00'},
  {position: 6, pattern: 'Last 4 Numbers Correct  ', prize: 'Rs. 50.00'},
  {position: 7, pattern: 'Last Number Correct ', prize: 'Rs. 20.00'},
  {position: 8, pattern: 'First 5 Numbers Correct ', prize: 'Rs. 10,000.00'},
  {position: 9, pattern: 'First 4 Numbers Correct ', prize: 'Rs. 1,000.00'},
  {position: 10, pattern: 'First 4 Numbers Correct  ', prize: 'Rs. 100.00'},
  {position: 11, pattern: 'First 4 Numbers Correct ', prize: 'Rs. 50.00'},
  {position: 12, pattern: 'Letter Correct', prize: 'Rs. 20.00'},
  {position: 13, pattern: '6 Numbers Correct', prize: 'Rs. 200.00'}
];
@Component({
  selector: 'app-jathika-sampatha',
  templateUrl: './jathika-sampatha.component.html',
  styleUrls: ['./jathika-sampatha.component.scss']
})
export class JathikaSampathaComponent implements OnInit {

  lotteryOptions = {};

  reqBody = {
    name: 'jathikasampatha',
    id: 321,
    lotteryElementCount: 7
  };
  constructor() { }


  displayedColumns: string[] = ['position', 'pattern', 'prize'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.lotteryOptions = this.reqBody;
  }

}
