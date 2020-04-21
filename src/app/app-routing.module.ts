import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import {MahajanaSampathaComponent} from './modules/mahajana-sampatha/mahajana-sampatha.component';
import {GovisethaComponent} from './modules/govisetha/govisetha.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children : [{
    path: '',
    component: DashboardComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'mahajana_sampatha',
    component: MahajanaSampathaComponent
  },
  {
    path: 'govisetha',
    component: GovisethaComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
