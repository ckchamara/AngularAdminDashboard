import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SetResultDialogComponent} from '../../components/set-result-dialog/set-result-dialog.component';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lotto-config-header',
  templateUrl: './lotto-config-button-header.component.html',
  styleUrls: ['./lotto-config-button-header.component.scss']
})
export class LottoConfigButtonHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router, private http: HttpClient) {
  }

  code: any;

  ngOnInit(): void {
  }

  getConfigFileForLottery() {
    const lotteryNameByUrl = this.router.url;
    console.log(lotteryNameByUrl + 'hgfhgfg');
    this.http.get<any>('http://localhost:9090/db/returnConfigFile' + lotteryNameByUrl).subscribe(data => {
      this.code = data;
    });
  }


  openSetResultDialog() {
    const dialogRef = this.dialog.open(SetResultDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
