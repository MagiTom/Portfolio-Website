import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { fadeIn, fadeInUp, fromOpacity, lengthening, lengthening2 } from 'src/app/home/animations';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss'],
  animations: [
    lengthening,
    lengthening2,
    fadeIn,
    fadeInUp,
  ]
})
export class AboutViewComponent implements AfterViewChecked {
 
  startAnimation:boolean=false;

  constructor() { }

  ngAfterViewChecked(): void {
 
  setTimeout(()=> {
    this.startAnimation = true;
}, 500);
  console.log(this.startAnimation)
  }


}
