import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SetConfigDialogComponent} from '../../components/set-config-dialog/set-config-dialog.component';
import {SetResultDialogComponent} from "../../components/set-result-dialog/set-result-dialog.component";

@Component({
  selector: 'app-lotto-config-header',
  templateUrl: './lotto-config-button-header.component.html',
  styleUrls: ['./lotto-config-button-header.component.scss']
})
export class LottoConfigButtonHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openConfigDialog() {
    const dialogRef = this.dialog.open(SetConfigDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSetResultDialog() {
    const dialogRef = this.dialog.open(SetResultDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
