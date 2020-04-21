import { Injectable } from '@angular/core';
import {Config} from '../../interfaces/config';

@Injectable({
  providedIn: 'root'
})
export class LotteryComponentsService {
  public resultConfig: Config;

  public letter;
  public no1;
  public no2;
  public no3;
  public no4;
  public no5;
  public no6;


  constructor() { }

  setResultConfig(data) {
    this.resultConfig = data;
  }

  setLotteryFormValues(letter, no1, no2, no3, no4, no5, no6) {
    this.letter = letter;
    this.no1 = no1;
    this.no2 = no2;
    this.no3 = no3;
    this.no4 = no4;
    this.no5 = no5;
    this.no6 = no6;
  }

}
