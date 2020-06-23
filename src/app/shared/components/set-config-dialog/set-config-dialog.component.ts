import {Component, Inject, OnInit} from '@angular/core';
import {HighlightResult} from 'ngx-highlightjs';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-config-dialog',
  templateUrl: './set-config-dialog.component.html',
  styleUrls: ['./set-config-dialog.component.scss']
})
export class SetConfigDialogComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog) {
   // this.code = data;
  }
  response: HighlightResult;

  // tslint:disable-next-line:max-line-length
  data = `{name: govisetha, id: 361, specialCharactors: [{image: lagna-abc, uri: urlToImage}], positions: [{'1': letter}, {'2': number}, {'3': number}, {'4': number}, {'5': number}], rules: [{rule: Letter and 4 Numbers Correct, positions: [1], nonFixedPositions: [2, 3, 4, 5], level: 1, positionalValue: false, matchingCount: 5, prize: 10000000}, {rule: 4 Numbers Correct, positions: [2, 3, 4, 5], level: 2, positionalValue: true, matchingCount: 4, prize: 1000000}, {rule: Letter and any 3 numbers correct, positions: [1], nonFixedPositions: [2, 3, 4, 5], level: 3, positionalValue: false, nonFixedType: number, matchingCount: 4, prize: 100000}, {rule: Any 3 numbers correct, positions: null, nonFixedPositions: [2, 3, 4, 5], level: 4, positionalValue: false, nonFixedType: number, matchingCount: 3, prize: 2000}, {rule: Letter and any 2 numbers correct, positions: [1], nonFixedPositions: [2, 3, 4, 5], level: 5, positionalValue: true, nonFixedType: number, matchingCount: 3, prize: 1000}, {rule: Any 2 numbers correct, positions: null, nonFixedPositions: [2, 3, 4, 5], level: 6, positionalValue: true, nonFixedType: number, matchingCount: 2, prize: 100}, {rule: Letter and any number correct, positions: [1], nonFixedPositions: [2, 3, 4, 5], level: 8, positionalValue: true, nonFixedType: number, matchingCount: 2, prize: 40}, {rule: Any Number Correct, positions: null, nonFixedPositions: [2, 3, 4, 5], level: 4, positionalValue: true, nonFixedType: number, matchingCount: 1, prize: 20}, {rule: Letter correct, positions: [1], level: 5, positionalValue: true, matchingCount: 1, prize: 20}]}
`;

  ngOnInit(): void {
    console.log(this.data);
  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    };
  }

}
