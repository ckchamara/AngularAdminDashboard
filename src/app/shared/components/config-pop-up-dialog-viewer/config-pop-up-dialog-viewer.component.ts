import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-config-pop-up-dialog-viewer',
  templateUrl: './config-pop-up-dialog-viewer.component.html',
  styleUrls: ['./config-pop-up-dialog-viewer.component.scss']
})
export class ConfigPopUpDialogViewerComponent implements OnInit {

  constructor(private router: Router) {
  }

  url = 'ftp://192.168.229.81/Projects/lottoservice/src/config' + this.router.url;

  ngOnInit(): void {
    this.changeHtmlElementById('url', this.url);
    this.changeHtmlElementById('title', 'FTP Configuration File For ' + this.router.url.replace('/', ''));

  }

  changeHtmlElementById(lbl, val) {
    document.getElementById(lbl).innerHTML = val;
  }
}
