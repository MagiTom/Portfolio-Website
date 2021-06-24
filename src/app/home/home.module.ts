import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { BoardComponent } from './board/board.component';
import { SeeComponent } from './see/see.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeroComponent,
    HomeViewComponent,
    BoardComponent,
    SeeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeViewComponent
  ]
})
export class HomeModule { }
