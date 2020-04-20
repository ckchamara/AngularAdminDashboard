import {Component, Input, OnInit} from '@angular/core';
import {LotteryComponentsService} from '../../../services/sharedService/lottery-components.service';

@Component({
  selector: 'app-lotto-result',
  templateUrl: './lotto-result.component.html',
  styleUrls: ['./lotto-result.component.scss']
})
export class LottoResultComponent implements OnInit {

  constructor(private lotteryComponentsService: LotteryComponentsService) {
  }

  ngOnInit(): void {

  }

  showResult() {
    this.changeHtmlElementById('rulename', this.lotteryComponentsService.resultConfig.ruleName);
    this.changeHtmlElementById('reward', this.lotteryComponentsService.resultConfig.reward);

    this.changeHtmlElementById('letter', this.lotteryComponentsService.letter);
    this.changeHtmlElementById('no1', this.lotteryComponentsService.no1);
    this.changeHtmlElementById('no2', this.lotteryComponentsService.no2);
    this.changeHtmlElementById('no3', this.lotteryComponentsService.no3);
    this.changeHtmlElementById('no4', this.lotteryComponentsService.no4);
    this.changeHtmlElementById('no5', this.lotteryComponentsService.no5);

    this.lotteryComponentsService.resultConfig.matchingPositions.forEach(matchingPosition => {
      if (matchingPosition.equals(1)) {

      }
    });
    console.log('Result Showed..!');
  }

  changeHtmlElementById(lbl, val) {
    document.getElementById(lbl).innerHTML = val;
  }

}
