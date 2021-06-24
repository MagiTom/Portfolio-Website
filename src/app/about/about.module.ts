import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutViewComponent } from './about-view/about-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AboutViewComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
