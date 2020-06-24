import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {HighlightResult} from 'ngx-highlightjs';
import {ConfigPopUpDialogViewerComponent} from '../config-pop-up-dialog-viewer/config-pop-up-dialog-viewer.component';


@Component({
  selector: 'app-config-viewer',
  templateUrl: './config-viewer.component.html',
  styleUrls: ['./config-viewer.component.scss']
})
export class ConfigViewerComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog) {
    this.http.get<any>('http://localhost:9090/db/returnConfigFile' + this.router.url).subscribe(data => {
      this.data = data.toString();
      console.log(data);
    });
  }
  response: HighlightResult;

  // tslint:disable-next-line:max-line-length
data = 'name: LotteryName\n' +
  'id: 321\n' +
  'specialCharactors:\n' +
  '  - image: lagna-abc\n' +
  '    uri: urlToImage\n' +
  '\n' +
  'positions:\n' +
  '  - 1: letter\n' +
  '  - 2: number\n' +
  '  - 3: number\n' +
  '  - 4: number\n' +
  '  - 5: number\n' +
  '  - 6: number\n' +
  '  - 7: number\n' +
  '\n' +
  'rules:\n' +
  '  - rule: Letter and 6th 6 Numbers Correct\n' +
  '    positions:\n' +
  '      - 1\n' +
  '      - 2\n' +
  '      - 3\n' +
  '      - 4\n' +
  '      - 5\n' +
  '      - 6\n' +
  '      - 7\n' +
  '    level: 1\n' +
  '    nonFixedPositions:\n' +
  '    positionalValue: true\n' +
  '    nonFixedType:\n' +
  '    matchingCount: 7\n' +
  '    prize: 10000000.00  #10,000,000.00\n' +
  '\n' +
  '  - rule: 6th 6 Numbers Correct\n' +
  '    positions:\n' +
  '      - 2\n' +
  '      - 3\n' +
  '      - 4\n' +
  '      - 5\n' +
  '      - 6\n' +
  '      - 7\n' +
  '    level: 2\n' +
  '    positionalValue: true\n' +
  '    matchingCount: 6\n' +
  '    prize: 2000000.00  #2,000,000.00\n' +
  '\n' +
  '  - rule: 6th 5 Numbers Correct\n' +
  '    positions:\n' +
  '      - 3\n' +
  '      - 4\n' +
  '      - 5\n' +
  '      - 6\n' +
  '      - 7\n' +
  '    level: 3\n' +
  '    positionalValue: true\n' +
  '    matchingCount: 5\n' +
  '    prize: 100000.00  #100,000.00\n' +
  '\n' +
  '  - rule: 6th 4 Numbers Correct\n' +
  '    positions:\n' +
  '      - 4\n' +
  '      - 5\n' +
  '      - 6\n' +
  '      - 7\n' +
  '    level: 4\n' +
  '    positionalValue: true\n' +
  '    matchingCount: 4\n' +
  '    prize: 10000.00  #10,000.00\n' +
  '\n' +
  '  - rule: 5th 5 Numbers Correct\n' +
  '    positions:\n' +
  '      - 2\n' +
  '      - 3\n' +
  '      - 4\n' +
  '      - 5\n' +
  '      - 6\n' +
  '    level: 4\n' +
  '    positionalValue: true\n' +
  '    matchingCount: 5\n' +
  '    prize: 10000.00  #10,000.00\n' +
  '\n' +
  '  - rule: 6th 3 Numbers Correct\n' +
  '    positions:\n' +
  '      - 5\n' +
  '      - 6\n' +
  '      - 7\n' +
  '    level: 5\n' +
  '    positionalValue: true\n' +
  '    matchingCount: 3\n' +
  '    prize: 1000.00  #1,000.00\n' +
  '\n' +
  '  - rule: 4th 4 Numbers Correct\n' +
  '    positions:\n' +
  '      - 2\n' +
  '      - 3\n' +
  '      - 4\n' +
  '      - 5\n' +
  '    level: 5\n' +
  '    positionalValue: true\n' +
  '    matchingCount: 4\n' +
  '    prize: 1000.00  #1,000.00\n' +
  '\n' +
  '  - rule: 6th 2 Numbers Correct\n' +
  '    positions:\n' +
  '      - 6\n' +
  '      - 7\n' +
  '    level: 6\n' +
  '    positionalValue: true\n' +
  '    matchingCount: 2\n' +
  '    prize: 100.00  #100.00\n' +
  '\n' +
  '  - rule: 3th 3 Numbers Correct\n' +
  '    positions:\n' +
  '      - 2\n' +
  '      - 3\n' +
  '      - 4\n' +
  '    level: 6\n' +
  '    positionalValue: true\n' +
  '    matchingCount: 3\n' +
  '    prize: 100.00  #1,00.00\n' +
  '\n' +
  '  - rule: 2th 2 Numbers Correct\n' +
  '    positions:\n' +
  '      - 2\n' +
  '      - 3\n' +
  '    level: 7\n' +
  '    positionalValue: true\n' +
  '    matchingCount: 2\n' +
  '    prize: 50.00  #50.00\n' +
  '\n' +
  '  - rule: 6th Number Correct\n' +
  '    positions:\n' +
  '      - 7\n' +
  '    level: 8\n' +
  '    positionalValue: true\n' +
  '    matchingCount: 1\n' +
  '    prize: 20.00  #20.00\n' +
  '\n' +
  '  - rule: Letter Correct\n' +
  '    positions:\n' +
  '      - 1\n' +
  '    level: 8\n' +
  '    positionalValue: true\n' +
  '    matchingCount: 1\n' +
  '    prize: 20.00  #20.00\n' +
  '\n';

  ngOnInit(): void {

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

  openDialog() {
    this.dialog.open(ConfigPopUpDialogViewerComponent);
  }

}
