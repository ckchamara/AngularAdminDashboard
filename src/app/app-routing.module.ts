import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import {MahajanaSampathaComponent} from './modules/mahajana-sampatha/mahajana-sampatha.component';
import {GovisethaComponent} from './modules/govisetha/govisetha.component';
import {DhanaNidhanayaComponent} from './modules/dhana-nidhanaya/dhana-nidhanaya.component';
import {JathikaSampathaComponent} from './modules/jathika-sampatha/jathika-sampatha.component';
import {SevanaComponent} from './modules/sevana/sevana.component';
import {WasanaSampathaComponent} from './modules/wasana-sampatha/wasana-sampatha.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children : [{
    path: '',
    component: MahajanaSampathaComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'mahajanaSampatha',
    component: MahajanaSampathaComponent
  },
    {
    path: 'govisetha',
    component: GovisethaComponent
  },
  {
    path: 'dhanaNidhanaya',
    component: DhanaNidhanayaComponent
  },
  {
    path: 'jathikaSampatha',
    component: JathikaSampathaComponent
  },
  {
    path: 'sevana',
    component: SevanaComponent
  },
  {
    path: 'wasanaSampatha',
    component: WasanaSampathaComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
