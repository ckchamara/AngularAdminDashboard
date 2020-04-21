import {Component, Input, OnInit} from '@angular/core';
import {LotteryComponentsService} from '../../../services/sharedService/lottery-components.service';

@Component({
  selector: 'app-lotto-result',
  templateUrl: './lotto-result.component.html',
  styleUrls: ['./lotto-result.component.scss']
})
export class LottoResultComponent implements OnInit {
  public lettercolor: any;
  public no1color: any;
  public no2color: any;
  public no3color: any;
  public no4color: any;
  public no5color: any;


  constructor(private lotteryComponentsService: LotteryComponentsService) {
  }

  ngOnInit(): void {

  }

  showResult() {
    this.changeResultBoxColors('white');

    this.changeHtmlElementById('rulename', this.lotteryComponentsService.resultConfig.ruleName);
    this.changeHtmlElementById('reward', this.lotteryComponentsService.resultConfig.reward);

    this.changeHtmlElementById('letter', this.lotteryComponentsService.letter);
    this.changeHtmlElementById('no1', this.lotteryComponentsService.no1);
    this.changeHtmlElementById('no2', this.lotteryComponentsService.no2);
    this.changeHtmlElementById('no3', this.lotteryComponentsService.no3);
    this.changeHtmlElementById('no4', this.lotteryComponentsService.no4);
    this.changeHtmlElementById('no5', this.lotteryComponentsService.no5);

    this.lotteryComponentsService.resultConfig.matchingPositions.forEach(matchingPosition => {
      switch (matchingPosition) {
        case 1 : this.lettercolor = 'orangered';
                 break;
        case 2 : this.no1color = 'orangered';
                 break;
        case 3 : this.no2color = 'orangered';
                 break;
        case 4 : this.no3color = 'orangered';
                 break;
        case 5 : this.no4color = 'orangered';
                 break;
        case 6 : this.no5color = 'orangered';
                 break;
      }

    });
    console.log('Result Showed..!');
  }

  changeHtmlElementById(lbl, val) {
    document.getElementById(lbl).innerHTML = val;
  }

  changeResultBoxColors(color) {
    this.lettercolor = color;
    this.no1color = color;
    this.no2color = color;
    this.no3color = color;
    this.no4color = color;
    this.no5color = color;
  }

}
