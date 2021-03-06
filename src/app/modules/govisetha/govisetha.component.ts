import { Component, OnInit } from '@angular/core';
import {Prizetable} from '../../interfaces/prizetable';
import {LotteryComponentsService} from '../../services/sharedService/lottery-components.service';


const ELEMENT_DATA: Prizetable[] = [
  {position: 1, pattern: 'Letter and 4 Numbers Correct', prize: 'Rs. 0.00'},
  {position: 2, pattern: '4 Numbers Correct', prize: 'Rs. 1,000,000.00'},
  {position: 3, pattern: 'Letter and Any 3 Numbers Correct', prize: 'Rs. 100,000.00'},
  {position: 4, pattern: 'Any 3 Numbers Correct', prize: 'Rs. 2,000.00'},
  {position: 5, pattern: 'Letter and Any 2 Numbers Correct ', prize: 'Rs. 1,000.00'},
  {position: 6, pattern: 'Any 2 Numbers Correct', prize: 'Rs. 100.00'},
  {position: 7, pattern: 'Letter and Any Number Correct', prize: 'Rs. 40.00'},
  {position: 8, pattern: 'Any Number Correct', prize: 'Rs. 20.00'},
  {position: 9, pattern: 'Letter Correct', prize: 'Rs. 20.00'}
];

@Component({
  selector: 'app-govisetha',
  templateUrl: './govisetha.component.html',
  styleUrls: ['./govisetha.component.scss']
})
export class GovisethaComponent implements OnInit {

  lotteryOptions = {};

  reqBody = {
    name: 'govisetha',
    id: 321,
    lotteryElementCount: 5,
    index1: 'J',
    index2: '03',
    index3: '20',
    index4: '27',
    index5: '62'
  };
  constructor() { }


  displayedColumns: string[] = ['position', 'pattern', 'prize'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.lotteryOptions = this.reqBody;
  }

}
