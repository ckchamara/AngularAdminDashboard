import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-pop-up-dialog-viewer',
  templateUrl: './config-pop-up-dialog-viewer.component.html',
  styleUrls: ['./config-pop-up-dialog-viewer.component.scss']
})
export class ConfigPopUpDialogViewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   myFunction() {
    const copyText = document.getElementById('myInput') as HTMLInputElement;
    copyText.select();
    document.execCommand('copy');
  }

  setFtpUrl() {
    document.getElementById('');
  }

  changeHtmlElementById(lbl, val) {
    document.getElementById(lbl).innerHTML = val;
  }
}
