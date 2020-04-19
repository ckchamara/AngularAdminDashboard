import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Config} from '../interfaces/config';

@Injectable({
  providedIn: "root"
})
export class RestserviceService {

  constructor(private http: HttpClient) { }


  addHero(url, reqBody): Observable<Config> {
    return this.http.post<Config>(url, reqBody).pipe(catchError((error) => {
      console.error('Error while calling the Rest Service', error);
      return throwError(error);
    }));
  }

  post(url, body) {
    return this.http.post(url, body)
      .pipe(map((res: Response) => {
        return res.text() || {};
      }))
      .pipe(catchError((error) => {
        console.error('Error while calling the Rest Service', error);
        return throwError(error);
      }));
  }
}
