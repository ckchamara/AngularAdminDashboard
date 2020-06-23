import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatCardModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {AreaComponent} from './widget/area/area.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {CardComponent} from './widget/card/card.component';
import {PieComponent} from './widget/pie/pie.component';
import {LottoEnterComponent} from './widget/lotto-enter/lotto-enter.component';
import {RestserviceService} from '../services/restservice.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LottoResultComponent} from './widget/lotto-result/lotto-result.component';
import {LotteryComponentsService} from '../services/sharedService/lottery-components.service';
import {LottoConfigButtonHeaderComponent} from './widget/lotto-config-button-header/lotto-config-button-header.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SetResultDialogComponent } from './components/set-result-dialog/set-result-dialog.component';
import {HighlightModule} from 'ngx-highlightjs';
import {HttpClientModule} from '@angular/common/http';
import { ConfigViewerComponent } from './components/config-viewer/config-viewer.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    LottoEnterComponent,
    LottoResultComponent,
    LottoConfigButtonHeaderComponent,
    SetResultDialogComponent,
    ConfigViewerComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    HighlightModule,
    HttpClientModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    LottoEnterComponent,
    LottoResultComponent,
    LottoConfigButtonHeaderComponent,
    SetResultDialogComponent
  ],
  providers: [
    RestserviceService,
    LotteryComponentsService
  ]
})
export class SharedModule {
}
