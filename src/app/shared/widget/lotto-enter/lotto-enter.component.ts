import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Config} from '../../../interfaces/config';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RestserviceService} from '../../../services/restservice.service';
import {LotteryComponentsService} from '../../../services/sharedService/lottery-components.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lotto-enter',
  templateUrl: './lotto-enter.component.html',
  styleUrls: ['./lotto-enter.component.scss']
})
export class LottoEnterComponent implements OnInit {

  constructor(agc: RestserviceService, private lotteryComponentsService: LotteryComponentsService) {
    this.httpclientservice = agc;
  }

  myForm: FormGroup;
  httpclientservice: RestserviceService;
  myMap = new Map();

  @Output() myEvent = new EventEmitter();
  @Input() lotteryOptions = {};

  config: Config;
  drawNo: any;

  ngOnInit(): void {
    const fd: FormBuilder = new FormBuilder();
    this.myForm = fd.group({
      letter: '',
      no1: '',
      no2: '',
      no3: '',
      no4: '',
      no5: '',
      no6: ''
    });

    // this.setLatestResultValues(this.lotteryOptions);
    this.disableForms(this.lotteryOptions);
  }

  // setLatestResultValues(lotteryOptions) {
  //   this.changeHtmlElementById('index1', !lotteryOptions.index1 ? null : lotteryOptions.index1);
  //   this.changeHtmlElementById('index2', !lotteryOptions.index2 ? null : lotteryOptions.index2);
  //   this.changeHtmlElementById('index3', !lotteryOptions.index3 ? null : lotteryOptions.index3);
  //   this.changeHtmlElementById('index4', !lotteryOptions.index4 ? null : lotteryOptions.index4);
  //   this.changeHtmlElementById('index5', !lotteryOptions.index5 ? null : lotteryOptions.index5);
  //   this.changeHtmlElementById('index6', !lotteryOptions.index6 ? null : lotteryOptions.index6);
  //   this.changeHtmlElementById('index7', !lotteryOptions.index7 ? null : lotteryOptions.index7);
  // }

  disableForms(lotteryOptions) {
    const availableForms = 7;
    switch (availableForms - lotteryOptions.lotteryElementCount) {
      case 1: {
        this.myForm.controls.no6.disable();
      }
        break;
      case 2: {
        this.myForm.controls.no6.disable();
        this.myForm.controls.no5.disable();
      }
        break;
      case 3: {
        this.myForm.controls.no6.disable();
        this.myForm.controls.no5.disable();
        this.myForm.controls.no4.disable();
      }
        break;
    }
  }

  onSubmit(value: string): void {
    console.log('you submited value ', value);
  }

  buttonClick(): void {
    this.showheros(this.lotteryOptions);
    console.log(this.myForm.value.letter);
    console.log(this.myForm.value.no1);
    console.log(this.myForm.value.no2);
    console.log(this.myForm.value.no3);
    console.log(this.myForm.value.no4);
    this.getResultValues(this.lotteryOptions);
  }

  getResultValues(lotteryOptions) {
    const reqBody = {
      lotteryName: lotteryOptions.name,
      drawNo: this.drawNo,
    };
    this.httpclientservice.addHero('http://localhost:9090/db/retriveDoc', reqBody)
      .subscribe(configRespond => {
        console.log(configRespond);
        // const obj = JSON.parse(configRespond);
        // console.log(JSON.parse(configRespond));
        this.changeHtmlElementById('index1', !configRespond.index1 ? null : configRespond.index1);
        this.changeHtmlElementById('index2', !configRespond.index2 ? null : configRespond.index2);
        this.changeHtmlElementById('index3', !configRespond.index3 ? null : configRespond.index3);
        this.changeHtmlElementById('index4', !configRespond.index4 ? null : configRespond.index4);
        this.changeHtmlElementById('index5', !configRespond.index5 ? null : configRespond.index5);
        this.changeHtmlElementById('index6', !configRespond.index6 ? null : configRespond.index6);
        this.changeHtmlElementById('index7', !configRespond.index7 ? null : configRespond.index7);
      });
  }

  // const reqBody = {
  // name: lotteryOptions.name,
  // id: lotteryOptions.id,
  // positions: [
  //   { 1: this.myForm.value.letter },
  //   { 2: this.myForm.value.no1 },
  //   { 3: this.myForm.value.no2 },
  //   { 4: this.myForm.value.no3 },
  //   { 5: this.myForm.value.no4 }
  // ]
  showheros(lotteryOptions) {
    const reqBody = {
      name: lotteryOptions.name,
      id: lotteryOptions.id,
      drawNo: this.drawNo,
      positions: this.putLotteryPositionsByElementCount(lotteryOptions.lotteryElementCount)
    };
    this.httpclientservice.addHero('http://localhost:9090/lottery/checkRewardAsJson', reqBody)
      .subscribe(configResponce => {
        this.lotteryComponentsService.setResultConfig(configResponce);

        this.lotteryComponentsService.setLotteryFormValues(
          this.myForm.value.letter,
          this.myForm.value.no1,
          this.myForm.value.no2,
          this.myForm.value.no3,
          this.myForm.value.no4,
          this.myForm.value.no5,
          this.myForm.value.no6
        );

        console.log(configResponce);
        this.myEvent.emit(null);
      });
  }


  putLotteryPositionsByElementCount(index): any {
    this.myMap.set(1, this.myForm.value.letter);
    this.myMap.set(2, this.myForm.value.no1);
    this.myMap.set(3, this.myForm.value.no2);
    this.myMap.set(4, this.myForm.value.no3);
    this.myMap.set(5, this.myForm.value.no4);
    this.myMap.set(6, this.myForm.value.no5);
    this.myMap.set(7, this.myForm.value.no6);

    const NAMES = [];
    for (let i = 1; i <= index; i++) {
      let temp;
      switch (i) {
        case 1:
          temp = {1: this.myMap.get(i)};
          break;
        case 2:
          temp = {2: this.myMap.get(i)};
          break;
        case 3:
          temp = {3: this.myMap.get(i)};
          break;
        case 4:
          temp = {4: this.myMap.get(i)};
          break;
        case 5:
          temp = {5: this.myMap.get(i)};
          break;
        case 6:
          temp = {6: this.myMap.get(i)};
          break;
        case 7:
          temp = {7: this.myMap.get(i)};
          break;
      }
      NAMES.push(temp);
    }
    return NAMES;
  }

  changeHtmlElementById(lbl, val) {
    document.getElementById(lbl).innerHTML = val;
  }


}
