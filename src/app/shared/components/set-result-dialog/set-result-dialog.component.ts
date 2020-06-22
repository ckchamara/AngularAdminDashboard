import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-set-result-dialog',
  templateUrl: './set-result-dialog.component.html',
  styleUrls: ['./set-result-dialog.component.scss']
})
export class SetResultDialogComponent implements OnInit {

  // constructor() { }

  constructor(private activatedRoute: ActivatedRoute) {
    const a = activatedRoute.pathFromRoot;
    console.log(a);
  }

  // constructor(private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.queryParams.subscribe(params => {
  //     const date = params.startdate;
  //     console.log(date); // Print the parameter to the console.
  //   });
  // }

  ngOnInit(): void {
  }

}
