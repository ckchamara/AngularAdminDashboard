import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SetConfigDialogComponent} from '../../components/set-config-dialog/set-config-dialog.component';
import {SetResultDialogComponent} from '../../components/set-result-dialog/set-result-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lotto-config-header',
  templateUrl: './lotto-config-button-header.component.html',
  styleUrls: ['./lotto-config-button-header.component.scss']
})
export class LottoConfigButtonHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
  }

  openConfigDialog() {
    const dialogRef = this.dialog.open(SetConfigDialogComponent);
    console.log(this.router.url.replace('/', ''));
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    //   this.activatedRoute.url.subscribe(ufrl => {
    //     // ufrl[]
    //   });
    //   console.log(this.activatedRoute.url);
    // });
  }

  openSetResultDialog() {
    const dialogRef = this.dialog.open(SetResultDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
