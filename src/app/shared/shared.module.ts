import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MovingBarComponent } from './moving-bar/moving-bar.component';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';
import { RouterModule } from '@angular/router';
import { TwoColumsLayoutComponent } from './two-colums-layout/two-colums-layout.component';
import { LoadingComponent } from './loading/loading.component';
import { CursorComponent } from './cursor/cursor.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    MovingBarComponent,
    ScrollBarComponent,
    TwoColumsLayoutComponent,
    LoadingComponent,
    CursorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    MovingBarComponent,
    ScrollBarComponent,
    TwoColumsLayoutComponent,
    LoadingComponent,
    CursorComponent
  ]
})
export class SharedModule { }
