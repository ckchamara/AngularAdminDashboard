import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule, MatDividerModule, MatCardModule, MatTableModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import {MahajanaSampathaComponent} from '../../modules/mahajana-sampatha/mahajana-sampatha.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {GovisethaComponent} from '../../modules/govisetha/govisetha.component';
import {DhanaNidhanayaComponent} from '../../modules/dhana-nidhanaya/dhana-nidhanaya.component';
import {JathikaSampathaComponent} from '../../modules/jathika-sampatha/jathika-sampatha.component';
import {SevanaComponent} from '../../modules/sevana/sevana.component';
import {WasanaSampathaComponent} from '../../modules/wasana-sampatha/wasana-sampatha.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    MahajanaSampathaComponent,
    GovisethaComponent,
    DhanaNidhanayaComponent,
    JathikaSampathaComponent,
    SevanaComponent,
    WasanaSampathaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MDBBootstrapModule.forRoot(),
    MatTableModule
  ] ,
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
