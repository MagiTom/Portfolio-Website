import { Component, Input, OnInit } from '@angular/core';

export interface movingBar{
  info:string;
  link:string;
}

@Component({
  selector: 'app-moving-bar',
  templateUrl: './moving-bar.component.html',
  styleUrls: ['./moving-bar.component.scss']
})
export class MovingBarComponent implements OnInit {

  @Input() info:movingBar[];

  constructor() { }

  ngOnInit(): void {
  }

}
