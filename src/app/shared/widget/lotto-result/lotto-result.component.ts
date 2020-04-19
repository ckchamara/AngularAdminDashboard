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

  myForm: FormGroup;
  httpclientservice: RestserviceService;
  @Input() lotteryOptions = {};

  constructor(agc: RestserviceService) {
    this.httpclientservice = agc;
  }

  config: Config;

  ngOnInit(): void {
    const fd: FormBuilder = new FormBuilder();
    this.myForm = fd.group({
      letter: '',
      no1: '',
      no2: '',
      no3: '',
      no4: ''
    });
  }

  onSubmit(value: string): void {
    console.log('you submited value ', value);
  }

  buttonClick(): void {
    console.log(this.myForm.value.letter);
    console.log(this.myForm.value.no1);
    console.log(this.myForm.value.no2);
    console.log(this.myForm.value.no3);
    console.log(this.myForm.value.no4);
    this.showheros(this.lotteryOptions);
  }


  showheros(lotteryOptions) {
    const reqBody = {
      name: lotteryOptions.name,
      id: 321,
      positions: [
        { 1: this.myForm.value.letter },
        { 2: this.myForm.value.no1 },
        { 3: this.myForm.value.no2 },
        { 4: this.myForm.value.no3 },
        { 5: this.myForm.value.no4 }]
    };
    this.httpclientservice.addHero('http://localhost:9090/lottery/checkreward', reqBody)
      .subscribe(configResponce => {
        console.log(configResponce);
      });
  }

  changeHtmlElementById(lbl, val) {
    document.getElementById(lbl).innerHTML = val;
  }


}
