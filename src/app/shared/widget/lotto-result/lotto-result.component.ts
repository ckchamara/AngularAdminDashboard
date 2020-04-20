import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Config} from '../../../interfaces/config';
import {RestserviceService} from '../../../services/restservice.service';

@Component({
  selector: 'app-lotto-result',
  templateUrl: './lotto-result.component.html',
  styleUrls: ['./lotto-result.component.scss']
})
export class LottoResultComponent implements OnInit {

  constructor() {
  }

  config: Config;

  ngOnInit(): void {

  }

  showResult() {
    console.log('Result Showed..!');
  }

}
