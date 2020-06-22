import { Component, OnInit } from '@angular/core';
import {Prizetable} from '../../interfaces/prizetable';
import {ActivatedRoute, Router} from '@angular/router';

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
  selector: 'app-dhana-nidhanaya',
  templateUrl: './dhana-nidhanaya.component.html',
  styleUrls: ['./dhana-nidhanaya.component.scss']
})
export class DhanaNidhanayaComponent implements OnInit {


  lotteryOptions = {};

  reqBody = {
    name: 'dhananidhanaya',
    id: 321,
    lotteryElementCount: 5
  };
  constructor(route: ActivatedRoute, private router: Router) {
    // https://stackoverflow.com/questions/41678356/router-navigate-does-not-call-ngoninit-when-same-page
    route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      this.lotteryOptions = this.reqBody;
    });
  }


  displayedColumns: string[] = ['position', 'pattern', 'prize'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.lotteryOptions = this.reqBody;
  }

}
