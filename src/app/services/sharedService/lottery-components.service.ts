import { Injectable } from '@angular/core';
import {Config} from '../../interfaces/config';

@Injectable({
  providedIn: 'root'
})
export class LotteryComponentsService {
  public resultConfig: Config;
  public  formData = {};

  constructor() { }

  setResultConfig(data) {
    this.resultConfig = data;
  }

  setFormData(data) {
    this.formData = data;
  }

}
