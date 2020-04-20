import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Config} from '../../../interfaces/config';
import {RestserviceService} from '../../../services/restservice.service';
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
    console.log('Result Showed..!');
  }

  changeHtmlElementById(lbl, val) {
    document.getElementById(lbl).innerHTML = val;
  }

}
