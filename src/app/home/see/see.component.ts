import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fadeBottom, fadeUp } from '../animations';

@Component({
  selector: 'app-see',
  templateUrl: './see.component.html',
  styleUrls: ['./see.component.scss'],
  animations: [
    fadeUp,
    fadeBottom
  ]
})
export class SeeComponent implements AfterViewInit {

  @ViewChild('img1') img1:ElementRef;
  
  constructor() { }

  ngAfterViewInit(): void {

  }

  get image1(){
    return this.img1.nativeElement;
  }
}
