import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Config} from '../../../interfaces/config';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RestserviceService} from '../../../services/restservice.service';
import {LotteryComponentsService} from '../../../services/sharedService/lottery-components.service';

@Component({
  selector: 'app-lotto-enter',
  templateUrl: './lotto-enter.component.html',
  styleUrls: ['./lotto-enter.component.scss']
})
export class LottoEnterComponent implements OnInit {

  myForm: FormGroup;
  httpclientservice: RestserviceService;
  @Output() myEvent = new EventEmitter();
  @Input() lotteryOptions = {};

  constructor(agc: RestserviceService, private lotteryComponentsService: LotteryComponentsService) {
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
      no4: '',
      no5: ''
    });
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
        { 5: this.myForm.value.no4 }
        ]
    };

    this.httpclientservice.addHero('http://localhost:9090/lottery/checkreward', reqBody)
      .subscribe(configResponce => {
        this.lotteryComponentsService.setResultConfig(configResponce);

        this.lotteryComponentsService.setLotteryFormValues(
          this.myForm.value.letter,
          this.myForm.value.no1,
          this.myForm.value.no2,
          this.myForm.value.no3,
          this.myForm.value.no4,
          this.myForm.value.no5);

        console.log(configResponce);
        this.myEvent.emit(null);
      });
  }


}
